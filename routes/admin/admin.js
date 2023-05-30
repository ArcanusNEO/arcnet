import express from 'express'
const router = express.Router()
import statusCode from '../../config/http-status-code.js'
import loginChk from '../midwares/login-check.js'
import user from './user.js'

router.use(loginChk)

router.use('/u(ser(s)?)?', user)

router.all('*', (req, res) => {
  res.sendStatus(statusCode.notFound)
})

export default router
