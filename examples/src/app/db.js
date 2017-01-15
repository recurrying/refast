import nattyFetch from 'natty-fetch';
import { urlPrefix, isDev } from './variables';

// See https://github.com/Jias/natty-fetch for more details.
const context = nattyFetch.context({
  mockUrlPrefix: urlPrefix,
  urlPrefix,
  mock: isDev,
  // jsonp: true,
  withCredentials: false,
  traditional: true,
  data: {
    _tb_token_: '',
  },
  timeout: 5000,
  fit(response) {
    return {
      success: response.success,
      content: response.content,
      error: {
        errorMsg: response.errorMsg,
        errorCode: response.errorCode,
        errorLevel: response.errorLevel,
      },
    };
  },
});

context.create('SomeModuleAPI', {
  // 这里可以通过`abc.json`设置模拟数据
  getSomeInfo: {
    mockUrl: 'query/getSomeInfo.json',
    url: 'query/getSomeInfo.json',
  },
});

export default context.api;
