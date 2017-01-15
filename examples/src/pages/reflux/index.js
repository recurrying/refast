export default {
  path: 'reflux',
  title: 'reflux',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageReflux.jsx'));
    }, 'reflux');
  },
};


