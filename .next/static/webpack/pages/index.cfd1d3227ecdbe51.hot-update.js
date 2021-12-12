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

/***/ "./components/listado.js":
/*!*******************************!*\
  !*** ./components/listado.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Listado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _botonAmazon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./botonAmazon */ \"./components/botonAmazon.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Listado(param) {\n    var destacado = param.destacado;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            as: \"/products/\".concat(destacado.slug),\n            href: \"/products/[slug]\",\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex items-center justify-between rounded overflow-hidden mb-4 border-2 rounded-lg bg-white hover:shadow-xl hover:border-gray-300\",\n                __source: {\n                    fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"p-4\",\n                        __source: {\n                            fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: destacado.coverImage,\n                            alt: destacado.title,\n                            width: \"100\",\n                            height: \"100\",\n                            __source: {\n                                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"px-6 py-4\",\n                        __source: {\n                            fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"font-bold text-xl mb-2\",\n                                __source: {\n                                    fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: destacado.title\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                __source: {\n                                    fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: destacado.category\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-gray-700 text-sm\",\n                                __source: {\n                                    fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/components/listado.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: destacado.excerpt\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = Listado;\nvar _c;\n$RefreshReg$(_c, \"Listado\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RhZG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ1c7QUFFeEIsUUFBUSxDQUFDRyxPQUFPLENBQUMsS0FBYSxFQUFFLENBQUM7UUFBZEMsU0FBUyxHQUFYLEtBQWEsQ0FBWEEsU0FBUztJQUN6QyxNQUFNO3VGQUVESCxrREFBSTtZQUFDSSxFQUFFLEVBQUcsQ0FBVSxZQUFpQixPQUFmRCxTQUFTLENBQUNFLElBQUk7WUFBSUMsSUFBSSxFQUFDLENBQWtCOzs7Ozs7OzRGQUM3REMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW1JOzs7Ozs7Ozt5RkFDL0lELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7O3VHQUNqQlQsbURBQUs7NEJBQ0pVLEdBQUcsRUFBRU4sU0FBUyxDQUFDTyxVQUFVOzRCQUN6QkMsR0FBRyxFQUFFUixTQUFTLENBQUNTLEtBQUs7NEJBQ3BCQyxLQUFLLEVBQUMsQ0FBSzs0QkFDWEMsTUFBTSxFQUFDLENBQUs7Ozs7Ozs7OzswRkFJZlAsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O2lHQUN2QkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXdCOzs7Ozs7OzBDQUFFTCxTQUFTLENBQUNTLEtBQUs7O2lHQUV2REcsQ0FBSTtnQ0FBQ1AsU0FBUyxFQUFDLENBQStGOzs7Ozs7OzBDQUM1R0wsU0FBUyxDQUFDYSxRQUFROztpR0FHcEJDLENBQUM7Z0NBQUNULFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OzswQ0FBRUwsU0FBUyxDQUFDZSxPQUFPOzs7Ozs7OztBQU1uRSxDQUFDO0tBM0J1QmhCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0YWRvLmpzP2I0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQm90b25BbWF6b24gZnJvbSBcIi4vYm90b25BbWF6b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGFkbyh7IGRlc3RhY2FkbyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGFzPXtgL3Byb2R1Y3RzLyR7ZGVzdGFjYWRvLnNsdWd9YH0gaHJlZj1cIi9wcm9kdWN0cy9bc2x1Z11cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWItNCBib3JkZXItMiByb3VuZGVkLWxnIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17ZGVzdGFjYWRvLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17ZGVzdGFjYWRvLnRpdGxlfVxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiPntkZXN0YWNhZG8udGl0bGV9PC9kaXY+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1yLTIgbWItMlwiPlxuICAgICAgICAgICAgICB7ZGVzdGFjYWRvLmNhdGVnb3J5fVxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtc21cIj57ZGVzdGFjYWRvLmV4Y2VycHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJCb3RvbkFtYXpvbiIsIkxpc3RhZG8iLCJkZXN0YWNhZG8iLCJhcyIsInNsdWciLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiY292ZXJJbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwiY2F0ZWdvcnkiLCJwIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/listado.js\n");

/***/ })

});