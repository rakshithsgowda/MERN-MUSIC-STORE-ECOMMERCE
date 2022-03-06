import { helloService } from '../services/index.js'

export const authController = {
  async register() {
    try {
      const userHello = await helloService()
      console.log(userHello)
    } catch (error) {}
  },
  async login() {
    try {
      const userHello = await helloService()
      console.log(userHello)
    } catch (error) {}
  },
  async isAuth() {
    try {
      const userHello = await helloService()
      console.log(userHello)
    } catch (error) {}
  },
}
