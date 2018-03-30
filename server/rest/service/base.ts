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

    currentUser() {
        const username = this.ctx.state.user
        return username
    }

    async currentUserInfo() {
        const username = this.currentUser()
        const user = await this.ctx.model.findOne({
            username
        })

        if (user) return user
        return null
    }
}

export default Service
