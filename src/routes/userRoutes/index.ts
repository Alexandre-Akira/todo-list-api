import { Router } from 'express'

const userRoutes = Router()
const BASE_PATH = '/user'

class UserController {
  static createUser(req, res) {
    return res.json({ rota: 'Criar User' })
  }

  static deleteUserById(req, res) {
    return res.json({ rota: 'Deletar user pelo id' })
  }

  static updateUserById(req, res) {
    return res.json({ rota: 'Atualizar user pelo id' })
  }

  static getUser(req, res) {
    return res.json({ rota: 'pegar Usuario pelo id' })
  }

  static login(req, res) {
    return res.json({ rota: 'Logar usuario' })
  }

  static logoff(req, res) {
    return res.json({ rota: 'Deslogar usuario' })
  }
}

userRoutes.post(`${BASE_PATH}`, UserController.createUser)
userRoutes.post(`${BASE_PATH}/login`, UserController.login)
userRoutes.post(`${BASE_PATH}/logoff`, UserController.logoff)

userRoutes.get(`${BASE_PATH}/:id`, UserController.getUser)

userRoutes.put(`${BASE_PATH}/:id`, UserController.updateUserById)

userRoutes.delete(`${BASE_PATH}/:id`, UserController.deleteUserById)

export default userRoutes
