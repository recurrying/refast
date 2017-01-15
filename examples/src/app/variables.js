// 这里放置全局的变量
const isDev = __LOCAL__;
const urlPrefix = isDev ? '/mock/' : '/';

export default {
  urlPrefix,
  isDev,
    // 这里放置全局的调用的URL
  URLS: {
    getSomeInfo: `${urlPrefix}query/getSomeInfo.json`,
  },
};
