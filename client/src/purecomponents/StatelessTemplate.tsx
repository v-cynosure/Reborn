import * as React from 'react'
import styled from 'styled-components'

export interface XProps {}

const XWrapper = styled.div``

const StatelessComponent: React.StatelessComponent<XProps> = props => {
    return <XWrapper>{}</XWrapper>
}

export default StatelessComponent
