"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/movies/[id]/page",{

/***/ "(app-pages-browser)/./src/components/Like/Like.js":
/*!*************************************!*\
  !*** ./src/components/Like/Like.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Like_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Like.module.scss */ \"(app-pages-browser)/./src/components/Like/Like.module.scss\");\n/* harmony import */ var _Like_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Like_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Like = (param)=>{\n    let { mediaId, movieLikesList } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(movieLikesList);\n    const [movieLikes, setMovieLikes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(movieLikesList);\n    const handleLikeClick = async (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        if (status !== \"authenticated\") {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n        } else {\n            if (!movieLikes.map((movie)=>movie.movieId).includes(mediaId.toString())) {\n                const res = await fetch(\"/api/like/\".concat(mediaId), {\n                    method: \"POST\"\n                });\n                const movieLikesFetch = await res.json();\n                setMovieLikes(movieLikesFetch);\n            } else {\n                const res = await fetch(\"/api/dislike/\".concat(mediaId), {\n                    method: \"PATCH\"\n                });\n                const movieLikesFetch = await res.json();\n                setMovieLikes(movieLikesFetch);\n            }\n        }\n        router.refresh();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            if (movieLikes.map((movie)=>movie.movieId).includes(mediaId.toString())) {\n                setStyle((_Like_module_scss__WEBPACK_IMPORTED_MODULE_5___default().likeIconActive));\n            } else {\n                setStyle((_Like_module_scss__WEBPACK_IMPORTED_MODULE_5___default().likeIcon));\n            }\n        } else {\n            setStyle((_Like_module_scss__WEBPACK_IMPORTED_MODULE_5___default().likeIcon));\n        }\n    }, [\n        movieLikes,\n        setStyle,\n        status,\n        mediaId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHeart,\n        className: style,\n        onClick: handleLikeClick\n    }, void 0, false, {\n        fileName: \"/Users/marine/Desktop/my-movie-app/my-movie-app/src/components/Like/Like.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Like, \"gWrI/dKgihYW9R34lon5KtB680c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Like;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Like);\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpa2UvTGlrZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN3QztBQUN5QjtBQUNMO0FBQ1A7QUFDVDtBQUNBO0FBRTVDLE1BQU1RLE9BQU87UUFBQyxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBRTs7SUFDdkMsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUE7SUFDbEMsTUFBTSxFQUFFUSxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHWiwyREFBVUE7SUFDNUNhLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUNJO0lBRTdDLE1BQU1XLGtCQUFrQixPQUFPQztRQUM3QkEsRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixJQUFJUixXQUFXLGlCQUFpQjtZQUM5QmIsdURBQU1BO1FBQ1IsT0FBTztZQUNMLElBQ0UsQ0FBQ2dCLFdBQVdNLEdBQUcsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQ25CLFFBQVFvQixRQUFRLEtBQ25FO2dCQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxhQUFxQixPQUFSdEIsVUFBVztvQkFDOUN1QixRQUFRO2dCQUNWO2dCQUNBLE1BQU1DLGtCQUFrQixNQUFNSCxJQUFJSSxJQUFJO2dCQUN0Q2QsY0FBY2E7WUFDaEIsT0FBTztnQkFDTCxNQUFNSCxNQUFNLE1BQU1DLE1BQU0sZ0JBQXdCLE9BQVJ0QixVQUFXO29CQUNqRHVCLFFBQVE7Z0JBQ1Y7Z0JBQ0EsTUFBTUMsa0JBQWtCLE1BQU1ILElBQUlJLElBQUk7Z0JBQ3RDZCxjQUFjYTtZQUNoQjtRQUNGO1FBQ0F0QixPQUFPd0IsT0FBTztJQUNoQjtJQUVBOUIsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxXQUFXLGlCQUFpQjtZQUM5QixJQUNFRyxXQUFXTSxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsT0FBTyxFQUFFQyxRQUFRLENBQUNuQixRQUFRb0IsUUFBUSxLQUNsRTtnQkFDQWhCLFNBQVNiLHlFQUFxQjtZQUNoQyxPQUFPO2dCQUNMYSxTQUFTYixtRUFBZTtZQUMxQjtRQUNGLE9BQU87WUFDTGEsU0FBU2IsbUVBQWU7UUFDMUI7SUFDRixHQUFHO1FBQUNtQjtRQUFZTjtRQUFVRztRQUFRUDtLQUFRO0lBRTFDLHFCQUNFLDhEQUFDUiwyRUFBZUE7UUFDZHFDLE1BQU1wQyxzRUFBT0E7UUFDYnFDLFdBQVczQjtRQUNYNEIsU0FBU25COzs7Ozs7QUFHZjtHQXJETWI7O1FBQ1dELHNEQUFTQTtRQUVVSCx1REFBVUE7OztLQUh4Q0k7QUF1RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlrZS9MaWtlLmpzP2EwMDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpa2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IExpa2UgPSAoeyBtZWRpYUlkLCBtb3ZpZUxpa2VzTGlzdCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnNvbGUubG9nKG1vdmllTGlrZXNMaXN0KTtcbiAgY29uc3QgW21vdmllTGlrZXMsIHNldE1vdmllTGlrZXNdID0gdXNlU3RhdGUobW92aWVMaWtlc0xpc3QpO1xuXG4gIGNvbnN0IGhhbmRsZUxpa2VDbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHN0YXR1cyAhPT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICAgIHNpZ25JbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgICFtb3ZpZUxpa2VzLm1hcCgobW92aWUpID0+IG1vdmllLm1vdmllSWQpLmluY2x1ZGVzKG1lZGlhSWQudG9TdHJpbmcoKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9saWtlLyR7bWVkaWFJZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdmllTGlrZXNGZXRjaCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldE1vdmllTGlrZXMobW92aWVMaWtlc0ZldGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2Rpc2xpa2UvJHttZWRpYUlkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdmllTGlrZXNGZXRjaCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldE1vdmllTGlrZXMobW92aWVMaWtlc0ZldGNoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGVyLnJlZnJlc2goKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG1vdmllTGlrZXMubWFwKChtb3ZpZSkgPT4gbW92aWUubW92aWVJZCkuaW5jbHVkZXMobWVkaWFJZC50b1N0cmluZygpKVxuICAgICAgKSB7XG4gICAgICAgIHNldFN0eWxlKHN0eWxlcy5saWtlSWNvbkFjdGl2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZShzdHlsZXMubGlrZUljb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdHlsZShzdHlsZXMubGlrZUljb24pO1xuICAgIH1cbiAgfSwgW21vdmllTGlrZXMsIHNldFN0eWxlLCBzdGF0dXMsIG1lZGlhSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb250QXdlc29tZUljb25cbiAgICAgIGljb249e2ZhSGVhcnR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlfVxuICAgICAgb25DbGljaz17aGFuZGxlTGlrZUNsaWNrfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWtlO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhSGVhcnQiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaWtlIiwibWVkaWFJZCIsIm1vdmllTGlrZXNMaXN0Iiwicm91dGVyIiwic3R5bGUiLCJzZXRTdHlsZSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsIm1vdmllTGlrZXMiLCJzZXRNb3ZpZUxpa2VzIiwiaGFuZGxlTGlrZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibWFwIiwibW92aWUiLCJtb3ZpZUlkIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwibW92aWVMaWtlc0ZldGNoIiwianNvbiIsInJlZnJlc2giLCJsaWtlSWNvbkFjdGl2ZSIsImxpa2VJY29uIiwiaWNvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Like/Like.js\n"));

/***/ })

});