import { assign } from 'lodash';
import DB from '../../app/db';

export default {
  defaults(props) {
    return {
      content: {},
      error: false,
      workNo: '',
      loading: false,
    };
  },
  updateState({ setState }, data) {
    setState(assign({}, data, { loading: true, empty: true }));
    // return false;
    return { data };
  },
  async search({ setState, fn: { message } }, fromExec = {}, fromUpdateState) {
    // 前面的参数fromExec是从调用的地方传过来的
    // 如果updateState有返回值
    // 则后面参数就是从fromUpdateState传过来的
    console.log('fromExec', fromExec, 'fromUpdateState', fromUpdateState);
    const users = await DB.SomeModuleAPI.getSomeInfo(fromExec);
    const empty = !(users.data && users.data.length);

    if (empty) {
      message.info(`${fromExec.workNo}查无数据！`);
    } else {
      message.success(`${fromExec.workNo}请求成功！`);
    }

    setState(assign({}, users, { loading: false, empty }));
  },
};
