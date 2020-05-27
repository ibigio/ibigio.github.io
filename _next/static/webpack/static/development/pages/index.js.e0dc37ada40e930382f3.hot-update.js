webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Intro; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Intro.module.css */ \"./styles/Intro.module.css\");\n/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ilanbigio/Desktop/github/ibigio.github.io/components/Intro.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar orange = function orange(text) {\n  return __jsx(\"span\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.orange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 26\n    }\n  }, text);\n};\n\nfunction Intro() {\n  return __jsx(\"div\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profile,\n    src: \"/images/profile.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.intro_text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Hi, I'm \", __jsx(\"span\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blue,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 19\n    }\n  }, \"Ilan\"), \".\"), __jsx(\"div\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"ilanbigio@gmail.com\"), __jsx(\"div\", {\n    className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"I graduated from \", orange(\"Brown University\"), \", and will be starting at\", \" \", orange(\"Google\"), \" as a software engineer in August. I love teaching and learning, and in my free time I build python projects that automate stuff to \\u201Csave me time\\u201D.\")));\n}\n_c = Intro;\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ludHJvLmpzPzk5YzgiXSwibmFtZXMiOlsib3JhbmdlIiwidGV4dCIsInN0eWxlcyIsIkludHJvIiwiY29udGFpbmVyIiwicHJvZmlsZSIsImludHJvX3RleHQiLCJibHVlIiwic3VidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQ7QUFBQSxTQUFVO0FBQU0sYUFBUyxFQUFFQywrREFBTSxDQUFDRixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDQyxJQUFqQyxDQUFWO0FBQUEsQ0FBZjs7QUFFZSxTQUFTRSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUVELCtEQUFNLENBQUNFLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsK0RBQU0sQ0FBQ0csT0FBdkI7QUFBZ0MsT0FBRyxFQUFDLHFCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1U7QUFBTSxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVixNQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVMLCtEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsRUFLRTtBQUFLLGFBQVMsRUFBRU4sK0RBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDb0JULE1BQU0sQ0FBQyxrQkFBRCxDQUQxQiwrQkFDeUUsR0FEekUsRUFFR0EsTUFBTSxDQUFDLFFBQUQsQ0FGVCxrS0FMRixDQUZGLENBREY7QUFpQkQ7S0FsQnVCRyxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnRyby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9JbnRyby5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IG9yYW5nZSA9ICh0ZXh0KSA9PiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vcmFuZ2V9Pnt0ZXh0fTwvc3Bhbj47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLnBuZ1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvX3RleHR9PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgSGksIEknbSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ibHVlfT5JbGFuPC9zcGFuPi5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+aWxhbmJpZ2lvQGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICAgIEkgZ3JhZHVhdGVkIGZyb20ge29yYW5nZShcIkJyb3duIFVuaXZlcnNpdHlcIil9LCBhbmQgd2lsbCBiZSBzdGFydGluZyBhdHtcIiBcIn1cbiAgICAgICAgICB7b3JhbmdlKFwiR29vZ2xlXCIpfSBhcyBhIHNvZnR3YXJlIGVuZ2luZWVyIGluIEF1Z3VzdC4gSSBsb3ZlIHRlYWNoaW5nXG4gICAgICAgICAgYW5kIGxlYXJuaW5nLCBhbmQgaW4gbXkgZnJlZSB0aW1lIEkgYnVpbGQgcHl0aG9uIHByb2plY3RzIHRoYXRcbiAgICAgICAgICBhdXRvbWF0ZSBzdHVmZiB0byDigJxzYXZlIG1lIHRpbWXigJ0uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Intro.js\n");

/***/ })

})