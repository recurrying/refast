import React, { PropTypes } from 'react';
import assign from 'lodash.assign';
import { makeArray } from './utils';
import { getContext } from './context';

export default class Component extends React.Component {
  static childContextTypes = {
    dispatch: PropTypes.func,
  }
  constructor(props, logics) {
    super(props);

    logics = makeArray(logics);

    try {
      this.logic = assign.call(null, {}, ...logics, { defaults: undefined });
    }
    catch (e) {
      throw Error('Logic must be a plain object of function collection!');
    }

    this.logic.defaults = props => {
      return logics.reduce((composed = {}, logic = {}) => {
        if (logic.defaults && typeof logic.defaults === 'function') {
          let now = logic.defaults(props);
          return { ...composed, ...now };
        }
        return composed;
      }, {})
    };;

    this.state = this.logic.defaults(props);
    this.bind = this.bind.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.execute = this.dispatch.bind(this);
  }

  getChildContext() {
    return { dispatch: this.dispatch };
  }

  bind(...params) {
    return (...args) => {
      this.dispatch.apply(this, params.concat(args));
    };
  }

  dispatch(...params) {
    const t = this;
    let actions = params.shift();

    const ctx = getContext(t);

    actions = makeArray(actions);

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
            }).catch((error)=>{
              throw error;
            })
          } else if (ret !== false) {
            exec(ret);
          }
        } else {
          throw Error(`action ${action} is not defined`);
        }
      }
    }());
  }
}
