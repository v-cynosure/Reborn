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
        const currentUser = this.currentUser();
        const { targetUser } = this.ctx.request.body;
        const result = await this.ctx.service.star(currentUser, targetUser);
        if (result) {
            this.emit(200, '点赞成功');
        }
    }
    async unStar() { }
    async starList() { }
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
    blueprint_1.default.get('/api/attitude/star/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Attitude.prototype, "starList", null);
exports.default = Attitude;
