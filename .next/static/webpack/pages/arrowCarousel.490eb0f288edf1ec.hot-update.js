"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/arrowCarousel",{

/***/ "./pages/arrowCarousel.tsx":
/*!*********************************!*\
  !*** ./pages/arrowCarousel.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel-react */ \"./node_modules/embla-carousel-react/embla-carousel-react.esm.js\");\n/* harmony import */ var embla_carousel_autoplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel-autoplay */ \"./node_modules/embla-carousel-autoplay/embla-carousel-autoplay.esm.js\");\n/* harmony import */ var _component_carouselArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/carouselArrow */ \"./component/carouselArrow.tsx\");\n/* harmony import */ var _styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/arrowCarousel.module.css */ \"./styles/arrowCarousel.module.css\");\n/* harmony import */ var _styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst scrollSnaps = [\n    1,\n    2,\n    3,\n    4\n];\nconst ArrowCarousel = ()=>{\n    _s();\n    const [emblaRef, emblaApi] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        loop: false,\n        dragFree: true\n    }, [\n        (0,embla_carousel_autoplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    ]);\n    const [prevBtnEnabled, setPrevBtnEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nextBtnEnabled, setNextBtnEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const onSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (!emblaApi) return;\n        setSelectedIndex(emblaApi.selectedScrollSnap());\n        setPrevBtnEnabled(emblaApi.canScrollPrev());\n        setNextBtnEnabled(emblaApi.canScrollNext());\n    }, [\n        emblaApi,\n        setSelectedIndex\n    ]);\n    const scrollPrev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>emblaApi && emblaApi.scrollPrev(), [\n        emblaApi\n    ]);\n    const scrollNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>emblaApi && emblaApi.scrollNext(), [\n        emblaApi\n    ]);\n    const scrollTo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>emblaApi && emblaApi.scrollTo(index), [\n        emblaApi\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5___default().embla),\n                ref: emblaRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5___default().embla__container),\n                    children: scrollSnaps.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5___default().embla__slide),\n                            children: [\n                                \"Slide \",\n                                item\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/arrowCarousel.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/arrowCarousel.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/arrowCarousel.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_arrowCarousel_module_css__WEBPACK_IMPORTED_MODULE_5___default().embla__dots),\n                children: scrollSnaps.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_carouselArrow__WEBPACK_IMPORTED_MODULE_2__.DotButton, {\n                        selected: index === selectedIndex,\n                        onClick: ()=>scrollTo(index)\n                    }, index, false, {\n                        fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/arrowCarousel.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/arrowCarousel.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ArrowCarousel, \"Dr36EnZf70fA2C4SPiTa6pWCEF0=\", false, function() {\n    return [\n        embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ArrowCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArrowCarousel);\nvar _c;\n$RefreshReg$(_c, \"ArrowCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnJvd0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ0Q7QUFDTDtBQUtYO0FBQ29CO0FBRXZELE1BQU1PLGNBQWM7SUFBQztJQUFFO0lBQUU7SUFBRTtDQUFFO0FBRTdCLE1BQU1DLGdCQUFnQixJQUFNOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFNBQVMsR0FBR1AsZ0VBQWdCQSxDQUFDO1FBQUVRLE1BQU0sS0FBSztRQUFFQyxVQUFVLElBQUk7SUFBQyxHQUFHO1FBQUNSLG1FQUFRQTtLQUFHO0lBQzNGLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUMxRCxNQUFNLENBQUNjLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNa0IsV0FBV2pCLGtEQUFXQSxDQUFDLElBQU07UUFDakMsSUFBSSxDQUFDUSxVQUFVO1FBQ2ZRLGlCQUFpQlIsU0FBU1Usa0JBQWtCO1FBQzVDTixrQkFBa0JKLFNBQVNXLGFBQWE7UUFDeENMLGtCQUFrQk4sU0FBU1ksYUFBYTtJQUMxQyxHQUFHO1FBQUNaO1FBQVVRO0tBQWlCO0lBRS9CLE1BQU1LLGFBQWFyQixrREFBV0EsQ0FDNUIsSUFBTVEsWUFBWUEsU0FBU2EsVUFBVSxJQUNyQztRQUFDYjtLQUFTO0lBRVosTUFBTWMsYUFBYXRCLGtEQUFXQSxDQUM1QixJQUFNUSxZQUFZQSxTQUFTYyxVQUFVLElBQ3JDO1FBQUNkO0tBQVM7SUFFWixNQUFNZSxXQUFXdkIsa0RBQVdBLENBQzFCLENBQUN3QixRQUFrQmhCLFlBQVlBLFNBQVNlLFFBQVEsQ0FBQ0MsUUFDakQ7UUFBQ2hCO0tBQVM7SUFHWixxQkFDRTs7MEJBQ0UsOERBQUNpQjtnQkFBSUMsV0FBV3RCLCtFQUFZO2dCQUFFd0IsS0FBS3JCOzBCQUNqQyw0RUFBQ2tCO29CQUFJQyxXQUFXdEIsMEZBQXVCOzhCQUNwQ0MsWUFBWXlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNOOzRCQUFJQyxXQUFXdEIsc0ZBQW1COztnQ0FBRTtnQ0FBTzJCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEQsOERBQUNOO2dCQUFJQyxXQUFXdEIscUZBQWtCOzBCQUMvQkMsWUFBWXlCLEdBQUcsQ0FBQyxDQUFDSSxHQUFHVixzQkFDbkIsOERBQUNyQiwrREFBU0E7d0JBRVJnQyxVQUFVWCxVQUFVVDt3QkFDcEJxQixTQUFTLElBQU1iLFNBQVNDO3VCQUZuQkE7Ozs7Ozs7Ozs7OztBQVFqQjtHQTlDTWxCOztRQUN5QkwsNERBQWdCQTs7O0tBRHpDSztBQWdETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnJvd0Nhcm91c2VsLnRzeD83ZDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsLXJlYWN0J1xuaW1wb3J0IEF1dG9wbGF5IGZyb20gJ2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5J1xuaW1wb3J0IHtcbiAgRG90QnV0dG9uLFxuICBQcmV2QnV0dG9uLFxuICBOZXh0QnV0dG9uLFxufSBmcm9tICcuLi9jb21wb25lbnQvY2Fyb3VzZWxBcnJvdydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Fycm93Q2Fyb3VzZWwubW9kdWxlLmNzcydcblxuY29uc3Qgc2Nyb2xsU25hcHMgPSBbMSwyLDMsNF07XG5cbmNvbnN0IEFycm93Q2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWJsYVJlZiwgZW1ibGFBcGldID0gdXNlRW1ibGFDYXJvdXNlbCh7IGxvb3A6IGZhbHNlLCBkcmFnRnJlZTogdHJ1ZSB9LCBbQXV0b3BsYXkoKV0pO1xuICBjb25zdCBbcHJldkJ0bkVuYWJsZWQsIHNldFByZXZCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhQXBpKSByZXR1cm5cbiAgICBzZXRTZWxlY3RlZEluZGV4KGVtYmxhQXBpLnNlbGVjdGVkU2Nyb2xsU25hcCgpKVxuICAgIHNldFByZXZCdG5FbmFibGVkKGVtYmxhQXBpLmNhblNjcm9sbFByZXYoKSlcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYUFwaS5jYW5TY3JvbGxOZXh0KCkpXG4gIH0sIFtlbWJsYUFwaSwgc2V0U2VsZWN0ZWRJbmRleF0pXG5cbiAgY29uc3Qgc2Nyb2xsUHJldiA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IGVtYmxhQXBpICYmIGVtYmxhQXBpLnNjcm9sbFByZXYoKSxcbiAgICBbZW1ibGFBcGldLFxuICApXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBlbWJsYUFwaSAmJiBlbWJsYUFwaS5zY3JvbGxOZXh0KCksXG4gICAgW2VtYmxhQXBpXSxcbiAgKVxuICBjb25zdCBzY3JvbGxUbyA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiBlbWJsYUFwaSAmJiBlbWJsYUFwaS5zY3JvbGxUbyhpbmRleCksXG4gICAgW2VtYmxhQXBpXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGF9IHJlZj17ZW1ibGFSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYmxhX19jb250YWluZXJ9PlxuICAgICAgICAgIHtzY3JvbGxTbmFwcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX3NsaWRlfT5TbGlkZSB7aXRlbX08L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX2RvdHN9PlxuICAgICAgICB7c2Nyb2xsU25hcHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxEb3RCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhpbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0Nhcm91c2VsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFbWJsYUNhcm91c2VsIiwiQXV0b3BsYXkiLCJEb3RCdXR0b24iLCJzdHlsZXMiLCJzY3JvbGxTbmFwcyIsIkFycm93Q2Fyb3VzZWwiLCJlbWJsYVJlZiIsImVtYmxhQXBpIiwibG9vcCIsImRyYWdGcmVlIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsIm9uU2VsZWN0Iiwic2VsZWN0ZWRTY3JvbGxTbmFwIiwiY2FuU2Nyb2xsUHJldiIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxQcmV2Iiwic2Nyb2xsTmV4dCIsInNjcm9sbFRvIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJlbWJsYSIsInJlZiIsImVtYmxhX19jb250YWluZXIiLCJtYXAiLCJpdGVtIiwiZW1ibGFfX3NsaWRlIiwiZW1ibGFfX2RvdHMiLCJfIiwic2VsZWN0ZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/arrowCarousel.tsx\n"));

/***/ })

});