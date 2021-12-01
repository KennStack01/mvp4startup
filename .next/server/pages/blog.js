"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-moment"
var external_react_moment_ = __webpack_require__(661);
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_);
// EXTERNAL MODULE: external "moment/locale/fr"
var fr_ = __webpack_require__(4487);
;// CONCATENATED MODULE: ./components/Blog/Blog.js






(external_react_moment_default()).globalLocale = "fr";
const Blog = ({ image , title , description , slug , date  })=>{
    const dateToFormat = date;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-between mx-2 md:mx-auto my-8 md:w-5/6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                alt: title,
                className: "bg-cover rounded-lg"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xs text-gray-600 text-left",
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                        format: "DD MMMM YYYY",
                        className: "capitalize font-semibold",
                        children: dateToFormat
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/blog/${slug}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "text-xl md:text-2xl font-bold hover:text-light-pink-500",
                        children: [
                            " ",
                            title,
                            " "
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm",
                        children: [
                            " ",
                            description.substring(0, 100),
                            "... "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/blog/${slug}`,
                        onMouseOver: ()=>setShowLire(true)
                        ,
                        onMouseOut: ()=>setShowLire(false)
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex flex-row justify-end text-right -mt-1 hover:underline",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "my-auto font-semibold",
                                    children: "Lire"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRightShort, {
                                    className: "text-xl my-auto"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Blog_Blog = (Blog);

;// CONCATENATED MODULE: ./components/Blog/BlogsList.js



const BlogsList = ({ posts  })=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    // console.log(posts);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto w-3/4 lg:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value)
                    ,
                    placeholder: `Entrez et Recherchez automatiquement l'article`,
                    className: "px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded-sm text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-400 focus:ring-helloblue-400 w-full"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 place-content-center md:mx-auto",
                children: posts.filter((post)=>{
                    if (searchTerm === "") {
                        return post;
                    } else if (post.title.toLowerCase().includes(searchTerm.toString().toLowerCase().trim())) {
                        return post;
                    }
                }).map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(Blog_Blog, {
                        title: post.title,
                        image: post.blogCoverImage.url,
                        date: post.date,
                        author: post.author,
                        description: post.shortDescription,
                        slug: post.slug
                    }, post.slug)
                )
            })
        ]
    }));
};
/* harmony default export */ const Blog_BlogsList = (BlogsList);

// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./components/Blog/BlogALaUne.js






(external_react_moment_default()).globalLocale = "fr";
const BlogALaUne = ({ image , title , description , slug , date  })=>{
    const dateToFormat = date;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row justify-between mx-auto my-8 md:my-12 lg:w-4/6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                alt: title,
                className: "bg-cover rounded-lg md:w-1/2"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between md:w-1/2 md:mx-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs text-gray-600 text-left",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                                format: "DD MMMM YYYY",
                                className: "capitalize font-semibold",
                                children: dateToFormat
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/blog/${slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-xl md:text-3xl font-bold hover:text-light-pink-500",
                                children: [
                                    " ",
                                    title,
                                    " "
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm",
                                children: [
                                    " ",
                                    description.substring(0, 700),
                                    "... "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blog/${slug}`,
                                onMouseOver: ()=>setShowLire(true)
                                ,
                                onMouseOut: ()=>setShowLire(false)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "flex flex-row justify-end text-right -mt-1 md:mt-1 hover:underline",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "my-auto font-semibold",
                                            children: "Lire"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRightShort, {
                                            className: "text-xl my-auto"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Blog_BlogALaUne = (BlogALaUne);

;// CONCATENATED MODULE: ./pages/blog/index.js






const graphcms = new external_graphql_request_.GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
function blog_Blog({ blogArticles , latestArticle  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Blog | MVP4Startup"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col text-gray-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "font-bold text-center text-4xl md:text-6xl",
                                children: "Le Blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center text-md md:text-md mx-auto my-7 md:w-1/2",
                                children: "Every code that you write needs design. The amount of time you will spend creating the software design depends on the complexity of the system and your familiarity with the system."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: latestArticle.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(Blog_BlogALaUne, {
                                title: post.title,
                                image: post.blogCoverImage.url,
                                date: post.date,
                                author: post.author,
                                description: post.shortDescription,
                                slug: post.slug
                            }, post.slug)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Blog_BlogsList, {
                        posts: blogArticles
                    })
                ]
            })
        ]
    }));
};
// export async function getStaticProps({ params }) {
async function getStaticProps() {
    const { blogArticles  } = await graphcms.request(`
    query {
        blogArticles(orderBy: date_DESC) {
            title
            blogCoverImage {
                url
            }
            date
            author
            shortDescription
            slug
        }
    }

  `);
    const { blogArticles: latestArticle  } = await graphcms.request(`
    query {
      blogArticles(orderBy: date_DESC, first: 1) {
        title
        blogCoverImage {
          url
        }
        date
        author
        shortDescription
        slug
      }
    }

  `);
    return {
        props: {
            blogArticles,
            latestArticle
        }
    };
} // export async function getStaticPaths() {
 //   const { blogArticles } = await graphcms.request(`
 //      query {
 //         blogArticles {
 //             slug
 //         }
 //     }
 //   `);
 //   return {
 //     paths: blogArticles.map(({ slug }) => ({
 //       params: { slug },
 //     })),
 //     fallback: false,
 //   };
 // }


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 4487:
/***/ ((module) => {

module.exports = require("moment/locale/fr");

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

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,708], () => (__webpack_exec__(5993)));
module.exports = __webpack_exports__;

})();