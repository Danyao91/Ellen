webpackHotUpdate("static/development/pages/contactus.js",{

/***/ "./pages/contactus.js":
/*!****************************!*\
  !*** ./pages/contactus.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/danyaowang/SideProject/Ellen/pages/contactus.js";




 // const sendMessage = () => {
//     // document.getElementById('try').addEventListener("click", () => {
//         var xmlHttp = new XMLHttpRequest();
//         const theUrl = "https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=name: "
//             + document.querySelector("#name").value + "%0D%0Aemail: "
//             + document.querySelector("#email").value + "%0D%0AphoneNumber: "
//             + document.querySelector("#phone").value + "%0D%0Amessage: "
//             + document.querySelector("#exampleFormControlTextarea1").value;
//         xmlHttp.onreadystatechange = () => {
//             if (xmlHttp.readyState === 4) {
//                 callback(xmlHttp.response);         
//                 }
//               }
//         xmlHttp.open("GET", theUrl, true); // false for synchronous request
//         xmlHttp.send();
//         document.querySelector("#name").value = "";
//         document.querySelector("#email").value = "";
//         document.querySelector("#phone").value = "";
//         document.querySelector("#exampleFormControlTextarea1").value = "";
//     // });
// }
// const callback = () => {
//     alert("Message has been successfully sent. Please wait for the response patiently. Thanks!");
// }

var contact = function contact(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "section-heading h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, t('contact')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, t('location'), ":"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "map-container-google-12",
    className: "map-container-7",
    style: {
      height: 200 + 'px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
    src: "https://maps.google.com/maps?q=1509%20merivale%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed",
    frameborder: "0",
    style: {
      border: 0,
      allowfullscreen: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "1509 merivale Road, Ottawa"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " Ontario, Canada, K2G 3J3")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, t('contactInfo')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/wechat.jpg",
    className: "d-block w-100",
    height: "280",
    width: "70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, t('email')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, t('tel')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, t('wechat')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, t('qr'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, t('reach')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/official.jpg",
    className: "d-block w-100",
    height: "280",
    width: "70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })))));
}; // axios.get(`https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=123`)
// .then(res => {
//     console.log(res)
// });


contact.getInitialProps =
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
contact.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('common')(contact));

/***/ })

})
//# sourceMappingURL=contactus.js.9a5b06c68709e5bd6648.hot-update.js.map