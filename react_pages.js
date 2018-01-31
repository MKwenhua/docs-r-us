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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

module.exports = require("constants");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/shared/styles/Main.css
var Main = __webpack_require__(6);
var Main_default = /*#__PURE__*/__webpack_require__.n(Main);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./src/shared/styles/TopNav.css
var styles_TopNav = __webpack_require__(7);
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
          external__react_router_dom_["Link"],
          { to: '/', className: 'self-brand', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          'MKwenhua'
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'right-button', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          external__react__default.a.createElement('img', {
            className: 'button-icon hidden',
            height: '60',
            src: 'https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          })
        )
      );
    }
  }]);

  return TopNav;
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_TopNav = (TopNav_TopNav);
// EXTERNAL MODULE: external "react-router"
var external__react_router_ = __webpack_require__(8);
var external__react_router__default = /*#__PURE__*/__webpack_require__.n(external__react_router_);

// EXTERNAL MODULE: external "constants"
var external__constants_ = __webpack_require__(3);
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


// CONCATENATED MODULE: ./src/shared/pages/DoctorDashboard.js
var DoctorDashboard__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorDashboard.js';

var DoctorDashboard__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DoctorDashboard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorDashboard__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorDashboard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DoctorDashboard_DoctorDashboard = function (_PureComponent) {
  DoctorDashboard__inherits(DoctorDashboard, _PureComponent);

  function DoctorDashboard() {
    DoctorDashboard__classCallCheck(this, DoctorDashboard);

    return DoctorDashboard__possibleConstructorReturn(this, (DoctorDashboard.__proto__ || Object.getPrototypeOf(DoctorDashboard)).apply(this, arguments));
  }

  DoctorDashboard__createClass(DoctorDashboard, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'h1',
        {
          __source: {
            fileName: DoctorDashboard__jsxFileName,
            lineNumber: 6
          },
          __self: this
        },
        'Doctor Dash'
      );
    }
  }]);

  return DoctorDashboard;
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

      return external__react__default.a.createElement(
        'section',
        { className: WrapperClass[location.pathname] || 'main', __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        external__react__default.a.createElement(components_TopNav, { navStuck: false, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 33
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__react_router_dom_["Switch"],
          {
            __source: {
              fileName: MainContainer__jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/', __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            external__react__default.a.createElement(DoctorDashboard_DoctorDashboard, { location: location, __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          ),
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/bbbb', __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            external__react__default.a.createElement(
              'p',
              {
                __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              'ok'
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
var server_ = __webpack_require__(9);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// CONCATENATED MODULE: ./src/server/render_page.js

var prodEnv = process.env.NODE_ENV === 'production';
var assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var render_page_RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Docs R Us</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + assetBase + '/css/app_bundle.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + assetBase + '/app_bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + Object(server_["renderToString"])(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

/* harmony default export */ var render_page = (render_page_RenderPage);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(4);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(10);
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
  var store = store_buildServerStore(Object.assign({}, server_defaultState, { animationType: Math.random() * 2 | 0 }));
  res.send(render_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store, __source: {
        fileName: server__jsxFileName,
        lineNumber: 15
      },
      __self: _this
    },
    external__react__default.a.createElement(
      external__react_router_dom_["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: server__jsxFileName,
          lineNumber: 16
        },
        __self: _this
      },
      external__react__default.a.createElement(containers_MainContainer, {
        __source: {
          fileName: server__jsxFileName,
          lineNumber: 17
        },
        __self: _this
      })
    )
  ), store.getState()));

  res.end();
};



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map