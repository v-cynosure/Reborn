import * as Koa from 'koa'
import * as bcrypt from 'bcrypt'
import Service from './base'
import UserModel from '../models/user'

class User extends Service {
    async get() {
        const { username } = this.ctx.request.body
        const user = await UserModel.findOne({ username })

        if (user) return user
        return null
    }

    async checkPassword(password1: any, password2: any) {
        const isCorrect = await bcrypt.compare(password1, password2)
        return isCorrect
    }

    async create() {
        const { username, email, password } = this.ctx.request.body
        const enhancePassword = await bcrypt.hash(password, 5)

        UserModel.create({
            username,
            email,
            password: enhancePassword,
        })
    }

    async update(username: string, info: Object) {
        // const obj = Object.assign({}, info, { isUpdated: true })
        return await UserModel.update(
            { username },
            { ...info, isUpdated: true },
            (error, docs) => {
                return error ? false : true
            }
        )
    }
}

// notice that you should use medule.esports instead of export default
module.exports = User
