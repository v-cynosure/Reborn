import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from './index'
import getRandomColor from '../utils/getRandomColor'

export type CheckboxValueType = string | number

export interface CheckboxGroupProps {
    style?: React.CSSProperties
    options?: Array<string>
    value?: Array<CheckboxValueType>
    defaultValue?: Array<CheckboxValueType>
    onChange?: Function
}

export interface CheckboxGroupState {
    style?: React.CSSProperties
    value?: Array<CheckboxValueType>
    optionColors?: Array<any>
}

const CheckboxGroupWrapper = styled.div``

class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {
    static defaultProps = {
        options: [],
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value || props.defaultValue || [],
            optionColors: (() => {
                const arrColors = []
                props.options.forEach(element => {
                    arrColors.push(getRandomColor())
                })
                return arrColors
            })(),
        }
        this.toggleOption = this.toggleOption.bind(this)
    }

    componentWillReceiveProps(nextProps: CheckboxGroupProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || [],
            })
        }
    }

    toggleOption(option) {
        const { value } = this.state
        const { onChange } = this.props
        const hasOption = value.includes(option)
        hasOption ? value.splice(hasOption, 1) : value.push(option)
        this.setState({
            value,
        })
        onChange(value)
    }

    render() {
        const { props, state } = this
        const { style, options } = props
        const { optionColors } = state
        return (
            <CheckboxGroupWrapper style={style}>
                {options.map((option, index) => (
                    <Checkbox
                        key={index}
                        text={option}
                        checked={state.value.indexOf(option) !== -1}
                        backgroundActiveColor={optionColors[index]}
                        onChange={() => this.toggleOption(option)}
                        onCheck={(e, i, v, ac) => {
                            // console.log(e, i, v, ac)
                        }}
                    />
                ))}
            </CheckboxGroupWrapper>
        )
    }
}

export default CheckboxGroup
