"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(ctx, app) {
        this.ctx = ctx;
        this.app = app;
    }
    getConfig() {
        return this.app['config'];
    }
    currentUser() {
        const username = this.ctx.state.user;
        return username;
    }
    async currentUserInfo() {
        const username = this.currentUser();
        const user = await this.ctx.model.findOne({
            username
        });
        if (user)
            return user;
        return null;
    }
}
exports.default = Service;
