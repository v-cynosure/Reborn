"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authHandle = (ctx, next) => {
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
};
exports.default = authHandle;
//# sourceMappingURL=authHandle.js.map