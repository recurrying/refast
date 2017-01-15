import { addons, cloneElement } from 'react';
import { render } from 'react-dom';
import Menu from 'uxcore-menu';

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
import { Router, Link, hashHistory } from 'react-router';
import nofluxRoute from '../pages/noflux';
import refluxRoute from '../pages/reflux';

const { CSSTransitionGroup } = addons;
const App = ({ children, location, routes }) => (
  <div>
    <Menu mode="horizontal" selectedKeys={[routes[routes.length - 1].title]}>
      <Menu.Item key="noflux">
        <Link to={'/noflux'} >noflux</Link>
      </Menu.Item>
      <Menu.Item key="reflux">
        <Link to={'/reflux'} >reflux</Link>
      </Menu.Item>
    </Menu>
    <div className="kuma-container kuma-container-1180">
      <CSSTransitionGroup transitionName="route" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
        {cloneElement(children || 'div', {
          key: location.pathname,
        })}
      </CSSTransitionGroup>
    </div>
  </div>
);


const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    // 这里可以设置首页跳转的地址
    indexRoute: { onEnter: (nextState, replace) => replace('/noflux') },
    childRoutes: [
      // 新建页面时，请注意更新此处的路由
      nofluxRoute,
      refluxRoute,
    ],
  }],
};

render((
  <Router history={hashHistory} routes={rootRoute} />
),
  document.getElementById('App'),
);
