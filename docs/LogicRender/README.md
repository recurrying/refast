## LogicRender
LogicRender 是一个非常有用的组件，可以嵌套，提供以下功能：
1、它将一个组件常用的 Empty/Loadig 状态封装起来了
```jsx
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
