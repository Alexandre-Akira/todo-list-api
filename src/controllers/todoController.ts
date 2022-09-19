import Express from 'express'

import Todo from '../models/todoModel'

import { isUUID } from '../utils'


class TodoController {
  static async createTodo(req: Express.Request, res: Express.Response) {
    const { UserId, description, isDone } = req.body

    if (!UserId || !description || isDone === undefined) {
      return res.status(400).send('Missing data')
    }

    if (!isUUID(UserId)) {
      return res.status(422).send('Invalid ID')
    }

    try {
      const newTodo = await Todo.create({ UserId, description, isDone })
      return res.status(201).json(newTodo)
      // return res.status(201).json(new TodoDTO(newTodo))
    } catch(err) {
      return res.status(422).send('Invalid ID')
    }
  }

  static async getTodos(req: Express.Request, res: Express.Response) {
    const { UserId } = req.body
    const { id } = req.params

    if (!UserId) {
      return res.status(400).send('Missing data')
    }

    if (!isUUID(UserId)) {
      return res.status(422).send('Invalid ID')
    }

    if (id) {
      const todo = await Todo.findOne({ where: { UserId, id } })
      if (!todo) {
        return res.status(404).send('Todo not found')
      }
      // return res.status(200).json(new TodoDTO(todo))
      return res.status(200).json(todo)
    }

    const allTodos = await Todo.findAll({ where: { UserId } })

    if (allTodos.length === 0) {
      return res.status(422).send('Invalid ID')
    }

    // return res.status(200).json(new TodoDTO(allTodos))
    return res.status(200).json(allTodos)
  }

  static async updateTodo(req: Express.Request, res: Express.Response) {
    const { UserId } = req.body
    const { id } = req.params

     if (!isUUID(UserId)) {
       return res.status(422).send('Invalid ID')
     }

    const todo = await Todo.findOne({ where: { UserId, id } })

    if (!todo) {
      return res.status(404).send('Todo not found')
    }

    const { description, isDone } = req.body

    if (!description || isDone === undefined) {
      return res.status(400).send('Missing data')
    }

    const updatedTodo = await Todo.update(
      { description, isDone },
      { where: { UserId, id }, returning: true }
    )

    // return res.status(200).json(new TodoDTO(updatedTodo))
    return res.status(200).json(updatedTodo[1][0])
  }

  static async deleteTodo(req: Express.Request, res: Express.Response) {
    const { UserId } = req.body
    const { id } = req.params

    if (!isUUID(UserId)) {
      return res.status(422).send('Invalid ID')
    }

    await Todo.destroy({ where: { UserId, id } })

    return res.status(204).send()
  }
}

export default TodoController
