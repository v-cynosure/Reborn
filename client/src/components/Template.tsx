import * as React from 'react'
import styled from 'styled-components'

export interface XProps {}

const XWrapper = styled.div``

class X extends React.Component<XProps, {}> {
    static defaultProps = {}

    render() {
        return <XWrapper>{}</XWrapper>
    }
}

export default X
