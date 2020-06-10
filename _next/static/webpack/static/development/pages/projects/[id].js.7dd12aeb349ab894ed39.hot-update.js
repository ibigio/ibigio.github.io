webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./components/ProjectPageLayout.js":
/*!*****************************************!*\
  !*** ./components/ProjectPageLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProjectPageLayout.module.css */ \"./styles/ProjectPageLayout.module.css\");\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/ProjectPageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import Link from \"next/link\";\n\n\nfunction Page(_ref) {\n  var _this = this;\n\n  var children = _ref.children,\n      projectData = _ref.projectData;\n  var title = projectData.title,\n      langs = projectData.langs,\n      tools = projectData.tools,\n      githubURL = projectData.githubURL,\n      otherURL = projectData.otherURL;\n  return __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.safe_zone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.upper_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.back_arrow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"/#projects\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 15\n    }\n  }, \"\\u2190 Projects\")), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, otherURL ? __jsx(\"a\", {\n    href: otherURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon_gray,\n    src: \"/icons/gray-link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), githubURL ? __jsx(\"a\", {\n    href: githubURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/gray-github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }))), __jsx(\"hr\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lower_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.langs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, langs.map(function (lang) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lang,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, lang);\n  })), __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tools,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, tools.map(function (tool) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tool,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }\n    }, tool);\n  })))), __jsx(\"main\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \" \", children)), __jsx(\"footer\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"\\xA9 2020 Ilan Bigio\"));\n}\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RQYWdlTGF5b3V0LmpzPzFkY2QiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwicHJvamVjdERhdGEiLCJ0aXRsZSIsImxhbmdzIiwidG9vbHMiLCJnaXRodWJVUkwiLCJvdGhlclVSTCIsInN0eWxlcyIsInNhZmVfem9uZSIsImNvbnRhaW5lciIsImhlYWRlciIsInVwcGVyX2hlYWRlciIsImJhY2tfYXJyb3ciLCJpY29ucyIsImljb24iLCJpY29uX2dyYXkiLCJsaW5lIiwibG93ZXJfaGVhZGVyIiwibWFwIiwibGFuZyIsInRvb2wiLCJtYWluIiwiY29weXJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFBQSxNQUM5Q0MsS0FEOEMsR0FDREQsV0FEQyxDQUM5Q0MsS0FEOEM7QUFBQSxNQUN2Q0MsS0FEdUMsR0FDREYsV0FEQyxDQUN2Q0UsS0FEdUM7QUFBQSxNQUNoQ0MsS0FEZ0MsR0FDREgsV0FEQyxDQUNoQ0csS0FEZ0M7QUFBQSxNQUN6QkMsU0FEeUIsR0FDREosV0FEQyxDQUN6QkksU0FEeUI7QUFBQSxNQUNkQyxRQURjLEdBQ0RMLFdBREMsQ0FDZEssUUFEYztBQUV0RCxTQUNFO0FBQUssYUFBUyxFQUFFQywyRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDJFQUFNLENBQUNFLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsMkVBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSCwy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RjtBQWlERDtLQW5EdUJ2QixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0UGFnZUxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0UGFnZUxheW91dC5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4sIHByb2plY3REYXRhIH0pIHtcbiAgY29uc3QgeyB0aXRsZSwgbGFuZ3MsIHRvb2xzLCBnaXRodWJVUkwsIG90aGVyVVJMIH0gPSBwcm9qZWN0RGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNhZmVfem9uZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwcGVyX2hlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tfYXJyb3d9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNwcm9qZWN0c1wiPiYjODU5MjsgUHJvamVjdHM8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgIHtvdGhlclVSTCA/IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtvdGhlclVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pY29ucy9saW5rLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9ncmF5fSBzcmM9XCIvaWNvbnMvZ3JheS1saW5rLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtnaXRodWJVUkwgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Z2l0aHViVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPVwiL2ljb25zL2dpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pY29ucy9ncmF5LWdpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG93ZXJfaGVhZGVyfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdzfT5cbiAgICAgICAgICAgICAge2xhbmdzLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PntsYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sc30+XG4gICAgICAgICAgICAgIHt0b29scy5tYXAoKHRvb2wpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sfT57dG9vbH08L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4ge2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PsKpIDIwMjAgSWxhbiBCaWdpbzwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectPageLayout.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})