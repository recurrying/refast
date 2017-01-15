export default {
  path: 'noflux',
  title: 'noflux',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageNoflux.jsx'));
    }, 'noflux');
  },
};

