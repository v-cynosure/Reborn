const Koa = require('koa')
const Router = require('koa-router')
const koaLogger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
// const session = require('koa-session-minimal')
const mongoose = require('mongoose')

const app = new Koa()
const config = require('../config/default')
const userRouter = require('../rest/routes/user')
const indexRouter = require('../rest/routes/indexRoute')
const SessionStore = require('../rest/middlewares/sessionStore')

// mongoose
mongoose.connect(config.mongodb)

// log
app.use(koaLogger())

// body parse
app.use(bodyParser())

// session
app.use(session({
    key: config.session.key,
    maxAge: config.session.maxAge,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    store: new SessionStore({
        collection: 'users', //数据库集合
        connection: mongoose,     // 数据库链接实例
        expires: 86400, // 默认时间为1天
        name: 'session' // 保存session的表名称
    })
}, app))

// router
app
    .use(userRouter.routes())
    .use(userRouter.allowedMethods())
    // .use(indexRouter.routes())
    // .use(indexRouter.allowedMethods())

app.listen(config.port)

console.log(`Server running on port ${config.port}`)
