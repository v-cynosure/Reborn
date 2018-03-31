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
        const { favorite } = this.ctx.request.body;
        if (!favorite) {
            return this.emit(404, '请携带参数');
        }
        try {
            const current = await this.currentUser();
            const target = await this.ctx.service.user.find(favorite);
            const currentId = current._id;
            const targetId = target._id;
            await this.ctx.service.attitude.addStar(targetId);
            await this.ctx.service.attitude.countStar(current.username, 1);
            await this.ctx.service.attitude.addStared(currentId);
            await this.ctx.service.attitude.countStared(target.username, 1);
        }
        catch (error) {
            this.emit(400, '点赞失败');
            this.ctx.throw(500);
        }
    }
    async unStar() {
        const { favorite } = this.ctx.request.body;
        if (!favorite) {
            return this.emit(404, '请携带参数');
        }
        try {
            const current = await this.currentUser();
            const target = await this.ctx.service.user.find(favorite);
            const currentId = current._id;
            const targetId = target._id;
            await this.ctx.service.attitude.removeStar(targetId);
            await this.ctx.service.attitude.countStar(current.username, -1);
            await this.ctx.service.attitude.removeStared(currentId);
            await this.ctx.service.attitude.countStared(target.username, -1);
        }
        catch (error) {
            this.emit(400, '取消点赞失败');
            this.ctx.throw(500);
        }
    }
    async getStarList() {
        try {
            const users = await this.ctx.service.attitude.starList();
            if (!users || users.length === 0) {
                return this.emit(400, '还没有点赞过的人');
            }
            this.emit(200, '获取点赞列表成功', users);
        }
        catch (error) {
            this.ctx.throw(500);
        }
    }
    async getStaredList() {
        try {
            const users = await this.ctx.service.attitude.staredList();
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
    blueprint_1.default.post('/api/attitude/star/destroy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "unStar", null);
__decorate([
    blueprint_1.default.get('/api/attitude/star/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "getStarList", null);
__decorate([
    blueprint_1.default.get('/api/attitude/stared/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "getStaredList", null);
exports.default = Attitude;
