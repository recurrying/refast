## LogicRender


LogicRender 是一个可以嵌套使用的逻辑组件，提供以下功能：

1、执行action
可以给LogicRender指定设置一个action，初始化时执行一次。如果同时设置了的awareOf。awareOf若发生变化，则在获取组件更新时，再次执行action.

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
import { LogicRender } from 'no-flux';

// 如果isLoading为true,就展示oading状态
// 如果isEmpty为true，则展示empty状态
<LogicRender loading={isLoading} empty={isEmpty} >
...
</LogicRender> 
```

 Empty/Loadig 的展示形式，可以通过修改LogicRender.defaultProps来修改：
 
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