import * as Koa from 'koa'
import bp from '../blueprint'
import Controller from './base'

class Attitude extends Controller {
    @bp.post('/api/attitude/star/create')
    async star() {
        const currentUser = this.currentUser()
        const { targetUser } = this.ctx.request.body
        const result = await this.ctx.service.star(currentUser, targetUser)
        if (result) {
            this.emit(200, '点赞成功')
        }
    }

    @bp.post('/api/attitude/star/destory')
    async unStar() {}

    @bp.get('/api/attitude/star/list')
    async starList() {}
}

export default Attitude
