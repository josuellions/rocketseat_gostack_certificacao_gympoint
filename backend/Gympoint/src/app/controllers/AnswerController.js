import * as Yup from 'yup';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import HelpOrders from '../models/HelpOrders';
import Students from '../models/Students';

import HelpanswerMail from '../jobs/helpanswerMail';
import Queue from '../../lib/Queue';

class AnswerController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrders.findAll({
      where: {
        answer_at: null,
      },
      limit: 10,
      offset: (page - 1) * 10,
      order: [['created_at', 'asc']],
      attributes: [
        'id',
        'created_at',
        'question',
        'answer_at',
        'answer',
        'student_id',
      ],
      include: [
        {
          model: Students,
          as: 'students',
          attributes: ['name', 'email', 'idade', 'peso', 'altura'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async update(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      id: Yup.number()
        .min(1)
        .required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations answer fails.' });
    }

    const schemaBody = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schemaBody.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations answer fails.' });
    }

    const helpOrders = await HelpOrders.findByPk(req.params.id);

    if (!helpOrders) {
      return res.status(400).json({ error: 'Invalid log data' });
    }

    const { answer } = req.body;
    const { id } = helpOrders;

    await helpOrders.update({
      where: {
        id,
      },
      answer,
      answer_at: new Date(),
    });

    /**
     * Notify Student is Help Answer
     */

    const helpanswer = await HelpOrders.findOne({
      where: {
        id,
      },
      attributes: ['created_at', 'question', 'answer_at', 'answer'],
      include: [
        {
          model: Students,
          as: 'students',
          attributes: ['name', 'email'],
        },
      ],
    });

    const { created_at, question } = helpanswer;
    const { name, email } = helpanswer.students;

    const formatedDateCreated = format(
      created_at,
      " dd ' de ' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    );

    // ENVIO NOTIFICAÇÃO EMAILL
    await Queue.add(HelpanswerMail.key, {
      name,
      email,
      formatedDateCreated,
      question,
      answer,
    });

    return res.status(200).json({ message: 'update performed' });
  }
}

export default new AnswerController();
