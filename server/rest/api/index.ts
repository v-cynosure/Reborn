import * as Koa from 'koa'
import userApi from './user'

const api = (app: Koa) => {
    app.use(userApi.routes()).use(userApi.allowedMethods())
}

export default api
