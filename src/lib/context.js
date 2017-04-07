import cloneDeep from 'lodash.clonedeep';

const win = window;
const userAgent = navigator.userAgent;
const isMobile = !!userAgent.match(/mobile/i) || 'orientation' in win;
const isPC = !isMobile;

let context = {
  env: {
    userAgent,
    isPC,
    isMobile,
  }
};

export default {
  setContext: function (key, val) {
    if (['setState', 'getState', 'getProps'].indexOf(key) === -1) {
      context[key] = val;
    } else {
      throw Error(`${key} could not be overridden`);
    }
  },
  getContext: function (that) {
    return {
      ...context,
      getState() {
        return cloneDeep(that.state);
      },
      getProps() {
        return cloneDeep(that.props);
      },
      setState(...args) {
        that.setState.apply(that, args);
      }
    }
  }
}
