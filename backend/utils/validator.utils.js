import Joi from 'joi'

const schema = {
  POST_login: Joi.object({
    username: Joi.string(),
    email: Joi.string(),
    password: Joi.string().required(),
  }).required(),

  POST_register: Joi.object({
    username: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
}

export function validateRequestHandler(request, methodName) {
  const schemaValidation = schema[methodName].validate(request)
  if (schemaValidation.error) {
    return {
      status: false,
      error: { ...schemaValidation.error },
    }
  }
  return {
    status: true,
    value: { ...schemaValidation.value },
  }
}
