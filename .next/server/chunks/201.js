exports.id = 201;
exports.ids = [201];
exports.modules = {

/***/ 5221:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2321))

/***/ }),

/***/ 9966:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6787, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6990, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9868, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 933, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2594, 23))

/***/ }),

/***/ 2249:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4595, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4137));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 670));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5785))

/***/ }),

/***/ 2321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const NotFound = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-screen flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto grid grid-cols-1   ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center items-center flex-col mb-5 space-y-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "uppercase font-normal text-lg tracking-[8px] text-neutral-400 text-center",
                                        children: "Page not found"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-4xl font-medium text-neutral-900 text-center",
                                        children: "404"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>window.history.back(),
                                    className: "text-lg text-neutral-900 hover:text-neutral-800 text-center border-2 border-gray-800 rounded-xl p-3 py-2 mt-2",
                                    children: "Go Back"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 4137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4018);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const NavItems = ({ isNavOpen, setIsNavOpen })=>{
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleItemClick = ()=>{
        setIsNavOpen(false);
    };
    const navVariant = {
        open: {
            clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            clipPath: "circle(0px at calc(100% - 120px) 35px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const updateScreenWidth = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        // Initial check and event listener
        updateScreenWidth();
        window.addEventListener("resize", updateScreenWidth);
        // Clean up the event listener on unmount
        return ()=>{
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);
    // Check screen width and adjust clipPath for smaller screens
    if (isMobile) {
        navVariant.open = {
            clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
            transition: {
                type: "tween"
            }
        }, navVariant.closed = {
            clipPath: "circle(0px at calc(100% - 35px) 35px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        };
    } else {
        navVariant.open = {
            clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }, navVariant.closed = {
            clipPath: "circle(0px at calc(100% - 120px) 35px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        };
    }
    const itemVariants = {
        open: (custom)=>({
                opacity: 1,
                x: 0,
                rotate: 0,
                transition: {
                    delay: custom,
                    type: "spring",
                    stiffness: 400,
                    damping: 40
                }
            }),
        closed: {
            opacity: 0,
            x: -80,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            className: `fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`,
            variants: navVariant,
            animate: isNavOpen ? "open" : "closed",
            initial: false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw] ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center space-y-8 my-auto mx-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h1, {
                            variants: itemVariants,
                            animate: isNavOpen ? "open" : "closed",
                            className: "text-6xl font-bold text-white ",
                            children: "Menu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/#home",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-2xl font-bold text-white",
                                onClick: handleItemClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h2, {
                                    className: "text-white",
                                    variants: itemVariants,
                                    animate: isNavOpen ? "open" : "closed",
                                    custom: 0.1,
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/about",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleItemClick,
                                className: "text-2xl font-bold text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h2, {
                                    className: "text-white",
                                    variants: itemVariants,
                                    animate: isNavOpen ? "open" : "closed",
                                    custom: 0.2,
                                    children: "About"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/projects",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleItemClick,
                                className: "text-2xl font-bold text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h2, {
                                    className: "text-white",
                                    variants: itemVariants,
                                    animate: isNavOpen ? "open" : "closed",
                                    custom: 0.3,
                                    children: "Works"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/#contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleItemClick,
                                className: "text-2xl font-bold text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h2, {
                                    className: "text-white",
                                    variants: itemVariants,
                                    animate: isNavOpen ? "open" : "closed",
                                    custom: 0.4,
                                    children: "Contact"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
const Navbar = ()=>{
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleNav = ()=>{
        setIsNavOpen(!isNavOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                ref: navRef,
                className: `navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${isNavOpen ? "backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50" : "backdrop-filter backdrop-blur-md"} inset-0  bg-opacity-50 flex flex-row justify-between items-center h-16 z-50 `,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `text-2xl ml-2 md:ml-0 transition-colors ease duration-500 ${isNavOpen ? "text-white" : ""}`,
                            children: "Ifty's Portfolio"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "burger button flex flex-col justify-center items-center space-y-1.5 ",
                            onClick: toggleNav,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${isNavOpen ? "rotate-45   bg-white translate-y-[2px]" : ""}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""}`
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItems, {
                isNavOpen: isNavOpen,
                setIsNavOpen: setIsNavOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopProgressbar)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

let timer;
let state;
let activeRequests = 0;
function load() {
    if (state === "loading") {
        return;
    }
    state = "loading";
    timer = setTimeout(()=>{
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
    }, 1);
}
function stop() {
    if (activeRequests > 0) {
        return;
    }
    state = "stop";
    clearTimeout(timer);
    nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
}
function routeChangeStart() {
    if (window.location.pathname !== (next_router__WEBPACK_IMPORTED_MODULE_0___default().pathname)) {
        load();
    }
}
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on("routeChangeStart", routeChangeStart);
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on("routeChangeComplete", stop);
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on("routeChangeError", stop);
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    if (activeRequests === 0) {
        load();
    }
    activeRequests++;
    try {
        const response = await originalFetch(...args);
        return response;
    } catch (error) {
        return Promise.reject(error);
    } finally{
        activeRequests -= 1;
        if (activeRequests === 0) {
            stop();
        }
    }
};
function TopProgressbar() {
    return null;
}


/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(5184);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1677);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(4908);
;// CONCATENATED MODULE: ./components/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\E\portfolio-website\ifty-portfolio\portfolio-site\components\Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.4.2/node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(7653);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.4.2/node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(9892);
// EXTERNAL MODULE: ./app/nprogress.css
var nprogress = __webpack_require__(8002);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel+analytics@1.0.2/node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(2064);
;// CONCATENATED MODULE: ./app/layout.jsx






fontawesome_svg_core/* config */.vc.autoAddCss = false;


const metadata = {
    title: "Ifty | Portofolio",
    description: "A mechanical engineering final year student in Islamic University of Technology (IUT). I love to learn new things and always. open to new opportunities.",
    author: "Iftekhar Ahmed Ifty",
    siteUrl: "",
    applicationName: "Ifty",
    keywords: [
        "Ifty",
        "ifty",
        "Iftekhar",
        "Ahmed",
        "Ifterkhar Ahmed Ifty"
    ],
    openGraph: {
        type: "website",
        url: "",
        title: "Ifty | Portofolio",
        site_name: "Ifty | Portofolio",
        description: "My name is Ifty, This is my portofolio website.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image-rev.png",
                alt: "Ifty Portofolio"
            }
        ],
        site_name: "Ifty | Portofolio"
    }
};
const TopProgressBar = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 914).then(__webpack_require__.bind(__webpack_require__, 3914)), {
    loadableGenerated: {
        modules: [
            "C:\\E\\portfolio-website\\ifty-portfolio\\portfolio-site\\app\\layout.jsx -> " + "@/components/TopProgressbar"
        ]
    },
    ssr: false
});
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TopProgressBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.cp, {})
            ]
        })
    });
}


/***/ }),

/***/ 9612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4908);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\E\portfolio-website\ifty-portfolio\portfolio-site\app\not-found.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3369);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1677:
/***/ (() => {



/***/ }),

/***/ 8002:
/***/ (() => {



/***/ })

};
;