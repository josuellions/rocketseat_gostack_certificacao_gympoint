import * as Yup from 'yup';
import { parseISO, isBefore, addMonths, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Students from '../models/Students';
import Plans from '../models/Plans';
import Registrations from '../models/Registrations';

import Notification from '../schemas/Notification';

import RegistrationMail from '../jobs/registrationMail';
import Queue from '../../lib/Queue';

class RegistrationsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const registrations = await Registrations.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      order: [['start_date', 'asc']],
      include: [
        {
          model: Students,
          as: 'students',
          attributes: ['name', 'email', 'idade', 'peso', 'altura'],
        },
        {
          model: Plans,
          as: 'plans',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json(registrations);
  }

  async store(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const checkStudent = await Students.findByPk(student_id);

    if (!checkStudent) {
      return res.status(400).json({ error: 'Student does not exist.' });
    }

    const checkPlan = await Plans.findByPk(plan_id);

    if (!checkPlan) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }

    const checkResitration = await Registrations.findOne({
      where: {
        student_id,
      },
    });

    if (checkResitration) {
      return res.status(400).json({ error: 'Resitration exist.' });
    }

    const parseDate = parseISO(start_date);

    if (isBefore(parseDate, new Date())) {
      return res.status(400).json({ error: 'Past dates  are not is valid!' });
    }

    const parseEndDate = addMonths(parseDate, checkPlan.duration);

    const registration = await Registrations.create({
      student_id: checkStudent.id,
      plan_id: checkPlan.id,
      start_date,
      end_date: parseEndDate,
      price: checkPlan.price * checkPlan.duration,
    });

    const response = await Registrations.findOne({
      where: {
        id: registration.id,
      },
      attributes: [
        'id',
        'start_date',
        'end_date',
        'price',
        'student_id',
        'plan_id',
      ],
      include: [
        {
          model: Students,
          as: 'students',
          attributes: ['name', 'email', 'idade', 'peso', 'altura'],
        },
        {
          model: Plans,
          as: 'plans',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    /**
     * Notify Student is Registrations
     */

    const { name } = checkStudent;
    const { price } = registration;
    const { title } = checkPlan;

    const formatedDateStart = format(parseDate, " dd ' de ' MMMM 'de' yyyy", {
      locale: pt,
    });
    const formatedDateEnd = format(parseEndDate, " dd ' de ' MMMM 'de' yyyy", {
      locale: pt,
    });

    await Notification.create({
      content: `Olá, Seja bem vindo a Academia Gympoint, Sua Matrícula foi realizada com sucesso, Aluno: ${name}, no tipo de Plano ${title}, com Data inicio: ${formatedDateStart}, Data Final: ${formatedDateEnd}, valor: ${price}`,
      user: student_id,
    });

    // ENVIO NOTIFICAÇÃO EMAIL
    await Queue.add(RegistrationMail.key, {
      students: response.students,
      name,
      title,
      formatedDateStart,
      formatedDateEnd,
      price,
    });

    return res.json(response);
  }

  async update(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      student_id: Yup.number().required(),
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const checkStudent = await Students.findByPk(student_id);

    if (!checkStudent) {
      return res.status(400).json({ error: 'Student does not exist.' });
    }

    const checkPlan = await Plans.findByPk(plan_id);

    if (!checkPlan) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }

    const registration = await Registrations.findByPk(req.body.id);

    if (!registration) {
      return res.status(400).json({ erro: 'Registrations does not exist.' });
    }

    const parseDate = parseISO(start_date);

    if (isBefore(parseDate, new Date())) {
      return res.status(400).json({ error: 'Past dates  are not is valid!' });
    }

    const parseEndDate = addMonths(parseDate, checkPlan.duration);

    await registration.update({
      where: {
        id: registration.id,
      },
      plan_id: checkPlan.id,
      start_date,
      end_date: parseEndDate,
      price: checkPlan.price * checkPlan.duration,
    });

    const response = await Registrations.findOne({
      where: {
        id: registration.id,
      },
      attributes: [
        'id',
        'start_date',
        'end_date',
        'price',
        'student_id',
        'plan_id',
      ],
      include: [
        {
          model: Students,
          as: 'students',
          attributes: ['name', 'email', 'idade', 'peso', 'altura'],
        },
        {
          model: Plans,
          as: 'plans',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json(response);
  }

  async delete(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { id } = req.params;

    const registration = await Registrations.findByPk(id);

    if (!registration) {
      return res.status(400).json({ erro: 'Registrations does not exist.' });
    }

    await registration.update({
      where: {
        id,
      },
      canceled_at: new Date(),
    });

    return res.json({ message: 'Delete Registrations' });
  }
}

export default new RegistrationsController();
