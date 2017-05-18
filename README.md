# refast
>通过抽离state的方式进行react component状态管理

[![npm version](https://img.shields.io/npm/v/refast.svg?style=flat)](https://www.npmjs.com/package/refast) [![download](https://img.shields.io/npm/dm/refast.svg?style=flat)](https://www.npmjs.com/package/refast) 

## 安装
refast已发布到npm上，可以直接安装
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

与传统的Flux相比，refast将Action的概念直接融合到了类似Flux中的Store这一概念的Logic中，其执行的具体逻辑也合并到了Logic的同名函数中。至于Action的触发时机则交给View决定。实际上,refast是通过简单抽离state的方式进行页面数据管理的。

![refast架构图](https://img.alicdn.com/tfs/TB1WnfOPpXXXXXBapXXXXXXXXXX-563-182.png)

为了提高用户的开发效率，refast还将Loading/Empty这些常用的UI状态封装成了LogicRender组件。

## 联接react组件
一般的，我们会把Logic部分放在logic.js中，把View写在相应的react组件中。假定我们的目录结构如下：

```
demo  ----------------------- 某一个页面
  ├── index.js  ------------- 入口文件
  ├── logic.js  ------------- Logic
  ├── PageDemo.jsx   -------- View, react组件
  └── PageDemo.less  -------- css样式
```

那么可以将PageDemo.jsx和logic.js通过下面的方式联接起来:

```jsx
// 使用 refast 的 Component 替代 react 的 Component
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


## 更新组件的state

react组件的state初始化、修改、删除全都都需要通过refast的Logic来管理，这是强约定的。refast为组件添加了execute方法。通过execute可以调用logic.js中的action，更新组件state。
```javascript
// PageDemo.jsx
// 可以通过 execute 给方法传参（也可以不传）
this.execute('update', data);

// logic.js
export default { 
  ...
  update(ctx, data) {
    ctx.setState(data);
  },
}
```
refast提供了this.execute的一个简捷方法，this.bind，它相当于：

```javascript
bind(...params) {
  return (...args) => {
    this.execute.apply(this, params.concat(args));
  };
}
```

action被execute调用后，refast会把它的第一个参数设为ctx。execute时传给action的参数会被依次放在ctx之后。ctx提供了以下几个通用方法：
- setState 设置组件的 state, 用法与组件的 setState 相同
- getState 获取组件当前的 state
- getProps 获取组件当前的 props

用户也可以通过refast提供的setup进行扩展。

```javascript
import { setup } from 'refast';
import { Message } from 'your-custom-message';
import { Dialog } from 'your-custom-dialog';

// 可以通过setup自定义
setup('fn', {
  message: Message,
  dialog: Dialog
})
```

这样，在我们就可以在action的定义中使用了
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

支持自定义一个中间件，在组件setState之前，进行数据比对、条件执行、打印日志等特定的操作。中间件的写法和用法请看[这里](docs/middleware//)

## LogicRender

LogicRender 是一个可以嵌套使用的逻辑组件，提供以下功能：

1、执行action

可以给LogicRender指定一个action，初始化时执行一次。如果同时设置了的awareOf。awareOf若发生变化，则在获取组件更新时，再次执行action.

```javascript
// 比如根据state的workNo变化
const { workNo } = this.state;

// 此处调用action，与直接调用 this.execute('update) 效果一致;
<LogicRender action={'update'} awareOf={{workNo}}>
...
</LogicRender> 
```


2、通用UI的封装

LogicRender将常用的 Empty/Loadig UI状态封装了起来。

```jsx
import { LogicRender } from 'refast';

// 如果isLoading为true,就展示oading状态
// 如果isEmpty为true，则展示empty状态
<LogicRender loading={isLoading} empty={isEmpty} >
...
</LogicRender> 
```

更多内容请看[这里](docs/LogicRender/)


## 具体示例

refast示例需要[nowa](https://github.com/nowa-webpack/nowa)的支持，请参考[文档](http://nowa-webpack.github.io/docs/an_zhuang.html)安装。

具体示例在这里 [https://github.com/recore/refast-demo](https://github.com/recore/refast-demo)