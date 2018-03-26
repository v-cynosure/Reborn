import * as Koa from 'koa'
import Service from './base'

class check extends Service {
    index() {
        return 2 + 3
    }
}

// notice that you should use medule.esports instead of export default
module.exports = check
