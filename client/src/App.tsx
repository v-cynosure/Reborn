import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import {
    cyan500,
    cyan700,
    pinkA200,
    grey100,
    grey300,
    grey400,
    grey500,
    white,
    darkBlack,
    fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import { AppBar } from './layout'
// import { Entrance } from './layout'

// import { Logo, Menu, MenuItem, Search } from './purecomponents'
// import { Header, HeaderLeft, HeaderRight } from './layout'
import { Login, Register } from './components'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    appBar: {
        height: 50,
    },
})

const baseStyles = () => injectGlobal`
    ${reset}
    input:-webkit-autofill, 
    textarea:-webkit-autofill, 
    select:-webkit-autofill { 
        box-shadow: 0 0 0 1000px white inset; 
    }    
`

const App = () => {
    baseStyles()
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {/* <Header>
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
            </Header> */}
            <Login />
            {/* <Register /> */}
        </MuiThemeProvider>
    )
}

export default App
