import * as React from 'react'
import styled from 'styled-components'

export interface NavSearchProps {

}

const SearchWrapper = styled.div`
    box-sizing: border-box;
    padding: 0 40px 0 20px;
    width: 140px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    outline: none;
`

const NavLogo: React.StatelessComponent<NavSearchProps> = () =>
    <SearchWrapper />


export default NavLogo