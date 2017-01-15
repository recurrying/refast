import { Store } from 'reflux';
import Actions from './actions';

export default class DemoStore extends Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {
      content: {},
      error: false,
      workNo: '',
    };
  }

  onUpdateState(obj) {
    // 可以这么使`store`的变化同步到`view`
    // `this.trigger({obj})`;
    // 或者
    this.setState(obj);
  }

  // 处理请求结果（可选）
  // 无论成功、失败都会调用
  // 会在请求之前就执行
  // 并且优先于`Completed`、`Failed`的处理函数执行
  onSearch(content) {

  }

  // 处理请求成功的信息（可选）
  onSearchCompleted(content) {
    this.setState({ content });
  }

  // 处理请求失败的信息（可选）
  onSearchFailed(error) {
    this.setState({ error });
  }

  // 如果在这里指定了key
  // 那么就可以用`Reflux.GlobalState`这个全局的`state`拿到对应的数据
  static get id() {
    return 'DemoStore';
  }
}
