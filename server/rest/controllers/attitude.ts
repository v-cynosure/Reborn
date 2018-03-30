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
            const currentUserInfo = await this.ctx.service.user.find(
                currentUser,
                config.app.userListInfo
            )
            const targetUserInfo = await this.ctx.service.user.find(
                targetUser,
                config.app.userListInfo
            )

            await this.ctx.service.attitude.addStar(targetUserInfo)
            await this.ctx.service.attitude.countStar(currentUser, 1)
            await this.ctx.service.attitude.addStared(currentUserInfo)
            await this.ctx.service.attitude.countStared(targetUser, 1)
        } catch (error) {
            this.emit(400, '点赞失败')
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/attitude/star/destory')
    async unStar() {
        const config = this.getConfig()
        const currentUser = this.currentUser()
        const { targetUser } = this.ctx.request.body
        try {
            const currentUserInfo = await this.ctx.service.user.find(
                currentUser,
                config.app.userListInfo
            )
            const targetUserInfo = await this.ctx.service.user.find(
                targetUser,
                config.app.userListInfo
            )

            await this.ctx.service.attitude.removeStar(targetUserInfo)
            await this.ctx.service.attitude.countStar(currentUser, -1)
            await this.ctx.service.attitude.removeStared(currentUserInfo)
            await this.ctx.service.attitude.countStared(targetUser, -1)
        } catch (error) {
            this.emit(400, '取消点赞失败')
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/attitude/star/list')
    async starList() {
        try {
            const users = await this.ctx.service.user.getStarList()
            if (!users) {
                return this.emit(400, '还没有点赞过的人')
            }
            this.emit(200, '获取点赞列表成功', users)
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.get('/api/attitude/stared/list')
    async staredList() {
        try {
            const users = await this.ctx.service.user.getStaredList()
            if (!users) {
                return this.emit(400, '还没有被别人点赞过呢QWQ')
            }
            this.emit(200, '获取点赞列表成功', users)
        } catch (error) {
            this.ctx.throw(500)
        }
    }
}

export default Attitude
