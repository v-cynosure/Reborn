import * as Koa from 'koa'
import Service from './base'

class Attitude extends Service {
    async star(current: string, target: string) {
        this.ctx.model.user.update({
            username: current,
        }, {$push: {'star': target}})
    }

    // async addStared() {
    //     const { username } = this.ctx.request.body
    //     this.ctx.model.user.update({
    //         username
    //     }, {$push: {'star': username}})
    // }
}

export default Attitude
