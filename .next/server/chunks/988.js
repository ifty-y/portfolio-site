"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ children, variation, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: `title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${variation === "primary" ? "bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border" : "transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border"}`,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 2236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Hr)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4018);


function Hr() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center items-center flex-col my-5 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div, {
                className: "bg-gray-700 w-20 h-1 rounded-full mb-2",
                initial: {
                    opacity: 0,
                    x: -45
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.2,
                    type: "spring"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div, {
                className: "bg-gray-700 w-20 h-1 rounded-full ",
                initial: {
                    opacity: 0,
                    x: 150
                },
                whileInView: {
                    opacity: 1,
                    x: 40
                },
                transition: {
                    delay: 0.3,
                    type: "spring"
                }
            })
        ]
    });
}


/***/ })

};
;