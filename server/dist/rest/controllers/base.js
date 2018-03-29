"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(ctx, app) {
        this.ctx = ctx;
        this.app = app;
    }
    getConfig() {
        return this.app['config'];
    }
    emit(code, message, payload) {
        this.ctx.body = {
            code,
            message,
            payload,
        };
    }
    currentUser() {
        const username = this.ctx.state.user;
        return username;
        // const user = await this.ctx.model.findOne({
        //     username
        // })
        // if (user) return user
        // return null
    }
}
exports.default = Controller;
