# Reborn

## Components

### Headear

```html
<!--用于头部布局-->
<Header>
    <!--左边-->
    <HeaderLeft>
        <Logo />
        <Search />
        <Menu />
    </HeaderLeft>
    <!--右边-->
    <HeaderRight>
        <Dropdown />
    </HeaderRight>
</Header>
```

| 参数  | 说明            | 类型   | 默认值        |
| ----- | --------------- | ------ | ------------- |
| style | 根节点样式      | object |               |
| src   | logo 图标的 src | string | 站点默认 logo |

### Logo

| 参数  | 说明            | 类型   | 默认值 |
| ----- | --------------- | ------ | ------ |
| style | 根节点样式      | object |        |
| src   | logo 图标的 src | string |        |

### Search

| 参数        | 说明             | 类型    | 默认值   |
| ----------- | ---------------- | ------- | -------- |
| style       | 根节点样式       | object  |          |
| placeholder | 占位文字         | string  | 'search' |
| focusWidth  | 选中时搜索框长度 | string  | '240px'  |
| animation   | 是否支持动画     | boolean | true     |
| iconURL     | 搜索图标的 URL   | string  |          |

### Menu

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| style | 根节点样式 | object |        |

### MenuItem

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| style | 根节点样式 | object |        |

### Entrance

例如登陆、注册页面的入口组件

| 参数          | 说明                    | 类型        | 默认值            |
| ------------- | ----------------------- | ----------- | ----------------- |
| style         | 根节点样式              | object      |                   |
| title         | 标题                    | string      | Paper crane(大写) |
| logo          | 是否需要 logo           | boolean     | true              |
| logoLetter    | logo 显示的字母         | string      | X(大写)           |
| usernameText  | 用户名提示语            | string      | Username          |
| passwordText  | 密码提示语              | string      | Password          |
| btnText       | 按钮文字                | string      | Login(大写)       |
| sign          | 底部提示语              | string      |                   |
| primary1Color | title、logo、下划线颜色 | string      | #333              |
| primary2Color | btn 渐变色 1            | string      | #21d4fd           |
| primary3Color | btn 渐变色 2            | string      | #b721ff           |
| onSubmit      | 提交的处理函数          | function(e) | 无                |
