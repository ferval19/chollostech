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
exports.id = "pages/category/[slug]";
exports.ids = ["pages/category/[slug]"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostSlugs\": () => (/* binding */ getPostSlugs),\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug),\n/* harmony export */   \"getPostByCategory\": () => (/* binding */ getPostByCategory),\n/* harmony export */   \"getAllPosts\": () => (/* binding */ getAllPosts),\n/* harmony export */   \"getAllPostsCategories\": () => (/* binding */ getAllPostsCategories)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), \"_products\");\nfunction getPostSlugs() {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n}\nfunction getPostBySlug(slug, fields = []) {\n    const realSlug = slug.replace(/\\.md$/, \"\");\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const items = {\n    };\n    // Ensure only the minimal needed data is exposed\n    fields.forEach((field)=>{\n        if (field === \"slug\") {\n            items[field] = realSlug;\n        }\n        if (field === \"content\") {\n            items[field] = content;\n        }\n        if (typeof data[field] !== \"undefined\") {\n            items[field] = data[field];\n        }\n    });\n    return items;\n}\nfunction getPostByCategory(category, fields = []) {\n    const realCategory = category.replace(/\\.md$/, \"\");\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realCategory}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const items = {\n    };\n    // Ensure only the minimal needed data is exposed\n    fields.forEach((field)=>{\n        if (field === \"category\") {\n            items[field] = realCategory;\n        }\n        if (field === \"content\") {\n            items[field] = content;\n        }\n        if (typeof data[field] !== \"undefined\") {\n            items[field] = data[field];\n        }\n    });\n    return items;\n}\nfunction getAllPosts(fields = []) {\n    const slugs = getPostSlugs();\n    const posts = slugs.map((slug)=>getPostBySlug(slug, fields)\n    )// sort posts by date in descending order\n    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1\n    );\n    console.log(posts);\n    return posts;\n}\nfunction getAllPostsCategories(fields = []) {\n    const categories = getPostSlugs();\n    const posts = categories.map((category)=>getPostBySlug(category, fields)\n    );\n    console.log(posts);\n    console.log(\"Las categorias\");\n    return posts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQ29CLEtBQUssR0FBR0QsS0FBSyxDQUNoQkUsR0FBRyxFQUFFbEIsSUFBSSxHQUFLRCxhQUFhLENBQUNDLElBQUksRUFBRUMsTUFBTTtLQUN6QyxFQUF5QztLQUN4Q2tCLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEdBQU1ELEtBQUssQ0FBQ0UsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQzs7SUFDM0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO0lBQ2pCLE1BQU0sQ0FBQ0EsS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTUSxxQkFBcUIsQ0FBQ3hCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELEtBQUssQ0FBQ3lCLFVBQVUsR0FBRzdCLFlBQVk7SUFDL0IsS0FBSyxDQUFDb0IsS0FBSyxHQUFHUyxVQUFVLENBQUNSLEdBQUcsRUFBRUwsUUFBUSxHQUFLZCxhQUFhLENBQUNjLFFBQVEsRUFBRVosTUFBTTs7SUFFekVzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSztJQUNqQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0I7SUFDNUIsTUFBTSxDQUFDUCxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nob2xsb3N0ZWNobmV4dC8uL2xpYi9hcGkuanM/NDU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9wcm9kdWN0c1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzID0gW10pIHtcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpO1xuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICBjb25zdCBpdGVtcyA9IHt9O1xuXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkID09PSBcInNsdWdcIikge1xuICAgICAgaXRlbXNbZmllbGRdID0gcmVhbFNsdWc7XG4gICAgfVxuICAgIGlmIChmaWVsZCA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhW2ZpZWxkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaXRlbXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0QnlDYXRlZ29yeShjYXRlZ29yeSwgZmllbGRzID0gW10pIHtcbiAgY29uc3QgcmVhbENhdGVnb3J5ID0gY2F0ZWdvcnkucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG4gIGNvbnN0IGZ1bGxQYXRoID0gam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7cmVhbENhdGVnb3J5fS5tZGApO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICBjb25zdCBpdGVtcyA9IHt9O1xuXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkID09PSBcImNhdGVnb3J5XCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxDYXRlZ29yeTtcbiAgICB9XG4gICAgaWYgKGZpZWxkID09PSBcImNvbnRlbnRcIikge1xuICAgICAgaXRlbXNbZmllbGRdID0gY29udGVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGFbZmllbGRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RzKGZpZWxkcyA9IFtdKSB7XG4gIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKCk7XG4gIGNvbnN0IHBvc3RzID0gc2x1Z3NcbiAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpXG4gICAgLy8gc29ydCBwb3N0cyBieSBkYXRlIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAuc29ydCgocG9zdDEsIHBvc3QyKSA9PiAocG9zdDEuZGF0ZSA+IHBvc3QyLmRhdGUgPyAtMSA6IDEpKTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuICByZXR1cm4gcG9zdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0c0NhdGVnb3JpZXMoZmllbGRzID0gW10pIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGdldFBvc3RTbHVncygpO1xuICBjb25zdCBwb3N0cyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gZ2V0UG9zdEJ5U2x1ZyhjYXRlZ29yeSwgZmllbGRzKSk7XG5cbiAgY29uc29sZS5sb2cocG9zdHMpO1xuICBjb25zb2xlLmxvZyhcIkxhcyBjYXRlZ29yaWFzXCIpO1xuICByZXR1cm4gcG9zdHM7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJqb2luIiwibWF0dGVyIiwicG9zdHNEaXJlY3RvcnkiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0UG9zdFNsdWdzIiwicmVhZGRpclN5bmMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldFBvc3RCeUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJyZWFsQ2F0ZWdvcnkiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJtYXAiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsImRhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsUG9zdHNDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/markdownToHtmls.js":
/*!********************************!*\
  !*** ./lib/markdownToHtmls.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ markdownToHtml)\n/* harmony export */ });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_0__]);\n([remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\nasync function markdownToHtml(markdown) {\n    const result = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__.html).process(markdown);\n    return result.toString();\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbWFya2Rvd25Ub0h0bWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNHO0FBRW5CLGVBQWVFLGNBQWMsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDdEQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDSiw4Q0FBTSxHQUFHSyxHQUFHLENBQUNKLDZDQUFJLEVBQUVLLE9BQU8sQ0FBQ0gsUUFBUTtJQUN4RCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0csUUFBUTtBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvbGxvc3RlY2huZXh0Ly4vbGliL21hcmtkb3duVG9IdG1scy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbWFyayB9IGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwicmVtYXJrLWh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub0h0bWwobWFya2Rvd24pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtYXJrKCkudXNlKGh0bWwpLnByb2Nlc3MobWFya2Rvd24pO1xuICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG59XG4iXSwibmFtZXMiOlsicmVtYXJrIiwiaHRtbCIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd24iLCJyZXN1bHQiLCJ1c2UiLCJwcm9jZXNzIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/markdownToHtmls.js\n");

/***/ }),

/***/ "./pages/category/[slug].js":
/*!**********************************!*\
  !*** ./pages/category/[slug].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/markdownToHtmls */ \"./lib/markdownToHtmls.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__]);\n_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Post({ producto , morePosts , preview  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(producto);\n    if (!router.isFallback && !(producto === null || producto === void 0 ? void 0 : producto.slug)) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404,\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/pages/category/[slug].js\",\n                lineNumber: 10,\n                columnNumber: 12\n            },\n            __self: this\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n            __source: {\n                fileName: \"/Users/fernandofernandezvalero/Developer/Proyectos/chollostech/pages/category/[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this,\n            children: producto.title\n        })\n    }));\n};\nasync function getStaticProps({ params  }) {\n    const producto = getPostByCategory(params.category, [\n        \"title\",\n        \"date\",\n        \"slug\",\n        \"author\",\n        \"category\",\n        \"content\",\n        \"ogImage\",\n        \"coverImage\", \n    ]);\n    const content = await (0,_lib_markdownToHtmls__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(producto.content || \"\");\n    return {\n        props: {\n            producto: {\n                ...producto,\n                content\n            }\n        }\n    };\n}\nasync function getStaticPaths() {\n    const producto1 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getAllPosts)([\n        \"category\"\n    ]);\n    return {\n        paths: producto1.map((producto)=>{\n            return {\n                params: {\n                    category: producto.category\n                }\n            };\n        }),\n        fallback: false\n    };\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0w7QUFDd0I7QUFDSjtBQUV2QyxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUNDLFFBQVEsR0FBRUMsU0FBUyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUQsS0FBSyxDQUFDQyxNQUFNLEdBQUdULHNEQUFTO0lBQ3hCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtJQUNwQixFQUFFLEdBQUdHLE1BQU0sQ0FBQ0csVUFBVSxNQUFLTixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxRQUFRLENBQUVPLElBQUksR0FBRSxDQUFDO1FBQzFDLE1BQU0sc0VBQUVaLG1EQUFTO1lBQUNhLFVBQVUsRUFBRSxHQUFHOzs7Ozs7OztJQUNuQyxDQUFDO0lBQ0QsTUFBTTt1RkFFREMsQ0FBRTs7Ozs7OztzQkFBRVQsUUFBUSxDQUFDVSxLQUFLOzs7QUFHekIsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUNaLFFBQVEsR0FBR2EsaUJBQWlCLENBQUNELE1BQU0sQ0FBQ0UsUUFBUSxFQUFFLENBQUM7UUFDbkQsQ0FBTztRQUNQLENBQU07UUFDTixDQUFNO1FBQ04sQ0FBUTtRQUNSLENBQVU7UUFDVixDQUFTO1FBQ1QsQ0FBUztRQUNULENBQVk7SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDakIsZ0VBQWMsQ0FBQ0UsUUFBUSxDQUFDZSxPQUFPLElBQUksQ0FBRTtJQUUzRCxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOaEIsUUFBUSxFQUFFLENBQUM7bUJBQ05BLFFBQVE7Z0JBQ1hlLE9BQU87WUFDVCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sZUFBZUUsY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDakIsU0FBUSxHQUFHSCxxREFBVyxDQUFDLENBQUM7UUFBQSxDQUFVO0lBQUEsQ0FBQztJQUV6QyxNQUFNLENBQUMsQ0FBQztRQUNOcUIsS0FBSyxFQUFFbEIsU0FBUSxDQUFDbUIsR0FBRyxFQUFFbkIsUUFBUSxHQUFLLENBQUM7WUFDakMsTUFBTSxDQUFDLENBQUM7Z0JBQ05ZLE1BQU0sRUFBRSxDQUFDO29CQUNQRSxRQUFRLEVBQUVkLFFBQVEsQ0FBQ2MsUUFBUTtnQkFDN0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0RNLFFBQVEsRUFBRSxLQUFLO0lBQ2pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvbGxvc3RlY2huZXh0Ly4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzP2Q3NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSBcIi4uLy4uL2xpYi9tYXJrZG93blRvSHRtbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHByb2R1Y3RvLCBtb3JlUG9zdHMsIHByZXZpZXcgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocHJvZHVjdG8pO1xuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwcm9kdWN0bz8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPntwcm9kdWN0by50aXRsZX08L2gyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwcm9kdWN0byA9IGdldFBvc3RCeUNhdGVnb3J5KHBhcmFtcy5jYXRlZ29yeSwgW1xuICAgIFwidGl0bGVcIixcbiAgICBcImRhdGVcIixcbiAgICBcInNsdWdcIixcbiAgICBcImF1dGhvclwiLFxuICAgIFwiY2F0ZWdvcnlcIixcbiAgICBcImNvbnRlbnRcIixcbiAgICBcIm9nSW1hZ2VcIixcbiAgICBcImNvdmVySW1hZ2VcIixcbiAgXSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwcm9kdWN0by5jb250ZW50IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RvOiB7XG4gICAgICAgIC4uLnByb2R1Y3RvLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHByb2R1Y3RvID0gZ2V0QWxsUG9zdHMoW1wiY2F0ZWdvcnlcIl0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHByb2R1Y3RvLm1hcCgocHJvZHVjdG8pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0by5jYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkVycm9yUGFnZSIsImdldFBvc3RCeVNsdWciLCJnZXRBbGxQb3N0cyIsIm1hcmtkb3duVG9IdG1sIiwiUG9zdCIsInByb2R1Y3RvIiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInN0YXR1c0NvZGUiLCJoMiIsInRpdGxlIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRQb3N0QnlDYXRlZ29yeSIsImNhdGVnb3J5IiwiY29udGVudCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/category/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/category/[slug].js"));
module.exports = __webpack_exports__;

})();