import { Context } from 'koa'

class Controller {
    ctx: Context
    constructor(ctx: Context) {
        this.ctx = ctx
    }
}

export default Controller
