import * as Router from 'koa-router'
import config from '../../config/dev'
import userctrl from '../controllers/user'

const router = new Router()

router.prefix(`/${config.baseApi}`)
router.post('/register', userctrl.register)
router.post('/login', userctrl.login)
router.post('/logout', userctrl.logout)

export default router
