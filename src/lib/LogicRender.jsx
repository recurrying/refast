/**
 * LogicRender的功能：在render中根据渲染需要调用logic方法、处理通用UI
 *
 * Created by ex90rts on 12/12/2016.
 */
import { Component, PropTypes } from 'react';
import EmptyData from 'uxcore-empty-data';
import deepequal from 'deepequal';

export default class LogicRender extends Component {

  static propTypes = {
    action: PropTypes.string,
    awareOf: PropTypes.any,
    empty: PropTypes.bool,
    loading: PropTypes.bool,
    show: PropTypes.bool,
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
  }

  static contextTypes = {
    host: PropTypes.any,
  }
  componentDidMount() {
    this.executeAction('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    if (!deepequal(nextProps.awareOf, this.props.awareOf)) {
      this.executeAction('componentWillReceiveProps');
    }
  }

  executeAction(lifeCycle) {
    const { action, awareOf } = this.props;
    if (action) {
      console.log(`logic render ${lifeCycle} with action ${this.props.action}`);
      const host = this.context.host;
      host.execute({ action, awareOf });
    }
  }

  render() {
    let content = null;
    const { show, loading, empty, children, className, loadingProps, emptyProps } = this.props;
    const cls = `${className || ''} ${loading ? 'if-loading' : ''}  ${empty ? 'if-empty' : ''}`;
    if(!show) {
      content = null;
    }
    else if (loading) {
      content = (
        <div className={cls} {...loadingProps} >
          <div className="kuma-loading" style={{ margin: "10px auto" }}></div>
        </div >
      );
    } else if (empty) {
      content = <EmptyData className={cls} type="large" {...emptyProps} />;
    } else {
      content = (
        <div className={cls}>{children}</div>
      );
    }

    return content;
  }
}
