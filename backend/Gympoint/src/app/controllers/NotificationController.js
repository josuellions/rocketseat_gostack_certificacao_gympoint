import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      read: false,
    }).sort({ createdAt: 'asc' });

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
