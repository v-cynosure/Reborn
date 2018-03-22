import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string
    hasSider?: boolean
}

// 布局生成器
function generator(props: BasicProps) {
    return (BasicComponent: React.ComponentClass<BasicProps>): any => {
        return class Adapter extends React.Component<BasicProps, any> {
            static Header: any
            render() {
                const { prefixCls } = props // "layout-header"
                return <BasicComponent prefixCls={prefixCls} {...this.props} /> //BasicComponent => Basic
            }
        }
    }
}

// 基本组件
class Basic extends React.Component<BasicProps, any> {
    render() {
        const { prefixCls, className, children, ...others } = this.props // prefixCls = "layout-header"
        const divCls = classNames(className, prefixCls)
        return (
            <div className={divCls} {...others}>
                {children}
            </div>
        )
    }
}

class BasicLayout extends React.Component<BasicProps, any> {
    static childContextTypes = {
        siderHook: PropTypes.object,
    }
    state = { siders: [] }
    getChildContext() {
        return {
            siderHook: {
                addSider: (id: string) => {
                    this.setState({
                        siders: [...this.state.siders, id],
                    })
                },
                removeSider: (id: string) => {
                    this.setState({
                        siders: this.state.siders.filter(
                            currentId => currentId !== id
                        ),
                    })
                },
            },
        }
    }
    render() {
        const {
            prefixCls,
            className,
            children,
            hasSider,
            ...others
        } = this.props
        const divCls = classNames(className, prefixCls, {
            [`${prefixCls}-has-sider`]:
                hasSider || this.state.siders.length > 0,
        })
        return (
            <div className={divCls} {...others}>
                {children}
            </div>
        )
    }
}

const Layout: React.ComponentClass<BasicProps> & {
    Header: React.ComponentClass<BasicProps>
} = generator({
    prefixCls: 'layout',
})(BasicLayout)

// 返回值是一个组件
const Header = generator({
    prefixCls: 'layout-header',
})(Basic)

Layout.Header = Header

export default Layout
