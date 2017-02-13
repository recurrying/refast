### 维护组件的state
1、初始化组件的 state

``` javascript
// no-flux使用 logic.js 中 defaults 方法的返回值初始化组件的 state 
export default {
  // defaults 的参数 props 是组件初始化时的 props
  // defaults 函数返回的对象会用来初始化组件的 state
  defaults(props) {
    return {
      name: 'wenzhao',
      score: props.score,
    }
  },
  ...
}
```


2、修改组件的 state


```javascript
// PageDemo.jsx
// 组件的 state 请都通过 execute 某一个 logic.js 返回的方法来修改
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

action被execute调用后，no-flux会把它的第一个参数设为ctx。execute时传给action的参数会被依次放在ctx之后。ctx一般包含有以下几个方法：
- setState 设置组件的 state, 用法与组件的 setState 相同
- getState 获取组件当前的 state
- getProps 获取组件当前的 props

3、执行多个方法

```javascript
// PageDemo.jsx
// no-flux支持多个方法继发执行
// 上一个方法的执行结果会作为下一个方法的参数
this.execute(['update', 'search'], data);

// logic.js
export default { 
  ...
  update(ctx, data) {
    // 如果返回 false，则终止此次 execute, 
    // 下面的 search 方法 不会被调用
    // 如果返回的是一个对象 obj
    // 则 obj 会作为 search 的参数
    return obj;
  },

  search(ctx, data, obj) {
    ctx.setState(data);
  },
}
```

4、异步修改state

```javascript
// logic.js
export default {
  ...
  // no-flux 通过 async/await 的方式管理异步请求
  await search(ctx, data) {
    // 可以通过 natty-fetch/window.fetch/$.ajax 等各种方式做异步请求的管理
    const state = await DB.User.search(data);
    ...
    ctx.setState(state);
  }
}
```

如果要处理异常，可以通过try-catch捕获处理

```javascript
// logic.js
export default {
  ...
  await search(ctx, data) {
    let state = {};
    try {
      state = await DB.User.search(data);
    } catch (e) {
      state = { hasError: true };
    }
    ...
    ctx.setState(state);
  }
}
```
或者在await的时候处理catch

```javascript
// logic.js
export default {
  ...
  await search(ctx, data) {
    let state =  await DB.User.search(data).catch(() => {
      ...
    });
    ...
    ctx.setState(state);
  }
}
```
5、this.bind

no-flux提供了this.execute的一个简捷方法，this.bind，它相当于：

```javascript
bind(...params) {
  return (...args) => {
    this.execute.apply(this, params.concat(args));
  };
}
```

假定，给一个button绑定事件：

```javascript
// onClick需要传递一个函数
<button onClick={()=>this.execute('click')}>提交</button>
// 或者这么传
<button onClick={this.execute.bind(this, 'click')}>提交</button>
// 可以直接省略成这样
<button onClick={this.bind('click')}>提交</button>
```
6、扩展ctx

通过no-flux提供的setup可以很轻松地扩展ctx。

```javascript
import { setup } from 'no-flux';
import { Message } from 'your-custom-message';
import { Dialog } from 'your-custom-dialog';
import { DB } from 'your-custom-ajax-handler';

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
  search(ctx, data) {
    ...
    ctx.fn.message.info('这里是自定义的message');
    ...
    ctx.fn.DB.User.search(data).then(...).catch(...);
  },
}
```