import assign from 'lodash.assign';
import context from './context';


function setup(key, func) {
  context[key] = assign(context[key], func);
}

export default {
  context,
  setup,
};
