import Reflux from 'reflux';
import RefluxPromise from 'reflux-promise';
import Promise from 'Promise';
import noflux from '../../../dist';
import Message from 'uxcore-message';
import Dialog from 'uxcore-dialog';
import './app.less';
import './routes';

// This is a Chrome only hack
if (__LOCAL__ && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// 数据流采用`Reflux`方案，具体文档请看 https://github.com/reflux/refluxjs
Reflux.use(RefluxPromise(Promise));


// 这里使用setup来配置noflux
noflux.setup('fn', {
  message: { ...Message },
  dialog: { ...Dialog },
});
