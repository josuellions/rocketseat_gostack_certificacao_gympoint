import Sequelize, { Model } from 'sequelize';
import { isBefore, isAfter } from 'date-fns';

class Registrations extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.DECIMAL,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
            'start_date',
            'end_date',
          ]),
          get() {
            return (
              isBefore(this.get('start_date'), new Date()) &&
              isAfter(this.get('end_date'), new Date())
            );
          },
        },
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
    this.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plans' });
  }
}

export default Registrations;
