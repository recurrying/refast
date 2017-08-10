import { Component, PropTypes } from 'react';

import isEqual from 'lodash.isequal';

export default class LogicRender extends Component {

  static propTypes = {
    action: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    awareOf: PropTypes.any,
    empty: PropTypes.bool,
    loading: PropTypes.bool,
    show: PropTypes.bool,
    className: PropTypes.string,
    Loading: PropTypes.element,
    Empty: PropTypes.element,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]),
  }

  static defaultProps = {
    action: null,
    awareOf: '',
    empty: false,
    loading: false,
    show: true,
    children: [],
    Loading: 'div',
    Empty: 'div',
  }

  static contextTypes = {
    dispatch: PropTypes.func,
  }
  componentDidMount() {
    this.dispatchAction();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.awareOf, this.props.awareOf)) {
      this.dispatchAction();
    }
  }

  dispatchAction() {
    const { dispatch } = this.context;
    const { action, awareOf } = this.props;
    if (action) {
      dispatch(action, awareOf);
    }
  }

  render() {
    let content = null;
    const {
      show,
      loading,
      empty,
      children,
      className,
      Loading,
      Empty,
    } = this.props;
    const cls = className || '';

    if (!show) {
      content = <div />;
    } else if (loading) {
      content = (
        <Loading
          {...this.props}
          className={`${cls} refast-loading`}
        />
      );
    } else if (empty) {
      content = (
        <Empty
          {...this.props}
          className={`${cls} refast-empty`}
        />
      );
    } else {
      content = (
        <div className={cls}>{children}</div>
      );
    }

    return content;
  }
}
