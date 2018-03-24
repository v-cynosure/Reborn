import * as React from 'react'
import styled from 'styled-components'

export interface CardProps {
    style?: React.CSSProperties
}

const CardWrapper = styled.div``

const Card: React.StatelessComponent<CardProps> = ({ style }) => {
    return <CardWrapper style={style}>{}</CardWrapper>
}

export default Card
