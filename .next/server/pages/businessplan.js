(() => {
var exports = {};
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 2500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "https://mvp4startup-api.herokuapp.com/api/v1" : "https://mvp4startup-api.herokuapp.com/api/v1";


/***/ }),

/***/ 5794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ businessplan_BusinessPlan),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/businessPlan.svg
var businessPlan = __webpack_require__(2288);
var businessPlan_default = /*#__PURE__*/__webpack_require__.n(businessPlan);
;// CONCATENATED MODULE: ./components/BusinessPlan/Hero.js





const Hero = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row md:my-2 mx-2 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-auto md:w-1/2 flex flex-col",
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "font-bold text-2xl md:text-4xl text-dark-pink-500 w-full md:mr-20",
                        children: [
                            "L’Afrique est le continent avec les plus grande perspective d’\xe9volution.",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-sm font-medium md:font-medium my-4 text-justify",
                        children: "La population est jeune passionn\xe9e et talentueuse, tout est \xe0 construire. Vous trouverez ici des business plan cl\xe9 en main qui vous permettra de contribuer \xe0 l’essor \xe9conomique de ce continent. Vous aurez toutes les informations n\xe9cessaires pour l’impl\xe9mentation de chacun des Business plan, de l’offre financi\xe8re, du plan de d\xe9pense, des ressources humaines, des contacts des partenariats, \xe0 l’\xe9tude de terrain, vous disposez de tous pour investir sur ce continent."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-auto md:w-1/2 hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((businessPlan_default()), {
                    style: {
                        width: "90%",
                        height: "inherit"
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const BusinessPlan_Hero = (Hero);

;// CONCATENATED MODULE: ./components/BusinessPlan/BusinessPlanALaUne/BpALaUne.js



const BusinessPlanALaUne = ()=>{
    const { 0: businessPlans1 , 1: setBusinessPlans  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const fetchBusinessPlans = async ()=>{
        // let URL = "http://localhost:4000/home/index_bsp";
        let URL = "";
        try {
            const res = await fetch(URL);
            const businessPlans = await res.json();
            setBusinessPlans(businessPlans);
            setLoading(false);
        // console.log(businessPlans);
        } catch (err) {
            console.log(err);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchBusinessPlans();
    // console.log("BusinessPlansList", businessPlans);
    }, []);
    // console.log("Project", businessPlans[0]);
    const businessPlan = {
        id: 1,
        slug: "business-plan-mvp",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        title: "Business Plan MVP",
        details: "Create an account and receive your first 100 points. Submit an article to earn more and unlock your first project. Enjoy learning about new CSS frameworks, animation libraries, and SEO.",
        category: "Agriculture",
        isFree: false,
        price: 75,
        showAll: true
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col md:flex-row bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-auto hover:shadow-xl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: businessPlan.imageSrc,
                    alt: "Picture of the training",
                    width: 250,
                    height: 100,
                    className: "h-3/6 md:h-full md:w-3/6 rounded-xl w-full object-cover"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center text-gray-900 h-3/6 md:h-full md:w-3/6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/businessplan/[id]",
                            as: `/businessplan/${businessPlan.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-md md:text-xl text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline",
                                children: businessPlan.title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col mx-3 md:mx-4 my-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-sm md:text-md font-semibold md:mt-8",
                                    children: "D\xe9tails:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-xs md:text-sm text-justify",
                                    children: [
                                        " ",
                                        businessPlan.details.substring(0, 500),
                                        "...",
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-gray-900 text-white mx-auto my-2 md:my-1 p-3 md:p-1 font-semibold rounded-xl md:rounded-sm md:text-md transform transition duration-500 hover:scale-110",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/businessplan/[id]",
                                as: `/businessplan/${businessPlan.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                        className: "mx-auto md:my-auto ",
                                        children: [
                                            " ",
                                            "Acheter ce Business Plan",
                                            " "
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const BpALaUne = (BusinessPlanALaUne);

;// CONCATENATED MODULE: ./components/BusinessPlan/BusinessPlanALaUne/BpALaUneBanner.js



// import TeamProject from "-!svg-react-loader!../../../public/svg/teamProject.svg";
const BusinessPlanALaUneBanner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 md:my-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2",
                children: "Business Plan \xe0 la Une!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col md:flex-row justify-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:w-3/4 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BpALaUne, {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
            })
        ]
    }));
};
/* harmony default export */ const BpALaUneBanner = (BusinessPlanALaUneBanner);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/BusinessPlan/BusinessPlan.js







const BusinessPlan = ({ id , imageSrc ="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" , title , details , price , slug ="/businessplan" ,  })=>{
    let API = "http://localhost:3002/businessPlans/"; //Image domain: to be set
    const myLoader = ({ src  })=>{
        return `${API}${src}`;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-2 hover:shadow-xl transform transition duration-500 hover:scale-110",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: imageSrc,
                alt: "Picture of the training",
                width: 250,
                height: 100,
                className: "h-4/6 rounded-xl w-full object-cover"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center text-gray-900 h-2/6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/businessplan/[id]",
                        as: `/businessplan/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-md md:text-lg text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col mx-3 md:mx-4 my-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-sm font-semibold",
                                children: "D\xe9tails:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-xs text-justify",
                                children: [
                                    " ",
                                    details.substring(0, 100),
                                    "...",
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between bg-gray-900 text-white mt-1 px-3 py-2 md:px-5 md:py-2 rounded-b-xl w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "my-auto text-xl font-semibold",
                        children: [
                            " $",
                            price.toString(),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/businessplan/[id]",
                        as: `/businessplan/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:p-1 md:px-2 font-semibold text-xl cursor-pointer bg-white hover:bg-gray-100 text-gray-800 rounded",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "mx-auto md:my-auto ",
                                children: " Acheter "
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const BusinessPlan_BusinessPlan = (BusinessPlan);

;// CONCATENATED MODULE: ./components/BusinessPlan/BusinessPlansList.js





const BusinessPlansList = ({ businessPlans  })=>{
    // const [businessPlans, setBusinessPlans] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const fetchBusinessPlans = async () => {
    //   // let URL = "http://localhost:4000/home/index_bsp";
    //   let URL = "http://localhost:3002/businessPlans";
    //   try {
    //     const res = await fetch(URL);
    //     const businessPlans = await res.json();
    //     setBusinessPlans(businessPlans);
    //     setLoading(false);
    //     // console.log(businessPlans);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // useEffect(() => {
    //   fetchBusinessPlans();
    //   // console.log("BusinessPlansList", businessPlans);
    // }, []);
    // For Filtering Options
    const [isCurrent, setIsCurrent] = external_react_default().useState({
        isTousCurrent: true,
        isITCurrent: false,
        isAgroCurrent: false,
        isElevageCurrent: false,
        isIndustrielleCurrent: false
    });
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const getTousValue = ()=>{
        const value = "Tous";
        setSearchTerm(value);
    };
    const getITValue = ()=>{
        const value = "IT";
        setSearchTerm(value);
    };
    const getAgroValue = ()=>{
        const value = "Agro";
        setSearchTerm(value);
    };
    const getElevageValue = ()=>{
        const value = "Elevage";
        setSearchTerm(value);
    };
    const getIndustrielleValue = ()=>{
        const value = "Industrielle";
        setSearchTerm(value);
    };
    const currentCSSStyles = "text-white bg-dark-pink-400";
    const normalStyle = "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2",
                children: "Les Business Plans"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sticky top-0 grid grid-cols-2 place-content-center space-x-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getTousValue();
                            setIsCurrent({
                                isTousCurrent: true,
                                isITCurrent: false,
                                isAgroCurrent: false,
                                isElevageCurrent: false,
                                isIndustrielleCurrent: false
                            });
                        },
                        className: `${isCurrent.isTousCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Tous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getITValue();
                            setIsCurrent({
                                isTousCurrent: false,
                                isITCurrent: true,
                                isAgroCurrent: false,
                                isElevageCurrent: false,
                                isIndustrielleCurrent: false
                            });
                        },
                        className: `${isCurrent.isITCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "IT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getAgroValue();
                            setIsCurrent({
                                isTousCurrent: false,
                                isITCurrent: false,
                                isAgroCurrent: true,
                                isElevageCurrent: false,
                                isIndustrielleCurrent: false
                            });
                        },
                        className: `${isCurrent.isAgroCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Agriculture"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getElevageValue();
                            setIsCurrent({
                                isTousCurrent: false,
                                isITCurrent: false,
                                isAgroCurrent: false,
                                isElevageCurrent: true,
                                isIndustrielleCurrent: false
                            });
                        },
                        className: `${isCurrent.isElevageCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Elevage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getIndustrielleValue();
                            setIsCurrent({
                                isTousCurrent: false,
                                isITCurrent: false,
                                isAgroCurrent: false,
                                isElevageCurrent: false,
                                isIndustrielleCurrent: true
                            });
                        },
                        className: `${isCurrent.isIndustrielleCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Industrielle"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: businessPlans.filter((busiessPlan)=>{
                    if (searchTerm === "") {
                        return busiessPlan;
                    }
                    if (searchTerm === "Tous") {
                        return busiessPlan;
                    }
                    if (searchTerm === "IT") {
                        return busiessPlan.category === "IT";
                    }
                    if (searchTerm === "Agro") {
                        return busiessPlan.category === "Agriculture";
                    }
                    if (searchTerm === "Elevage") {
                        return busiessPlan.category === "Elevage";
                    }
                    if (searchTerm === "Industrielle") {
                        return busiessPlan.category === "Industrielle";
                    }
                }).map((businessPlan)=>/*#__PURE__*/ jsx_runtime_.jsx(BusinessPlan_BusinessPlan, {
                        id: businessPlan.id,
                        imageSrc: businessPlan.imageSrc,
                        title: businessPlan.title,
                        details: businessPlan.details,
                        price: businessPlan.price,
                        slug: businessPlan.slug
                    }, businessPlan.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const BusinessPlan_BusinessPlansList = (BusinessPlansList);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/businessplan/index.js







function businessplan_BusinessPlan({ businessplans  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Busines Plan | MVP4Startup"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BusinessPlan_Hero, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BpALaUneBanner, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BusinessPlan_BusinessPlansList, {
                        businessPlans: businessplans
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    try {
        const response = await fetch(`${config/* server */.f}/businessplans`);
        const businessplans = await response.json();
        return {
            props: {
                businessplans
            }
        };
    } catch (error) {
        console.error(error.message);
    }
    return {
        props: {
            businessplans: []
        }
    };
// const businessplans = await fetch("http://localhost:3002/businessPlans").then(
// const businessplans = await fetch(`${server}/businessplans`).then(
//   (res) => res.json()
// );
// return {
//   props: {
//     businessplans,
//   },
// };
}


/***/ }),

/***/ 2288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function BusinessPlan (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M688.4609,477h-485.5a17.01917,17.01917,0,0,1-17-17V225a17.01917,17.01917,0,0,1,17-17h485.5a17.01917,17.01917,0,0,1,17,17V460A17.01917,17.01917,0,0,1,688.4609,477Zm-485.5-267a15.017,15.017,0,0,0-15,15V460a15.017,15.017,0,0,0,15,15h485.5a15.017,15.017,0,0,0,15-15V225a15.017,15.017,0,0,0-15-15Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":0}),React.createElement("circle",{"cx":"93.25","cy":"49.5","r":"9","fill":"#ccc","key":1}),React.createElement("circle",{"cx":"93.25","cy":"83.5","r":"9","fill":"#ccc","key":2}),React.createElement("circle",{"cx":"93.25","cy":"117.5","r":"9","fill":"#ccc","key":3}),React.createElement("circle",{"cx":"93.25","cy":"151.5","r":"9","fill":"#ccc","key":4}),React.createElement("circle",{"cx":"244.75","cy":"219.5","r":"9","fill":"#ccc","key":5}),React.createElement("circle",{"cx":"179.75","cy":"219.5","r":"9","fill":"#ccc","key":6}),React.createElement("circle",{"cx":"378.75","cy":"219.5","r":"9","fill":"#ccc","key":7}),React.createElement("circle",{"cx":"310.75","cy":"219.5","r":"9","fill":"#ccc","key":8}),React.createElement("path",{"d":"M620.2109,258.5h-296a1,1,0,0,1,0-2h296a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#ccc","key":9}),React.createElement("path",{"d":"M620.2109,292.5h-296a1,1,0,0,1,0-2h296a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#ccc","key":10}),React.createElement("path",{"d":"M620.2109,326.5h-296a1,1,0,0,1,0-2h296a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#ccc","key":11}),React.createElement("path",{"d":"M620.2109,360.5h-296a1,1,0,0,1,0-2h296a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#ccc","key":12}),React.createElement("path",{"d":"M380.2109,394.5h-29a5.0058,5.0058,0,0,1-5-5v-27a5.0058,5.0058,0,0,1,5-5h29a5.00581,5.00581,0,0,1,5,5v27A5.00581,5.00581,0,0,1,380.2109,394.5Z","transform":"translate(-185.9609 -208)","fill":"#b9074e","key":13}),React.createElement("path",{"d":"M445.2109,394.5h-29a5.00573,5.00573,0,0,1-5-5v-61a5.00573,5.00573,0,0,1,5-5h29a5.00573,5.00573,0,0,1,5,5v61A5.00573,5.00573,0,0,1,445.2109,394.5Z","transform":"translate(-185.9609 -208)","fill":"#b9074e","key":14}),React.createElement("path",{"d":"M511.2109,394.5h-29a5.00573,5.00573,0,0,1-5-5v-95a5.00573,5.00573,0,0,1,5-5h29a5.00573,5.00573,0,0,1,5,5v95A5.00573,5.00573,0,0,1,511.2109,394.5Z","transform":"translate(-185.9609 -208)","fill":"#b9074e","key":15}),React.createElement("path",{"d":"M579.2109,394.5h-29a5.00573,5.00573,0,0,1-5-5v-128a5.00573,5.00573,0,0,1,5-5h29a5.00573,5.00573,0,0,1,5,5v128A5.00573,5.00573,0,0,1,579.2109,394.5Z","transform":"translate(-185.9609 -208)","fill":"#b9074e","key":16}),React.createElement("path",{"d":"M849.41372,686.34423c-8.99256-7.59865-14.45479-19.60227-13.02232-31.28789s10.30472-22.42829,21.81332-24.90978,24.62761,4.38768,28.12315,15.62987c1.92376-21.67449,4.14055-44.25713,15.6641-62.715,10.43429-16.71314,28.50667-28.672,48.093-30.81147s40.20832,5.941,52.42363,21.40027,15.20618,37.93388,6.65089,55.68242c-6.30238,13.07473-17.91358,22.80511-30.07923,30.72127a194.12948,194.12948,0,0,1-132.77224,29.04621Z","transform":"translate(-185.9609 -208)","fill":"#f2f2f2","key":17}),React.createElement("path",{"d":"M983.14,558.63886A317.62453,317.62453,0,0,0,938.8759,602.593a318.5511,318.5511,0,0,0-49.85571,83.314c-.89773,2.1999,2.67454,3.15751,3.56229.98207a316.75881,316.75881,0,0,1,93.16977-125.638c1.84429-1.5018-.78315-4.10164-2.61223-2.61223Z","transform":"translate(-185.9609 -208)","fill":"#fff","key":18}),React.createElement("path",{"d":"M754.57076,411.05762a17.509,17.509,0,0,1-3.38574-.33936h-.00049q-.30543-.06079-.61084-.13135L505.67647,353.56738c-2.65991-.61963-4.427-2.293-4.11011-3.89306a2.65908,2.65908,0,0,1,2.03907-1.88233,7.41836,7.41836,0,0,1,3.62207-.08056l246.41772,51.46191c5.54834,1.1582,9.40015,4.56348,8.769,7.75146-.33056,1.66846-1.7998,2.96192-4.13745,3.64258A13.356,13.356,0,0,1,754.57076,411.05762Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":19}),React.createElement("path",{"d":"M702.69264,403.16892a10.05575,10.05575,0,0,0,14.52487-5.17531l35.72708.745-9.8976-15.71213-32.40963,1.70134a10.11028,10.11028,0,0,0-7.94472,18.44107Z","transform":"translate(-185.9609 -208)","fill":"#ffb8b8","key":20}),React.createElement("path",{"d":"M718.2109,397.46172l-.18587-10.95079a4.52375,4.52375,0,0,1,4.06742-4.55553l64.201-6.19566,53.4904-17.53817a12.81886,12.81886,0,1,1,7.63274,24.47234l-59.2065,17.52973-65.38677,1.66091a4.50905,4.50905,0,0,1-4.42846-3.21338A4.522,4.522,0,0,1,718.2109,397.46172Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":21}),React.createElement("polygon",{"points":"627.258 471.782 614.998 471.781 609.166 424.493 627.26 424.494 627.258 471.782","fill":"#ffb8b8","key":22}),React.createElement("path",{"d":"M816.34559,691.66577l-39.53051-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38624h.001l24.1438.001Z","transform":"translate(-185.9609 -208)","fill":"#2f2e41","key":23}),React.createElement("polygon",{"points":"663.258 471.782 650.998 471.781 645.166 424.493 663.26 424.494 663.258 471.782","fill":"#ffb8b8","key":24}),React.createElement("path",{"d":"M852.34559,691.66577l-39.53051-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38624h.001l24.1438.001Z","transform":"translate(-185.9609 -208)","fill":"#2f2e41","key":25}),React.createElement("path",{"d":"M857.44684,488.67394l-2.92742,173.69392a4,4,0,0,1-4.36158,3.91617l-14.34623-1.3042a4,4,0,0,1-3.62589-3.67442l-8.39886-108.34525a1,1,0,0,0-1.99629.03944l-4.19795,110.82575a4,4,0,0,1-3.99713,3.84859H798.20986a4,4,0,0,1-3.99255-3.756l-10.77047-176.244,64-16Z","transform":"translate(-185.9609 -208)","fill":"#2f2e41","key":26}),React.createElement("circle",{"cx":"625.06469","cy":"93.01646","r":"24.56103","fill":"#ffb8b8","key":27}),React.createElement("path",{"d":"M781.25544,493.84093a4.46917,4.46917,0,0,1-1.3645-3.165L778.2342,372.23351a28.50083,28.50083,0,0,1,19.282-27.44141c2.301-10.43945,14.54785-11.74707,21.68726-11.59082a11.08483,11.08483,0,0,1,8.97753,4.92286l5.11792,7.67675,11.28028,6.61231a28.528,28.528,0,0,1,13.47021,30.8164l-1.73657,7.89942a181.54018,181.54018,0,0,0,1.69775,84.66015l3.49463,13.32422a4.49944,4.49944,0,0,1-4.698,5.62793l-4.05859-.3125a4.49385,4.49385,0,0,1-4.13257-4.03808l-.67163-6.7168a.50005.50005,0,0,0-.99512,0l-.65014,6.50293a4.49951,4.49951,0,0,1-4.40845,4.05176l-57.43091.88379c-.02392,0-.0476.001-.07153.001A4.47131,4.47131,0,0,1,781.25544,493.84093Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":28}),React.createElement("path",{"d":"M812.94684,315.17394c.10071,3.472,2.51116,5.48065,5.47053,7.29924s6.41876,2.60712,9.808,3.36775a2.99861,2.99861,0,0,0,4.40515-2.62457l3.1084-11.82324a74.84063,74.84063,0,0,0,2.39306-11.537c.74862-7.50914-1.031-15.58706-6.27222-21.01634s-14.33084-7.358-20.6116-3.17478c-7.45361-9.51978-41.52343,11.513-33.11914,18.13281,1.49512,1.17768,3.78064-.31249,5.67841-.45693s4.02454.18937,5.23,1.66219c1.575,1.9242.889,4.79052,1.538,7.1909a6.71431,6.71431,0,0,0,8.48369,4.34833,23.08806,23.08806,0,0,0,4.39987-2.8286c1.45566-.96958,3.29506-1.686,4.93368-1.0745,2.15991.80607,2.92723,3.45041,3.12242,5.74755A53.23512,53.23512,0,0,0,812.94684,315.17394Z","transform":"translate(-185.9609 -208)","fill":"#2f2e41","key":29}),React.createElement("path",{"d":"M994.892,692h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":30}),React.createElement("polygon",{"points":"621.25 173 617.25 222 596.25 273 627.25 223 621.25 173","opacity":"0.2","key":31}),React.createElement("path",{"d":"M777.30034,499.99214a10.05576,10.05576,0,0,0,.31761-15.41606l13.37856-33.136-18.20228,3.67571-9.9139,30.903a10.11028,10.11028,0,0,0,14.42,13.97337Z","transform":"translate(-185.9609 -208)","fill":"#ffb8b8","key":32}),React.createElement("path",{"d":"M776.32622,485.378l-10.30362-3.71344a4.52376,4.52376,0,0,1-2.81506-5.41962l16.99724-62.21933,2.59146-56.2325a12.81885,12.81885,0,1,1,25.588,1.55127l-4.62838,61.57336L782.09828,482.636a4.509,4.509,0,0,1-4.57608,2.99941A4.5218,4.5218,0,0,1,776.32622,485.378Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":33}),React.createElement("path",{"d":"M620.2109,394.5h-296a1,1,0,0,1,0-2h296a1,1,0,0,1,0,2Z","transform":"translate(-185.9609 -208)","fill":"#3f3d56","key":34})]);
}

BusinessPlan.defaultProps = {"id":"a433dce0-d5dc-4175-8ce6-641600ceb878","data-name":"Layer 1","width":"828.07821","height":"484","viewBox":"0 0 828.07821 484"};

module.exports = BusinessPlan;

BusinessPlan.default = BusinessPlan;


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 7865:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/cg");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,708], () => (__webpack_exec__(5794)));
module.exports = __webpack_exports__;

})();