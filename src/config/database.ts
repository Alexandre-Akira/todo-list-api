import { Options } from 'sequelize/types'
import { DB_NAME, DB_PASSWORD, DB_USER } from './constants'

export const dbConfig: Options = {
  dialect: 'postgres',
  host: 'localhost',
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  define: {
    timestamps: true, // gera o campo createdAt e updatedAt que contem data e hora
    underscored: true // define o nome das tabelas e nome das colunas como snake case
  }
}
