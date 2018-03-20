import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session-minimal'

const app = new Koa()
const router = new Router()

router.get('/*', async ctx => {
    ctx.body = 'Hello World!'
})

app.use(bodyParser())
app.use(router.routes())

app.listen(3333)

console.log('Server running on port 3000')
