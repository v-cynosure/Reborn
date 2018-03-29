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
}
exports.default = Service;
