import Sequelize, { Model } from 'sequelize';

class Plans extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.DECIMAL,
        price: Sequelize.DECIMAL,
        canceled_at: Sequelize.DATE,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, ['canceled_at']),
          get() {
            return this.get('canceled_at') === null;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Plans;
