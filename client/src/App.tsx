import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Nav from './components/Nav'

const baseStyles = () => injectGlobal`
    ${reset}
`

const App = () => {
    baseStyles()
    return <Nav />
}

export default App