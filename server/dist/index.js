"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const cors = require("kcors");
const koaLogger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const middlewares_1 = require("./rest/middlewares");
const loader_1 = require("./rest/loader");
const app = new Koa();
// include router loader and controller loader
const loader = new loader_1.default(app);
const { config } = app;
// mongoose
middlewares_1.initMongodb(config.mongodb);
// cors
app.use(cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
}));
// check token
app.use(middlewares_1.Auth.errorHandle).use(middlewares_1.Auth.verifyToken());
// log
app.use(koaLogger());
// body parse
app.use(bodyParser());
// implement all api
app.use(loader.loadRouter());
app.listen(config.port, () => {
    console.log(`✅ The server is running at http://localhost:${config.port}/`);
});
