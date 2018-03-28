"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const base_1 = require("./base");
const user_1 = require("../models/user");
class User extends base_1.default {
    async get() {
        const { username } = this.ctx.request.body;
        const user = await user_1.default.findOne({ username });
        if (user)
            return user;
        return null;
    }
    async checkPassword(password1, password2) {
        const isCorrect = await bcrypt.compare(password1, password2);
        return isCorrect;
    }
    async create() {
        const { username, email, password } = this.ctx.request.body;
        const enhancePassword = await bcrypt.hash(password, 5);
        user_1.default.create({
            username,
            email,
            password: enhancePassword,
        });
    }
    async update(username, info) {
        // const obj = Object.assign({}, info, { isUpdated: true })
        return await user_1.default.update({ username }, Object.assign({}, info, { isUpdated: true }), (error, docs) => {
            return error ? false : true;
        });
    }
}
// notice that you should use medule.esports instead of export default
module.exports = User;
