import { Component } from 'reflux';
import { withRouter } from 'react-router';
import './PageReflux.less';
import Actions from './actions';
import Store from './store';
import SearchWord from '../../components/search-word';
import SearchData from '../../components/search-data';

export default withRouter(class PageReflux extends Component {

  constructor(props) {
    super(props);
    // 通过`this.store`建立和`Store`的联系
    this.store = Store;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    Actions.updateState({ workNo: e.target.value });
  }

  render() {
    const { state: { content: { data }, workNo }, handleChange } = this;
    return (
      <div className="page-reflux PT20 PB20">
        <input className="kuma-input" onChange={handleChange} placeholder="请输入员工工号" />
        <SearchWord workNo={workNo} />
        <SearchData data={data} />
      </div>
    );
  }
});

