"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");
const dev_1 = require("../../config/dev");
exports.signToken = (username) => {
    return jsonwebtoken.sign({
        username,
        exp: dev_1.default.token.exp,
    }, dev_1.default.token.secret);
};
exports.verifyToken = (app, handle) => {
    app.use(handle).use(jwt({
        secret: dev_1.default.token.secret,
    }).unless({
        path: [/\/api\/register/, /\/api\/login/],
    }));
};
//# sourceMappingURL=auth.js.map