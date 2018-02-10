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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
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
var external__react_redux_ = __webpack_require__(5);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./src/shared/styles/TopNav.css
var styles_TopNav = __webpack_require__(12);
var TopNav_default = /*#__PURE__*/__webpack_require__.n(styles_TopNav);

// EXTERNAL MODULE: external "react-router-dom"
var external__react_router_dom_ = __webpack_require__(3);
var external__react_router_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_router_dom_);

// EXTERNAL MODULE: external "constants"
var external__constants_ = __webpack_require__(1);
var external__constants__default = /*#__PURE__*/__webpack_require__.n(external__constants_);

// CONCATENATED MODULE: ./src/shared/elements/TopNavButtons.js
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/elements/TopNavButtons.js',
    TopNavButtons__this = this;




var TopNavButtons_currentNotications = function currentNotications(_ref) {
  var list = _ref.list;
  return list.map(function (notification, i) {
    return external__react__default.a.createElement(
      'li',
      { key: i, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: TopNavButtons__this
      },
      notification
    );
  });
};

var TopNavButtons_TopNavButtons = function TopNavButtons(_ref2) {
  var dropdown = _ref2.dropdown,
      avatar = _ref2.avatar,
      name = _ref2.name,
      notifications = _ref2.notifications,
      iconClick = _ref2.iconClick;
  return external__react__default.a.createElement(
    'div',
    { className: 'topbar-right', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: TopNavButtons__this
    },
    external__react__default.a.createElement('div', { onClick: iconClick(null), className: dropdown === 'notifications' ? 'dropdown-backface' : 'hidden', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: TopNavButtons__this
    }),
    external__react__default.a.createElement(
      'div',
      { onClick: iconClick('notifications'), className: dropdown === 'notifications' ? 'topbar-icon active' : 'topbar-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: TopNavButtons__this
      },
      external__react__default.a.createElement('i', { 'aria-hidden': 'true', className: 'alarm outline big icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: TopNavButtons__this
      }),
      external__react__default.a.createElement(
        'span',
        { className: notifications.notSeen > 0 ? 'notification-count' : 'hidden', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: TopNavButtons__this
        },
        notifications.notSeen
      ),
      external__react__default.a.createElement(
        'ul',
        { className: dropdown === 'notifications' ? 'topnav-dropdown left' : 'hidden', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: TopNavButtons__this
        },
        TopNavButtons_currentNotications(notifications)
      )
    ),
    external__react__default.a.createElement('img', { className: dropdown === 'account' ? 'topbar-avatar active' : 'topbar-avatar', src: 'https://dq8llwxgkllay.cloudfront.net/' + avatar, onClick: iconClick('account'), __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: TopNavButtons__this
    }),
    external__react__default.a.createElement('div', { onClick: iconClick(null), className: dropdown === 'account' ? 'dropdown-backface' : 'hidden', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: TopNavButtons__this
    }),
    external__react__default.a.createElement(
      'ul',
      { className: dropdown === 'account' ? 'topnav-dropdown' : 'hidden', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: TopNavButtons__this
      },
      external__react__default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: TopNavButtons__this
        },
        external__react__default.a.createElement(
          'a',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: TopNavButtons__this
          },
          'Example Item'
        )
      ),
      external__react__default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: TopNavButtons__this
        },
        external__react__default.a.createElement(
          'a',
          { href: '/logout', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: TopNavButtons__this
          },
          'Sign Out'
        )
      )
    )
  );
};

/* harmony default export */ var elements_TopNavButtons = (TopNavButtons_TopNavButtons);
// CONCATENATED MODULE: ./src/shared/elements/index.js



// CONCATENATED MODULE: ./src/shared/components/TopNav.js
var TopNav__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/TopNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TopNav_TopNav = function (_PureComponent) {
  _inherits(TopNav, _PureComponent);

  function TopNav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call.apply(_ref, [this].concat(args))), _this), _this.iconClick = function (iconType) {
      return function (e) {
        return _this.props.dispatch({
          type: external__constants_["TOP_NAV_ICON_CLICKED"],
          payload: iconType
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          navStuck = _props.navStuck,
          dropdown = _props.dropdown,
          account = _props.account,
          settings = _props.settings,
          avatar = _props.avatar,
          name = _props.name,
          notifications = _props.notifications;

      return external__react__default.a.createElement(
        'nav',
        { className: navStuck === false ? 'top-nav' : 'top-nav fixed', __source: {
            fileName: TopNav__jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        external__react__default.a.createElement(
          'div',
          { className: 'topbar-left', __source: {
              fileName: TopNav__jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Link"],
            { to: '/', className: 'brand', __source: {
                fileName: TopNav__jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            'MED-MD'
          )
        ),
        external__react__default.a.createElement(elements_TopNavButtons, {
          name: name,
          settings: settings,
          avatar: avatar,
          account: account,
          dropdown: dropdown,
          notifications: notifications,
          iconClick: this.iconClick, __source: {
            fileName: TopNav__jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      );
    }
  }]);

  return TopNav;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_TopNav = (TopNav_TopNav);
// EXTERNAL MODULE: ./src/shared/styles/SideNav.css
var styles_SideNav = __webpack_require__(13);
var SideNav_default = /*#__PURE__*/__webpack_require__.n(styles_SideNav);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// CONCATENATED MODULE: ./src/shared/components/SideNav.js
var SideNav__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/SideNav.js';

var SideNav__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function SideNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideNav__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SideNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SideNav_SideNav = function (_PureComponent) {
  SideNav__inherits(SideNav, _PureComponent);

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
          { exact: true, to: '/', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'home', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 12
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 13
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
              lineNumber: 15
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'calendar outline', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 16
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            'calendar'
          )
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/profile', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'doctor', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 20
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            'profile'
          )
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/patients', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'address book outline', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 24
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'patients'
          )
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["NavLink"],
          { to: '/appointment', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'clipboard', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 29
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
}(external__react_["PureComponent"]);

/* harmony default export */ var components_SideNav = (SideNav_SideNav);
// EXTERNAL MODULE: external "react-router"
var external__react_router_ = __webpack_require__(7);
var external__react_router__default = /*#__PURE__*/__webpack_require__.n(external__react_router_);

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

var ParseJson = function ParseJson(data) {
  if (data instanceof Object === true) {
    return data;
  }
  try {
    return JSON.parse(data || '{}');
  } catch (e) {
    return {};
  }
};


// CONCATENATED MODULE: ./src/shared/pages/doctor/Home.js
var Home__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/Home.js';

var Home__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





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
  image: 'https://dq8llwxgkllay.cloudfront.net/patient_info_photo.jpg',
  summary: 'Have Not Gotten To this Part Yet'
}, {
  date: '2 days ago',
  image: 'https://dq8llwxgkllay.cloudfront.net/patient_info_photo.jpg',
  meta: '1 Document',
  summary: 'Some Documents Have Been Added',
  extraImages: ['https://dq8llwxgkllay.cloudfront.net/record-upload-icon.png']
}, {
  date: '4 days ago',
  image: 'https://dq8llwxgkllay.cloudfront.net/patient_info_photo.jpg',
  meta: '2 X-Rays',
  summary: 'X-Rays got uploaded for a Patient',
  extraImages: ['https://dq8llwxgkllay.cloudfront.net/x-ray-chest.jpg', 'https://dq8llwxgkllay.cloudfront.net/x-ray-chest-2.jpg']
}];

var Home_Home = function (_PureComponent) {
  Home__inherits(Home, _PureComponent);

  function Home() {
    Home__classCallCheck(this, Home);

    return Home__possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  Home__createClass(Home, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { id: 'home', __source: {
            fileName: Home__jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, { itemsPerRow: '3', items: items, __source: {
            fileName: Home__jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Card"],
          { fluid: true, color: 'red', __source: {
              fileName: Home__jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Card"].Content,
            {
              __source: {
                fileName: Home__jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Card"].Header,
              {
                __source: {
                  fileName: Home__jsxFileName,
                  lineNumber: 53
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
                fileName: Home__jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Feed"], { events: events, __source: {
                fileName: Home__jsxFileName,
                lineNumber: 58
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Home;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_Home = (Home_Home);
// EXTERNAL MODULE: ./src/shared/styles/PatientsView.css
var styles_PatientsView = __webpack_require__(14);
var PatientsView_default = /*#__PURE__*/__webpack_require__.n(styles_PatientsView);

// CONCATENATED MODULE: ./src/shared/components/MatchTextHighlights.js
var MatchTextHighlights__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/MatchTextHighlights.js',
    MatchTextHighlights__this = this;




var MatchTextHighlights_matchHighlight = function matchHighlight(matchText) {
  return function (text, i) {
    return external__react__default.a.createElement(
      'span',
      { key: i, className: matchText.test(text) ? 'match-highlight' : '', __source: {
          fileName: MatchTextHighlights__jsxFileName,
          lineNumber: 7
        },
        __self: MatchTextHighlights__this
      },
      text
    );
  };
};

var MatchTextHighlights_MatchTextHighlights = function MatchTextHighlights(_ref) {
  var suggestion = _ref.suggestion,
      typed = _ref.typed;

  var regex = new RegExp('(' + typed + ')', 'gi');
  var matchText = new RegExp(typed, 'i');
  var highlightedText = suggestion.split(regex).map(MatchTextHighlights_matchHighlight(matchText));
  return external__react__default.a.createElement(
    external__semantic_ui_react_["Header"],
    {
      __source: {
        fileName: MatchTextHighlights__jsxFileName,
        lineNumber: 16
      },
      __self: MatchTextHighlights__this
    },
    highlightedText
  );
};

/* harmony default export */ var components_MatchTextHighlights = (MatchTextHighlights_MatchTextHighlights);
// CONCATENATED MODULE: ./src/shared/components/PatientListItem.js
var PatientListItem__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/PatientListItem.js',
    PatientListItem__this = this;







var PatientListItem_PatientListItem = function PatientListItem(_ref) {
  var id = _ref.id,
      typed = _ref.typed,
      fullName = _ref.fullName,
      email = _ref.email;
  return external__react__default.a.createElement(
    external__semantic_ui_react_["List"].Item,
    {
      __source: {
        fileName: PatientListItem__jsxFileName,
        lineNumber: 14
      },
      __self: PatientListItem__this
    },
    external__react__default.a.createElement(
      external__semantic_ui_react_["List"].Content,
      { floated: 'right', __source: {
          fileName: PatientListItem__jsxFileName,
          lineNumber: 15
        },
        __self: PatientListItem__this
      },
      external__react__default.a.createElement(
        external__react_router_dom_["Link"],
        { to: '/patient/' + id, __source: {
            fileName: PatientListItem__jsxFileName,
            lineNumber: 16
          },
          __self: PatientListItem__this
        },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Button"],
          { color: 'blue', __source: {
              fileName: PatientListItem__jsxFileName,
              lineNumber: 17
            },
            __self: PatientListItem__this
          },
          'View'
        )
      )
    ),
    external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: external__constants_["CDN_URI"] + 'patient_records_icon.png', __source: {
        fileName: PatientListItem__jsxFileName,
        lineNumber: 20
      },
      __self: PatientListItem__this
    }),
    external__react__default.a.createElement(
      external__semantic_ui_react_["List"].Content,
      {
        __source: {
          fileName: PatientListItem__jsxFileName,
          lineNumber: 21
        },
        __self: PatientListItem__this
      },
      external__react__default.a.createElement(
        external__react_router_dom_["Link"],
        { to: '/patient/' + id, __source: {
            fileName: PatientListItem__jsxFileName,
            lineNumber: 22
          },
          __self: PatientListItem__this
        },
        typed && external__react__default.a.createElement(components_MatchTextHighlights, { suggestion: fullName, typed: typed, __source: {
            fileName: PatientListItem__jsxFileName,
            lineNumber: 25
          },
          __self: PatientListItem__this
        }),
        !typed && external__react__default.a.createElement(
          external__semantic_ui_react_["List"].Header,
          {
            __source: {
              fileName: PatientListItem__jsxFileName,
              lineNumber: 29
            },
            __self: PatientListItem__this
          },
          fullName
        )
      ),
      external__react__default.a.createElement(
        external__semantic_ui_react_["List"].Description,
        {
          __source: {
            fileName: PatientListItem__jsxFileName,
            lineNumber: 32
          },
          __self: PatientListItem__this
        },
        'Last seen watching',
        external__react__default.a.createElement(
          'a',
          {
            __source: {
              fileName: PatientListItem__jsxFileName,
              lineNumber: 33
            },
            __self: PatientListItem__this
          },
          external__react__default.a.createElement(
            'b',
            {
              __source: {
                fileName: PatientListItem__jsxFileName,
                lineNumber: 34
              },
              __self: PatientListItem__this
            },
            'Doing something'
          )
        ),
        'yesterday.'
      )
    )
  );
};

/* harmony default export */ var components_PatientListItem = (PatientListItem_PatientListItem);
// EXTERNAL MODULE: external "action-autocomplete"
var external__action_autocomplete_ = __webpack_require__(15);
var external__action_autocomplete__default = /*#__PURE__*/__webpack_require__.n(external__action_autocomplete_);

// CONCATENATED MODULE: ./src/shared/pages/doctor/PatientsView.js
var PatientsView__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/PatientsView.js';

var PatientsView__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PatientsView__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PatientsView__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PatientsView__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var PatientsView_PatientsView = function (_PureComponent) {
  PatientsView__inherits(PatientsView, _PureComponent);

  function PatientsView(props) {
    var _this2 = this;

    PatientsView__classCallCheck(this, PatientsView);

    var _this = PatientsView__possibleConstructorReturn(this, (PatientsView.__proto__ || Object.getPrototypeOf(PatientsView)).call(this, props));

    _this.listPatientItems = function (_ref) {
      var allIds = _ref.allIds,
          byId = _ref.byId;
      return allIds.map(function (patientId, i) {
        return external__react__default.a.createElement(components_PatientListItem, Object.assign({ key: i }, byId[patientId], {
          __source: {
            fileName: PatientsView__jsxFileName,
            lineNumber: 36
          },
          __self: _this2
        }));
      });
    };

    _this.listSuggestions = function (suggestions) {
      return suggestions.map(function (patient, i) {
        return external__react__default.a.createElement(components_PatientListItem, Object.assign({ key: i, typed: _this.props.typed }, patient, {
          __source: {
            fileName: PatientsView__jsxFileName,
            lineNumber: 39
          },
          __self: _this2
        }));
      });
    };

    _this.searchType = function (e) {
      var typed = e.target.value.toLowerCase().trim();
      var suggestions = _this.AutoComplete.lookup(typed);
      console.log('suggestions', suggestions);
      _this.props.dispatch({
        type: external__constants_["SEARCH_INPUT_UPDATE"],
        payload: { typed: typed, suggestions: suggestions }
      });
    };

    var _props$patients$resou = props.patients.resource.reduce(function (obj, patient) {
      var _Object$assign;

      obj.names_email = [patient.fullName, patient.email].concat(obj.names_email);
      obj.nameMap = Object.assign({}, obj.nameMap, (_Object$assign = {}, _defineProperty(_Object$assign, patient.email, patient), _defineProperty(_Object$assign, patient.fullName, patient), _Object$assign));
      return obj;
    }, { names_email: [], nameMap: {} }),
        names_email = _props$patients$resou.names_email,
        nameMap = _props$patients$resou.nameMap;

    _this.AutoComplete = external__action_autocomplete__default()(names_email, nameMap);
    return _this;
  }

  PatientsView__createClass(PatientsView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$patients = _props.patients,
          patients = _props$patients === undefined ? [] : _props$patients,
          suggestions = _props.suggestions;

      return external__react__default.a.createElement(
        'section',
        {
          __source: {
            fileName: PatientsView__jsxFileName,
            lineNumber: 56
          },
          __self: this
        },
        external__react__default.a.createElement(
          'div',
          { className: 'ui grid', __source: {
              fileName: PatientsView__jsxFileName,
              lineNumber: 57
            },
            __self: this
          },
          external__react__default.a.createElement(
            'div',
            { className: 'fourteen wide column', __source: {
                fileName: PatientsView__jsxFileName,
                lineNumber: 58
              },
              __self: this
            },
            external__react__default.a.createElement(
              'div',
              {
                __source: {
                  fileName: PatientsView__jsxFileName,
                  lineNumber: 59
                },
                __self: this
              },
              external__react__default.a.createElement(
                'div',
                { className: 'ui fluid action input', __source: {
                    fileName: PatientsView__jsxFileName,
                    lineNumber: 60
                  },
                  __self: this
                },
                external__react__default.a.createElement('input', { onKeyUp: this.searchType, type: 'text', placeholder: 'Search...', __source: {
                    fileName: PatientsView__jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                }),
                external__react__default.a.createElement(
                  'div',
                  { className: 'ui button', __source: {
                      fileName: PatientsView__jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  'Search'
                )
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'two wide column', __source: {
                fileName: PatientsView__jsxFileName,
                lineNumber: 66
              },
              __self: this
            },
            external__react__default.a.createElement(
              'div',
              { className: 'ui fitted toggle checkbox', __source: {
                  fileName: PatientsView__jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              external__react__default.a.createElement('input', { type: 'checkbox', __source: {
                  fileName: PatientsView__jsxFileName,
                  lineNumber: 68
                },
                __self: this
              }),
              external__react__default.a.createElement('label', {
                __source: {
                  fileName: PatientsView__jsxFileName,
                  lineNumber: 69
                },
                __self: this
              })
            )
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Header"],
          { as: 'h3', dividing: true, __source: {
              fileName: PatientsView__jsxFileName,
              lineNumber: 73
            },
            __self: this
          },
          'Most Recent Patients'
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["List"],
          { divided: true, verticalAlign: 'middle', __source: {
              fileName: PatientsView__jsxFileName,
              lineNumber: 77
            },
            __self: this
          },
          suggestions.length > 0 ? this.listSuggestions(suggestions) : this.listPatientItems(patients)
        )
      );
    }
  }]);

  return PatientsView;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_PatientsView = (PatientsView_PatientsView);
// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(4);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./src/shared/styles/FileUploader.css
var styles_FileUploader = __webpack_require__(8);
var FileUploader_default = /*#__PURE__*/__webpack_require__.n(styles_FileUploader);

// EXTERNAL MODULE: external "react-dropzone"
var external__react_dropzone_ = __webpack_require__(16);
var external__react_dropzone__default = /*#__PURE__*/__webpack_require__.n(external__react_dropzone_);

// CONCATENATED MODULE: ./src/shared/components/FileUploader.js
var FileUploader__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/FileUploader.js';

var FileUploader__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function FileUploader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FileUploader__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function FileUploader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var FileUploader_uploadPreviewSrc = function uploadPreviewSrc(_ref) {
  var preview = _ref.preview,
      type = _ref.type;
  return type.includes('image') ? preview : external__constants_["CDN_URI"] + 'record-upload-icon.png';
};

var FileUploader_FileUploader = function (_PureComponent) {
  FileUploader__inherits(FileUploader, _PureComponent);

  function FileUploader() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    FileUploader__classCallCheck(this, FileUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = FileUploader__possibleConstructorReturn(this, (_ref2 = FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call.apply(_ref2, [this].concat(args))), _this), _this.fileDrop = function (files) {
      return _this.props.dispatch({
        type: external__constants_["PATIENT_FILES_DROPPED"],
        payload: files
      });
    }, _this.uploadToS3 = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          action = _this$props.action,
          files = _this$props.files,
          patientId = _this$props.patientId;

      var formData = new FormData(document.forms['uploadForm']);
      files.forEach(function (file) {
        formData.append(file.name, file, file.name);
      });
      fetch(action, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log('upload response', json);
        _this.props.dispatch({
          type: external__constants_["PATIENT_FILES_UPLOADED"],
          patientId: patientId,
          payload: {
            records: JSON.parse(json)
          }
        });
      }).catch(function (error) {
        return console.log(error);
      });
      _this.props.dispatch({ type: external__constants_["PATIENT_FILES_UPLOADING"] });
    }, _this.removeFile = function (index) {
      return function (e) {
        return _this.props.dispatch({
          type: external__constants_["PATIENT_FILE_REMOVED"],
          payload: _this.props.files.filter(function (fl, i) {
            return index !== i;
          })
        });
      };
    }, _this.previewUploads = function (files) {
      return files.map(function (file, i) {
        return external__react__default.a.createElement(
          external__semantic_ui_react_["List"].Item,
          { key: i, __source: {
              fileName: FileUploader__jsxFileName,
              lineNumber: 51
            },
            __self: _this2
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Content,
            { floated: 'right', __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 52
              },
              __self: _this2
            },
            external__react__default.a.createElement(
              'a',
              {
                __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 53
                },
                __self: _this2
              },
              external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { onClick: _this.removeFile(i), name: 'remove', size: 'large', __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 53
                },
                __self: _this2
              })
            )
          ),
          external__react__default.a.createElement(external__semantic_ui_react_["Image"], { size: 'mini', src: FileUploader_uploadPreviewSrc(file), __source: {
              fileName: FileUploader__jsxFileName,
              lineNumber: 55
            },
            __self: _this2
          }),
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Content,
            {
              __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 56
              },
              __self: _this2
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Header,
              { as: 'a', __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 57
                },
                __self: _this2
              },
              file.name
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Description,
              {
                __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 58
                },
                __self: _this2
              },
              'content-type: ',
              external__react__default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: FileUploader__jsxFileName,
                    lineNumber: 58
                  },
                  __self: _this2
                },
                file.type
              ),
              external__react__default.a.createElement(
                'span',
                { style: { marginLeft: '20px' }, __source: {
                    fileName: FileUploader__jsxFileName,
                    lineNumber: 58
                  },
                  __self: _this2
                },
                ' Last Modified: ',
                external__react__default.a.createElement(
                  'b',
                  {
                    __source: {
                      fileName: FileUploader__jsxFileName,
                      lineNumber: 58
                    },
                    __self: _this2
                  },
                  ' ',
                  external__moment__default()(new Date(file.lastModified), "YYYYMMDD").fromNow()
                )
              )
            )
          )
        );
      });
    }, _this.cancelUpload = function () {
      return _this.props.dispatch({
        type: external__constants_["CANCEL_FILE_UPLOAD"]
      });
    }, _temp), FileUploader__possibleConstructorReturn(_this, _ret);
  }

  FileUploader__createClass(FileUploader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          syncing = _props.syncing,
          files = _props.files,
          dispatch = _props.dispatch,
          action = _props.action,
          method = _props.method;

      return external__react__default.a.createElement(
        'section',
        {
          __source: {
            fileName: FileUploader__jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        external__react__default.a.createElement(
          'form',
          {
            name: 'uploadForm',
            onSubmit: this.uploadToS3,
            encType: 'multipart/form-data',
            action: action,
            method: method, __source: {
              fileName: FileUploader__jsxFileName,
              lineNumber: 69
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Header"],
            { textAlign: 'center', __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 75
              },
              __self: this
            },
            'Upload Records'
          ),
          external__react__default.a.createElement(
            external__react_dropzone__default.a,
            {
              name: 'files',
              className: 'dropzone-element',
              activeClassName: 'dropzone-element-active',
              acceptClassName: 'dropzone-element-accept',
              rejectClassName: 'dropzone-element-reject',
              onDrop: this.fileDrop, __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 76
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              { textAlign: 'center', color: 'grey', __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              'Just Drag And Drop Files'
            )
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Modal"],
          { open: files.length > 0, __source: {
              fileName: FileUploader__jsxFileName,
              lineNumber: 86
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Header,
            {
              __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 87
              },
              __self: this
            },
            'Files To Be Uploaded'
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Content,
            {
              __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 88
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Dimmer"].Dimmable,
              { dimmed: syncing, __source: {
                  fileName: FileUploader__jsxFileName,
                  lineNumber: 89
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["Dimmer"],
                { active: syncing, inverted: true, __source: {
                    fileName: FileUploader__jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                },
                external__react__default.a.createElement(
                  external__semantic_ui_react_["Loader"],
                  { indeterminate: true, __source: {
                      fileName: FileUploader__jsxFileName,
                      lineNumber: 91
                    },
                    __self: this
                  },
                  'Uploading Files'
                )
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"],
                {
                  __source: {
                    fileName: FileUploader__jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                this.previewUploads(files)
              )
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Actions,
            {
              __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 98
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { secondary: true, onClick: this.cancelUpload, labelPosition: 'right', content: 'Cancel', __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 99
              },
              __self: this
            }),
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { color: 'blue', onClick: this.uploadToS3, type: 'submit', icon: 'checkmark', labelPosition: 'right', content: 'Upload', __source: {
                fileName: FileUploader__jsxFileName,
                lineNumber: 100
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return FileUploader;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_FileUploader = (FileUploader_FileUploader);
// CONCATENATED MODULE: ./src/shared/components/RecordsList.js
var RecordsList__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var RecordsList__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/RecordsList.js',
    RecordsList__this = this;

function RecordsList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RecordsList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function RecordsList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var RecordsList_recordSrc = function recordSrc(_ref) {
  var src = _ref.src,
      type = _ref.type;
  return type.includes('image') ? external__constants_["CDN_URI"] + src : external__constants_["CDN_URI"] + 'record-upload-icon.png';
};

var RecordsList_updatedSince = function updatedSince(_ref2) {
  var updatedAt = _ref2.updatedAt;
  return external__moment__default()(new Date(updatedAt), "YYYYMMDD").fromNow();
};

var compareDates = function compareDates(a, b) {
  if (a.updatedAt < b.updatedAt) return -1;
  if (a.updatedAt > b.updatedAt) return 1;
  return 0;
};

var RecordToSortedList = function RecordToSortedList(records) {
  return Object.values(records).sort(compareDates);
};

var recordsQty = function recordsQty(data) {
  return {
    value: Object.keys(data).length,
    label: 'Qty of Records'
  };
};

var RecordsList_lastUpdate = function lastUpdate(data) {
  return {
    value: external__moment__default()(new Date(Math.max(data.map(function (record) {
      return new Date(record.updatedAt).getTime();
    }))), "YYMMDD").fromNow(),
    label: 'Most Recent Update'
  };
};

var RecordsList_BloodPressure = function BloodPressure(data) {
  return {
    value: {
      content: external__react__default.a.createElement(
        'span',
        {
          __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 54
          },
          __self: RecordsList__this
        },
        '180',
        external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'heart', __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 56
          },
          __self: RecordsList__this
        })
      )
    },
    label: 'Blood Pressure'
  };
};

var Something = function Something(data) {
  return { value: 838383, label: 'A Stat' };
};

var calcStats = function calcStats(data) {
  return [recordsQty, RecordsList_lastUpdate, RecordsList_BloodPressure].map(function (statFn) {
    return statFn(data);
  });
};

var RecordsList_RecordsList = function (_PureComponent) {
  RecordsList__inherits(RecordsList, _PureComponent);

  function RecordsList() {
    var _ref3;

    var _temp, _this2, _ret;

    RecordsList__classCallCheck(this, RecordsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = RecordsList__possibleConstructorReturn(this, (_ref3 = RecordsList.__proto__ || Object.getPrototypeOf(RecordsList)).call.apply(_ref3, [this].concat(args))), _this2), _this2.mapRecords = function (records) {
      return records.map(function (record) {
        return {
          date: RecordsList_updatedSince(record),
          image: RecordsList_recordSrc(record),
          meta: record.type,
          summary: record.name
        };
      });
    }, _temp), RecordsList__possibleConstructorReturn(_this2, _ret);
  }

  RecordsList__createClass(RecordsList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          patient = _props.patient;

      var patientRecords = ParseJson(patient.records);
      var statList = calcStats(Object.values(patientRecords));
      return external__react__default.a.createElement(
        'section',
        {
          __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 83
          },
          __self: this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Statistic"].Group, { size: 'tiny', widths: 'three', items: statList, __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 84
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Header"],
          {
            __source: {
              fileName: RecordsList__jsxFileName,
              lineNumber: 85
            },
            __self: this
          },
          'Patient Records'
        ),
        external__react__default.a.createElement(external__semantic_ui_react_["Divider"], {
          __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 88
          },
          __self: this
        }),
        external__react__default.a.createElement(external__semantic_ui_react_["Feed"], { id: 'recordFeed', events: this.mapRecords(RecordToSortedList(patientRecords)), __source: {
            fileName: RecordsList__jsxFileName,
            lineNumber: 89
          },
          __self: this
        })
      );
    }
  }]);

  return RecordsList;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_RecordsList = (RecordsList_RecordsList);
// CONCATENATED MODULE: ./src/shared/components/AppointmentsList.js
var AppointmentsList__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/AppointmentsList.js';

var AppointmentsList__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentsList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentsList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentsList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AppointmentsList_AppointmentsList = function (_PureComponent) {
  AppointmentsList__inherits(AppointmentsList, _PureComponent);

  function AppointmentsList() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    AppointmentsList__classCallCheck(this, AppointmentsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AppointmentsList__possibleConstructorReturn(this, (_ref = AppointmentsList.__proto__ || Object.getPrototypeOf(AppointmentsList)).call.apply(_ref, [this].concat(args))), _this), _this.appointmentListItem = function (_ref2) {
      var id = _ref2.id,
          purpose = _ref2.purpose,
          title = _ref2.title,
          description = _ref2.description,
          date = _ref2.date,
          time = _ref2.time;
      return external__react__default.a.createElement(
        external__semantic_ui_react_["List"].Item,
        { key: id, __source: {
            fileName: AppointmentsList__jsxFileName,
            lineNumber: 19
          },
          __self: _this2
        },
        external__react__default.a.createElement(
          external__semantic_ui_react_["List"].Content,
          { floated: 'right', __source: {
              fileName: AppointmentsList__jsxFileName,
              lineNumber: 20
            },
            __self: _this2
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Button"],
            {
              __source: {
                fileName: AppointmentsList__jsxFileName,
                lineNumber: 21
              },
              __self: _this2
            },
            'View'
          )
        ),
        external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: external__constants_["CDN_URI"] + 'calendar-icon.png', __source: {
            fileName: AppointmentsList__jsxFileName,
            lineNumber: 23
          },
          __self: _this2
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["List"].Content,
          {
            __source: {
              fileName: AppointmentsList__jsxFileName,
              lineNumber: 24
            },
            __self: _this2
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Header,
            { as: 'a', __source: {
                fileName: AppointmentsList__jsxFileName,
                lineNumber: 25
              },
              __self: _this2
            },
            title
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Description,
            {
              __source: {
                fileName: AppointmentsList__jsxFileName,
                lineNumber: 26
              },
              __self: _this2
            },
            description,
            external__react__default.a.createElement(
              'strong',
              { style: { marginLeft: '20px' }, __source: {
                  fileName: AppointmentsList__jsxFileName,
                  lineNumber: 28
                },
                __self: _this2
              },
              external__moment__default()(new Date(time)).calendar()
            )
          )
        )
      );
    }, _temp), AppointmentsList__possibleConstructorReturn(_this, _ret);
  }

  AppointmentsList__createClass(AppointmentsList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          patient = _props.patient,
          appointments = _props.appointments;

      return external__react__default.a.createElement(
        external__semantic_ui_react_["List"],
        {
          __source: {
            fileName: AppointmentsList__jsxFileName,
            lineNumber: 36
          },
          __self: this
        },
        appointments.filter(function (app) {
          return app.patientId === patient.id;
        }).map(this.appointmentListItem)
      );
    }
  }]);

  return AppointmentsList;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_AppointmentsList = (AppointmentsList_AppointmentsList);
// CONCATENATED MODULE: ./src/shared/components/PatientInfo.js
var PatientInfo__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/PatientInfo.js',
    PatientInfo__this = this;






var PatientInfo_PatientInfo = function PatientInfo(_ref) {
  var fullName = _ref.fullName,
      birthday = _ref.birthday,
      lastSeen = _ref.lastSeen;
  return external__react__default.a.createElement(
    external__semantic_ui_react_["Card"],
    {
      __source: {
        fileName: PatientInfo__jsxFileName,
        lineNumber: 9
      },
      __self: PatientInfo__this
    },
    external__react__default.a.createElement(external__semantic_ui_react_["Image"], { src: external__constants_["CDN_URI"] + 'patient_info_photo.jpg', __source: {
        fileName: PatientInfo__jsxFileName,
        lineNumber: 10
      },
      __self: PatientInfo__this
    }),
    external__react__default.a.createElement(
      external__semantic_ui_react_["Card"].Content,
      {
        __source: {
          fileName: PatientInfo__jsxFileName,
          lineNumber: 11
        },
        __self: PatientInfo__this
      },
      external__react__default.a.createElement(
        external__semantic_ui_react_["Card"].Header,
        {
          __source: {
            fileName: PatientInfo__jsxFileName,
            lineNumber: 12
          },
          __self: PatientInfo__this
        },
        fullName
      ),
      external__react__default.a.createElement(
        external__semantic_ui_react_["Card"].Meta,
        {
          __source: {
            fileName: PatientInfo__jsxFileName,
            lineNumber: 13
          },
          __self: PatientInfo__this
        },
        external__react__default.a.createElement(
          'b',
          {
            __source: {
              fileName: PatientInfo__jsxFileName,
              lineNumber: 13
            },
            __self: PatientInfo__this
          },
          'Birth Date:'
        ),
        external__moment__default()(new Date(birthday)).format('LL')
      ),
      external__react__default.a.createElement(
        external__semantic_ui_react_["Card"].Description,
        {
          __source: {
            fileName: PatientInfo__jsxFileName,
            lineNumber: 14
          },
          __self: PatientInfo__this
        },
        'Daniel is a comedian living in Nashville.'
      )
    ),
    external__react__default.a.createElement(
      external__semantic_ui_react_["Card"].Content,
      { extra: true, __source: {
          fileName: PatientInfo__jsxFileName,
          lineNumber: 16
        },
        __self: PatientInfo__this
      },
      external__react__default.a.createElement(
        'a',
        {
          __source: {
            fileName: PatientInfo__jsxFileName,
            lineNumber: 17
          },
          __self: PatientInfo__this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'user', __source: {
            fileName: PatientInfo__jsxFileName,
            lineNumber: 18
          },
          __self: PatientInfo__this
        }),
        lastSeen
      )
    )
  );
};

/* harmony default export */ var components_PatientInfo = (PatientInfo_PatientInfo);
// CONCATENATED MODULE: ./src/shared/pages/doctor/PatientProfile.js
var PatientProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/PatientProfile.js';

var PatientProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function PatientProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PatientProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PatientProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PatientProfile_PatientProfile = function (_PureComponent) {
  PatientProfile__inherits(PatientProfile, _PureComponent);

  function PatientProfile() {
    var _ref;

    var _temp, _this, _ret;

    PatientProfile__classCallCheck(this, PatientProfile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = PatientProfile__possibleConstructorReturn(this, (_ref = PatientProfile.__proto__ || Object.getPrototypeOf(PatientProfile)).call.apply(_ref, [this].concat(args))), _this), _this.toggleDisplay = function (display) {
      return function () {
        return _this.props.dispatch({
          type: external__constants_["PATIENT_TAB_SELECTED"],
          payload: display
        });
      };
    }, _temp), PatientProfile__possibleConstructorReturn(_this, _ret);
  }

  PatientProfile__createClass(PatientProfile, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch({ type: external__constants_["EXIT_PATIENT_VIEW"] });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('PatientProfile props', this.props);
      var _props = this.props,
          match = _props.match,
          patients = _props.patients,
          appointments = _props.appointments,
          display = _props.display,
          dispatch = _props.dispatch,
          syncing = _props.syncing,
          _props$files = _props.files,
          files = _props$files === undefined ? [] : _props$files;

      var patient = patients.byId[match.params.id];
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: PatientProfile__jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        external__react__default.a.createElement(
          'h1',
          {
            __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          patient.fullName
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Menu"],
          { pointing: true, secondary: true, __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Info', active: display === 'info', onClick: this.toggleDisplay('info'), __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 43
            },
            __self: this
          }),
          external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Appointments', active: display === 'appointments', onClick: this.toggleDisplay('appointments'), __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 44
            },
            __self: this
          }),
          external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Records', active: display === 'records', onClick: this.toggleDisplay('records'), __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 45
            },
            __self: this
          }),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Menu"].Menu,
            { position: 'right', __source: {
                fileName: PatientProfile__jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Upload Records', active: display === 'upload', onClick: this.toggleDisplay('upload'), __source: {
                fileName: PatientProfile__jsxFileName,
                lineNumber: 47
              },
              __self: this
            })
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Segment"],
          { className: display === 'upload' ? '' : 'hidden', __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          external__react__default.a.createElement(components_FileUploader, {
            syncing: syncing,
            files: files,
            dispatch: this.props.dispatch,
            patientId: patient.id,
            action: '/patients/' + patient.id,
            method: 'post', __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 51
            },
            __self: this
          })
        ),
        external__react__default.a.createElement(
          'section',
          { className: display === 'info' ? '' : 'hidden', __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          external__react__default.a.createElement(components_PatientInfo, Object.assign({ dispatch: dispatch }, patient, {
            __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 60
            },
            __self: this
          }))
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Segment"],
          { className: display === 'appointments' ? '' : 'hidden', __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 62
            },
            __self: this
          },
          external__react__default.a.createElement(components_AppointmentsList, { dispatch: dispatch, patient: patient, appointments: appointments, __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 63
            },
            __self: this
          })
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Segment"],
          { className: display === 'records' ? '' : 'hidden', __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 65
            },
            __self: this
          },
          external__react__default.a.createElement(components_RecordsList, { dispatch: dispatch, patient: patient, __source: {
              fileName: PatientProfile__jsxFileName,
              lineNumber: 66
            },
            __self: this
          })
        )
      );
    }
  }]);

  return PatientProfile;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_PatientProfile = (PatientProfile_PatientProfile);
// EXTERNAL MODULE: external "react-big-calendar"
var external__react_big_calendar_ = __webpack_require__(17);
var external__react_big_calendar__default = /*#__PURE__*/__webpack_require__.n(external__react_big_calendar_);

// EXTERNAL MODULE: ./src/shared/styles/BigCalendar.css
var BigCalendar = __webpack_require__(18);
var BigCalendar_default = /*#__PURE__*/__webpack_require__.n(BigCalendar);

// CONCATENATED MODULE: ./src/shared/components/CalendarDisplay.js
var CalendarDisplay__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/CalendarDisplay.js',
    CalendarDisplay__this = this;






external__react_big_calendar__default.a.setLocalizer(external__react_big_calendar__default.a.momentLocalizer(external__moment__default.a));

var CalendarDisplay_CalendarDisplay = function CalendarDisplay(props) {
  return external__react__default.a.createElement(external__react_big_calendar__default.a, Object.assign({}, props, {
    selectable: true,
    events: props.events,
    step: 60,
    defaultView: 'week',
    onSelectEvent: props.viewAppointment,
    onSelectSlot: function onSelectSlot(slotInfo) {
      console.log('slotInfo', slotInfo);
    },
    defaultDate: new Date(), __source: {
      fileName: CalendarDisplay__jsxFileName,
      lineNumber: 9
    },
    __self: CalendarDisplay__this
  }));
};

/* harmony default export */ var components_CalendarDisplay = (CalendarDisplay_CalendarDisplay);
// CONCATENATED MODULE: ./src/shared/components/AppointmentModal.js
var AppointmentModal__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/AppointmentModal.js';

var AppointmentModal__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentModal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AppointmentModal_AppointmentModal = function (_React$PureComponent) {
  AppointmentModal__inherits(AppointmentModal, _React$PureComponent);

  function AppointmentModal() {
    var _ref;

    var _temp, _this, _ret;

    AppointmentModal__classCallCheck(this, AppointmentModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AppointmentModal__possibleConstructorReturn(this, (_ref = AppointmentModal.__proto__ || Object.getPrototypeOf(AppointmentModal)).call.apply(_ref, [this].concat(args))), _this), _this.submitAppointmentChange = function (e) {
      var _this$props = _this.props,
          status = _this$props.status,
          response = _this$props.response,
          id = _this$props.id;

      fetch('/appointments/' + id, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: status, response: response })
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this.props.dispatch({
          type: external__constants_["APPOINTMENT_RECORD_UPDATED"],
          id: id,
          payload: JSON.parse(json)
        });
      }).catch(function (err) {
        return console.log('APPOINTMENT_RECORD_UPDATED err', err);
      });
    }, _this.updateAppointmentStatus = function (status) {
      return function (e) {
        return _this.props.dispatch({
          type: external__constants_["EDIT_APPOINTMENT_STATUS"],
          payload: status
        });
      };
    }, _this.close = function (e) {
      return _this.props.dispatch({ type: external__constants_["CLOSE_APPOINTMENT_MODAL"] });
    }, _this.updateComment = function (e) {
      return _this.props.dispatch({
        type: external__constants_["EDIT_APPOINTMENT_EVENT"],
        response: e.target.value.trim()
      });
    }, _this.sendForUpdate = function (e) {
      return _this.props.dispatch({ type: external__constants_["REQUEST_APPOINTMENT_CHANGE"] });
    }, _this.goBack = function (e) {
      return _this.props.dispatch({ type: external__constants_["APPOINTMENT_VIEW_BACK"] });
    }, _temp), AppointmentModal__possibleConstructorReturn(_this, _ret);
  }

  AppointmentModal__createClass(AppointmentModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          description = _props.description,
          purpose = _props.purpose,
          response = _props.response,
          start = _props.start,
          end = _props.end,
          step = _props.step,
          status = _props.status,
          title = _props.title,
          patientId = _props.patientId,
          id = _props.id,
          patient = _props.patient;

      return external__react__default.a.createElement(
        external__semantic_ui_react_["Modal"],
        { open: patientId !== undefined, __source: {
            fileName: AppointmentModal__jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Modal"].Header,
          {
            __source: {
              fileName: AppointmentModal__jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Image"], { circular: true, avatar: true, src: external__constants_["CDN_URI"] + 'patient_info_photo.jpg', __source: {
              fileName: AppointmentModal__jsxFileName,
              lineNumber: 67
            },
            __self: this
          }),
          ' ',
          ' Appointment Purpose: ',
          purpose
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Modal"].Content,
          {
            __source: {
              fileName: AppointmentModal__jsxFileName,
              lineNumber: 70
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Description,
            { className: step === 'view' ? '' : 'hidden', __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 71
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              {
                __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 72
                },
                __self: this
              },
              title
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              { as: 'h4', floated: 'right', __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              'Time:',
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                {
                  __source: {
                    fileName: AppointmentModal__jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                },
                external__moment__default()(start).format('ll') + ' at: ' + external__moment__default()(start).format('LT')
              )
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              { as: 'h4', __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 81
                },
                __self: this
              },
              'Description:',
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                {
                  __source: {
                    fileName: AppointmentModal__jsxFileName,
                    lineNumber: 83
                  },
                  __self: this
                },
                description
              )
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Description,
            { className: step === 'confirm' ? '' : 'hidden', __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 88
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              {
                __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 89
                },
                __self: this
              },
              'Confirm Changes'
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              { as: 'h4', floated: 'right', __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 90
                },
                __self: this
              },
              'Status:',
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                {
                  __source: {
                    fileName: AppointmentModal__jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                },
                external__react__default.a.createElement(
                  external__semantic_ui_react_["Label"],
                  { basic: true, color: 'blue', __source: {
                      fileName: AppointmentModal__jsxFileName,
                      lineNumber: 93
                    },
                    __self: this
                  },
                  status
                )
              )
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Form"],
              {
                __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 96
                },
                __self: this
              },
              external__react__default.a.createElement(
                'label',
                {
                  __source: {
                    fileName: AppointmentModal__jsxFileName,
                    lineNumber: 97
                  },
                  __self: this
                },
                'Optional'
              ),
              external__react__default.a.createElement(external__semantic_ui_react_["TextArea"], { onKeyUp: this.updateComment, fluid: true, defaultValue: response, placeholder: 'Leave comment for why. . . ', __source: {
                  fileName: AppointmentModal__jsxFileName,
                  lineNumber: 98
                },
                __self: this
              })
            )
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Modal"].Actions,
          {
            __source: {
              fileName: AppointmentModal__jsxFileName,
              lineNumber: 102
            },
            __self: this
          },
          status === 'pending' && external__react__default.a.createElement(
            'div',
            {
              __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 105
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { floated: 'left', content: 'close', color: 'grey', onClick: this.close, __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 106
              },
              __self: this
            }),
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { color: 'grey', content: 'Decline', onClick: this.updateAppointmentStatus('rejected'), __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 107
              },
              __self: this
            }),
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { icon: 'check', color: 'green', content: 'Accept', labelPosition: 'right', onClick: this.updateAppointmentStatus('accepted'), __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 108
              },
              __self: this
            })
          ),
          status !== 'pending' && step !== 'confirm' && external__react__default.a.createElement(external__semantic_ui_react_["Button"], { content: 'Cancel', onClick: this.updateAppointmentStatus('canceled'), __source: {
              fileName: AppointmentModal__jsxFileName,
              lineNumber: 114
            },
            __self: this
          }),
          step === 'confirm' && external__react__default.a.createElement(
            'div',
            {
              __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 119
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { floated: 'left', content: 'Go Back', labelPosition: 'left', icon: 'arrow left', color: 'teal', onClick: this.goBack, __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 120
              },
              __self: this
            }),
            external__react__default.a.createElement(external__semantic_ui_react_["Button"], { icon: 'send', content: 'Confirm', labelPosition: 'right', color: 'blue', onClick: this.submitAppointmentChange, __source: {
                fileName: AppointmentModal__jsxFileName,
                lineNumber: 121
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return AppointmentModal;
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_AppointmentModal = (AppointmentModal_AppointmentModal);
// CONCATENATED MODULE: ./src/shared/pages/doctor/AppointmentsCalendar.js
var AppointmentsCalendar__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/AppointmentsCalendar.js';

var AppointmentsCalendar__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentsCalendar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentsCalendar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentsCalendar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var addHours = function addHours(date) {
  return function (h) {
    return new Date(date.setHours(date.getHours() + h));
  };
};

var AppointmentsCalendar_AppointmentsCalendar = function (_PureComponent) {
  AppointmentsCalendar__inherits(AppointmentsCalendar, _PureComponent);

  function AppointmentsCalendar() {
    var _ref;

    var _temp, _this, _ret;

    AppointmentsCalendar__classCallCheck(this, AppointmentsCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AppointmentsCalendar__possibleConstructorReturn(this, (_ref = AppointmentsCalendar.__proto__ || Object.getPrototypeOf(AppointmentsCalendar)).call.apply(_ref, [this].concat(args))), _this), _this.mapEvents = function (appointments) {
      return appointments.allIds.map(function (eventId) {
        return Object.assign({}, appointments.byId[eventId], {
          start: new Date(appointments.byId[eventId].time),
          end: addHours(new Date(appointments.byId[eventId].time))(1)
        });
      }).filter(function (event) {
        return event.status !== 'rejected' || event.status !== 'canceled';
      });
    }, _this.viewAppointment = function (event) {
      return _this.props.dispatch({
        type: external__constants_["VIEW_APPOINTMENT"],
        payload: event
      });
    }, _temp), AppointmentsCalendar__possibleConstructorReturn(_this, _ret);
  }

  AppointmentsCalendar__createClass(AppointmentsCalendar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          patients = _props.patients,
          appointments = _props.appointments,
          selectedEvent = _props.selectedEvent,
          dispatch = _props.dispatch;

      console.log('AppointmentsCalendar this.props', this.props);
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: AppointmentsCalendar__jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        external__react__default.a.createElement(components_CalendarDisplay, { events: this.mapEvents(appointments), dispatch: dispatch, viewAppointment: this.viewAppointment, patients: patients, __source: {
            fileName: AppointmentsCalendar__jsxFileName,
            lineNumber: 28
          },
          __self: this
        }),
        external__react__default.a.createElement(components_AppointmentModal, Object.assign({}, selectedEvent, { dispatch: dispatch, __source: {
            fileName: AppointmentsCalendar__jsxFileName,
            lineNumber: 29
          },
          __self: this
        }))
      );
    }
  }]);

  return AppointmentsCalendar;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_AppointmentsCalendar = (AppointmentsCalendar_AppointmentsCalendar);
// CONCATENATED MODULE: ./src/shared/pages/doctor/AppointmentTerminal.js
var AppointmentTerminal__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/AppointmentTerminal.js';

var AppointmentTerminal__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentTerminal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentTerminal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentTerminal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AppointmentTerminal_AppointmentTerminal = function (_PureComponent) {
  AppointmentTerminal__inherits(AppointmentTerminal, _PureComponent);

  function AppointmentTerminal() {
    AppointmentTerminal__classCallCheck(this, AppointmentTerminal);

    return AppointmentTerminal__possibleConstructorReturn(this, (AppointmentTerminal.__proto__ || Object.getPrototypeOf(AppointmentTerminal)).apply(this, arguments));
  }

  AppointmentTerminal__createClass(AppointmentTerminal, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'h1',
        {
          __source: {
            fileName: AppointmentTerminal__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        'Not Yet Implemented'
      );
    }
  }]);

  return AppointmentTerminal;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_AppointmentTerminal = (AppointmentTerminal_AppointmentTerminal);
// CONCATENATED MODULE: ./src/shared/pages/doctor/Profile.js
var Profile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var Profile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/doctor/Profile.js',
    Profile__this = this;

function Profile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Profile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Profile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Profile_extraStat = function extraStat(num) {
  return external__react__default.a.createElement(
    'a',
    {
      __source: {
        fileName: Profile__jsxFileName,
        lineNumber: 5
      },
      __self: Profile__this
    },
    external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'doctor', __source: {
        fileName: Profile__jsxFileName,
        lineNumber: 6
      },
      __self: Profile__this
    }),
    num,
    ' Patients'
  );
};

var Profile_Profile = function (_PureComponent) {
  Profile__inherits(Profile, _PureComponent);

  function Profile() {
    Profile__classCallCheck(this, Profile);

    return Profile__possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  Profile__createClass(Profile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          patients = _props.patients,
          appointments = _props.appointments,
          fullName = _props.fullName,
          photo = _props.photo,
          specialty = _props.specialty;

      return external__react__default.a.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: Profile__jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        external__react__default.a.createElement(
          'div',
          { className: 'ten wide left floated column', __source: {
              fileName: Profile__jsxFileName,
              lineNumber: 16
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"],
            { relaxed: 'very', __source: {
                fileName: Profile__jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Item,
              {
                __source: {
                  fileName: Profile__jsxFileName,
                  lineNumber: 18
                },
                __self: this
              },
              external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: external__constants_["CDN_URI"] + 'calendar-icon.png', __source: {
                  fileName: Profile__jsxFileName,
                  lineNumber: 19
                },
                __self: this
              }),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Content,
                {
                  __source: {
                    fileName: Profile__jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                external__react__default.a.createElement(
                  external__semantic_ui_react_["List"].Header,
                  { as: 'a', __source: {
                      fileName: Profile__jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  'Feed Item'
                ),
                external__react__default.a.createElement(
                  external__semantic_ui_react_["List"].Description,
                  {
                    __source: {
                      fileName: Profile__jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
                  'Here I will list events that occurred on this table item',
                  external__react__default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: Profile__jsxFileName,
                        lineNumber: 23
                      },
                      __self: this
                    },
                    external__react__default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: Profile__jsxFileName,
                          lineNumber: 24
                        },
                        __self: this
                      },
                      'A Link to the feed item'
                    )
                  ),
                  'just now.'
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'six wide right floated column', __source: {
              fileName: Profile__jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Card"], {
            image: 'https://dq8llwxgkllay.cloudfront.net/' + photo,
            header: fullName,
            meta: specialty,
            extra: Profile_extraStat(patients.resource.length),
            description: 'John Hopkins MD', __source: {
              fileName: Profile__jsxFileName,
              lineNumber: 32
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Profile;
}(external__react_["PureComponent"]);

/* harmony default export */ var doctor_Profile = (Profile_Profile);
// CONCATENATED MODULE: ./src/shared/pages/doctor/index.js








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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          location = _props.location,
          match = _props.match,
          currentUser = _props.currentUser,
          appointments = _props.appointments,
          patients = _props.patients,
          patientProfile = _props.patientProfile,
          patientsView = _props.patientsView,
          calendarView = _props.calendarView,
          topNav = _props.topNav;

      console.log('MainContainer this.props', this.props);
      return external__react__default.a.createElement(
        'section',
        { className: WrapperClass[location.pathname] || 'main', __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        external__react__default.a.createElement(components_TopNav, Object.assign({}, topNav, { dispatch: dispatch, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 50
          },
          __self: this
        })),
        external__react__default.a.createElement(components_SideNav, { location: location, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        external__react__default.a.createElement(
          'div',
          { className: true ? 'page-content' : 'page-content', __source: {
              fileName: MainContainer__jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Switch"],
            {
              __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 53
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 54
                },
                __self: this
              },
              external__react__default.a.createElement(doctor_Home, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 55
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/patients', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              external__react__default.a.createElement(doctor_PatientsView, Object.assign({ currentUser: currentUser }, patientsView, { patients: patients, dispatch: dispatch, location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 58
                },
                __self: this
              }))
            ),
            external__react__default.a.createElement(external__react_router_dom_["Route"], { path: '/patient/:id', render: function render(props) {
                return external__react__default.a.createElement(doctor_PatientProfile, Object.assign({ currentUser: currentUser }, patientProfile, { appointments: appointments.resource, patients: patients, dispatch: dispatch, location: location }, props, {
                  __source: {
                    fileName: MainContainer__jsxFileName,
                    lineNumber: 61
                  },
                  __self: _this2
                }));
              }, __source: {
                fileName: MainContainer__jsxFileName,
                lineNumber: 60
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/calendar', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              external__react__default.a.createElement(doctor_AppointmentsCalendar, Object.assign({ appointments: appointments }, calendarView, { currentUser: currentUser, patients: patients, dispatch: dispatch, location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 64
                },
                __self: this
              }))
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { path: '/appointment/:id', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              external__react__default.a.createElement(doctor_AppointmentTerminal, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 67
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/profile', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              external__react__default.a.createElement(doctor_Profile, Object.assign({ appointments: appointments, patients: patients }, currentUser, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 70
                },
                __self: this
              }))
            )
          )
        )
      );
    }
  }]);

  return MainContainer;
}(external__react_["PureComponent"]);

/* harmony default export */ var containers_MainContainer = (Object(external__react_router_["withRouter"])(Object(external__react_redux_["connect"])(selectState)(MainContainer_MainContainer)));
// CONCATENATED MODULE: ./src/shared/pages/booking/Landing.js
var Landing__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/booking/Landing.js';

var Landing__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Landing__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Landing__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Landing__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Landing_Landing = function (_PureComponent) {
  Landing__inherits(Landing, _PureComponent);

  function Landing() {
    Landing__classCallCheck(this, Landing);

    return Landing__possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  Landing__createClass(Landing, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: Landing__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        external__react__default.a.createElement(
          'h1',
          {
            __source: {
              fileName: Landing__jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          'Landing'
        )
      );
    }
  }]);

  return Landing;
}(external__react_["PureComponent"]);

/* harmony default export */ var booking_Landing = (Landing_Landing);
// CONCATENATED MODULE: ./src/shared/pages/booking/DoctorProfile.js
var DoctorProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/booking/DoctorProfile.js';

var DoctorProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DoctorProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DoctorProfile_DoctorProfile = function (_PureComponent) {
  DoctorProfile__inherits(DoctorProfile, _PureComponent);

  function DoctorProfile() {
    DoctorProfile__classCallCheck(this, DoctorProfile);

    return DoctorProfile__possibleConstructorReturn(this, (DoctorProfile.__proto__ || Object.getPrototypeOf(DoctorProfile)).apply(this, arguments));
  }

  DoctorProfile__createClass(DoctorProfile, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: DoctorProfile__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        external__react__default.a.createElement(
          'h1',
          {
            __source: {
              fileName: DoctorProfile__jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          'PatientProfile'
        )
      );
    }
  }]);

  return DoctorProfile;
}(external__react_["PureComponent"]);

/* harmony default export */ var booking_DoctorProfile = (DoctorProfile_DoctorProfile);
// CONCATENATED MODULE: ./src/shared/pages/booking/HospitalProfile.js
var HospitalProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/booking/HospitalProfile.js';

var HospitalProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function HospitalProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HospitalProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function HospitalProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HospitalProfile_HospitalProfile = function (_PureComponent) {
  HospitalProfile__inherits(HospitalProfile, _PureComponent);

  function HospitalProfile() {
    HospitalProfile__classCallCheck(this, HospitalProfile);

    return HospitalProfile__possibleConstructorReturn(this, (HospitalProfile.__proto__ || Object.getPrototypeOf(HospitalProfile)).apply(this, arguments));
  }

  HospitalProfile__createClass(HospitalProfile, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: HospitalProfile__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        external__react__default.a.createElement(
          'h1',
          {
            __source: {
              fileName: HospitalProfile__jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          'HospitalProfile'
        )
      );
    }
  }]);

  return HospitalProfile;
}(external__react_["PureComponent"]);

/* harmony default export */ var booking_HospitalProfile = (HospitalProfile_HospitalProfile);
// CONCATENATED MODULE: ./src/shared/pages/booking/PatientProfile.js
var booking_PatientProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/booking/PatientProfile.js';

var booking_PatientProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function booking_PatientProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function booking_PatientProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function booking_PatientProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var booking_PatientProfile_PatientProfile = function (_PureComponent) {
  booking_PatientProfile__inherits(PatientProfile, _PureComponent);

  function PatientProfile() {
    booking_PatientProfile__classCallCheck(this, PatientProfile);

    return booking_PatientProfile__possibleConstructorReturn(this, (PatientProfile.__proto__ || Object.getPrototypeOf(PatientProfile)).apply(this, arguments));
  }

  booking_PatientProfile__createClass(PatientProfile, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'ui grid', __source: {
            fileName: booking_PatientProfile__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        external__react__default.a.createElement(
          'h1',
          {
            __source: {
              fileName: booking_PatientProfile__jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          'PatientProfile'
        )
      );
    }
  }]);

  return PatientProfile;
}(external__react_["PureComponent"]);

/* harmony default export */ var booking_PatientProfile = (booking_PatientProfile_PatientProfile);
// CONCATENATED MODULE: ./src/shared/pages/booking/index.js






// CONCATENATED MODULE: ./src/shared/containers/BookingContainer.js
var BookingContainer__jsxFileName = '/Users/pete/docs-r-us/src/shared/containers/BookingContainer.js';

var BookingContainer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BookingContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BookingContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BookingContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var BookingContainer_WrapperClass = {
  '/': 'main'
};

var BookingContainer_selectState = function selectState(state) {
  return state;
};

var BookingContainer_BookingContainer = function (_PureComponent) {
  BookingContainer__inherits(BookingContainer, _PureComponent);

  function BookingContainer(props) {
    BookingContainer__classCallCheck(this, BookingContainer);

    return BookingContainer__possibleConstructorReturn(this, (BookingContainer.__proto__ || Object.getPrototypeOf(BookingContainer)).call(this, props));
  }

  BookingContainer__createClass(BookingContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          location = _props.location,
          match = _props.match,
          currentUser = _props.currentUser;

      console.log('BookingContainer this.props', this.props);
      return external__react__default.a.createElement(
        'section',
        { className: BookingContainer_WrapperClass[location.pathname] || 'main', __source: {
            fileName: BookingContainer__jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        external__react__default.a.createElement(
          'div',
          { className: true ? 'page-content' : 'page-content', __source: {
              fileName: BookingContainer__jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__react_router_dom_["Switch"],
            {
              __source: {
                fileName: BookingContainer__jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/', __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              external__react__default.a.createElement(booking_Landing, { location: location, __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 45
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(external__react_router_dom_["Route"], { path: '/hospital/:id', render: function render(props) {
                return external__react__default.a.createElement(booking_HospitalProfile, Object.assign({ currentUser: currentUser }, patientProfile, { appointments: appointments.resource, patients: patients, dispatch: dispatch, location: location }, props, {
                  __source: {
                    fileName: BookingContainer__jsxFileName,
                    lineNumber: 48
                  },
                  __self: _this2
                }));
              }, __source: {
                fileName: BookingContainer__jsxFileName,
                lineNumber: 47
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/calendar', __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 50
                },
                __self: this
              },
              external__react__default.a.createElement(AppointmentsCalendar, Object.assign({ appointments: appointments }, calendarView, { currentUser: currentUser, patients: patients, dispatch: dispatch, location: location, __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 51
                },
                __self: this
              }))
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { path: '/doctor/:id', __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              external__react__default.a.createElement(booking_DoctorProfile, { location: location, __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 54
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/profile', __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              external__react__default.a.createElement(booking_PatientProfile, Object.assign({ appointments: appointments, patients: patients }, currentUser, { location: location, __source: {
                  fileName: BookingContainer__jsxFileName,
                  lineNumber: 57
                },
                __self: this
              }))
            )
          )
        )
      );
    }
  }]);

  return BookingContainer;
}(external__react_["PureComponent"]);

/* harmony default export */ var containers_BookingContainer = (Object(external__react_router_["withRouter"])(Object(external__react_redux_["connect"])(BookingContainer_selectState)(BookingContainer_BookingContainer)));
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(9);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// CONCATENATED MODULE: ./src/server/render_page.js

var prodEnv = process.env.NODE_ENV === 'production';
var assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var render_page_RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Docs R Us</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/xing-icon.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + assetBase + '/css/app_bundle.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + assetBase + '/app_bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + Object(server_["renderToString"])(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

/* harmony default export */ var render_page = (render_page_RenderPage);
// CONCATENATED MODULE: ./src/server/render_booking_page.js

var render_booking_page_prodEnv = process.env.NODE_ENV === 'production';
var render_booking_page_assetBase = render_booking_page_prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

var render_booking_page_RenderBookingPage = function RenderBookingPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>Find Doctors</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/xing-icon.png">\n      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      <link rel="stylesheet" href="' + render_booking_page_assetBase + '/css/booking.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n      <script src="' + render_booking_page_assetBase + '/booking.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + Object(server_["renderToString"])(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

/* harmony default export */ var render_booking_page = (render_booking_page_RenderBookingPage);
// CONCATENATED MODULE: ./src/shared/state/setPatientState.js
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

/* harmony default export */ var state_setPatientState = (setPatientState);
// CONCATENATED MODULE: ./src/shared/state/normalizeDoctorState.js
function normalizeDoctorState__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getObjectId = function getObjectId(obj) {
  return obj.id;
};
var indexEntity = function indexEntity(entitiesLookup, entity, i) {
  entitiesLookup.byId[entity.id] = entity;
  entitiesLookup.allIds.push(entity.id);
  return entitiesLookup;
};

var indexResource = function indexResource(list) {
  return list.reduce(indexEntity, {
    byId: {},
    allIds: [],
    resource: list
  });
};

var normalizeDoctorState = function normalizeDoctorState(_ref) {
  var patients = _ref.patients,
      appointments = _ref.appointments,
      userData = normalizeDoctorState__objectWithoutProperties(_ref, ['patients', 'appointments']);

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
    },
    topNav: {
      dropdown: null,
      navStuck: false,
      avatar: userData.photo,
      name: userData.fullName,
      notifications: {
        notSeen: 3,
        list: ['notifcation 1', 'notifcation 2', 'notifcation 3']
      },
      settings: {}
    },
    patientsView: {
      typed: '',
      filters: [],
      suggestions: [],
      searchFocus: false
    },
    calendarView: {
      selectedEvent: {}
    }
  };
};

/* harmony default export */ var state_normalizeDoctorState = (normalizeDoctorState);
// CONCATENATED MODULE: ./src/shared/state/index.js




// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(10);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(19);
var external__redux_logger__default = /*#__PURE__*/__webpack_require__.n(external__redux_logger_);

// CONCATENATED MODULE: ./src/shared/reducers/doctor.js
function doctor__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var doctor = (function (initialState) {
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
      case external__constants_["VIEW_APPOINTMENT"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: Object.assign({
                syncing: false,
                step: 'view'
              }, action.payload)
            })
          });
        }
      case external__constants_["TOP_NAV_ICON_CLICKED"]:
        {
          return Object.assign({}, state, {
            topNav: Object.assign({}, state.topNav, {
              dropdown: action.payload === state.topNav.dropdown ? null : action.payload
            })
          });
        }
      case external__constants_["EDIT_APPOINTMENT_EVENT"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: Object.assign({}, state.calendarView.selectedEvent, {
                response: action.payload
              })
            })
          });
        }
      case external__constants_["EDIT_APPOINTMENT_STATUS"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: Object.assign({}, state.calendarView.selectedEvent, {
                step: 'confirm',
                status: action.payload
              })
            })
          });
        }
      case external__constants_["REQUEST_APPOINTMENT_CHANGE"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: Object.assign({}, state.calendarView.selectedEvent, {
                syncing: true
              })
            })
          });
        }
      case external__constants_["APPOINTMENT_VIEW_BACK"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: Object.assign({}, state.calendarView.selectedEvent, {
                step: 'view',
                status: 'pending'
              })
            })
          });
        }
      case external__constants_["CLOSE_APPOINTMENT_MODAL"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: {}
            })
          });
        }
      case external__constants_["APPOINTMENT_RECORD_UPDATED"]:
        {
          return Object.assign({}, state, {
            calendarView: Object.assign({}, state.calendarView, {
              selectedEvent: {}
            }),
            appointments: Object.assign({}, state.appointments, {
              byId: Object.assign({}, state.appointments.byId, doctor__defineProperty({}, action.id, Object.assign({}, state.appointments.byId[action.id], action.payload)))
            })
          });
        }
      case external__constants_["SEARCH_INPUT_UPDATE"]:
        {
          return Object.assign({}, state, {
            patientsView: Object.assign({}, state.patientsView, action.payload)
          });
        }
      case external__constants_["PATIENTS_VIEW_RESET"]:
        {
          return Object.assign({}, state, {
            patientsView: {
              typed: '',
              filters: [],
              suggestions: [],
              searchFocus: false
            }
          });
        }
      case external__constants_["PATIENT_TAB_SELECTED"]:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              display: action.payload
            })
          });
        }
      case external__constants_["EXIT_PATIENT_VIEW"]:
        {
          return Object.assign({}, state, {
            patientProfile: {
              files: [],
              syncing: false,
              display: 'info'
            }
          });
        }
      case external__constants_["CANCEL_FILE_UPLOAD"]:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: [],
              syncing: false
            })
          });
        }
      case external__constants_["PATIENT_FILES_DROPPED"]:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: action.payload
            })
          });
        }
      case external__constants_["PATIENT_FILE_REMOVED"]:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              files: action.payload
            })
          });
        }
      case external__constants_["PATIENT_FILES_UPLOADING"]:
        {
          return Object.assign({}, state, {
            patientProfile: Object.assign({}, state.patientProfile, {
              syncing: true
            })
          });
        }
      case external__constants_["PATIENT_FILES_UPLOADED"]:
        {
          return Object.assign({}, state, {
            patients: Object.assign({}, state.patients, {
              byId: Object.assign({}, state.patients.byId, doctor__defineProperty({}, action.patientId, Object.assign({}, state.patients.byId[action.patientId], action.payload)))
            }),
            patientProfile: Object.assign({}, state.patientProfile, {
              files: [],
              syncing: false,
              display: 'records'
            })
          });
        }
      case external__constants_["PATIENT_FILES_DROPPED"]:
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
});
// CONCATENATED MODULE: ./src/shared/reducers/index.js




var reducers_serverStoreBuilder = function serverStoreBuilder(state) {
  return doctor(state);
};

var reducers_clientStoreBuilder = function clientStoreBuilder(state) {
  return doctor(state);
};

var reducers_serverBookingStoreBuilder = function serverBookingStoreBuilder(state) {
  return doctor(state);
};

var reducers_clientBookingStoreBuilder = function clientBookingStoreBuilder(state) {
  return doctor(state);
};


// CONCATENATED MODULE: ./src/shared/store.js




var composedStore = Object(external__redux_["compose"])(Object(external__redux_["applyMiddleware"])(external__redux_logger__default.a));

var store_buildClientStore = function buildClientStore(state) {
  return composedStore(external__redux_["createStore"])(reducers_clientStoreBuilder(state));
};
var store_buildServerStore = function buildServerStore(state) {
  return Object(external__redux_["createStore"])(reducers_serverStoreBuilder(state));
};
var store_buildBookingClientStore = function buildBookingClientStore(state) {
  return composedStore(external__redux_["createStore"])(reducers_clientBookingStoreBuilder(state));
};
var store_buildBookingServerStore = function buildBookingServerStore(state) {
  return Object(external__redux_["createStore"])(reducers_serverBookingStoreBuilder(state));
};


// CONCATENATED MODULE: ./src/server/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPortal", function() { return RoutingPortal; });
var server__jsxFileName = '/Users/pete/docs-r-us/src/server/index.js',
    server__this = this;











var context = {
  serverSide: true
};

var server_IndexRoute = function IndexRoute(req, res) {
  var store = store_buildServerStore(state_normalizeDoctorState(req.user.dataValues));
  res.send(render_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store, __source: {
        fileName: server__jsxFileName,
        lineNumber: 24
      },
      __self: server__this
    },
    external__react__default.a.createElement(
      external__react_router_dom_["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: server__jsxFileName,
          lineNumber: 25
        },
        __self: server__this
      },
      external__react__default.a.createElement(containers_MainContainer, {
        __source: {
          fileName: server__jsxFileName,
          lineNumber: 26
        },
        __self: server__this
      })
    )
  ), store.getState()));
  res.end();
};

var server_BookingRoute = function BookingRoute(req, res) {
  var store = store_buildBookingServerStore(state_setPatientState(req.user.dataValues));
  res.send(render_booking_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store, __source: {
        fileName: server__jsxFileName,
        lineNumber: 37
      },
      __self: server__this
    },
    external__react__default.a.createElement(
      external__react_router_dom_["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: server__jsxFileName,
          lineNumber: 38
        },
        __self: server__this
      },
      external__react__default.a.createElement(containers_BookingContainer, {
        __source: {
          fileName: server__jsxFileName,
          lineNumber: 39
        },
        __self: server__this
      })
    )
  ), store.getState()));

  res.end();
};

var RoutingPortal = function RoutingPortal(req, res) {
  console.log('\n req.user.userType', req.user.userType);
  if (req.user.userType === 'doctor') {
    server_IndexRoute(req, res);
  } else {
    server_BookingRoute(req, res);
  }
};



/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("action-autocomplete");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map