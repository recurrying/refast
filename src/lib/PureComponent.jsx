import React, { PropTypes } from 'react';
import assign from 'lodash.assign';
import Component from './Component.jsx';

let PureComponent;

if (React.PureComponent) {
  class PureComponent extends React.PureComponent {
    static childContextTypes = {
      execute: PropTypes.func,
    }
  }

  assign(PureComponent.prototype, Component.prototype);
}
export default PureComponent;