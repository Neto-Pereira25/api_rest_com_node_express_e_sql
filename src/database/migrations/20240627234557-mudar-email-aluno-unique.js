module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('alunos', 'email',
      {
        type: Sequelize.STRING(191),
        allowNull: false,
        unique: true,
      });
  },

  down: () => { }
};
