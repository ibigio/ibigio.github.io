webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./components/ProjectPageLayout.js":
/*!*****************************************!*\
  !*** ./components/ProjectPageLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProjectPageLayout.module.css */ \"./styles/ProjectPageLayout.module.css\");\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/ProjectPageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Page(_ref) {\n  var _this = this;\n\n  var children = _ref.children,\n      projectData = _ref.projectData;\n  var title = projectData.title,\n      langs = projectData.langs,\n      tools = projectData.tools,\n      githubURL = projectData.githubURL,\n      otherURL = projectData.otherURL;\n  return __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.safe_zone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.back_arrow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"\\u2190 Projects\"), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.upper_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, otherURL && __jsx(\"img\", {\n    src: \"/icons/linksvg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 28\n    }\n  }), githubURL && __jsx(\"img\", {\n    src: \"/icons/github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 29\n    }\n  }))), __jsx(\"hr\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lower_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.langs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, langs.map(function (lang) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lang,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, lang);\n  })), __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tools,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, tools.map(function (tool) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tool,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }, tool);\n  })))), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, children), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"\\xA9 2020 Ilan Bigio\")));\n}\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RQYWdlTGF5b3V0LmpzPzFkY2QiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwicHJvamVjdERhdGEiLCJ0aXRsZSIsImxhbmdzIiwidG9vbHMiLCJnaXRodWJVUkwiLCJvdGhlclVSTCIsInN0eWxlcyIsInNhZmVfem9uZSIsImNvbnRhaW5lciIsImJhY2tfYXJyb3ciLCJoZWFkZXIiLCJ1cHBlcl9oZWFkZXIiLCJpY29ucyIsImxpbmUiLCJsb3dlcl9oZWFkZXIiLCJtYXAiLCJsYW5nIiwidG9vbCIsImNvcHlyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUFBLE1BQzlDQyxLQUQ4QyxHQUNERCxXQURDLENBQzlDQyxLQUQ4QztBQUFBLE1BQ3ZDQyxLQUR1QyxHQUNERixXQURDLENBQ3ZDRSxLQUR1QztBQUFBLE1BQ2hDQyxLQURnQyxHQUNESCxXQURDLENBQ2hDRyxLQURnQztBQUFBLE1BQ3pCQyxTQUR5QixHQUNESixXQURDLENBQ3pCSSxTQUR5QjtBQUFBLE1BQ2RDLFFBRGMsR0FDREwsV0FEQyxDQUNkSyxRQURjO0FBRXRELFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDJFQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMkVBQU0sQ0FBQ0UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRiwyRUFBTSxDQUFDRyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBR0U7QUFBSyxhQUFTLEVBQUVILDJFQUFNLENBQUNJLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUosMkVBQU0sQ0FBQ0ssWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFTCwyRUFBTSxDQUFDTCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCQSxLQUE5QixDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVLLDJFQUFNLENBQUNNLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsUUFBUSxJQUFJO0FBQUssT0FBRyxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZixFQUVHRCxTQUFTLElBQUk7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZoQixDQUZGLENBREYsRUFTRTtBQUFJLGFBQVMsRUFBRUUsMkVBQU0sQ0FBQ08sSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBV0U7QUFBSyxhQUFTLEVBQUVQLDJFQUFNLENBQUNRLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVIsMkVBQU0sQ0FBQ0osS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVDtBQUFNLGVBQVMsRUFBRVYsMkVBQU0sQ0FBQ1UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQkEsSUFBL0IsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVWLDJFQUFNLENBQUNILEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDWSxHQUFOLENBQVUsVUFBQ0UsSUFBRDtBQUFBLFdBQ1Q7QUFBTSxlQUFTLEVBQUVYLDJFQUFNLENBQUNXLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JBLElBQS9CLENBRFM7QUFBQSxHQUFWLENBREgsQ0FORixDQVhGLENBSEYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPbEIsUUFBUCxDQTVCRixFQTZCRTtBQUFLLGFBQVMsRUFBRU8sMkVBQU0sQ0FBQ1ksU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkE3QkYsQ0FERixDQURGO0FBbUNEO0tBckN1QnBCLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RQYWdlTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3RQYWdlTGF5b3V0Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuLCBwcm9qZWN0RGF0YSB9KSB7XG4gIGNvbnN0IHsgdGl0bGUsIGxhbmdzLCB0b29scywgZ2l0aHViVVJMLCBvdGhlclVSTCB9ID0gcHJvamVjdERhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zYWZlX3pvbmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tfYXJyb3d9PiYjODU5MjsgUHJvamVjdHM8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cHBlcl9oZWFkZXJ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICB7b3RoZXJVUkwgJiYgPGltZyBzcmM9XCIvaWNvbnMvbGlua3N2Z1wiIC8+fVxuICAgICAgICAgICAgICB7Z2l0aHViVVJMICYmIDxpbWcgc3JjPVwiL2ljb25zL2dpdGh1Yi5zdmdcIiAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9IC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvd2VyX2hlYWRlcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nc30+XG4gICAgICAgICAgICAgIHtsYW5ncy5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT57bGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHN9PlxuICAgICAgICAgICAgICB7dG9vbHMubWFwKCh0b29sKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbH0+e3Rvb2x9PC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PsKpIDIwMjAgSWxhbiBCaWdpbzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectPageLayout.js\n");

/***/ })

})