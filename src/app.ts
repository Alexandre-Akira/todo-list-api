import express from 'express'
import cors from 'cors'
const dbConfig = require('./database/config.js')
import { Sequelize } from 'sequelize'
// import { connect } from './database'
import User from './models/userModel'
import Todo from './models/todoModel'
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
    const sequelize = new Sequelize(dbConfig)
    // connect(sequelize)
    User.initializeModel(sequelize).hasMany(Todo.initializeModel(sequelize), {
      foreignKey: 'UserId'
    })
    Todo.initializeModel(sequelize).belongsTo(User.initializeModel(sequelize))
  }

  private routes() {
    this.express.use(allRoutes)
  }
}

export default new App().express
