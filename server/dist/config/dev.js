"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: 9000,
    baseApi: 'api',
    auth: {
        excludes: [/\/api\/register/, /\/api\/login/],
    },
    cors: {
        origin: '*',
        credentials: true,
    },
    token: {
        secret: 'xfiles-reborn',
        exp: 2592000000,
    },
    app: {
        // 用户列表返回的字段名称
        userListInfo: ['username', 'isUpdated'],
        sortRule: {
            createdAt: 1,
        }
    },
    mongodb: 'mongodb://localhost:27017/reborn',
};
exports.default = config;
