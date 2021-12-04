"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[slug]";
exports.ids = ["pages/products/[slug]"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostSlugs\": () => (/* binding */ getPostSlugs),\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug),\n/* harmony export */   \"getAllPosts\": () => (/* binding */ getAllPosts)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), \"_products\");\nfunction getPostSlugs() {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n}\nfunction getPostBySlug(slug, fields = []) {\n    const realSlug = slug.replace(/\\.md$/, \"\");\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const items = {\n    };\n    // Ensure only the minimal needed data is exposed\n    fields.forEach((field)=>{\n        if (field === \"slug\") {\n            items[field] = realSlug;\n        }\n        if (field === \"content\") {\n            items[field] = content;\n        }\n        if (typeof data[field] !== \"undefined\") {\n            items[field] = data[field];\n        }\n    });\n    return items;\n}\nfunction getAllPosts(fields = []) {\n    const slugs = getPostSlugs();\n    const posts = slugs.map((slug)=>getPostBySlug(slug, fields)\n    )// sort posts by date in descending order\n    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1\n    );\n    console.log(posts);\n    return posts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQjtBQUNRO0FBQ0s7QUFFaEMsS0FBSyxDQUFDRyxjQUFjLEdBQUdGLDBDQUFJLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQVc7QUFFL0MsU0FBU0MsWUFBWSxHQUFHLENBQUM7SUFDOUIsTUFBTSxDQUFDTixxREFBYyxDQUFDRyxjQUFjO0FBQ3RDLENBQUM7QUFFTSxTQUFTSyxhQUFhLENBQUNDLElBQUksRUFBRUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEQsS0FBSyxDQUFDQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTyxVQUFVLENBQUU7SUFDekMsS0FBSyxDQUFDQyxRQUFRLEdBQUdaLDBDQUFJLENBQUNFLGNBQWMsS0FBS1EsUUFBUSxDQUFDLEdBQUc7SUFDckQsS0FBSyxDQUFDRyxZQUFZLEdBQUdkLHNEQUFlLENBQUNhLFFBQVEsRUFBRSxDQUFNO0lBQ3JELEtBQUssQ0FBQyxDQUFDLENBQUNHLElBQUksR0FBRUMsT0FBTyxFQUFDLENBQUMsR0FBR2Ysa0RBQU0sQ0FBQ1ksWUFBWTtJQUU3QyxLQUFLLENBQUNJLEtBQUssR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVoQixFQUFpRDtJQUNqRFIsTUFBTSxDQUFDUyxPQUFPLEVBQUVDLEtBQUssR0FBSyxDQUFDO1FBQ3pCLEVBQUUsRUFBRUEsS0FBSyxLQUFLLENBQU0sT0FBRSxDQUFDO1lBQ3JCRixLQUFLLENBQUNFLEtBQUssSUFBSVQsUUFBUTtRQUN6QixDQUFDO1FBQ0QsRUFBRSxFQUFFUyxLQUFLLEtBQUssQ0FBUyxVQUFFLENBQUM7WUFDeEJGLEtBQUssQ0FBQ0UsS0FBSyxJQUFJSCxPQUFPO1FBQ3hCLENBQUM7UUFFRCxFQUFFLEVBQUUsTUFBTSxDQUFDRCxJQUFJLENBQUNJLEtBQUssTUFBTSxDQUFXLFlBQUUsQ0FBQztZQUN2Q0YsS0FBSyxDQUFDRSxLQUFLLElBQUlKLElBQUksQ0FBQ0ksS0FBSztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0YsS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTRyxXQUFXLENBQUNYLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLEtBQUssQ0FBQ1ksS0FBSyxHQUFHaEIsWUFBWTtJQUMxQixLQUFLLENBQUNpQixLQUFLLEdBQUdELEtBQUssQ0FDaEJFLEdBQUcsRUFBRWYsSUFBSSxHQUFLRCxhQUFhLENBQUNDLElBQUksRUFBRUMsTUFBTTtLQUN6QyxFQUF5QztLQUN4Q2UsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssR0FBTUQsS0FBSyxDQUFDRSxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDOztJQUMzREMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUs7SUFDakIsTUFBTSxDQUFDQSxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nob2xsb3N0ZWNobmV4dC8uL2xpYi9hcGkuanM/NDU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9wcm9kdWN0c1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzID0gW10pIHtcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpO1xuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICBjb25zdCBpdGVtcyA9IHt9O1xuXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkID09PSBcInNsdWdcIikge1xuICAgICAgaXRlbXNbZmllbGRdID0gcmVhbFNsdWc7XG4gICAgfVxuICAgIGlmIChmaWVsZCA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhW2ZpZWxkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaXRlbXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHMgPSBbXSkge1xuICBjb25zdCBzbHVncyA9IGdldFBvc3RTbHVncygpO1xuICBjb25zdCBwb3N0cyA9IHNsdWdzXG4gICAgLm1hcCgoc2x1ZykgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMpKVxuICAgIC8vIHNvcnQgcG9zdHMgYnkgZGF0ZSBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgLnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRlID8gLTEgOiAxKSk7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcbiAgcmV0dXJuIHBvc3RzO1xufVxuIl0sIm5hbWVzIjpbImZzIiwiam9pbiIsIm1hdHRlciIsInBvc3RzRGlyZWN0b3J5IiwicHJvY2VzcyIsImN3ZCIsImdldFBvc3RTbHVncyIsInJlYWRkaXJTeW5jIiwiZ2V0UG9zdEJ5U2x1ZyIsInNsdWciLCJmaWVsZHMiLCJyZWFsU2x1ZyIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJjb250ZW50IiwiaXRlbXMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJtYXAiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsImRhdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/markdownToHtmls.js":
/*!********************************!*\
  !*** ./lib/markdownToHtmls.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ markdownToHtml)\n/* harmony export */ });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_0__]);\n([remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\nasync function markdownToHtml(markdown) {\n    const result = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__.html).process(markdown);\n    return result.toString();\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbWFya2Rvd25Ub0h0bWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNHO0FBRW5CLGVBQWVFLGNBQWMsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDdEQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDSiw4Q0FBTSxHQUFHSyxHQUFHLENBQUNKLDZDQUFJLEVBQUVLLE9BQU8sQ0FBQ0gsUUFBUTtJQUN4RCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0csUUFBUTtBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvbGxvc3RlY2huZXh0Ly4vbGliL21hcmtkb3duVG9IdG1scy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbWFyayB9IGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwicmVtYXJrLWh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub0h0bWwobWFya2Rvd24pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtYXJrKCkudXNlKGh0bWwpLnByb2Nlc3MobWFya2Rvd24pO1xuICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG59XG4iXSwibmFtZXMiOlsicmVtYXJrIiwiaHRtbCIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd24iLCJyZXN1bHQiLCJ1c2UiLCJwcm9jZXNzIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/markdownToHtmls.js\n");

/***/ }),

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/markdownToHtmls */ \"./lib/markdownToHtmls.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__]);\n_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Post({ producto , morePosts , preview  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(producto);\n    if (!router.isFallback && !(producto === null || producto === void 0 ? void 0 : producto.slug)) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404,\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/pages/products/[slug].js\",\n                lineNumber: 10,\n                columnNumber: 12\n            },\n            __self: this\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/pages/products/[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this,\n            children: producto.title\n        })\n    }));\n};\nasync function getStaticProps({ params  }) {\n    const producto = (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getPostBySlug)(params.slug, [\n        \"title\",\n        \"date\",\n        \"slug\",\n        \"author\",\n        \"content\",\n        \"ogImage\",\n        \"coverImage\", \n    ]);\n    const content = await (0,_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(producto.content || \"\");\n    return {\n        props: {\n            producto: {\n                ...producto,\n                content\n            }\n        }\n    };\n}\nasync function getStaticPaths() {\n    const producto1 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getAllPosts)([\n        \"slug\"\n    ]);\n    return {\n        paths: producto1.map((producto)=>{\n            return {\n                params: {\n                    slug: producto.slug\n                }\n            };\n        }),\n        fallback: false\n    };\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0w7QUFDd0I7QUFDSjtBQUV2QyxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUNDLFFBQVEsR0FBRUMsU0FBUyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUQsS0FBSyxDQUFDQyxNQUFNLEdBQUdULHNEQUFTO0lBQ3hCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtJQUNwQixFQUFFLEdBQUdHLE1BQU0sQ0FBQ0csVUFBVSxNQUFLTixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxRQUFRLENBQUVPLElBQUksR0FBRSxDQUFDO1FBQzFDLE1BQU0sc0VBQUVaLG1EQUFTO1lBQUNhLFVBQVUsRUFBRSxHQUFHOzs7Ozs7OztJQUNuQyxDQUFDO0lBQ0QsTUFBTTt1RkFFREMsQ0FBRTs7Ozs7OztzQkFBRVQsUUFBUSxDQUFDVSxLQUFLOzs7QUFHekIsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUNaLFFBQVEsR0FBR0osdURBQWEsQ0FBQ2dCLE1BQU0sQ0FBQ0wsSUFBSSxFQUFFLENBQUM7UUFDM0MsQ0FBTztRQUNQLENBQU07UUFDTixDQUFNO1FBQ04sQ0FBUTtRQUNSLENBQVM7UUFDVCxDQUFTO1FBQ1QsQ0FBWTtJQUNkLENBQUM7SUFDRCxLQUFLLENBQUNNLE9BQU8sR0FBRyxLQUFLLENBQUNmLGdFQUFjLENBQUNFLFFBQVEsQ0FBQ2EsT0FBTyxJQUFJLENBQUU7SUFFM0QsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTmQsUUFBUSxFQUFFLENBQUM7bUJBQ05BLFFBQVE7Z0JBQ1hhLE9BQU87WUFDVCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sZUFBZUUsY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDZixTQUFRLEdBQUdILHFEQUFXLENBQUMsQ0FBQztRQUFBLENBQU07SUFBQSxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxDQUFDO1FBQ05tQixLQUFLLEVBQUVoQixTQUFRLENBQUNpQixHQUFHLEVBQUVqQixRQUFRLEdBQUssQ0FBQztZQUNqQyxNQUFNLENBQUMsQ0FBQztnQkFDTlksTUFBTSxFQUFFLENBQUM7b0JBQ1BMLElBQUksRUFBRVAsUUFBUSxDQUFDTyxJQUFJO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFcsUUFBUSxFQUFFLEtBQUs7SUFDakIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaG9sbG9zdGVjaG5leHQvLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/NzEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tIFwiLi4vLi4vbGliL21hcmtkb3duVG9IdG1sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcHJvZHVjdG8sIG1vcmVQb3N0cywgcHJldmlldyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhwcm9kdWN0byk7XG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXByb2R1Y3RvPy5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+e3Byb2R1Y3RvLnRpdGxlfTwvaDI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHByb2R1Y3RvID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xuICAgIFwidGl0bGVcIixcbiAgICBcImRhdGVcIixcbiAgICBcInNsdWdcIixcbiAgICBcImF1dGhvclwiLFxuICAgIFwiY29udGVudFwiLFxuICAgIFwib2dJbWFnZVwiLFxuICAgIFwiY292ZXJJbWFnZVwiLFxuICBdKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHByb2R1Y3RvLmNvbnRlbnQgfHwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdG86IHtcbiAgICAgICAgLi4ucHJvZHVjdG8sXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcHJvZHVjdG8gPSBnZXRBbGxQb3N0cyhbXCJzbHVnXCJdKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwcm9kdWN0by5tYXAoKHByb2R1Y3RvKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwcm9kdWN0by5zbHVnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRXJyb3JQYWdlIiwiZ2V0UG9zdEJ5U2x1ZyIsImdldEFsbFBvc3RzIiwibWFya2Rvd25Ub0h0bWwiLCJQb3N0IiwicHJvZHVjdG8iLCJtb3JlUG9zdHMiLCJwcmV2aWV3Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJzbHVnIiwic3RhdHVzQ29kZSIsImgyIiwidGl0bGUiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImNvbnRlbnQiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[slug].js"));
module.exports = __webpack_exports__;

})();