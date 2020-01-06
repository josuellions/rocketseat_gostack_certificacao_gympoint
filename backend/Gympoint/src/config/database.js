/*
 require('../bootstrap');
 loggin:g false,  //não exibe log detalhados da query
*/
require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: process.env.DB_TEST,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
