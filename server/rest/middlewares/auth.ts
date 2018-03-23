import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as jsonwebtoken from 'jsonwebtoken'
import config from '../../config/dev'

export const signToken = (user: string) => {
    return jsonwebtoken.sign(
        {
            user,
            exp: config.token.exp,
        },
        config.token.secret
    )
}

export const verifyToken = (app: Koa, handle: any) => {
    app.use(handle).use(
        jwt({
            secret: config.token.secret,
        }).unless({
            path: [/\/api\/register/, /\/api\/login/],
        })
    )
}
