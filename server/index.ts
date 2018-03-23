import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as jwt from 'koa-jwt'
import * as cors from 'kcors'
import * as koaLogger from 'koa-logger'
import * as bodyParser from 'koa-bodyparser'
import config from './config/dev'
import {
    initMongodb,
    verifyToken,
    authHandle
} from './rest/middlewares'

import api from './rest/api/'

const app = new Koa()

// mongoose
initMongodb(config.mongodb)

// cors
app.use(
    cors({
        origin: config.cors.origin,
        credentials: config.cors.credentials,
    })
)

// check token
verifyToken(app, authHandle)

// log
app.use(koaLogger())

// body parse
app.use(bodyParser())

// implement all api
api(app)

app.listen(3333)

app.listen(config.port, () => {
    console.log(`✅ The server is running at http://localhost:${config.port}/`)
})
