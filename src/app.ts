import express from 'express'
import cors from 'cors'
const dbConfig = require('./database/config.js')
import { Sequelize } from 'sequelize'
import { connect } from './database'
// import allRoutes from './routes'
import userRoutes from './routes/userRoutes'

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
    const sequelize = new Sequelize(dbConfig)
    connect(sequelize, dbConfig)
  }

  private routes() {
    this.express.use(userRoutes)
  }
}

export default new App().express
