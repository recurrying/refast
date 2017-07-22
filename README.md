# Refast

_5分钟就能学会的 React 组件状态管理工具_
<img src="https://user-images.githubusercontent.com/7709602/27905492-afbe494e-6272-11e7-9ca2-7ecea4bd4c0b.jpg" alt="refast logo" height="120" align="right" />


[![npm version](https://img.shields.io/npm/v/refast.svg?style=flat)](https://www.npmjs.com/package/refast) [![download](https://img.shields.io/npm/dm/refast.svg?style=flat)](https://www.npmjs.com/package/refast) 

![npm install refast](https://nodei.co/npm/refast.png?downloadRank=true&downloads=true)

* 安装: `npm install refast --save`。
* CDN: https://unpkg.com/refast/dist/index.js
* 文档： https://recore.github.io/refast-docs/
## 设计思路
#### 架构图
![Refast架构图](https://user-images.githubusercontent.com/7709602/27064069-df2fccb4-5027-11e7-967c-90791a1422c2.png)

#### 几个概念
##### Logic
Logic 是一些修改组件状态的函数(称之为 Action )集合。正如下面的例子这样，根据实际业务场景的需要，拆分出多个修改 Action：
```javascript
// 直接修改组件的状态
export function update(context, someState) {
  context.setState(someState);
}

// 异步请求后修改组件状态
export async function init(context, params){
  // 这里以 jQuery 的 $.ajax 来示例异步请求
  // 建议不要在生产环境中使用 jQuery
  const asyncState = await $.ajax(params);
  context.setState(asyncState);
}

```
Action 函数有一个共同特点，他们的第一个参数都是 context。context 封装了一个修改组件状态的方法 setState。 `context.setState` 与 React 组件的 setState 用法完全一样。

##### View
View 就是 React 的组件：
```javascript
// 某个页面 PageDemo.js
import { Component } from 'refast';
import * as logic from './logic';

export default class PageDemo extends Component {
  constructor(props) {
    super(props, logic);
  }
  render(){
    // ...
  }
}
```
Refast 对 React.Component 进行了一层封装。为其增加了 dispatch 等几个方法。可以通过在组件中使用 `this.dispatch` 调用 Logic 中的 Action 函数。

##### LogicRender
除了完成一般的 React 组件的状态管理，为了提高开发效率，Refast 还提供了一个称之为 LogicRender 的组件。它将 Loading/Empty 等常用的 UI 状态封装了起来，可以根据用户的的需要显示加载中和空数据状态。LogicRender 还可以根据条件，执行用户指定的 Action。

## 优势

- 概念少，学习成本较低。
- 异步操作更加流畅，官方推荐的 [async-await](https://github.com/tc39/proposals/blob/master/finished-proposals.md)，已经在 Chrome v55 和 Firefox 52.0 提供支持
- LogicRender 集成了通用视图处理逻辑，提升通用场景的开发效率
- LogicRender 可条件执行 Action，减少部分逻辑处理

## 示例

具体示例在这里 [https://github.com/recore/refast-demo](https://github.com/recore/refast-demo)
