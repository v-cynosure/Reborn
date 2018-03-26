import * as fs from 'fs'
import * as Koa from 'koa'
import * as Router from 'koa-router'

class Loader {
    router: Router = new Router()
    controller: any = {}
    app: Koa

    constructor(app: Koa) {
        this.app = app
    }

    /**
     * set Koa.ctx a global property service
     * you can directly use this.ctx.service.filename.method() in controller
     * scan service dir, bind files' methods to service property
     * use cache to optimize
     * @returns void
     * @memberof Loader
     */
    loadService() {
        const service = fs.readdirSync(__dirname + '/service')

        Object.defineProperty(this.app.context, 'service', {
            get() {
                // set cache
                if (!(<any>this)['cache']) {
                    ;(<any>this)['cache'] = {}
                }
                const loaded = (<any>this)['cache']

                if (!loaded['service']) {
                    loaded['service'] = {}
                    service.forEach(dir => {
                        const splits = dir.split('.')

                        if (
                            !splits.includes('map') &&
                            !splits.includes('DS_Store')
                        ) {
                            const name = splits[0]
                            const mod = require(__dirname + '/service/' + dir)

                            loaded['service'][name] = new mod(this)
                        }
                    })
                    return loaded.service
                }
                return loaded.service
            },
        })
    }

    /**
     * set this.controller.filename.method
     * scan controllers dir and set property
     * @memberof Loader
     */
    loadController() {
        // read all dirs
        const dirs = fs.readdirSync(__dirname + '/controllers')
        dirs.forEach(filename => {
            // filename as controller's property
            const splits = filename.split('.')

            if (!splits.includes('map') && !splits.includes('DS_Store')) {
                const property = splits[0]

                // mod: [Function: Controller] [Function: User]
                const mod = require(__dirname + '/controllers/' + filename)
                    .default

                if (mod) {
                    // find all property
                    const methodNames = Object.getOwnPropertyNames(
                        mod.prototype
                    ).filter(names => {
                        if (names !== 'constructor') {
                            return names
                        }
                    })

                    Object.defineProperty(this.controller, property, {
                        get() {
                            const merge: {
                                [key: string]: any
                            } = {}
                            methodNames.forEach(name => {
                                merge[name] = {
                                    type: mod,
                                    methodName: name,
                                }
                            })
                            return merge
                        },
                    })
                }
            }
        })
    }
    /**
     * Template [method /api/]: controller[filename][method]
     * this.controller has been create by loadController
     * Resolve template auto
     * note that set new ctx in class everytime
     * @returns router.routes()
     * @memberof Loader
     */
    loadRouter() {
        this.loadController()
        this.loadService()

        const mod = require(__dirname + '/router.js')
        const routers = mod(this.controller)

        Object.keys(routers).forEach(key => {
            const [method, path] = key.split(' ')

            // obversely, this is a rare case to use semicolon
            ;(<any>this.router)[method](path, async (ctx: Koa.Context) => {
                const _class = routers[key].type
                const handle = routers[key].methodName
                const instance = new _class(ctx)
                instance[handle]()
            })
        })
        return this.router.routes()
    }
}

export default Loader
