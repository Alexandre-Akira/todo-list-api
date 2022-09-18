import { Model, DataTypes, Sequelize } from 'sequelize'

class User extends Model {
  declare id: string
  declare name: string
  declare password: string
  declare email: string

  static initializeModel(connection: Sequelize) {
    return this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        tableName: 'users',
        sequelize: connection
      }
    )
  }
}

export default User
