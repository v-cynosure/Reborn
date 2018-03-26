import { Context } from 'koa'

class Service {
    ctx: Context
    constructor(ctx: Context) {
        this.ctx = ctx
    }
}

class check extends Service {
    index() {
        return 2 + 3
    }
}

module.exports = check
