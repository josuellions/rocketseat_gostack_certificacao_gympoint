import * as Yup from 'yup';
import { Op } from 'sequelize';
import { startOfDay, endOfDay, subDays } from 'date-fns';

import Students from '../models/Students';
import Registrations from '../models/Registrations';
import Checkins from '../models/Checkins';

class CheckinsController {
  async index(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .min(1)
        .required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { id } = req.params;

    const checkStudent = await Students.findByPk(id);

    if (!checkStudent) {
      return res.status(401).json({ error: 'Student not found.' });
    }

    const checkRegistrations = await Registrations.findOne({
      where: {
        student_id: checkStudent.id,
        canceled_at: null,
      },
    });

    if (!checkRegistrations) {
      return res.status(401).json({ error: 'Registrations not found.' });
    }

    const checkins = await Checkins.findAll({
      where: {
        student_id: id,
      },
      order: [['created_at', 'desc']],
      attributes: ['id', 'created_at', 'student_id'],
    });
    return res.json(checkins);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { id } = req.params;

    const checkStudent = await Students.findByPk(id);

    if (!checkStudent) {
      return res.json({ error: 'Student not found.' });
    }

    const checkRegistrations = await Registrations.findOne({
      where: {
        student_id: checkStudent.id,
        canceled_at: null,
      },
    });

    if (!checkRegistrations) {
      return res.status(401).json({ error: 'Registrations not found.' });
    }
    const endDate = endOfDay(new Date());
    const startDate = startOfDay(subDays(endDate, 7));

    const checkinsDays = await Checkins.findAll({
      where: {
        student_id: id,
        created_at: {
          [Op.and]: [
            {
              [Op.between]: [startDate, endDate],
            },
          ],
        },
      },
    });

    if (checkinsDays.length === 5) {
      return res.status(400).json({ error: 'Allowed check limit reached.' });
    }

    const checkins = await Checkins.create({
      student_id: id,
    });

    return res.json(checkins);
  }
}

export default new CheckinsController();
