import { Router } from 'express'

import { UserController } from '../../controllers'
import authenticationMiddleware from '../../middlewares/authentication'

const userRoutes = Router()
const BASE_PATH = '/user'

userRoutes.post(`${BASE_PATH}`, UserController.createUser)
userRoutes.post(`${BASE_PATH}/login`, UserController.login)

userRoutes.get(
  `${BASE_PATH}/:id`,
  authenticationMiddleware,
  UserController.getUser
)

userRoutes.put(
  `${BASE_PATH}/:id`,
  authenticationMiddleware,
  UserController.updateUser
)

userRoutes.delete(
  `${BASE_PATH}/:id`,
  authenticationMiddleware,
  UserController.deleteUser
)

export default userRoutes
