import * as React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Entrance } from '../purecomponents'

class Login extends React.Component {
    render() {
        const props = {
            btnText: 'Sign in',
            primary1Color: '#a18cd1',
            primary2Color: '#a18cd1',
            primary3Color: '#fbc2eb',
            onSubmit: function(e) {
                const { target } = e
                const username = target.username.value
                const password = target.password.value
                console.log('signin')
            },
        }
        return <Entrance {...props} />
    }
}

export default Login
