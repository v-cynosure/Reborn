const checkLogin = async (ctx, next) => {
    if (!ctx.session.user) {
        ctx.redirect('/signin')
    }
    await next()
}

const checkNotLogin = async (ctx, next) => {
    if (ctx.session.user) {
        ctx.throw(200, '您已登录，请勿重复登陆')
        ctx.redirect('/')
    }
    await next()
}

module.exports = {
    checkLogin,
    checkNotLogin,
}
