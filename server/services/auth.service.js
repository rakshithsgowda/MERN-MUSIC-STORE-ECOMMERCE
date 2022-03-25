import { User } from '../../models/user.js'

export const createUser = async (email, password) => {
  try {
    const userIfInDB = await User.findOne({ email })
    if (userIfInDB) {
      return res.status(401).send('Email taken')
    }
    if (!userIfInDB) {
      const user = new User({ email, password })
      // console.log(user)
      await user.save()
      // console.log(user)
      return user
    }
  } catch (error) {
    throw new Error('Something bad happened. createuser')
  }
}
