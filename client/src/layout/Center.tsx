import * as React from 'react'
import styled from 'styled-components'
import media from '../utils/mediaquery'

export interface CenterProps {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const CenterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: calc(100% - 55px);
    margin: 0 auto;
`

const Center: React.StatelessComponent<CenterProps> = ({ style, children }) => (
    <CenterWrapper style={style}>{children}</CenterWrapper>
)

export default Center
