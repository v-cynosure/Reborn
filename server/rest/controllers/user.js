const md5 = require('md5')
const UserModel = require('../models/user')

class UserController {
    // 用户注册
    static async register(ctx) {
        const { username, email, password } = ctx.request.body
        let isUserExit = await UserModel.findOne({ username })

        // 用户名, 密码为空
        if (!username || !password) {
            return ctx.throw(400, '请输入用户名和密码')
        }

        // 用户已经存在
        if (isUserExit) {
            return ctx.throw(400, '该用户已存在')
        }

        // 创建新用户
        const result = await UserModel.create({
            username,
            email,
            password: md5(password),
        })
        if (!result) {
            return ctx.throw(400, '该用户已存在')
        }
        return ctx.throw(200, '注册成功')
    }

    // 用户登录
    static async login(ctx) {
        // await ……
        const { username, password } = ctx.request.body

        if (ctx.session.user) {
            return ctx.body = `${ctx.session.user} 已登录，请勿重复登录`
        } else {
            console.log(ctx.session.user)
            return ctx.body = ctx.session.user
        }

        // 用户名, 密码为空
        if (!username || !password) {
            return ctx.throw(400, '请输入用户名和密码')
        }

        const isFind = await UserModel.findOne({
            username,
            password: md5(password),
        })
        if (!isFind) {
            return ctx.throw(403, '请检查用户名和密码')
        }
        return ctx.throw(200, '登录成功')
    }

    // 用户退出
    static async logout(ctx) {
        // await ……
        ctx.body = 'logout'
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
