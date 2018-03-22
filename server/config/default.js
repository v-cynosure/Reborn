module.exports = {
    port: 9000,
    token: {
        secret: 'xfiles-reborn',
        exp: 2592000000,
    },
    // session: {
    //     secret: 'xfiles-reborn',
    //     key: 'xfiles-reborn',
    //     maxAge: 2592000000,
    // },
    mongodb: 'mongodb://localhost:27017/reborn',
}
