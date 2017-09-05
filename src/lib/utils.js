import { setMiddleware } from './middleware';
import { setContext } from './context';

function isType(type) {
  return obj => ({}.toString.call(obj) === `[object ${type}]`);
}

const isArray = Array.isArray || isType('Array');
const isString = isType('String');
const isFunction = isType('Function');

function makeArray(arr) {
  if (arr) {
    return isArray(arr) ? arr : [arr];
  }
  return [];
}


function use(key, val) {
  if (isString(key) && key.toUpperCase() === 'MIDDLEWARE') {
    setMiddleware(val);
  } else {
    setContext(key, val);
  }
}

export default {
  use,
  makeArray,
  isArray,
  isString,
  isFunction,
};
