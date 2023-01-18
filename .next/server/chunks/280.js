"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 3280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_tailwind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_tailwind__WEBPACK_IMPORTED_MODULE_3__]);
_styles_tailwind__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    console.log();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row items-center justify-center gap-x-6 p-6 bg-indigo-200 dark:bg-neutral-800",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: (0,_styles_tailwind__WEBPACK_IMPORTED_MODULE_3__/* .textStyle */ .Cg)({
                    sizes: "title",
                    colors: [
                        "hoverColor",
                        router.pathname === "/" ? "onColor" : "titleColor"
                    ]
                }),
                href: "/",
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: (0,_styles_tailwind__WEBPACK_IMPORTED_MODULE_3__/* .textStyle */ .Cg)({
                    sizes: "title",
                    colors: [
                        "hoverColor",
                        router.pathname === "/about" ? "onColor" : "titleColor"
                    ]
                }),
                href: "/about",
                children: "About"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cg": () => (/* binding */ textStyle)
/* harmony export */ });
/* unused harmony exports colors, sizes, tailwind */
/* harmony import */ var _fxts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fxts_core__WEBPACK_IMPORTED_MODULE_0__]);
_fxts_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const colors = {
    titleColor: "text-black dark:text-white",
    onColor: "text-indigo-400 dark:text-indigo-400",
    contentColor: "text-gray-600 dark:text-gray-400",
    hoverColor: "hover:text-indigo-400 dark:hover:text-indigo-400"
};
const sizes = {
    title: "text-3xl font-bold",
    titleSecond: "text-2xl font-bold",
    titleThird: "text-xl font-bold",
    content: "text-base",
    contentSecond: "text-sm"
};
const tailwind = {
    ...colors,
    ...sizes
};
const arrayArgs = (value)=>value instanceof Array ? (0,_fxts_core__WEBPACK_IMPORTED_MODULE_0__.map)((value)=>tailwind[value], value) : tailwind[value];
const textStyle = (props)=>(0,_fxts_core__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_fxts_core__WEBPACK_IMPORTED_MODULE_0__.values)(props), _fxts_core__WEBPACK_IMPORTED_MODULE_0__.compact, (0,_fxts_core__WEBPACK_IMPORTED_MODULE_0__.map)(arrayArgs), _fxts_core__WEBPACK_IMPORTED_MODULE_0__.flat, (0,_fxts_core__WEBPACK_IMPORTED_MODULE_0__.reduce)((acc, cur)=>`${acc} ${cur}`));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;