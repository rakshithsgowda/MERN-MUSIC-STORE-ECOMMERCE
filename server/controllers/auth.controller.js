import { createUser } from '../services/index.js'

export const authController = {
  async register(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await createUser(email, password)

      res.status(200).send(user)
    } catch (error) {
      res.status(401).send(error)
    }
  },
  async login() {
    try {
    } catch (error) {}
  },
  async isAuth() {
    try {
    } catch (error) {}
  },
}
