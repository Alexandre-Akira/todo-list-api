import express from 'express'
import cors from 'cors'
// import { Sequelize } from 'sequelize'
// import { dbConfig } from './config/database'
import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    // this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database() {
    // const connection = new Sequelize(dbConfig)
  }

  private routes() {
    this.express.use(routes)
  }
}

export default new App().express
