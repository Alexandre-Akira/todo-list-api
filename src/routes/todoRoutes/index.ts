import { Router } from 'express'

import { TodoController } from '../../controllers'
import authenticationMiddleware from '../../middlewares/authentication'

const todoRoutes = Router()
const BASE_PATH = '/todo'

todoRoutes.post(
  `${BASE_PATH}`,
  authenticationMiddleware,
  TodoController.createTodo
)

todoRoutes.get(
  `${BASE_PATH}/:id?`,
  authenticationMiddleware,
  TodoController.getTodos
)

todoRoutes.put(
  `${BASE_PATH}/:id`,
  authenticationMiddleware,
  TodoController.updateTodo
)

todoRoutes.delete(
  `${BASE_PATH}/:id`,
  authenticationMiddleware,
  TodoController.deleteTodo
)

export default todoRoutes
