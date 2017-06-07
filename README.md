# Refast
>通过抽离 state 的方式管理 React.Component 的组件状态

[![npm version](https://img.shields.io/npm/v/refast.svg?style=flat)](https://www.npmjs.com/package/refast) [![download](https://img.shields.io/npm/dm/refast.svg?style=flat)](https://www.npmjs.com/package/refast) 

## 安装
Refast 已发布到 npm 上，可以直接安装
```javascript
npm install refast --save
```

## 用法
可以通过阅读下面的内容了解：
- [设计思路](#设计思路)
- [联接react组件](#联接react组件)
- [更新组件的state](#更新组件的state)
- [中间件](#中间件)
- [LogicRender](#logicrender)
- [具体示例](#具体示例)

## 设计思路

与传统的 Flux 相比，Refast 将 Action 的概念融合到了类似 Flux 中的 Store 这一概念的 Logic 中，其执行的具体逻辑也合并到了 Logic 的同名函数中。至于 Action 的触发时机则交给 View 决定。实际上, Refast 是通过抽离 State 的方式来管理页面数据的。

![Refast架构图](https://img.alicdn.com/tfs/TB1WnfOPpXXXXXBapXXXXXXXXXX-563-182.png)

为了提高用户的开发效率，Refast 还将 Loading/Empty 等常用的 UI 状态封装成到 LogicRender 组件中。

## 联接 React 组件
一般的，我们会把 Logic 部分放在 logic.js 中，把 View 写在相应的 Rµeact 组件中。假定我们的目录结构如下：

```
demo  ----------------------- 某一个页面
  ├── index.js  ------------- 入口文件
  ├── logic.js  ------------- Logic
  ├── PageDemo.jsx   -------- View, React 组件
  └── PageDemo.less  -------- css 样式
```

那么可以将 PageDemo.jsx 和 logic.js 通过下面的方式联接起来:

```jsx
// 使用 Refast 的 Component 替代 React 的 Component
import { Component } from 'refast';

// 引入 logic.js
import logic from './logic';

class PageDemo extends Component {

  constructor(props) {
    // 通过 super 绑定 logic
    super(props, logic);
  }
}
```

如果想绑定多个 logic ，可以通过下面的方式：

``` jsx
class PageDemo extends Component {

  constructor(props) {
    // 可以绑定一个 logic 数组
    super(props, [logic1, logic2, ...]);
  }
}
```


## 更新组件的 state

React 组件的 state 初始化、修改、删除全都需要通过 Refast 的 Logic 来管理，这是强约定的。Refast 为组件添加了 dispatch 方法。通过 dispatch 可以调用 logic.js 中的 action，更新组件 state。
```javascript
// PageDemo.jsx
// 可以通过 dispatch 给方法传参（也可以不传）
this.dispatch('update', data);

// logic.js
export default { 
  ...
  update(ctx, data) {
    ctx.setState(data);
  },
}
```
Refast 提供了 this.dispatch 的一个简捷方法，this.bind。它相当于：

```javascript
bind(...params) {
  return (...args) => {
    this.dispatch.apply(this, params.concat(args));
  };
}
```

action 被 dispatch 调用后，Refast 会把它的第一个参数设为 ctx。 dispatch 时传给 action 的参数会被依次放在 ctx 之后。 ctx 提供了以下几个通用方法：
- setState 设置组件的 state, 用法与组件的 setState 相同
- getState 获取组件当前的 state
- getProps 获取组件当前的 props

用户也可以通过 Refast 提供的 use 进行扩展。

```javascript
import Refast from 'refast';
import { Message } from 'your-custom-message';
import { Dialog } from 'your-custom-dialog';

// 可以通过 use 自定义
Refast.use('fn', {
  message: Message,
  dialog: Dialog
})
```

这样，在我们就可以在 action 的定义中使用了
```javascript
// logic.js
export default { 
  ...
  update(ctx, data) {
    ...
    ctx.fn.message.info('这里是自定义的message');
    ...
    ctx.setState(data);
  },
}
```
更多内容请看[这里](docs/more-on-logic/)

## 中间件

支持自定义一个中间件，在组件 setState 之前，进行数据比对、条件执行、打印日志等特定的操作。中间件的写法和用法请看[这里](docs/middleware//)

## LogicRender

LogicRender 是一个可以嵌套使用的逻辑组件，提供以下功能：

1、执行 action

可以给 LogicRender 指定一个 action，初始化时执行一次。如果设置了 awareOf，在当组件更新时，一旦 awareOf 发生变化，就会再次执行 action.

```javascript
// 比如根据 state 的 workNo 变化
const { workNo } = this.state;

// 此处调用 action，与直接调用 this.dispatch('update) 效果一致;
<LogicRender action={'update'} awareOf={{workNo}}>
...
</LogicRender> 
```


2、通用UI的封装

LogicRender 将常用的 Empty/Loadig UI 状态封装了起来。

```jsx
import { LogicRender } from 'refast';

// 如果 isLoading 为 true,就展示 loading 状态
// 如果 isEmpty 为 true，则展示 empty 状态
<LogicRender loading={isLoading} empty={isEmpty} >
...
</LogicRender> 
```

更多内容请看[这里](docs/LogicRender/)


## 具体示例

具体示例在这里 [https://github.com/recore/refast-demo](https://github.com/recore/refast-demo)
