import * as Koa from 'koa'
import * as bcrypt from 'bcrypt'
import * as jsonwebtoken from 'jsonwebtoken'
import Controller from './base'
import bp from '../blueprint'
const UserModel = require('../models/user')
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
                return this.emit(406, '该用户已存在，请使用密码登录')
            }

            await this.ctx.service.user.create()
            this.emit(200, '注册成功', {
                user: username,
                token: Auth.signToken(username),
            })
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
                return this.emit(403, '请先注册')
            }

            const isCorrect = await service.user.checkPassword(
                password,
                user.password
            )
            if (!isCorrect) {
                return this.emit(403, '密码错误')
            }

            this.ctx.status = 200
            this.emit(200, '登录成功', {
                token: Auth.signToken(username),
            })
        } catch (error) {
            this.ctx.throw(500)
        }
    }

    @bp.post('/api/logout')
    async logout() {
        console.log(this.ctx.state)
    }

    @bp.put('/api/update/me')
    async updateMe() {
        const { service } = this.ctx
        const { username } = this.ctx.state.user
        const info = this.ctx.request.body
        console.log('tttt')
        try {
            const isUpdate = await service.user.update(username, info)
            if (!isUpdate) {
                return this.emit(500, '更新失败')
            }
            this.emit(200, '更新成功')
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
