"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");
const config = require('../../config/config.default');
class Auth {
    static signToken(username) {
        return jsonwebtoken.sign({ username, exp: config.token.exp }, config.token.secret);
    }
    static verifyToken() {
        return jwt({
            secret: config.token.secret,
        }).unless({ path: config.auth.excludes });
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
