import * as React from 'react'
import styled from 'styled-components'

export interface XProps {
    style?: React.CSSProperties
}

const XWrapper = styled.div``

class X extends React.Component<XProps, {}> {
    static defaultProps = {}

    render() {
        const { style } = this.props
        return <XWrapper style={style}>{}</XWrapper>
    }
}

export default X
