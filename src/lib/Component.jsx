import React, { PropTypes } from 'react';
import isPlainObject from 'lodash.isplainobject';
import { execute } from './utils';

export default class Component extends React.Component {
  static childContextTypes = {
    execute: PropTypes.func,
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
  }

  // 将宿主对象传给所有的LogicRender，供其调用logic方法
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
