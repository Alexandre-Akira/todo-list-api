'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todo', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: {
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
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('todo')
  }
}
