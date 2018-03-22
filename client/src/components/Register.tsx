import * as React from 'react'
import styled from 'styled-components'
import { Entrance } from '../purecomponents'

class Register extends React.Component {
    render() {
        const props = {
            btnText: 'Sign up',
            primary1Color: '#8fd3f4',
            primary2Color: '#84fab0',
            primary3Color: '#8fd3f4',
        }
        return <Entrance {...props} />
    }
}

export default Register
