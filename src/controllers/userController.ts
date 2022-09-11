import Express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { SECRET_KEY } from '../config/constants'

// Verificar os nomes dos metódos dos models quando estiver pronto
import {
  createNewUser,
  getUserByEmail,
  getUserById,
  updateUserById,
  deleteUserById
} from '../models/user'

// Verificar os nomes dos DTOs das views quando estiver pronto
import UserDTO from '../views/userDTO'
import TokenDTO from '../views/tokenDTO'

class UserController {
  static async createUser(req: Express.Request, res: Express.Response) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).send('Missing data')
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = await createNewUser({ name, email, passwordHash })

    if (newUser.userAlreadyRegistered) {
      return res.status(409).send('E-mail already registred')
    }

    return res.status(201).json(new UserDTO(newUser))
  }

  static async login(req: Express.Request, res: Express.Response) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).send('Missing data')
    }

    const user = await getUserByEmail(email)

    if (!user) {
      return res.status(403).send('Unauthorized')
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
      return res.status(403).send('Unauthorized')
    }

    const jwtToken = jwt.sign({ UserId: user.id }, SECRET_KEY as string, {
      expiresIn: '1h'
    })

    return res.status(201).json(new TokenDTO(jwtToken))
  }

  static async getUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    const user = await getUserById(id)

    if (!user) {
      return res.status(404).send('User not found')
    }

    return res.status(200).json(new UserDTO(user))
  }

  static async updateUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    const user = await getUserById(id)

    if (!user) {
      return res.status(404).send('User not found')
    }

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).send('Missing data')
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const updatedUser = await updateUserById({ name, email, passwordHash })

    return res.status(200).json(new UserDTO(updatedUser))
  }

  static async deleteUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    await deleteUserById(id)

    return res.status(204).send()
  }
}

export default UserController
