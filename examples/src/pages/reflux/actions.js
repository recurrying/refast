import { createAction } from 'reflux';
import DB from '../../app/db';

const updateState = createAction({});

const search = createAction({
  asyncResult: true,
});

updateState.listen(params => search(params));

search.listenAndPromise(DB.SomeModuleAPI.getSomeInfo);

export default { updateState, search };
