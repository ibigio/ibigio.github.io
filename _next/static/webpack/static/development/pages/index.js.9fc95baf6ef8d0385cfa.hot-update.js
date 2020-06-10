webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/Navbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar showMenu = function showMenu() {\n  // document.getElementsByClassName(styles.menu).style.top = \"0\";\n  document.getElementById(\"menu\").style.top = \"0\";\n  document.getElementById(\"cover\").style.visibility = \"visible\";\n  document.getElementById(\"cover\").style.opacity = \"50%\";\n};\n\nvar hideMenu = function hideMenu() {\n  document.getElementById(\"menu\").style.top = \"-60px\";\n  document.getElementById(\"cover\").style.opacity = \"0%\";\n  document.getElementById(\"cover\").style.visibility = \"hidden\";\n};\n\nfunction Navbar() {\n  return __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cover,\n    id: \"cover\",\n    onClick: hideMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.left,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    src: \"/icons/logo.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.right,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger,\n    src: \"/icons/hamburger.svg\",\n    onClick: showMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n    id: \"menu\",\n    onClick: hideMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sections,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Home\")), __jsx(\"span\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    to: \"projects\",\n    smooth: true,\n    href: \"#projects\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, \"Projects\")), __jsx(\"span\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"#experience\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, \"Experience\")), __jsx(\"span\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/resume.pdf\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, \"Resume\")), __jsx(\"a\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    href: \"https://github.com/ibigio\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.github_icon,\n    src: \"/icons/github.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  })))))));\n}\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbInNob3dNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJoaWRlTWVudSIsIk5hdmJhciIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvdmVyIiwiY29udGVudCIsImxlZnQiLCJsb2dvIiwicmlnaHQiLCJoYW1idXJnZXIiLCJtZW51Iiwic2VjdGlvbnMiLCJzZWN0aW9uIiwiZ2l0aHViX2ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjtBQUNBQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxHQUF0QyxHQUE0QyxHQUE1QztBQUNBSCxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLENBQXVDRSxVQUF2QyxHQUFvRCxTQUFwRDtBQUNBSixVQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLENBQXVDRyxPQUF2QyxHQUFpRCxLQUFqRDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQk4sVUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsR0FBdEMsR0FBNEMsT0FBNUM7QUFDQUgsVUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUFqQyxDQUF1Q0csT0FBdkMsR0FBaUQsSUFBakQ7QUFDQUwsVUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUFqQyxDQUF1Q0UsVUFBdkMsR0FBb0QsUUFBcEQ7QUFDRCxDQUpEOztBQU1lLFNBQVNHLE1BQVQsR0FBa0I7QUFDL0IsU0FDRTtBQUFL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QURGO0FBd0NEO0tBekN1QlosTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFNMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc3R5bGVzLm1lbnUpLnN0eWxlLnRvcCA9IFwiMFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuc3R5bGUudG9wID0gXCIwXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY292ZXJcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiO1xufTtcblxuY29uc3QgaGlkZU1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKS5zdHlsZS50b3AgPSBcIi02MHB4XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY292ZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3ZlclwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyfSBpZD1cImNvdmVyXCIgb25DbGljaz17aGlkZU1lbnV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfVxuICAgICAgICAgICAgc3JjPVwiL2ljb25zL2hhbWJ1cmdlci5zdmdcIlxuICAgICAgICAgICAgb25DbGljaz17c2hvd01lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IGlkPVwibWVudVwiIG9uQ2xpY2s9e2hpZGVNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbnN9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPFNMaW5rIHRvPVwicHJvamVjdHNcIiBzbW9vdGg9e3RydWV9IGhyZWY9XCIjcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9TTGluaz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI2V4cGVyaWVuY2VcIj5FeHBlcmllbmNlPC9MaW5rPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdW1lLnBkZlwiPlJlc3VtZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2liaWdpb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0aHViX2ljb259IHNyYz1cIi9pY29ucy9naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})