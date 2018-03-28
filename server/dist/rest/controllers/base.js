"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(ctx, app) {
        this.ctx = ctx;
        this.app = app;
    }
    emit(code, message, payload) {
        this.ctx.body = {
            code,
            message,
            payload,
        };
    }
}
exports.default = Controller;
