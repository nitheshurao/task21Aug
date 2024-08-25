'use strict'
import { isEmpty, catchAsync } from "../utils"
const logger = catchAsync(async (req, res, next) => {
    if (!isEmpty(req.path)) {
        console.info('[API LOGGER] Path Start'.yellow)
        console.info(JSON.stringify(req.path).cyan.bold)
        console.info('[API LOGGER] Path End'.yellow)
    }
    if (!isEmpty(req.headers)) {
        console.info('[API LOGGER] headers Start'.yellow)
        console.info(JSON.stringify(req.headers).cyan.bold)
        console.info('[API LOGGER] headers End'.yellow)
    }
    if (!isEmpty(req.body)) {
        console.info('[API LOGGER] body Start'.yellow)
        console.info(JSON.stringify(req.body).cyan.bold)
        console.info('[API LOGGER] body End'.yellow)
    }
    if (!isEmpty(req.query)) {
        console.info('[API LOGGER] query Start'.yellow)
        console.info(JSON.stringify(req.query).cyan.bold)
        console.info('[API LOGGER] query End'.yellow)
    }
    next()
})

module.exports 
