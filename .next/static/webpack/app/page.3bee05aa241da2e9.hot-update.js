"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/screens/ComponentSettings/ComponentsSettings.jsx":
/*!**************************************************************!*\
  !*** ./src/screens/ComponentSettings/ComponentsSettings.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsSettings.module.css */ \"(app-pages-browser)/./src/screens/ComponentSettings/componentsSettings.module.css\");\n/* harmony import */ var _componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Setting = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo((param)=>{\n    let { label, inputValue, name, handleChange } = param;\n    const widthOptions = [\n        \"100%\",\n        \"75%\",\n        \"50%\",\n        \"25%\",\n        \"auto\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                children: label\n            }, void 0, false, {\n                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            name === \"width\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: inputValue,\n                onChange: handleChange,\n                name: name,\n                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().select),\n                children: widthOptions.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: option,\n                        children: option\n                    }, index, false, {\n                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValue,\n                onChange: handleChange,\n                name: name,\n                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n            }, void 0, false, {\n                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n});\n_c = Setting;\nconst ComponentsSettings = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().memo(_c1 = _s(()=>{\n    var _settings_find, _settings_find1;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const componentsStore = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.components.componentsStore);\n    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _componentsStore_;\n        // Log the componentsStore to ensure data is being fetched correctly\n        console.log(\"componentsStore:\", componentsStore);\n        if ((componentsStore === null || componentsStore === void 0 ? void 0 : componentsStore.length) > 0 && ((_componentsStore_ = componentsStore[0]) === null || _componentsStore_ === void 0 ? void 0 : _componentsStore_.settings)) {\n            setSettings(componentsStore[0].settings);\n        }\n    }, [\n        componentsStore\n    ]);\n    const handleChange = (e)=>{\n        const { name, type, value, checked } = e.target;\n        const updatedSettings = settings.map((setting)=>setting.name === name ? {\n                ...setting,\n                inputValue: type === \"checkbox\" ? checked : value\n            } : setting);\n        setSettings(updatedSettings);\n        dispatch({\n            type: \"EDIT_SETTING\",\n            payload: {\n                index: 0,\n                settings: updatedSettings\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                children: \"Components Settings\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().componentSettingsContainer),\n                children: [\n                    settings.map((setting, index)=>setting.name !== \"disabled\" && setting.name !== \"required\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Setting, {\n                            label: settings,\n                            inputValue: setting.inputValue,\n                            name: setting.name,\n                            handleChange: handleChange\n                        }, index, false, {\n                            fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        name: \"disabled\",\n                                        checked: ((_settings_find = settings.find((s)=>s.name === \"disabled\")) === null || _settings_find === void 0 ? void 0 : _settings_find.inputValue) || false,\n                                        onChange: handleChange,\n                                        className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Disabled\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        name: \"required\",\n                                        checked: ((_settings_find1 = settings.find((s)=>s.name === \"required\")) === null || _settings_find1 === void 0 ? void 0 : _settings_find1.inputValue) || false,\n                                        onChange: handleChange,\n                                        className: (_componentsSettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Required\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PrabhaTech\\\\form-builder\\\\src\\\\screens\\\\ComponentSettings\\\\ComponentsSettings.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n}, \"a9vxw46CwoobYVKZmXntHp95/2c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n})), \"a9vxw46CwoobYVKZmXntHp95/2c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c2 = ComponentsSettings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentsSettings);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Setting\");\n$RefreshReg$(_c1, \"ComponentsSettings$React.memo\");\n$RefreshReg$(_c2, \"ComponentsSettings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zY3JlZW5zL0NvbXBvbmVudFNldHRpbmdzL0NvbXBvbmVudHNTZXR0aW5ncy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ0k7QUFDRjtBQUVyRCxNQUFNTSx3QkFBVU4saURBQVUsQ0FBQztRQUFDLEVBQUVRLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRTtJQUNuRSxNQUFNQyxlQUFlO1FBQUM7UUFBUTtRQUFPO1FBQU87UUFBTztLQUFPO0lBRTFELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXVCx3RkFBdUI7OzBCQUNyQyw4REFBQ1E7Z0JBQUlDLFdBQVdULDZFQUFZOzBCQUFHRzs7Ozs7O1lBQzlCRSxTQUFTLHdCQUNSLDhEQUFDTTtnQkFDQ0MsT0FBT1I7Z0JBQ1BTLFVBQVVQO2dCQUNWRCxNQUFNQTtnQkFDTkksV0FBV1QsOEVBQWE7MEJBRXZCTyxhQUFhTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3pCLDhEQUFDRDt3QkFBbUJILE9BQU9HO2tDQUN4QkE7dUJBRFVDOzs7Ozs7Ozs7MENBTWpCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTE4sT0FBT1I7Z0JBQ1BTLFVBQVVQO2dCQUNWRCxNQUFNQTtnQkFDTkksV0FBV1QsNkVBQVk7Ozs7Ozs7Ozs7OztBQUtqQztLQTlCTUM7QUFnQ04sTUFBTWtCLG1DQUFxQnhCLEdBQUFBLGlEQUFVLFVBQUM7UUEwRGZ5QixnQkFVQUE7O0lBbkVyQixNQUFNQyxXQUFXdEIsd0RBQVdBO0lBQzVCLE1BQU11QixrQkFBa0J4Qix3REFBV0EsQ0FBQyxDQUFDeUIsUUFBVUEsTUFBTUMsVUFBVSxDQUFDRixlQUFlO0lBRS9FLE1BQU0sQ0FBQ0YsVUFBVUssWUFBWSxHQUFHN0IsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0MsZ0RBQVNBLENBQUM7WUFJMkJ5QjtRQUhuQyxvRUFBb0U7UUFDcEVJLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JMO1FBRWhDLElBQUlBLENBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCTSxNQUFNLElBQUcsT0FBS04sb0JBQUFBLGVBQWUsQ0FBQyxFQUFFLGNBQWxCQSx3Q0FBQUEsa0JBQW9CRixRQUFRLEdBQUU7WUFDL0RLLFlBQVlILGVBQWUsQ0FBQyxFQUFFLENBQUNGLFFBQVE7UUFDekM7SUFDRixHQUFHO1FBQUNFO0tBQWdCO0lBRXBCLE1BQU1oQixlQUFlLENBQUN1QjtRQUNwQixNQUFNLEVBQUV4QixJQUFJLEVBQUVhLElBQUksRUFBRU4sS0FBSyxFQUFFa0IsT0FBTyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDL0MsTUFBTUMsa0JBQWtCWixTQUFTTixHQUFHLENBQUMsQ0FBQ21CLFVBQ3BDQSxRQUFRNUIsSUFBSSxLQUFLQSxPQUNiO2dCQUNFLEdBQUc0QixPQUFPO2dCQUNWN0IsWUFBWWMsU0FBUyxhQUFhWSxVQUFVbEI7WUFDOUMsSUFDQXFCO1FBRU5SLFlBQVlPO1FBQ1pYLFNBQVM7WUFDUEgsTUFBTTtZQUNOZ0IsU0FBUztnQkFDUGxCLE9BQU87Z0JBQ1BJLFVBQVVZO1lBQ1o7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN4Qjs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFXVCwrRUFBYzswQkFBRTs7Ozs7OzBCQUNoQyw4REFBQ1E7Z0JBQUlDLFdBQVdULGtHQUFpQzs7b0JBQzlDb0IsU0FBU04sR0FBRyxDQUNYLENBQUNtQixTQUFTakIsUUFDUmlCLFFBQVE1QixJQUFJLEtBQUssY0FDakI0QixRQUFRNUIsSUFBSSxLQUFLLDRCQUNmLDhEQUFDSjs0QkFFQ0UsT0FBT2lCOzRCQUNQaEIsWUFBWTZCLFFBQVE3QixVQUFVOzRCQUM5QkMsTUFBTTRCLFFBQVE1QixJQUFJOzRCQUNsQkMsY0FBY0E7MkJBSlRVOzs7OztrQ0FTYiw4REFBQ1I7d0JBQUlDLFdBQVdULHlGQUF3Qjs7MENBQ3RDLDhEQUFDUTtnQ0FBSUMsV0FBV1QsdUZBQXNCOztrREFDcEMsOERBQUNpQjt3Q0FDQ0MsTUFBSzt3Q0FDTGIsTUFBSzt3Q0FDTHlCLFNBQVNWLEVBQUFBLGlCQUFBQSxTQUFTbUIsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVuQyxJQUFJLEtBQUsseUJBQWhDZSxxQ0FBQUEsZUFBNkNoQixVQUFVLEtBQUk7d0NBQ3BFUyxVQUFVUDt3Q0FDVkcsV0FBV1QsZ0ZBQWU7Ozs7OztrREFFNUIsOERBQUMwQztrREFBSzs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDbEM7Z0NBQUlDLFdBQVdULHVGQUFzQjs7a0RBQ3BDLDhEQUFDaUI7d0NBQ0NDLE1BQUs7d0NBQ0xiLE1BQUs7d0NBQ0x5QixTQUFTVixFQUFBQSxrQkFBQUEsU0FBU21CLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFbkMsSUFBSSxLQUFLLHlCQUFoQ2Usc0NBQUFBLGdCQUE2Q2hCLFVBQVUsS0FBSTt3Q0FDcEVTLFVBQVVQO3dDQUNWRyxXQUFXVCxnRkFBZTs7Ozs7O2tEQUU1Qiw4REFBQzBDO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEI7O1FBN0VtQjNDLG9EQUFXQTtRQUNKRCxvREFBV0E7Ozs7UUFEbEJDLG9EQUFXQTtRQUNKRCxvREFBV0E7Ozs7QUE4RXJDLCtEQUFlcUIsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JlZW5zL0NvbXBvbmVudFNldHRpbmdzL0NvbXBvbmVudHNTZXR0aW5ncy5qc3g/NDQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbXBvbmVudHNTZXR0aW5ncy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFNldHRpbmcgPSBSZWFjdC5tZW1vKCh7IGxhYmVsLCBpbnB1dFZhbHVlLCBuYW1lLCBoYW5kbGVDaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHdpZHRoT3B0aW9ucyA9IFsnMTAwJScsICc3NSUnLCAnNTAlJywgJzI1JScsICdhdXRvJ107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT57bGFiZWx9PC9kaXY+XHJcbiAgICAgIHtuYW1lID09PSAnd2lkdGgnID8gKFxyXG4gICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt3aWR0aE9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgQ29tcG9uZW50c1NldHRpbmdzID0gUmVhY3QubWVtbygoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudHNTdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcG9uZW50cy5jb21wb25lbnRzU3RvcmUpO1xyXG5cclxuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIExvZyB0aGUgY29tcG9uZW50c1N0b3JlIHRvIGVuc3VyZSBkYXRhIGlzIGJlaW5nIGZldGNoZWQgY29ycmVjdGx5XHJcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50c1N0b3JlOicsIGNvbXBvbmVudHNTdG9yZSk7XHJcbiAgICBcclxuICAgIGlmIChjb21wb25lbnRzU3RvcmU/Lmxlbmd0aCA+IDAgJiYgY29tcG9uZW50c1N0b3JlWzBdPy5zZXR0aW5ncykge1xyXG4gICAgICBzZXRTZXR0aW5ncyhjb21wb25lbnRzU3RvcmVbMF0uc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gIH0sIFtjb21wb25lbnRzU3RvcmVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWUsIGNoZWNrZWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgdXBkYXRlZFNldHRpbmdzID0gc2V0dGluZ3MubWFwKChzZXR0aW5nKSA9PlxyXG4gICAgICBzZXR0aW5nLm5hbWUgPT09IG5hbWVcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgLi4uc2V0dGluZyxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogdHlwZSA9PT0gJ2NoZWNrYm94JyA/IGNoZWNrZWQgOiB2YWx1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHNldHRpbmdcclxuICAgICk7XHJcbiAgICBzZXRTZXR0aW5ncyh1cGRhdGVkU2V0dGluZ3MpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnRURJVF9TRVRUSU5HJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGluZGV4OiAwLCAvLyBBZGp1c3QgaWYgaGFuZGxpbmcgbXVsdGlwbGUgY29tcG9uZW50c1xyXG4gICAgICAgIHNldHRpbmdzOiB1cGRhdGVkU2V0dGluZ3MsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5Db21wb25lbnRzIFNldHRpbmdzPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcG9uZW50U2V0dGluZ3NDb250YWluZXJ9PlxyXG4gICAgICAgIHtzZXR0aW5ncy5tYXAoXHJcbiAgICAgICAgICAoc2V0dGluZywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIHNldHRpbmcubmFtZSAhPT0gJ2Rpc2FibGVkJyAmJlxyXG4gICAgICAgICAgICBzZXR0aW5nLm5hbWUgIT09ICdyZXF1aXJlZCcgJiYgKFxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3NldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17c2V0dGluZy5pbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17c2V0dGluZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2V0dGluZ3MuZmluZCgocykgPT4gcy5uYW1lID09PSAnZGlzYWJsZWQnKT8uaW5wdXRWYWx1ZSB8fCBmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5EaXNhYmxlZDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2V0dGluZ3MuZmluZCgocykgPT4gcy5uYW1lID09PSAncmVxdWlyZWQnKT8uaW5wdXRWYWx1ZSB8fCBmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5SZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50c1NldHRpbmdzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzdHlsZXMiLCJTZXR0aW5nIiwibWVtbyIsImxhYmVsIiwiaW5wdXRWYWx1ZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJ3aWR0aE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzZXR0aW5nQ29udGFpbmVyIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiaW5wdXQiLCJ0eXBlIiwiQ29tcG9uZW50c1NldHRpbmdzIiwic2V0dGluZ3MiLCJkaXNwYXRjaCIsImNvbXBvbmVudHNTdG9yZSIsInN0YXRlIiwiY29tcG9uZW50cyIsInNldFNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImUiLCJjaGVja2VkIiwidGFyZ2V0IiwidXBkYXRlZFNldHRpbmdzIiwic2V0dGluZyIsInBheWxvYWQiLCJoZWFkaW5nIiwiY29tcG9uZW50U2V0dGluZ3NDb250YWluZXIiLCJjaGVja2JveENvbnRhaW5lciIsImNoZWNrYm94V3JhcHBlciIsImZpbmQiLCJzIiwiY2hlY2tib3giLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/screens/ComponentSettings/ComponentsSettings.jsx\n"));

/***/ })

});