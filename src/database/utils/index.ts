import { Options } from 'sequelize/types'
import { Sequelize } from 'sequelize'

export const connect = async (dbConfig: Options, attempt = 1) => {
  const connection = new Sequelize(dbConfig)
  try {
    await connection.authenticate()
    console.log('Connection with database has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    console.log(`Trying to reconnect... Attempt: ${attempt}`)
    const delayBetweenAttempts = attempt ** 2 * 1000
    setTimeout(() => connect(dbConfig, attempt + 1), delayBetweenAttempts)
  }
}
