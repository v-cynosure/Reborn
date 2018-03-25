import * as fs from 'fs'
import { Context } from 'koa'
import * as Router from 'koa-router'

class Loader {
    router: Router = new Router()
    controller: any = {}

    loadController() {
        // read all dirs
        const dirs = fs.readdirSync(__dirname + '/controllers')
        dirs.forEach(filename => {
            // filename as controller's property
            const splits = filename.split('.')

            if (!splits.includes('map')) {
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

    loadRouter() {
        this.loadController()
        const mod = require(__dirname + '/router.js')
        const routers = mod(this.controller)
        console.log(routers)

        Object.keys(routers).forEach(key => {
            const [method, path] = key.split(' ')

            // obversely, this is a rare case to use semicolon
            ;(<any>this.router)[method](path, async (ctx: Context) => {
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
