"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Attitude extends base_1.default {
    async addStar(id) {
        await this.ctx.model.user.update({ username: this.currentUserName() }, { $push: { star: id } });
    }
    async removeStar(id) {
        await this.ctx.model.user.update({ username: this.currentUserName() }, { $pull: { star: id } });
    }
    async countStar(username, inc) {
        await this.ctx.model.user.update({ username }, { $inc: { starCount: inc } });
    }
    async addStared(id) {
        const { favorite } = this.ctx.request.body;
        await this.ctx.model.user.update({ username: favorite }, { $push: { stared: id } });
    }
    async removeStared(id) {
        let { favorite } = this.ctx.request.body;
        await this.ctx.model.user.update({ username: favorite }, { $pull: { stared: id } });
    }
    async countStared(username, inc) {
        await this.ctx.model.user.update({ username }, { $inc: { staredCount: inc } });
    }
    async starList() {
        const users = await this.ctx.model.user
            .find({ username: this.currentUserName() })
            .populate('star');
        return users[0].star;
    }
    async staredList() {
        const users = await this.ctx.model.user
            .find({ username: this.currentUserName() })
            .populate('stared');
        return users;
    }
}
module.exports = Attitude;
