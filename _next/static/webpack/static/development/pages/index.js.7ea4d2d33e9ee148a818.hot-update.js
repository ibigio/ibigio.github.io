webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/ProjectCard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProjectCard(props) {\n  var _this = this;\n\n  console.log(props);\n  var id = props.id,\n      title = props.title,\n      iconPath = props.iconPath,\n      description = props.description,\n      langs = props.langs,\n      tools = props.tools;\n  var url = \"/projects/\" + id;\n  return __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.selectable,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: url,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 15\n    }\n  }, title), __jsx(\"img\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: iconPath,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, description), __jsx(\"hr\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bottom_left,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, langs.map(function (lang) {\n    return __jsx(\"span\", {\n      className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lang,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }\n    }, lang);\n  })), __jsx(\"span\", {\n    className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bottom_right,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, tools.map(function (tool) {\n    return __jsx(\"span\", {\n      className: _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tool,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    }, tool);\n  })))))));\n}\n_c = ProjectCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzP2FhMWYiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInRpdGxlIiwiaWNvblBhdGgiLCJkZXNjcmlwdGlvbiIsImxhbmdzIiwidG9vbHMiLCJ1cmwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzZWxlY3RhYmxlIiwiY29udGVudCIsImhlYWRlciIsImljb24iLCJib2R5IiwibGluZSIsImZvb3RlciIsImJvdHRvbV9sZWZ0IiwibWFwIiwibGFuZyIsImJvdHRvbV9yaWdodCIsInRvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUR5QyxNQUVqQ0csRUFGaUMsR0FFa0JILEtBRmxCLENBRWpDRyxFQUZpQztBQUFBLE1BRTdCQyxLQUY2QixHQUVrQkosS0FGbEIsQ0FFN0JJLEtBRjZCO0FBQUEsTUFFdEJDLFFBRnNCLEdBRWtCTCxLQUZsQixDQUV0QkssUUFGc0I7QUFBQSxNQUVaQyxXQUZZLEdBRWtCTixLQUZsQixDQUVaTSxXQUZZO0FBQUEsTUFFQ0MsS0FGRCxHQUVrQlAsS0FGbEIsQ0FFQ08sS0FGRDtBQUFBLE1BRVFDLEtBRlIsR0FFa0JSLEtBRmxCLENBRVFRLEtBRlI7QUFHekMsTUFBTUMsR0FBRyxHQUFHLGVBQWVOLEVBQTNCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRU8sOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUgsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNHLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFSiw4REFBTSxDQUFDTixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDQSxLQUFoQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVNLDhEQUFNLENBQUNLLElBQXZCO0FBQTZCLE9BQUcsRUFBRVYsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFRRTtBQUFLLGFBQVMsRUFBRUssOERBQU0sQ0FBQ00sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QlYsV0FBOUIsQ0FSRixFQVlFO0FBQUksYUFBUyxFQUFFSSw4REFBTSxDQUFDTyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFlRTtBQUFLLGFBQVMsRUFBRVAsOERBQU0sQ0FBQ1EsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFUiw4REFBTSxDQUFDUyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNUO0FBQU0sZUFBUyxFQUFFWCw4REFBTSxDQUFDVyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCQSxJQUEvQixDQURTO0FBQUEsR0FBVixDQURILENBREYsRUFNRTtBQUFNLGFBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDRyxJQUFEO0FBQUEsV0FDVDtBQUFNLGVBQVMsRUFBRWIsOERBQU0sQ0FBQ2EsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQkEsSUFBL0IsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQU5GLENBZkYsQ0FERixDQURGLENBREYsQ0FERjtBQW9DRDtLQXhDdUJ4QixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENhcmQocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCB7IGlkLCB0aXRsZSwgaWNvblBhdGgsIGRlc2NyaXB0aW9uLCBsYW5ncywgdG9vbHMgfSA9IHByb3BzO1xuICBjb25zdCB1cmwgPSBcIi9wcm9qZWN0cy9cIiArIGlkO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0YWJsZX0+XG4gICAgICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz17aWNvblBhdGh9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEJvZHkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93X2NvbnRhaW5lcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PiZyYXJyOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9IC8+XG5cbiAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9sZWZ0fT5cbiAgICAgICAgICAgICAgICB7bGFuZ3MubWFwKChsYW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT57bGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3JpZ2h0fT5cbiAgICAgICAgICAgICAgICB7dG9vbHMubWFwKCh0b29sKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sfT57dG9vbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectCard.js\n");

/***/ })

})