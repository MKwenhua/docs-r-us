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

module.exports = require("constants");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

var _render_page = __webpack_require__(30);

var _render_page2 = _interopRequireDefault(_render_page);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

var _state = __webpack_require__(32);

var _store = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = {
  serverSide: true
};

var IndexRoute = function IndexRoute(req, res) {
  var store = (0, _store.buildServerStore)((0, _state.normalizeDoctorState)(req.user.dataValues));
  res.send((0, _render_page2.default)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: _this
    },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      _react2.default.createElement(_MainContainer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this
      })
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

var _constants = __webpack_require__(3);

var _helpers = __webpack_require__(17);

var _doctor = __webpack_require__(18);

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          location = _props.location,
          match = _props.match,
          currentUser = _props.currentUser,
          patients = _props.patients,
          patientProfile = _props.patientProfile;

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
              _react2.default.createElement(_doctor.Home, { location: location, __source: {
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
              _react2.default.createElement(_doctor.PatientsView, { currentUser: currentUser, patients: patients, dispatch: dispatch, location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              })
            ),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/patient/:id', render: function render(props) {
                return _react2.default.createElement(_doctor.PatientProfile, Object.assign({ currentUser: currentUser }, patientProfile, { patients: patients, dispatch: dispatch, location: location }, props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: _this2
                }));
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            }),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/calendar', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              _react2.default.createElement(_doctor.AppointmentsCalendar, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { path: '/appointment/:id', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              _react2.default.createElement(_doctor.AppointmentTerminal, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Route,
              { exact: true, path: '/profile', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              },
              _react2.default.createElement(_doctor.Profile, { location: location, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
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
            lineNumber: 9
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
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'doctor', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
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
              lineNumber: 25
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'address book outline', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
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
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'clipboard', size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            'checkup'
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
exports.Profile = exports.AppointmentTerminal = exports.AppointmentsCalendar = exports.PatientProfile = exports.PatientsView = exports.Home = undefined;

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _PatientsView = __webpack_require__(20);

var _PatientsView2 = _interopRequireDefault(_PatientsView);

var _PatientProfile = __webpack_require__(22);

var _PatientProfile2 = _interopRequireDefault(_PatientProfile);

var _AppointmentsCalendar = __webpack_require__(24);

var _AppointmentsCalendar2 = _interopRequireDefault(_AppointmentsCalendar);

var _AppointmentTerminal = __webpack_require__(28);

var _AppointmentTerminal2 = _interopRequireDefault(_AppointmentTerminal);

var _Profile = __webpack_require__(29);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;
exports.PatientsView = _PatientsView2.default;
exports.PatientProfile = _PatientProfile2.default;
exports.AppointmentsCalendar = _AppointmentsCalendar2.default;
exports.AppointmentTerminal = _AppointmentTerminal2.default;
exports.Profile = _Profile2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/Home.js';

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

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        },
        _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: '3', items: items, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }),
        _react2.default.createElement(
          _semanticUiReact.Card,
          { fluid: true, color: 'red', __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Card.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Card.Header,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
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
                lineNumber: 61
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Feed, { events: events, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

exports.default = Home;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/PatientsView.js',
    _this = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PatientListItem = __webpack_require__(21);

var _PatientListItem2 = _interopRequireDefault(_PatientListItem);

var _reactRouterDom = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderStat = function renderStat() {
  return _react2.default.createElement(
    _semanticUiReact.Statistic,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    _react2.default.createElement(
      _semanticUiReact.Statistic.Value,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      '5,550'
    ),
    _react2.default.createElement(
      _semanticUiReact.Statistic.Label,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: _this
      },
      'Blood Pressure'
    )
  );
};
var paientListItem = function paientListItem(_ref) {
  var id = _ref.id,
      fullName = _ref.fullName,
      email = _ref.email;
  return _react2.default.createElement(
    _semanticUiReact.List.Item,
    { key: id, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: _this
    },
    _react2.default.createElement(
      _semanticUiReact.List.Content,
      { floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this
      },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/patient/' + id, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: _this
        },
        _react2.default.createElement(
          _semanticUiReact.Button,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: _this
          },
          'Add'
        )
      )
    ),
    _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: _constants.CDN_URI + 'patient_records_icon.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: _this
    }),
    _react2.default.createElement(
      _semanticUiReact.List.Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: _this
      },
      _react2.default.createElement(
        _semanticUiReact.List.Header,
        { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: _this
        },
        fullName
      ),
      _react2.default.createElement(
        _semanticUiReact.List.Description,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: _this
        },
        'Last seen watching',
        _react2.default.createElement(
          'a',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          },
          _react2.default.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: _this
            },
            'The Godfather Part 2'
          )
        ),
        'yesterday.'
      )
    )
  );
};

var PatientsView = function (_PureComponent) {
  _inherits(PatientsView, _PureComponent);

  function PatientsView() {
    var _ref2,
        _this3 = this;

    var _temp, _this2, _ret;

    _classCallCheck(this, PatientsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = PatientsView.__proto__ || Object.getPrototypeOf(PatientsView)).call.apply(_ref2, [this].concat(args))), _this2), _this2.listPatientItems = function (_ref3) {
      var allIds = _ref3.allIds,
          byId = _ref3.byId;
      return allIds.map(function (patientId, i) {
        return _react2.default.createElement(_PatientListItem2.default, Object.assign({ key: i }, byId[patientId], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: _this3
        }));
      });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(PatientsView, [{
    key: 'render',
    value: function render() {
      var _props$patients = this.props.patients,
          patients = _props$patients === undefined ? [] : _props$patients;

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Dropdown,
          { text: 'Filter Tags', floating: true, labeled: true, button: true, icon: 'filter', className: 'icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Dropdown.Menu,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown.Header, { icon: 'tags', content: 'Filter by tag', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown.Divider, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown.Item, { description: '2 new', text: 'Important', __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown.Item, { description: '10 new', text: 'Hopper', __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown.Item, { description: '5 new', text: 'Discussion', __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h3', dividing: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          'Most Recent Patients'
        ),
        _react2.default.createElement(
          _semanticUiReact.List,
          { divided: true, verticalAlign: 'middle', __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          this.listPatientItems(patients)
        )
      );
    }
  }]);

  return PatientsView;
}(_react.PureComponent);

exports.default = PatientsView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/PatientListItem.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatientListItem = function (_PureComponent) {
  _inherits(PatientListItem, _PureComponent);

  function PatientListItem() {
    _classCallCheck(this, PatientListItem);

    return _possibleConstructorReturn(this, (PatientListItem.__proto__ || Object.getPrototypeOf(PatientListItem)).apply(this, arguments));
  }

  _createClass(PatientListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          fullName = _props.fullName,
          email = _props.email;

      return _react2.default.createElement(
        _semanticUiReact.List.Item,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.List.Content,
          { floated: 'right', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/patient/' + id, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Button,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              'Add'
            )
          )
        ),
        _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: _constants.CDN_URI + 'patient_records_icon.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        _react2.default.createElement(
          _semanticUiReact.List.Content,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.List.Header,
            { as: 'a', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            fullName
          ),
          _react2.default.createElement(
            _semanticUiReact.List.Description,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            'Last seen watching',
            _react2.default.createElement(
              'a',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              _react2.default.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                'The Godfather Part 2'
              )
            ),
            'yesterday.'
          )
        )
      );
    }
  }]);

  return PatientListItem;
}(_react.PureComponent);

exports.default = PatientListItem;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/PatientProfile.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _FileUploader = __webpack_require__(23);

var _FileUploader2 = _interopRequireDefault(_FileUploader);

__webpack_require__(7);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatientProfile = function (_PureComponent) {
  _inherits(PatientProfile, _PureComponent);

  function PatientProfile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PatientProfile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PatientProfile.__proto__ || Object.getPrototypeOf(PatientProfile)).call.apply(_ref, [this].concat(args))), _this), _this.toggleDisplay = function (display) {
      return function () {
        return _this.props.dispatch({
          type: _constants.PATIENT_TAB_SELECTED,
          payload: display
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PatientProfile, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch({ type: _constants.EXIT_PATIENT_VIEW });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('PatientProfile props', this.props);
      var _props = this.props,
          match = _props.match,
          patients = _props.patients,
          display = _props.display,
          syncing = _props.syncing,
          _props$files = _props.files,
          files = _props$files === undefined ? [] : _props$files;

      var patient = patients.byId[match.params.id];
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          patient.fullName
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu,
          { pointing: true, secondary: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Info', active: display === 'info', onClick: this.toggleDisplay('info'), __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }),
          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Appointments', active: display === 'appointments', onClick: this.toggleDisplay('appointments'), __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }),
          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Records', active: display === 'records', onClick: this.toggleDisplay('records'), __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }),
          _react2.default.createElement(
            _semanticUiReact.Menu.Menu,
            { position: 'right', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Upload Records', active: display === 'upload', onClick: this.toggleDisplay('upload'), __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { className: display === 'upload' ? '' : 'hidden', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          _react2.default.createElement(_FileUploader2.default, {
            syncing: syncing,
            files: files,
            dispatch: this.props.dispatch,
            patientId: patient.id,
            action: '/patients/' + patient.id,
            method: 'post', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { className: display === 'info' ? '' : 'hidden', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          _react2.default.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            JSON.stringify(patient, null, 4)
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { className: display === 'appointments' ? '' : 'hidden', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            },
            'appointments'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { className: display === 'records' ? '' : 'hidden', __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            },
            'records'
          )
        )
      );
    }
  }]);

  return PatientProfile;
}(_react.PureComponent);

exports.default = PatientProfile;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/FileUploader.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

__webpack_require__(7);

var _reactDropzone = __webpack_require__(6);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uploadPreviewSrc = function uploadPreviewSrc(_ref) {
  var preview = _ref.preview,
      type = _ref.type;
  return type.includes('image') ? preview : _constants.CDN_URI + 'record-upload-icon.png';
};

var FileUploader = function (_PureComponent) {
  _inherits(FileUploader, _PureComponent);

  function FileUploader() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, FileUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call.apply(_ref2, [this].concat(args))), _this), _this.fileDrop = function (files) {
      console.log('files', files);
      _this.props.dispatch({ type: _constants.PATIENT_FILES_DROPPED, payload: files });
    }, _this.uploadToS3 = function (e) {
      e.preventDefault();
      console.log('uploadToS3', _this.props);
      var _this$props = _this.props,
          action = _this$props.action,
          files = _this$props.files;

      var formData = new FormData(document.forms['uploadForm']);
      files.forEach(function (file) {
        formData.append(file.name, file, file.name);
      });
      fetch(action, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        console.log('upload response', response);
        _this.props.dispatch({ type: _constants.PATIENT_FILES_UPLOADED });
      }).catch(function (error) {
        console.log(error);
      });
      _this.props.dispatch({ type: _constants.PATIENT_FILES_UPLOADING });
    }, _this.removeFile = function (index) {
      return function (e) {
        return _this.props.dispatch({
          type: _constants.PATIENT_FILE_REMOVED,
          payload: _this.props.files.filter(function (fl, i) {
            return index !== i;
          })
        });
      };
    }, _this.previewUploads = function (files) {
      return files.map(function (file, i) {
        return _react2.default.createElement(
          _semanticUiReact.List.Item,
          { key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: _this2
          },
          _react2.default.createElement(
            _semanticUiReact.List.Content,
            { floated: 'right', __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: _this2
            },
            _react2.default.createElement(
              'a',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: _this2
              },
              _react2.default.createElement(_semanticUiReact.Icon, { onClick: _this.removeFile(i), name: 'remove', size: 'large', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: _this2
              })
            )
          ),
          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: uploadPreviewSrc(file), __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: _this2
          }),
          _react2.default.createElement(
            _semanticUiReact.List.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: _this2
            },
            _react2.default.createElement(
              _semanticUiReact.List.Header,
              { as: 'a', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: _this2
              },
              file.name
            ),
            _react2.default.createElement(
              _semanticUiReact.List.Description,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: _this2
              },
              'content-type: ',
              _react2.default.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: _this2
                },
                file.type
              ),
              _react2.default.createElement(
                'span',
                { style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: _this2
                },
                ' Last Modified: ',
                _react2.default.createElement(
                  'b',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: _this2
                  },
                  ' ',
                  (0, _moment2.default)(new Date(file.lastModified), "YYYYMMDD").fromNow()
                )
              )
            )
          )
        );
      });
    }, _this.cancelUpload = function () {
      return _this.props.dispatch({
        type: _constants.CANCEL_FILE_UPLOAD
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FileUploader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          syncing = _props.syncing,
          files = _props.files,
          dispatch = _props.dispatch,
          action = _props.action,
          method = _props.method;

      return _react2.default.createElement(
        'section',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        _react2.default.createElement(
          'form',
          {
            name: 'uploadForm',
            onSubmit: this.uploadToS3,
            encType: 'multipart/form-data',
            action: action,
            method: method, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Header,
            { textAlign: 'center', __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            'Upload Records'
          ),
          _react2.default.createElement(
            _reactDropzone2.default,
            {
              name: 'files',
              className: 'dropzone-element',
              activeClassName: 'dropzone-element-active',
              acceptClassName: 'dropzone-element-accept',
              rejectClassName: 'dropzone-element-reject',
              onDrop: this.fileDrop, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { textAlign: 'center', color: 'grey', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              'Just Drag And Drop Files'
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Modal,
          { open: files.length > 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Modal.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            },
            'Files To Be Uploaded'
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Dimmer,
              { blurring: true, active: syncing, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              _react2.default.createElement(
                _semanticUiReact.Loader,
                { indeterminate: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  },
                  __self: this
                },
                'Uploading Files'
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.List,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                },
                __self: this
              },
              this.previewUploads(files)
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal.Actions,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Button, { secondary: true, onClick: this.cancelUpload, labelPosition: 'right', content: 'Cancel', __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', onClick: this.uploadToS3, type: 'submit', icon: 'checkmark', labelPosition: 'right', content: 'Upload', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return FileUploader;
}(_react.PureComponent);

exports.default = FileUploader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/AppointmentsCalendar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _CalendarDisplay = __webpack_require__(25);

var _CalendarDisplay2 = _interopRequireDefault(_CalendarDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            lineNumber: 9
          },
          __self: this
        },
        _react2.default.createElement(_CalendarDisplay2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        })
      );
    }
  }]);

  return AppointmentsCalendar;
}(_react.PureComponent);

exports.default = AppointmentsCalendar;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/CalendarDisplay.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBigCalendar = __webpack_require__(26);

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(27);

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
      return _react2.default.createElement(_reactBigCalendar2.default, Object.assign({}, this.props, { events: events, step: 15, timeslots: 8, defaultView: 'week', defaultDate: new Date(2015, 3, 12), __source: {
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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/AppointmentTerminal.js';

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppointmentTerminal.__proto__ || Object.getPrototypeOf(AppointmentTerminal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeIndex: 0
    }, _this.handleClick = function (e, titleProps) {
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
            lineNumber: 23
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 0, index: 0, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          'What is a dog?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a ',
            ' ',
            'welcome guest in many households across the world.'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 1, index: 1, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }),
          'What kinds of dogs are there?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 1, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of ',
            ' ',
            'dog that they find to be compatible with their own lifestyle and desires from a companion.'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Title,
          { active: activeIndex === 2, index: 2, onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }),
          'How do you acquire a dog?'
        ),
        _react2.default.createElement(
          _semanticUiReact.Accordion.Content,
          { active: activeIndex === 2, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
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
                lineNumber: 52
              },
              __self: this
            },
            'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to ',
            ' ',
            'assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your ',
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/Profile.js';

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

var Profile = function (_PureComponent) {
  _inherits(Profile, _PureComponent);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: 'ten wide left floated column', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.List,
            { relaxed: 'very', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.List.Item,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/daniel.jpg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              }),
              _react2.default.createElement(
                _semanticUiReact.List.Content,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _semanticUiReact.List.Header,
                  { as: 'a', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
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
                      lineNumber: 21
                    },
                    __self: this
                  },
                  'Last seen watching',
                  _react2.default.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
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
                  lineNumber: 28
                },
                __self: this
              },
              _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/stevie.jpg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              }),
              _react2.default.createElement(
                _semanticUiReact.List.Content,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _semanticUiReact.List.Header,
                  { as: 'a', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
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
                      lineNumber: 32
                    },
                    __self: this
                  },
                  'Last seen watching',
                  _react2.default.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
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
                  lineNumber: 39
                },
                __self: this
              },
              _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/small/elliot.jpg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              }),
              _react2.default.createElement(
                _semanticUiReact.List.Content,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _semanticUiReact.List.Header,
                  { as: 'a', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
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
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'Last seen watching',
                  _react2.default.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 45
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'six wide right floated column', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          _react2.default.createElement(_semanticUiReact.Card, {
            image: 'https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg',
            header: 'Elliot Baker',
            meta: 'Friend',
            extra: extra,
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.', __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Profile;
}(_react.PureComponent);

exports.default = Profile;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = __webpack_require__(31);

var prodEnv = process.env.NODE_ENV === 'production';
var assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Docs R Us</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/docs-r-us-logo.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + assetBase + '/css/app_bundle.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + assetBase + '/app_bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + (0, _server.renderToString)(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

exports.default = RenderPage;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeDoctorState = exports.setPatientState = undefined;

var _setPatientState = __webpack_require__(33);

var _setPatientState2 = _interopRequireDefault(_setPatientState);

var _normalizeDoctorState = __webpack_require__(34);

var _normalizeDoctorState2 = _interopRequireDefault(_normalizeDoctorState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setPatientState = _setPatientState2.default;
exports.normalizeDoctorState = _normalizeDoctorState2.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var setPatientState = function setPatientState(_ref) {
    var doctors = _ref.doctors,
        appointments = _ref.appointments,
        currentUser = _objectWithoutProperties(_ref, ["doctors", "appointments"]);

    return {
        doctors: doctors,
        appointments: appointments,
        currentUser: currentUser,
        connected: false
    };
};

exports.default = setPatientState;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getObjectId = function getObjectId(obj) {
  return obj.id;
};
var indexEntity = function indexEntity(entitiesLookup, entity, i) {
  entitiesLookup.byId[entity.id] = entity;
  entitiesLookup.allIds.push(entity.id);
  return entitiesLookup;
};
var indexResource = function indexResource(list) {
  return list.reduce(indexEntity, { byId: {}, allIds: [], resource: list });
};

var normalizeDoctorState = function normalizeDoctorState(_ref) {
  var patients = _ref.patients,
      appointments = _ref.appointments,
      userData = _objectWithoutProperties(_ref, ['patients', 'appointments']);

  return {
    patients: indexResource(patients),
    appointments: indexResource(appointments),
    currentUser: Object.assign({}, userData, {
      appointmentIds: appointments.map(getObjectId),
      patientsIds: patients.map(getObjectId)
    }),
    connected: false,
    patientProfile: {
      files: [],
      syncing: false,
      display: 'info'
    }
  };
};

exports.default = normalizeDoctorState;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildServerStore = exports.buildClientStore = undefined;

var _redux = __webpack_require__(8);

var _reduxLogger = __webpack_require__(36);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(37);

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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientStoreBuilder = exports.serverStoreBuilder = undefined;

var _redux = __webpack_require__(8);

var _doctor = __webpack_require__(38);

var _doctor2 = _interopRequireDefault(_doctor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverStoreBuilder = function serverStoreBuilder(state) {
  return (0, _doctor2.default)(state);
};

var clientStoreBuilder = function clientStoreBuilder(state) {
  return (0, _doctor2.default)(state);
};

exports.serverStoreBuilder = serverStoreBuilder;
exports.clientStoreBuilder = clientStoreBuilder;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(3);

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
      case _constants.PATIENT_TAB_SELECTED:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              display: action.payload
            })
          });
        }
      case _constants.EXIT_PATIENT_VIEW:
        {
          return Object.assign({}, state, {
            patientProfile: {
              files: [],
              syncing: false,
              display: 'info'
            }
          });
        }
      case _constants.CANCEL_FILE_UPLOAD:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: [],
              syncing: false
            })
          });
        }
      case _constants.PATIENT_FILES_DROPPED:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: action.payload
            })
          });
        }
      case _constants.PATIENT_FILE_REMOVED:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: action.payload
            })
          });
        }
      case _constants.PATIENT_FILES_UPLOADING:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              syncing: true
            })
          });
        }
      case _constants.PATIENT_FILES_UPLOADED:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: [],
              syncing: false
            })
          });
        }
      case _constants.PATIENT_FILES_DROPPED:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: action.payload
            })
          });
        }
    }
    return state;
  };
};

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map