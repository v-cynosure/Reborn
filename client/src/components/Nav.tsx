import * as React from 'react'
import styled from 'styled-components'
import NavLogo from './NavLogo'
import NavSearch from './NavSeach'

export interface NavProps {
    isAuthenticated?: boolean
    children?: React.ReactNode
}

const NavWrapper = styled.nav`
    position: relative;
    width: 100%;
    height: 55px;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
    background: #fff;
`

const Nav: React.StatelessComponent<NavProps> = () =>
    <NavWrapper>
        
    </NavWrapper>

Nav.defaultProps = {
    isAuthenticated: false
}
// class Nav extends React.Component<NavProps, {}> {
//     static defaultProps = {
//         isAuthenticated: false
//     }

//     render() {
//         const { children } = this.props
//         return (
//             <NavWrapper>
//                 {children}
//             </NavWrapper>
//         )
//     }

// }

export default Nav