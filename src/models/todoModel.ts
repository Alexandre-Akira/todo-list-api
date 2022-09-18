import { Model, DataTypes, Sequelize } from 'sequelize'

class Todo extends Model {
  declare userId: string
  declare description: string
  declare isDone: boolean

  static initializeModel(connection: Sequelize) {
    return this.init(
      {
        userId: {
          type: DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        description: DataTypes.STRING,
        isDone: DataTypes.BOOLEAN
      },
      {
        tableName: 'todos',
        sequelize: connection
      }
    )
  }
}

// Todo.associate(User, { foreignKey: 'user_id' })

export default Todo
