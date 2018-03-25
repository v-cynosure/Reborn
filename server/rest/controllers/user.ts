import * as Koa from 'koa'
import * as bcrypt from 'bcrypt'
import * as jsonwebtoken from 'jsonwebtoken'
import Controller from './base'
import config from '../../config/dev'
import UserModel from '../models/user'
import { Auth } from '../middlewares/'

class User extends Controller {
    async register() {
        try {
            let enhancePassword = null
            const { username, email, password } = this.ctx.request.body
            this.ctx.body = {
                message: 'success'
            }
            const isUserExit = await UserModel.findOne({ username })

            if (isUserExit) {
                return (this.ctx.body = {
                    code: 406,
                    message: '该用户已存在，请使用密码登录',
                })
            }

            enhancePassword = await bcrypt.hash(password, 5)
            await UserModel.create({
                username,
                email,
                password: enhancePassword,
            })

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

    async login() {
        try {
            let isPasswordCorrect = false
            const { username, password } = this.ctx.request.body
            const user = await UserModel.findOne({
                username,
            })

            if (!user) {
                return (this.ctx.body = {
                    code: 403,
                    message: '请先注册',
                })
            }

            isPasswordCorrect = await bcrypt.compare(password, user.password)
            if (!isPasswordCorrect) {
                return (this.ctx.body = {
                    code: 403,
                    message: '密码错误',
                })
            }

        this.ctx.status = 200
        this.ctx.body = {
            message: '登录成功',
            user: username,
            token: Auth.signToken(username),
        }
    }

    // 用户退出
    // static async logout(ctx: Koa.Context) {
    //     // just for test
    //     // const token = ctx.header.authorization
    //     const token = ctx.state.user
    //     if (token) {
    //         ctx.body = '已经有token了'
    //     } else {
    //         ctx.body = '没有找到token'
    //     }
    // }

    // 更新用户资料
    // static async put(ctx: Koa.Context) {
    //     // await ……
    // }

    // 删除用户
    // static async deluser(ctx: Koa.Context) {
    //     // await ……
    // }

    // 重置密码
    static async resetpwd(ctx: Koa.Context) {
        // await ……
    }
}

export default User
