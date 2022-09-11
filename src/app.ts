import express from 'express'
import cors from 'cors'
const dbConfig = require('./database/config.js')
import { connect } from './database/utils'
// import allRoutes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    // this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database() {
    connect(dbConfig)
  }

  private routes() {
    // this.express.use(allRoutes)
  }
}

export default new App().express
