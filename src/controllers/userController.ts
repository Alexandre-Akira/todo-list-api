import Express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET_KEY = require('../database/constants.ts')
import { isUUID } from '../utils'
import User from '../models/userModel'

class UserController {
  static async createUser(req: Express.Request, res: Express.Response) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).send('Missing data')
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const [newUser, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, password: passwordHash }
    })

    // TODO: if (isCreated) return res.status(201).json(new UserDTO(newUser))
    if (isCreated) return res.status(201).json(newUser)

    return res.status(409).send('E-mail already registered')
  }

  static async login(req: Express.Request, res: Express.Response) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).send('Missing data')
    }

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(403).send('Unauthorized')
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
      return res.status(403).send('Unauthorized')
    }

    const jwtToken = jwt.sign({ UserId: user.id }, SECRET_KEY.toString(), {
      expiresIn: '1h'
    })

    // TODO: return res.status(201).json(new TokenDTO(jwtToken))
    return res.status(201).json(jwtToken)
  }

  static async getUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    if (!isUUID(id)) return res.status(422).send('Invalid ID')

    const user = await User.findOne({ where: { id } })

    if (!user) {
      return res.status(404).send('User not found')
    }

    // return res.status(200).json(new UserDTO(user))
    return res.status(200).json(user)
  }

  static async updateUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    if (!isUUID(id)) {
      return res.status(422).send('Invalid ID')
    }

    const user = await User.findOne({ where: { id } })

    if (!user) {
      return res.status(404).send('User not found')
    }

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).send('Missing data')
    }

    const userWithThisEmail = await User.findOne({ where: { email } })

    if (userWithThisEmail) {
      return res.status(409).send('E-mail already registered')
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const updatedUser = await User.update(
      { name, email, password: passwordHash },
      { where: { id }, returning: true }
    )

    // return res.status(200).json(new UserDTO(updatedUser))
    return res.status(200).json(updatedUser[1][0])
  }

  static async deleteUser(req: Express.Request, res: Express.Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).send('Missing data')
    }

    if (!isUUID(id)) {
      return res.status(422).send('Invalid ID')
    }

    await User.destroy({ where: { id } })

    return res.status(204).send()
  }
}

export default UserController
