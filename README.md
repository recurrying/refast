## no-flux

---

不借助flux思想, 通过简单抽离state管理为纯函数方式进行页面数据管理

## 设计思路

与我们目前的Reflux方案的写法对比，no-flux将Action的概念直接融合到了View里。Action自身退化， 
只剩下一个名称。执行的具体逻辑合并Logic的同名函数中。至于Action的触发时机则交给View决定。你
很少需要直接调Action,因为你只要在需要设置事件 的地方用下面的“行为组件”来调用Action。

![no-flux架构图](https://img.alicdn.com/tfs/TB1PR4SOVXXXXXvaFXXXXXXXXXX-570-134.png)

### LogicRender组件

架构图中的LogicRender，是一个封装了loading、empty等通用状态的特殊的组件。他还会在页面渲染
的时候，根据state的变化，决定是否执行某些action。

### View -> Logic
View可以通过三个途径调用Logic中的函数，以更新State。

- 直接调用 execute

在必要的时候直接调用某个Logic中的方法。execute是立即执行

```javascript
  componentDidMount() {
    if (!this.props.groupId) {
      this.execute('showCompanyInfo', true);
    }
  }
```

- LogicRender中的Action

LogicRender中的action在初始化的时候会默认执行。当页面重新渲染时，如果awareOf发生变化，则会再次执行action。

```javascript
  const {role, groupId, workNo, loading, fullEmpty} = this.state;
  ...
  <LogicRender className="panel-body"
    action="queryConfirmPlans"
    awareOf={{
      role,
      groupId,
      workNo,
    }}
    show={true}
    loading={loading}
    empty={fullEmpty}
  >
  ...
  </LogicRender>
```


### Logic -> View
Logic是一些方法的集合。这些函数的返回值会用于更新页面组件State(this.state)。
这里有个异步的Action,queryConfirmPlans。它会异步的调用`DB.test.queryConfirmPlans`，
然后对服务器返回的数据res做处理。return新的state。接着，`PageComponent`会自动执行`setState`。数据和视图更新就完成了。

```javascript
  async queryConfirmPlans(ctx) {
    const state = ctx.getState();
    console.log('queryConfirmPlans by state:', state);
    const res = await DB.test.queryConfirmPlans(state.awareOf);
    ctx.fn.message.success('这是通过ctx.fn.message弹出的信息', 2);
    ...
    return state;
  },
```
值得一提的是，除了用于设置默认值的defaults,其他所有的action的第一个参数都将是一个ctx对象。该对象包含了一些通用方法。

```javascript
  {
    // 挂载通用方法
    // 比如Dialog、Message
    // 如果是ReactRouter还会传递router，location，history
    fn: ...,
    // 获取组件的状态（深拷贝）
    getState() { return cloneDeep(t.state); },
    // 获取组件的props
    getProps() { return cloneDeep(t.props); },
    // 返回组件实例
    setState: t.setState.bind(t),
  }
```