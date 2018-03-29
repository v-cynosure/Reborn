import * as Koa from 'koa'

class Service {
    ctx: Koa.Context
    app: Koa

    constructor(ctx: Koa.Context, app: Koa) {
        this.ctx = ctx
        this.app = app
    }

    getConfig() {
        return (<any>this.app)['config']
    }
}

export default Service
