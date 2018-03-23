interface DevConfig {
    port: number
    baseApi: string
    cors: {
        origin: string
        credentials: boolean
    }
    token: {
        secret: string
        exp: number
    }
    mongodb: string
}

const config: DevConfig = {
    port: 9000,
    baseApi: 'api',
    cors: {
        origin: '*',
        credentials: true,
    },
    token: {
        secret: 'xfiles-reborn',
        exp: 2592000000,
    },
    mongodb: 'mongodb://localhost:27017/reborn',
}

export default config
