"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const cors = require("kcors");
const koaLogger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const dev_1 = require("./config/dev");
const middlewares_1 = require("./rest/middlewares");
const _1 = require("./rest/api/");
const app = new Koa();
// mongoose
middlewares_1.initMongodb(dev_1.default.mongodb);
// cors
app.use(cors({
    origin: dev_1.default.cors.origin,
    credentials: dev_1.default.cors.credentials,
}));
// check token
middlewares_1.verifyToken(app, middlewares_1.authHandle);
// log
app.use(koaLogger());
// body parse
app.use(bodyParser());
// implement all api
_1.default(app);
app.listen(3333);
app.listen(dev_1.default.port, () => {
    console.log(`✅ The server is running at http://localhost:${dev_1.default.port}/`);
});
//# sourceMappingURL=index.js.map