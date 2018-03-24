import * as React from 'react'
import styled from 'styled-components'
import media from '../utils/mediaquery'

export interface MenuProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

const MenuWrapper = styled.div`
    ${media.tablet`
        position: relative;
        margin: 40px;
        &:hover {
            & > div {
                display: block;
            }
            & > div:first-of-type {
                color: #000;
            }
        }
    `};
    ${media.phone`
        position: relative;
        margin: 0px;
        &:hover {
            & > div {
                display: block;
            }
            & > div:first-of-type {
                color: #000;
            }
        }
    `};
`

const MenuController = styled.div`
    display: none;
    height: 55px;
    line-height: 55px;
    color: #ccc;
    cursor: pointer;
    transition: all 0.3s ease-in;
    ${media.tablet`
        display: block;
    `};
`
const MenuItems = styled.div`
    display:flex;
    align-items: center;
    height:100%
    margin: 0 20px;
    color: #ccc;
    ${media.tablet`
        display: none;
        position: absolute;
        left: -50%;
        margin: 0;
        &>div:nth-child(even){
            border-top: none;
        }
        &>div:nth-child(2){
            border-bottom: none;
        }
    `};
`

const Menu: React.StatelessComponent<MenuProps> = ({ children, style }) => (
    <MenuWrapper style={style}>
        <MenuController>MENU</MenuController>
        <MenuItems>{children}</MenuItems>
    </MenuWrapper>
)

export default Menu
