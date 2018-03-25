"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Router = require("koa-router");
class Loader {
    constructor() {
        this.router = new Router();
        this.controller = {};
    }
    loadController() {
        // read all dirs
        const dirs = fs.readdirSync(__dirname + '/controllers');
        dirs.forEach(filename => {
            // filename as controller's property
            const splits = filename.split('.');
            if (!splits.includes('map')) {
                const property = splits[0];
                // mod: [Function: Controller] [Function: User]
                const mod = require(__dirname + '/controllers/' + filename)
                    .default;
                if (mod) {
                    // find all property
                    const methodNames = Object.getOwnPropertyNames(mod.prototype).filter(names => {
                        if (names !== 'constructor') {
                            return names;
                        }
                    });
                    Object.defineProperty(this.controller, property, {
                        get() {
                            const merge = {};
                            methodNames.forEach(name => {
                                merge[name] = {
                                    type: mod,
                                    methodName: name,
                                };
                            });
                            return merge;
                        },
                    });
                }
            }
        });
    }
    loadRouter() {
        this.loadController();
        const mod = require(__dirname + '/router.js');
        const routers = mod(this.controller);
        console.log(routers);
        Object.keys(routers).forEach(key => {
            const [method, path] = key.split(' ');
            this.router[method](path, async (ctx) => {
                const _class = routers[key].type;
                const handle = routers[key].methodName;
                const instance = new _class(ctx);
                instance[handle]();
            });
        });
        return this.router.routes();
    }
}
exports.default = Loader;
