
const { Sequelize } = require('sequelize');

// Configuração padrão para o MySQL do XAMPP
const sequelize = new Sequelize('app-blog', 'root', '', {
  host: 'localhost', 
  dialect: 'mysql',
  port: 3306, // Porta padrão do XAMPP
});

module.exports = sequelize;
