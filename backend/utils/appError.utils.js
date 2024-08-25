'use strict'

import { NODE_ENV } from '../config/index.js'

export default class AppError extends Error {
  constructor(message, statusCode, error) {
    super(message)

    this.statusCode = statusCode
    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error'
    this.error = error
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
    if (NODE_ENV == 'prod') {
      delete this.stack
    }
  }
}
