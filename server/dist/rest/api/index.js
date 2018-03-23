"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const api = (app) => {
    app.use(user_1.default.routes()).use(user_1.default.allowedMethods());
};
exports.default = api;
//# sourceMappingURL=index.js.map