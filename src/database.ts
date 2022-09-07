import { Sequelize } from 'sequelize'
import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './constants'

export const sequelize = new Sequelize(
  `postgres://${DB_NAME}:${DB_PASSWORD}:${DB_PORT}/${DB_USER}`
)
