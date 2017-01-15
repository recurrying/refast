/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	window["Uxcore"] = {
	  "Menu": __webpack_require__(1)
		};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Menu Component for uxcore
	 * @author vincent.bian
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _rcMenu = __webpack_require__(4);

	var _rcMenu2 = _interopRequireDefault(_rcMenu);

	var _cssAnimation = __webpack_require__(23);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Menu Component for uxcore
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vincent.bian
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2014-2015, Uxcore Team, Alinw.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/* eslint-disable no-param-reassign */

	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);

	  function Menu() {
	    _classCallCheck(this, Menu);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Menu.prototype.animate = function animate(node, show, done) {
	    var prefixCls = this.props.prefixCls;

	    var height = void 0;
	    return (0, _cssAnimation2["default"])(node, prefixCls + '-collapse', {
	      start: function start() {
	        if (!show) {
	          node.style.height = node.offsetHeight + 'px';
	          node.style.opacity = 0;
	        } else {
	          height = node.offsetHeight;
	          node.style.height = 0;
	          node.style.opacity = 1;
	          // node.style.transform = 'translate(-10px, 0)';
	        }
	      },
	      active: function active() {
	        node.style.height = (show ? height : 0) + 'px';
	        // node.style.transform = `translate(${show ? '0' : '-10px'}, 0)`;
	      },
	      end: function end() {
	        node.style.height = '';
	        done();
	      }
	    });
	  };

	  Menu.prototype.render = function render() {
	    var me = this;
	    var openAnimation = {
	      enter: function enter(node, done) {
	        return me.animate(node, true, done);
	      },
	      appear: function appear(node, done) {
	        return me.animate(node, true, done);
	      },
	      leave: function leave(node, done) {
	        return me.animate(node, false, done);
	      }
	    };
	    if (this.props.mode === 'inline') {
	      return _react2["default"].createElement(_rcMenu2["default"], _extends({}, this.props, { openAnimation: openAnimation }));
	    }
	    return _react2["default"].createElement(_rcMenu2["default"], this.props);
	  };

	  return Menu;
	}(_react2["default"].Component);

	Menu.defaultProps = {
	  prefixCls: 'kuma-menu',
	  openAnimation: ''
	};
	Menu.propTypes = {
	  mode: _react2["default"].PropTypes.string,
	  prefixCls: _react2["default"].PropTypes.string
	};

	Menu.SubMenu = _rcMenu.SubMenu;
	Menu.Item = _rcMenu.Item;
	Menu.Divider = _rcMenu.Divider;

	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;

	var _Menu = __webpack_require__(5);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _SubMenu = __webpack_require__(17);

	var _SubMenu2 = _interopRequireDefault(_SubMenu);

	var _MenuItem = __webpack_require__(35);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuItemGroup = __webpack_require__(36);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	var _Divider = __webpack_require__(37);

	var _Divider2 = _interopRequireDefault(_Divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.SubMenu = _SubMenu2["default"];
	exports.Item = _MenuItem2["default"];
	exports.MenuItem = _MenuItem2["default"];
	exports.MenuItemGroup = _MenuItemGroup2["default"];
	exports.ItemGroup = _MenuItemGroup2["default"];
	exports.Divider = _Divider2["default"];
	exports["default"] = _Menu2["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _MenuMixin = __webpack_require__(6);

	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);

	var _objectAssign = __webpack_require__(14);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Menu = _react2["default"].createClass({
	  displayName: 'Menu',

	  propTypes: {
	    openSubMenuOnMouseEnter: _react.PropTypes.bool,
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultOpenKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    mode: _react.PropTypes.string,
	    onClick: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    openTransitionName: _react.PropTypes.string,
	    openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    level: _react.PropTypes.number,
	    eventKey: _react.PropTypes.string,
	    selectable: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  mixins: [_MenuMixin2["default"]],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpen: _util.noop,
	      onClose: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys,
	      openKeys: openKeys
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	    this.setState(props);
	  },
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	  onItemHover: function onItemHover(e) {
	    var _this = this;

	    var item = e.item;
	    // special for top sub menu

	    if (this.props.mode !== 'inline' && !this.props.closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this.state.activeKey;
	        var activeItem = _this.getFlatInstanceArray().filter(function (c) {
	          return c && c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          _this.onOpenChange({
	            key: item.props.eventKey,
	            item: e.item,
	            open: true
	          });
	        }
	      })();
	    }

	    this.onCommonItemHover(e);
	  },
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _objectAssign2["default"])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e) {
	    var props = this.props;
	    var openKeys = this.state.openKeys;
	    var changed = true;
	    if (e.open) {
	      changed = openKeys.indexOf(e.key) === -1;
	      if (changed) {
	        openKeys = openKeys.concat(e.key);
	      }
	    } else {
	      var index = openKeys.indexOf(e.key);
	      changed = index !== -1;
	      if (changed) {
	        openKeys = openKeys.concat();
	        openKeys.splice(index, 1);
	      }
	    }
	    if (changed) {
	      // hack, synchronous call from onTitleMouseEnter
	      this.state.openKeys = openKeys;
	      if (!('openKeys' in this.props)) {
	        // hack: batch does not update state
	        this.setState({ openKeys: openKeys });
	      }
	      var info = (0, _objectAssign2["default"])({ openKeys: openKeys }, e);
	      if (e.open) {
	        props.onOpen(info);
	      } else {
	        props.onClose(info);
	      }
	    }
	  },
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _objectAssign2["default"])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var _this2 = this;

	    var lastOpen = [];
	    if (this.state.openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && _this2.state.openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var props = (0, _objectAssign2["default"])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  }
	});

	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _KeyCode = __webpack_require__(8);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _createChainedFunction = __webpack_require__(9);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _domScrollIntoView = __webpack_require__(11);

	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

	var _objectAssign = __webpack_require__(14);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _util = __webpack_require__(15);

	var _DOMWrap = __webpack_require__(16);

	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}

	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children;
	  var eventKey = props.eventKey;
	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}

	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}

	var MenuMixin = {
	  propTypes: {
	    focusable: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    defaultActiveFirst: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    activeKey: _react.PropTypes.string,
	    selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultOpenKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props, props.activeKey)
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = void 0;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },


	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e) {
	    var _this = this;

	    var keyCode = e.keyCode;
	    var handled = void 0;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _KeyCode2["default"].UP || keyCode === _KeyCode2["default"].DOWN) {
	      activeItem = this.step(keyCode === _KeyCode2["default"].UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2["default"])(_reactDom2["default"].findDOMNode(activeItem), _reactDom2["default"].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  },
	  onCommonItemHover: function onCommonItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;

	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty

	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        this.onOpenChange({
	          item: activeItem,
	          key: activeItem.props.eventKey,
	          open: false
	        });
	      }
	    }
	  },
	  getFlatInstanceArray: function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  },
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = (0, _objectAssign2["default"])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _createChainedFunction2["default"])(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  },
	  renderRoot: function renderRoot(props) {
	    var _classes;

	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return(
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem)
	      )
	      /*eslint-enable */

	    );
	  },
	  step: function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};

	exports["default"] = MenuMixin;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window.ReactDOM || window.React;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}

	module.exports = createChainedFunction;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(12);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(13);

	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }

	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;

	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;

	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }

	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }

	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}

	module.exports = scrollIntoView;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }

	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;

	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}

	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecusively = loopMenuItemRecusively;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var now = Date.now();

	function noop() {}

	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + now + '_' + index;
	}

	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2["default"].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type.isMenuItemGroup) {
	      _react2["default"].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}

	function loopMenuItemRecusively(children, keys, ret) {
	  if (!children || ret.find) {
	    return;
	  }
	  _react2["default"].Children.forEach(children, function (c) {
	    if (ret.find) {
	      return;
	    }
	    if (c) {
	      var construt = c.type;
	      if (!construt || !(construt.isSubMenu || construt.isMenuItem || construt.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecusively(c.props.children, keys, ret);
	      }
	    }
	  });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(14);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DOMWrap = _react2["default"].createClass({
	  displayName: 'DOMWrap',

	  propTypes: {
	    tag: _react.PropTypes.string,
	    hiddenClassName: _react.PropTypes.string,
	    visible: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	  render: function render() {
	    var props = (0, _objectAssign2["default"])({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    delete props.tag;
	    delete props.hiddenClassName;
	    delete props.visible;
	    return _react2["default"].createElement(Tag, props);
	  }
	});

	exports["default"] = DOMWrap;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _SubPopupMenu = __webpack_require__(18);

	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _KeyCode = __webpack_require__(8);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _guid = __webpack_require__(28);

	var _guid2 = _interopRequireDefault(_guid);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/* eslint react/no-is-mounted:0 */

	var SubMenu = _react2["default"].createClass({
	  displayName: 'SubMenu',

	  propTypes: {
	    parentMenu: _react.PropTypes.object,
	    title: _react.PropTypes.node,
	    children: _react.PropTypes.any,
	    selectedKeys: _react.PropTypes.array,
	    openKeys: _react.PropTypes.array,
	    onClick: _react.PropTypes.func,
	    onOpenChange: _react.PropTypes.func,
	    rootPrefixCls: _react.PropTypes.string,
	    eventKey: _react.PropTypes.string,
	    multiple: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    onSelect: _react.PropTypes.func,
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    openSubMenuOnMouseEnter: _react.PropTypes.bool,
	    onDeselect: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    onItemHover: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    onTitleMouseEnter: _react.PropTypes.func,
	    onTitleMouseLeave: _react.PropTypes.func,
	    onTitleClick: _react.PropTypes.func
	  },

	  mixins: [__webpack_require__(29)],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop,
	      onTitleMouseEnter: _util.noop,
	      onTitleMouseLeave: _util.noop,
	      onTitleClick: _util.noop,
	      title: ''
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.subMenuInstance === this) {
	      this.clearSubMenuTimers();
	    }
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	    var isOpen = this.isOpen();

	    if (keyCode === _KeyCode2["default"].ENTER) {
	      this.onTitleClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }

	    if (keyCode === _KeyCode2["default"].RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _KeyCode2["default"].LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }

	    if (isOpen && (keyCode === _KeyCode2["default"].UP || keyCode === _KeyCode2["default"].DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(this.addKeyPath(e));
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    this.clearSubMenuLeaveTimer(props.parentMenu.subMenuInstance !== this);
	    props.onMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  },
	  onTitleMouseEnter: function onTitleMouseEnter(e) {
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    this.clearSubMenuTitleLeaveTimer(parentMenu.subMenuInstance !== this);
	    if (parentMenu.menuItemInstance) {
	      parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer(true);
	    }
	    props.onItemHover({
	      key: props.eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      this.triggerOpenChange(true);
	    }
	    this.setState({
	      defaultActiveFirst: false
	    });
	    props.onTitleMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  },
	  onTitleMouseLeave: function onTitleMouseLeave(e) {
	    var _this = this;

	    var props = this.props;

	    var parentMenu = props.parentMenu;
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuTitleLeaveFn = function () {
	      var eventKey = props.eventKey;
	      if (_this.isMounted()) {
	        // leave whole sub tree
	        // still active
	        if (props.mode === 'inline' && props.active) {
	          props.onItemHover({
	            key: eventKey,
	            item: _this,
	            hover: false,
	            trigger: 'mouseleave'
	          });
	        }
	        props.onTitleMouseLeave({
	          key: props.eventKey,
	          domEvent: e
	        });
	      }
	    };
	    parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this2 = this;

	    var props = this.props;

	    var parentMenu = props.parentMenu;
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuLeaveFn = function () {
	      var eventKey = props.eventKey;
	      if (_this2.isMounted()) {
	        // leave whole sub tree
	        // still active
	        if (props.mode !== 'inline') {
	          if (props.active) {
	            props.onItemHover({
	              key: eventKey,
	              item: _this2,
	              hover: false,
	              trigger: 'mouseleave'
	            });
	          }
	          if (_this2.isOpen()) {
	            if (props.closeSubMenuOnMouseLeave) {
	              _this2.triggerOpenChange(false);
	            }
	          }
	        }
	        // trigger mouseleave
	        props.onMouseLeave({
	          key: eventKey,
	          domEvent: e
	        });
	      }
	    };
	    // prevent popup menu and submenu gap
	    parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100);
	  },
	  onTitleClick: function onTitleClick(e) {
	    var props = this.props;

	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.isOpen(), 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	  addKeyPath: function addKeyPath(info) {
	    return _extends({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  },
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  },
	  clearSubMenuTimers: function clearSubMenuTimers(callFn) {
	    this.clearSubMenuLeaveTimer(callFn);
	    this.clearSubMenuTitleLeaveTimer(callFn);
	  },
	  clearSubMenuTitleLeaveTimer: function clearSubMenuTitleLeaveTimer(callFn) {
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuTitleLeaveTimer) {
	      clearTimeout(parentMenu.subMenuTitleLeaveTimer);
	      parentMenu.subMenuTitleLeaveTimer = null;
	      if (callFn && parentMenu.subMenuTitleLeaveFn) {
	        parentMenu.subMenuTitleLeaveFn();
	      }
	      parentMenu.subMenuTitleLeaveFn = null;
	    }
	  },
	  clearSubMenuLeaveTimer: function clearSubMenuLeaveTimer(callFn) {
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuLeaveTimer) {
	      clearTimeout(parentMenu.subMenuLeaveTimer);
	      parentMenu.subMenuLeaveTimer = null;
	      if (callFn && parentMenu.subMenuLeaveFn) {
	        parentMenu.subMenuLeaveFn();
	      }
	      parentMenu.subMenuLeaveFn = null;
	    }
	  },
	  isChildrenSelected: function isChildrenSelected() {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecusively)(this.props.children, this.props.selectedKeys, ret);
	    return ret.find;
	  },
	  isOpen: function isOpen() {
	    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.isOpen(),
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2["default"].createElement(
	      _SubPopupMenu2["default"],
	      baseProps,
	      children
	    );
	  },
	  render: function render() {
	    var _classes;

	    var isOpen = this.isOpen();
	    this.haveOpen = this.haveOpen || isOpen;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);

	    classes[this.getOpenClassName()] = isOpen;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getSelectedClassName()] = this.isChildrenSelected();

	    this._menuId = this._menuId || (0, _guid2["default"])();
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var titleClickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({ className: (0, _classnames2["default"])(classes) }, mouseEvents),
	      _react2["default"].createElement(
	        'div',
	        _extends({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, titleClickEvents, {
	          'aria-open': isOpen,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  }
	});

	SubMenu.isSubMenu = 1;

	exports["default"] = SubMenu;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _MenuMixin = __webpack_require__(6);

	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);

	var _objectAssign = __webpack_require__(14);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _rcAnimate = __webpack_require__(19);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var SubPopupMenu = _react2["default"].createClass({
	  displayName: 'SubPopupMenu',

	  propTypes: {
	    onSelect: _react.PropTypes.func,
	    onClick: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    onOpenChange: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    openTransitionName: _react.PropTypes.string,
	    openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  mixins: [_MenuMixin2["default"]],

	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onItemHover: function onItemHover(e) {
	    this.onCommonItemHover(e);
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    var props = this.props;
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _objectAssign2["default"])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (_typeof(props.openAnimation) === 'object') {
	      animProps.animation = (0, _objectAssign2["default"])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      _extends({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      this.renderRoot(props)
	    );
	  }
	});

	exports["default"] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';

	module.exports = __webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(21);

	var _AnimateChild = __webpack_require__(22);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(27);

	var _util2 = _interopRequireDefault(_util);

	var defaultKey = 'rc_animate_' + Date.now();

	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',

	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    exclusive: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },

	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      _this.performAppear(child.key);
	    });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.isMounted()) {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  },

	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },

	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },

	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },

	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },

	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	    }
	  },

	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },

	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },

	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(
	          _AnimateChild2['default'],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});

	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child.key !== child2.key) {
	        same = false;
	      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	        same = false;
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _cssAnimation = __webpack_require__(23);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	var _util = __webpack_require__(27);

	var _util2 = _interopRequireDefault(_util);

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',

	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },

	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },

	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },

	  transition: function transition(animationType, finishCallback) {
	    var _this = this;

	    var node = _reactDom2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },

	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },

	  render: function render() {
	    return this.props.children;
	  }
	});

	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(24);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(25);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(26);
	} catch (err) {
	  var index = __webpack_require__(26);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },

	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + "_" + seed++;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KeyCode = __webpack_require__(8);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _addEventListener = __webpack_require__(30);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _contains = __webpack_require__(34);

	var _contains2 = _interopRequireDefault(_contains);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _KeyCode2["default"].ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if ((0, _contains2["default"])(_reactDom2["default"].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = (0, _addEventListener2["default"])(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = (0, _addEventListener2["default"])(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }

	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(31);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2["default"].unstable_batchedUpdates ? function run(e) {
	    _reactDom2["default"].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2["default"])(target, eventType, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;

	var _EventObject = __webpack_require__(32);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EventBaseObject = __webpack_require__(33);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(14);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2["default"].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _KeyCode = __webpack_require__(8);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* eslint react/no-is-mounted:0 */

	var MenuItem = _react2["default"].createClass({
	  displayName: 'MenuItem',

	  propTypes: {
	    rootPrefixCls: _react.PropTypes.string,
	    eventKey: _react.PropTypes.string,
	    active: _react.PropTypes.bool,
	    children: _react.PropTypes.any,
	    selectedKeys: _react.PropTypes.array,
	    disabled: _react.PropTypes.bool,
	    title: _react.PropTypes.string,
	    onSelect: _react.PropTypes.func,
	    onClick: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    parentMenu: _react.PropTypes.object,
	    onItemHover: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSelect: _util.noop,
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.menuItemInstance === this) {
	      this.clearMenuItemMouseLeaveTimer();
	    }
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _KeyCode2["default"].ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this = this;

	    var props = this.props;
	    var eventKey = props.eventKey;
	    var parentMenu = props.parentMenu;
	    parentMenu.menuItemInstance = this;
	    parentMenu.menuItemMouseLeaveFn = function () {
	      if (_this.isMounted() && props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	    };
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
	    props.onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    this.clearMenuItemMouseLeaveTimer(parentMenu.menuItemInstance !== this);
	    if (parentMenu.subMenuInstance) {
	      parentMenu.subMenuInstance.clearSubMenuTimers(true);
	    }
	    var eventKey = props.eventKey;
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	    props.onMouseEnter({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onClick: function onClick(e) {
	    var props = this.props;
	    var selected = this.isSelected();
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!selected) {
	      props.onSelect(info);
	    }
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  clearMenuItemMouseLeaveTimer: function clearMenuItemMouseLeaveTimer(callFn) {
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	      if (callFn && parentMenu.menuItemMouseLeaveFn) {
	        parentMenu.menuItemMouseLeaveFn();
	      }
	      parentMenu.menuItemMouseLeaveFn = null;
	    }
	  },
	  isSelected: function isSelected() {
	    return this.props.selectedKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  render: function render() {
	    var props = this.props;
	    var selected = this.isSelected();
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = _extends({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2["default"])(classes),
	      role: 'menuitem',
	      'aria-selected': selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = _extends({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({
	        style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  }
	});

	MenuItem.isMenuItem = 1;

	exports["default"] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var MenuItemGroup = _react2["default"].createClass({
	  displayName: 'MenuItemGroup',

	  propTypes: {
	    renderMenuItem: _react.PropTypes.func,
	    index: _react.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
	    var renderMenuItem = this.props.renderMenuItem;
	    return renderMenuItem(item, this.props.index, subIndex);
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;

	    className += ' ' + rootPrefixCls + '-item-group';
	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    return _react2["default"].createElement(
	      'li',
	      { className: className },
	      _react2["default"].createElement(
	        'div',
	        { className: titleClassName },
	        props.title
	      ),
	      _react2["default"].createElement(
	        'ul',
	        { className: listClassName },
	        _react2["default"].Children.map(props.children, this.renderInnerMenuItem)
	      )
	    );
	  }
	});

	MenuItemGroup.isMenuItemGroup = true;

	exports["default"] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Divider = _react2["default"].createClass({
	  displayName: 'Divider',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;
	    className += ' ' + (rootPrefixCls + '-item-divider');
	    return _react2["default"].createElement('li', { className: className });
	  }
	});

	exports["default"] = Divider;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXhjb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDA0OWRjM2MwYzllYzRiMzE0ZjhkIiwid2VicGFjazovLy9saWJfX3V4Y29yZS5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL34vdXhjb3JlLW1lbnUvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi91eGNvcmUtbWVudS9idWlsZC9NZW51LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiIiwid2VicGFjazovLy8uL34vcmMtbWVudS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYy1tZW51L2xpYi9NZW51LmpzIiwid2VicGFjazovLy8uL34vcmMtbWVudS9saWIvTWVudU1peGluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdERPTSB8fCB3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L3JjLXV0aWwvbGliL0tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYy11dGlsL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL2RvbS1zY3JvbGwtaW50by12aWV3LmpzIiwid2VicGFjazovLy8uL34vZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmMtbWVudS9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLW1lbnUvbGliL0RPTVdyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYy1tZW51L2xpYi9TdWJNZW51LmpzIiwid2VicGFjazovLy8uL34vcmMtbWVudS9saWIvU3ViUG9wdXBNZW51LmpzIiwid2VicGFjazovLy8uL34vcmMtYW5pbWF0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYy1hbmltYXRlL2xpYi9BbmltYXRlLmpzIiwid2VicGFjazovLy8uL34vcmMtYW5pbWF0ZS9saWIvQ2hpbGRyZW5VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLWFuaW1hdGUvbGliL0FuaW1hdGVDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1hbmltYXRpb24vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY3NzLWFuaW1hdGlvbi9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmMtYW5pbWF0ZS9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLXV0aWwvbGliL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYy1tZW51L2xpYi9TdWJNZW51U3RhdGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLXV0aWwvbGliL0RvbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLW1lbnUvbGliL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL34vcmMtbWVudS9saWIvTWVudUl0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JjLW1lbnUvbGliL0RpdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDQ5ZGMzYzBjOWVjNGIzMTRmOGQiLCJ3aW5kb3dbXCJVeGNvcmVcIl09e1xuXCJNZW51XCI6cmVxdWlyZShcInV4Y29yZS1tZW51XCIpLFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliX191eGNvcmUuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lbnUgQ29tcG9uZW50IGZvciB1eGNvcmVcbiAqIEBhdXRob3IgdmluY2VudC5iaWFuXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgVXhjb3JlIFRlYW0sIEFsaW53LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vTWVudScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91eGNvcmUtbWVudS9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yY01lbnUgPSByZXF1aXJlKCdyYy1tZW51Jyk7XG5cbnZhciBfcmNNZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JjTWVudSk7XG5cbnZhciBfY3NzQW5pbWF0aW9uID0gcmVxdWlyZSgnY3NzLWFuaW1hdGlvbicpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBbmltYXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTWVudSBDb21wb25lbnQgZm9yIHV4Y29yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciB2aW5jZW50LmJpYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBVeGNvcmUgVGVhbSwgQWxpbncuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxudmFyIE1lbnUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIE1lbnUucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiBhbmltYXRlKG5vZGUsIHNob3csIGRvbmUpIHtcbiAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG5cbiAgICB2YXIgaGVpZ2h0ID0gdm9pZCAwO1xuICAgIHJldHVybiAoMCwgX2Nzc0FuaW1hdGlvbjJbXCJkZWZhdWx0XCJdKShub2RlLCBwcmVmaXhDbHMgKyAnLWNvbGxhcHNlJywge1xuICAgICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgIC8vIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtMTBweCwgMCknO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aXZlOiBmdW5jdGlvbiBhY3RpdmUoKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gKHNob3cgPyBoZWlnaHQgOiAwKSArICdweCc7XG4gICAgICAgIC8vIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Nob3cgPyAnMCcgOiAnLTEwcHgnfSwgMClgO1xuICAgICAgfSxcbiAgICAgIGVuZDogZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgTWVudS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIG9wZW5BbmltYXRpb24gPSB7XG4gICAgICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgZG9uZSkge1xuICAgICAgICByZXR1cm4gbWUuYW5pbWF0ZShub2RlLCB0cnVlLCBkb25lKTtcbiAgICAgIH0sXG4gICAgICBhcHBlYXI6IGZ1bmN0aW9uIGFwcGVhcihub2RlLCBkb25lKSB7XG4gICAgICAgIHJldHVybiBtZS5hbmltYXRlKG5vZGUsIHRydWUsIGRvbmUpO1xuICAgICAgfSxcbiAgICAgIGxlYXZlOiBmdW5jdGlvbiBsZWF2ZShub2RlLCBkb25lKSB7XG4gICAgICAgIHJldHVybiBtZS5hbmltYXRlKG5vZGUsIGZhbHNlLCBkb25lKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfcmNNZW51MltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IG9wZW5BbmltYXRpb246IG9wZW5BbmltYXRpb24gfSkpO1xuICAgIH1cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfcmNNZW51MltcImRlZmF1bHRcIl0sIHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBNZW51O1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAna3VtYS1tZW51JyxcbiAgb3BlbkFuaW1hdGlvbjogJydcbn07XG5NZW51LnByb3BUeXBlcyA9IHtcbiAgbW9kZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5NZW51LlN1Yk1lbnUgPSBfcmNNZW51LlN1Yk1lbnU7XG5NZW51Lkl0ZW0gPSBfcmNNZW51Lkl0ZW07XG5NZW51LkRpdmlkZXIgPSBfcmNNZW51LkRpdmlkZXI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVudTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91eGNvcmUtbWVudS9idWlsZC9NZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EaXZpZGVyID0gZXhwb3J0cy5JdGVtR3JvdXAgPSBleHBvcnRzLk1lbnVJdGVtR3JvdXAgPSBleHBvcnRzLk1lbnVJdGVtID0gZXhwb3J0cy5JdGVtID0gZXhwb3J0cy5TdWJNZW51ID0gdW5kZWZpbmVkO1xuXG52YXIgX01lbnUgPSByZXF1aXJlKCcuL01lbnUnKTtcblxudmFyIF9NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUpO1xuXG52YXIgX1N1Yk1lbnUgPSByZXF1aXJlKCcuL1N1Yk1lbnUnKTtcblxudmFyIF9TdWJNZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1Yk1lbnUpO1xuXG52YXIgX01lbnVJdGVtID0gcmVxdWlyZSgnLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtKTtcblxudmFyIF9NZW51SXRlbUdyb3VwID0gcmVxdWlyZSgnLi9NZW51SXRlbUdyb3VwJyk7XG5cbnZhciBfTWVudUl0ZW1Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbUdyb3VwKTtcblxudmFyIF9EaXZpZGVyID0gcmVxdWlyZSgnLi9EaXZpZGVyJyk7XG5cbnZhciBfRGl2aWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXZpZGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuU3ViTWVudSA9IF9TdWJNZW51MltcImRlZmF1bHRcIl07XG5leHBvcnRzLkl0ZW0gPSBfTWVudUl0ZW0yW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuTWVudUl0ZW0gPSBfTWVudUl0ZW0yW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuTWVudUl0ZW1Hcm91cCA9IF9NZW51SXRlbUdyb3VwMltcImRlZmF1bHRcIl07XG5leHBvcnRzLkl0ZW1Hcm91cCA9IF9NZW51SXRlbUdyb3VwMltcImRlZmF1bHRcIl07XG5leHBvcnRzLkRpdmlkZXIgPSBfRGl2aWRlcjJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfTWVudTJbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yYy1tZW51L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9NZW51TWl4aW4gPSByZXF1aXJlKCcuL01lbnVNaXhpbicpO1xuXG52YXIgX01lbnVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51TWl4aW4pO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgTWVudSA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvcGVuU3ViTWVudU9uTW91c2VFbnRlcjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzOiBfcmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGRlZmF1bHRPcGVuS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBvcGVuS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBtb2RlOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlblRyYW5zaXRpb25OYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcGVuQW5pbWF0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XSksXG4gICAgbGV2ZWw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RhYmxlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgbWl4aW5zOiBbX01lbnVNaXhpbjJbXCJkZWZhdWx0XCJdXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlblN1Yk1lbnVPbk1vdXNlRW50ZXI6IHRydWUsXG4gICAgICBjbG9zZVN1Yk1lbnVPbk1vdXNlTGVhdmU6IHRydWUsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgb25DbGljazogX3V0aWwubm9vcCxcbiAgICAgIG9uU2VsZWN0OiBfdXRpbC5ub29wLFxuICAgICAgb25PcGVuOiBfdXRpbC5ub29wLFxuICAgICAgb25DbG9zZTogX3V0aWwubm9vcCxcbiAgICAgIG9uRGVzZWxlY3Q6IF91dGlsLm5vb3AsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzOiBbXSxcbiAgICAgIGRlZmF1bHRPcGVuS2V5czogW11cbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzZWxlY3RlZEtleXMgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWRLZXlzO1xuICAgIHZhciBvcGVuS2V5cyA9IHByb3BzLmRlZmF1bHRPcGVuS2V5cztcbiAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIHNlbGVjdGVkS2V5cyA9IHByb3BzLnNlbGVjdGVkS2V5cyB8fCBbXTtcbiAgICB9XG4gICAgaWYgKCdvcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXMgfHwgW107XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5cyxcbiAgICAgIG9wZW5LZXlzOiBvcGVuS2V5c1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHByb3BzID0ge307XG4gICAgaWYgKCdzZWxlY3RlZEtleXMnIGluIG5leHRQcm9wcykge1xuICAgICAgcHJvcHMuc2VsZWN0ZWRLZXlzID0gbmV4dFByb3BzLnNlbGVjdGVkS2V5cztcbiAgICB9XG4gICAgaWYgKCdvcGVuS2V5cycgaW4gbmV4dFByb3BzKSB7XG4gICAgICBwcm9wcy5vcGVuS2V5cyA9IG5leHRQcm9wcy5vcGVuS2V5cztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcm9wcyk7XG4gIH0sXG4gIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc2VsZWN0ZWRLZXlzID0gc3RhdGUuc2VsZWN0ZWRLZXlzO1xuICAgIHZhciBvcGVuS2V5cyA9IHN0YXRlLm9wZW5LZXlzO1xuICAgIHZhciBpbmRleCA9IHNlbGVjdGVkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpICYmIGluZGV4ICE9PSAtMSkge1xuICAgICAgc2VsZWN0ZWRLZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGluZGV4ID0gb3BlbktleXMuaW5kZXhPZihrZXkpO1xuICAgIGlmICghKCdvcGVuS2V5cycgaW4gcHJvcHMpICYmIGluZGV4ICE9PSAtMSkge1xuICAgICAgb3BlbktleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH0sXG4gIG9uSXRlbUhvdmVyOiBmdW5jdGlvbiBvbkl0ZW1Ib3ZlcihlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBpdGVtID0gZS5pdGVtO1xuICAgIC8vIHNwZWNpYWwgZm9yIHRvcCBzdWIgbWVudVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gJ2lubGluZScgJiYgIXRoaXMucHJvcHMuY2xvc2VTdWJNZW51T25Nb3VzZUxlYXZlICYmIGl0ZW0uaXNTdWJNZW51KSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aXZlS2V5ID0gX3RoaXMuc3RhdGUuYWN0aXZlS2V5O1xuICAgICAgICB2YXIgYWN0aXZlSXRlbSA9IF90aGlzLmdldEZsYXRJbnN0YW5jZUFycmF5KCkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMgJiYgYy5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICAgICAgICB9KVswXTtcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW0gJiYgYWN0aXZlSXRlbS5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgX3RoaXMub25PcGVuQ2hhbmdlKHtcbiAgICAgICAgICAgIGtleTogaXRlbS5wcm9wcy5ldmVudEtleSxcbiAgICAgICAgICAgIGl0ZW06IGUuaXRlbSxcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ29tbW9uSXRlbUhvdmVyKGUpO1xuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3Qoc2VsZWN0SW5mbykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgIC8vIHJvb3QgbWVudVxuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzO1xuICAgICAgdmFyIHNlbGVjdGVkS2V5ID0gc2VsZWN0SW5mby5rZXk7XG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzID0gc2VsZWN0ZWRLZXlzLmNvbmNhdChbc2VsZWN0ZWRLZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cyA9IFtzZWxlY3RlZEtleV07XG4gICAgICB9XG4gICAgICBpZiAoISgnc2VsZWN0ZWRLZXlzJyBpbiBwcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vblNlbGVjdCgoMCwgX29iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKSh7fSwgc2VsZWN0SW5mbywge1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICB9LFxuICBvbk9wZW5DaGFuZ2U6IGZ1bmN0aW9uIG9uT3BlbkNoYW5nZShlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb3BlbktleXMgPSB0aGlzLnN0YXRlLm9wZW5LZXlzO1xuICAgIHZhciBjaGFuZ2VkID0gdHJ1ZTtcbiAgICBpZiAoZS5vcGVuKSB7XG4gICAgICBjaGFuZ2VkID0gb3BlbktleXMuaW5kZXhPZihlLmtleSkgPT09IC0xO1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgb3BlbktleXMgPSBvcGVuS2V5cy5jb25jYXQoZS5rZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5kZXggPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KTtcbiAgICAgIGNoYW5nZWQgPSBpbmRleCAhPT0gLTE7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBvcGVuS2V5cyA9IG9wZW5LZXlzLmNvbmNhdCgpO1xuICAgICAgICBvcGVuS2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgLy8gaGFjaywgc3luY2hyb25vdXMgY2FsbCBmcm9tIG9uVGl0bGVNb3VzZUVudGVyXG4gICAgICB0aGlzLnN0YXRlLm9wZW5LZXlzID0gb3BlbktleXM7XG4gICAgICBpZiAoISgnb3BlbktleXMnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIC8vIGhhY2s6IGJhdGNoIGRvZXMgbm90IHVwZGF0ZSBzdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbktleXM6IG9wZW5LZXlzIH0pO1xuICAgICAgfVxuICAgICAgdmFyIGluZm8gPSAoMCwgX29iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKSh7IG9wZW5LZXlzOiBvcGVuS2V5cyB9LCBlKTtcbiAgICAgIGlmIChlLm9wZW4pIHtcbiAgICAgICAgcHJvcHMub25PcGVuKGluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMub25DbG9zZShpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG9uRGVzZWxlY3Q6IGZ1bmN0aW9uIG9uRGVzZWxlY3Qoc2VsZWN0SW5mbykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgIHZhciBzZWxlY3RlZEtleXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5jb25jYXQoKTtcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgdmFyIGluZGV4ID0gc2VsZWN0ZWRLZXlzLmluZGV4T2Yoc2VsZWN0ZWRLZXkpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZEtleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICghKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHByb3BzLm9uRGVzZWxlY3QoKDAsIF9vYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXSkoe30sIHNlbGVjdEluZm8sIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sXG4gIGdldE9wZW5UcmFuc2l0aW9uTmFtZTogZnVuY3Rpb24gZ2V0T3BlblRyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb25OYW1lID0gcHJvcHMub3BlbkFuaW1hdGlvbjtcbiAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHR5cGVvZiBhbmltYXRpb25OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLW9wZW4tJyArIGFuaW1hdGlvbk5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgfSxcbiAgaXNJbmxpbmVNb2RlOiBmdW5jdGlvbiBpc0lubGluZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZSA9PT0gJ2lubGluZSc7XG4gIH0sXG4gIGxhc3RPcGVuU3ViTWVudTogZnVuY3Rpb24gbGFzdE9wZW5TdWJNZW51KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGxhc3RPcGVuID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbktleXMubGVuZ3RoKSB7XG4gICAgICBsYXN0T3BlbiA9IHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMgJiYgX3RoaXMyLnN0YXRlLm9wZW5LZXlzLmluZGV4T2YoYy5wcm9wcy5ldmVudEtleSkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0T3BlblswXTtcbiAgfSxcbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGMsIGksIHN1YkluZGV4KSB7XG4gICAgaWYgKCFjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgIG9wZW5LZXlzOiBzdGF0ZS5vcGVuS2V5cyxcbiAgICAgIHNlbGVjdGVkS2V5czogc3RhdGUuc2VsZWN0ZWRLZXlzLFxuICAgICAgb3BlblN1Yk1lbnVPbk1vdXNlRW50ZXI6IHRoaXMucHJvcHMub3BlblN1Yk1lbnVPbk1vdXNlRW50ZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtKGMsIGksIHN1YkluZGV4LCBleHRyYVByb3BzKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gKDAsIF9vYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXSkoe30sIHRoaXMucHJvcHMpO1xuICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBwcm9wcy5wcmVmaXhDbHMgKyAnLXJvb3QnO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3QocHJvcHMpO1xuICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZW51O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL01lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfS2V5Q29kZSA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0tleUNvZGUnKTtcblxudmFyIF9LZXlDb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0tleUNvZGUpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9kb21TY3JvbGxJbnRvVmlldyA9IHJlcXVpcmUoJ2RvbS1zY3JvbGwtaW50by12aWV3Jyk7XG5cbnZhciBfZG9tU2Nyb2xsSW50b1ZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tU2Nyb2xsSW50b1ZpZXcpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBfRE9NV3JhcCA9IHJlcXVpcmUoJy4vRE9NV3JhcCcpO1xuXG52YXIgX0RPTVdyYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRE9NV3JhcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBhbGxEaXNhYmxlZChhcnIpIHtcbiAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGFyci5ldmVyeShmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAhIWMucHJvcHMuZGlzYWJsZWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVLZXkocHJvcHMsIG9yaWdpbmFsQWN0aXZlS2V5KSB7XG4gIHZhciBhY3RpdmVLZXkgPSBvcmlnaW5hbEFjdGl2ZUtleTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIHZhciBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuICBpZiAoYWN0aXZlS2V5KSB7XG4gICAgdmFyIGZvdW5kID0gdm9pZCAwO1xuICAgICgwLCBfdXRpbC5sb29wTWVudUl0ZW0pKGNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgaWYgKCFjLnByb3BzLmRpc2FibGVkICYmIGFjdGl2ZUtleSA9PT0gKDAsIF91dGlsLmdldEtleUZyb21DaGlsZHJlbkluZGV4KShjLCBldmVudEtleSwgaSkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgICB9XG4gIH1cbiAgYWN0aXZlS2V5ID0gbnVsbDtcbiAgaWYgKHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICAgICgwLCBfdXRpbC5sb29wTWVudUl0ZW0pKGNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgaWYgKCFhY3RpdmVLZXkgJiYgIWMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgYWN0aXZlS2V5ID0gKDAsIF91dGlsLmdldEtleUZyb21DaGlsZHJlbkluZGV4KShjLCBldmVudEtleSwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgfVxuICByZXR1cm4gYWN0aXZlS2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlUmVmKGluZGV4LCBzdWJJbmRleCwgYykge1xuICBpZiAoYykge1xuICAgIGlmIChzdWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlQXJyYXlbaW5kZXhdID0gdGhpcy5pbnN0YW5jZUFycmF5W2luZGV4XSB8fCBbXTtcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheVtpbmRleF1bc3ViSW5kZXhdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZUFycmF5W2luZGV4XSA9IGM7XG4gICAgfVxuICB9XG59XG5cbnZhciBNZW51TWl4aW4gPSB7XG4gIHByb3BUeXBlczoge1xuICAgIGZvY3VzYWJsZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpcGxlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHZpc2libGU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzOiBfcmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGRlZmF1bHRPcGVuS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBvcGVuS2V5czogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4Q2xzOiAncmMtbWVudScsXG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICAgIGxldmVsOiAxLFxuICAgICAgaW5saW5lSW5kZW50OiAyNCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBmb2N1c2FibGU6IHRydWUsXG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGdldEFjdGl2ZUtleShwcm9wcywgcHJvcHMuYWN0aXZlS2V5KVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHByb3BzID0gdm9pZCAwO1xuICAgIGlmICgnYWN0aXZlS2V5JyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHByb3BzID0ge1xuICAgICAgICBhY3RpdmVLZXk6IGdldEFjdGl2ZUtleShuZXh0UHJvcHMsIG5leHRQcm9wcy5hY3RpdmVLZXkpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luYWxBY3RpdmVLZXkgPSB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcbiAgICAgIHZhciBhY3RpdmVLZXkgPSBnZXRBY3RpdmVLZXkobmV4dFByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSk7XG4gICAgICAvLyBmaXg6IHRoaXMuc2V0U3RhdGUoKSwgcGFyZW50LnJlbmRlcigpLFxuICAgICAgaWYgKGFjdGl2ZUtleSAhPT0gb3JpZ2luYWxBY3RpdmVLZXkpIHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgYWN0aXZlS2V5OiBhY3RpdmVLZXlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByb3BzKTtcbiAgICB9XG4gIH0sXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZpc2libGUgfHwgbmV4dFByb3BzLnZpc2libGU7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuaW5zdGFuY2VBcnJheSA9IFtdO1xuICB9LFxuXG5cbiAgLy8gYWxsIGtleWJvYXJkIGV2ZW50cyBjYWxsYmFja3MgcnVuIGZyb20gaGVyZSBhdCBmaXJzdFxuICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIHZhciBoYW5kbGVkID0gdm9pZCAwO1xuICAgIHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIGlmIChvYmogJiYgb2JqLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICBoYW5kbGVkID0gb2JqLm9uS2V5RG93bihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBhY3RpdmVJdGVtID0gbnVsbDtcbiAgICBpZiAoa2V5Q29kZSA9PT0gX0tleUNvZGUyW1wiZGVmYXVsdFwiXS5VUCB8fCBrZXlDb2RlID09PSBfS2V5Q29kZTJbXCJkZWZhdWx0XCJdLkRPV04pIHtcbiAgICAgIGFjdGl2ZUl0ZW0gPSB0aGlzLnN0ZXAoa2V5Q29kZSA9PT0gX0tleUNvZGUyW1wiZGVmYXVsdFwiXS5VUCA/IC0xIDogMSk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlS2V5OiBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICgwLCBfZG9tU2Nyb2xsSW50b1ZpZXcyW1wiZGVmYXVsdFwiXSkoX3JlYWN0RG9tMltcImRlZmF1bHRcIl0uZmluZERPTU5vZGUoYWN0aXZlSXRlbSksIF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLmZpbmRET01Ob2RlKF90aGlzKSwge1xuICAgICAgICAgIG9ubHlTY3JvbGxJZk5lZWRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVJdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVLZXk6IG51bGxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LFxuICBvbkNvbW1vbkl0ZW1Ib3ZlcjogZnVuY3Rpb24gb25Db21tb25JdGVtSG92ZXIoZSkge1xuICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgIHZhciBrZXkgPSBlLmtleTtcbiAgICB2YXIgaG92ZXIgPSBlLmhvdmVyO1xuICAgIHZhciB0cmlnZ2VyID0gZS50cmlnZ2VyO1xuXG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuICAgIGlmICghdHJpZ2dlciB8fCBob3ZlciB8fCB0aGlzLnByb3BzLmNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZSB8fCAhZS5pdGVtLmlzU3ViTWVudSB8fCBtb2RlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZUtleTogaG92ZXIgPyBrZXkgOiBudWxsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge31cbiAgICAvLyBrZWVwIGFjdGl2ZSBmb3Igc3ViIG1lbnUgZm9yIGNsaWNrIGFjdGl2ZVxuICAgIC8vIGVtcHR5XG5cbiAgICAvLyBjbGVhciBsYXN0IG9wZW4gc3RhdHVzXG4gICAgaWYgKGhvdmVyICYmIG1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICB2YXIgYWN0aXZlSXRlbSA9IHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMgJiYgYy5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICAgICAgfSlbMF07XG4gICAgICBpZiAoYWN0aXZlSXRlbSAmJiBhY3RpdmVJdGVtLmlzU3ViTWVudSAmJiBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5ICE9PSBrZXkpIHtcbiAgICAgICAgdGhpcy5vbk9wZW5DaGFuZ2Uoe1xuICAgICAgICAgIGl0ZW06IGFjdGl2ZUl0ZW0sXG4gICAgICAgICAga2V5OiBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5LFxuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0RmxhdEluc3RhbmNlQXJyYXk6IGZ1bmN0aW9uIGdldEZsYXRJbnN0YW5jZUFycmF5KCkge1xuICAgIHZhciBpbnN0YW5jZUFycmF5ID0gdGhpcy5pbnN0YW5jZUFycmF5O1xuICAgIHZhciBoYXNJbm5lckFycmF5ID0gaW5zdGFuY2VBcnJheS5zb21lKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKTtcbiAgICB9KTtcbiAgICBpZiAoaGFzSW5uZXJBcnJheSkge1xuICAgICAgaW5zdGFuY2VBcnJheSA9IFtdO1xuICAgICAgdGhpcy5pbnN0YW5jZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICBpbnN0YW5jZUFycmF5LnB1c2guYXBwbHkoaW5zdGFuY2VBcnJheSwgYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zdGFuY2VBcnJheS5wdXNoKGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheSA9IGluc3RhbmNlQXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZUFycmF5O1xuICB9LFxuICByZW5kZXJDb21tb25NZW51SXRlbTogZnVuY3Rpb24gcmVuZGVyQ29tbW9uTWVudUl0ZW0oY2hpbGQsIGksIHN1YkluZGV4LCBleHRyYVByb3BzKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBrZXkgPSAoMCwgX3V0aWwuZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgpKGNoaWxkLCBwcm9wcy5ldmVudEtleSwgaSk7XG4gICAgdmFyIGNoaWxkUHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgICB2YXIgaXNBY3RpdmUgPSBrZXkgPT09IHN0YXRlLmFjdGl2ZUtleTtcbiAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9ICgwLCBfb2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0pKHtcbiAgICAgIG1vZGU6IHByb3BzLm1vZGUsXG4gICAgICBsZXZlbDogcHJvcHMubGV2ZWwsXG4gICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgIHJlbmRlck1lbnVJdGVtOiB0aGlzLnJlbmRlck1lbnVJdGVtLFxuICAgICAgcm9vdFByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgaW5kZXg6IGksXG4gICAgICBwYXJlbnRNZW51OiB0aGlzLFxuICAgICAgcmVmOiBjaGlsZFByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yW1wiZGVmYXVsdFwiXSkoY2hpbGQucmVmLCBzYXZlUmVmLmJpbmQodGhpcywgaSwgc3ViSW5kZXgpKSxcbiAgICAgIGV2ZW50S2V5OiBrZXksXG4gICAgICBjbG9zZVN1Yk1lbnVPbk1vdXNlTGVhdmU6IHByb3BzLmNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZSxcbiAgICAgIG9uSXRlbUhvdmVyOiB0aGlzLm9uSXRlbUhvdmVyLFxuICAgICAgYWN0aXZlOiAhY2hpbGRQcm9wcy5kaXNhYmxlZCAmJiBpc0FjdGl2ZSxcbiAgICAgIG11bHRpcGxlOiBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogdGhpcy5nZXRPcGVuVHJhbnNpdGlvbk5hbWUoKSxcbiAgICAgIG9wZW5BbmltYXRpb246IHByb3BzLm9wZW5BbmltYXRpb24sXG4gICAgICBvbk9wZW5DaGFuZ2U6IHRoaXMub25PcGVuQ2hhbmdlLFxuICAgICAgb25EZXNlbGVjdDogdGhpcy5vbkRlc2VsZWN0LFxuICAgICAgb25EZXN0cm95OiB0aGlzLm9uRGVzdHJveSxcbiAgICAgIG9uU2VsZWN0OiB0aGlzLm9uU2VsZWN0XG4gICAgfSwgZXh0cmFQcm9wcyk7XG4gICAgaWYgKHByb3BzLm1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLmNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZSA9IG5ld0NoaWxkUHJvcHMub3BlblN1Yk1lbnVPbk1vdXNlRW50ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChjaGlsZCwgbmV3Q2hpbGRQcm9wcyk7XG4gIH0sXG4gIHJlbmRlclJvb3Q6IGZ1bmN0aW9uIHJlbmRlclJvb3QocHJvcHMpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB0aGlzLmluc3RhbmNlQXJyYXkgPSBbXTtcbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHByb3BzLnByZWZpeENscywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgcHJvcHMucHJlZml4Q2xzICsgJy0nICsgcHJvcHMubW9kZSwgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lLCAhIXByb3BzLmNsYXNzTmFtZSksIF9jbGFzc2VzKTtcbiAgICB2YXIgZG9tUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc2VzKSxcbiAgICAgIHJvbGU6ICdtZW51JyxcbiAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiAnJ1xuICAgIH07XG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBkb21Qcm9wcy5pZCA9IHByb3BzLmlkO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZm9jdXNhYmxlKSB7XG4gICAgICBkb21Qcm9wcy50YWJJbmRleCA9ICcwJztcbiAgICAgIGRvbVByb3BzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAvLyBFU0xpbnQgaXMgbm90IHNtYXJ0IGVub3VnaCB0byBrbm93IHRoYXQgdGhlIHR5cGUgb2YgYGNoaWxkcmVuYCB3YXMgY2hlY2tlZC5cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRE9NV3JhcDJbXCJkZWZhdWx0XCJdLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlLFxuICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICBoaWRkZW5DbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctaGlkZGVuJyxcbiAgICAgICAgICB2aXNpYmxlOiBwcm9wcy52aXNpYmxlXG4gICAgICAgIH0sIGRvbVByb3BzKSxcbiAgICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck1lbnVJdGVtKVxuICAgICAgKVxuICAgICAgLyplc2xpbnQtZW5hYmxlICovXG5cbiAgICApO1xuICB9LFxuICBzdGVwOiBmdW5jdGlvbiBzdGVwKGRpcmVjdGlvbikge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKTtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAoIWxlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdCgpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgLy8gZmluZCBjdXJyZW50IGFjdGl2ZUluZGV4XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGMsIGNpKSB7XG4gICAgICBpZiAoYyAmJiBjLnByb3BzLmV2ZW50S2V5ID09PSBhY3RpdmVLZXkpIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBjaTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCAmJiBhY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhbGxEaXNhYmxlZChjaGlsZHJlbi5zbGljZShhY3RpdmVJbmRleCwgbGVuIC0gMSkpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzdGFydCA9IChhY3RpdmVJbmRleCArIDEpICUgbGVuO1xuICAgIHZhciBpID0gc3RhcnQ7XG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoIWNoaWxkIHx8IGNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGkgPSAoaSArIDEgKyBsZW4pICUgbGVuO1xuICAgICAgICAvLyBjb21wbGV0ZSBhIGxvb3BcbiAgICAgICAgaWYgKGkgPT09IHN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVudU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL01lbnVNaXhpbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdERPTSB8fCB3aW5kb3cuUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET00gfHwgd2luZG93LlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIHNvbWUga2V5LWNvZGVzIGRlZmluaXRpb24gYW5kIHV0aWxzIGZyb20gY2xvc3VyZS1saWJyYXJ5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbnZhciBLZXlDb2RlID0ge1xuICAvKipcbiAgICogTUFDX0VOVEVSXG4gICAqL1xuICBNQUNfRU5URVI6IDMsXG4gIC8qKlxuICAgKiBCQUNLU1BBQ0VcbiAgICovXG4gIEJBQ0tTUEFDRTogOCxcbiAgLyoqXG4gICAqIFRBQlxuICAgKi9cbiAgVEFCOiA5LFxuICAvKipcbiAgICogTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gICAqL1xuICBOVU1fQ0VOVEVSOiAxMiwgLy8gTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gIC8qKlxuICAgKiBFTlRFUlxuICAgKi9cbiAgRU5URVI6IDEzLFxuICAvKipcbiAgICogU0hJRlRcbiAgICovXG4gIFNISUZUOiAxNixcbiAgLyoqXG4gICAqIENUUkxcbiAgICovXG4gIENUUkw6IDE3LFxuICAvKipcbiAgICogQUxUXG4gICAqL1xuICBBTFQ6IDE4LFxuICAvKipcbiAgICogUEFVU0VcbiAgICovXG4gIFBBVVNFOiAxOSxcbiAgLyoqXG4gICAqIENBUFNfTE9DS1xuICAgKi9cbiAgQ0FQU19MT0NLOiAyMCxcbiAgLyoqXG4gICAqIEVTQ1xuICAgKi9cbiAgRVNDOiAyNyxcbiAgLyoqXG4gICAqIFNQQUNFXG4gICAqL1xuICBTUEFDRTogMzIsXG4gIC8qKlxuICAgKiBQQUdFX1VQXG4gICAqL1xuICBQQUdFX1VQOiAzMywgLy8gYWxzbyBOVU1fTk9SVEhfRUFTVFxuICAvKipcbiAgICogUEFHRV9ET1dOXG4gICAqL1xuICBQQUdFX0RPV046IDM0LCAvLyBhbHNvIE5VTV9TT1VUSF9FQVNUXG4gIC8qKlxuICAgKiBFTkRcbiAgICovXG4gIEVORDogMzUsIC8vIGFsc28gTlVNX1NPVVRIX1dFU1RcbiAgLyoqXG4gICAqIEhPTUVcbiAgICovXG4gIEhPTUU6IDM2LCAvLyBhbHNvIE5VTV9OT1JUSF9XRVNUXG4gIC8qKlxuICAgKiBMRUZUXG4gICAqL1xuICBMRUZUOiAzNywgLy8gYWxzbyBOVU1fV0VTVFxuICAvKipcbiAgICogVVBcbiAgICovXG4gIFVQOiAzOCwgLy8gYWxzbyBOVU1fTk9SVEhcbiAgLyoqXG4gICAqIFJJR0hUXG4gICAqL1xuICBSSUdIVDogMzksIC8vIGFsc28gTlVNX0VBU1RcbiAgLyoqXG4gICAqIERPV05cbiAgICovXG4gIERPV046IDQwLCAvLyBhbHNvIE5VTV9TT1VUSFxuICAvKipcbiAgICogUFJJTlRfU0NSRUVOXG4gICAqL1xuICBQUklOVF9TQ1JFRU46IDQ0LFxuICAvKipcbiAgICogSU5TRVJUXG4gICAqL1xuICBJTlNFUlQ6IDQ1LCAvLyBhbHNvIE5VTV9JTlNFUlRcbiAgLyoqXG4gICAqIERFTEVURVxuICAgKi9cbiAgREVMRVRFOiA0NiwgLy8gYWxzbyBOVU1fREVMRVRFXG4gIC8qKlxuICAgKiBaRVJPXG4gICAqL1xuICBaRVJPOiA0OCxcbiAgLyoqXG4gICAqIE9ORVxuICAgKi9cbiAgT05FOiA0OSxcbiAgLyoqXG4gICAqIFRXT1xuICAgKi9cbiAgVFdPOiA1MCxcbiAgLyoqXG4gICAqIFRIUkVFXG4gICAqL1xuICBUSFJFRTogNTEsXG4gIC8qKlxuICAgKiBGT1VSXG4gICAqL1xuICBGT1VSOiA1MixcbiAgLyoqXG4gICAqIEZJVkVcbiAgICovXG4gIEZJVkU6IDUzLFxuICAvKipcbiAgICogU0lYXG4gICAqL1xuICBTSVg6IDU0LFxuICAvKipcbiAgICogU0VWRU5cbiAgICovXG4gIFNFVkVOOiA1NSxcbiAgLyoqXG4gICAqIEVJR0hUXG4gICAqL1xuICBFSUdIVDogNTYsXG4gIC8qKlxuICAgKiBOSU5FXG4gICAqL1xuICBOSU5FOiA1NyxcbiAgLyoqXG4gICAqIFFVRVNUSU9OX01BUktcbiAgICovXG4gIFFVRVNUSU9OX01BUks6IDYzLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEFcbiAgICovXG4gIEE6IDY1LFxuICAvKipcbiAgICogQlxuICAgKi9cbiAgQjogNjYsXG4gIC8qKlxuICAgKiBDXG4gICAqL1xuICBDOiA2NyxcbiAgLyoqXG4gICAqIERcbiAgICovXG4gIEQ6IDY4LFxuICAvKipcbiAgICogRVxuICAgKi9cbiAgRTogNjksXG4gIC8qKlxuICAgKiBGXG4gICAqL1xuICBGOiA3MCxcbiAgLyoqXG4gICAqIEdcbiAgICovXG4gIEc6IDcxLFxuICAvKipcbiAgICogSFxuICAgKi9cbiAgSDogNzIsXG4gIC8qKlxuICAgKiBJXG4gICAqL1xuICBJOiA3MyxcbiAgLyoqXG4gICAqIEpcbiAgICovXG4gIEo6IDc0LFxuICAvKipcbiAgICogS1xuICAgKi9cbiAgSzogNzUsXG4gIC8qKlxuICAgKiBMXG4gICAqL1xuICBMOiA3NixcbiAgLyoqXG4gICAqIE1cbiAgICovXG4gIE06IDc3LFxuICAvKipcbiAgICogTlxuICAgKi9cbiAgTjogNzgsXG4gIC8qKlxuICAgKiBPXG4gICAqL1xuICBPOiA3OSxcbiAgLyoqXG4gICAqIFBcbiAgICovXG4gIFA6IDgwLFxuICAvKipcbiAgICogUVxuICAgKi9cbiAgUTogODEsXG4gIC8qKlxuICAgKiBSXG4gICAqL1xuICBSOiA4MixcbiAgLyoqXG4gICAqIFNcbiAgICovXG4gIFM6IDgzLFxuICAvKipcbiAgICogVFxuICAgKi9cbiAgVDogODQsXG4gIC8qKlxuICAgKiBVXG4gICAqL1xuICBVOiA4NSxcbiAgLyoqXG4gICAqIFZcbiAgICovXG4gIFY6IDg2LFxuICAvKipcbiAgICogV1xuICAgKi9cbiAgVzogODcsXG4gIC8qKlxuICAgKiBYXG4gICAqL1xuICBYOiA4OCxcbiAgLyoqXG4gICAqIFlcbiAgICovXG4gIFk6IDg5LFxuICAvKipcbiAgICogWlxuICAgKi9cbiAgWjogOTAsXG4gIC8qKlxuICAgKiBNRVRBXG4gICAqL1xuICBNRVRBOiA5MSwgLy8gV0lOX0tFWV9MRUZUXG4gIC8qKlxuICAgKiBXSU5fS0VZX1JJR0hUXG4gICAqL1xuICBXSU5fS0VZX1JJR0hUOiA5MixcbiAgLyoqXG4gICAqIENPTlRFWFRfTUVOVVxuICAgKi9cbiAgQ09OVEVYVF9NRU5VOiA5MyxcbiAgLyoqXG4gICAqIE5VTV9aRVJPXG4gICAqL1xuICBOVU1fWkVSTzogOTYsXG4gIC8qKlxuICAgKiBOVU1fT05FXG4gICAqL1xuICBOVU1fT05FOiA5NyxcbiAgLyoqXG4gICAqIE5VTV9UV09cbiAgICovXG4gIE5VTV9UV086IDk4LFxuICAvKipcbiAgICogTlVNX1RIUkVFXG4gICAqL1xuICBOVU1fVEhSRUU6IDk5LFxuICAvKipcbiAgICogTlVNX0ZPVVJcbiAgICovXG4gIE5VTV9GT1VSOiAxMDAsXG4gIC8qKlxuICAgKiBOVU1fRklWRVxuICAgKi9cbiAgTlVNX0ZJVkU6IDEwMSxcbiAgLyoqXG4gICAqIE5VTV9TSVhcbiAgICovXG4gIE5VTV9TSVg6IDEwMixcbiAgLyoqXG4gICAqIE5VTV9TRVZFTlxuICAgKi9cbiAgTlVNX1NFVkVOOiAxMDMsXG4gIC8qKlxuICAgKiBOVU1fRUlHSFRcbiAgICovXG4gIE5VTV9FSUdIVDogMTA0LFxuICAvKipcbiAgICogTlVNX05JTkVcbiAgICovXG4gIE5VTV9OSU5FOiAxMDUsXG4gIC8qKlxuICAgKiBOVU1fTVVMVElQTFlcbiAgICovXG4gIE5VTV9NVUxUSVBMWTogMTA2LFxuICAvKipcbiAgICogTlVNX1BMVVNcbiAgICovXG4gIE5VTV9QTFVTOiAxMDcsXG4gIC8qKlxuICAgKiBOVU1fTUlOVVNcbiAgICovXG4gIE5VTV9NSU5VUzogMTA5LFxuICAvKipcbiAgICogTlVNX1BFUklPRFxuICAgKi9cbiAgTlVNX1BFUklPRDogMTEwLFxuICAvKipcbiAgICogTlVNX0RJVklTSU9OXG4gICAqL1xuICBOVU1fRElWSVNJT046IDExMSxcbiAgLyoqXG4gICAqIEYxXG4gICAqL1xuICBGMTogMTEyLFxuICAvKipcbiAgICogRjJcbiAgICovXG4gIEYyOiAxMTMsXG4gIC8qKlxuICAgKiBGM1xuICAgKi9cbiAgRjM6IDExNCxcbiAgLyoqXG4gICAqIEY0XG4gICAqL1xuICBGNDogMTE1LFxuICAvKipcbiAgICogRjVcbiAgICovXG4gIEY1OiAxMTYsXG4gIC8qKlxuICAgKiBGNlxuICAgKi9cbiAgRjY6IDExNyxcbiAgLyoqXG4gICAqIEY3XG4gICAqL1xuICBGNzogMTE4LFxuICAvKipcbiAgICogRjhcbiAgICovXG4gIEY4OiAxMTksXG4gIC8qKlxuICAgKiBGOVxuICAgKi9cbiAgRjk6IDEyMCxcbiAgLyoqXG4gICAqIEYxMFxuICAgKi9cbiAgRjEwOiAxMjEsXG4gIC8qKlxuICAgKiBGMTFcbiAgICovXG4gIEYxMTogMTIyLFxuICAvKipcbiAgICogRjEyXG4gICAqL1xuICBGMTI6IDEyMyxcbiAgLyoqXG4gICAqIE5VTUxPQ0tcbiAgICovXG4gIE5VTUxPQ0s6IDE0NCxcbiAgLyoqXG4gICAqIFNFTUlDT0xPTlxuICAgKi9cbiAgU0VNSUNPTE9OOiAxODYsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogREFTSFxuICAgKi9cbiAgREFTSDogMTg5LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEVRVUFMU1xuICAgKi9cbiAgRVFVQUxTOiAxODcsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQ09NTUFcbiAgICovXG4gIENPTU1BOiAxODgsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogUEVSSU9EXG4gICAqL1xuICBQRVJJT0Q6IDE5MCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBTTEFTSFxuICAgKi9cbiAgU0xBU0g6IDE5MSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBBUE9TVFJPUEhFXG4gICAqL1xuICBBUE9TVFJPUEhFOiAxOTIsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogU0lOR0xFX1FVT1RFXG4gICAqL1xuICBTSU5HTEVfUVVPVEU6IDIyMiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBPUEVOX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBPUEVOX1NRVUFSRV9CUkFDS0VUOiAyMTksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQkFDS1NMQVNIXG4gICAqL1xuICBCQUNLU0xBU0g6IDIyMCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBDTE9TRV9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6IDIyMSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBXSU5fS0VZXG4gICAqL1xuICBXSU5fS0VZOiAyMjQsXG4gIC8qKlxuICAgKiBNQUNfRkZfTUVUQVxuICAgKi9cbiAgTUFDX0ZGX01FVEE6IDIyNCwgLy8gRmlyZWZveCAoR2Vja28pIGZpcmVzIHRoaXMgZm9yIHRoZSBtZXRhIGtleSBpbnN0ZWFkIG9mIDkxXG4gIC8qKlxuICAgKiBXSU5fSU1FXG4gICAqL1xuICBXSU5fSU1FOiAyMjlcbn07XG5cbi8qXG4gd2hldGhlciB0ZXh0IGFuZCBtb2RpZmllZCBrZXkgaXMgZW50ZXJlZCBhdCB0aGUgc2FtZSB0aW1lLlxuICovXG5LZXlDb2RlLmlzVGV4dE1vZGlmeWluZ0tleUV2ZW50ID0gZnVuY3Rpb24gaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQoZSkge1xuICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgaWYgKGUuYWx0S2V5ICYmICFlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8XG4gIC8vIEZ1bmN0aW9uIGtleXMgZG9uJ3QgZ2VuZXJhdGUgdGV4dFxuICBrZXlDb2RlID49IEtleUNvZGUuRjEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLkYxMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcga2V5cyBhcmUgcXVpdGUgaGFybWxlc3MsIGV2ZW4gaW4gY29tYmluYXRpb24gd2l0aFxuICAvLyBDVFJMLCBBTFQgb3IgU0hJRlQuXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgS2V5Q29kZS5BTFQ6XG4gICAgY2FzZSBLZXlDb2RlLkNBUFNfTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuQ09OVEVYVF9NRU5VOlxuICAgIGNhc2UgS2V5Q29kZS5DVFJMOlxuICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5FTkQ6XG4gICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICBjYXNlIEtleUNvZGUuSU5TRVJUOlxuICAgIGNhc2UgS2V5Q29kZS5MRUZUOlxuICAgIGNhc2UgS2V5Q29kZS5NQUNfRkZfTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTlVNTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX0NFTlRFUjpcbiAgICBjYXNlIEtleUNvZGUuUEFHRV9ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX1VQOlxuICAgIGNhc2UgS2V5Q29kZS5QQVVTRTpcbiAgICBjYXNlIEtleUNvZGUuUFJJTlRfU0NSRUVOOlxuICAgIGNhc2UgS2V5Q29kZS5SSUdIVDpcbiAgICBjYXNlIEtleUNvZGUuU0hJRlQ6XG4gICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZX1JJR0hUOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLypcbiB3aGV0aGVyIGNoYXJhY3RlciBpcyBlbnRlcmVkLlxuICovXG5LZXlDb2RlLmlzQ2hhcmFjdGVyS2V5ID0gZnVuY3Rpb24gaXNDaGFyYWN0ZXJLZXkoa2V5Q29kZSkge1xuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLlpFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5JTkUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuTlVNX1pFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5VTV9NVUxUSVBMWSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5BICYmIGtleUNvZGUgPD0gS2V5Q29kZS5aKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBTYWZhcmkgc2VuZHMgemVybyBrZXkgY29kZSBmb3Igbm9uLWxhdGluIGNoYXJhY3RlcnMuXG4gIGlmICh3aW5kb3cubmF2aWdhdGlvbi51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT09IC0xICYmIGtleUNvZGUgPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICBjYXNlIEtleUNvZGUuUVVFU1RJT05fTUFSSzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX1BMVVM6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9NSU5VUzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX1BFUklPRDpcbiAgICBjYXNlIEtleUNvZGUuTlVNX0RJVklTSU9OOlxuICAgIGNhc2UgS2V5Q29kZS5TRU1JQ09MT046XG4gICAgY2FzZSBLZXlDb2RlLkRBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkVRVUFMUzpcbiAgICBjYXNlIEtleUNvZGUuQ09NTUE6XG4gICAgY2FzZSBLZXlDb2RlLlBFUklPRDpcbiAgICBjYXNlIEtleUNvZGUuU0xBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkFQT1NUUk9QSEU6XG4gICAgY2FzZSBLZXlDb2RlLlNJTkdMRV9RVU9URTpcbiAgICBjYXNlIEtleUNvZGUuT1BFTl9TUVVBUkVfQlJBQ0tFVDpcbiAgICBjYXNlIEtleUNvZGUuQkFDS1NMQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5DTE9TRV9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5Q29kZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtdXRpbC9saWIvS2V5Q29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcmdzW2ldICYmIGFyZ3NbaV0uYXBwbHkpIHtcbiAgICAgICAgYXJnc1tpXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLXV0aWwvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RvbS1zY3JvbGwtaW50by12aWV3Jyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1zY3JvbGwtaW50by12aWV3L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtLCBjb250YWluZXIsIGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIC8vIGRvY3VtZW50IOW9kuS4gOWMluWIsCB3aW5kb3dcbiAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSkge1xuICAgIGNvbnRhaW5lciA9IHV0aWwuZ2V0V2luZG93KGNvbnRhaW5lcik7XG4gIH1cblxuICB2YXIgYWxsb3dIb3Jpem9udGFsU2Nyb2xsID0gY29uZmlnLmFsbG93SG9yaXpvbnRhbFNjcm9sbDtcbiAgdmFyIG9ubHlTY3JvbGxJZk5lZWRlZCA9IGNvbmZpZy5vbmx5U2Nyb2xsSWZOZWVkZWQ7XG4gIHZhciBhbGlnbldpdGhUb3AgPSBjb25maWcuYWxpZ25XaXRoVG9wO1xuICB2YXIgYWxpZ25XaXRoTGVmdCA9IGNvbmZpZy5hbGlnbldpdGhMZWZ0O1xuICB2YXIgb2Zmc2V0VG9wID0gY29uZmlnLm9mZnNldFRvcCB8fCAwO1xuICB2YXIgb2Zmc2V0TGVmdCA9IGNvbmZpZy5vZmZzZXRMZWZ0IHx8IDA7XG4gIHZhciBvZmZzZXRCb3R0b20gPSBjb25maWcub2Zmc2V0Qm90dG9tIHx8IDA7XG4gIHZhciBvZmZzZXRSaWdodCA9IGNvbmZpZy5vZmZzZXRSaWdodCB8fCAwO1xuXG4gIGFsbG93SG9yaXpvbnRhbFNjcm9sbCA9IGFsbG93SG9yaXpvbnRhbFNjcm9sbCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFsbG93SG9yaXpvbnRhbFNjcm9sbDtcblxuICB2YXIgaXNXaW4gPSB1dGlsLmlzV2luZG93KGNvbnRhaW5lcik7XG4gIHZhciBlbGVtT2Zmc2V0ID0gdXRpbC5vZmZzZXQoZWxlbSk7XG4gIHZhciBlaCA9IHV0aWwub3V0ZXJIZWlnaHQoZWxlbSk7XG4gIHZhciBldyA9IHV0aWwub3V0ZXJXaWR0aChlbGVtKTtcbiAgdmFyIGNvbnRhaW5lck9mZnNldCA9IHVuZGVmaW5lZDtcbiAgdmFyIGNoID0gdW5kZWZpbmVkO1xuICB2YXIgY3cgPSB1bmRlZmluZWQ7XG4gIHZhciBjb250YWluZXJTY3JvbGwgPSB1bmRlZmluZWQ7XG4gIHZhciBkaWZmVG9wID0gdW5kZWZpbmVkO1xuICB2YXIgZGlmZkJvdHRvbSA9IHVuZGVmaW5lZDtcbiAgdmFyIHdpbiA9IHVuZGVmaW5lZDtcbiAgdmFyIHdpblNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgdmFyIHd3ID0gdW5kZWZpbmVkO1xuICB2YXIgd2ggPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzV2luKSB7XG4gICAgd2luID0gY29udGFpbmVyO1xuICAgIHdoID0gdXRpbC5oZWlnaHQod2luKTtcbiAgICB3dyA9IHV0aWwud2lkdGgod2luKTtcbiAgICB3aW5TY3JvbGwgPSB7XG4gICAgICBsZWZ0OiB1dGlsLnNjcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogdXRpbC5zY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgLy8gZWxlbSDnm7jlr7kgY29udGFpbmVyIOWPr+inhuinhueql+eahOi3neemu1xuICAgIGRpZmZUb3AgPSB7XG4gICAgICBsZWZ0OiBlbGVtT2Zmc2V0LmxlZnQgLSB3aW5TY3JvbGwubGVmdCAtIG9mZnNldExlZnQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wIC0gd2luU2Nyb2xsLnRvcCAtIG9mZnNldFRvcFxuICAgIH07XG4gICAgZGlmZkJvdHRvbSA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCArIGV3IC0gKHdpblNjcm9sbC5sZWZ0ICsgd3cpICsgb2Zmc2V0UmlnaHQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wICsgZWggLSAod2luU2Nyb2xsLnRvcCArIHdoKSArIG9mZnNldEJvdHRvbVxuICAgIH07XG4gICAgY29udGFpbmVyU2Nyb2xsID0gd2luU2Nyb2xsO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lck9mZnNldCA9IHV0aWwub2Zmc2V0KGNvbnRhaW5lcik7XG4gICAgY2ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIGN3ID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGNvbnRhaW5lclNjcm9sbCA9IHtcbiAgICAgIGxlZnQ6IGNvbnRhaW5lci5zY3JvbGxMZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuc2Nyb2xsVG9wXG4gICAgfTtcbiAgICAvLyBlbGVtIOebuOWvuSBjb250YWluZXIg5Y+v6KeG6KeG56qX55qE6Led56a7XG4gICAgLy8g5rOo5oSP6L655qGGLCBvZmZzZXQg5piv6L655qGG5Yiw5qC56IqC54K5XG4gICAgZGlmZlRvcCA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCAtIChjb250YWluZXJPZmZzZXQubGVmdCArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlckxlZnRXaWR0aCcpKSB8fCAwKSkgLSBvZmZzZXRMZWZ0LFxuICAgICAgdG9wOiBlbGVtT2Zmc2V0LnRvcCAtIChjb250YWluZXJPZmZzZXQudG9wICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyVG9wV2lkdGgnKSkgfHwgMCkpIC0gb2Zmc2V0VG9wXG4gICAgfTtcbiAgICBkaWZmQm90dG9tID0ge1xuICAgICAgbGVmdDogZWxlbU9mZnNldC5sZWZ0ICsgZXcgLSAoY29udGFpbmVyT2Zmc2V0LmxlZnQgKyBjdyArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlclJpZ2h0V2lkdGgnKSkgfHwgMCkpICsgb2Zmc2V0UmlnaHQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wICsgZWggLSAoY29udGFpbmVyT2Zmc2V0LnRvcCArIGNoICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyQm90dG9tV2lkdGgnKSkgfHwgMCkpICsgb2Zmc2V0Qm90dG9tXG4gICAgfTtcbiAgfVxuXG4gIGlmIChkaWZmVG9wLnRvcCA8IDAgfHwgZGlmZkJvdHRvbS50b3AgPiAwKSB7XG4gICAgLy8g5by65Yi25ZCR5LiKXG4gICAgaWYgKGFsaWduV2l0aFRvcCA9PT0gdHJ1ZSkge1xuICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZlRvcC50b3ApO1xuICAgIH0gZWxzZSBpZiAoYWxpZ25XaXRoVG9wID09PSBmYWxzZSkge1xuICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZkJvdHRvbS50b3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDoh6rliqjosIPmlbRcbiAgICAgIGlmIChkaWZmVG9wLnRvcCA8IDApIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZlRvcC50b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZkJvdHRvbS50b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIW9ubHlTY3JvbGxJZk5lZWRlZCkge1xuICAgICAgYWxpZ25XaXRoVG9wID0gYWxpZ25XaXRoVG9wID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFhbGlnbldpdGhUb3A7XG4gICAgICBpZiAoYWxpZ25XaXRoVG9wKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZUb3AudG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxsb3dIb3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgaWYgKGRpZmZUb3AubGVmdCA8IDAgfHwgZGlmZkJvdHRvbS5sZWZ0ID4gMCkge1xuICAgICAgLy8g5by65Yi25ZCR5LiKXG4gICAgICBpZiAoYWxpZ25XaXRoTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZUb3AubGVmdCk7XG4gICAgICB9IGVsc2UgaWYgKGFsaWduV2l0aExlZnQgPT09IGZhbHNlKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZkJvdHRvbS5sZWZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOiHquWKqOiwg+aVtFxuICAgICAgICBpZiAoZGlmZlRvcC5sZWZ0IDwgMCkge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZlRvcC5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZCb3R0b20ubGVmdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFvbmx5U2Nyb2xsSWZOZWVkZWQpIHtcbiAgICAgICAgYWxpZ25XaXRoTGVmdCA9IGFsaWduV2l0aExlZnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWFsaWduV2l0aExlZnQ7XG4gICAgICAgIGlmIChhbGlnbldpdGhMZWZ0KSB7XG4gICAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmVG9wLmxlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZkJvdHRvbS5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbEludG9WaWV3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvZG9tLXNjcm9sbC1pbnRvLXZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBSRV9OVU0gPSAvW1xcLStdPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdW1xcLStdP1xcZCt8KS8uc291cmNlO1xuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3ggPSB1bmRlZmluZWQ7XG4gIHZhciB4ID0gdW5kZWZpbmVkO1xuICB2YXIgeSA9IHVuZGVmaW5lZDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7XG5cbiAgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjb21wdXRlZFN0eWxlXykge1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGVfIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKCdeKCcgKyBSRV9OVU0gKyAnKSg/IXB4KVthLXolXSskJywgJ2knKTtcbnZhciBSRV9QT1MgPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgQ1VSUkVOVF9TVFlMRSA9ICdjdXJyZW50U3R5bGUnO1xudmFyIFJVTlRJTUVfU1RZTEUgPSAncnVudGltZVN0eWxlJztcbnZhciBMRUZUID0gJ2xlZnQnO1xudmFyIFBYID0gJ3B4JztcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGVJRShlbGVtLCBuYW1lKSB7XG4gIC8vIGN1cnJlbnRTdHlsZSBtYXliZSBudWxsXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNTIzMS5hc3B4XG4gIHZhciByZXQgPSBlbGVtW0NVUlJFTlRfU1RZTEVdICYmIGVsZW1bQ1VSUkVOVF9TVFlMRV1bbmFtZV07XG5cbiAgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcblxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBwcmV2ZW50IGZsYXNoaW5nIG9mIGNvbnRlbnRcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICBzdHlsZVtMRUZUXSA9IG5hbWUgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IHJldCB8fCAwO1xuICAgIHJldCA9IHN0eWxlLnBpeGVsTGVmdCArIFBYO1xuXG4gICAgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcblxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbnZhciBnZXRDb21wdXRlZFN0eWxlWCA9IHVuZGVmaW5lZDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7XG5cbiAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBqID0gdW5kZWZpbmVkO1xuICB2YXIgaSA9IHVuZGVmaW5lZDtcbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV0gKyAnV2lkdGgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbnZhciBkb21VdGlscyA9IHt9O1xuXG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzWydkb2MnICsgbmFtZV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBuYW1lXSxcbiAgICAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVsnc2Nyb2xsJyArIG5hbWVdLCBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gJ2NsaWVudCcgKyBuYW1lO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTtcbiAgICAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcblxuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXh0cmEpIHtcbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLm9mZnNldFdpZHRoIDogZWxlbS5vZmZzZXRIZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSwgY29tcHV0ZWRTdHlsZSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PSBudWxsIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcbiAgICBpZiAoY3NzQm94VmFsdWUgPT0gbnVsbCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH1cbiAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIHZhciBwYWRkaW5nID0gZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCA/IDAgOiBwYWRkaW5nKTtcbiAgfVxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59O1xuXG4vLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0pIHtcbiAgdmFyIHZhbCA9IHVuZGVmaW5lZDtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG4gIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgKz0gJ3B4JztcbiAgICB9XG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmVhY2goWyd3aWR0aCcsICdoZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGZpcnN0ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIGRvbVV0aWxzWydvdXRlcicgKyBmaXJzdF0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG5cbiAgZG9tVXRpbHNbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgdmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbi8vIOiuvue9riBlbGVtIOebuOWvuSBlbGVtLm93bmVyRG9jdW1lbnQg55qE5Z2Q5qCHXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0KSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuXG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciByZXQgPSB7fTtcbiAgdmFyIGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgZm9yIChrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjdXJyZW50ID0gcGFyc2VGbG9hdChjc3MoZWxlbSwga2V5KSkgfHwgMDtcbiAgICAgIHJldFtrZXldID0gY3VycmVudCArIG9mZnNldFtrZXldIC0gb2xkW2tleV07XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzKHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRPZmZzZXQoZWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgcmV0Lm92ZXJmbG93W2ldID0gb2JqLm92ZXJmbG93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIHNjcm9sbExlZnQ6IGZ1bmN0aW9uIHNjcm9sbExlZnQodywgdikge1xuICAgIGlmIChpc1dpbmRvdyh3KSkge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh2LCBnZXRTY3JvbGxUb3AodykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB3LnNjcm9sbExlZnQ7XG4gICAgICB9XG4gICAgICB3LnNjcm9sbExlZnQgPSB2O1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsVG9wOiBmdW5jdGlvbiBzY3JvbGxUb3Aodywgdikge1xuICAgIGlmIChpc1dpbmRvdyh3KSkge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKGdldFNjcm9sbExlZnQodyksIHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB3LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIHcuc2Nyb2xsVG9wID0gdjtcbiAgICB9XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn0sIGRvbVV0aWxzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vb3AgPSBub29wO1xuZXhwb3J0cy5nZXRLZXlGcm9tQ2hpbGRyZW5JbmRleCA9IGdldEtleUZyb21DaGlsZHJlbkluZGV4O1xuZXhwb3J0cy5sb29wTWVudUl0ZW0gPSBsb29wTWVudUl0ZW07XG5leHBvcnRzLmxvb3BNZW51SXRlbVJlY3VzaXZlbHkgPSBsb29wTWVudUl0ZW1SZWN1c2l2ZWx5O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGdldEtleUZyb21DaGlsZHJlbkluZGV4KGNoaWxkLCBtZW51RXZlbnRLZXksIGluZGV4KSB7XG4gIHZhciBwcmVmaXggPSBtZW51RXZlbnRLZXkgfHwgJyc7XG4gIHJldHVybiBjaGlsZC5rZXkgfHwgcHJlZml4ICsgJ2l0ZW1fJyArIG5vdyArICdfJyArIGluZGV4O1xufVxuXG5mdW5jdGlvbiBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGNiKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIGluZGV4Kys7XG4gICAgaWYgKGMgJiYgYy50eXBlLmlzTWVudUl0ZW1Hcm91cCkge1xuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4uZm9yRWFjaChjLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoYzIpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY2IoYzIsIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYihjLCBpbmRleCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9vcE1lbnVJdGVtUmVjdXNpdmVseShjaGlsZHJlbiwga2V5cywgcmV0KSB7XG4gIGlmICghY2hpbGRyZW4gfHwgcmV0LmZpbmQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICBpZiAocmV0LmZpbmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciBjb25zdHJ1dCA9IGMudHlwZTtcbiAgICAgIGlmICghY29uc3RydXQgfHwgIShjb25zdHJ1dC5pc1N1Yk1lbnUgfHwgY29uc3RydXQuaXNNZW51SXRlbSB8fCBjb25zdHJ1dC5pc01lbnVJdGVtR3JvdXApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXlzLmluZGV4T2YoYy5rZXkpICE9PSAtMSkge1xuICAgICAgICByZXQuZmluZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgbG9vcE1lbnVJdGVtUmVjdXNpdmVseShjLnByb3BzLmNoaWxkcmVuLCBrZXlzLCByZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBET01XcmFwID0gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RPTVdyYXAnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRhZzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGlkZGVuQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aXNpYmxlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnOiAnZGl2J1xuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9ICgwLCBfb2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0pKHt9LCB0aGlzLnByb3BzKTtcbiAgICBpZiAoIXByb3BzLnZpc2libGUpIHtcbiAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSB8fCAnJztcbiAgICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBwcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgfVxuICAgIHZhciBUYWcgPSBwcm9wcy50YWc7XG4gICAgZGVsZXRlIHByb3BzLnRhZztcbiAgICBkZWxldGUgcHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy52aXNpYmxlO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgcHJvcHMpO1xuICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBET01XcmFwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL0RPTVdyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9TdWJQb3B1cE1lbnUgPSByZXF1aXJlKCcuL1N1YlBvcHVwTWVudScpO1xuXG52YXIgX1N1YlBvcHVwTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdWJQb3B1cE1lbnUpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfS2V5Q29kZSA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0tleUNvZGUnKTtcblxudmFyIF9LZXlDb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0tleUNvZGUpO1xuXG52YXIgX2d1aWQgPSByZXF1aXJlKCdyYy11dGlsL2xpYi9ndWlkJyk7XG5cbnZhciBfZ3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ndWlkKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCAqL1xuXG52YXIgU3ViTWVudSA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdWJNZW51JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXJlbnRNZW51OiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aXRsZTogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzZWxlY3RlZEtleXM6IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb3BlbktleXM6IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25DbGljazogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbkNoYW5nZTogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHJvb3RQcmVmaXhDbHM6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtdWx0aXBsZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xvc2VTdWJNZW51T25Nb3VzZUxlYXZlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb3BlblN1Yk1lbnVPbk1vdXNlRW50ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkRlc2VsZWN0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25JdGVtSG92ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlRW50ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlTGVhdmU6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblRpdGxlTW91c2VFbnRlcjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uVGl0bGVNb3VzZUxlYXZlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25UaXRsZUNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL1N1Yk1lbnVTdGF0ZU1peGluJyldLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IF91dGlsLm5vb3AsXG4gICAgICBvbk1vdXNlTGVhdmU6IF91dGlsLm5vb3AsXG4gICAgICBvblRpdGxlTW91c2VFbnRlcjogX3V0aWwubm9vcCxcbiAgICAgIG9uVGl0bGVNb3VzZUxlYXZlOiBfdXRpbC5ub29wLFxuICAgICAgb25UaXRsZUNsaWNrOiBfdXRpbC5ub29wLFxuICAgICAgdGl0bGU6ICcnXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdGhpcy5pc1N1Yk1lbnUgPSAxO1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLm9uRGVzdHJveSkge1xuICAgICAgcHJvcHMub25EZXN0cm95KHByb3BzLmV2ZW50S2V5KTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnBhcmVudE1lbnUuc3ViTWVudUluc3RhbmNlID09PSB0aGlzKSB7XG4gICAgICB0aGlzLmNsZWFyU3ViTWVudVRpbWVycygpO1xuICAgIH1cbiAgfSxcbiAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koa2V5KSB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3koa2V5KTtcbiAgfSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIHZhciBtZW51ID0gdGhpcy5tZW51SW5zdGFuY2U7XG4gICAgdmFyIGlzT3BlbiA9IHRoaXMuaXNPcGVuKCk7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gX0tleUNvZGUyW1wiZGVmYXVsdFwiXS5FTlRFUikge1xuICAgICAgdGhpcy5vblRpdGxlQ2xpY2soZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID09PSBfS2V5Q29kZTJbXCJkZWZhdWx0XCJdLlJJR0hUKSB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIG1lbnUub25LZXlEb3duKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChrZXlDb2RlID09PSBfS2V5Q29kZTJbXCJkZWZhdWx0XCJdLkxFRlQpIHtcbiAgICAgIHZhciBoYW5kbGVkID0gdm9pZCAwO1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBoYW5kbGVkID0gbWVudS5vbktleURvd24oZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKCFoYW5kbGVkKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlck9wZW5DaGFuZ2UoZmFsc2UpO1xuICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYW5kbGVkO1xuICAgIH1cblxuICAgIGlmIChpc09wZW4gJiYgKGtleUNvZGUgPT09IF9LZXlDb2RlMltcImRlZmF1bHRcIl0uVVAgfHwga2V5Q29kZSA9PT0gX0tleUNvZGUyW1wiZGVmYXVsdFwiXS5ET1dOKSkge1xuICAgICAgcmV0dXJuIG1lbnUub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfSxcbiAgb25PcGVuQ2hhbmdlOiBmdW5jdGlvbiBvbk9wZW5DaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKHRoaXMuYWRkS2V5UGF0aChlKSk7XG4gIH0sXG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuY2xlYXJTdWJNZW51TGVhdmVUaW1lcihwcm9wcy5wYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSAhPT0gdGhpcyk7XG4gICAgcHJvcHMub25Nb3VzZUVudGVyKHtcbiAgICAgIGtleTogcHJvcHMuZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICB9LFxuICBvblRpdGxlTW91c2VFbnRlcjogZnVuY3Rpb24gb25UaXRsZU1vdXNlRW50ZXIoZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBhcmVudE1lbnUgPSBwcm9wcy5wYXJlbnRNZW51O1xuICAgIHRoaXMuY2xlYXJTdWJNZW51VGl0bGVMZWF2ZVRpbWVyKHBhcmVudE1lbnUuc3ViTWVudUluc3RhbmNlICE9PSB0aGlzKTtcbiAgICBpZiAocGFyZW50TWVudS5tZW51SXRlbUluc3RhbmNlKSB7XG4gICAgICBwYXJlbnRNZW51Lm1lbnVJdGVtSW5zdGFuY2UuY2xlYXJNZW51SXRlbU1vdXNlTGVhdmVUaW1lcih0cnVlKTtcbiAgICB9XG4gICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgIGl0ZW06IHRoaXMsXG4gICAgICBob3ZlcjogdHJ1ZSxcbiAgICAgIHRyaWdnZXI6ICdtb3VzZWVudGVyJ1xuICAgIH0pO1xuICAgIGlmIChwcm9wcy5vcGVuU3ViTWVudU9uTW91c2VFbnRlcikge1xuICAgICAgdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IGZhbHNlXG4gICAgfSk7XG4gICAgcHJvcHMub25UaXRsZU1vdXNlRW50ZXIoe1xuICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gIH0sXG4gIG9uVGl0bGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBvblRpdGxlTW91c2VMZWF2ZShlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICB2YXIgcGFyZW50TWVudSA9IHByb3BzLnBhcmVudE1lbnU7XG4gICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSB0aGlzO1xuICAgIHBhcmVudE1lbnUuc3ViTWVudVRpdGxlTGVhdmVGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuICAgICAgaWYgKF90aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICAgIC8vIGxlYXZlIHdob2xlIHN1YiB0cmVlXG4gICAgICAgIC8vIHN0aWxsIGFjdGl2ZVxuICAgICAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScgJiYgcHJvcHMuYWN0aXZlKSB7XG4gICAgICAgICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICAgIGl0ZW06IF90aGlzLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ21vdXNlbGVhdmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMub25UaXRsZU1vdXNlTGVhdmUoe1xuICAgICAgICAgIGtleTogcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBwYXJlbnRNZW51LnN1Yk1lbnVUaXRsZUxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KHBhcmVudE1lbnUuc3ViTWVudVRpdGxlTGVhdmVGbiwgMTAwKTtcbiAgfSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIHZhciBwYXJlbnRNZW51ID0gcHJvcHMucGFyZW50TWVudTtcbiAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IHRoaXM7XG4gICAgcGFyZW50TWVudS5zdWJNZW51TGVhdmVGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuICAgICAgaWYgKF90aGlzMi5pc01vdW50ZWQoKSkge1xuICAgICAgICAvLyBsZWF2ZSB3aG9sZSBzdWIgdHJlZVxuICAgICAgICAvLyBzdGlsbCBhY3RpdmVcbiAgICAgICAgaWYgKHByb3BzLm1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmFjdGl2ZSkge1xuICAgICAgICAgICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgICAgICBpdGVtOiBfdGhpczIsXG4gICAgICAgICAgICAgIGhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgdHJpZ2dlcjogJ21vdXNlbGVhdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF90aGlzMi5pc09wZW4oKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZSkge1xuICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlck9wZW5DaGFuZ2UoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0cmlnZ2VyIG1vdXNlbGVhdmVcbiAgICAgICAgcHJvcHMub25Nb3VzZUxlYXZlKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gcHJldmVudCBwb3B1cCBtZW51IGFuZCBzdWJtZW51IGdhcFxuICAgIHBhcmVudE1lbnUuc3ViTWVudUxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KHBhcmVudE1lbnUuc3ViTWVudUxlYXZlRm4sIDEwMCk7XG4gIH0sXG4gIG9uVGl0bGVDbGljazogZnVuY3Rpb24gb25UaXRsZUNsaWNrKGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgcHJvcHMub25UaXRsZUNsaWNrKHtcbiAgICAgIGtleTogcHJvcHMuZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICAgIGlmIChwcm9wcy5vcGVuU3ViTWVudU9uTW91c2VFbnRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJPcGVuQ2hhbmdlKCF0aGlzLmlzT3BlbigpLCAnY2xpY2snKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgb25TdWJNZW51Q2xpY2s6IGZ1bmN0aW9uIG9uU3ViTWVudUNsaWNrKGluZm8pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5hZGRLZXlQYXRoKGluZm8pKTtcbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGluZm8pIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGluZm8pO1xuICB9LFxuICBvbkRlc2VsZWN0OiBmdW5jdGlvbiBvbkRlc2VsZWN0KGluZm8pIHtcbiAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaW5mbyk7XG4gIH0sXG4gIGdldFByZWZpeENsczogZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLXN1Ym1lbnUnO1xuICB9LFxuICBnZXRBY3RpdmVDbGFzc05hbWU6IGZ1bmN0aW9uIGdldEFjdGl2ZUNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctYWN0aXZlJztcbiAgfSxcbiAgZ2V0RGlzYWJsZWRDbGFzc05hbWU6IGZ1bmN0aW9uIGdldERpc2FibGVkQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFByZWZpeENscygpICsgJy1kaXNhYmxlZCc7XG4gIH0sXG4gIGdldFNlbGVjdGVkQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXRTZWxlY3RlZENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctc2VsZWN0ZWQnO1xuICB9LFxuICBnZXRPcGVuQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXRPcGVuQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLXN1Ym1lbnUtb3Blbic7XG4gIH0sXG4gIHNhdmVNZW51SW5zdGFuY2U6IGZ1bmN0aW9uIHNhdmVNZW51SW5zdGFuY2UoYykge1xuICAgIHRoaXMubWVudUluc3RhbmNlID0gYztcbiAgfSxcbiAgYWRkS2V5UGF0aDogZnVuY3Rpb24gYWRkS2V5UGF0aChpbmZvKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpbmZvLCB7XG4gICAgICBrZXlQYXRoOiAoaW5mby5rZXlQYXRoIHx8IFtdKS5jb25jYXQodGhpcy5wcm9wcy5ldmVudEtleSlcbiAgICB9KTtcbiAgfSxcbiAgdHJpZ2dlck9wZW5DaGFuZ2U6IGZ1bmN0aW9uIHRyaWdnZXJPcGVuQ2hhbmdlKG9wZW4sIHR5cGUpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5wcm9wcy5ldmVudEtleTtcbiAgICB0aGlzLm9uT3BlbkNoYW5nZSh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGl0ZW06IHRoaXMsXG4gICAgICB0cmlnZ2VyOiB0eXBlLFxuICAgICAgb3Blbjogb3BlblxuICAgIH0pO1xuICB9LFxuICBjbGVhclN1Yk1lbnVUaW1lcnM6IGZ1bmN0aW9uIGNsZWFyU3ViTWVudVRpbWVycyhjYWxsRm4pIHtcbiAgICB0aGlzLmNsZWFyU3ViTWVudUxlYXZlVGltZXIoY2FsbEZuKTtcbiAgICB0aGlzLmNsZWFyU3ViTWVudVRpdGxlTGVhdmVUaW1lcihjYWxsRm4pO1xuICB9LFxuICBjbGVhclN1Yk1lbnVUaXRsZUxlYXZlVGltZXI6IGZ1bmN0aW9uIGNsZWFyU3ViTWVudVRpdGxlTGVhdmVUaW1lcihjYWxsRm4pIHtcbiAgICB2YXIgcGFyZW50TWVudSA9IHRoaXMucHJvcHMucGFyZW50TWVudTtcbiAgICBpZiAocGFyZW50TWVudS5zdWJNZW51VGl0bGVMZWF2ZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQocGFyZW50TWVudS5zdWJNZW51VGl0bGVMZWF2ZVRpbWVyKTtcbiAgICAgIHBhcmVudE1lbnUuc3ViTWVudVRpdGxlTGVhdmVUaW1lciA9IG51bGw7XG4gICAgICBpZiAoY2FsbEZuICYmIHBhcmVudE1lbnUuc3ViTWVudVRpdGxlTGVhdmVGbikge1xuICAgICAgICBwYXJlbnRNZW51LnN1Yk1lbnVUaXRsZUxlYXZlRm4oKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudE1lbnUuc3ViTWVudVRpdGxlTGVhdmVGbiA9IG51bGw7XG4gICAgfVxuICB9LFxuICBjbGVhclN1Yk1lbnVMZWF2ZVRpbWVyOiBmdW5jdGlvbiBjbGVhclN1Yk1lbnVMZWF2ZVRpbWVyKGNhbGxGbikge1xuICAgIHZhciBwYXJlbnRNZW51ID0gdGhpcy5wcm9wcy5wYXJlbnRNZW51O1xuICAgIGlmIChwYXJlbnRNZW51LnN1Yk1lbnVMZWF2ZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQocGFyZW50TWVudS5zdWJNZW51TGVhdmVUaW1lcik7XG4gICAgICBwYXJlbnRNZW51LnN1Yk1lbnVMZWF2ZVRpbWVyID0gbnVsbDtcbiAgICAgIGlmIChjYWxsRm4gJiYgcGFyZW50TWVudS5zdWJNZW51TGVhdmVGbikge1xuICAgICAgICBwYXJlbnRNZW51LnN1Yk1lbnVMZWF2ZUZuKCk7XG4gICAgICB9XG4gICAgICBwYXJlbnRNZW51LnN1Yk1lbnVMZWF2ZUZuID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGlzQ2hpbGRyZW5TZWxlY3RlZDogZnVuY3Rpb24gaXNDaGlsZHJlblNlbGVjdGVkKCkge1xuICAgIHZhciByZXQgPSB7IGZpbmQ6IGZhbHNlIH07XG4gICAgKDAsIF91dGlsLmxvb3BNZW51SXRlbVJlY3VzaXZlbHkpKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMuc2VsZWN0ZWRLZXlzLCByZXQpO1xuICAgIHJldHVybiByZXQuZmluZDtcbiAgfSxcbiAgaXNPcGVuOiBmdW5jdGlvbiBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3BlbktleXMuaW5kZXhPZih0aGlzLnByb3BzLmV2ZW50S2V5KSAhPT0gLTE7XG4gIH0sXG4gIHJlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGJhc2VQcm9wcyA9IHtcbiAgICAgIG1vZGU6IHByb3BzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiBwcm9wcy5tb2RlLFxuICAgICAgdmlzaWJsZTogdGhpcy5pc09wZW4oKSxcbiAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCArIDEsXG4gICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgIGZvY3VzYWJsZTogZmFsc2UsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uU3ViTWVudUNsaWNrLFxuICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICBvbkRlc3Ryb3k6IHRoaXMub25EZXN0cm95LFxuICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICBldmVudEtleTogcHJvcHMuZXZlbnRLZXkgKyAnLW1lbnUtJyxcbiAgICAgIG9wZW5LZXlzOiBwcm9wcy5vcGVuS2V5cyxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogcHJvcHMub3BlblRyYW5zaXRpb25OYW1lLFxuICAgICAgb3BlbkFuaW1hdGlvbjogcHJvcHMub3BlbkFuaW1hdGlvbixcbiAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBjbG9zZVN1Yk1lbnVPbk1vdXNlTGVhdmU6IHByb3BzLmNsb3NlU3ViTWVudU9uTW91c2VMZWF2ZSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogdGhpcy5zdGF0ZS5kZWZhdWx0QWN0aXZlRmlyc3QsXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICBwcmVmaXhDbHM6IHByb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICBpZDogdGhpcy5fbWVudUlkLFxuICAgICAgcmVmOiB0aGlzLnNhdmVNZW51SW5zdGFuY2VcbiAgICB9O1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1N1YlBvcHVwTWVudTJbXCJkZWZhdWx0XCJdLFxuICAgICAgYmFzZVByb3BzLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB2YXIgaXNPcGVuID0gdGhpcy5pc09wZW4oKTtcbiAgICB0aGlzLmhhdmVPcGVuID0gdGhpcy5oYXZlT3BlbiB8fCBpc09wZW47XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5nZXRQcmVmaXhDbHMoKTtcbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHByb3BzLmNsYXNzTmFtZSwgISFwcm9wcy5jbGFzc05hbWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHByZWZpeENscyArICctJyArIHByb3BzLm1vZGUsIDEpLCBfY2xhc3Nlcyk7XG5cbiAgICBjbGFzc2VzW3RoaXMuZ2V0T3BlbkNsYXNzTmFtZSgpXSA9IGlzT3BlbjtcbiAgICBjbGFzc2VzW3RoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lKCldID0gcHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXNbdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSgpXSA9IHByb3BzLmRpc2FibGVkO1xuICAgIGNsYXNzZXNbdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSgpXSA9IHRoaXMuaXNDaGlsZHJlblNlbGVjdGVkKCk7XG5cbiAgICB0aGlzLl9tZW51SWQgPSB0aGlzLl9tZW51SWQgfHwgKDAsIF9ndWlkMltcImRlZmF1bHRcIl0pKCk7XG4gICAgY2xhc3Nlc1twcmVmaXhDbHNdID0gdHJ1ZTtcbiAgICBjbGFzc2VzW3ByZWZpeENscyArICctJyArIHByb3BzLm1vZGVdID0gMTtcbiAgICB2YXIgdGl0bGVDbGlja0V2ZW50cyA9IHt9O1xuICAgIHZhciBtb3VzZUV2ZW50cyA9IHt9O1xuICAgIHZhciB0aXRsZU1vdXNlRXZlbnRzID0ge307XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGl0bGVDbGlja0V2ZW50cyA9IHtcbiAgICAgICAgb25DbGljazogdGhpcy5vblRpdGxlQ2xpY2tcbiAgICAgIH07XG4gICAgICBtb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgfTtcbiAgICAgIC8vIG9ubHkgd29ya3MgaW4gdGl0bGUsIG5vdCBvdXRlciBsaVxuICAgICAgdGl0bGVNb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uVGl0bGVNb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25UaXRsZU1vdXNlTGVhdmVcbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIGlmIChwcm9wcy5tb2RlID09PSAnaW5saW5lJykge1xuICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc2VzKSB9LCBtb3VzZUV2ZW50cyksXG4gICAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctdGl0bGUnXG4gICAgICAgIH0sIHRpdGxlTW91c2VFdmVudHMsIHRpdGxlQ2xpY2tFdmVudHMsIHtcbiAgICAgICAgICAnYXJpYS1vcGVuJzogaXNPcGVuLFxuICAgICAgICAgICdhcmlhLW93bnMnOiB0aGlzLl9tZW51SWQsXG4gICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSdcbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLnRpdGxlXG4gICAgICApLFxuICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihwcm9wcy5jaGlsZHJlbilcbiAgICApO1xuICB9XG59KTtcblxuU3ViTWVudS5pc1N1Yk1lbnUgPSAxO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN1Yk1lbnU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtbWVudS9saWIvU3ViTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX01lbnVNaXhpbiA9IHJlcXVpcmUoJy4vTWVudU1peGluJyk7XG5cbnZhciBfTWVudU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVNaXhpbik7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX3JjQW5pbWF0ZSA9IHJlcXVpcmUoJ3JjLWFuaW1hdGUnKTtcblxudmFyIF9yY0FuaW1hdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmNBbmltYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBTdWJQb3B1cE1lbnUgPSBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3ViUG9wdXBNZW51JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xpY2s6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PcGVuQ2hhbmdlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlblRyYW5zaXRpb25OYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcGVuQW5pbWF0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XSksXG4gICAgb3BlbktleXM6IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyksXG4gICAgY2xvc2VTdWJNZW51T25Nb3VzZUxlYXZlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdmlzaWJsZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIG1peGluczogW19NZW51TWl4aW4yW1wiZGVmYXVsdFwiXV0sXG5cbiAgb25EZXNlbGVjdDogZnVuY3Rpb24gb25EZXNlbGVjdChzZWxlY3RJbmZvKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KHNlbGVjdEluZm8pO1xuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3Qoc2VsZWN0SW5mbykge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0SW5mbyk7XG4gIH0sXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgfSxcbiAgb25PcGVuQ2hhbmdlOiBmdW5jdGlvbiBvbk9wZW5DaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKGUpO1xuICB9LFxuICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveShrZXkpIHtcbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICB9LFxuICBvbkl0ZW1Ib3ZlcjogZnVuY3Rpb24gb25JdGVtSG92ZXIoZSkge1xuICAgIHRoaXMub25Db21tb25JdGVtSG92ZXIoZSk7XG4gIH0sXG4gIGdldE9wZW5UcmFuc2l0aW9uTmFtZTogZnVuY3Rpb24gZ2V0T3BlblRyYW5zaXRpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wZW5UcmFuc2l0aW9uTmFtZTtcbiAgfSxcbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGMsIGksIHN1YkluZGV4KSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgIG9wZW5LZXlzOiBwcm9wcy5vcGVuS2V5cyxcbiAgICAgIHNlbGVjdGVkS2V5czogcHJvcHMuc2VsZWN0ZWRLZXlzLFxuICAgICAgb3BlblN1Yk1lbnVPbk1vdXNlRW50ZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtKGMsIGksIHN1YkluZGV4LCBleHRyYVByb3BzKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlbmRlckZpcnN0ID0gdGhpcy5yZW5kZXJGaXJzdDtcbiAgICB0aGlzLnJlbmRlckZpcnN0ID0gMTtcbiAgICB0aGlzLmhhdmVPcGVuZWQgPSB0aGlzLmhhdmVPcGVuZWQgfHwgdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIGlmICghdGhpcy5oYXZlT3BlbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHRyYW5zaXRpb25BcHBlYXIgPSB0cnVlO1xuICAgIGlmICghcmVuZGVyRmlyc3QgJiYgdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICB0cmFuc2l0aW9uQXBwZWFyID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwcm9wcyA9ICgwLCBfb2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0pKHt9LCB0aGlzLnByb3BzKTtcbiAgICBwcm9wcy5jbGFzc05hbWUgKz0gJyAnICsgcHJvcHMucHJlZml4Q2xzICsgJy1zdWInO1xuICAgIHZhciBhbmltUHJvcHMgPSB7fTtcbiAgICBpZiAocHJvcHMub3BlblRyYW5zaXRpb25OYW1lKSB7XG4gICAgICBhbmltUHJvcHMudHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5vcGVuVHJhbnNpdGlvbk5hbWU7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHByb3BzLm9wZW5BbmltYXRpb24pID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5pbVByb3BzLmFuaW1hdGlvbiA9ICgwLCBfb2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcy5vcGVuQW5pbWF0aW9uKTtcbiAgICAgIGlmICghdHJhbnNpdGlvbkFwcGVhcikge1xuICAgICAgICBkZWxldGUgYW5pbVByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX3JjQW5pbWF0ZTJbXCJkZWZhdWx0XCJdLFxuICAgICAgX2V4dGVuZHMoe30sIGFuaW1Qcm9wcywge1xuICAgICAgICBzaG93UHJvcDogJ3Zpc2libGUnLFxuICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICB9KSxcbiAgICAgIHRoaXMucmVuZGVyUm9vdChwcm9wcylcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdWJQb3B1cE1lbnU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtbWVudS9saWIvU3ViUG9wdXBNZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBleHBvcnQgdGhpcyBwYWNrYWdlJ3MgYXBpXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9BbmltYXRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLWFuaW1hdGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9DaGlsZHJlblV0aWxzID0gcmVxdWlyZSgnLi9DaGlsZHJlblV0aWxzJyk7XG5cbnZhciBfQW5pbWF0ZUNoaWxkID0gcmVxdWlyZSgnLi9BbmltYXRlQ2hpbGQnKTtcblxudmFyIF9BbmltYXRlQ2hpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQW5pbWF0ZUNoaWxkKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBfdXRpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsKTtcblxudmFyIGRlZmF1bHRLZXkgPSAncmNfYW5pbWF0ZV8nICsgRGF0ZS5ub3coKTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgaWYgKCFjaGlsZHJlbi5rZXkpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGtleTogZGVmYXVsdEtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBBbmltYXRlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBbmltYXRlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb21wb25lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QsXG4gICAgdHJhbnNpdGlvbk5hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRyYW5zaXRpb25FbnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRyYW5zaXRpb25BcHBlYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleGNsdXNpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0cmFuc2l0aW9uTGVhdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uRW50ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxlYXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25BcHBlYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93UHJvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB7fSxcbiAgICAgIGNvbXBvbmVudDogJ3NwYW4nLFxuICAgICAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICAgICAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlLFxuICAgICAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gICAgICBvbkVuZDogbm9vcCxcbiAgICAgIG9uRW50ZXI6IG5vb3AsXG4gICAgICBvbkxlYXZlOiBub29wLFxuICAgICAgb25BcHBlYXI6IG5vb3BcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHt9O1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkcmVuVXRpbHMudG9BcnJheUNoaWxkcmVuKShnZXRDaGlsZHJlbkZyb21Qcm9wcyh0aGlzLnByb3BzKSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiAhIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgX3RoaXMucGVyZm9ybUFwcGVhcihjaGlsZC5rZXkpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLm5leHRQcm9wcyA9IG5leHRQcm9wcztcbiAgICB2YXIgbmV4dENoaWxkcmVuID0gKDAsIF9DaGlsZHJlblV0aWxzLnRvQXJyYXlDaGlsZHJlbikoZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMobmV4dFByb3BzKSk7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAvLyBleGNsdXNpdmUgbmVlZHMgaW1tZWRpYXRlIHJlc3BvbnNlXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMyLnN0b3Aoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgc2hvd1Byb3AgPSBwcm9wcy5zaG93UHJvcDtcbiAgICB2YXIgY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cztcbiAgICAvLyBsYXN0IHByb3BzIGNoaWxkcmVuIGlmIGV4Y2x1c2l2ZVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSBwcm9wcy5leGNsdXNpdmUgPyAoMCwgX0NoaWxkcmVuVXRpbHMudG9BcnJheUNoaWxkcmVuKShnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpIDogdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAvLyBpbiBjYXNlIGRlc3Ryb3kgaW4gc2hvd1Byb3AgbW9kZVxuICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgY3VycmVudENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gKDAsIF9DaGlsZHJlblV0aWxzLmZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSkobmV4dENoaWxkcmVuLCBjdXJyZW50Q2hpbGQua2V5KTtcbiAgICAgICAgdmFyIG5ld0NoaWxkID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoKCFuZXh0Q2hpbGQgfHwgIW5leHRDaGlsZC5wcm9wc1tzaG93UHJvcF0pICYmIGN1cnJlbnRDaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICBuZXdDaGlsZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQobmV4dENoaWxkIHx8IGN1cnJlbnRDaGlsZCwgX2RlZmluZVByb3BlcnR5KHt9LCBzaG93UHJvcCwgdHJ1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkID0gbmV4dENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXh0Q2hpbGQpIHtcbiAgICAgICAgaWYgKCEoMCwgX0NoaWxkcmVuVXRpbHMuZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KShjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRyZW4gPSAoMCwgX0NoaWxkcmVuVXRpbHMubWVyZ2VDaGlsZHJlbikoY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pO1xuICAgIH1cblxuICAgIC8vIG5lZWQgcmVuZGVyIHRvIGF2b2lkIHVwZGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBrZXkgPSBjaGlsZC5rZXk7XG4gICAgICBpZiAoY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNQcmV2ID0gKDAsIF9DaGlsZHJlblV0aWxzLmZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIHZhciBzaG93SW5OZXh0ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICBpZiAoaGFzUHJldikge1xuICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSAoMCwgX0NoaWxkcmVuVXRpbHMuZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkpKGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgaWYgKCFzaG93SW5Ob3cgJiYgc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgX3RoaXMyLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTmV4dCkge1xuICAgICAgICAgIF90aGlzMi5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWhhc1ByZXYpIHtcbiAgICAgICAgX3RoaXMyLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGtleSA9IGNoaWxkLmtleTtcbiAgICAgIGlmIChjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGhhc05leHQgPSAoMCwgX0NoaWxkcmVuVXRpbHMuZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KShuZXh0Q2hpbGRyZW4sIGtleSk7XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgdmFyIHNob3dJbk5vdyA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9ICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSkobmV4dENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICBpZiAoIXNob3dJbk5leHQgJiYgc2hvd0luTm93KSB7XG4gICAgICAgICAgICBfdGhpczIua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaG93SW5Ob3cpIHtcbiAgICAgICAgICBfdGhpczIua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFoYXNOZXh0KSB7XG4gICAgICAgIF90aGlzMi5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICBrZXlzVG9FbnRlci5mb3JFYWNoKHRoaXMucGVyZm9ybUVudGVyKTtcbiAgICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKHRoaXMucGVyZm9ybUxlYXZlKTtcbiAgICB9XG4gIH0sXG5cbiAgcGVyZm9ybUVudGVyOiBmdW5jdGlvbiBwZXJmb3JtRW50ZXIoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmICh0aGlzLnJlZnNba2V5XSkge1xuICAgICAgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgdGhpcy5yZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKHRoaXMuaGFuZGxlRG9uZUFkZGluZy5iaW5kKHRoaXMsIGtleSwgJ2VudGVyJykpO1xuICAgIH1cbiAgfSxcblxuICBwZXJmb3JtQXBwZWFyOiBmdW5jdGlvbiBwZXJmb3JtQXBwZWFyKGtleSkge1xuICAgIGlmICh0aGlzLnJlZnNba2V5XSkge1xuICAgICAgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgdGhpcy5yZWZzW2tleV0uY29tcG9uZW50V2lsbEFwcGVhcih0aGlzLmhhbmRsZURvbmVBZGRpbmcuYmluZCh0aGlzLCBrZXksICdhcHBlYXInKSk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZURvbmVBZGRpbmc6IGZ1bmN0aW9uIGhhbmRsZURvbmVBZGRpbmcoa2V5LCB0eXBlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gdGhpcy5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9ICgwLCBfQ2hpbGRyZW5VdGlscy50b0FycmF5Q2hpbGRyZW4pKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgLy8gZXhjbHVzaXZlIHdpbGwgbm90IG5lZWQgdGhpc1xuICAgICAgdGhpcy5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUgPT09ICdhcHBlYXInKSB7XG4gICAgICAgIGlmIChfdXRpbDJbJ2RlZmF1bHQnXS5hbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uQXBwZWFyKGtleSk7XG4gICAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF91dGlsMlsnZGVmYXVsdCddLmFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgICBwcm9wcy5vbkVudGVyKGtleSk7XG4gICAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwZXJmb3JtTGVhdmU6IGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZShrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKHRoaXMucmVmc1trZXldKSB7XG4gICAgICB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICB0aGlzLnJlZnNba2V5XS5jb21wb25lbnRXaWxsTGVhdmUodGhpcy5oYW5kbGVEb25lTGVhdmluZy5iaW5kKHRoaXMsIGtleSkpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEb25lTGVhdmluZzogZnVuY3Rpb24gaGFuZGxlRG9uZUxlYXZpbmcoa2V5KSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gdGhpcy5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9ICgwLCBfQ2hpbGRyZW5VdGlscy50b0FycmF5Q2hpbGRyZW4pKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgLy8gaW4gY2FzZSBzdGF0ZSBjaGFuZ2UgaXMgdG9vIGZhc3RcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIHRoaXMucGVyZm9ybUVudGVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzTW91bnRlZCgpICYmICEoMCwgX0NoaWxkcmVuVXRpbHMuaXNTYW1lQ2hpbGRyZW4pKHRoaXMuc3RhdGUuY2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgcHJvcHMuc2hvd1Byb3ApKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRyZW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3V0aWwyWydkZWZhdWx0J10uYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICBwcm9wcy5vbkxlYXZlKGtleSk7XG4gICAgICAgIHByb3BzLm9uRW5kKGtleSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpc1ZhbGlkQ2hpbGRCeUtleTogZnVuY3Rpb24gaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpIHtcbiAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgcmV0dXJuICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkpKGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbiBzdG9wKGtleSkge1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2tleV07XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnN0b3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLm5leHRQcm9wcyA9IHByb3BzO1xuICAgIHZhciBzdGF0ZUNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgIGlmIChzdGF0ZUNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbiA9IHN0YXRlQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZC5rZXkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc2V0IGtleSBmb3IgPHJjLWFuaW1hdGU+IGNoaWxkcmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9BbmltYXRlQ2hpbGQyWydkZWZhdWx0J10sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICByZWY6IGNoaWxkLmtleSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBwcm9wcy50cmFuc2l0aW9uRW50ZXIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfSxcbiAgICAgICAgICBjaGlsZFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW5bMF0gfHwgbnVsbDtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFuaW1hdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtYW5pbWF0ZS9saWIvQW5pbWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudG9BcnJheUNoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuO1xuZXhwb3J0cy5maW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkgPSBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXk7XG5leHBvcnRzLmZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXk7XG5leHBvcnRzLmZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleSA9IGZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleTtcbmV4cG9ydHMuaXNTYW1lQ2hpbGRyZW4gPSBpc1NhbWVDaGlsZHJlbjtcbmV4cG9ydHMubWVyZ2VDaGlsZHJlbiA9IG1lcmdlQ2hpbGRyZW47XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiB0b0FycmF5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0LnB1c2goY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgcmV0ID0gbnVsbDtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5rZXkgPT09IGtleSAmJiBjaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndHdvIGNoaWxkIHdpdGggc2FtZSBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgZm91bmQgPSAwO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvdW5kID0gY2hpbGQua2V5ID09PSBrZXkgJiYgIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvd1Byb3AgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdICE9PSBjaGlsZDIucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2FtZTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihwcmV2LCBuZXh0KSB7XG4gIHZhciByZXQgPSBbXTtcblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fTtcbiAgdmFyIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICBwcmV2LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0LCBjaGlsZC5rZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG4gICAgICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKG5leHRDaGlsZHJlblBlbmRpbmcuaGFzT3duUHJvcGVydHkoY2hpbGQua2V5KSkge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdChuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0pO1xuICAgIH1cbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldCA9IHJldC5jb25jYXQocGVuZGluZ0NoaWxkcmVuKTtcblxuICByZXR1cm4gcmV0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yYy1hbmltYXRlL2xpYi9DaGlsZHJlblV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9jc3NBbmltYXRpb24gPSByZXF1aXJlKCdjc3MtYW5pbWF0aW9uJyk7XG5cbnZhciBfY3NzQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FuaW1hdGlvbik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgX3V0aWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbCk7XG5cbnZhciB0cmFuc2l0aW9uTWFwID0ge1xuICBlbnRlcjogJ3RyYW5zaXRpb25FbnRlcicsXG4gIGFwcGVhcjogJ3RyYW5zaXRpb25BcHBlYXInLFxuICBsZWF2ZTogJ3RyYW5zaXRpb25MZWF2ZSdcbn07XG5cbnZhciBBbmltYXRlQ2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FuaW1hdGVDaGlsZCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2hpbGRyZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxFbnRlcjogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcbiAgICBpZiAoX3V0aWwyWydkZWZhdWx0J10uaXNFbnRlclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxBcHBlYXI6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxBcHBlYXIoZG9uZSkge1xuICAgIGlmIChfdXRpbDJbJ2RlZmF1bHQnXS5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTGVhdmU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgaWYgKF91dGlsMlsnZGVmYXVsdCddLmlzTGVhdmVTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcblxuICB0cmFuc2l0aW9uOiBmdW5jdGlvbiB0cmFuc2l0aW9uKGFuaW1hdGlvblR5cGUsIGZpbmlzaENhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIF90aGlzLnN0b3BwZXIgPSBudWxsO1xuICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGlmICgoX2Nzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB8fCAhcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKSAmJiB0cmFuc2l0aW9uTmFtZSAmJiBwcm9wc1t0cmFuc2l0aW9uTWFwW2FuaW1hdGlvblR5cGVdXSkge1xuICAgICAgdGhpcy5zdG9wcGVyID0gKDAsIF9jc3NBbmltYXRpb24yWydkZWZhdWx0J10pKG5vZGUsIHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZSwgZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wcGVyID0gcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKG5vZGUsIGVuZCk7XG4gICAgfVxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIHN0b3BwZXIgPSB0aGlzLnN0b3BwZXI7XG4gICAgaWYgKHN0b3BwZXIpIHtcbiAgICAgIHRoaXMuc3RvcHBlciA9IG51bGw7XG4gICAgICBzdG9wcGVyLnN0b3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBbmltYXRlQ2hpbGQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtYW5pbWF0ZS9saWIvQW5pbWF0ZUNoaWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9FdmVudCA9IHJlcXVpcmUoJy4vRXZlbnQnKTtcblxudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudCk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlcyA9IHJlcXVpcmUoJ2NvbXBvbmVudC1jbGFzc2VzJyk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRDbGFzc2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IF9FdmVudDJbXCJkZWZhdWx0XCJdLmVuZEV2ZW50cy5sZW5ndGggIT09IDA7XG5cblxudmFyIGNhcGl0YWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJyxcbi8vIG1zIGlzIHNwZWNpYWwgLi4uLiAhXG4nbXMnXTtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gKDAsIF9jb21wb25lbnRDbGFzc2VzMltcImRlZmF1bHRcIl0pKG5vZGUpO1xuXG4gIGlmIChlbmRDYWxsYmFjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW5kQ2FsbGJhY2spID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGVuZCA9IGVuZENhbGxiYWNrLmVuZDtcbiAgICBzdGFydCA9IGVuZENhbGxiYWNrLnN0YXJ0O1xuICAgIGFjdGl2ZSA9IGVuZENhbGxiYWNrLmFjdGl2ZTtcbiAgfVxuXG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShjbGFzc05hbWUpO1xuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgX0V2ZW50MltcImRlZmF1bHRcIl0ucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDJbXCJkZWZhdWx0XCJdLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBfRXZlbnQyW1wiZGVmYXVsdFwiXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgX0V2ZW50MltcImRlZmF1bHRcIl0uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3NzQW5pbWF0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1hbmltYXRpb24vbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtYW5pbWF0aW9uL2xpYi9FdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnRyeSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbn0gY2F0Y2ggKGVycikge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdjb21wb25lbnQtaW5kZXhvZicpO1xufVxuXG4vKipcbiAqIFdoaXRlc3BhY2UgcmVnZXhwLlxuICovXG5cbnZhciByZSA9IC9cXHMrLztcblxuLyoqXG4gKiB0b1N0cmluZyByZWZlcmVuY2UuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXcmFwIGBlbGAgaW4gYSBgQ2xhc3NMaXN0YC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpe1xuICByZXR1cm4gbmV3IENsYXNzTGlzdChlbCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgQ2xhc3NMaXN0IGZvciBgZWxgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIENsYXNzTGlzdChlbCkge1xuICBpZiAoIWVsIHx8ICFlbC5ub2RlVHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBET00gZWxlbWVudCByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMubGlzdCA9IGVsLmNsYXNzTGlzdDtcbn1cblxuLyoqXG4gKiBBZGQgY2xhc3MgYG5hbWVgIGlmIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihuYW1lKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QuYWRkKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAoIX5pKSBhcnIucHVzaChuYW1lKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIGBuYW1lYCB3aGVuIHByZXNlbnQsIG9yXG4gKiBwYXNzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlbW92ZVxuICogYW55IHdoaWNoIG1hdGNoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuICBpZiAoJ1tvYmplY3QgUmVnRXhwXScgPT0gdG9TdHJpbmcuY2FsbChuYW1lKSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZU1hdGNoaW5nKG5hbWUpO1xuICB9XG5cbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QucmVtb3ZlKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAofmkpIGFyci5zcGxpY2UoaSwgMSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgY2xhc3NlcyBtYXRjaGluZyBgcmVgLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmVNYXRjaGluZyA9IGZ1bmN0aW9uKHJlKXtcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmUudGVzdChhcnJbaV0pKSB7XG4gICAgICB0aGlzLnJlbW92ZShhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlIGNsYXNzIGBuYW1lYCwgY2FuIGZvcmNlIHN0YXRlIHZpYSBgZm9yY2VgLlxuICpcbiAqIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgY2xhc3NMaXN0LCBidXQgZG8gbm90IHN1cHBvcnQgYGZvcmNlYCB5ZXQsXG4gKiB0aGUgbWlzdGFrZSB3aWxsIGJlIGRldGVjdGVkIGFuZCBjb3JyZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2VcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihuYW1lLCBmb3JjZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgICAgaWYgKGZvcmNlICE9PSB0aGlzLmxpc3QudG9nZ2xlKG5hbWUsIGZvcmNlKSkge1xuICAgICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpOyAvLyB0b2dnbGUgYWdhaW4gdG8gY29ycmVjdFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgY2xhc3Nlcy5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBjbGFzc05hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcbiAgdmFyIHN0ciA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBhcnIgPSBzdHIuc3BsaXQocmUpO1xuICBpZiAoJycgPT09IGFyclswXSkgYXJyLnNoaWZ0KCk7XG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGNsYXNzIGBuYW1lYCBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuaGFzID1cbkNsYXNzTGlzdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHRoaXMubGlzdFxuICAgID8gdGhpcy5saXN0LmNvbnRhaW5zKG5hbWUpXG4gICAgOiAhISB+aW5kZXgodGhpcy5hcnJheSgpLCBuYW1lKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcG9uZW50LWluZGV4b2YvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHV0aWwgPSB7XG4gIGlzQXBwZWFyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0FwcGVhclN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGlzRW50ZXJTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRW50ZXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgaXNMZWF2ZVN1cHBvcnRlZDogZnVuY3Rpb24gaXNMZWF2ZVN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfHwgcHJvcHMuYW5pbWF0aW9uLmxlYXZlO1xuICB9LFxuXG4gIGFsbG93QXBwZWFyQ2FsbGJhY2s6IGZ1bmN0aW9uIGFsbG93QXBwZWFyQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBhbGxvd0VudGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIGFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uRW50ZXIgfHwgcHJvcHMuYW5pbWF0aW9uLmVudGVyO1xuICB9LFxuICBhbGxvd0xlYXZlQ2FsbGJhY2s6IGZ1bmN0aW9uIGFsbG93TGVhdmVDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfHwgcHJvcHMuYW5pbWF0aW9uLmxlYXZlO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB1dGlsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtYW5pbWF0ZS9saWIvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWVkID0gMDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ3VpZCgpIHtcbiAgcmV0dXJuIERhdGUubm93KCkgKyBcIl9cIiArIHNlZWQrKztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLXV0aWwvbGliL2d1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9LZXlDb2RlID0gcmVxdWlyZSgncmMtdXRpbC9saWIvS2V5Q29kZScpO1xuXG52YXIgX0tleUNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfS2V5Q29kZSk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyJyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRFdmVudExpc3RlbmVyKTtcblxudmFyIF9jb250YWlucyA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0RvbS9jb250YWlucycpO1xuXG52YXIgX2NvbnRhaW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5zKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgfSxcbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gJ2lubGluZScpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IF9LZXlDb2RlMltcImRlZmF1bHRcIl0uRVNDKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSXRlbUhvdmVyKHtcbiAgICAgICAga2V5OiB0aGlzLnByb3BzLmV2ZW50S2V5LFxuICAgICAgICBpdGVtOiB0aGlzLFxuICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlRG9jdW1lbnRDbGljazogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgLy8gSWYgdGhlIGNsaWNrIG9yaWdpbmF0ZWQgZnJvbSB3aXRoaW4gdGhpcyBjb21wb25lbnRcbiAgICAvLyBkb24ndCBkbyBhbnl0aGluZy5cbiAgICBpZiAoKDAsIF9jb250YWluczJbXCJkZWZhdWx0XCJdKShfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKSwgZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgaXRlbTogdGhpcyxcbiAgICAgIGtleTogdGhpcy5wcm9wcy5ldmVudEtleVxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlck9wZW5DaGFuZ2UoZmFsc2UpO1xuICB9LFxuICBiaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICBpZiAoIXRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjJbXCJkZWZhdWx0XCJdKShkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMltcImRlZmF1bHRcIl0pKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICAgIH1cbiAgfSxcbiAgdW5iaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtbWVudS9saWIvU3ViTWVudVN0YXRlTWl4aW4uanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gX3JlYWN0RG9tMltcImRlZmF1bHRcIl0udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuICByZXR1cm4gKDAsIF9hZGREb21FdmVudExpc3RlbmVyMltcImRlZmF1bHRcIl0pKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYWRkRXZlbnRMaXN0ZW5lcjtcblxudmFyIF9FdmVudE9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRPYmplY3QnKTtcblxudmFyIF9FdmVudE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudE9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soZSkge1xuICAgIHZhciBuZSA9IG5ldyBfRXZlbnRPYmplY3QyW1wiZGVmYXVsdFwiXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHZvaWQgMDtcbiAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB2b2lkIDA7XG4gICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICB2YXIgYm9keSA9IHZvaWQgMDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbXCJkZWZhdWx0XCJdLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB2b2lkIDA7XG4gIHZhciBsID0gdm9pZCAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MltcImRlZmF1bHRcIl0ucHJvdG90eXBlO1xuXG4oMCwgX29iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHN0b3BQcm9wYWdhdGlvbiBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgY2FuY2VsQnViYmxlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBUUlVFIChJRSlcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gVFJVRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAaWdub3JlXG4gKiBiYXNlIGV2ZW50IG9iamVjdCBmb3IgY3VzdG9tIGFuZCBkb20gZXZlbnQuXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcbiAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG4gICAgLy8gZml4ZWQgMS4yXG4gICAgLy8gY2FsbCBzdG9wUHJvcGFnYXRpb24gaW1wbGljaXRseVxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLXV0aWwvbGliL0RvbS9jb250YWlucy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfS2V5Q29kZSA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0tleUNvZGUnKTtcblxudmFyIF9LZXlDb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0tleUNvZGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKiBlc2xpbnQgcmVhY3Qvbm8taXMtbW91bnRlZDowICovXG5cbnZhciBNZW51SXRlbSA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51SXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcm9vdFByZWZpeENsczogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXZlbnRLZXk6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzZWxlY3RlZEtleXM6IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHBhcmVudE1lbnU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uSXRlbUhvdmVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUVudGVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUxlYXZlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25TZWxlY3Q6IF91dGlsLm5vb3AsXG4gICAgICBvbk1vdXNlRW50ZXI6IF91dGlsLm5vb3AsXG4gICAgICBvbk1vdXNlTGVhdmU6IF91dGlsLm5vb3BcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMub25EZXN0cm95KSB7XG4gICAgICBwcm9wcy5vbkRlc3Ryb3kocHJvcHMuZXZlbnRLZXkpO1xuICAgIH1cbiAgICBpZiAocHJvcHMucGFyZW50TWVudS5tZW51SXRlbUluc3RhbmNlID09PSB0aGlzKSB7XG4gICAgICB0aGlzLmNsZWFyTWVudUl0ZW1Nb3VzZUxlYXZlVGltZXIoKTtcbiAgICB9XG4gIH0sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICBpZiAoa2V5Q29kZSA9PT0gX0tleUNvZGUyW1wiZGVmYXVsdFwiXS5FTlRFUikge1xuICAgICAgdGhpcy5vbkNsaWNrKGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGV2ZW50S2V5ID0gcHJvcHMuZXZlbnRLZXk7XG4gICAgdmFyIHBhcmVudE1lbnUgPSBwcm9wcy5wYXJlbnRNZW51O1xuICAgIHBhcmVudE1lbnUubWVudUl0ZW1JbnN0YW5jZSA9IHRoaXM7XG4gICAgcGFyZW50TWVudS5tZW51SXRlbU1vdXNlTGVhdmVGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5pc01vdW50ZWQoKSAmJiBwcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgaXRlbTogX3RoaXMsXG4gICAgICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgICAgIHRyaWdnZXI6ICdtb3VzZWxlYXZlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHBhcmVudE1lbnUubWVudUl0ZW1Nb3VzZUxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KHBhcmVudE1lbnUubWVudUl0ZW1Nb3VzZUxlYXZlRm4sIDMwKTtcbiAgICBwcm9wcy5vbk1vdXNlTGVhdmUoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gIH0sXG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwYXJlbnRNZW51ID0gcHJvcHMucGFyZW50TWVudTtcbiAgICB0aGlzLmNsZWFyTWVudUl0ZW1Nb3VzZUxlYXZlVGltZXIocGFyZW50TWVudS5tZW51SXRlbUluc3RhbmNlICE9PSB0aGlzKTtcbiAgICBpZiAocGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UpIHtcbiAgICAgIHBhcmVudE1lbnUuc3ViTWVudUluc3RhbmNlLmNsZWFyU3ViTWVudVRpbWVycyh0cnVlKTtcbiAgICB9XG4gICAgdmFyIGV2ZW50S2V5ID0gcHJvcHMuZXZlbnRLZXk7XG4gICAgcHJvcHMub25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGl0ZW06IHRoaXMsXG4gICAgICBob3ZlcjogdHJ1ZSxcbiAgICAgIHRyaWdnZXI6ICdtb3VzZWVudGVyJ1xuICAgIH0pO1xuICAgIHByb3BzLm9uTW91c2VFbnRlcih7XG4gICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgZG9tRXZlbnQ6IGVcbiAgICB9KTtcbiAgfSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoKTtcbiAgICB2YXIgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcbiAgICB2YXIgaW5mbyA9IHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBrZXlQYXRoOiBbZXZlbnRLZXldLFxuICAgICAgaXRlbTogdGhpcyxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfTtcbiAgICBwcm9wcy5vbkNsaWNrKGluZm8pO1xuICAgIGlmIChwcm9wcy5tdWx0aXBsZSkge1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHByb3BzLm9uRGVzZWxlY3QoaW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5vblNlbGVjdChpbmZvKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgcHJvcHMub25TZWxlY3QoaW5mbyk7XG4gICAgfVxuICB9LFxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yb290UHJlZml4Q2xzICsgJy1pdGVtJztcbiAgfSxcbiAgZ2V0QWN0aXZlQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXRBY3RpdmVDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH0sXG4gIGdldFNlbGVjdGVkQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXRTZWxlY3RlZENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctc2VsZWN0ZWQnO1xuICB9LFxuICBnZXREaXNhYmxlZENsYXNzTmFtZTogZnVuY3Rpb24gZ2V0RGlzYWJsZWRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLWRpc2FibGVkJztcbiAgfSxcbiAgY2xlYXJNZW51SXRlbU1vdXNlTGVhdmVUaW1lcjogZnVuY3Rpb24gY2xlYXJNZW51SXRlbU1vdXNlTGVhdmVUaW1lcihjYWxsRm4pIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwYXJlbnRNZW51ID0gcHJvcHMucGFyZW50TWVudTtcbiAgICBpZiAocGFyZW50TWVudS5tZW51SXRlbU1vdXNlTGVhdmVUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHBhcmVudE1lbnUubWVudUl0ZW1Nb3VzZUxlYXZlVGltZXIpO1xuICAgICAgcGFyZW50TWVudS5tZW51SXRlbU1vdXNlTGVhdmVUaW1lciA9IG51bGw7XG4gICAgICBpZiAoY2FsbEZuICYmIHBhcmVudE1lbnUubWVudUl0ZW1Nb3VzZUxlYXZlRm4pIHtcbiAgICAgICAgcGFyZW50TWVudS5tZW51SXRlbU1vdXNlTGVhdmVGbigpO1xuICAgICAgfVxuICAgICAgcGFyZW50TWVudS5tZW51SXRlbU1vdXNlTGVhdmVGbiA9IG51bGw7XG4gICAgfVxuICB9LFxuICBpc1NlbGVjdGVkOiBmdW5jdGlvbiBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGVkS2V5cy5pbmRleE9mKHRoaXMucHJvcHMuZXZlbnRLZXkpICE9PSAtMTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoKTtcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUoKV0gPSAhcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXNbdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSgpXSA9IHNlbGVjdGVkO1xuICAgIGNsYXNzZXNbdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSgpXSA9IHByb3BzLmRpc2FibGVkO1xuICAgIGNsYXNzZXNbdGhpcy5nZXRQcmVmaXhDbHMoKV0gPSB0cnVlO1xuICAgIGNsYXNzZXNbcHJvcHMuY2xhc3NOYW1lXSA9ICEhcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBhdHRycyA9IF9leHRlbmRzKHt9LCBwcm9wcy5hdHRyaWJ1dGUsIHtcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzZXMpLFxuICAgICAgcm9sZTogJ21lbnVpdGVtJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkXG4gICAgfSk7XG4gICAgdmFyIG1vdXNlRXZlbnQgPSB7fTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBtb3VzZUV2ZW50ID0ge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXJcbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBzdHlsZSA9IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSk7XG4gICAgaWYgKHByb3BzLm1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IHByb3BzLmlubGluZUluZGVudCAqIHByb3BzLmxldmVsO1xuICAgIH1cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgYXR0cnMsIG1vdXNlRXZlbnQpLFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuTWVudUl0ZW0uaXNNZW51SXRlbSA9IDE7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVudUl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmMtbWVudS9saWIvTWVudUl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIE1lbnVJdGVtR3JvdXAgPSBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWVudUl0ZW1Hcm91cCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcmVuZGVyTWVudUl0ZW06IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBpbmRleDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICB9O1xuICB9LFxuICByZW5kZXJJbm5lck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJJbm5lck1lbnVJdGVtKGl0ZW0sIHN1YkluZGV4KSB7XG4gICAgdmFyIHJlbmRlck1lbnVJdGVtID0gdGhpcy5wcm9wcy5yZW5kZXJNZW51SXRlbTtcbiAgICByZXR1cm4gcmVuZGVyTWVudUl0ZW0oaXRlbSwgdGhpcy5wcm9wcy5pbmRleCwgc3ViSW5kZXgpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgfHwgJyc7XG4gICAgdmFyIHJvb3RQcmVmaXhDbHMgPSBwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgY2xhc3NOYW1lICs9ICcgJyArIHJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0tZ3JvdXAnO1xuICAgIHZhciB0aXRsZUNsYXNzTmFtZSA9IHJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0tZ3JvdXAtdGl0bGUnO1xuICAgIHZhciBsaXN0Q2xhc3NOYW1lID0gcm9vdFByZWZpeENscyArICctaXRlbS1ncm91cC1saXN0JztcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICAgIHByb3BzLnRpdGxlXG4gICAgICApLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGxpc3RDbGFzc05hbWUgfSxcbiAgICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlcklubmVyTWVudUl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbk1lbnVJdGVtR3JvdXAuaXNNZW51SXRlbUdyb3VwID0gdHJ1ZTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZW51SXRlbUdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL01lbnVJdGVtR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIERpdmlkZXIgPSBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRGl2aWRlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSB8fCAnJztcbiAgICB2YXIgcm9vdFByZWZpeENscyA9IHByb3BzLnJvb3RQcmVmaXhDbHM7XG4gICAgY2xhc3NOYW1lICs9ICcgJyArIChyb290UHJlZml4Q2xzICsgJy1pdGVtLWRpdmlkZXInKTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCgnbGknLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXZpZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLW1lbnUvbGliL0RpdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUNEQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9HQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMVZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=