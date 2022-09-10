import express from 'express'
import cors from 'cors'
import { Sequelize } from 'sequelize'
import { dbConfig } from './config/database'
import allRoutes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database() {
    const connect = async (attempt = 1) => {
      const connection = new Sequelize(dbConfig)
      try {
        await connection.authenticate()
        console.log(
          'Connection with database has been established successfully.'
        )
      } catch (error) {
        console.error('Unable to connect to the database:', error)
        console.log(`Trying to reconnect... Attempt: ${attempt}`)
        const delayBetweenAttempts = attempt ** 2 * 1000
        setTimeout(() => connect(attempt + 1), delayBetweenAttempts)
      }
    }
    connect()
  }

  private routes() {
    this.express.use(allRoutes)
  }
}

export default new App().express
