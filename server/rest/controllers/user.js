const md5 = require('md5')
const config = require('../../config/default')
const jsonwebtoken = require('jsonwebtoken')
const UserModel = require('../models/user')

class UserController {
    // 用户注册
    static async register(ctx) {
        const { username, email, password } = ctx.request.body
        let isUserExit = await UserModel.findOne({ username })

        // 用户已经存在
        // if (isUserExit) {
        //     ctx.status = 406
        //     ctx.body = {
        //         message: '该用户已存在，请使用密码登录',
        //     }
        //     return
        //     // return ctx.throw(400, '该用户已存在')
        // }

        ctx.assert(!isUserExit, 401, '该用户已存在，请使用密码登录')

        // 创建新用户
        const result = await UserModel.create({
            username,
            email,
            password: md5(password),
        })
        ctx.status = 200
        ctx.body = {
            message: '注册成功',
            user: username,
        }
    }

    // 用户登录
    static async login(ctx) {
        // await ……
        const { username, password } = ctx.request.body

        // if (ctx.session.user) {
        //     return (ctx.body = `${ctx.session.user} 已登录，请勿重复登录`)
        // } else {
        //     console.log(ctx.session.user)
        //     return (ctx.body = ctx.session.user)
        // }

        const user = await UserModel.findOne({
            username,
            password: md5(password),
        })
        ctx.assert(user, 403, '请检查用户名和密码')
        // if (!user) {
        //     return ctx.throw(403, '请检查用户名和密码')
        // }
        ctx.status = 200
        ctx.body = {
            message: '登录成功',
            user: username,
            token: jsonwebtoken.sign(
                {
                    user,
                    exp: config.token.exp,
                },
                config.token.secret
            ),
        }
    }

    // 用户退出
    static async logout(ctx) {
        // await ……
        const token = ctx.header.authorization
        if (token) {
            ctx.body = '已经有token了'
        } else {
            ctx.body = '没有找到token'
        }
    }

    // 更新用户资料
    static async put(ctx) {
        // await ……
    }

    // 删除用户
    static async deluser(ctx) {
        // await ……
    }

    // 重置密码
    static async resetpwd(ctx) {
        // await ……
    }
}

module.exports = UserController
