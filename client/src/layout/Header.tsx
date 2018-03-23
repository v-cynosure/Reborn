import * as React from 'react'
import styled from 'styled-components'
import media from '../utils/mediaquery'

export interface HeaderProps {
    style?: object
    logo?: string
    children?: React.ReactNode
}

const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    background: #fff;
`

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 960px;
    margin: 0 auto;
    ${media.desktop`
        width: 960px;
    `};
    ${media.tablet`
        width: 100%;
    `};
`

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 55px;
    ${media.phone`
        justify-content: space-aroud;
    `};
`
export const HeaderRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    ${media.phone`
        justify-content: space-aroud;
    `};
`

const Header: React.StatelessComponent<HeaderProps> = ({
    style,
    children,
    logo,
}) => (
    <HeaderWrapper style={style}>
        <HeaderInner>{children}</HeaderInner>
    </HeaderWrapper>
)

export default Header
