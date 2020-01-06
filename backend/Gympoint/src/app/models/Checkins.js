import Sequelize, { Model } from 'sequelize';

class Checkins extends Model {
  static init(sequelize) {
    super.init(
      {
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

export default Checkins;
