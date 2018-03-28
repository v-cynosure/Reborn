import * as Koa from 'koa'
import bp from '../blueprint'
import Controller from './base'
import UserModel from '../models/user'

class Group extends Controller {
    getConfig() {
        return (<any>this.app)['config']
    }

    @bp.get('/api/users/:username')
    async getUser() {
        try {
            const user = await this.ctx.service.group.get()

            if (!user) {
                return (this.ctx.body = {
                    code: 404,
                    message: '找不到该用户的信息',
                })
            }
            this.ctx.body = {
                code: 200,
                message: '成功返回',
                payload: user,
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.get('/api/users')
    async getUserList() {
        try {
            const users = await this.ctx.service.group.list({})

            if (!users) {
                return (this.ctx.body = {
                    code: 404,
                    message: '竟然一个用户都没有，忧桑',
                })
            }
            this.ctx.body = {
                code: 200,
                message: '成功返回所有用户',
                payload: users,
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.get('/api/users/:department')
    async getUsersByDepartment() {
        const { department } = this.ctx.params
        try {
            const users = await this.ctx.service.group.list({department})

            if (!users) {
                return (this.ctx.body = {
                    code: 404,
                    message: '竟然一个用户都没有，忧桑',
                })
            }
            this.ctx.body = {
                code: 200,
                message: '成功返部门所有用户',
                payload: users,
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }
}

export default Group
