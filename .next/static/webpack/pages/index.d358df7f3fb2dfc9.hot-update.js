"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/destacados.js":
/*!**********************************!*\
  !*** ./components/destacados.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Destacados; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _destacado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destacado */ \"./components/destacado.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Destacados(param) {\n    var hero = param.hero, destacados = param.destacados;\n    var _this = this;\n    console.log(destacados);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"bg-gray-200 pt-2 rounded-lg\",\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/destacados.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", {\n                    className: \"text-2xl m-4 font-bold\",\n                    __source: {\n                        fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/destacados.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        hero,\n                        \"Bla\"\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"lg:flex items-start justify-around p-2\",\n                    __source: {\n                        fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/destacados.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: destacados.slice(0, 3).map(function(destacado) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_destacado__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            destacado: destacado,\n                            __source: {\n                                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/destacados.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        }, destacado.enlace);\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = Destacados;\nvar _c;\n$RefreshReg$(_c, \"Destacados\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rlc3RhY2Fkb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBRXBCLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLEtBQW9CLEVBQUUsQ0FBQztRQUFyQkMsSUFBSSxHQUFOLEtBQW9CLENBQWxCQSxJQUFJLEVBQUVDLFVBQVUsR0FBbEIsS0FBb0IsQ0FBWkEsVUFBVTs7SUFDbkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVO0lBQ3RCLE1BQU07d0ZBRURHLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTZCOzs7Ozs7OztzRkFDekNDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUF3Qjs7Ozs7Ozs7d0JBQUVMLElBQUk7d0JBQUMsQ0FBRzs7O3FGQUMvQ0ksQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXdDOzs7Ozs7OzhCQUNwREosVUFBVSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUztzQ0FDcEMsTUFBTSx3REFBTFgsa0RBQVM7NEJBQXdCVyxTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7MkJBQXRDQSxTQUFTLENBQUNDLE1BQU07Ozs7OztBQU01QyxDQUFDO0tBZHVCWCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGVzdGFjYWRvcy5qcz81ODNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXN0YWNhZG8gZnJvbSBcIi4vZGVzdGFjYWRvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc3RhY2Fkb3MoeyBoZXJvLCBkZXN0YWNhZG9zIH0pIHtcbiAgY29uc29sZS5sb2coZGVzdGFjYWRvcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcHQtMiByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtLTQgZm9udC1ib2xkXCI+e2hlcm99QmxhPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYXJvdW5kIHAtMlwiPlxuICAgICAgICAgIHtkZXN0YWNhZG9zLnNsaWNlKDAsIDMpLm1hcCgoZGVzdGFjYWRvKSA9PiAoXG4gICAgICAgICAgICA8RGVzdGFjYWRvIGtleT17ZGVzdGFjYWRvLmVubGFjZX0gZGVzdGFjYWRvPXtkZXN0YWNhZG99IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRGVzdGFjYWRvIiwiRGVzdGFjYWRvcyIsImhlcm8iLCJkZXN0YWNhZG9zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic2xpY2UiLCJtYXAiLCJkZXN0YWNhZG8iLCJlbmxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/destacados.js\n");

/***/ })

});