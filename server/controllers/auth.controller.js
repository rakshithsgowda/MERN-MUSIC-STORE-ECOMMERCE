import { helloService } from '../services/index.js'

export const authController = {
  async hello() {
    try {
      const userHello = await helloService()
      console.log(userHello)
    } catch (error) {}
  },
}
