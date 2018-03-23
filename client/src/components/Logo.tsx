import * as React from 'react'
import styled from 'styled-components'

export interface LogoProps {
    style?: object
    src?: string
}

const LogoWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    margin: 0 20px;
    cursor: pointer;
`
const LogoImg = styled.img`
    height: 100%;
`

const Logo: React.StatelessComponent<LogoProps> = ({ style, src }) => (
    <LogoWrapper style={style}>
        <LogoImg src={src} />
    </LogoWrapper>
)

Logo.defaultProps = {
    src: 'https://avatars1.githubusercontent.com/u/35354219?s=200&v=4',
}

export default Logo
