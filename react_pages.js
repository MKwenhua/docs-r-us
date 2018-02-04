module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexRoute = undefined;
var _jsxFileName = '/Users/pete/docs-r-us/src/server/index.js',
    _this = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MainContainer = __webpack_require__(10);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _render_page = __webpack_require__(28);

var _render_page2 = _interopRequireDefault(_render_page);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

var _store = __webpack_require__(30);

var _defaultState = __webpack_require__(34);

var _defaultState2 = _interopRequireDefault(_defaultState);

var _reactApollo = __webpack_require__(3);

var _apolloClient = __webpack_require__(35);

var _apolloCacheInmemory = __webpack_require__(36);

var _nodeFetch = __webpack_require__(37);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _apolloLinkHttp = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = {
  serverSide: true
};

var IndexRoute = function IndexRoute(req, res) {
  var client = new _apolloClient.ApolloClient({
    ssrMode: true,
    link: (0, _apolloLinkHttp.createHttpLink)({
      uri: '/graphql',
      fetch: _nodeFetch2.default,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new _apolloCacheInmemory.InMemoryCache()
  });
  var store = (0, _store.buildServerStore)(Object.assign({}, _defaultState2.default, { currentUser: req.user }));
  res.send((0, _render_page2.default)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: _this
    },
    _react2.default.createElement(
      _reactApollo.ApolloProvider,
      { client: client, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: _this
      },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: _this
        },
        _react2.default.createElement(_MainContainer2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: _this
        })
      )
    )
  ), store.getState()));

  res.end();
};

exports.IndexRoute = IndexRoute;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/containers/MainContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(11);

var _reactRedux = __webpack_require__(4);

var _TopNav = __webpack_require__(12);

var _TopNav2 = _interopRequireDefault(_TopNav);

var _SideNav = __webpack_require__(14);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _reactRouter = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(2);

var _constants = __webpack_require__(5);

var _helpers = __webpack_require__(17);

var _DoctorHome = __webpack_require__(18);

var _DoctorHome2 = _interopRequireDefault(_DoctorHome);

var _DoctorPatientsView = __webpack_require__(19);

var _DoctorPatientsView2 = _interopRequireDefault(_DoctorPatientsView);

var _DoctorPatientProfile = __webpack_require__(20);

var _DoctorPatientProfile2 = _interopRequireDefault(_DoctorPatientProfile);

var _AppointmentsCalendar = __webpack_require__(21);

var _AppointmentsCalendar2 = _interopRequireDefault(_AppointmentsCalendar);

var _AppointmentTerminal = __webpack_require__(24);

var _AppointmentTerminal2 = _interopRequireDefault(_AppointmentTerminal);

var _DoctorProfile = __webpack_require__(25);

var _DoctorProfile2 = _interopRequireDefault(_DoctorProfile);

var _CreateAppointment = __webpack_require__(26);

var _CreateAppointment2 = _interopRequireDefault(_CreateAppointment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapperClass = {
  '/': 'main'
};

var selectState = function selectState(state) {
  return state;
};

var MainContainer = function (_PureComponent) {
  _inherits(MainContainer, _PureComponent);

  function MainContainer(props) {
    _classCallCheck(this, MainContainer);

    return _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).call(this, props));
  }

  _createClass(MainContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          location = _props.location,
          currentUser = _props.currentUser;

      console.log('MainContainer this.props', this.props);
      return _react2.default.createElement(
        'section',
        { className: WrapperClass[location.pathname] || 'main', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        _react2.default.createElement(_TopNav2.default, { navStuck: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        _react2.default.createElement(_SideNav2.default, { location: location, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        _react2.default.createElement(
          'div',
          { className: true ? 'page-content' : 'page-content', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              },
              _react2.default.createElement(_DoctorHome2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/patients', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              _react2.default.createElement(_DoctorPatientsView2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/patient/:id', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                },
                __self: this
              },
              _react2.default.createElement(_DoctorPatientProfile2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/appointments', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              },
              _react2.default.createElement(_AppointmentsCalendar2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { path: '/appointment/:id', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              },
              _react2.default.createElement(_AppointmentTerminal2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/profile', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              },
              _react2.default.createElement(_DoctorProfile2.default, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/stuff', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              },
              _react2.default.createElement(_CreateAppointment2.default, { patientId: 'eb27d50b-7cce-4091-abc4-f33e01ff6c61',
                doctorId: currentUser.id, dispatch: dispatch, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return MainContainer;
}(_react.PureComponent);

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(selectState)(MainContainer));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/TopNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(13);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopNav = function (_PureComponent) {
  _inherits(TopNav, _PureComponent);

  function TopNav() {
    _classCallCheck(this, TopNav);

    return _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).apply(this, arguments));
  }

  _createClass(TopNav, [{
    key: 'render',
    value: function render() {
      var navStuck = this.props.navStuck;

      return _react2.default.createElement(
        'nav',
        { className: navStuck === false ? 'top-nav' : 'top-nav fixed', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: 'topbar-left', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'brand', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            'MED-MD'
          )
        )
      );
    }
  }]);

  return TopNav;
}(_react.PureComponent);

exports.default = TopNav;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/SideNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(15);

var _reactRouterDom = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = function (_PureComponent) {
  _inherits(SideNav, _PureComponent);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'render',
    value: function render() {
      var expanded = this.props.expanded;

      return _react2.default.createElement(
        'aside',
        { className: expanded === false ? 'side-nav' : 'side-nav expanded', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { exact: true, to: '/', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            'home'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/calendar', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'calendar outline', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            'calendar'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/profile', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'doctor', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'profile'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/patients', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'address book outline', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            'patients'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/appointment', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'clipboard', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            },
            'checkup'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/stuff', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'calendar outline', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'stuff'
          )
        )
      );
    }
  }]);

  return SideNav;
}(_react.PureComponent);

exports.default = SideNav;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Debounce = function Debounce(fn, wait, immediate) {
  var timeout = void 0;
  return function (e) {
    var later = function later() {
      timeout = null;
      if (immediate !== true) {
        fn(e);
      }
    };
    if (immediate === true && !timeout) {
      fn(e);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

exports.Debounce = Debounce;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorHome.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var items = [{
  header: 'Project Report - April',
  description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
  meta: 'ROI: 30%',
  centered: true
}, {
  header: 'Project Report - May',
  description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
  meta: 'ROI: 34%',
  centered: true
}, {
  header: 'Project Report - June',
  description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
  meta: 'ROI: 27%',
  centered: true
}];

var events = [{
  date: '1 Hour Ago',
  image: '/assets/images/avatar/small/elliot.jpg',
  meta: '4 Likes',
  summary: 'Elliot Fu added you as a friend'
}, {
  date: '4 days ago',
  image: '/assets/images/avatar/small/helen.jpg',
  meta: '1 Like',
  summary: 'Helen Troy added 2 new illustrations',
  extraImages: ['/assets/images/wireframe/image.png', '/assets/images/wireframe/image-text.png']
}, {
  date: '3 days ago',
  image: '/assets/images/avatar/small/joe.jpg',
  meta: '8 Likes',
  summary: 'Joe Henderson posted on his page',
  extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started."
}, {
  date: '4 days ago',
  image: '/assets/images/avatar/small/justen.jpg',
  meta: '41 Likes',
  summary: 'Justen Kitsune added 2 new photos of you',
  extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  extraImages: ['/assets/images/wireframe/image.png', '/assets/images/wireframe/image-text.png']
}];

var DoctorHome = function (_PureComponent) {
  _inherits(DoctorHome, _PureComponent);

  function DoctorHome() {
    _classCallCheck(this, DoctorHome);

    return _possibleConstructorReturn(this, (DoctorHome.__proto__ || Object.getPrototypeOf(DoctorHome)).apply(this, arguments));
  }

  _createClass(DoctorHome, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        },
        _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: '3', items: items, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }),
        _react2.default.createElement(
          _semanticUiReact.Card,
          { fluid: true, color: 'red', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Card.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Card.Header,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              'Recent Activity'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Card.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Feed, { events: events, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return DoctorHome;
}(_react.PureComponent);

exports.default = DoctorHome;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorPatientsView.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoctorPatientsView = function (_PureComponent) {
  _inherits(DoctorPatientsView, _PureComponent);

  function DoctorPatientsView() {
    _classCallCheck(this, DoctorPatientsView);

    return _possibleConstructorReturn(this, (DoctorPatientsView.__proto__ || Object.getPrototypeOf(DoctorPatientsView)).apply(this, arguments));
  }

  _createClass(DoctorPatientsView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Statistic,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Statistic.Value,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            '5,550'
          ),
          _react2.default.createElement(
            _semanticUiReact.Statistic.Label,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: this
            },
            'Blood Pressure'
          )
        )
      );
    }
  }]);

  return DoctorPatientsView;
}(_react.PureComponent);

exports.default = DoctorPatientsView;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorPatientProfile.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extra = _react2.default.createElement(
  'a',
  {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  },
  _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }),
  '16 Friends'
);

var DoctorPatientProfile = function (_PureComponent) {
  _inherits(DoctorPatientProfile, _PureComponent);

  function DoctorPatientProfile() {
    _classCallCheck(this, DoctorPatientProfile);

    return _possibleConstructorReturn(this, (DoctorPatientProfile.__proto__ || Object.getPrototypeOf(DoctorPatientProfile)).apply(this, arguments));
  }

  _createClass(DoctorPatientProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        _react2.default.createElement(_semanticUiReact.Card, {
          image: 'https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg',
          header: 'Elliot Baker',
          meta: 'Friend',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
          extra: extra, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }),
        _react2.default.createElement(
          _semanticUiReact.List,
          { relaxed: 'very', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/daniel.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                'Daniel Louise'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: this
                    },
                    'Arrested Development'
                  )
                ),
                'just now.'
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/stevie.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                'Stevie Feliciano'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      },
                      __self: this
                    },
                    'Bob\'s Burgers'
                  )
                ),
                '10 hours ago.'
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/elliot.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                'Elliot Fu'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    },
                    'The Godfather Part 2'
                  )
                ),
                'yesterday.'
              )
            )
          )
        )
      );
    }
  }]);

  return DoctorPatientProfile;
}(_react.PureComponent);

exports.default = DoctorPatientProfile;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/AppointmentsCalendar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n{\n  allDoctors {\n    id\n    fullName\n    appointments {\n      id\n      date\n    }\n  }\n}\n'], ['\n{\n  allDoctors {\n    id\n    fullName\n    appointments {\n      id\n      date\n    }\n  }\n}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _CalendarDisplay = __webpack_require__(22);

var _CalendarDisplay2 = _interopRequireDefault(_CalendarDisplay);

var _reactApollo = __webpack_require__(3);

var _graphqlTag = __webpack_require__(7);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var firstQuery = (0, _graphqlTag2.default)(_templateObject);

var AppointmentsCalendar = function (_PureComponent) {
  _inherits(AppointmentsCalendar, _PureComponent);

  function AppointmentsCalendar() {
    _classCallCheck(this, AppointmentsCalendar);

    return _possibleConstructorReturn(this, (AppointmentsCalendar.__proto__ || Object.getPrototypeOf(AppointmentsCalendar)).apply(this, arguments));
  }

  _createClass(AppointmentsCalendar, [{
    key: 'render',
    value: function render() {
      console.log('AppointmentsCalendar this.props', this.props);
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        _react2.default.createElement(_CalendarDisplay2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      );
    }
  }]);

  return AppointmentsCalendar;
}(_react.PureComponent);

exports.default = (0, _reactApollo.graphql)(firstQuery)(AppointmentsCalendar);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/CalendarDisplay.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBigCalendar = __webpack_require__(23);

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));

var events = [{
  id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2015, 3, 0),
  end: new Date(2015, 3, 1)
}, {
  id: 1,
  title: 'Long Event',
  start: new Date(2015, 3, 7),
  end: new Date(2015, 3, 10)
}, {
  id: 2,
  title: 'DTS STARTS',
  start: new Date(2016, 2, 13, 0, 0, 0),
  end: new Date(2016, 2, 20, 0, 0, 0)
}, {
  id: 3,
  title: 'DTS ENDS',
  start: new Date(2016, 10, 6, 0, 0, 0),
  end: new Date(2016, 10, 13, 0, 0, 0)
}, {
  id: 4,
  title: 'Some Event',
  start: new Date(2015, 3, 9, 0, 0, 0),
  end: new Date(2015, 3, 9, 0, 0, 0)
}, {
  id: 5,
  title: 'Conference',
  start: new Date(2015, 3, 11),
  end: new Date(2015, 3, 13),
  desc: 'Big conference for important people'
}, {
  id: 6,
  title: 'Meeting',
  start: new Date(2015, 3, 12, 10, 30, 0, 0),
  end: new Date(2015, 3, 12, 12, 30, 0, 0),
  desc: 'Pre-meeting meeting, to prepare for the meeting'
}, {
  id: 7,
  title: 'Lunch',
  start: new Date(2015, 3, 12, 12, 0, 0, 0),
  end: new Date(2015, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch'
}, {
  id: 8,
  title: 'Meeting',
  start: new Date(2015, 3, 12, 14, 0, 0, 0),
  end: new Date(2015, 3, 12, 15, 0, 0, 0)
}, {
  id: 9,
  title: 'Happy Hour',
  start: new Date(2015, 3, 12, 17, 0, 0, 0),
  end: new Date(2015, 3, 12, 17, 30, 0, 0),
  desc: 'Most important meal of the day'
}, {
  id: 10,
  title: 'Dinner',
  start: new Date(2015, 3, 12, 20, 0, 0, 0),
  end: new Date(2015, 3, 12, 21, 0, 0, 0)
}, {
  id: 11,
  title: 'Birthday Party',
  start: new Date(2015, 3, 13, 7, 0, 0),
  end: new Date(2015, 3, 13, 10, 30, 0)
}, {
  id: 12,
  title: 'Late Night Event',
  start: new Date(2015, 3, 17, 19, 30, 0),
  end: new Date(2015, 3, 18, 2, 0, 0)
}, {
  id: 13,
  title: 'Multi-day Event',
  start: new Date(2015, 3, 20, 19, 30, 0),
  end: new Date(2015, 3, 22, 2, 0, 0)
}];

var CalendarDisplay = function (_PureComponent) {
  _inherits(CalendarDisplay, _PureComponent);

  function CalendarDisplay() {
    _classCallCheck(this, CalendarDisplay);

    return _possibleConstructorReturn(this, (CalendarDisplay.__proto__ || Object.getPrototypeOf(CalendarDisplay)).apply(this, arguments));
  }

  _createClass(CalendarDisplay, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBigCalendar2.default, Object.assign({}, this.props, {
        events: events,
        step: 15,
        timeslots: 8,
        defaultView: 'week',
        defaultDate: new Date(2015, 3, 12), __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }));
    }
  }]);

  return CalendarDisplay;
}(_react.PureComponent);

exports.default = CalendarDisplay;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/AppointmentTerminal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppointmentTerminal = function (_PureComponent) {
  _inherits(AppointmentTerminal, _PureComponent);

  function AppointmentTerminal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppointmentTerminal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppointmentTerminal.__proto__ || Object.getPrototypeOf(AppointmentTerminal)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: 0 }, _this.handleClick = function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({ activeIndex: newIndex });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppointmentTerminal, [{
    key: 'render',
    value: function render() {
      var activeIndex = this.state.activeIndex;


      return _react2.default.createElement(
        _semanticUiReact.Accordion,
        { styled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 0, index: 0, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          'What is a dog?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a',
            ' ',
            'welcome guest in many households across the world.'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 1, index: 1, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }),
          'What kinds of dogs are there?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 1, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of',
            ' ',
            'dog that they find to be compatible with their own lifestyle and desires from a companion.'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 2, index: 2, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }),
          'How do you acquire a dog?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 2, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to',
            ' ',
            'assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your',
            ' ',
            'dog from a shelter, helps give a good home to a dog who may not find one so readily.'
          )
        )
      );
    }
  }]);

  return AppointmentTerminal;
}(_react.PureComponent);

exports.default = AppointmentTerminal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorProfile.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extra = _react2.default.createElement(
  'a',
  {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  },
  _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }),
  '16 Friends'
);

var DoctorProfile = function (_PureComponent) {
  _inherits(DoctorProfile, _PureComponent);

  function DoctorProfile() {
    _classCallCheck(this, DoctorProfile);

    return _possibleConstructorReturn(this, (DoctorProfile.__proto__ || Object.getPrototypeOf(DoctorProfile)).apply(this, arguments));
  }

  _createClass(DoctorProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        _react2.default.createElement(_semanticUiReact.Card, {
          image: 'https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg',
          header: 'Elliot Baker',
          meta: 'Friend',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
          extra: extra, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }),
        _react2.default.createElement(
          _semanticUiReact.List,
          { relaxed: 'very', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/daniel.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'Daniel Louise'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: this
                    },
                    'Arrested Development'
                  )
                ),
                'just now.'
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/stevie.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                'Stevie Feliciano'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    'Bob\'s Burgers'
                  )
                ),
                '10 hours ago.'
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.List.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/elliot.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            }),
            _react2.default.createElement(
              _semanticUiReact.List.Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.List.Header,
                { as: 'a', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                'Elliot Fu'
              ),
              _react2.default.createElement(
                _semanticUiReact.List.Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                },
                'Last seen watching',
                _react2.default.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    'The Godfather Part 2'
                  )
                ),
                'yesterday.'
              )
            )
          )
        )
      );
    }
  }]);

  return DoctorProfile;
}(_react.PureComponent);

exports.default = DoctorProfile;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/CreateAppointment.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  mutation createAppointment($date: String!, $purpose: String!, $time: String!,\n    $description: String!, $patientId: String!, $doctorId: String!) {\n    createAppointment(date: $date,\n      purpose: $purpose,\n      time: $time,\n      description: $description,\n      patientId: $patientId,\n      doctorId: $doctorId) {\n        id\n        date\n        time\n        status\n        canceled\n        purpose\n        text\n        patientId\n        doctorId\n      }\n  }\n'], ['\n  mutation createAppointment($date: String!, $purpose: String!, $time: String!,\n    $description: String!, $patientId: String!, $doctorId: String!) {\n    createAppointment(date: $date,\n      purpose: $purpose,\n      time: $time,\n      description: $description,\n      patientId: $patientId,\n      doctorId: $doctorId) {\n        id\n        date\n        time\n        status\n        canceled\n        purpose\n        text\n        patientId\n        doctorId\n      }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactApollo = __webpack_require__(3);

var _graphqlTag = __webpack_require__(7);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactDatepicker = __webpack_require__(27);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import 'react-datepicker/dist/react-datepicker.css';

var createAppointment = (0, _graphqlTag2.default)(_templateObject);

var CreateAppointment = function (_PureComponent) {
  _inherits(CreateAppointment, _PureComponent);

  function CreateAppointment(props) {
    _classCallCheck(this, CreateAppointment);

    var _this = _possibleConstructorReturn(this, (CreateAppointment.__proto__ || Object.getPrototypeOf(CreateAppointment)).call(this, props));

    _this.thingHappened = function (e) {
      _this.props.mutate({
        variables: {
          date: _this.state.startDate,
          time: _this.state.startDate,
          purpose: _this.state.purpose,
          description: _this.state.dicription,
          paientId: _this.props.paientId,
          doctorId: _this.props.doctorId,
          repoFullName: 'apollographql/apollo-client'
        }
      }).then(function (_ref) {
        var data = _ref.data;

        console.log('got data', data);
      }).catch(function (error) {
        console.log('there was an error sending the query', error);
      });
    };

    _this.formSubmitted = function (e) {
      e.preventDefault();
      console.log('formSubmitted e', e);
      _this.setState({
        formSuccess: true,
        purpose: _this.purpose.value.trim(),
        description: _this.description.value.trim()
      });
    };

    _this.datePicked = function (date) {
      console.log('datePicked date', date);
      _this.setState({
        startDate: date
      });
    };

    _this.state = {
      formSuccess: false,
      startDate: (0, _moment2.default)(),
      purpose: '',
      description: ''
    };
    return _this;
  }

  _createClass(CreateAppointment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('createAppointment this.props', this.props);
      console.log('createAppointment this.state', this.state);
      var _state = this.state,
          formSuccess = _state.formSuccess,
          startDate = _state.startDate;

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Form,
          { size: 'big', success: formSuccess, onSubmit: this.formSubmitted, __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Form.Group,
            { widths: 'equal', __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Form.Field, { label: 'Purpose', ref: function ref(purpose) {
                return _this2.purpose = purpose;
              }, control: 'input', placeholder: 'purpose', __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            })
          ),
          _react2.default.createElement(_semanticUiReact.Form.TextArea, { label: 'Description', ref: function ref(description) {
              return _this2.description = description;
            }, placeholder: 'Tell us more about you...', __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }),
          _react2.default.createElement(_reactDatepicker2.default, {
            selected: startDate,
            onChange: this.datePicked,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }),
          _react2.default.createElement(
            _semanticUiReact.Button,
            { type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            'Submit'
          ),
          _react2.default.createElement(_semanticUiReact.Message, {
            success: true,
            header: 'Form Completed',
            content: 'You\'re all signed up for the newsletter',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          })
        )
      );
    }
  }]);

  return CreateAppointment;
}(_react.PureComponent);

exports.default = (0, _reactApollo.graphql)(createAppointment)(CreateAppointment);

// class NewEntry extends Component {
//   onClick() {
//     this.props.mutate({
//       variables: { repoFullName: 'apollographql/apollo-client' }
//     })
//       .then(({ data }) => {
//         console.log('got data', data);
//       }).catch((error) => {
//         console.log('there was an error sending the query', error);
//       });
//   }
//
//   render() {
//     return <div onClick={this.onClick.bind(this)}>Click me</div>;
//   }
// }
//
//
//
// const NewEntryWithData = graphql(submitRepository)(NewEntry);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = __webpack_require__(29);

var prodEnv = process.env.NODE_ENV === 'production';
var assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Docs R Us</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + assetBase + '/css/app_bundle.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + assetBase + '/app_bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + (0, _server.renderToString)(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

exports.default = RenderPage;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildServerStore = exports.buildClientStore = undefined;

var _redux = __webpack_require__(8);

var _reduxLogger = __webpack_require__(31);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composedStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxLogger2.default));

var buildClientStore = function buildClientStore(state) {
  return composedStore(_redux.createStore)((0, _reducers.clientStoreBuilder)(state));
};
var buildServerStore = function buildServerStore(state) {
  return (0, _redux.createStore)((0, _reducers.serverStoreBuilder)(state));
};

exports.buildClientStore = buildClientStore;
exports.buildServerStore = buildServerStore;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientStoreBuilder = exports.serverStoreBuilder = undefined;

var _redux = __webpack_require__(8);

var _main = __webpack_require__(33);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverStoreBuilder = function serverStoreBuilder(state) {
  return (0, _main2.default)(state);
};

var clientStoreBuilder = function clientStoreBuilder(state) {
  return (0, _main2.default)(state);
};

exports.serverStoreBuilder = serverStoreBuilder;
exports.clientStoreBuilder = clientStoreBuilder;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(5);

exports.default = function (initialState) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case _constants.CONNECTED:
        {
          return Object.assign({}, state, {
            connected: true,
            socketId: action.payload
          });
          break;
        }
      case _constants.DISCONNECTED:
        {
          return Object.assign({}, state, {
            connected: false
          });
          break;
        }
    }
    return state;
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultState = {
  connected: false
};

exports.default = defaultState;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map