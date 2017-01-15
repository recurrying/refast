import assign from 'object-assign';
import context from './context';

export default {
  context,
  setup(key, func) {
    context[key] = assign({}, context[key], func);
  }
};
