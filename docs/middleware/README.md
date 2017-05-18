### 中间件

refast支持自定义一个中间件，在组件setState之前，进行数据比对、条件执行、记录日志、数据回溯等特定的操作。

这里以记录日志的功能来说明中间件的写法和用法。记录日志的功能会帮我们在每次state更新时，都将新的state记录下来，使得state的更新历史清晰透明。

1、自定义中间件

自定义中间件非常方便，可以直接通过 setup 来完成。

```jsx
import { setup } from 'refast';

const logState = ctx => next => (...args) => {
  console.log("######### PRINT STATE LOG #########");
  console.log('ctx:', ctx);
  console.log('args:', args);
  // 如果不执行 next， 则中止组件 state 更新
  next(...args);
};

// logState 可以是一个函数
// 也可以是一个函数组, 从前到后依次执行
setup('middleware', logState);
``` 

2、中间件的使用

中间件不需要刻意使用。在 setup 之后，就会按照指定的顺序从前向后依次执行。
![image](https://cloud.githubusercontent.com/assets/7709602/24992803/e5161b76-2055-11e7-81a2-04e1f648f419.png)
