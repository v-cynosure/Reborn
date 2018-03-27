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

    async list() {
        const users = await UserModel.find({})
        if (users) return users
        return null
    }
}

module.exports = Group
