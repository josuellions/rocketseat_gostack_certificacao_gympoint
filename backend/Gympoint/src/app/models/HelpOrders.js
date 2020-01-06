import Sequelize, { Model } from 'sequelize';

class HelpOrders extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        answer_at: Sequelize.DATE,
        created_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Students, {
      foreignKey: 'student_id',
      as: 'students',
    });
  }
}

export default HelpOrders;
