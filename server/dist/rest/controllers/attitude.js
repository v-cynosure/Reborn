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
class Attitude extends base_1.default {
    async star() {
        const config = this.getConfig();
        const currentUser = this.currentUser();
        const { targetUser } = this.ctx.request.body;
        try {
            const currentUserInfo = await this.ctx.service.user.find(currentUser, config.app.userListInfo);
            const targetUserInfo = await this.ctx.service.user.find(targetUser, config.app.userListInfo);
            await this.ctx.service.attitude.addStar(targetUserInfo);
            await this.ctx.service.attitude.countStar(currentUser, 1);
            await this.ctx.service.attitude.addStared(currentUserInfo);
            await this.ctx.service.attitude.countStared(targetUser, 1);
        }
        catch (error) {
            this.emit(400, '点赞失败');
            this.ctx.throw(500);
        }
    }
    async unStar() {
        const config = this.getConfig();
        const currentUser = this.currentUser();
        const { targetUser } = this.ctx.request.body;
        try {
            const currentUserInfo = await this.ctx.service.user.find(currentUser, config.app.userListInfo);
            const targetUserInfo = await this.ctx.service.user.find(targetUser, config.app.userListInfo);
            await this.ctx.service.attitude.removeStar(targetUserInfo);
            await this.ctx.service.attitude.countStar(currentUser, -1);
            await this.ctx.service.attitude.removeStared(currentUserInfo);
            await this.ctx.service.attitude.countStared(targetUser, -1);
        }
        catch (error) {
            this.emit(400, '取消点赞失败');
            this.ctx.throw(500);
        }
    }
    async starList() {
        try {
            const users = await this.ctx.service.user.getStarList();
            if (!users) {
                return this.emit(400, '还没有点赞过的人');
            }
            this.emit(200, '获取点赞列表成功', users);
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    async staredList() {
        try {
            const users = await this.ctx.service.user.getStaredList();
            if (!users) {
                return this.emit(400, '还没有被别人点赞过呢QWQ');
            }
            this.emit(200, '获取点赞列表成功', users);
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
}
__decorate([
    blueprint_1.default.post('/api/attitude/star/create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "star", null);
__decorate([
    blueprint_1.default.post('/api/attitude/star/destory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "unStar", null);
__decorate([
    blueprint_1.default.post('/api/attitude/star/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "starList", null);
__decorate([
    blueprint_1.default.get('/api/attitude/stared/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "staredList", null);
exports.default = Attitude;
