"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/stateManagement/appStore.js":
/*!*****************************************!*\
  !*** ./src/stateManagement/appStore.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"(app-pages-browser)/./src/stateManagement/reducer.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ \"(app-pages-browser)/./node_modules/redux-logger/dist/redux-logger.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);\n // Ensure you import from '@reduxjs/toolkit'\n // Adjust the import path as necessary\n\nconst logger = (0,redux_logger__WEBPACK_IMPORTED_MODULE_1__.createLogger)({\n    collapsed: (getState, action, logEntry)=>!logEntry.error,\n    duration: true,\n    diff: true\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n    reducer: {\n        components: _reducer__WEBPACK_IMPORTED_MODULE_0__.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdGF0ZU1hbmFnZW1lbnQvYXBwU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0QsQ0FBQyw0Q0FBNEM7QUFDM0QsQ0FBQyxzQ0FBc0M7QUFDL0I7QUFFNUMsTUFBTUcsU0FBU0QsMERBQVlBLENBQUM7SUFDMUJFLFdBQVcsQ0FBQ0MsVUFBVUMsUUFBUUMsV0FBYSxDQUFDQSxTQUFTQyxLQUFLO0lBQzFEQyxVQUFVO0lBQ1ZDLE1BQU07QUFDUjtBQUdBLE1BQU1DLFFBQVFYLGdFQUFjQSxDQUFDO0lBQzNCQyxTQUFTO1FBQ1BXLFlBQVlYLDZDQUFPQTtJQUNyQjtJQUNBWSxZQUFZLENBQUNDLHVCQUF5QkEsdUJBQXVCQyxNQUFNLENBQUNaO0FBQ3RFO0FBRUEsK0RBQWVRLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0YXRlTWFuYWdlbWVudC9hcHBTdG9yZS5qcz8zZDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7IC8vIEVuc3VyZSB5b3UgaW1wb3J0IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXInOyAvLyBBZGp1c3QgdGhlIGltcG9ydCBwYXRoIGFzIG5lY2Vzc2FyeVxyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5cclxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcclxuICBjb2xsYXBzZWQ6IChnZXRTdGF0ZSwgYWN0aW9uLCBsb2dFbnRyeSkgPT4gIWxvZ0VudHJ5LmVycm9yLFxyXG4gIGR1cmF0aW9uOiB0cnVlLFxyXG4gIGRpZmY6IHRydWUsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGNvbXBvbmVudHM6IHJlZHVjZXIsXHJcbiAgfSxcclxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGxvZ2dlciksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJjcmVhdGVMb2dnZXIiLCJsb2dnZXIiLCJjb2xsYXBzZWQiLCJnZXRTdGF0ZSIsImFjdGlvbiIsImxvZ0VudHJ5IiwiZXJyb3IiLCJkdXJhdGlvbiIsImRpZmYiLCJzdG9yZSIsImNvbXBvbmVudHMiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stateManagement/appStore.js\n"));

/***/ })

});