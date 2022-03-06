import { Schema, model } from 'mongoose'
import validator from 'validator'

export const User = model(
  'User',
  new Schema({
    email: {
      type: email,
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
    varified: { type: Boolean, default: false },
    cart: { type: Array, default: [] },
  })
)
