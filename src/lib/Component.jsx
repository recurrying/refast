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
    const ctx = getContext(t);
    let actionNames = makeArray(params.shift());

    return (function exec(args) {
      return new Promise((resolve, reject) => {
        if (actionNames.length) {
          const actionName = actionNames.shift();
          const action = t.logic[actionName];
          const actionParams = [ctx, ...params].concat([args]);
          if (typeof action === 'function') {
            resolve(action.apply(null, actionParams));
          } else {
            reject(Error(`action ${actionName} should be a function.`));
          }
        } else {
          resolve(args);
        }
      }).then((data) => {
        return actionNames.length && data !== false ? exec(data) : data;
      }).catch((error) => {
        throw error;
      });
    }());
  }
}
