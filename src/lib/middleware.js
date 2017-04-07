let middlewares = [];

function compose(...funcs) {
  return exec=> funcs.reduceRight((composed, func) => func(composed), exec);
}

export default {
  applyMiddleware: (context) => (exec) => {
    const chain = middlewares.map(middleware => middleware(context));
    return compose(...chain)(exec);
  },
  setMiddleware: function (middleware) {
    if (Array.isArray(middleware)) {
      middlewares = middlewares.concat(middleware);
    }
    else {
      middlewares.push(middleware);
    }
  }
}