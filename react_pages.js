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

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
var external__react_redux_ = __webpack_require__(3);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./src/shared/styles/TopNav.css
var styles_TopNav = __webpack_require__(8);
var TopNav_default = /*#__PURE__*/__webpack_require__.n(styles_TopNav);

// EXTERNAL MODULE: external "react-router-dom"
var external__react_router_dom_ = __webpack_require__(2);
var external__react_router_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_router_dom_);

// CONCATENATED MODULE: ./src/shared/components/TopNav.js
var _jsxFileName = '/Users/pete/docs-r-us/src/shared/components/TopNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TopNav_TopNav = function (_PureComponent) {
  _inherits(TopNav, _PureComponent);

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
}(external__react_["PureComponent"]);

/* harmony default export */ var components_TopNav = (TopNav_TopNav);
// EXTERNAL MODULE: ./src/shared/styles/SideNav.css
var styles_SideNav = __webpack_require__(9);
var SideNav_default = /*#__PURE__*/__webpack_require__.n(styles_SideNav);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
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
          { to: '/profile', className: 'side-link', activeClassName: 'selected', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'doctor', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 24
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
              lineNumber: 26
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'address book outline', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 28
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
              lineNumber: 30
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'clipboard', size: 'big', __source: {
              fileName: SideNav__jsxFileName,
              lineNumber: 31
            },
            __self: this
          }),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: SideNav__jsxFileName,
                lineNumber: 32
              },
              __self: this
            },
            'appointment'
          )
        )
      );
    }
  }]);

  return SideNav;
}(external__react_["PureComponent"]);

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


// CONCATENATED MODULE: ./src/shared/pages/DoctorPatientsView.js
var DoctorPatientsView__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorPatientsView.js';

var DoctorPatientsView__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DoctorPatientsView__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorPatientsView__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorPatientsView__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DoctorPatientsView_DoctorPatientsView = function (_PureComponent) {
  DoctorPatientsView__inherits(DoctorPatientsView, _PureComponent);

  function DoctorPatientsView() {
    DoctorPatientsView__classCallCheck(this, DoctorPatientsView);

    return DoctorPatientsView__possibleConstructorReturn(this, (DoctorPatientsView.__proto__ || Object.getPrototypeOf(DoctorPatientsView)).apply(this, arguments));
  }

  DoctorPatientsView__createClass(DoctorPatientsView, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: DoctorPatientsView__jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Statistic"],
          {
            __source: {
              fileName: DoctorPatientsView__jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Statistic"].Value,
            {
              __source: {
                fileName: DoctorPatientsView__jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            '5,550'
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Statistic"].Label,
            {
              __source: {
                fileName: DoctorPatientsView__jsxFileName,
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
}(external__react_["PureComponent"]);


// CONCATENATED MODULE: ./src/shared/pages/DoctorPatientProfile.js
var DoctorPatientProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var DoctorPatientProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorPatientProfile.js';

function DoctorPatientProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorPatientProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorPatientProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var extra = external__react__default.a.createElement(
  'a',
  {
    __source: {
      fileName: DoctorPatientProfile__jsxFileName,
      lineNumber: 5
    },
    __self: this
  },
  external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'user', __source: {
      fileName: DoctorPatientProfile__jsxFileName,
      lineNumber: 6
    },
    __self: this
  }),
  '16 Friends'
);

var DoctorPatientProfile_DoctorPatientProfile = function (_PureComponent) {
  DoctorPatientProfile__inherits(DoctorPatientProfile, _PureComponent);

  function DoctorPatientProfile() {
    DoctorPatientProfile__classCallCheck(this, DoctorPatientProfile);

    return DoctorPatientProfile__possibleConstructorReturn(this, (DoctorPatientProfile.__proto__ || Object.getPrototypeOf(DoctorPatientProfile)).apply(this, arguments));
  }

  DoctorPatientProfile__createClass(DoctorPatientProfile, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: DoctorPatientProfile__jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Card"], {
          image: 'https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg',
          header: 'Elliot Baker',
          meta: 'Friend',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
          extra: extra, __source: {
            fileName: DoctorPatientProfile__jsxFileName,
            lineNumber: 14
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["List"],
          { relaxed: 'very', __source: {
              fileName: DoctorPatientProfile__jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/daniel.jpg', __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 23
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorPatientProfile__jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                'Daniel Louise'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorPatientProfile__jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorPatientProfile__jsxFileName,
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
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/stevie.jpg', __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 34
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorPatientProfile__jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                'Stevie Feliciano'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorPatientProfile__jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorPatientProfile__jsxFileName,
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
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/elliot.jpg', __source: {
                fileName: DoctorPatientProfile__jsxFileName,
                lineNumber: 45
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorPatientProfile__jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                'Elliot Fu'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorPatientProfile__jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorPatientProfile__jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorPatientProfile__jsxFileName,
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
}(external__react_["PureComponent"]);


// EXTERNAL MODULE: external "react-big-calendar"
var external__react_big_calendar_ = __webpack_require__(11);
var external__react_big_calendar__default = /*#__PURE__*/__webpack_require__.n(external__react_big_calendar_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(12);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./src/shared/components/CalendarDisplay.js
var CalendarDisplay__jsxFileName = '/Users/pete/docs-r-us/src/shared/components/CalendarDisplay.js';

var CalendarDisplay__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function CalendarDisplay__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CalendarDisplay__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function CalendarDisplay__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





external__react_big_calendar__default.a.setLocalizer(external__react_big_calendar__default.a.momentLocalizer(external__moment__default.a));

var CalendarDisplay_events = [{
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

var CalendarDisplay_CalendarDisplay = function (_PureComponent) {
  CalendarDisplay__inherits(CalendarDisplay, _PureComponent);

  function CalendarDisplay() {
    CalendarDisplay__classCallCheck(this, CalendarDisplay);

    return CalendarDisplay__possibleConstructorReturn(this, (CalendarDisplay.__proto__ || Object.getPrototypeOf(CalendarDisplay)).apply(this, arguments));
  }

  CalendarDisplay__createClass(CalendarDisplay, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(external__react_big_calendar__default.a, Object.assign({}, this.props, {
        events: CalendarDisplay_events,
        step: 15,
        timeslots: 8,
        defaultView: 'week',
        defaultDate: new Date(2015, 3, 12), __source: {
          fileName: CalendarDisplay__jsxFileName,
          lineNumber: 89
        },
        __self: this
      }));
    }
  }]);

  return CalendarDisplay;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_CalendarDisplay = (CalendarDisplay_CalendarDisplay);
// CONCATENATED MODULE: ./src/shared/pages/AppointmentsCalendar.js
var AppointmentsCalendar__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/AppointmentsCalendar.js';

var AppointmentsCalendar__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentsCalendar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentsCalendar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentsCalendar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AppointmentsCalendar_AppointmentsCalendar = function (_PureComponent) {
  AppointmentsCalendar__inherits(AppointmentsCalendar, _PureComponent);

  function AppointmentsCalendar() {
    AppointmentsCalendar__classCallCheck(this, AppointmentsCalendar);

    return AppointmentsCalendar__possibleConstructorReturn(this, (AppointmentsCalendar.__proto__ || Object.getPrototypeOf(AppointmentsCalendar)).apply(this, arguments));
  }

  AppointmentsCalendar__createClass(AppointmentsCalendar, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          __source: {
            fileName: AppointmentsCalendar__jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        external__react__default.a.createElement(components_CalendarDisplay, {
          __source: {
            fileName: AppointmentsCalendar__jsxFileName,
            lineNumber: 9
          },
          __self: this
        })
      );
    }
  }]);

  return AppointmentsCalendar;
}(external__react_["PureComponent"]);


// CONCATENATED MODULE: ./src/shared/pages/AppointmentTerminal.js
var AppointmentTerminal__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/AppointmentTerminal.js';

var AppointmentTerminal__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function AppointmentTerminal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppointmentTerminal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppointmentTerminal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AppointmentTerminal_AppointmentTerminal = function (_PureComponent) {
  AppointmentTerminal__inherits(AppointmentTerminal, _PureComponent);

  function AppointmentTerminal() {
    var _ref;

    var _temp, _this, _ret;

    AppointmentTerminal__classCallCheck(this, AppointmentTerminal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AppointmentTerminal__possibleConstructorReturn(this, (_ref = AppointmentTerminal.__proto__ || Object.getPrototypeOf(AppointmentTerminal)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: 0 }, _this.handleClick = function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({ activeIndex: newIndex });
    }, _temp), AppointmentTerminal__possibleConstructorReturn(_this, _ret);
  }

  AppointmentTerminal__createClass(AppointmentTerminal, [{
    key: 'render',
    value: function render() {
      var activeIndex = this.state.activeIndex;


      return external__react__default.a.createElement(
        external__semantic_ui_react_["Accordion"],
        { styled: true, __source: {
            fileName: AppointmentTerminal__jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Title,
          { active: activeIndex === 0, index: 0, onClick: this.handleClick, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'dropdown', __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          'What is a dog?'
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Content,
          { active: activeIndex === 0, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: AppointmentTerminal__jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a',
            ' ',
            'welcome guest in many households across the world.'
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Title,
          { active: activeIndex === 1, index: 1, onClick: this.handleClick, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'dropdown', __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 32
            },
            __self: this
          }),
          'What kinds of dogs are there?'
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Content,
          { active: activeIndex === 1, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: AppointmentTerminal__jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of',
            ' ',
            'dog that they find to be compatible with their own lifestyle and desires from a companion.'
          )
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Title,
          { active: activeIndex === 2, index: 2, onClick: this.handleClick, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'dropdown', __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 43
            },
            __self: this
          }),
          'How do you acquire a dog?'
        ),
        external__react__default.a.createElement(
          external__semantic_ui_react_["Accordion"].Content,
          { active: activeIndex === 2, __source: {
              fileName: AppointmentTerminal__jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: AppointmentTerminal__jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
          ),
          external__react__default.a.createElement(
            'p',
            {
              __source: {
                fileName: AppointmentTerminal__jsxFileName,
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
}(external__react_["PureComponent"]);


// CONCATENATED MODULE: ./src/shared/pages/DoctorProfile.js
var DoctorProfile__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var DoctorProfile__jsxFileName = '/Users/pete/docs-r-us/src/shared/pages/DoctorProfile.js';

function DoctorProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DoctorProfile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DoctorProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DoctorProfile_extra = external__react__default.a.createElement(
  'a',
  {
    __source: {
      fileName: DoctorProfile__jsxFileName,
      lineNumber: 5
    },
    __self: this
  },
  external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'user', __source: {
      fileName: DoctorProfile__jsxFileName,
      lineNumber: 6
    },
    __self: this
  }),
  '16 Friends'
);

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
        {
          __source: {
            fileName: DoctorProfile__jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        external__react__default.a.createElement(external__semantic_ui_react_["Card"], {
          image: 'https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg',
          header: 'Elliot Baker',
          meta: 'Friend',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
          extra: DoctorProfile_extra, __source: {
            fileName: DoctorProfile__jsxFileName,
            lineNumber: 15
          },
          __self: this
        }),
        external__react__default.a.createElement(
          external__semantic_ui_react_["List"],
          { relaxed: 'very', __source: {
              fileName: DoctorProfile__jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/daniel.jpg', __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 24
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorProfile__jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'Daniel Louise'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 27
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorProfile__jsxFileName,
                      lineNumber: 28
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorProfile__jsxFileName,
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
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/stevie.jpg', __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 35
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorProfile__jsxFileName,
                  lineNumber: 36
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                'Stevie Feliciano'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorProfile__jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorProfile__jsxFileName,
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
          external__react__default.a.createElement(
            external__semantic_ui_react_["List"].Item,
            {
              __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Image"], { avatar: true, src: '/assets/images/avatar/small/elliot.jpg', __source: {
                fileName: DoctorProfile__jsxFileName,
                lineNumber: 46
              },
              __self: this
            }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["List"].Content,
              {
                __source: {
                  fileName: DoctorProfile__jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Header,
                { as: 'a', __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                'Elliot Fu'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["List"].Description,
                {
                  __source: {
                    fileName: DoctorProfile__jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                },
                'Last seen watching',
                external__react__default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: DoctorProfile__jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  },
                  external__react__default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: DoctorProfile__jsxFileName,
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
            lineNumber: 49
          },
          __self: this
        },
        external__react__default.a.createElement(components_TopNav, { navStuck: false, __source: {
            fileName: MainContainer__jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
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
              external__react__default.a.createElement(DoctorHome_DoctorHome, { location: location, __source: {
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
              external__react__default.a.createElement(DoctorPatientsView_DoctorPatientsView, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 58
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/patient/:id', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 60
                },
                __self: this
              },
              external__react__default.a.createElement(DoctorPatientProfile_DoctorPatientProfile, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 61
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { exact: true, path: '/appointments', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              external__react__default.a.createElement(AppointmentsCalendar_AppointmentsCalendar, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 64
                },
                __self: this
              })
            ),
            external__react__default.a.createElement(
              external__react_router_dom_["Route"],
              { path: '/appointment/:id', __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              external__react__default.a.createElement(AppointmentTerminal_AppointmentTerminal, { location: location, __source: {
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
              external__react__default.a.createElement(DoctorProfile_DoctorProfile, { location: location, __source: {
                  fileName: MainContainer__jsxFileName,
                  lineNumber: 70
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
}(external__react_["PureComponent"]);

/* harmony default export */ var containers_MainContainer = (Object(external__react_router_["withRouter"])(Object(external__react_redux_["connect"])(selectState)(MainContainer_MainContainer)));
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(13);
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
var external__redux_logger_ = __webpack_require__(14);
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
  var store = store_buildServerStore(Object.assign({}, server_defaultState, { currentUser: req.user }));
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

module.exports = require("react-big-calendar");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })
/******/ ]);
//# sourceMappingURL=react_pages.js.map