import * as React from 'react'
import styled from 'styled-components'

export interface NavLogoProps {
    logoURL?: string
}

const LogoWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    padding: 5px 20px
`
const LogoImg = styled.img`
    height:100%;
`

class NavLogo extends React.Component<NavLogoProps, {}> {
    static defaultProps = {
        logoURL: "https://www.seoclerk.com/pics/want54841-1To5V31505980185.png"
    }

    render() {
        const {logoURL} = this.props
        return (
            <LogoWrapper>
                <LogoImg src={logoURL} />
            </LogoWrapper>
        )
    }

}


export default NavLogo