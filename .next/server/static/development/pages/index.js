module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/danyaowang/SideProject/Ellen/components/Navbar.js";





var Navbar = function Navbar(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: "navbar navbar-expand navbar-dark bg-dark mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, t('name')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, t('home')))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "nav-item dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, t('service')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, t('visit')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/immigration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, t('immigration')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, t('work')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/study",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, t('study')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, t('other')))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contactus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "nav-link ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, t('contact')))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "nav-item",
    onClick: function onClick() {
      return _i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].language === 'en' ? 'zh' : 'en');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "nav-link ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, t('change-locale')))))));
};

Navbar.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Navbar.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('common')(Navbar));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/danyaowang/SideProject/Ellen/components/footer.js";

 // This is our initialised `NextI18Next` instance



var Footer = function Footer(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: " p-3 mb-2 bg-light text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
    className: "page-footer font-small grey pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container text-center text-md-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-6 mt-md-0 mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, t('name')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Here you can use rows and columns to organize your footer content.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-3 mb-md-0 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, t('location')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Link 1")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-3 mb-md-0 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, t('contact')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Tel: +1 (613) 261-3579")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Email: Ellen25sun@gmail.com")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "wechat: Canada613health")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "footer-copyright text-center py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\xA9 2019 Copyright:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://mdbootstrap.com/education/bootstrap/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " MDBootstrap.com"))));
};

Footer.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(Footer));

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "/Users/danyaowang/SideProject/Ellen/components/layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "EllenSunImmigrationCorp."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/lux/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var localeSubpaths = __webpack_require__(/*! next/config */ "next/config")["default"]().publicRuntimeConfig.localeSubpaths;

var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

module.exports = new NextI18Next({
  otherLanguages: ['zh'],
  localeSubpaths: localeSubpaths
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/i18next/dist/cjs/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/cjs/i18next.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _objectSpread = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));
var _classCallCheck = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _assertThisInitialized = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inherits = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _toConsumableArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _slicedToArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger =
/*#__PURE__*/
function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      var _this2 = this;

      if (!this.observers[event]) {
        return;
      }

      this.observers[event].forEach(function () {
        if (!listener) {
          delete _this2.observers[event];
        } else {
          var index = _this2.observers[event].indexOf(listener);

          if (index > -1) {
            _this2.observers[event].splice(index, 1);
          }
        }
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

// http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */

  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/* eslint-disable */

var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}

var ResourceStore =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck(this, ResourceStore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceStore).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  _createClass(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      /* eslint no-restricted-syntax: 0 */
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

      if (this.options.compatibilityAPI === 'v1') return _objectSpread({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var Translator =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Translator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Translator).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        /* eslint prefer-rest-params: 0 */
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {}; // non valid keys handling

      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)]; // separators

      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator; // get namespace(s)

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      } // resolve from store


      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays; // object

      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        } // if we got a separator we loop over children - else we just return object as is
        // as having it set to false means no hierarchy so no lookup for nested values


        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

          /* eslint no-restricted-syntax: 0 */

          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, _objectSpread({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        // array special treatment
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        // string, empty or null
        var usedDefault = false;
        var usedKey = false; // fallback value

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        } // save missing


        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        } // extend


        res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key); // parseMissingKeyHandler

        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      } // return


      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        // i18next.parsing
        if (options.interpolation) this.interpolator.init(_objectSpread({}, options, {
          interpolation: _objectSpread({}, this.options.interpolation, options.interpolation)
        })); // interpolate

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options); // nesting

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      } // post process


      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey; // plain key

      var exactUsedKey; // key with context / plural

      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys]; // forEach possible key

      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;
          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count); // fallback for plural if context not found

              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context)); // get key for plural if needed

              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only


            var possibleKey;
            /* eslint no-cond-assign: 0 */

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil =
/*#__PURE__*/
function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      // http://www.iana.org/assignments/language-tags/language-tags.xhtml
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || []; // asume we have an object defining fallbacks

      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this.isWhitelisted(c)) {
          codes.push(c);
        } else {
          _this.logger.warn("rejecting non-whitelisted language code: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

/* eslint-disable */

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver =
/*#__PURE__*/
function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  _createClass(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        // if (rule.numbers.length === 1) return ''; // only singular
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        }; // COMPATIBILITY JSON
        // v1


        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (
        /* v2 */
        this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (
        /* v3 - gettext index */
        this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator =
/*#__PURE__*/
function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.init(options, true);
  }
  /* eslint no-param-reassign: 0 */


  _createClass(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var reset = arguments.length > 1 ? arguments[1] : undefined;

      if (reset) {
        this.options = options;

        this.format = options.interpolation && options.interpolation.format || function (value) {
          return value;
        };
      }

      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      // the regexp
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) return getPath(data, key);
        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPath(data, k), f, lng);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0; // unescape if has unescapePrefix/Suffix

      /* eslint no-cond-assign: 0 */

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());
        str = str.replace(match[0], value);
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0; // regular escape on demand

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread({}, options);

      clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup
      // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

      function handleHasOptions(key, inheritedOptions) {
        if (key.indexOf(',') < 0) return key;
        var p = key.split(',');
        key = p.shift();
        var optionsString = p.join(',');
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.error("failed parsing options string in nesting for key ".concat(key), e);
        }

        return key;
      } // regular escape on demand


      while (match = this.nestingRegexp.exec(str)) {
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions); // is only the nesting key (key1 = '$(key2)') return the value without stringify

        if (value && match[0] === str && typeof value !== 'string') return value; // no string to include or empty

        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        } // Nested keys should not be escaped by default #854
        // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);


        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Connector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.backend = backend;
    _this.store = store;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      // find what needs to be loaded
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2; // loaded
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1; // pending

            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var _name$split = name.split('|'),
          _name$split2 = _slicedToArray(_name$split, 2),
          lng = _name$split2[0],
          ns = _name$split2[1];

      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      } // set loaded


      this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

      var loaded = {}; // callback if ready

      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          // only do once per loaded -> this.emit('loaded', q.loaded);
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          /* eslint no-param-reassign: 0 */

          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      }); // emit consolidated loaded event

      this.emit('loaded', loaded); // remove done load requests

      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {}); // noting to load

      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data
        /* = retryFlag */
        && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

        return null; // pendings will trigger callback
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _name$split3 = name.split('|'),
          _name$split4 = _slicedToArray(_name$split3, 2),
          lng = _name$split4[0],
          ns = _name$split4[1];

      this.read(lng, ns, 'read', null, null, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null
        /* unused callback */
        , _objectSpread({}, options, {
          isUpdate: isUpdate
        }));
      } // write to store to avoid resending


      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    // string or array of namespaces
    whitelist: false,
    // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all',
    // | currentOnly | languageOnly
    preload: false,
    // array with preload languages
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    // allow bundling certain languages that are not remotely fetched
    saveMissing: false,
    // enable to send missing values
    updateMissing: false,
    // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback',
    // 'current' || 'all'
    saveMissingPlurals: true,
    // will save all forms not only singular key
    missingKeyHandler: false,
    // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false,
    // function(str, match)
    postProcess: false,
    // string or array of postProcessor names
    returnNull: true,
    // allows null value as valid translation
    returnEmptyString: true,
    // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false,
    // or string to join array
    returnedObjectHandler: false,
    // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false,
    // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop

    }
  };
}
/* eslint no-param-reassign: 0 */

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, I18n);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = _objectSpread({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      } // init services


      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options); // pipe events from backendConnector

        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options); // pipe events from translator

        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      } // append api


      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "loadResources",
    value: function loadResources() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!this.language) {
          // at least load fallbacks in this case
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(this.language);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, callback);
      } else {
        callback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        _this4.translator.changeLanguage(l);

        if (l) {
          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options = _objectSpread({}, opts);

        if (_typeof(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this6 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      }); // Exit early if all given languages are already preloaded

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this7 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this7[m];
      });
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options; // sync options

      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

module.exports = i18next;


/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/Link.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/Link.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

__webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">

  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.

  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var removeWithTranslationProps = function removeWithTranslationProps(props) {
  var strippedProps = Object.assign({}, props);
  delete strippedProps.defaultNS;
  delete strippedProps.i18n;
  delete strippedProps.i18nOptions;
  delete strippedProps.lng;
  delete strippedProps.reportNS;
  delete strippedProps.t;
  delete strippedProps.tReady;
  return strippedProps;
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Link, _React$Component);

  function Link() {
    (0, _classCallCheck2["default"])(this, Link);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));
  }

  (0, _createClass2["default"])(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          children = _this$props.children,
          href = _this$props.href,
          i18n = _this$props.i18n,
          nextI18NextInternals = _this$props.nextI18NextInternals,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["as", "children", "href", "i18n", "nextI18NextInternals"]);
      var language = i18n.language;

      if ((0, _utils.localeSubpathRequired)(nextI18NextInternals, language)) {
        var config = nextI18NextInternals.config;

        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: href
        }, language),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
          href: correctedHref,
          as: correctedAs
        }, removeWithTranslationProps(props)), children);
      }

      return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
        href: href,
        as: as
      }, removeWithTranslationProps(props)), children);
    }
  }]);
  return Link;
}(_react["default"].Component);

Link.propTypes = {
  as: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  nextI18NextInternals: _propTypes["default"].shape({
    config: _propTypes["default"].shape({
      defaultLanguage: _propTypes["default"].string.isRequired,
      localeSubpaths: _propTypes["default"].string.isRequired
    }).isRequired
  }).isRequired
};
Link.defaultProps = {
  as: undefined
  /*
    Usage of `withTranslation` here is just to
    force `Link` to rerender on language change
  */

};

var _default = (0, _reactI18next.withTranslation)()(Link);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var NextStaticProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NextStaticProvider, _React$Component);

  function NextStaticProvider() {
    (0, _classCallCheck2["default"])(this, NextStaticProvider);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NextStaticProvider).apply(this, arguments));
  }

  (0, _createClass2["default"])(NextStaticProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tReady = _this$props.tReady;
      return tReady ? children : null;
    }
  }]);
  return NextStaticProvider;
}(_react["default"].Component);

NextStaticProvider.defaultProps = {
  tReady: true
};
NextStaticProvider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  tReady: _propTypes["default"].bool
};

var _default = (0, _reactI18next.withTranslation)()(NextStaticProvider);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link["default"];
  }
});
Object.defineProperty(exports, "NextStaticProvider", {
  enumerable: true,
  get: function get() {
    return _NextStaticProvider["default"];
  }
});

var _Link = _interopRequireDefault(__webpack_require__(/*! ./Link */ "./node_modules/next-i18next/dist/commonjs/components/Link.js"));

var _NextStaticProvider = _interopRequireDefault(__webpack_require__(/*! ./NextStaticProvider */ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/create-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/create-config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defaultConfig = _interopRequireWildcard(__webpack_require__(/*! ./default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js"));

var deepMergeObjects = ['backend', 'detection'];

var _default = function _default(userConfig) {
  if (typeof userConfig.localeSubpaths === 'boolean') {
    throw new Error('The localeSubpaths option has been changed to a string: "none", "foreign", or "all"');
  } // Initial merge of default and user-provided config


  var combinedConfig = (0, _objectSpread2["default"])({}, _defaultConfig["default"], userConfig); // Sensible defaults to prevent user duplication

  combinedConfig.allLanguages = combinedConfig.otherLanguages.concat([combinedConfig.defaultLanguage]);
  combinedConfig.whitelist = combinedConfig.allLanguages;
  var allLanguages = combinedConfig.allLanguages,
      defaultLanguage = combinedConfig.defaultLanguage,
      localeExtension = combinedConfig.localeExtension,
      localePath = combinedConfig.localePath,
      localeStructure = combinedConfig.localeStructure;

  if (_defaultConfig.isServer) {
    var fs = eval("require('fs')");

    var path = __webpack_require__(/*! path */ "path"); // Validate defaultNS
    // https://github.com/isaachinman/next-i18next/issues/358


    if ( true && typeof combinedConfig.defaultNS === 'string') {
      var defaultNSPath = path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage, "/").concat(combinedConfig.defaultNS, ".").concat(localeExtension));
      var defaultNSExists = fs.existsSync(defaultNSPath);

      if (!defaultNSExists) {
        throw new Error("Default namespace not found at ".concat(defaultNSPath));
      }
    } // Set server side backend


    combinedConfig.backend = {
      loadPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension)),
      addPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)) // Set server side preload (languages and namespaces)

    };
    combinedConfig.preload = allLanguages;

    if (!combinedConfig.ns) {
      var getAllNamespaces = function getAllNamespaces(p) {
        return fs.readdirSync(p).map(function (file) {
          return file.replace(".".concat(localeExtension), '');
        });
      };

      combinedConfig.ns = getAllNamespaces(path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage)));
    }
  } else {
    // Set client side backend
    combinedConfig.backend = {
      loadPath: "/".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension),
      addPath: "/".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)
    };
    combinedConfig.ns = [combinedConfig.defaultNS];
  } // Set fallback language to defaultLanguage in production


  if (!userConfig.fallbackLng) {
    combinedConfig.fallbackLng =  false ? undefined : false;
  } // Deep merge with overwrite - goes last


  deepMergeObjects.forEach(function (obj) {
    if (userConfig[obj]) {
      combinedConfig[obj] = (0, _objectSpread2["default"])({}, _defaultConfig["default"][obj], userConfig[obj]);
    }
  });
  return combinedConfig;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/default-config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/default-config.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.localeSubpathOptions = exports.isServer = void 0;

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var isServer = _detectNode["default"] && !false;
exports.isServer = isServer;
var localeSubpathOptions = {
  ALL: 'all',
  FOREIGN: 'foreign',
  NONE: 'none'
};
exports.localeSubpathOptions = localeSubpathOptions;
var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_EXTENSION = 'json';
var LOCALE_SUBPATHS = localeSubpathOptions.NONE;
var config = {
  defaultLanguage: DEFAULT_LANGUAGE,
  otherLanguages: OTHER_LANGUAGES,
  load: 'currentOnly',
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  localeExtension: LOCALE_EXTENSION,
  localeSubpaths: LOCALE_SUBPATHS,
  use: [],
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format) {
      return _format === 'uppercase' ? value.toUpperCase() : value;
    }
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  ignoreRoutes: ['/_next', '/static'],
  customDetectors: [],
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie']
  },
  react: {
    wait: true,
    useSuspense: false
  },
  strictMode: true,
  errorStackTraceLimit: 0
};
var _default = config;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/create-i18next-client.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var _i18next = _interopRequireDefault(__webpack_require__(/*! i18next */ "./node_modules/i18next/dist/cjs/i18next.js"));

var _i18nextXhrBackend = _interopRequireDefault(__webpack_require__(/*! i18next-xhr-backend */ "i18next-xhr-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(__webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector"));

var i18n = _i18next["default"]["default"] ? _i18next["default"]["default"] : _i18next["default"];

var _default = function _default(config) {
  if (!i18n.isInitialized) {
    if (_detectNode["default"]) {
      var i18nextNodeBackend = eval("require('i18next-node-fs-backend')");
      var i18nextMiddleware = eval("require('i18next-express-middleware')");
      i18n.use(i18nextNodeBackend);

      if (config.serverLanguageDetection) {
        var serverDetectors = new i18nextMiddleware.LanguageDetector();
        config.customDetectors.forEach(function (detector) {
          return serverDetectors.addDetector(detector);
        });
        i18n.use(serverDetectors);
      }
    } else {
      i18n.use(_i18nextXhrBackend["default"]);

      if (config.browserLanguageDetection) {
        var browserDetectors = new _i18nextBrowserLanguagedetector["default"]();
        config.customDetectors.forEach(function (detector) {
          return browserDetectors.addDetector(detector);
        });
        i18n.use(browserDetectors);
      }
    }

    config.use.forEach(function (x) {
      return i18n.use(x);
    });
    i18n.init(config);
  }

  return i18n;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

__webpack_require__(/*! core-js/modules/es6.date.to-json */ "core-js/modules/es6.date.to-json");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

__webpack_require__(/*! core-js/modules/es6.array.is-array */ "core-js/modules/es6.array.is-array");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! core-js/modules/es7.object.entries */ "core-js/modules/es7.object.entries");

__webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.function.bind */ "core-js/modules/es6.function.bind");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

__webpack_require__(/*! core-js/modules/es6.array.filter */ "core-js/modules/es6.array.filter");

__webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");

__webpack_require__(/*! core-js/modules/es6.promise */ "core-js/modules/es6.promise");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");

__webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! next/router */ "next/router");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _components = __webpack_require__(/*! ../components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

function _default(WrappedComponent) {
  var WrappedComponentWithSSR = (0, _reactI18next.withSSR)()(WrappedComponent);
  var config = this.config,
      consoleMessage = this.consoleMessage,
      i18n = this.i18n;

  var clientLoadNamespaces = function clientLoadNamespaces(lng, namespaces) {
    return Promise.all(namespaces.filter(function (ns) {
      return !i18n.hasResourceBundle(lng, ns);
    }).map(function (ns) {
      return i18n.reloadResources(lng, ns);
    }));
  };

  var AppWithTranslation =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(AppWithTranslation, _React$Component);

    function AppWithTranslation(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, AppWithTranslation);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AppWithTranslation).call(this, props));
      i18n.on('languageChanged', function (lng) {
        var router = props.router;
        var pathname = router.pathname,
            asPath = router.asPath,
            query = router.query;
        var routeInfo = {
          pathname: pathname,
          query: query
        };

        if (false) { var _lngPathCorrector, as, href; }
      });
      var changeLanguage = i18n.changeLanguage.bind(i18n);
      i18n.changeLanguage =
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var lng,
            usedNamespaces,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lng = _args.length <= 0 ? undefined : _args[0];

                if (!(typeof lng === 'string' && i18n.initializedLanguageOnce === true)) {
                  _context.next = 5;
                  break;
                }

                usedNamespaces = Object.entries(i18n.reportNamespaces.usedNamespaces).filter(function (x) {
                  return x[1] === true;
                }).map(function (x) {
                  return x[0];
                });
                _context.next = 5;
                return clientLoadNamespaces(lng, usedNamespaces);

              case 5:
                return _context.abrupt("return", changeLanguage.apply(void 0, _args));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _this;
    }

    (0, _createClass2["default"])(AppWithTranslation, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            initialLanguage = _this$props.initialLanguage,
            initialI18nStore = _this$props.initialI18nStore,
            i18nServerInstance = _this$props.i18nServerInstance;
        return _react["default"].createElement(_reactI18next.I18nextProvider, {
          i18n: i18nServerInstance || i18n
        }, _react["default"].createElement(_components.NextStaticProvider, null, _react["default"].createElement(WrappedComponentWithSSR, (0, _extends2["default"])({
          initialLanguage: initialLanguage,
          initialI18nStore: initialI18nStore
        }, this.props))));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee2(ctx) {
          var wrappedComponentProps, req, initialI18nStore, initialLanguage, i18nServerInstance, namespacesRequired, fallbackLng, languagesToLoad;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  wrappedComponentProps = {
                    pageProps: {}
                  };

                  if (!WrappedComponent.getInitialProps) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return WrappedComponent.getInitialProps(ctx);

                case 4:
                  wrappedComponentProps = _context2.sent;

                case 5:
                  if (typeof wrappedComponentProps.pageProps === 'undefined') {
                    consoleMessage('error', 'If you have a getInitialProps method in your custom _app.js file, you must explicitly return pageProps. For more information, see: https://github.com/zeit/next.js#custom-app');
                  } // Initiate vars to return


                  req = ctx.ctx.req;
                  initialI18nStore = {};
                  initialLanguage = null;
                  i18nServerInstance = null; // Step 1: Determine initial language

                  if (!(req && req.i18n)) {
                    _context2.next = 16;
                    break;
                  }

                  initialLanguage = (0, _utils.lngFromReq)(req); // Perform a lang change in case we're not on the right lang

                  _context2.next = 14;
                  return req.i18n.changeLanguage(initialLanguage);

                case 14:
                  _context2.next = 17;
                  break;

                case 16:
                  if (Array.isArray(i18n.languages) && i18n.languages.length > 0) {
                    initialLanguage = i18n.language;
                  }

                case 17:
                  // Step 2: Determine namespace dependencies
                  namespacesRequired = config.ns;

                  if (Array.isArray(wrappedComponentProps.pageProps.namespacesRequired)) {
                    namespacesRequired = wrappedComponentProps.pageProps.namespacesRequired;
                  } else {
                    consoleMessage('warn', "You have not declared a namespacesRequired array on your page-level component: ".concat(ctx.Component.displayName || ctx.Component.name || 'Component', ". This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app. For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies"));
                  } // We must always send down the defaultNS, otherwise
                  // the client will trigger a request for it and issue
                  // the "Did not expect server HTML to contain a <h1> in <div>"
                  // error


                  if (typeof config.defaultNS === 'string' && !namespacesRequired.includes(config.defaultNS)) {
                    namespacesRequired.push(config.defaultNS);
                  } // Step 3: Perform data fetching, depending on environment


                  if (!(req && req.i18n)) {
                    _context2.next = 26;
                    break;
                  }

                  // Detect the languages to load based upon the fallbackLng configuration
                  fallbackLng = config.fallbackLng;
                  languagesToLoad = (0, _utils.lngsToLoad)(initialLanguage, fallbackLng, config.otherLanguages); // Initialise the store with the languagesToLoad and
                  // necessary namespaces needed to render this specific tree

                  languagesToLoad.forEach(function (lng) {
                    initialI18nStore[lng] = {};
                    namespacesRequired.forEach(function (ns) {
                      initialI18nStore[lng][ns] = (req.i18n.services.resourceStore.data[lng] || {})[ns] || {};
                    });
                  });
                  _context2.next = 30;
                  break;

                case 26:
                  if (!(Array.isArray(i18n.languages) && i18n.languages.length > 0)) {
                    _context2.next = 30;
                    break;
                  }

                  _context2.next = 29;
                  return clientLoadNamespaces(i18n.languages[0], namespacesRequired);

                case 29:
                  initialI18nStore = i18n.store.data;

                case 30:
                  // Step 4: Overwrite i18n.toJSON method to be able to serialize the instance
                  if (req && req.i18n) {
                    req.i18n.toJSON = function () {
                      return null;
                    };

                    i18nServerInstance = req.i18n;
                  } // `pageProps` will get serialized automatically by NextJs


                  return _context2.abrupt("return", (0, _objectSpread2["default"])({
                    initialI18nStore: initialI18nStore,
                    initialLanguage: initialLanguage,
                    i18nServerInstance: i18nServerInstance
                  }, wrappedComponentProps));

                case 32:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);
    return AppWithTranslation;
  }(_react["default"].Component);

  return (0, _hoistNonReactStatics["default"])((0, _router.withRouter)(AppWithTranslation), WrappedComponent, {
    getInitialProps: true
  });
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appWithTranslation", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation["default"];
  }
});
Object.defineProperty(exports, "withInternals", {
  enumerable: true,
  get: function get() {
    return _withInternals["default"];
  }
});

var _appWithTranslation = _interopRequireDefault(__webpack_require__(/*! ./app-with-translation */ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js"));

var _withInternals = _interopRequireDefault(__webpack_require__(/*! ./with-internals */ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _default = function _default(WrappedComponent, config) {
  var withInternals =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(withInternals, _React$Component);

    function withInternals() {
      (0, _classCallCheck2["default"])(this, withInternals);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(withInternals).apply(this, arguments));
    }

    (0, _createClass2["default"])(withInternals, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, this.props, {
          nextI18NextInternals: config
        }));
      }
    }]);
    return withInternals;
  }(_react["default"].Component);

  withInternals.displayName = "withnextI18NextInternals(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return withInternals;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.withTranslation;
  }
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.function.bind */ "core-js/modules/es6.function.bind");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics"));

var _createConfig = _interopRequireDefault(__webpack_require__(/*! ./config/create-config */ "./node_modules/next-i18next/dist/commonjs/config/create-config.js"));

var _createI18nextClient = _interopRequireDefault(__webpack_require__(/*! ./create-i18next-client */ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js"));

var _hocs = __webpack_require__(/*! ./hocs */ "./node_modules/next-i18next/dist/commonjs/hocs/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _components = __webpack_require__(/*! ./components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next-i18next/dist/commonjs/router/index.js");

var NextI18Next = function NextI18Next(userConfig) {
  (0, _classCallCheck2["default"])(this, NextI18Next);
  this.config = (0, _createConfig["default"])(userConfig);
  this.consoleMessage = _utils.consoleMessage.bind(this);
  /* Validation */

  if (this.config.otherLanguages.length <= 0) {
    throw new Error('To properly initialise a next-i18next instance you must provide one or more locale codes in config.otherLanguages.');
  }

  this.withNamespaces = function () {
    throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
  };

  this.i18n = (0, _createI18nextClient["default"])(this.config);
  this.appWithTranslation = _hocs.appWithTranslation.bind(this);

  this.withTranslation = function (namespace, options) {
    return function (Component) {
      return (0, _hoistNonReactStatics["default"])((0, _reactI18next.withTranslation)(namespace, options)(Component), Component);
    };
  };

  var nextI18NextInternals = {
    config: this.config,
    i18n: this.i18n
  };
  this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
  this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
  /* Directly export `react-i18next` methods */

  this.Trans = _reactI18next.Trans;
  this.useTranslation = _reactI18next.useTranslation;
};

exports["default"] = NextI18Next;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wrapRouter", {
  enumerable: true,
  get: function get() {
    return _wrapRouter["default"];
  }
});

var _wrapRouter = _interopRequireDefault(__webpack_require__(/*! ./wrap-router */ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/wrap-router.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "next/router"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var propertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'events'];
var coreMethods = ['reload', 'back', 'beforePopState', 'ready', 'prefetch'];
var wrappedMethods = ['push', 'replace'];

function _default(nextI18NextInternals) {
  var Router = {};
  propertyFields.forEach(function (field) {
    Object.defineProperty(Router, field, {
      get: function get() {
        return _router["default"][field];
      }
    });
  });
  coreMethods.forEach(function (method) {
    Router[method] = function () {
      return _router["default"][method].apply(_router["default"], arguments);
    };
  });
  wrappedMethods.forEach(function (method) {
    Router[method] = function (path, as, options) {
      var config = nextI18NextInternals.config,
          i18n = nextI18NextInternals.i18n;

      if ((0, _utils.localeSubpathRequired)(nextI18NextInternals, i18n.languages[0])) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: path
        }, i18n.languages[0]),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _router["default"][method](correctedHref, correctedAs, options);
      }

      return _router["default"][method](path, as, options);
    };
  });
  return Router;
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/console-message.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createConsoleLog;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");

__webpack_require__(/*! core-js/modules/es7.object.values */ "core-js/modules/es7.object.values");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.object.freeze */ "core-js/modules/es6.object.freeze");

/* eslint-disable no-console */

/**
  * @readonly
  * @enum {String} A console.log type
  */
var messageTypes = {
  error: 'error',
  info: 'info',
  warn: 'warn'
};
Object.freeze(messageTypes);
/**
 *  Logs a custom message to console
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 */

function logMessage(messageType, message) {
  if (Object.values(messageTypes).includes(messageType)) {
    console[messageType](message);
  } else {
    console.info(message);
  }
}
/**
 * Create a console log with specified log type, a message and options
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 * @param {Object} options
 */


function createConsoleLog(messageType, message) {
  var _this$config = this.config,
      errorStackTraceLimit = _this$config.errorStackTraceLimit,
      strictMode = _this$config.strictMode;
  var prevStackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = errorStackTraceLimit;
  var util;

  if (!strictMode) {
    return;
  }

  if (true) {
    util = __webpack_require__(/*! util */ "util");
  } else {}
  /* Temporarily set the stacktrace to 0 or errorStackTraceLimit,
     in order to only display a message */


  Error.errorStackTraceLimit = errorStackTraceLimit; // Make room for new message

  console.log(); // Make sure the message is a string

  if (typeof message !== 'string') {
    var metaError = new Error();
    metaError.name = 'Meta';
    metaError.message = "Param message needs to be of type: string. Instead, '".concat((0, _typeof2["default"])(message), "' was provided.\n\n------------------------------------------------\n\n\u200B\n        The provided ").concat((0, _typeof2["default"])(message), ":\n\n\u200B\n          ").concat(util.inspect(message, true, 8, true), "\n\u200B\n------------------------------------------------\n\n    ");
    console.error(metaError);
    return;
  } // Log the message to console


  logMessage(messageType, message); // Reset stack limit

  Error.stackTraceLimit = prevStackLimit;
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "core-js/modules/es6.regexp.search");

var _url = __webpack_require__(/*! url */ "url");

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

var _default = function _default(req, res, lng) {
  var _parse = (0, _url.parse)(req.url),
      pathname = _parse.pathname,
      search = _parse.search;

  (0, _redirectWithoutCache["default"])(res, pathname.replace("/".concat(lng), "/".concat(lng, "/")) + (search || ''));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "consoleMessage", {
  enumerable: true,
  get: function get() {
    return _consoleMessage["default"];
  }
});
Object.defineProperty(exports, "forceTrailingSlash", {
  enumerable: true,
  get: function get() {
    return _forceTrailingSlash["default"];
  }
});
Object.defineProperty(exports, "lngFromReq", {
  enumerable: true,
  get: function get() {
    return _lngFromReq["default"];
  }
});
Object.defineProperty(exports, "lngPathCorrector", {
  enumerable: true,
  get: function get() {
    return _lngPathCorrector["default"];
  }
});
Object.defineProperty(exports, "lngPathDetector", {
  enumerable: true,
  get: function get() {
    return _lngPathDetector["default"];
  }
});
Object.defineProperty(exports, "lngsToLoad", {
  enumerable: true,
  get: function get() {
    return _lngsToLoad["default"];
  }
});
Object.defineProperty(exports, "localeSubpathRequired", {
  enumerable: true,
  get: function get() {
    return _localeSubpathRequired["default"];
  }
});
Object.defineProperty(exports, "redirectWithoutCache", {
  enumerable: true,
  get: function get() {
    return _redirectWithoutCache["default"];
  }
});

var _consoleMessage = _interopRequireDefault(__webpack_require__(/*! ./console-message.js */ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js"));

var _forceTrailingSlash = _interopRequireDefault(__webpack_require__(/*! ./force-trailing-slash */ "./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js"));

var _lngFromReq = _interopRequireDefault(__webpack_require__(/*! ./lng-from-req */ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js"));

var _lngPathCorrector = _interopRequireDefault(__webpack_require__(/*! ./lng-path-corrector */ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js"));

var _lngPathDetector = _interopRequireDefault(__webpack_require__(/*! ./lng-path-detector */ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js"));

var _lngsToLoad = _interopRequireDefault(__webpack_require__(/*! ./lngs-to-load */ "./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js"));

var _localeSubpathRequired = _interopRequireDefault(__webpack_require__(/*! ./locale-subpath-required */ "./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js"));

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");

var _default = function _default(req) {
  if (!req.i18n) {
    return null;
  }

  var _req$i18n$options = req.i18n.options,
      allLanguages = _req$i18n$options.allLanguages,
      defaultLanguage = _req$i18n$options.defaultLanguage,
      fallbackLng = _req$i18n$options.fallbackLng;
  var fallback = fallbackLng || defaultLanguage;

  if (!req.i18n.languages) {
    return fallback;
  }

  var language = req.i18n.languages.find(function (l) {
    return allLanguages.includes(l);
  }) || fallback;
  return language;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.string.starts-with */ "core-js/modules/es6.string.starts-with");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "core-js/modules/es7.symbol.async-iterator");

__webpack_require__(/*! core-js/modules/es6.symbol */ "core-js/modules/es6.symbol");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "core-js/modules/es6.regexp.search");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _url = __webpack_require__(/*! url */ "url");

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var parseAs = function parseAs(originalAs, href) {
  var asType = (0, _typeof2["default"])(originalAs);
  var as;

  if (asType === 'undefined') {
    as = (0, _url.format)(href, {
      unicode: true
    });
  } else if (asType === 'string') {
    as = originalAs;
  } else {
    throw new Error("'as' type must be 'string', but it is ".concat(asType));
  }

  return as;
};

var parseHref = function parseHref(originalHref) {
  var hrefType = (0, _typeof2["default"])(originalHref);
  var href;

  if (hrefType === 'string') {
    href = (0, _url.parse)(originalHref, true
    /* parseQueryString */
    );
  } else if (hrefType === 'object') {
    href = (0, _objectSpread2["default"])({}, originalHref);
    href.query = originalHref.query ? (0, _objectSpread2["default"])({}, originalHref.query) : {};
  } else {
    throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
  }

  return href;
};

var _default = function _default(config, currentRoute, currentLanguage) {
  var defaultLanguage = config.defaultLanguage,
      allLanguages = config.allLanguages,
      localeSubpaths = config.localeSubpaths;
  var originalAs = currentRoute.as,
      originalHref = currentRoute.href;

  if (!allLanguages.includes(currentLanguage)) {
    throw new Error('Invalid configuration: Current language is not included in all languages array');
  }

  var href = parseHref(originalHref);
  var as = parseAs(originalAs, href); // url.format prefers the 'url.search' string over the 'url.query' object,
  // so remove the search string to ensure the query object is used

  delete href.search;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allLanguages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lng = _step.value;

      if (as.startsWith("/".concat(lng, "/"))) {
        as = as.replace("/".concat(lng, "/"), '/');
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (currentLanguage !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
    var basePath = "".concat(href.protocol, "//").concat(href.host);
    var currentAs = as.replace(basePath, '');
    as = "/".concat(currentLanguage).concat(currentAs);
    href.query.lng = currentLanguage;
  }

  return {
    as: as,
    href: href
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/es6.string.starts-with */ "core-js/modules/es6.string.starts-with");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

var _lngFromReq = _interopRequireDefault(__webpack_require__(/*! ./lng-from-req */ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js"));

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _default = function _default(req) {
  var config = {
    originalUrl: req.url,
    correctedUrl: req.url
  };

  if (req.i18n) {
    var language = (0, _lngFromReq["default"])(req);
    var _req$i18n$options = req.i18n.options,
        allLanguages = _req$i18n$options.allLanguages,
        defaultLanguage = _req$i18n$options.defaultLanguage,
        localeSubpaths = _req$i18n$options.localeSubpaths;
    var languageChanged = false;
    var languageNeedsSubpath = localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && language !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL;
    /*
      If a user has hit a subpath which does not
      match their language, give preference to
      the path, and change user language.
    */

    allLanguages.forEach(function (lng) {
      if (req.url.startsWith("/".concat(lng, "/")) && language !== lng) {
        req.i18n.changeLanguage(lng);
        languageChanged = true;
      }
    });
    /*
      If a language subpath is required and
      not present, remove all other potential
      subpaths and then prepend correct subpath
    */

    if (!languageChanged && languageNeedsSubpath && !req.url.startsWith("/".concat(language, "/"))) {
      allLanguages.forEach(function (otherLng) {
        if (req.url.startsWith("/".concat(otherLng, "/"))) {
          config.correctedUrl = req.url.replace("/".concat(otherLng, "/"), '/');
        }
      });
      config.correctedUrl = req.url.replace('/', "/".concat(language, "/"));
    }
    /*
      If a user has a default language prefix
      in their URL, and config option isn't
      set to ALL, strip it.
    */


    if (language === defaultLanguage && req.url.startsWith("/".concat(defaultLanguage, "/")) && localeSubpaths !== _defaultConfig.localeSubpathOptions.ALL) {
      config.correctedUrl = req.url.replace("/".concat(defaultLanguage, "/"), '/');
    }
  }

  return config;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

__webpack_require__(/*! core-js/modules/es6.array.is-array */ "core-js/modules/es6.array.is-array");

var _default = function _default(initialLng, fallbackLng, otherLanguages) {
  var languages = [];

  if (initialLng) {
    languages.push(initialLng);
  }

  if (fallbackLng) {
    if (typeof fallbackLng === 'string' && fallbackLng !== initialLng) {
      languages.push(fallbackLng);
    }

    if (Array.isArray(fallbackLng)) {
      languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng));
    } else if (initialLng) {
      if (typeof fallbackLng[initialLng] === 'string') {
        languages.push(fallbackLng[initialLng]);
      } else if (Array.isArray(fallbackLng[initialLng])) {
        languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng[initialLng]));
      }
    }

    if (fallbackLng["default"]) {
      languages.push(fallbackLng["default"]);
    }
  }

  if (initialLng && initialLng.includes('-') && Array.isArray(otherLanguages)) {
    var _initialLng$split = initialLng.split('-'),
        _initialLng$split2 = (0, _slicedToArray2["default"])(_initialLng$split, 1),
        languageFromLocale = _initialLng$split2[0];

    otherLanguages.forEach(function (otherLanguage) {
      if (otherLanguage === languageFromLocale) {
        languages.push(otherLanguage);
      }
    });
  }

  return languages;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _default = function _default(nextI18NextInternals, lng) {
  var _nextI18NextInternals = nextI18NextInternals.config,
      defaultLanguage = _nextI18NextInternals.defaultLanguage,
      localeSubpaths = _nextI18NextInternals.localeSubpaths;

  if (lng) {
    if (localeSubpaths === _defaultConfig.localeSubpathOptions.NONE) {
      return false;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && lng !== defaultLanguage) {
      return true;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
      return true;
    }
  }

  return false;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(res, redirectLocation) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.redirect(302, redirectLocation);
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/I18nextProvider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  (0, _context.usedI18nextProvider)(true);
  return _react.default.createElement(_context.I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Trans.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Trans.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesToString = nodesToString;
exports.Trans = Trans;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__(/*! html-parse-stringify2 */ "html-parse-stringify2"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return _react.default.isValidElement(child);
  });
}

function nodesToString(mem, children, index, i18nOptions) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      mem = "".concat(mem).concat(child);
    } else if (hasChildren(child)) {
      var elementTag = keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 1 && typeof hasChildren(child) === 'string' ? child.type : elementKey;

      if (child.props && child.props.i18nIsDynamicList) {
        // we got a dynamic list like "<ul>{['a', 'b'].map(item => ( <li key={item}>{item}</li> ))}</ul>""
        // the result should be "<0></0>" and not "<0><0>a</0><1>b</1></0>"
        mem = "".concat(mem, "<").concat(elementTag, "></").concat(elementTag, ">");
      } else {
        // regular case mapping the inner children
        mem = "".concat(mem, "<").concat(elementTag, ">").concat(nodesToString('', getChildren(child), i + 1, i18nOptions), "</").concat(elementTag, ">");
      }
    } else if (_react.default.isValidElement(child)) {
      if (keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 0) {
        mem = "".concat(mem, "<").concat(child.type, "/>");
      } else {
        mem = "".concat(mem, "<").concat(elementKey, "></").concat(elementKey, ">");
      }
    } else if ((0, _typeof2.default)(child) === 'object') {
      var clone = (0, _objectSpread2.default)({}, child);
      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return mem;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts) {
  if (targetString === '') return []; // check if contains tags we need to replace from html string to react nodes

  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString); // no need to replace tags in the targetstring

  if (!children && !emptyChildrenButNeedsHandling) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    if (Object.prototype.toString.call(childs) !== '[object Array]') childs = [childs];
    childs.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2.default)(child) === 'object' && !_react.default.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  targetString = i18n.services.interpolator.interpolate(targetString, (0, _objectSpread2.default)({}, data, combinedTOpts), i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify.default.parse("<0>".concat(targetString, "</0>"));

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content;

      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react.default.isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var childs = getChildren(child);
          var mappedChildren = mapAST(childs, node.children);
          var inner = hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), inner));
        } else if (emptyChildrenButNeedsHandling && (0, _typeof2.default)(child) === 'object' && child.dummy && !isElement) {
          // we have a empty Trans node (the dummy element) with a targetstring that contains html tags needing
          // conversion to react nodes
          // so we just need to map the inner stuff
          var _inner = mapAST(reactNodes
          /* wrong but we need something */
          , node.children);

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), _inner));
        } else if (isNaN(node.name) && i18nOptions.transSupportBasicHtmlNodes) {
          if (node.voidElement) {
            mem.push(_react.default.createElement(node.name, {
              key: "".concat(node.name, "-").concat(i)
            }));
          } else {
            var _inner2 = mapAST(reactNodes
            /* wrong but we need something */
            , node.children);

            mem.push(_react.default.createElement(node.name, {
              key: "".concat(node.name, "-").concat(i)
            }, _inner2));
          }
        } else if ((0, _typeof2.default)(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          // If component does not have children, but translation - has
          // with this in component could be components={[<span class='make-beautiful'/>]} and in translation - 'some text <0>some highlighted message</0>'
          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), translationContent));
        } else {
          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      tOptions = _ref.tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      additionalProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"]);

  var _ref2 = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  var reactI18nextOptions = (0, _objectSpread2.default)({}, (0, _context.getDefaults)(), i18n.options && i18n.options.react);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent; // prepare having a namespace

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString('', children, 0, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? {} : {
    interpolation: {
      prefix: '#$?',
      suffix: '?$#'
    }
  };
  var combinedTOpts = (0, _objectSpread2.default)({}, tOptions, values, interpolationOverride, {
    defaultValue: defaultValue,
    count: count,
    ns: namespaces
  });
  var translation = key ? t(key, combinedTOpts) : defaultValue;
  if (!useAsParent) return renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts);
  return _react.default.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts));
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Translation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Translation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translation = Translation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = (0, _objectWithoutProperties2.default)(props, ["ns", "children"]);

  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
      _useTranslation2 = (0, _slicedToArray2.default)(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/context.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usedI18nextProvider = usedI18nextProvider;
exports.getHasUsedI18nextProvider = getHasUsedI18nextProvider;
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.composeInitialProps = composeInitialProps;
exports.getInitialProps = getInitialProps;
exports.initReactI18next = exports.ReportNamespaces = exports.I18nContext = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var defaultOptions = {
  bindI18n: 'languageChanging languageChanged',
  bindI18nStore: '',
  // nsMode: 'fallback' // loop through all namespaces given to hook, HOC, render prop for key lookup
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  // hashTransKey: key => key // calculate a key for Trans component based on defaultValue
  useSuspense: true
};
var i18nInstance;
var hasUsedI18nextProvider;

var I18nContext = _react.default.createContext();

exports.I18nContext = I18nContext;

function usedI18nextProvider(used) {
  hasUsedI18nextProvider = used;
}

function getHasUsedI18nextProvider() {
  return hasUsedI18nextProvider;
}

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = (0, _objectSpread2.default)({}, defaultOptions, options);
}

function getDefaults() {
  return defaultOptions;
}

var ReportNamespaces =
/*#__PURE__*/
function () {
  function ReportNamespaces() {
    (0, _classCallCheck2.default)(this, ReportNamespaces);
    this.usedNamespaces = {};
  }

  (0, _createClass2.default)(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();

exports.ReportNamespaces = ReportNamespaces;

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.initReactI18next = initReactI18next;

function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve((0, _objectSpread2.default)({}, componentsInitialProps, i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  }; // Avoid async for now - so we do not need to pull in regenerator
  // return async ctx => {
  //   const componentsInitialProps = ForComponent.getInitialProps
  //     ? await ForComponent.getInitialProps(ctx)
  //     : {};
  //   const i18nInitialProps = getInitialProps();
  //   return {
  //     ...componentsInitialProps,
  //     ...i18nInitialProps,
  //   };
  // };
}

function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.withTranslation;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _Translation.Translation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withSSR", {
  enumerable: true,
  get: function get() {
    return _withSSR.withSSR;
  }
});
Object.defineProperty(exports, "useSSR", {
  enumerable: true,
  get: function get() {
    return _useSSR.useSSR;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "initReactI18next", {
  enumerable: true,
  get: function get() {
    return _context.initReactI18next;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "composeInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.composeInitialProps;
  }
});
Object.defineProperty(exports, "getInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.getInitialProps;
  }
});

var _Trans = __webpack_require__(/*! ./Trans */ "./node_modules/react-i18next/dist/commonjs/Trans.js");

var _useTranslation = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _withTranslation = __webpack_require__(/*! ./withTranslation */ "./node_modules/react-i18next/dist/commonjs/withTranslation.js");

var _Translation = __webpack_require__(/*! ./Translation */ "./node_modules/react-i18next/dist/commonjs/Translation.js");

var _I18nextProvider = __webpack_require__(/*! ./I18nextProvider */ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js");

var _withSSR = __webpack_require__(/*! ./withSSR */ "./node_modules/react-i18next/dist/commonjs/withSSR.js");

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useSSR.js":
/*!************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useSSR.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSSR = useSSR;

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) : {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)(); // opt out if is a cloned instance, eg. created by i18next-express-middleware on request
  // -> do not set initial stuff on server side

  if (i18n.options && i18n.options.isClone) return; // nextjs / SSR: getting data from next.js or other ssr stack

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.initializedStoreOnce = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useTranslation.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useTranslation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // assert we have the needed i18nInstance
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using initReactI18next');
    var retNotReady = [function (k) {
      return k;
    }, {}, true];

    retNotReady.t = function (k) {
      return k;
    };

    retNotReady.i18n = {};
    retNotReady.ready = true;
    return retNotReady;
  }

  var i18nOptions = (0, _objectSpread2.default)({}, (0, _context.getDefaults)(), i18n.options.react);
  var _props$useSuspense = props.useSuspense,
      useSuspense = _props$useSuspense === void 0 ? i18nOptions.useSuspense : _props$useSuspense; // prepare having a namespace

  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation']; // report namespaces as used

  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces); // are we ready? yes if all namespaces in first language are loaded already (either with data or empty object on failed load)

  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0, _utils.hasLoadedNamespace)(n, i18n);
  }); // binding t function to namespace (acts also as rerender trigger)

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = (0, _react.useState)(getT()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1]; // seems we can't have functions as value -> wrap it in obj


  (0, _react.useEffect)(function () {
    var isMounted = true;
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore; // if not ready and not using suspense load the namespaces
    // in side effect and do not call resetT if unmounted

    if (!ready && !useSuspense) {
      (0, _utils.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted) setT(getT());
    } // bind events to trigger change, like languageChanged


    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset); // unbinding on unmount

    return function () {
      isMounted = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]); // re-run effect whenever list of namespaces changes

  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready; // return hook stuff if ready

  if (ready) return ret; // not yet loaded namespaces -> load them -> and return if useSuspense option set false

  if (!ready && !useSuspense) return ret; // not yet loaded namespaces -> load them -> and trigger suspense

  throw new Promise(function (resolve) {
    (0, _utils.loadNamespaces)(i18n, namespaces, function () {
      setT(getT());
      resolve();
    });
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.loadNamespaces = loadNamespaces;
exports.hasLoadedNamespace = hasLoadedNamespace;
exports.getDisplayName = getDisplayName;

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
} // not needed right now
//
// export function deprecated(...args) {
//   if (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
//     if (typeof args[0] === 'string') args[0] = `deprecation warning -> ${args[0]}`;
//     warnOnce(...args);
//   }
// }


function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    // delay ready if not yet initialized i18n instance
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        // due to emitter removing issue in i18next we need to delay remove
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function hasLoadedNamespace(ns, i18n) {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1]; // we're in cimode so this shall pass

  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  }; // loaded -> SUCCESS


  if (i18n.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

  if (!i18n.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withSSR.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withSSR.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSSR = withSSR;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = (0, _objectWithoutProperties2.default)(_ref, ["initialI18nStore", "initialLanguage"]);
      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
      return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, rest));
    }

    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withTranslation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withTranslation.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = withTranslation;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(props, ref) {
      var _useTranslation = (0, _useTranslation3.useTranslation)(ns, props),
          _useTranslation2 = (0, _slicedToArray2.default)(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = (0, _objectSpread2.default)({}, props, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && ref) {
        passDownProps.ref = ref;
      }

      return _react.default.createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    return options.withRef ? _react.default.forwardRef(I18nextWithTranslation) : I18nextWithTranslation;
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/danyaowang/SideProject/Ellen/pages/index.js";





var Homepage = function Homepage(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "card-img-top",
    src: "/static/card2.jpeg",
    alt: "Card image cap",
    height: "300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, t('name')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "EllenSun Immigration Corp. is a federally incorporated professional immigration consulting company, focused on consulting services for potential candidates who wish to visit, study, work, or immigrate to Canada. We have successfully helped many clients to get their temporary or permanent resident status in the past years. With the head office in Ottawa Ontario, we have built a great reputation in Immigration Consulting field for our professionalism and responsibility. Ms. Ellen Sun, the corporation founder, is a Regulated Canadian Immigration Consultant (RCIC) # R531517 with good standing in Immigration Consultants of Canada Regulatory Council (ICCRC), also she is a gold member # R19093 of Canadian Association of Professional Immigration Consultants (CAPIC). She was graduated from Immigration Laws, Policies and Procedures certificate program of University of British Columbia. Ms. Ellen Sun has extensively studied Canadian immigration laws and regulations, and she has always strictly followed the complicated immigration procedures, helping the clients to choose the most appropriate immigration programs. ")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "card-img-top",
    src: "/static/card1.jpg",
    alt: "Card image cap",
    height: "300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Regulated Canadian Immigration Consultant"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "ICCRC\u2019s federal mandate stems from the Immigration and Refugee Protection Act (IRPA) and the Citizenship Act which require anyone providing Canadian immigration or citizenship advice or representation for a fee or other consideration to be a member in good standing of ICCRC. Exceptions are members in good standing of a law society in Canada or the Chambre des notaires du Qu\xE9bec. To become an RCIC, the candidate must:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, t('consultant-1')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, t('consultant-2')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, t('consultant-3')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, t('consultant-4')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, t('consultant-5')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, t('consultant-6')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, t('consultant-7'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "As being an RCIC, the member must:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, t('consultant-8')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, t('consultant-9')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, t('consultant-10'))))))))));
};

Homepage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Homepage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('common')(Homepage)); // class Homepage extends React.Component {
//     // static async getInitialProps() {
//     //   return {
//     //     namespacesRequired: ['common'],
//     //   }
//     // }
//     render() {
//       return (
//         <>
//           <Layout />
//         <div>
//         <div>{this.props.t("title")}</div>
//           <button
//             onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'chn' : 'en')}
//           >
//             Change locale
//           </button> </div> 
//           </>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                 <img src="/static/picture1.jpg" className="d-block w-100" alt="visit" width="1100" height="650"/>
//                 </div>
//                 <div className="carousel-item">
//                 <img src="/static/picture2.jpg" className="d-block w-100" alt="study" width="1100" height="650"/>
//                 </div>
//                 <div className="carousel-item">
//                 <img src="static/picture3.jpg" className="d-block w-100" alt="work" width="1100" height="650"/>
//                 </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//       )
//     }
//   }

/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danyaowang/SideProject/Ellen/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/modules/es6.array.filter":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.filter" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.filter");

/***/ }),

/***/ "core-js/modules/es6.array.find":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.find" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),

/***/ "core-js/modules/es6.array.for-each":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.for-each" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.for-each");

/***/ }),

/***/ "core-js/modules/es6.array.is-array":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.is-array" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.is-array");

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "core-js/modules/es6.array.map":
/*!************************************************!*\
  !*** external "core-js/modules/es6.array.map" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.map");

/***/ }),

/***/ "core-js/modules/es6.date.to-json":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.date.to-json" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-json");

/***/ }),

/***/ "core-js/modules/es6.function.bind":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.bind" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.bind");

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign");

/***/ }),

/***/ "core-js/modules/es6.object.define-property":
/*!*************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.define-property");

/***/ }),

/***/ "core-js/modules/es6.object.freeze":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.freeze" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.freeze");

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.to-string");

/***/ }),

/***/ "core-js/modules/es6.promise":
/*!**********************************************!*\
  !*** external "core-js/modules/es6.promise" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),

/***/ "core-js/modules/es6.regexp.search":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.regexp.search" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),

/***/ "core-js/modules/es6.string.includes":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.includes" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

/***/ }),

/***/ "core-js/modules/es6.string.starts-with":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.starts-with" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.starts-with");

/***/ }),

/***/ "core-js/modules/es6.symbol":
/*!*********************************************!*\
  !*** external "core-js/modules/es6.symbol" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.array.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),

/***/ "core-js/modules/es7.object.entries":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.object.entries" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),

/***/ "core-js/modules/es7.object.values":
/*!****************************************************!*\
  !*** external "core-js/modules/es7.object.values" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),

/***/ "core-js/modules/es7.symbol.async-iterator":
/*!************************************************************!*\
  !*** external "core-js/modules/es7.symbol.async-iterator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.symbol.async-iterator");

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "detect-node":
/*!******************************!*\
  !*** external "detect-node" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "html-parse-stringify2":
/*!****************************************!*\
  !*** external "html-parse-stringify2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "i18next-xhr-backend":
/*!**************************************!*\
  !*** external "i18next-xhr-backend" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map