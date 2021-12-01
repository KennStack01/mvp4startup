"use strict";
(() => {
var exports = {};
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 2500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "https://mvp4startup-api.herokuapp.com/api/v1" : "https://mvp4startup-api.herokuapp.com/api/v1";


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Home/Formation/CourseTimestamp.js



const CourseTimestamp = ({ data  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col md:grid grid-cols-2 text-sm md:text-md",
        children: data.lessonformas.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row my-2 mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGraduationCap, {
                        className: "text-3xl text-light-pink-500 my-auto"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-between my-auto text-gray-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "font-semibold text-xs mx-2 my-auto",
                                children: [
                                    " ",
                                    "Part ",
                                    index + 1,
                                    ": ",
                                    item.topic,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mx-3 text-xs my-auto text-white bg-gray-800 p-1",
                                children: [
                                    " ",
                                    item.duration,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }, index)
        )
    }));
};
/* harmony default export */ const Formation_CourseTimestamp = (CourseTimestamp);

;// CONCATENATED MODULE: ./components/Home/Formation/DetailsTAB.js



const DetailsTAB = ({ color ="light-pink" , formation  })=>{
    const [openTab, setOpenTab] = external_react_default().useState(1);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex w-full z-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "md:flex flex-row grid grid-cols-3 md:justify-between mb-0 list-none flex-wrap pt-3 pb-4 px-2 text-gray-700 font-semibold md:w-full",
                            role: "tablist",
                            id: "MenuTab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " + (openTab === 1 ? "text-white bg-" + "light-pink" + "-500" : "text-" + color + "-600 bg-gray-100"),
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setOpenTab(1);
                                        },
                                        "data-toggle": "tab",
                                        href: "#link1",
                                        role: "tablist",
                                        children: "D\xe9tails"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " + (openTab === 2 ? "text-white bg-" + "light-pink" + "-500" : "text-" + color + "-600 bg-gray-100"),
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setOpenTab(2);
                                        },
                                        "data-toggle": "tab",
                                        href: "#link2",
                                        role: "tablist",
                                        children: "Le\xe7ons"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " + (openTab === 3 ? "text-white bg-" + "light-pink" + "-500" : "text-" + color + "-600 bg-gray-100"),
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setOpenTab(3);
                                        },
                                        "data-toggle": "tab",
                                        href: "#link4",
                                        role: "tablist",
                                        children: "Reviews"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 rounded",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "px-4 py-5 flex-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "tab-content tab-space",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: openTab === 1 ? "block" : "hidden",
                                        id: "link1",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-sm font-semibold my-3",
                                                            children: "Description du Cours"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-sm text-gray-800 text-justify",
                                                            children: [
                                                                " ",
                                                                formation.detailforma.courseDescription,
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-sm font-semibold my-3",
                                                            children: "A qui ce Projet est destin\xe9?"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-sm text-gray-800 text-justify",
                                                            children: [
                                                                " ",
                                                                formation.detailforma.audience,
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-sm font-semibold my-3",
                                                            children: "Ce que Vous allez apprendre"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-sm text-gray-800 text-justify",
                                                            children: [
                                                                " ",
                                                                formation.detailforma.ceQueVousAllezApprendre,
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-sm font-semibold my-3",
                                                            children: "Les pr\xe9requis"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-sm text-gray-800 text-justify",
                                                            children: [
                                                                " ",
                                                                formation.detailforma.prerequis,
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: openTab === 2 ? "block" : "hidden",
                                        id: "link2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "p-4 mx-auto",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Formation_CourseTimestamp, {
                                                data: formation
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: openTab === 3 ? "block" : "hidden",
                                        id: "link3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "my-3",
                                            children: formation === null || formation === void 0 ? void 0 : formation.reviewformas.map((review, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-row mx-auto justify-center my-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: review.userAvatar,
                                                            alt: "Avatar Image",
                                                            className: "my-auto h-16 w-16 p-1 rounded-full bg-white"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-col mx-3 md:mx-4 my-auto md:w-2/3 bg-white p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                    className: "text-xs font-semibold mb-1",
                                                                    children: [
                                                                        " ",
                                                                        "Unknown User"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "text-xs text-gray-800",
                                                                    children: [
                                                                        " ",
                                                                        review.comment,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Formation_DetailsTAB = (DetailsTAB); // export default function DetailsTAB() {
 //   return (
 //     <>
 //       <DetailsTAB color="light-pink" />
 //     </>
 //   );
 // }

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/formations/[id]/index.js






const FormationComponent = ({ formation  })=>{
    const videoID = formation.introVideo.replace("https://www.youtube.com/watch?v=", "");
    const embedURL = `https://www.youtube.com/embed/${videoID}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            " ",
                            formation === null || formation === void 0 ? void 0 : formation.title,
                            " | MVP4Startup"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-xl md:text-2xl font-semibold text-center text-gray-700",
                            children: [
                                " ",
                                formation.title,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    width: "100%",
                                    height: "100%",
                                    src: embedURL,
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true,
                                    title: formation.title,
                                    className: "rounded-sm h-96 w-80 md:w-2/3 mx-auto md:mx-auto"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row mx-auto my-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "font-semibold my-auto text-lg p-1 md:p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-l-sm",
                                            children: [
                                                " ",
                                                "$",
                                                formation.price.toString(),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: `/formations/${formation.id}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "p-1 md:p-3 font-semibold text-lg cursor-pointer text-white bg-light-pink-500 rounded-r-sm",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: "mx-auto md:my-auto ",
                                                    children: [
                                                        " ",
                                                        formation.isFree ? "D\xe9buter" : "Acheter",
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:w-2/3 mx-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Formation_DetailsTAB, {
                                formation: formation
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const _id_ = (FormationComponent);
async function getStaticProps({ params  }) {
    const formation = await fetch(`${config/* server */.f}/formations/${params.id}`).then((res)=>res.json()
    );
    return {
        props: {
            formation
        }
    };
}
async function getStaticPaths() {
    // const formations = await fetch("http://localhost:3002/formations").then(
    const formations = await fetch(`${config/* server */.f}/formations`).then((res)=>res.json()
    );
    return {
        paths: formations.map((formation)=>{
            return {
                params: {
                    id: formation.id.toString(),
                    slug: formation.slug
                }
            };
        }),
        fallback: false
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 7865:
/***/ ((module) => {

module.exports = require("react-icons/cg");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,708], () => (__webpack_exec__(973)));
module.exports = __webpack_exports__;

})();