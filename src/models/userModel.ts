import {
  DataTypes,
  Model,
  ModelOptions,
  ModelStatic,
  Options,
  Sequelize
} from 'sequelize'
import dbConfig from '../database/config'

const sequelize = new Sequelize(dbConfig as Options)

type UserAttributes = {
  id: string
  name: string
  password: string
  email: string
} & Model

class UserModel {
  declare user: ModelStatic<UserAttributes>

  constructor(sequelize: Sequelize) {
    this.user = this.initialize(sequelize)
  }

  initialize(sequelize: Sequelize): ModelStatic<UserAttributes> {
    return sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users'
      } as ModelOptions<Model>
    ) as ModelStatic<UserAttributes>
  }
}

export default new UserModel(sequelize)
