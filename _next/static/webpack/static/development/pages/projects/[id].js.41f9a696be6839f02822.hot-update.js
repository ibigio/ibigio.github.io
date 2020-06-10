webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./components/ProjectPageLayout.js":
/*!*****************************************!*\
  !*** ./components/ProjectPageLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProjectPageLayout.module.css */ \"./styles/ProjectPageLayout.module.css\");\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/ProjectPageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import Link from \"next/link\";\n\n\nfunction Page(_ref) {\n  var _this = this;\n\n  var children = _ref.children,\n      projectData = _ref.projectData;\n  var title = projectData.title,\n      langs = projectData.langs,\n      tools = projectData.tools,\n      githubURL = projectData.githubURL,\n      otherURL = projectData.otherURL;\n  return __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.safe_zone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.upper_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.back_arrow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.down_arrow,\n    to: \"/projects\",\n    smooth: true,\n    duration: 500,\n    offset: 70,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 15\n    }\n  }, \"\\u2190 Projects\")), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, otherURL ? __jsx(\"a\", {\n    href: otherURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon_gray,\n    src: \"/icons/gray-link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }), githubURL ? __jsx(\"a\", {\n    href: githubURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/gray-github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }))), __jsx(\"hr\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lower_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.langs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, langs.map(function (lang) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lang,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, lang);\n  })), __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tools,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, tools.map(function (tool) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tool,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }, tool);\n  })))), __jsx(\"main\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \" \", children)), __jsx(\"footer\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, \"\\xA9 2020 Ilan Bigio\"));\n}\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RQYWdlTGF5b3V0LmpzPzFkY2QiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwicHJvamVjdERhdGEiLCJ0aXRsZSIsImxhbmdzIiwidG9vbHMiLCJnaXRodWJVUkwiLCJvdGhlclVSTCIsInN0eWxlcyIsInNhZmVfem9uZSIsImNvbnRhaW5lciIsImhlYWRlciIsInVwcGVyX2hlYWRlciIsImJhY2tfYXJyb3ciLCJkb3duX2Fycm93IiwiaWNvbnMiLCJpY29uIiwiaWNvbl9ncmF5IiwibGluZSIsImxvd2VyX2hlYWRlciIsIm1hcCIsImxhbmciLCJ0b29sIiwibWFpbiIsImNvcHlyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlO0FBQUEsTUFDOUNDLEtBRDhDLEdBQ0RELFdBREMsQ0FDOUNDLEtBRDhDO0FBQUEsTUFDdkNDLEtBRHVDLEdBQ0RGLFdBREMsQ0FDdkNFLEtBRHVDO0FBQUEsTUFDaENDLEtBRGdDLEdBQ0RILFdBREMsQ0FDaENHLEtBRGdDO0FBQUEsTUFDekJDLFNBRHlCLEdBQ0RKLFdBREMsQ0FDekJJLFNBRHlCO0FBQUEsTUFDZEMsUUFEYyxHQUNETCxXQURDLENBQ2RLLFFBRGM7QUFFdEQsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMkVBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwyRUFBTSxDQUFDRSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLDJFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFL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QWdDdEIsUUFBaEMsQ0FsREYsQ0FERixFQXFERTtBQUFRLGFBQVMsRUFBRU8sMkVBQU0sQ0FBQ2dCLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBckRGLENBREY7QUF5REQ7S0EzRHVCeEIsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdFBhZ2VMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvamVjdFBhZ2VMYXlvdXQubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuLCBwcm9qZWN0RGF0YSB9KSB7XG4gIGNvbnN0IHsgdGl0bGUsIGxhbmdzLCB0b29scywgZ2l0aHViVVJMLCBvdGhlclVSTCB9ID0gcHJvamVjdERhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zYWZlX3pvbmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cHBlcl9oZWFkZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrX2Fycm93fT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kb3duX2Fycm93fVxuICAgICAgICAgICAgICAgIHRvPVwiL3Byb2plY3RzXCJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9ezcwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJiM4NTkyOyBQcm9qZWN0c1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgIHtvdGhlclVSTCA/IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtvdGhlclVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pY29ucy9saW5rLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9ncmF5fSBzcmM9XCIvaWNvbnMvZ3JheS1saW5rLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtnaXRodWJVUkwgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Z2l0aHViVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPVwiL2ljb25zL2dpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pY29ucy9ncmF5LWdpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG93ZXJfaGVhZGVyfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdzfT5cbiAgICAgICAgICAgICAge2xhbmdzLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PntsYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sc30+XG4gICAgICAgICAgICAgIHt0b29scy5tYXAoKHRvb2wpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sfT57dG9vbH08L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4ge2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PsKpIDIwMjAgSWxhbiBCaWdpbzwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectPageLayout.js\n");

/***/ })

})