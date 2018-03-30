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
            { $push: { star: { id: target._id, createdAt: new Date() } } }
        )
    }

    async removeStar(target: object) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: origin },
            { $pull: { star: { id: target._id, createdAt: new Date() } } }
        )
    }

    async countStar(username: string, inc: number) {
        await this.ctx.model.user.update(
            { username },
            { $inc: { starCount: inc } }
        )
    }

    async addStared(origin: object) {
        const { targetUser } = this.ctx.request.body
        await this.ctx.model.user.update(
            { username: targetUser },
            { $push: { stared: { id: origin._id, createdAt: new Date() } } }
        )
    }

    async removeStared(target: object) {
        const origin = this.currentUser()
        await this.ctx.model.user.update(
            { username: origin },
            { $pull: { stared: { id: target._id, createdAt: new Date() } } }
        )
    }

    async countStared(username: string, inc: number) {
        await this.ctx.model.user.update(
            { username },
            { $inc: { staredCount: inc } }
        )
    }

    async getStarList() {
        const { username } = this.currentUser()
        const users = await this.ctx.model.user
            .find({ username })
            .populate('star.id')
        return users
    }

    async getStaredList() {
        const { username } = this.currentUser()
        const users = await this.ctx.model.user
            .find({ username })
            .populate('stared.id')
        return users
    }
}

module.exports = Attitude
