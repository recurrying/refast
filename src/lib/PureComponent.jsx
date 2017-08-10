import React, { PropTypes } from 'react';
import Component from './Component.jsx';

let PureComponent;

if (React.PureComponent) {
  class PureComponent extends React.PureComponent {
    static childContextTypes = {
      execute: PropTypes.func,
    }
  }

  PureComponent.prototype = { ...PureComponent.prototype, ...Component.prototype };
}

export default PureComponent;
