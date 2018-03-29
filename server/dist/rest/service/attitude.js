"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Attitude extends base_1.default {
    async star(current, target) {
        this.ctx.model.user.update({
            username: current,
        }, { $push: { 'star': target } });
    }
}
exports.default = Attitude;
