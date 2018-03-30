import * as Koa from 'koa'
import bp from '../blueprint'
import Controller from './base'

class Attitude extends Controller {
    @bp.post('/api/attitude/star/create')
    async star() {
        const config = this.getConfig()
        const currentUser = this.currentUser()
        const { targetUser } = this.ctx.request.body
        try {
            const currentUserInfo = this.ctx.service.user.find(
                currentUser,
                config.app.userListInfo
            )
            const targetUserInfo = this.ctx.service.user.find(
                targetUser,
                config.app.userListInfo
            )

            this.ctx.service.addStar(targetUserInfo)
            this.ctx.service.countStar(currentUser, 1)
            this.ctx.service.addStared(currentUserInfo)
            this.ctx.service.countStared(targetUser, 1)
        } catch (error) {
            this.emit(400, '更新失败')
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/attitude/star/destory')
    async unStar() {}

    @bp.get('/api/attitude/star/list')
    async starList() {}
}

export default Attitude
