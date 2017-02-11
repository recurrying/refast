## no-flux

[![npm version](https://img.shields.io/npm/v/no-flux.svg?style=flat)](https://www.npmjs.com/package/no-flux) [![download](https://img.shields.io/npm/dm/no-flux.svg?style=flat)](https://www.npmjs.com/package/no-flux) 

---
## 安装
no-flux已发布到npm上，可以直接安装
```javascript
npm install no-flux --save
```

## 用法
可以通过阅读下面的内容了解：
- [设计思路](#设计思路)
- [联接react组件](#联接react组件)
- [更新组件的state](#更新组件的state)
- [LogicRender](#LogicRender)
- [具体示例](#具体示例)

## 设计思路

与传统的Flux相比，no-flux将Action的概念直接融合到了类似Flux中的Store这一概念的Logic中，其执行的具体逻辑也合并到了Logic的同名函数中。至于Action的触发时机则交给View决定。实际上,no-flux是通过简单抽离state的方式进行页面数据管理的。

![no-flux架构图](https://img.alicdn.com/tfs/TB1PR4SOVXXXXXvaFXXXXXXXXXX-570-134.png)

为了提高用户的开发效率，no-flux还将Loading/Empty这些常用的UI状态封装成了LogicRender组件。

## 联接react组件
一般的，我们会把Logic部分，放在logic.js中，把View写在相应的react组件中。假定我们的目录结构如下：

```
.
demo  ----------------------- 某一个页面
  ├── index.js  ------------- 入口文件
  ├── logic.js  ------------- Logic
  ├── PageDemo.jsx   -------- View, react组件
  └── PageDemo.less  -------- css样式
```

那么我们可以很容易的将PageDemo.jsx和logic.js联接起来。

```jsx
// 使用 no-flux 的 Component 替代 react 的 Component
import { Component } from 'no-flux';

// 引入 logic.js
import logic from './logic';

class PageDemo extends Component {

  constructor(props) {
    // 通过 super 绑定 logic
    super(props, logic);
  }
}
```

## 更新组件的state
react组件的state初始化、修改、删除全都都需要通过no-flux的Logic来管理，这是强约定的。no-flux为组件添加了execute方法。通过execute可以调用logic.js中的action，更新组件state。
```javascript
// PageDemo.jsx
// 可以通过 execute 给方法传参（也可以不传）
this.execute('update', data);

// logic.js
export default { 
  ...
  update(context, data) {
    context.setState(data);
  },
}
```
action被execute调用后，no-flux会把它的第一个参数设为context。execute时传给action的参数会被依次放在context之后。context一般包含有以下几个方法：
- setState 设置组件的 state, 用法与组件的 setState 相同
- getState 获取组件当前的 state
- getProps 获取组件当前的 props

不过，只有这三个方法，还是不够用的。用户可以通过no-flux提供的setup进行扩展。

```javascript
import { setup } from 'no-flux';
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
  update(context, data) {
    ...
    context.fn.message.info('这里是自定义的message');
    ...
    context.setState(data);
  },
}
```
更多内容请看[这里](docs/more-on-logic/)

## LogicRender
LogicRender 是一个非常有用的组件，可以嵌套，提供以下功能：
1、它将一个组件常用的 Empty/Loadig 状态封装起来了
```jsx
import { LogicRender } from 'no-flux';

// 如果isLoading为true,就展示oading状态
// 如果isEmpty为true，则展示empty状态
<LogicRender loading={isLoading} empty={isEmpty} >
...
</LogicRender> 
```

LogicRender展示loading和empty时的展示形式，可以通过修改LogicRender.defaultProps来修改，比如
```javascript
// 用以展示empty状态的react组件
import Empty from 'your-custom-empty';
// 用以展示loading状态的react组件
import Loading from 'your-custom-empty';

// 自定义样式
const cls = 'your-custom-className';

Object.assign(LogicRender.defaultProps, {
  Empty: Empty,
  Loading: Loading,
  className: cls,
});

```

2、根据条件执行action
可以给LogicRender指定设置一个action，初始化时执行一次。如果设置的awareOf发生变化，则会在获取组件更新时，再次执行action.
```javascript
// 比如根据state的workNo变化
const { workNo } = this.state;

// 此处调用action，与直接调用 this.execute('update) 效果一致;
<LogicRender action={'update'} awareOf={{workNo}}>
...
</LogicRender> 
```


## 具体示例

no-flux示例需要[nowa](https://github.com/nowa-webpack/nowa)的支持，请参考[文档](http://nowa-webpack.github.io/docs/an_zhuang.html)安装。

具体示例在这里 [https://github.com/fengsx/no-flux-demo](https://github.com/fengsx/no-flux-demo)