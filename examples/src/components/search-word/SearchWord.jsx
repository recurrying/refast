import { Component, PropTypes } from 'react';

export default class SearchWord extends Component {
  static defaultProps = {
    workNo: null,
  }

  static propTypes = {
    workNo: PropTypes.number,
  }
  render() {
    const { workNo } = this.props;
    let jsx = null;
    if (workNo) {
      jsx = (<div>
        <h3>检索词:</h3>
        <div>{workNo}</div>
      </div>);
    }
    return (
      <div className="mod-search-word">
        {jsx}
      </div>
    );
  }
}
