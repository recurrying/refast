const win = window;
const userAgent = navigator.userAgent;
const isMobile = !!userAgent.match(/mobile/i) || 'orientation' in win;
const isPC = !isMobile;

export default {
  env: {
    userAgent,
    isPC,
    isMobile,
  },
};
