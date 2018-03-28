import * as Koa from 'koa'

class Controller {
    ctx: Koa.Context
    app: Koa

    constructor(ctx: Koa.Context, app: Koa) {
        this.ctx = ctx
        this.app = app
    }

    emit(code: number, message: string, payload?: object) {
        this.ctx.body = {
            code,
            message,
            payload,
        }
    }
}

export default Controller
