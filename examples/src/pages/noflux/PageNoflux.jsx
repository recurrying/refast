import { withRouter } from 'react-router';
import { Component, LogicRender } from '../../../../dist';
import './PageNoflux.less';
import logic from './logic.js';
import SearchWord from '../../components/search-word';
import SearchData from '../../components/search-data';

export default withRouter(class PageNoflux extends Component {

  constructor(props) {
    super(props, logic);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.execute(['updateState', 'search'], { workNo: e.target.value });
  }

  render() {
    const { state: { data, workNo, empty }, handleChange } = this;
    return (
      <div className="page-noflux PT20 PB20">
        <input className="kuma-input" onChange={handleChange} placeholder="请输入员工工号" />
        <SearchWord workNo={workNo} />
        <LogicRender empty={empty}>
          <SearchData data={data} />
        </LogicRender>
      </div>
    );
  }
});

