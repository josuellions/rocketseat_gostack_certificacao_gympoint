import * as Yup from 'yup';
import HelpOrders from '../models/HelpOrders';
import Students from '../models/Students';

class HelpOrdersController {
  async index(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .min(1)
        .required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations students fails.' });
    }
    const students = await Students.findByPk(req.params.id);

    if (!students) {
      return res.status(400).json({ error: 'Student not found.' });
    }

    const helpOrders = await HelpOrders.findAll({
      where: {
        student_id: students.id,
      },
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

  async store(req, res) {
    const schemaParams = Yup.object().shape({
      id: Yup.number()
        .min(1)
        .required(),
    });

    if (!(await schemaParams.isValid(req.params))) {
      return res.status(400).json({ error: 'Validations students fails.' });
    }

    const schemaBody = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schemaBody.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations question fails.' });
    }

    const students = await Students.findByPk(req.params.id);

    if (!students) {
      return res.status(400).json({ error: 'Student not found.' });
    }

    const { id, student_id, question } = await HelpOrders.create({
      student_id: students.id,
      question: req.body.question,
    });

    return res.json({ id, student_id, question });
  }
}

export default new HelpOrdersController();
