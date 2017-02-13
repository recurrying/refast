import React, { PropTypes } from 'react';
import isArray from 'isarray';
import isPlainObject from 'is-plain-object';
import deepcopy from 'deepcopy';
import assign from 'object-assign';
import { context } from './utils';

export default class Component extends React.Component {
  static childContextTypes = {
    host: PropTypes.any,
  }
  constructor(props, logic) {
    super(props);
    if (isPlainObject(logic)) {
      this.logic = logic;
      this.state = {};
      if (typeof logic.defaults === 'function') {
        this.state = logic.defaults(props) || {};
      }
    } else {
      throw Error('related Logic haven\'t given!');
    }

    this.bind = this.bind.bind(this);
    this.execute = this.execute.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  // 将宿主对象传给所有的LogicRender，供其调用logic方法
  getChildContext() {
    return { host: this };
  }

  bind(...params) {
    return (...args) => {
      this.execute.apply(this, params.concat(args));
    };
  }

  execute(...params) {
    const t = this;
    let actions = params.shift();
    const ctx = assign({}, context, {
      setState: t.setState.bind(t),
      getState() { return deepcopy(t.state); },
      getProps() { return deepcopy(t.props); },
    });

    if (!isArray(actions)) {
      actions = [actions];
    }

    (function execAction(args) {
      if (actions.length) {
        const action = actions.shift();

        // 如果logic中不存在action就报错退出
        if (t.logic[action]) {
          const ret = t.logic[action].apply(null, [ctx, ...params].concat([args]));
          if (ret && typeof ret.then === 'function') {
            ret.then((data) => {
              if (data !== false) {
                execAction(data);
              }
            });
          } else if (ret !== false) {
            execAction(ret);
          }
        } else {
          throw Error(`action ${action} is not defined`);
        }
      }
    }());
  }

  renderPage() {
    return <div>Hello, World!</div>;
  }

  render() {
    return this.renderPage();
  }
}
