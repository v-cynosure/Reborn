"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: 9000,
    baseApi: 'api',
    cors: {
        origin: '*',
        credentials: true,
    },
    token: {
        secret: 'xfiles-reborn',
        exp: 2592000000,
    },
    mongodb: 'mongodb://localhost:27017/reborn',
};
exports.default = config;
//# sourceMappingURL=dev.js.map