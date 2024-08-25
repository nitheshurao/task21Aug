import * as AuthUtils from './auth.utils.js'
import AppError from './appError.utils.js'
import catchAsync from './catchAsync.utils.js'
import * as validateRequestHandler from './validator.utils.js'

function isEmpty(data) {
  if (Array.isArray(data) && data.length) {
    return false
  } else if (Object.keys(data).length) {
    return false
  } else if (typeof data == 'string' && data) {
    return false
  } else {
    return true
  }
}

export { AuthUtils, AppError, catchAsync, validateRequestHandler, isEmpty }
