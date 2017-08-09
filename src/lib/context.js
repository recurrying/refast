import cloneDeep from 'lodash.clonedeep';
import { applyMiddleware } from './middleware';

const win = window;
const userAgent = navigator.userAgent;
const isMobile = !!userAgent.match(/mobile/i) || 'orientation' in win;
const isPC = !isMobile;

const context = {
  env: {
    userAgent,
    isPC,
    isMobile,
  },
};

export default {
  setContext(key, val) {
    if (['setState', 'getState', 'getProps'].indexOf(key) > -1) {
      throw Error(`${key} could not be overridden`);
    }
    context[key] = val;
  },
  getContext(that) {
    const ctx = {
      ...context,
      getState() {
        return cloneDeep(that.state);
      },
      getProps() {
        return cloneDeep(that.props);
      },
    };
    return {
      ...ctx,
      setState(...args) {
        const setState = that.setState.bind(that);
        return applyMiddleware(ctx)(setState)(...args);
      },
    };
  },
};
