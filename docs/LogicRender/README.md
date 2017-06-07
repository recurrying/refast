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
Empty/Loadig 的展示可以通过修改 LogicRender 的 props 来修改:

```jsx
// 用以展示 empty 状态的 React 组件
import Empty from 'your-custom-empty';
// 用以展示 loading 状态的 React 组件
import Loading from 'your-custom-empty';

// 自定义样式
const cls = 'your-custom-className';

<LogicRender
  className={cls}
  Empty={Empty}
  Loading={Loading}
/>
```

在修改的同时，LogicRender 会将自身的 props 传给自定义的组件。我们以修改 empty 状态为例，对 LogicRender 做如下修改：
 
```javascript
const Empty = (props) => (
  <div className="refast-empty">
    {props.msg}
  </div>
);

<LogicRender empty={isEmpty} msg={'No Data'} Empty={Empty}>
  ...
</LogicRender>
```

当 isEmpty 为 true 时，就会展示 No Data。

如果要修改 LogicRender 的默认展示方式，可以像下面的例子这样直接修改 LogicRender.defaultProps。

```javascript
Object.assign(LogicRender.defaultProps, {
  Empty: Empty,
  Loading: Loading,
  className: cls,
});

```
