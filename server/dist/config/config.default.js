"use strict";
module.exports = {
    baseApi: 'api',
    auth: {
        excludes: [/\/api\/register/, /\/api\/login/],
    },
    token: {
        secret: 'xfiles-reborn',
        exp: 2592000000,
    },
};
