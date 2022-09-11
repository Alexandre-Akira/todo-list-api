import { Router } from 'express'

import { TodoController } from '../../controllers'

const todoRoutes = Router()
const BASE_PATH = '/todo'

todoRoutes.post(`${BASE_PATH}`, TodoController.createTodo)

todoRoutes.get(`${BASE_PATH}/:id?`, TodoController.getTodos)

todoRoutes.put(`${BASE_PATH}/:id`, TodoController.updateTodo)

todoRoutes.delete(`${BASE_PATH}/:id`, TodoController.deleteTodo)

export default todoRoutes
