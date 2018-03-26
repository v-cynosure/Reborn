import * as Koa from 'koa'

class Service {
    ctx: Koa.Context
    app: Koa
    constructor(ctx: Koa.Context, app: Koa) {
        this.ctx = ctx
        this.app = app
    }
}

class check extends Service {
    index() {
        return 2 + 3
    }
}

module.exports = check
