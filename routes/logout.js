import express from 'express'
const router = express.Router()
import statusCode from '../config/http-status-code.js'
import tokenUtils from '../utils/token.js'

router.get('/', (req, res) => {
  try {
    tokenUtils.remove(res, 'acc')
    return res.sendStatus(statusCode.ok)
  } catch { }
  return res.sendStatus(statusCode.forbidden)
})

export default router
