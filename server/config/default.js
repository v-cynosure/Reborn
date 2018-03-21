module.exports = {
    port: 3333,
    session: {
        secret: 'xfiles-reborn',
        key: 'xfiles-reborn',
        maxAge: 2592000000,
    },
    mongodb: 'mongodb://localhost:27017/reborn'
}
