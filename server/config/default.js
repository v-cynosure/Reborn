module.exports = {
    port: 3000,
    session: {
        secret: 'xfiles',
        key: 'xfiles',
        maxAge: 2592000000,
    },
    mongodb: 'mongodb://localhost:27017/xfiles'
}
