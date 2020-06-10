webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./components/ProjectPageLayout.js":
/*!*****************************************!*\
  !*** ./components/ProjectPageLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProjectPageLayout.module.css */ \"./styles/ProjectPageLayout.module.css\");\n/* harmony import */ var _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/ProjectPageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Page(_ref) {\n  var _this = this;\n\n  var children = _ref.children,\n      projectData = _ref.projectData;\n  var title = projectData.title,\n      langs = projectData.langs,\n      tools = projectData.tools,\n      githubURL = projectData.githubURL,\n      otherURL = projectData.otherURL;\n  return __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.safe_zone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.upper_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.back_arrow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/#projects\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    style: {\n      display: \"hidden\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"\\u2190 Projects\"))), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, otherURL ? __jsx(\"a\", {\n    href: otherURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon_gray,\n    src: \"/icons/gray-link.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }), githubURL ? __jsx(\"a\", {\n    href: githubURL,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 19\n    }\n  })) : __jsx(\"img\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/gray-github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }))), __jsx(\"hr\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lower_header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.langs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, langs.map(function (lang) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lang,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, lang);\n  })), __jsx(\"span\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tools,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, tools.map(function (tool) {\n    return __jsx(\"span\", {\n      className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tool,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }, tool);\n  })))), __jsx(\"main\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \" \", children)), __jsx(\"footer\", {\n    className: _styles_ProjectPageLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, \"\\xA9 2020 Ilan Bigio\"));\n}\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RQYWdlTGF5b3V0LmpzPzFkY2QiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwicHJvamVjdERhdGEiLCJ0aXRsZSIsImxhbmdzIiwidG9vbHMiLCJnaXRodWJVUkwiLCJvdGhlclVSTCIsInN0eWxlcyIsInNhZmVfem9uZSIsImNvbnRhaW5lciIsImhlYWRlciIsInVwcGVyX2hlYWRlciIsImJhY2tfYXJyb3ciLCJkaXNwbGF5IiwiaWNvbnMiLCJpY29uIiwiaWNvbl9ncmF5IiwibGluZSIsImxvd2VyX2hlYWRlciIsIm1hcCIsImxhbmciLCJ0b29sIiwibWFpbiIsImNvcHlyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFBQSxNQUM5Q0MsS0FEOEMsR0FDREQsV0FEQyxDQUM5Q0MsS0FEOEM7QUFBQSxNQUN2Q0MsS0FEdUMsR0FDREYsV0FEQyxDQUN2Q0UsS0FEdUM7QUFBQSxNQUNoQ0MsS0FEZ0MsR0FDREgsV0FEQyxDQUNoQ0csS0FEZ0M7QUFBQSxNQUN6QkMsU0FEeUIsR0FDREosV0FEQyxDQUN6QkksU0FEeUI7QUFBQSxNQUNkQyxRQURjLEdBQ0RMLFdBREMsQ0FDZEssUUFEYztBQUV0RCxTQUNFO0FBQUssYUFBUyxFQUFFQywyRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDJFQUFNLENBQUNFLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsMkVBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFB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Q0E1Q0YsQ0FERixFQStDRTtBQUFRLGFBQVMsRUFBRU8sMkVBQU0sQ0FBQ2dCLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBL0NGLENBREY7QUFtREQ7S0FyRHVCeEIsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdFBhZ2VMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvamVjdFBhZ2VMYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4sIHByb2plY3REYXRhIH0pIHtcbiAgY29uc3QgeyB0aXRsZSwgbGFuZ3MsIHRvb2xzLCBnaXRodWJVUkwsIG90aGVyVVJMIH0gPSBwcm9qZWN0RGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNhZmVfem9uZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwcGVyX2hlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tfYXJyb3d9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGRpc3BsYXk6IFwiaGlkZGVuXCIgfX0+JiM4NTkyOyBQcm9qZWN0czwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICB7b3RoZXJVUkwgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17b3RoZXJVUkx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9XCIvaWNvbnMvbGluay5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb25fZ3JheX0gc3JjPVwiL2ljb25zL2dyYXktbGluay5zdmdcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Z2l0aHViVVJMID8gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2dpdGh1YlVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pY29ucy9naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9XCIvaWNvbnMvZ3JheS1naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9IC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvd2VyX2hlYWRlcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nc30+XG4gICAgICAgICAgICAgIHtsYW5ncy5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT57bGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHN9PlxuICAgICAgICAgICAgICB7dG9vbHMubWFwKCh0b29sKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbH0+e3Rvb2x9PC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+IHtjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT7CqSAyMDIwIElsYW4gQmlnaW88L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectPageLayout.js\n");

/***/ })

})