const Router = require('koa-router')
const userctrl = require('../controllers/user')
const checkNotLogin = require('../middlewares/check').checkNotLogin

const router = new Router()

router.post('/api/register', userctrl.register)
router.post('/api/login', userctrl.login)
router.post('/api/logout', userctrl.logout)

module.exports = router
