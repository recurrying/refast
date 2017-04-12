import React, { PropTypes } from 'react';
import assign from 'lodash.assign';
import { execute, makeArray } from './utils';

export default class Component extends React.Component {
  static childContextTypes = {
    execute: PropTypes.func,
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
    this.execute = this.execute.bind(this);
  }

  getChildContext() {
    return { execute: this.execute };
  }

  bind(...params) {
    return (...args) => {
      this.execute.apply(this, params.concat(args));
    };
  }

  execute(...params) {
    return execute(this).apply(this, params);
  }
}
