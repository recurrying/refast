import React, { PropTypes } from 'react';
import { makeArray, isFunction } from './utils';
import { getContext } from './context';

export default class Component extends React.Component {
  static childContextTypes = {
    dispatch: PropTypes.func,
  }
  constructor(props, logics) {
    super(props);

    logics = makeArray(logics);

    try {
      this.logic = {
        ...logics.reduce((composed, logic = {}) => ({ ...composed, ...logic }), { }),
        defaults: undefined,
      };
    } catch (e) {
      throw new Error('Logic must be a plain object of function collection!');
    }

    this.logic.defaults = logicProps => logics.reduce((composed = {}, logic = {}) => {
      if (logic.defaults && isFunction(logic.defaults)) {
        const now = logic.defaults(logicProps);
        return { ...composed, ...now };
      }
      return composed;
    }, {});

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
      this.dispatch(...params, ...args);
    };
  }

  dispatch(...params) {
    const t = this;
    const ctx = getContext(t);
    const actionNames = makeArray(params.shift());

    return (function exec(args) {
      return new Promise((resolve, reject) => {
        if (actionNames.length) {
          const actionName = actionNames.shift();
          const action = t.logic[actionName];
          const actionParams = [ctx, ...params].concat([args]);
          if (isFunction(action)) {
            resolve(action(...actionParams));
          } else {
            reject(Error(`action ${actionName} should be a function.`));
          }
        } else {
          resolve(args);
        }
      }).then((data) => {
        const hasActionNameAndData = actionNames.length && data !== false;
        return hasActionNameAndData ? exec(data) : data;
      }).catch((error) => {
        throw error;
      });
    }());
  }
}
