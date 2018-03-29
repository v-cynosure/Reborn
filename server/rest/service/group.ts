import * as Koa from 'koa'
import Service from './base'

class Group extends Service {
    async findOne() {
        const { username } = this.ctx.params
        const user = await this.ctx.model.user.findOne({ username })

        if (user) return user
        return null
    }

    // 计算用户浏览量
    async counter(user: { username: string; visit: number }) {
        const { username, visit } = user
        this.ctx.service.user.update(username, {
            visit: visit + 1,
        })
    }

    /**
     * 获取用户列表
     * @param conditions 查询条件
     * @return 返回满足条件的用户列表
     */
    async list(conditions: object) {
        const { query } = this.ctx.request
        const pageSize = parseInt(query.pageSize)
        const page = parseInt(query.page)
        const config = this.getConfig()

        const users = await this.ctx.model.user
            .find(conditions, config.app.userListInfo)
            .limit(pageSize)
            .skip(page * pageSize)
            .sort(config.app.sortRule)

        if (users) return users
        return null
    }
}

module.exports = Group
