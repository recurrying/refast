let middlewares = [];

function compose(...funcs) {
  return exec => funcs.reduceRight((composed, func) => func(composed), exec);
}

export default {
  applyMiddleware: context => (exec) => {
    const chain = middlewares.map(middleware => middleware(context));
    return compose(...chain)(exec);
  },
  setMiddleware(middleware) {
    middlewares = [...middlewares, ...middleware];
  },
};
