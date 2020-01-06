import Sequelize, { Model } from 'sequelize';

class Plans extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.DECIMAL,
        price: Sequelize.DECIMAL,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Plans;
