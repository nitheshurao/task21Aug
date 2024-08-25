import bcrypt from 'bcrypt'
import { DEFAULT_SALT } from '../config/index.js'

async function generateSalt() {
  return bcrypt.genSalt(DEFAULT_SALT)
}

async function generateHash(password, salt) {
  return bcrypt.hash(password, salt)
}

async function validatePassword(inputPassword, encryptedPassword) {
  return bcrypt.compare(inputPassword, encryptedPassword)
}

export { generateHash, generateSalt, validatePassword }
