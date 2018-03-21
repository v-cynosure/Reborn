import * as React from 'react'
import styled from 'styled-components'

export interface DropdownProps {
    style?: object
}

const DropdownWrapper = styled.div`
    margin: 0 20px;
`

const Dropdown: React.StatelessComponent<DropdownProps> = props => {
    const { style } = props
    return <DropdownWrapper style={style}>Dropdown</DropdownWrapper>
}

export default Dropdown
