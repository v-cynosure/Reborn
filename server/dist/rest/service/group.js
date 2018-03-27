"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const user_1 = require("../models/user");
class Group extends base_1.default {
    async get() {
        const { username } = this.ctx.params;
        const user = await user_1.default.findOne({ username });
        if (user)
            return user;
        return null;
    }
    async list() {
        const users = await user_1.default.find({});
        if (users)
            return users;
        return null;
    }
}
module.exports = Group;
