'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('versions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        defaultValue: 1,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
    await queryInterface.changeColumn('versions', 'version', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1, // Garante o valor padrão correto
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('versions');
  }
};

