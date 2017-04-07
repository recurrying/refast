import { setMiddleware, applyMiddleware } from './middleware';
import { setContext, getContext } from './context';

function setup(key, val) {
  if (typeof key === 'string' && key.toUpperCase() === 'MIDDLEWARE') {
    setMiddleware(val);
  } else {
    setContext(key, val);
  }
}

function execute(...params) {
  const t = this;
  let actions = params.shift();
  const ctx = getContext(t);

  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  (function exec(args) {
    if (actions.length) {
      const action = actions.shift();

      // 如果logic中不存在action就报错退出
      if (t.logic[action]) {
        const ret = t.logic[action].apply(null, [ctx, ...params].concat([args]));
        if (ret && typeof ret.then === 'function') {
          ret.then((data) => {
            if (data !== false) {
              exec(data);
            }
          });
        } else if (ret !== false) {
          exec(ret);
        }
      } else {
        throw Error(`action ${action} is not defined`);
      }
    }
  }());
}

export default {
  setup,
  execute(that) {
    const ctx = getContext(that);
    const exec = execute.bind(that);
    return applyMiddleware(ctx)(exec)
  }
};