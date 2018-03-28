import * as Koa from 'koa'
import Service from './base'
import UserModel from '../models/user'

class Group extends Service {
    async get() {
        const { username } = this.ctx.params
        const user = await UserModel.findOne({ username })

        if (user) return user
        return null
    }

    async list(conditions: object) {
        const { query } = this.ctx.request
        const pageSize = parseInt(query.pageSize)
        const page = parseInt(query.page)

        const users = await UserModel.find(conditions)
            .limit(pageSize)
            .skip(page * pageSize)
            .sort({
                createdAt: 1,
            })

        if (users) return users
        return null
    }
}

module.exports = Group
