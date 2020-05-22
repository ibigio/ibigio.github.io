webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.js\");\n/* harmony import */ var _components_ExperienceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExperienceCard */ \"./components/ExperienceCard.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Intro */ \"./components/Intro.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar title = \"Deterministic Minesweeper\";\nvar iconPath = \"/twitter-copy.svg\";\nvar body = \"A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.\";\nvar langs = [\"Python\", \"JS\"];\nvar tools = [\"Heroku\", \"SciPy\", \"p5.js\"];\nvar role = \"Full Stack Engineer\";\nvar company = \"Twitter\";\nvar bullets = [\"Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard and billing flow.\", \"Held inception meeting with 15 engineers, producing 40 tickets, and then wrote entire technical design document.\", \"Spent a week migrating 22 website routes to a new layouts pattern, writing over 500 lines of React in 11 files.\"];\nvar date = \"Summer 2019\";\nvar location = \"San Francisco, CA\";\nfunction Home() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.intro_section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }))), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main_container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: title,\n    iconPath: iconPath,\n    body: body,\n    langs: langs,\n    tools: tools,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    role: role,\n    company: company,\n    iconPath: iconPath,\n    bullets: bullets,\n    date: date,\n    location: location,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }))) // <Layout home>\n  //   <Head>\n  //     <title>{siteTitle}</title>\n  //   </Head>\n  //   <section className={utilStyles.headingMd}>\n  //     <p>[Your Self Introduction]</p>\n  //     <p>\n  //       (This is a sample website - you’ll be building a site like this on{\" \"}\n  //       <a href=\"https://nextjs.org/learn\">our Next.js tutorial</a>.)\n  //     </p>\n  //   </section>\n  // </Layout>\n  ;\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInRpdGxlIiwiaWNvblBhdGgiLCJib2R5IiwibGFuZ3MiLCJ0b29scyIsInJvbGUiLCJjb21wYW55IiwiYnVsbGV0cyIsImRhdGUiLCJsb2NhdGlvbiIsIkhvbWUiLCJzdHlsZXMiLCJpbnRyb19zZWN0aW9uIiwibWFpbl9jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRywyQkFBZDtBQUNBLElBQU1DLFFBQVEsR0FBRyxtQkFBakI7QUFDQSxJQUFNQyxJQUFJLEdBQ1IsZ0lBREY7QUFFQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxRQUFELEVBQVcsSUFBWCxDQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsT0FBcEIsQ0FBZDtBQUVBLElBQU1DLElBQUksR0FBRyxxQkFBYjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxDQUNkLGlIQURjLEVBRWQsa0hBRmMsRUFHZCxpSEFIYyxDQUFoQjtBQUtBLElBQU1DLElBQUksR0FBRyxhQUFiO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLG1CQUFqQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUNFLFNBQUssRUFBRWIsS0FEVDtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLFFBQUksRUFBRUMsSUFIUjtBQUlFLFNBQUssRUFBRUMsS0FKVDtBQUtFLFNBQUssRUFBRUMsS0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFQyxJQURSO0FBRUUsV0FBTyxFQUFFQyxPQUZYO0FBR0UsWUFBUSxFQUFFTCxRQUhaO0FBSUUsV0FBTyxFQUFFTSxPQUpYO0FBS0UsUUFBSSxFQUFFQyxJQUxSO0FBTUUsWUFBUSxFQUFFQyxRQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQVRGLENBREYsQ0E0QkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNGO0FBeUNEO0tBMUN1QkMsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgRXhwZXJpZW5jZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUNhcmRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgSW50cm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm9cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgdGl0bGUgPSBcIkRldGVybWluaXN0aWMgTWluZXN3ZWVwZXJcIjtcbmNvbnN0IGljb25QYXRoID0gXCIvdHdpdHRlci1jb3B5LnN2Z1wiO1xuY29uc3QgYm9keSA9XG4gIFwiQSB2ZXJzaW9uIG9mIE1pbmVzd2VlcGVyIHdoZXJlIGV2ZXJ5IGdhbWUgeW91IHBsYXkgaXMgZ3VhcmFudGVlZCB0byByZXF1aXJlIG5vIGd1ZXNzaW5nLiBBY2hpZXZlZCB0aHJvdWdoIGFsZ29yaXRobWljIHNvbHZpbmcuXCI7XG5jb25zdCBsYW5ncyA9IFtcIlB5dGhvblwiLCBcIkpTXCJdO1xuY29uc3QgdG9vbHMgPSBbXCJIZXJva3VcIiwgXCJTY2lQeVwiLCBcInA1LmpzXCJdO1xuXG5jb25zdCByb2xlID0gXCJGdWxsIFN0YWNrIEVuZ2luZWVyXCI7XG5jb25zdCBjb21wYW55ID0gXCJUd2l0dGVyXCI7XG5jb25zdCBidWxsZXRzID0gW1xuICBcIkxlZCB0ZWFtIG9mIDEyIGluIGEgY3VzdG9tZXItZmFjaW5nIHJlZGVzaWduIHRvIFR3aXR0ZXIgRGV2ZWxvcGVyIFBvcnRhbCwgcmV2YW1waW5nIGRhc2hib2FyZCBhbmQgYmlsbGluZyBmbG93LlwiLFxuICBcIkhlbGQgaW5jZXB0aW9uIG1lZXRpbmcgd2l0aCAxNSBlbmdpbmVlcnMsIHByb2R1Y2luZyA0MCB0aWNrZXRzLCBhbmQgdGhlbiB3cm90ZSBlbnRpcmUgdGVjaG5pY2FsIGRlc2lnbiBkb2N1bWVudC5cIixcbiAgXCJTcGVudCBhIHdlZWsgbWlncmF0aW5nIDIyIHdlYnNpdGUgcm91dGVzIHRvIGEgbmV3IGxheW91dHMgcGF0dGVybiwgd3JpdGluZyBvdmVyIDUwMCBsaW5lcyBvZiBSZWFjdCBpbiAxMSBmaWxlcy5cIixcbl07XG5jb25zdCBkYXRlID0gXCJTdW1tZXIgMjAxOVwiO1xuY29uc3QgbG9jYXRpb24gPSBcIlNhbiBGcmFuY2lzY28sIENBXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmludHJvX3NlY3Rpb259PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX2NvbnRhaW5lcn0+XG4gICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBpY29uUGF0aD17aWNvblBhdGh9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBsYW5ncz17bGFuZ3N9XG4gICAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICAvPlxuICAgICAgICA8RXhwZXJpZW5jZUNhcmRcbiAgICAgICAgICByb2xlPXtyb2xlfVxuICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgaWNvblBhdGg9e2ljb25QYXRofVxuICAgICAgICAgIGJ1bGxldHM9e2J1bGxldHN9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICAvLyA8TGF5b3V0IGhvbWU+XG4gICAgLy8gICA8SGVhZD5cbiAgICAvLyAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAvLyAgIDwvSGVhZD5cbiAgICAvLyAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgIC8vICAgICA8cD5bWW91ciBTZWxmIEludHJvZHVjdGlvbl08L3A+XG4gICAgLy8gICAgIDxwPlxuICAgIC8vICAgICAgIChUaGlzIGlzIGEgc2FtcGxlIHdlYnNpdGUgLSB5b3XigJlsbCBiZSBidWlsZGluZyBhIHNpdGUgbGlrZSB0aGlzIG9ue1wiIFwifVxuICAgIC8vICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5vdXIgTmV4dC5qcyB0dXRvcmlhbDwvYT4uKVxuICAgIC8vICAgICA8L3A+XG4gICAgLy8gICA8L3NlY3Rpb24+XG4gICAgLy8gPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})