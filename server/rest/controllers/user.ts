import * as Koa from 'koa'
import * as bcrypt from 'bcrypt'
import * as jsonwebtoken from 'jsonwebtoken'
import config from '../../config/dev'
import UserModel from '../models/user'
import { signToken } from '../middlewares/'

class UserController {
    static async register(ctx: Koa.Context) {
        try {
            let enhancePassword = null
            const { username, email, password } = ctx.request.body
            const isUserExit = await UserModel.findOne({ username })

            if (isUserExit) {
                return (ctx.body = {
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

            ctx.body = {
                code: 200,
                message: '注册成功',
                user: username,
                token: signToken(username),
            }
        } catch (error) {
            console.log(error)
            ctx.throw(500)
        }
    }

    static async login(ctx: Koa.Context) {
        try {
            let isPasswordCorrect = false
            const { username, password } = ctx.request.body
            const user = await UserModel.findOne({
                username,
            })

            if (!user) {
                return (ctx.body = {
                    code: 403,
                    message: '请先注册',
                })
            }

            isPasswordCorrect = await bcrypt.compare(password, user.password)
            if (!isPasswordCorrect) {
                return (ctx.body = {
                    code: 403,
                    message: '密码错误',
                })
            }

        ctx.status = 200
        ctx.body = {
            message: '登录成功',
            user: username,
            token: signToken(username),
        }
    }

    // 用户退出
    static async logout(ctx: Koa.Context) {
        // just for test
        // const token = ctx.header.authorization
        const token = ctx.state.user
        if (token) {
            ctx.body = '已经有token了'
        } else {
            ctx.body = '没有找到token'
        }
    }

    // 更新用户资料
    static async put(ctx: Koa.Context) {
        // await ……
    }

    // 删除用户
    static async deluser(ctx: Koa.Context) {
        // await ……
    }

    // 重置密码
    static async resetpwd(ctx: Koa.Context) {
        // await ……
    }
}

export default UserController
