import Express from 'express'
import jwt from 'jsonwebtoken'

const SECRET_KEY = require('../database/constants.ts')

const authenticationMiddleware = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const token = req.headers['authorization']

  if (token) {
    try {
      jwt.verify(token, SECRET_KEY.toString())
    } catch (err) {
      res.status(401).send('Unauthorized')
      return
    }
    next()
    return
  }
  return res.status(401).send('Unauthorized')
}

export default authenticationMiddleware
