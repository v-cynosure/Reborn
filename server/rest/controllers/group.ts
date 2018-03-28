import * as Koa from 'koa'
import bp from '../blueprint'
import Controller from './base'

class Group extends Controller {
    getConfig() {
        return (<any>this.app)['config']
    }

    @bp.get('/api/users/:username')
    async getUser() {
        try {
            const user = await this.ctx.service.group.get()

            if (!user) {
                return this.emit(404, '找不到该用户的信息')
            }
            this.emit(200, '成功返回', user)
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.get('/api/users')
    async getUserList(conditions: object = {}) {
        try {
            const users = await this.ctx.service.group.list(conditions)

            if (!users) {
                return this.emit(404, '竟然一个用户都没有')
            }
            this.emit(200, '成功返回用户', users)
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.get('/api/users/:department')
    async getUsersByDepartment() {
        const { department } = this.ctx.params
        this.getUserList({ department })
    }
}

export default Group
