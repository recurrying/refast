import { PureComponent } from 'react';
import Component from './Component';

if (PureComponent) {
  PureComponent.prototype = { ...PureComponent.prototype, ...Component.prototype };
}

export default PureComponent;
