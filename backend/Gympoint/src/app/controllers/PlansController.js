import * as Yup from 'yup';

import User from '../models/User';
import Registrations from '../models/Registrations';
import Plans from '../models/Plans';

class PlansController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const plans = await Plans.findAll({
      where: {
        canceled_at: null,
      },
      order: [['price', 'desc']],
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['active', 'id', 'title', 'duration', 'price', 'canceled_at'],
    });

    return res.json(plans);
  }

  async store(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const planExists = await Plans.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists.' });
    }

    const { id, title, duration, price } = await Plans.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
      total_price: price * duration,
    });
  }

  async update(req, res) {
    /* Schemas Validation dados entrada */
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
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

    const plans = await Plans.findByPk(req.body.id);

    if (req.body.title !== plans.title) {
      const planExists = await Plans.findOne({
        where: { title: req.body.title },
      });

      if (planExists) {
        return res.status(400).json({ error: 'Plan already exists.' });
      }
    }

    const { id, title, duration, price } = await plans.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

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

    const checkPlans = await Plans.findByPk(id);

    if (!checkPlans) {
      return res.status(401).json('Plan does not exist.');
    }

    const CheckRegistrations = await Registrations.findOne({
      where: {
        plan_id: id,
      },
    });

    if (CheckRegistrations) {
      const responseup = await checkPlans.update({
        canceled_at: new Date(),
      });

      return res.status(200).json({ responseup });
    }

    await Plans.destroy({ where: { id } });

    return res
      .status(200)
      .json({ message: `delete plan: ${checkPlans.title}` });
  }
}

export default new PlansController();
