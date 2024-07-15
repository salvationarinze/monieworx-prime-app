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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notifications-component */ \"react-notifications-component\");\n/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-recaptcha-v3 */ \"react-google-recaptcha-v3\");\n/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-modal/styles.css */ \"./node_modules/react-responsive-modal/styles.css\");\n/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [pageLoaded, setPageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    refetchOnWindowFocus: false,\n                    retry: false\n                }\n            }\n        }));\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_6___default().init();\n        setPageLoaded(true);\n    }, []);\n    if (!pageLoaded) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__.GoogleReCaptchaProvider, {\n        reCaptchaKey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_notifications_component__WEBPACK_IMPORTED_MODULE_2__.ReactNotifications, {}, void 0, false, {\n                        fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 22\n                    }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__.ReactQueryDevtools, {\n                        initialIsOpen: false\n                    }, void 0, false, {\n                        fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user/web/monieworx/prime/monieworx-prime-website/src/pages/_app.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBRXVCO0FBQ0s7QUFDZDtBQUNVO0FBRTVDO0FBQ0k7QUFDaUI7QUFDTztBQUNuQjtBQUVoQixTQUFTUyxNQUFNLEVBQUNDLFVBQVMsRUFBRUMsVUFBUyxFQUFDLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDYyxZQUFZLEdBQUdkLCtDQUFRQSxDQUM1QixJQUNFLElBQUlHLG9EQUFXQSxDQUFDO1lBQ2RZLGdCQUFnQjtnQkFDZEMsU0FBUztvQkFDUEMsc0JBQXNCLEtBQUs7b0JBQzNCQyxPQUFPLEtBQUs7Z0JBQ2Q7WUFDRjtRQUNGO0lBR0osTUFBTUMsWUFBWVQsVUFBVVMsU0FBUyxJQUFLLEVBQUNDLE9BQVNBLElBQUc7SUFFdkRuQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLCtDQUFRO1FBQ1JLLGNBQWMsSUFBSTtJQUNwQixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFlBQVksT0FBTyxJQUFJO0lBRTVCLHFCQUNFLDhEQUFDTCw4RUFBdUJBO1FBQ3RCZSxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLHlCQUF5QjtrQkFFbkQsNEVBQUNyQiw0REFBbUJBO1lBQUNzQixRQUFRWjtzQkFDM0IsNEVBQUNULGdEQUFPQTtnQkFBQ3NCLE9BQU9oQixVQUFVaUIsZUFBZTs7a0NBQ3ZDLDhEQUFDMUIsNkVBQWtCQTs7Ozs7b0JBQ2xCaUIsd0JBQVUsOERBQUNUO3dCQUFXLEdBQUdDLFNBQVM7Ozs7OztrQ0FDbkMsOERBQUNMLG9FQUFrQkE7d0JBQUN1QixlQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmlld29yeC1zaXRlLy4vc3JjL3BhZ2VzL19hcHAuanN4PzRjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtSZWFjdE5vdGlmaWNhdGlvbnN9IGZyb20gXCJyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgSHlkcmF0ZX0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQge1JlYWN0UXVlcnlEZXZ0b29sc30gZnJvbSBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCI7XG5pbXBvcnQge0dvb2dsZVJlQ2FwdGNoYVByb3ZpZGVyfSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYS12M1wiO1xuXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtbW9kYWwvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L3NrZWxldG9uLmNzc1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgY29uc3QgW3BhZ2VMb2FkZWQsIHNldFBhZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoXG4gICAgKCkgPT5cbiAgICAgIG5ldyBRdWVyeUNsaWVudCh7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0cnk6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICApO1xuXG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gICAgc2V0UGFnZUxvYWRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcGFnZUxvYWRlZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8R29vZ2xlUmVDYXB0Y2hhUHJvdmlkZXJcbiAgICAgIHJlQ2FwdGNoYUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVDQVBUQ0hBX0tFWX1cbiAgICA+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgIDxSZWFjdE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XG4gICAgICAgIDwvSHlkcmF0ZT5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L0dvb2dsZVJlQ2FwdGNoYVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3ROb3RpZmljYXRpb25zIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiSHlkcmF0ZSIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIkdvb2dsZVJlQ2FwdGNoYVByb3ZpZGVyIiwiQU9TIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwYWdlTG9hZGVkIiwic2V0UGFnZUxvYWRlZCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJyZXRyeSIsImdldExheW91dCIsInBhZ2UiLCJpbml0IiwicmVDYXB0Y2hhS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JFQ0FQVENIQV9LRVkiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSIsImluaXRpYWxJc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-responsive-modal/styles.css":
/*!********************************************************!*\
  !*** ./node_modules/react-responsive-modal/styles.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-google-recaptcha-v3":
/*!********************************************!*\
  !*** external "react-google-recaptcha-v3" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha-v3");

/***/ }),

/***/ "react-notifications-component":
/*!************************************************!*\
  !*** external "react-notifications-component" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-notifications-component");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();