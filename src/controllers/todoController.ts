import Express from 'express'
import Todo from '../models/todoModel'

// Verificar os nomes dos metódos dos models quando estiver pronto
// import {
//   createNewTodo,
//   getTodoById,
//   getAllTodos,
//   updateTodoById,
//   deleteTodoById
// } from '../models/todo'

// Verificar os nomes dos DTOs das views quando estiver pronto
// import TodoDTO from '../views/todoDTO'

class TodoController {
  static async createTodo(req: Express.Request, res: Express.Response) {
    const { userId, description, isDone } = req.body

    if (!userId || !description || isDone === undefined) {
      return res.status(400).send('Missing data')
    }

    const newTodo = await Todo.create({ userId, description, isDone })

    // return res.status(201).json(new TodoDTO(newTodo))
    return res.status(201).json(newTodo)
  }

  static async getTodos(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (id) {
      const todo = await getTodoById(id)
      if (!todo) {
        return res.status(404).send('Todo not found')
      }
      return res.status(200).json(new TodoDTO(todo))
    }

    const allTodos = await getAllTodos()

    return res.status(200).json(new TodoDTO(allTodos))
  }

  static async updateTodo(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    const todo = await getTodoById(id)

    if (!todo) {
      return res.status(404).send('Todo not found')
    }

    const { description, status } = req.body

    if (!description || !status) {
      return res.status(400).send('Missing data')
    }

    const updatedTodo = await updateTodoById({ description, status })

    return res.status(200).json(new TodoDTO(updatedTodo))
  }

  static async deleteTodo(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    await deleteTodoById(id)

    return res.status(204).send()
  }
}

export default TodoController
