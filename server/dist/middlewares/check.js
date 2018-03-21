"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/signin');
    }
    next();
};
exports.checkNotLogin = (req, res, next) => {
    if (req.session.user) {
        req.redirect('back');
    }
    next();
};
//# sourceMappingURL=check.js.map