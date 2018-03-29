import * as Koa from 'koa'
import bp from '../blueprint'
import Controller from './base'
import code from '../../constants/code'

class Group extends Controller {
    @bp.get('/api/users/:username')
    async getUser() {
        try {
            const user = await this.ctx.service.group.findOne()
            await this.ctx.service.group.counter(user)

            if (!user) {
                return this.emit(
                    code.USER_GET_INFO_ERROR,
                    code.USER_GET_INFO_ERROR_MSG
                )
            }
            this.emit(
                code.USER_GET_INFO_SUCCESS,
                code.USER_GET_INFO_SUCCESS_MSG,
                user
            )
        } catch (error) {
            this.ctx.throw(code.SERVER_ERROR)
        }
    }

    @bp.get('/api/users')
    async getUserList(conditions: object = {}) {
        try {
            const users = await this.ctx.service.group.list(conditions)

            if (!users) {
                return this.emit(
                    code.USER_LIST_GET_ERROR,
                    code.USER_LIST_GET_ERROR_MSG
                )
            }
            this.emit(
                code.USER_LIST_GET_SUCCESS,
                code.USER_LIST_GET_SUCCESS_MSG,
                users
            )
        } catch (error) {
            this.ctx.throw(code.SERVER_ERROR)
        }
    }

    @bp.get('/api/users/:department')
    async getUsersByDepartment() {
        const { department } = this.ctx.params
        this.getUserList({ department })
    }

    @bp.get('/api/users/search')
    async getUserBySearch() {
    }
}

export default Group
