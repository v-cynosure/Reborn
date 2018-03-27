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
const blueprint_1 = require("../blueprint");
const base_1 = require("./base");
class Group extends base_1.default {
    getConfig() {
        return this.app['config'];
    }
    async getUser() {
        try {
            const user = await this.ctx.service.group.get();
            if (!user) {
                return (this.ctx.body = {
                    code: 404,
                    message: '找不到该用户的信息',
                });
            }
            this.ctx.body = {
                code: 200,
                message: '成功返回',
                payload: user,
            };
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    async getUserList() {
        const users = await this.ctx.service.group.list();
        if (!users) {
            return (this.ctx.body = {
                code: 404,
                message: '竟然一个用户都没有，忧桑',
            });
        }
        this.ctx.body = {
            code: 200,
            message: '成功返回所有用户',
            payload: users,
        };
    }
}
__decorate([
    blueprint_1.default.get('/api/users/:username'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Group.prototype, "getUser", null);
__decorate([
    blueprint_1.default.get('/api/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Group.prototype, "getUserList", null);
exports.default = Group;
