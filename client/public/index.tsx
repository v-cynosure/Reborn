import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from '../src/App'

declare const module: any

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    )
}

render(App)

// 热重载
if (module.hot) {
    module.hot.accept(function () {
        render(App)
    })
}