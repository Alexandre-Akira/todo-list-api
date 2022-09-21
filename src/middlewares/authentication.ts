import Express from 'express'
import jwt from 'jsonwebtoken'

const SECRET_KEY = require('../database/constants.ts')

const authenticationMiddleware = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const token = req.headers['authorization']
  const publicRoutes = ['/user', '/user/login']

  if(publicRoutes.includes(req.path)) {
    return next()
  }

  if (token) {
    try {
      jwt.verify(token, SECRET_KEY.toString())
    } catch (err) {
      return res.status(401).send('Unauthorized')
    }
    return next()
  }
  return res.status(401).send('Unauthorized')
}

export default authenticationMiddleware
