import * as React from 'react'
import styled from 'styled-components'
import media from '../utils/mediaquery'

export interface MenuItemProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

const MenuItemWrapper = styled.div`
    box-sizing: border-box;
    margin: 0 10px;
    color: #ccc
    cursor: pointer;
    transition: all .3s ease-in;
    &:hover {
        color: #000
    }
    ${media.tablet`
        width: 100px;
        height: 50px;
        margin: 0;
        text-align: center;
        line-height: 50px;
        border: 1px solid #ccc;
        background: #fff;
        &:hover {
            color: #fff;
            background: #494A49;
        }
    `};
`

class MenuItem extends React.Component<MenuItemProps, {}> {
    render() {
        const { style, children } = this.props
        return <MenuItemWrapper style={style}>{children}</MenuItemWrapper>
    }
}

export default MenuItem
