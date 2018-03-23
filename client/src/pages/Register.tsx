import * as React from 'react'
import styled from 'styled-components'

import { Header, HeaderLeft, HeaderRight, Center } from '../layout'
import { Menu, MenuItem, Logo, Entrance } from '../components'

export interface RegisterProps {}

const RegisterWrapper = styled.div``

class Register extends React.Component<RegisterProps, {}> {
    static defaultProps = {}

    render() {
        const props = {
            btnText: 'Sign up',
            primary1Color: '#a8edea',
            primary2Color: '#fed6e3',
            primary3Color: '#a8edea',
        }
        return (
            <div className="container">
                <Header>
                    <HeaderLeft>
                        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEbKPGmTMDZlwbkRuDLmOLS5a9tSjxQ2oMcIyxLim7avWvr221w" />
                    </HeaderLeft>
                    <HeaderRight>
                        <Menu>
                            <MenuItem>SIGN IN</MenuItem>
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

export default Register
