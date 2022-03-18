"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Register = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        error: \"\",\n        success: \"\",\n        buttonText: \"Register\"\n    }), state = ref[0], setState = ref[1];\n    var name1 = state.name, email = state.email, password = state.password, error = state.error, success = state.success, buttonText = state.buttonText;\n    var handleChange = function(name) {\n        return function(e) {\n            var _obj;\n            setState(_objectSpread({}, state, (_obj = {}, _defineProperty(_obj, name, e.target.value), _defineProperty(_obj, \"error\", \"\"), _defineProperty(_obj, \"success\", \"\"), _defineProperty(_obj, \"buttonText\", \"Register\"), _obj)));\n        };\n    };\n    var handleSubmit = function(e) {};\n    var registerForm = function() {\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-warning\",\n                        children: buttonText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, _this1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, _this),\n                registerForm()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hans\\\\Desktop\\\\Programming\\\\MERN\\\\pages\\\\register.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, _this));\n};\n_s(Register, \"l0r7JxUO+1Et1cbASZpnFOoTEbQ=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge307XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJSZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlckZvcm0iLCJvblN1Ym1pdCIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

/***/ })

});