import * as Koa from 'koa'
import * as bcrypt from 'bcrypt'
import * as jsonwebtoken from 'jsonwebtoken'
import Controller from './base'
import bp from '../blueprint'
import UserModel from '../models/user'
import { Auth } from '../middlewares/'

class User extends Controller {
    getConfig() {
        return (<any>this.app)['config']
    }

    @bp.post('/api/register')
    async register() {
        let enhancePassword = null
        const { username, email, password } = this.ctx.request.body

        try {
            const isUserExit = await this.ctx.service.user.get()

            if (isUserExit) {
                return (this.ctx.body = {
                    code: 406,
                    message: '该用户已存在，请使用密码登录',
                })
            }

            await this.ctx.service.user.create()
            this.ctx.body = {
                code: 200,
                message: '注册成功',
                user: username,
                token: Auth.signToken(username),
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/login')
    async login() {
        const { service } = this.ctx
        const { username, email, password } = this.ctx.request.body

        try {
            const user = await service.user.get()
            if (!user) {
                return (this.ctx.body = {
                    code: 403,
                    message: '请先注册',
                })
            }

            const isCorrect = await service.user.checkPassword(
                password,
                user.password
            )
            if (!isCorrect) {
                return (this.ctx.body = {
                    code: 403,
                    message: '密码错误',
                })
            }

            this.ctx.status = 200
            this.ctx.body = {
                code: 200,
                message: '登录成功',
                user: username,
                token: Auth.signToken(username),
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/logout')
    async logout() {
        //     // await ……
        console.log(this.ctx.state)
    }

    @bp.put('/api/updateMe')
    async updateMe() {
        const { service } = this.ctx
        const { username } = this.ctx.state.user
        const info = this.ctx.request.body

        try {
            const isUpdate = await service.user.update(username, info)
            if (!isUpdate) {
                return (this.ctx.body = {
                    code: 500,
                    message: '更新失败',
                })
            }
            this.ctx.body = {
                code: 200,
                message: '更新成功',
            }
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    // 删除用户
    // async deluser(ctx: Koa.Context) {
    //     // await ……
    // }

    // 重置密码
    // async resetpwd(ctx: Koa.Context) {
    //     // await ……
    // }
}

export default User
