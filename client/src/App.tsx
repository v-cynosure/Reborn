import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import {
    Header,
    HeaderLeft,
    HeaderRight,
    Logo,
    Menu,
    MenuItem,
    Search,
    Dropdown,
} from './components'

const baseStyles = () => injectGlobal`
    ${reset}
`

const App = () => {
    baseStyles()
    return (
        <Header>
            <HeaderLeft>
                <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEbKPGmTMDZlwbkRuDLmOLS5a9tSjxQ2oMcIyxLim7avWvr221w" />
                <Menu>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                    <MenuItem>BLOG</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                </Menu>
            </HeaderLeft>
            <HeaderRight>
                <Search placeholder="千纸鹤" />
            </HeaderRight>
        </Header>
    )
}

export default App
