const Router = require('koa-router')
const config = require('../../config/default')
const userctrl = require('../controllers/user')
const checkNotLogin = require('../middlewares/check').checkNotLogin

const router = new Router()

router.prefix(`/${config.baseApi}`)
router.post('/register', userctrl.register)
router.post('/login', userctrl.login)
router.post('/logout', userctrl.logout)

module.exports = router
