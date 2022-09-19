import { Sequelize } from 'sequelize'

export const connect = async (sequelize: Sequelize, attempt = 1) => {
  try {
    await sequelize.authenticate()
    console.log('Connection with database has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    console.log(`Trying to reconnect... Attempt: ${attempt}`)
    const delayBetweenAttempts = attempt ** 2 * 1000
    setTimeout(() => connect(sequelize, attempt + 1), delayBetweenAttempts)
  }
}
