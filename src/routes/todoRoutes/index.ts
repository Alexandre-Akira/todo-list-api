import { Router } from 'express'

const todoRoutes = Router()
const BASE_PATH = '/todo'

class TodoController {
  static createTodo(req, res) {
    return res.json({ rota: 'Criar Todo' })
  }

  static deleteTodoById(req, res) {
    return res.json({ rota: 'Deletar Todo' })
  }

  static updateTodoById(req, res) {
    return res.json({ rota: 'Atualizar todo pelo ID' })
  }

  static getAllTodos(req, res) {
    return res.json({ rota: 'Pegar todos os Todos' })
  }

  static getTodoById(req, res) {
    return res.json({ rota: 'Pegar todo pelo ID' })
  }
}

todoRoutes.post(`${BASE_PATH}`, TodoController.createTodo)

todoRoutes.get('/todo/all', TodoController.getAllTodos)
todoRoutes.get(`${BASE_PATH}/:id`, TodoController.getTodoById)

todoRoutes.put(`${BASE_PATH}/:id`, TodoController.updateTodoById)

todoRoutes.delete(`${BASE_PATH}/:id`, TodoController.deleteTodoById)

export default todoRoutes
