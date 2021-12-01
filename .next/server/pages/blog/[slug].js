"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 6602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-moment"
var external_react_moment_ = __webpack_require__(661);
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_);
// EXTERNAL MODULE: external "moment/locale/fr"
var fr_ = __webpack_require__(4487);
;// CONCATENATED MODULE: external "@graphcms/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@graphcms/rich-text-react-renderer");
;// CONCATENATED MODULE: ./components/Blog/BlogContent.js





(external_react_moment_default()).globalLocale = "fr";
const BlogContent = ({ title , image , author , date , mainContent  })=>{
    const dateToFormat = date;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ".blogContent flex flex-col justify-between mx-auto md:mx-auto my-8 w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "text-3xl md:text-5xl md:w-3/4 mx-auto text-center font-bold text-gray-800 hover:text-light-pink-500 my-4 md:mb-6 md:mt-2",
                children: [
                    " ",
                    title,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                alt: title,
                className: "bg-cover rounded-lg md:w-3/4 mx-auto"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-center text-md text-gray-600 font-medium",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs text-left my-auto",
                        children: [
                            "Date:  ",
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                                format: "DD MMMM YYYY",
                                className: "capitalize",
                                children: dateToFormat
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "mx-4",
                        children: [
                            " ",
                            " | ",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "my-auto text-xs",
                        children: [
                            " Auteur: ",
                            author,
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto text-justify my-8 md:my-10 md:mx-32",
                children: /*#__PURE__*/ jsx_runtime_.jsx(rich_text_react_renderer_namespaceObject.RichText, {
                    content: mainContent,
                    renderers: {
                        h1: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-white",
                                children: children
                            })
                        ,
                        bold: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: children
                            })
                    },
                    className: "text-gray-800 text-sm mx-2"
                })
            })
        ]
    }));
};
/* harmony default export */ const Blog_BlogContent = (BlogContent);

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./pages/blog/[slug]/index.js







const graphcms = new external_graphql_request_.GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
const BlogArticle = ({ blogArticles  })=>{
    // console.log(blogArticles);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            " ",
                            blogArticles[0].title,
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
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col",
                    children: blogArticles.map((blogArticle)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(Blog_BlogContent, {
                            title: blogArticle.title,
                            image: blogArticle.blogCoverImage.url,
                            date: blogArticle.date,
                            author: blogArticle.author,
                            mainContent: blogArticle.mainContent.raw,
                            slug: blogArticle.slug
                        }, blogArticle.slug));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const _slug_ = (BlogArticle);
async function getStaticProps({ params  }) {
    const { blogArticles  } = await graphcms.request(`
    query MyQuery($slug: String!) {
      blogArticles(where: { slug: $slug }) {
        title
        blogCoverImage {
          url
        }
        date
        author
        shortDescription
        slug
        mainContent {
          raw
        }
      }
    }

  `, {
        slug: params.slug
    });
    return {
        props: {
            blogArticles
        }
    };
}
async function getStaticPaths() {
    const { blogArticles  } = await graphcms.request(`
     query {
        blogArticles {
            slug
        }
    }
  `);
    return {
        paths: blogArticles.map(({ slug  })=>({
                params: {
                    slug
                }
            })
        ),
        fallback: false
    };
}


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,708], () => (__webpack_exec__(6602)));
module.exports = __webpack_exports__;

})();