"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const dev_1 = require("../../config/dev");
const user_1 = require("../models/user");
class UserController {
    static async register(ctx) {
        let enhancePassword = null;
        const { username, email, password } = ctx.request.body;
        const isUserExit = await user_1.default.findOne({ username });
        if (isUserExit) {
            return (ctx.body = {
                code: 406,
                message: '该用户已存在，请使用密码登录',
            });
        }
        enhancePassword = await bcrypt.hash(password, 5);
        await user_1.default.create({
            username,
            email,
            password: enhancePassword,
        });
        ctx.body = {
            code: 200,
            message: '注册成功',
            user: username,
        };
    }
    static async login(ctx) {
        let isPasswordCorrect = false;
        const { username, password } = ctx.request.body;
        const user = await user_1.default.findOne({
            username,
        });
        if (!user) {
            return (ctx.body = {
                code: 403,
                message: '请先注册',
            });
        }
        isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return (ctx.body = {
                code: 403,
                message: '密码错误',
            });
        }
        ctx.status = 200;
        ctx.body = {
            message: '登录成功',
            user: username,
            token: jsonwebtoken.sign({
                user,
                exp: dev_1.default.token.exp,
            }, dev_1.default.token.secret),
        };
    }
    // 用户退出
    static async logout(ctx) {
        // just for test
        // const token = ctx.header.authorization
        const token = ctx.state.user;
        if (token) {
            ctx.body = '已经有token了';
        }
        else {
            ctx.body = '没有找到token';
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
exports.default = UserController;
//# sourceMappingURL=user.js.map