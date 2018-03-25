"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");
const dev_1 = require("../../config/dev");
class Auth {
    static signToken(username) {
        return jsonwebtoken.sign({ username, exp: dev_1.default.token.exp }, dev_1.default.token.secret);
    }
    static verifyToken() {
        return jwt({
            secret: dev_1.default.token.secret,
        }).unless({ path: dev_1.default.auth.excludes });
    }
    static errorHandle(ctx, next) {
        return next().catch((err) => {
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    error: err.originalError
                        ? err.originalError.message
                        : err.message,
                };
            }
            else {
                throw err;
            }
        });
    }
}
exports.default = Auth;
