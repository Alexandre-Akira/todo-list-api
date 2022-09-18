'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todo', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('todo')
  }
}
