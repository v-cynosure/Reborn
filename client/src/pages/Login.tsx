import * as React from 'react'
import styled from 'styled-components'

import { Header, HeaderLeft, HeaderRight, Center } from '../layout'
import { Menu, MenuItem, Logo, Entrance } from '../components'

export interface LoginProps {}

const LoginWrapper = styled.div``

class Login extends React.Component<LoginProps, {}> {
    static defaultProps = {}

    render() {
        const props = {
            btnText: 'Sign in',
            primary1Color: '#faaca8',
            primary2Color: '#ddd6f3',
            primary3Color: '#faaca8',
            onSubmit: function(e) {
                const { target } = e
                const username = target.username.value
                const password = target.password.value
                console.log('signin')
            },
        }
        return (
            <div className="container">
                <Header>
                    <HeaderLeft>
                        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEbKPGmTMDZlwbkRuDLmOLS5a9tSjxQ2oMcIyxLim7avWvr221w" />
                    </HeaderLeft>
                    <HeaderRight>
                        <Menu>
                            <MenuItem>SIGN UP</MenuItem>
                        </Menu>
                    </HeaderRight>
                </Header>
                <Center>
                    <Entrance {...props} />
                </Center>
            </div>
        )
    }
}

export default Login
