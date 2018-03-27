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
                e.preventDefault()
                const { target } = e
                const username = target.username.value
                const password = target.password.value
                axios.post('http://wsmis126:9000/api/login', {
                    username,
                    password,
                }).then(res => {
                    console.log(res)
                })
            },
        }
        return <Entrance {...props} />
    }
}

export default Login
