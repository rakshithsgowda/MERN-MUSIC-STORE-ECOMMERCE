import mongoose from 'mongoose'
const { Schema, model } = mongoose
import validator from 'validator'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Provide proper e-mail')
      }
    },
  },
  password: { type: String, required: true, trim: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  firstName: { type: String, trim: true, maxlength: 100, default: '' },
  lastName: { type: String, trim: true, maxlength: 100, default: '' },
  history: { type: Array, default: [] },
  verified: { type: Boolean, default: false },
  cart: { type: Array, default: [] },
})

// userSchema.statics.emailTaken = async function (email) {
//   const user = await User.findOne({email})
//   return !!user
// }

export const User = model('User', userSchema)
