const win = window;
const doc = document;
const ua = navigator.userAgent;
const isMobile = !!ua.match(/mobile/i) || 'orientation' in win;
const isPC = !isMobile;

const supportTouch = 'ontouchstart' in window;
const support3D = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
const supportHairline = (() => {
  let support = false;
  if (win.devicePixelRatio && devicePixelRatio >= 2) {
    const testElem = doc.createElement('div');
    testElem.style.border = '.5px solid transparent';
    doc.body.appendChild(testElem);
    if (testElem.offsetHeight == 1) {
      support = true;
    }
    doc.body.removeChild(testElem);
  }
  return support;
})();

export default {
  env: {
    isPC,
    isMobile,
    supportTouch,
    support3D,
    supportHairline,
  },
  plugin: {},
  fn: {},
};
