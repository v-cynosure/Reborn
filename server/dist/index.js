"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const router = new Router();
router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});
app.use(bodyParser());
app.use(router.routes());
app.listen(3333);
console.log('Server running on port 3000');
//# sourceMappingURL=index.js.map