const Router = require('koa-router')
const userctrl = require('../controllers/user')

const router = new Router()

router.get('/', ctx => {
    ctx.body = 'hello, world'
})

module.exports = router
