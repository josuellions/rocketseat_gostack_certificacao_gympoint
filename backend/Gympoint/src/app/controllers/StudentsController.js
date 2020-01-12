import * as Yup from 'yup';
import { Op } from 'sequelize';
import User from '../models/User';
import Students from '../models/Students';

class StudentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    if (req.query.page === undefined) {
      const studentsAll = await Students.findAll({
        order: [['name', 'asc']],
        attributes: ['id', 'name', 'email', 'idade', 'peso', 'altura'],
      });

      return res.json(studentsAll);
    }
    const students = await Students.findAll({
      order: [['name', 'asc']],
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['id', 'name', 'email', 'idade', 'peso', 'altura'],
    });

    return res.json(students);
  }

  async store(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.number().required(),
      peso: Yup.number().required(),
      altura: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const studentsExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentsExists) {
      return res.status(400).json({ error: 'Students already exists.' });
    }

    const { id, name, email, idade, peso, altura } = await Students.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async show(req, res) {
    const { q } = req.query;

    if (q === undefined) {
      const students = await Students.findAll({
        attributes: ['id', 'name', 'email', 'idade', 'peso', 'altura'],
      });

      return res.json(students);
    }

    const searchStudents = await Students.findAll({
      where: {
        name: {
          [Op.like]: `${q}`,
        },
      },
      attributes: ['id', 'name', 'email', 'idade', 'peso', 'altura'],
    });

    return res.json(searchStudents);
  }

  async update(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      email: Yup.string().email(),
      idade: Yup.number(),
      peso: Yup.number(),
      altura: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const checkAvailabilityAdmin = await User.findOne({
      where: {
        id: req.userId,
      },
    });

    if (!checkAvailabilityAdmin) {
      return res.status(401).json({
        error: 'User is not valid administrator or without permission.',
      });
    }

    const students = await Students.findByPk(req.body.id);

    if (req.body.email !== students.email) {
      const { email } = req.body;
      const studentsExists = await Students.findOne({
        where: { email },
      });

      if (studentsExists) {
        return res.status(400).json({
          error: 'Registration already exists.',
        });
      }
    }

    const { id, name, email, idade, peso, altura } = await students.update(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async delete(req, res) {
    return res.json({ mesage: 'Delete Aluno' });
  }
}

export default new StudentsController();
