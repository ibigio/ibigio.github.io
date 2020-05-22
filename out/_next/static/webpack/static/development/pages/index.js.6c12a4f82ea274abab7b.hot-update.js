webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.js\");\n/* harmony import */ var _components_ExperienceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceCard */ \"./components/ExperienceCard.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Intro */ \"./components/Intro.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar title = \"Deterministic Minesweeper\";\nvar iconPath = \"/twitter-copy.svg\";\nvar body = \"A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.\";\nvar langs = [\"Python\", \"JS\"];\nvar tools = [\"Heroku\", \"SciPy\", \"p5.js\"];\nvar projectInfo = {\n  title: title,\n  iconPath: iconPath,\n  body: body,\n  langs: langs,\n  tools: tools\n};\nvar role = \"Full Stack Engineer\";\nvar company = \"Twitter\";\nvar bullets = [\"Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard and billing flow.\", \"Held inception meeting with 15 engineers, producing 40 tickets, and then wrote entire technical design document.\", \"Spent a week migrating 22 website routes to a new layouts pattern, writing over 500 lines of React in 11 files.\"];\nvar date = \"Summer 2019\";\nvar location = \"San Francisco, CA\";\nfunction Home() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.intro_section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.bounded_width,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }))), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main_container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, projectInfo, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    role: role,\n    company: company,\n    iconPath: iconPath,\n    bullets: bullets,\n    date: date,\n    location: location,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }))) // <Layout home>\n  //   <Head>\n  //     <title>{siteTitle}</title>\n  //   </Head>\n  //   <section className={utilStyles.headingMd}>\n  //     <p>[Your Self Introduction]</p>\n  //     <p>\n  //       (This is a sample website - you’ll be building a site like this on{\" \"}\n  //       <a href=\"https://nextjs.org/learn\">our Next.js tutorial</a>.)\n  //     </p>\n  //   </section>\n  // </Layout>\n  ;\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInRpdGxlIiwiaWNvblBhdGgiLCJib2R5IiwibGFuZ3MiLCJ0b29scyIsInByb2plY3RJbmZvIiwicm9sZSIsImNvbXBhbnkiLCJidWxsZXRzIiwiZGF0ZSIsImxvY2F0aW9uIiwiSG9tZSIsInN0eWxlcyIsImludHJvX3NlY3Rpb24iLCJib3VuZGVkX3dpZHRoIiwibWFpbl9jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLDJCQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLG1CQUFqQjtBQUNBLElBQU1DLElBQUksR0FDUixnSUFERjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUFDLFFBQUQsRUFBVyxJQUFYLENBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixPQUFwQixDQUFkO0FBRUEsSUFBTUMsV0FBVyxHQUFHO0FBQUVMLE9BQUssRUFBTEEsS0FBRjtBQUFTQyxVQUFRLEVBQVJBLFFBQVQ7QUFBbUJDLE1BQUksRUFBSkEsSUFBbkI7QUFBeUJDLE9BQUssRUFBTEEsS0FBekI7QUFBZ0NDLE9BQUssRUFBTEE7QUFBaEMsQ0FBcEI7QUFFQSxJQUFNRSxJQUFJLEdBQUcscUJBQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZCxpSEFEYyxFQUVkLGtIQUZjLEVBR2QsaUhBSGMsQ0FBaEI7QUFLQSxJQUFNQyxJQUFJLEdBQUcsYUFBYjtBQUNBLElBQU1DLFFBQVEsR0FBRyxtQkFBakI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFTLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUZGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBSyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFELHlGQUFpQlYsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUUsTUFBQyxrRUFBRDtBQUNFLFFBQUksRUFBRUMsSUFEUjtBQUVFLFdBQU8sRUFBRUMsT0FGWDtBQUdFLFlBQVEsRUFBRU4sUUFIWjtBQUlFLFdBQU8sRUFBRU8sT0FKWDtBQUtFLFFBQUksRUFBRUMsSUFMUjtBQU1FLFlBQVEsRUFBRUMsUUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixDQURGLENBc0JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDRjtBQW1DRDtLQXBDdUJDLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IEV4cGVyaWVuY2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEludHJvIGZyb20gXCIuLi9jb21wb25lbnRzL0ludHJvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IHRpdGxlID0gXCJEZXRlcm1pbmlzdGljIE1pbmVzd2VlcGVyXCI7XG5jb25zdCBpY29uUGF0aCA9IFwiL3R3aXR0ZXItY29weS5zdmdcIjtcbmNvbnN0IGJvZHkgPVxuICBcIkEgdmVyc2lvbiBvZiBNaW5lc3dlZXBlciB3aGVyZSBldmVyeSBnYW1lIHlvdSBwbGF5IGlzIGd1YXJhbnRlZWQgdG8gcmVxdWlyZSBubyBndWVzc2luZy4gQWNoaWV2ZWQgdGhyb3VnaCBhbGdvcml0aG1pYyBzb2x2aW5nLlwiO1xuY29uc3QgbGFuZ3MgPSBbXCJQeXRob25cIiwgXCJKU1wiXTtcbmNvbnN0IHRvb2xzID0gW1wiSGVyb2t1XCIsIFwiU2NpUHlcIiwgXCJwNS5qc1wiXTtcblxuY29uc3QgcHJvamVjdEluZm8gPSB7IHRpdGxlLCBpY29uUGF0aCwgYm9keSwgbGFuZ3MsIHRvb2xzIH07XG5cbmNvbnN0IHJvbGUgPSBcIkZ1bGwgU3RhY2sgRW5naW5lZXJcIjtcbmNvbnN0IGNvbXBhbnkgPSBcIlR3aXR0ZXJcIjtcbmNvbnN0IGJ1bGxldHMgPSBbXG4gIFwiTGVkIHRlYW0gb2YgMTIgaW4gYSBjdXN0b21lci1mYWNpbmcgcmVkZXNpZ24gdG8gVHdpdHRlciBEZXZlbG9wZXIgUG9ydGFsLCByZXZhbXBpbmcgZGFzaGJvYXJkIGFuZCBiaWxsaW5nIGZsb3cuXCIsXG4gIFwiSGVsZCBpbmNlcHRpb24gbWVldGluZyB3aXRoIDE1IGVuZ2luZWVycywgcHJvZHVjaW5nIDQwIHRpY2tldHMsIGFuZCB0aGVuIHdyb3RlIGVudGlyZSB0ZWNobmljYWwgZGVzaWduIGRvY3VtZW50LlwiLFxuICBcIlNwZW50IGEgd2VlayBtaWdyYXRpbmcgMjIgd2Vic2l0ZSByb3V0ZXMgdG8gYSBuZXcgbGF5b3V0cyBwYXR0ZXJuLCB3cml0aW5nIG92ZXIgNTAwIGxpbmVzIG9mIFJlYWN0IGluIDExIGZpbGVzLlwiLFxuXTtcbmNvbnN0IGRhdGUgPSBcIlN1bW1lciAyMDE5XCI7XG5jb25zdCBsb2NhdGlvbiA9IFwiU2FuIEZyYW5jaXNjbywgQ0FcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9fc2VjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm91bmRlZF93aWR0aH0+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fY29udGFpbmVyfT5cbiAgICAgICAgPFByb2plY3RDYXJkIHsuLi5wcm9qZWN0SW5mb30+PC9Qcm9qZWN0Q2FyZD5cbiAgICAgICAgPEV4cGVyaWVuY2VDYXJkXG4gICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgIGljb25QYXRoPXtpY29uUGF0aH1cbiAgICAgICAgICBidWxsZXRzPXtidWxsZXRzfVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgLy8gPExheW91dCBob21lPlxuICAgIC8vICAgPEhlYWQ+XG4gICAgLy8gICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgLy8gICA8L0hlYWQ+XG4gICAgLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAvLyAgICAgPHA+W1lvdXIgU2VsZiBJbnRyb2R1Y3Rpb25dPC9wPlxuICAgIC8vICAgICA8cD5cbiAgICAvLyAgICAgICAoVGhpcyBpcyBhIHNhbXBsZSB3ZWJzaXRlIC0geW914oCZbGwgYmUgYnVpbGRpbmcgYSBzaXRlIGxpa2UgdGhpcyBvbntcIiBcIn1cbiAgICAvLyAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+LilcbiAgICAvLyAgICAgPC9wPlxuICAgIC8vICAgPC9zZWN0aW9uPlxuICAgIC8vIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})