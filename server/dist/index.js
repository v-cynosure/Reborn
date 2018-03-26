"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const cors = require("kcors");
const koaLogger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const dev_1 = require("./config/dev");
const middlewares_1 = require("./rest/middlewares");
const loader_1 = require("./rest/loader");
const app = new Koa();
// include router loader and controller loader
const loader = new loader_1.default(app);
// mongoose
middlewares_1.initMongodb(dev_1.default.mongodb);
// cors
app.use(cors({
    origin: dev_1.default.cors.origin,
    credentials: dev_1.default.cors.credentials,
}));
// check token
app.use(middlewares_1.Auth.errorHandle).use(middlewares_1.Auth.verifyToken());
// log
app.use(koaLogger());
// body parse
app.use(bodyParser());
// implement all api
app.use(loader.loadRouter());
app.listen(dev_1.default.port, () => {
    console.log(`✅ The server is running at http://localhost:${dev_1.default.port}/`);
});
