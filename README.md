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

### Dropdown

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| style | 根节点样式 | object |        |
