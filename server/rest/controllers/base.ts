import * as Koa from 'koa'

class Controller {
    ctx: Koa.Context
    app: Koa

    constructor(ctx: Koa.Context, app: Koa) {
        this.ctx = ctx
        this.app = app
    }

    getConfig() {
        return (<any>this.app)['config']
    }

    emit(code: number, message: string, payload?: object) {
        this.ctx.body = {
            code,
            message,
            payload,
        }
    }

    currentUser() {
        const username = this.ctx.state.user
        return username
        // const user = await this.ctx.model.findOne({
        //     username
        // })

        // if (user) return user
        // return null
    }
}

export default Controller
