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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/shared/styles/Main.css
var Main = __webpack_require__(7);
var Main_default = /*#__PURE__*/__webpack_require__.n(Main);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./src/shared/styles/TopNav.css
var styles_TopNav = __webpack_require__(8);
var TopNav_default = /*#__PURE__*/__webpack_require__.n(styles_TopNav);

// EXTERNAL MODULE: external "react-router-dom"
var external__react_router_dom_ = __webpack_require__(1);
var external__react_router_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_router_dom_);

// CONCATENATED MODULE: ./src/shared/components/TopNav.js
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/TopNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TopNav_TopNav = function (_React$PureComponent) {
  _inherits(TopNav, _React$PureComponent);

  function TopNav() {
    _classCallCheck(this, TopNav);

    return _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).apply(this, arguments));
  }

  _createClass(TopNav, [{
    key: 'render',
    value: function render() {
      var navStuck = this.props.navStuck;

      return external__react__default.a.createElement(
        'nav',
        { className: navStuck === false ? 'top-nav' : 'top-nav fixed', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        external__react__default.a.createElement(
          'div',
          { className: 'topbar-left', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Link"],
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
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_TopNav = (TopNav_TopNav);
// EXTERNAL MODULE: ./src/shared/styles/SideNav.css
var styles_SideNav = __webpack_require__(9);
var SideNav_default = /*#__PURE__*/__webpack_require__.n(styles_SideNav);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(3);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// CONCATENATED MODULE: ./src/shared/components/SideNav.js
var SideNav__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/SideNav.js';

var SideNav__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function SideNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideNav__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SideNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SideNav_SideNav = function (_React$PureComponent) {
  SideNav__inherits(SideNav, _React$PureComponent);

  function SideNav() {
    SideNav__classCallCheck(this, SideNav);

    return SideNav__possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  SideNav__createClass(SideNav, [{
    key: 'render',
    value: function render() {
      var expanded = this.props.expanded;

      return external__react__default.a.createElement(
        'aside',
        { className: expanded === false ? 'side-nav' : 'side-nav expanded', __source: {
            fileName: SideNav__jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'home', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 14
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            'home'
          )
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/calendar', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'calendar outline', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 18
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            'calendar'
          )
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/patients', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'address book outline', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 22
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            'patients'
          )
        )
      );
    }
  }]);

  return SideNav;
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_SideNav = (SideNav_SideNav);
// EXTERNAL MODULE: external "react-router"
var external__react_router_ = __webpack_require__(10);
var external__react_router__default = /*#__PURE__*/__webpack_require__.n(external__react_router_);

// EXTERNAL MODULE: external "constants"
var external__constants_ = __webpack_require__(4);
var external__constants__default = /*#__PURE__*/__webpack_require__.n(external__constants_);

// CONCATENATED MODULE: ./src/shared/helpers/index.js
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


// CONCATENATED MODULE: ./src/shared/pages/DoctorHome.js
var DoctorHome__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorHome.js';

var DoctorHome__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DoctorHome__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorHome__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorHome__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



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

var DoctorHome_DoctorHome = function (_PureComponent) {
  DoctorHome__inherits(DoctorHome, _PureComponent);

  function DoctorHome() {
    DoctorHome__classCallCheck(this, DoctorHome);

    return DoctorHome__possibleConstructorReturn(this, (DoctorHome.__proto__ || Object.getPrototypeOf(DoctorHome)).apply(this, arguments));
  }

  DoctorHome__createClass(DoctorHome, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: DoctorHome__jsxFileName,
            lineNumber: 59
          },
          __self: this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, { itemsPerRow: '3', items: items, __source: {
            fileName: DoctorHome__jsxFileName,
            lineNumber: 60
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Card"],
          { fluid: true, color: 'red', header: 'Activity', __source: {
              fileName: DoctorHome__jsxFileName,
              lineNumber: 61
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Card"].Content,
            {
              __source: {
                fileName: DoctorHome__jsxFileName,
                lineNumber: 62
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Card"].Header,
              {
                __source: {
                  fileName: DoctorHome__jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              'Recent Activity'
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Card"].Content,
            {
              __source: {
                fileName: DoctorHome__jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Feed"], { events: events, __source: {
                fileName: DoctorHome__jsxFileName,
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
}(external__react_["PureComponent"]);


// CONCATENATED MODULE: ./src/shared/containers/MainContainer.js
var MainContainer__jsxFileName = '/Users/pete/docs-r-us/src/shared/containers/MainContainer.js';

var MainContainer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function MainContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MainContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var WrapperClass = {
  '/': 'main'
};

var selectState = function selectState(state) {
  return state;
};

var MainContainer_MainContainer = function (_PureComponent) {
  MainContainer__inherits(MainContainer, _PureComponent);

  function MainContainer(props) {
    MainContainer__classCallCheck(this, MainContainer);

    return MainContainer__possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).call(this, props));
  }

  MainContainer__createClass(MainContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          location = _props.location;

      console.log('MainContainer this.props', this.props);
      return external__react__default.a.createElement(
        'section',
        { className: WrapperClass[location.pathname] || 'main', __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        external__react__default.a.createElement(components_TopNav, { navStuck: false, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 35
          },
          __self: this
        }),
        external__react__default.a.createElement(components_SideNav, { location: location, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 36
          },
          __self: this
        }),
        external__react__default.a.createElement(
          'div',
          { className: true ? 'page-content' : 'page-content', __source: {
              fileName: MainContainer__jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Switch"],
            {
              __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              external__react__default.a.createElement(DoctorHome_DoctorHome, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 40
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/bbbb', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 42
                },
                __self: this
              },
              external__react__default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: MainContainer__jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                },
                'ok'
              )
            )
          )
        )
      );
    }
  }]);

  return MainContainer;
}(external__react_["PureComponent"]);

/* harmony default export */ var containers_MainContainer = (Object(external__react_router_["withRouter"])(Object(external__react_redux_["connect"])(selectState)(MainContainer_MainContainer)));
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(11);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// CONCATENATED MODULE: ./src/server/render_page.js

var prodEnv = process.env.NODE_ENV === 'production';
var assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var render_page_RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Docs R Us</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + assetBase + '/css/app_bundle.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + assetBase + '/app_bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + Object(server_["renderToString"])(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

/* harmony default export */ var render_page = (render_page_RenderPage);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(5);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(12);
var external__redux_logger__default = /*#__PURE__*/__webpack_require__.n(external__redux_logger_);

// CONCATENATED MODULE: ./src/shared/reducers/main.js


/* harmony default export */ var main = (function (initialState) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case external__constants_["CONNECTED"]:
        {
          return Object.assign({}, state, {
            connected: true,
            socketId: action.payload
          });
          break;
        }
      case external__constants_["DISCONNECTED"]:
        {
          return Object.assign({}, state, {
            connected: false
          });
          break;
        }
    }
    return state;
  };
});
// CONCATENATED MODULE: ./src/shared/reducers/index.js



var reducers_serverStoreBuilder = function serverStoreBuilder(state) {
  return main(state);
};

var reducers_clientStoreBuilder = function clientStoreBuilder(state) {
  return main(state);
};


// CONCATENATED MODULE: ./src/shared/store.js




var composedStore = Object(external__redux_["compose"])(Object(external__redux_["applyMiddleware"])(external__redux_logger__default.a));

var store_buildClientStore = function buildClientStore(state) {
  return composedStore(external__redux_["createStore"])(reducers_clientStoreBuilder(state));
};
var store_buildServerStore = function buildServerStore(state) {
  return Object(external__redux_["createStore"])(reducers_serverStoreBuilder(state));
};


// CONCATENATED MODULE: ./src/server/defaultState.js
var defaultState = {
  connected: false
};

/* harmony default export */ var server_defaultState = (defaultState);
// CONCATENATED MODULE: ./src/server/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoute", function() { return server_IndexRoute; });
var server__jsxFileName = '/Users/pete/docs-r-us/src/server/index.js',
    _this = this;








var context = {
  serverSide: true
};

var server_IndexRoute = function IndexRoute(req, res) {
  console.log('\n', req.user, '\n');
  var store = store_buildServerStore(Object.assign({}, server_defaultState, { currentUser: req.user }));
  res.send(render_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store, __source: {
        fileName: server__jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    external__react__default.a.createElement(
      external__react_router_dom_["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: server__jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      external__react__default.a.createElement(containers_MainContainer, {
        __source: {
          fileName: server__jsxFileName,
          lineNumber: 18
        },
        __self: _this
      })
    )
  ), store.getState()));

  res.end();
};



/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map