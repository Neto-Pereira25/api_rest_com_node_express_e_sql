"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('alunos');
  }
};
