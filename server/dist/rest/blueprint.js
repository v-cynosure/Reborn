"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blueprint {
    constructor() {
        //用于保存路由的映射关系
        this.router = {};
    }
    setRouter(url, blueprint) {
        const _bp = this.router[url];
        if (_bp) {
            //检查http method 是否冲突
            for (const index in _bp) {
                const object = _bp[index];
                if (object.httpMethod === blueprint.httpMethod) {
                    console.log(`路由地址 ${object.httpMethod} ${url} 已经存在`);
                    return;
                }
            }
            //不冲突则注册
            this.router[url].push(blueprint);
        }
        else {
            this.router[url] = [];
            this.router[url].push(blueprint);
        }
    }
    /**
     * 用法@instance.get('/')
     * @param url
     * @param target class.prototype
     * @param propertyKey class.method
     */
    get(url) {
        return (target, propertyKey) => {
            ;
            this.setRouter(url, {
                httpMethod: 'get',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }
    /**
     * 用法@instance.post('/')
     * @param url
     * @param target class.prototype
     * @param propertyKey class.method
     */
    post(url) {
        return (target, propertyKey) => {
            ;
            this.setRouter(url, {
                httpMethod: 'post',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }
    /**
     * 用法@instance.put('/')
     * @param url
     * @param target class.prototype
     * @param propertyKey class.method
     */
    put(url) {
        return (target, propertyKey) => {
            ;
            this.setRouter(url, {
                httpMethod: 'put',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }
    /**
     * 返回路由
     */
    getRoute() {
        return this.router;
    }
}
exports.default = new Blueprint();
