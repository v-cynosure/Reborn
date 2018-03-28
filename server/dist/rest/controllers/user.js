"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const base_1 = require("./base");
const user_1 = require("../models/user");
const _1 = require("../middlewares/");
const blueprint_1 = require("../blueprint");
class User extends base_1.default {
    getConfig() {
        return this.app['config'];
    }
    async register() {
        try {
            let enhancePassword = null;
            const { username, email, password } = this.ctx.request.body;
            const isUserExit = await user_1.default.findOne({ username });
            if (isUserExit) {
                return (this.ctx.body = {
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
            this.ctx.body = {
                code: 200,
                message: '注册成功',
                user: username,
                token: _1.Auth.signToken(username),
            };
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    async login() {
        try {
            let isPasswordCorrect = false;
            const { username, password } = this.ctx.request.body;
            const user = await user_1.default.findOne({
                username,
            });
            if (!user) {
                return (this.ctx.body = {
                    code: 403,
                    message: '请先注册',
                });
            }
            isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return (this.ctx.body = {
                    code: 403,
                    message: '密码错误',
                });
            }
            this.ctx.status = 200;
            this.ctx.body = {
                message: '登录成功',
                user: username,
                token: _1.Auth.signToken(username),
            };
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    // 用户退出
    async logout() {
        //     // await ……
    }
}
__decorate([
    blueprint_1.default.post('/api/register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "register", null);
__decorate([
    blueprint_1.default.post('/api/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "login", null);
__decorate([
    blueprint_1.default.post('/api/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "logout", null);
exports.default = User;
