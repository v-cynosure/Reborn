import * as React from 'react'
import styled from 'styled-components'
import media from '../utils/mediaquery'

export interface SearchProps {
    style?: object
    placeholder?: string
    focusWidth?: string
    animation?: boolean
    iconURL?: string
}

export interface SearchInputProps {
    focusWidth?: string
    animation?: boolean
}

const SearchWrapper = styled.div`
    position: relative;
    margin: 0 20px;
    ${media.tablet`
    &:active {
        & input {
            display: block;
        }
    }
`};
`
const SearchInput = styled.input`
    box-sizing: border-box;
    width: 140px;
    height: 35px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: ${(props: SearchInputProps) =>
        props.animation ? 'width 0.5s' : 'initial'};
    outline: none;
    &:focus {
        width: ${(props: SearchInputProps) =>
            props.animation ? props.focusWidth : '140px'};
    }
    ${media.phone`
        width: 100px;
        &:focus {
            width:100px;
        }
    `};
`

const SearchIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transform: translateY(-50%);
    & img {
        height: 100%;
    }
`

const Search: React.StatelessComponent<SearchProps> = ({
    style,
    placeholder,
    focusWidth,
    animation,
    iconURL,
}) => (
    <SearchWrapper>
        <SearchInput
            style={style}
            placeholder={placeholder}
            focusWidth={focusWidth}
            animation={animation}
        />
        <SearchIcon>
            <img src={iconURL} />
        </SearchIcon>
    </SearchWrapper>
)

Search.defaultProps = {
    placeholder: 'search',
    focusWidth: '240px',
    animation: true,
    iconURL:
        'https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png',
}

export default Search
