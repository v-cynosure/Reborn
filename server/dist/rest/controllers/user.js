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
const base_1 = require("./base");
const blueprint_1 = require("../blueprint");
const _1 = require("../middlewares/");
class User extends base_1.default {
    getConfig() {
        return this.app['config'];
    }
    async register() {
        let enhancePassword = null;
        const { username, email, password } = this.ctx.request.body;
        try {
            const isUserExit = await this.ctx.service.user.get();
            if (isUserExit) {
                return (this.ctx.body = {
                    code: 406,
                    message: '该用户已存在，请使用密码登录',
                });
            }
            await this.ctx.service.user.create();
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
        const { service } = this.ctx;
        const { username, email, password } = this.ctx.request.body;
        try {
            const user = await service.user.get();
            if (!user) {
                return (this.ctx.body = {
                    code: 403,
                    message: '请先注册',
                });
            }
            const isCorrect = await service.user.checkPassword(password, user.password);
            if (!isCorrect) {
                return (this.ctx.body = {
                    code: 403,
                    message: '密码错误',
                });
            }
            this.ctx.status = 200;
            this.ctx.body = {
                code: 200,
                message: '登录成功',
                user: username,
                token: _1.Auth.signToken(username),
            };
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    async logout() {
        //     // await ……
        console.log(this.ctx.state);
    }
    async updateMe() {
        const { service } = this.ctx;
        const { username } = this.ctx.state.user;
        const info = this.ctx.request.body;
        try {
            const isUpdate = await service.user.update(username, info);
            if (!isUpdate) {
                return (this.ctx.body = {
                    code: 500,
                    message: '更新失败',
                });
            }
            this.ctx.body = {
                code: 200,
                message: '更新成功',
            };
        }
        catch (error) {
            this.ctx.throw(500);
        }
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
__decorate([
    blueprint_1.default.put('/api/updateMe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "updateMe", null);
exports.default = User;
