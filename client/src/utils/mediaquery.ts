import { css } from 'styled-components'

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376,
}

const media: any = Object.keys(sizes).reduce((acc, label) => {
    const remSize = (sizes[label] + 1) / 16
    acc[label] = (...args: Array<any>) => css`
        @media (max-width: ${remSize}rem) {
            ${css(...args)};
        }
    `

    return acc
}, {})

export default media
