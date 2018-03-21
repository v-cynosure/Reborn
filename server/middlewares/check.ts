export const checkLogin = (req, res, next) {
    if (!req.session.user) {
        res.redirect('/signin')
    }
    next()
}

export const checkNotLogin = (req, res, next) {
    if (req.session.user) {
        req.redirect('back')
    }
    next()
}
