'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'tag_id'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',  
          key: 'id',       
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id'
      },
      data: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tags');
  }
};

