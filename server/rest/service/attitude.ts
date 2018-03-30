import * as Koa from 'koa'
import Service from './base'

class Attitude extends Service {
    /**
     * add user to star or stared list
     * @param origin the person who star or stared
     * @param target the person who star or stared
     * @param list star or stared
     */
    async addStar(target: object) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: origin },
            { $push: { star: target } }
        )
    }

    async removeStar(target: string) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: origin },
            { $pull: { star: { username: target } } }
        )
    }

    async countStar(username: string, inc: number) {
        return this.ctx.medel.user.update(
            { username },
            { $inc: { starCount: 1 } }
        )
    }

    async addStared(target: string) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: target },
            { $push: { stared: origin } }
        )
    }

    async removeStared(target: string) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: origin },
            { $pull: { stared: { username: target } } }
        )
    }

    async countStared(username: string, inc: number) {
        await this.ctx.medel.user.update(
            { username },
            { $inc: { staredCount: inc } }
        )
    }
}

module.exports = Attitude
