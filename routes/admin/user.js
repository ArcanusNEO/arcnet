import express from 'express'
const router = express.Router()
import statusCode from '../../config/http-status-code.js'

router.get('/', async (req, res) => {
  return res.sendStatus(statusCode.forbidden)
})

export default router
