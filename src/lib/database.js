const Sequelize = require('sequelize');


const sequelize = new Sequelize('my-api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection success');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
