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
const code_1 = require("../../constants/code");
class Group extends base_1.default {
    async getUser() {
        try {
            const user = await this.ctx.service.group.findOne();
            await this.ctx.service.group.counter(user);
            if (!user) {
                return this.emit(code_1.default.USER_GET_INFO_ERROR, code_1.default.USER_GET_INFO_ERROR_MSG);
            }
            this.emit(code_1.default.USER_GET_INFO_SUCCESS, code_1.default.USER_GET_INFO_SUCCESS_MSG, user);
        }
        catch (error) {
            this.ctx.throw(code_1.default.SERVER_ERROR);
        }
    }
    async getUserList(conditions = {}) {
        try {
            const users = await this.ctx.service.group.list(conditions);
            if (!users) {
                return this.emit(code_1.default.USER_LIST_GET_ERROR, code_1.default.USER_LIST_GET_ERROR_MSG);
            }
            this.emit(code_1.default.USER_LIST_GET_SUCCESS, code_1.default.USER_LIST_GET_SUCCESS_MSG, users);
        }
        catch (error) {
            this.ctx.throw(code_1.default.SERVER_ERROR);
        }
    }
    async getUsersByDepartment() {
        const { department } = this.ctx.params;
        this.getUserList({ department });
    }
    async getUserBySearch() {
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
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Group.prototype, "getUserList", null);
__decorate([
    blueprint_1.default.get('/api/users/:department'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Group.prototype, "getUsersByDepartment", null);
__decorate([
    blueprint_1.default.get('/api/users/search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Group.prototype, "getUserBySearch", null);
exports.default = Group;
