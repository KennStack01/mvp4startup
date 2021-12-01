(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 3050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/blogCollabImage.svg
var blogCollabImage = __webpack_require__(1072);
var blogCollabImage_default = /*#__PURE__*/__webpack_require__.n(blogCollabImage);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Home/BlogAnnonce.js




const BlogAnnonce = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row my-14 md:my-20 mx-2 md:mx-5 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-auto md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx((blogCollabImage_default()), {
                    style: {
                        width: "90%",
                        height: "inherit"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-auto md:w-1/2 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "italic text-sm md:text-md",
                        children: "Meilleure communaut\xe9 d’entrepreneurs. Nous sommes l\xe0 pour vous aider. Vous avez essay\xe9 d’apprendre \xe0 coder seul mais vous n’y arrivez pas. Vous avez des id\xe9es de projet dans le domaine du IT mais vous ne savez pas coder alors n’h\xe9sitez prenez une de nos formations vous permettra de maitriser clairement la conception de votre produit en le codant vous-m\xeame ou vous aider \xe0 parler le m\xeame langage que vos d\xe9v\xe9loppeurs."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-light-pink-500 hover:bg-light-pink-600 mx-auto my-2 md:my-5 p-2 text-white font-semibold rounded-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/blog",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "mx-auto md:my-auto ",
                                    children: " Voir Blog "
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Home_BlogAnnonce = (BlogAnnonce);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Home/BusinessPlan/BusinessPlan.js







const BusinessPlan = ({ id , imageSrc ="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" , title , details , price , slug ="" ,  })=>{
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

;// CONCATENATED MODULE: ./components/Home/BusinessPlan/BusinessPlansList.js





const BusinessPlansList = ({ businessPlans  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2",
                children: "Business Plans"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: businessPlans.map((businessPlan)=>/*#__PURE__*/ jsx_runtime_.jsx(BusinessPlan_BusinessPlan, {
                        id: businessPlan.id,
                        imageSrc: businessPlan.imageSrc,
                        title: businessPlan.title,
                        details: businessPlan.details,
                        price: businessPlan.price,
                        slug: businessPlan.slug
                    }, businessPlan.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/businessplan",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: "En savoir plus"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRightShort, {
                            className: "my-auto text-xl"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const BusinessPlan_BusinessPlansList = (BusinessPlansList);

;// CONCATENATED MODULE: ./components/Home/Formation/Formation.js







const Formation = ({ id , imageSrc ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40gmonne%2Fsimple-app-layout-with-office-ui-fabric-react-2eac6361e1b4&psig=AOvVaw3hfbrCeQcwX1QNhDk5LqQ1&ust=1634299218822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjS9prtyfMCFQAAAAAdAAAAABAD" , title , slug ="/projects" , lessons , duration , isFree , price , technologies , showAll ,  })=>{
    let API = "http://localhost:3002/formations/"; //Image domain: to be set
    const myLoader = ({ src  })=>{
        return `${API}${src}`;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col bg-back-pink-500 rounded-lg my-3 md:my-5 sm:mx-2 md:mx-1 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-3/6 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imageSrc,
                        alt: "Picture of the training",
                        width: 250,
                        height: 100,
                        className: "w-full rounded-t-xl lg:rounded-l-xl lg:h-full object-cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: !isFree ? "hidden" : `block bg-red-600 absolute px-2 py-1 -mt-20 rounded-r text-white font-semibold`,
                        children: "Gratuite"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: price <= 0 ? "hidden" : `block bg-yellow-600 absolute px-2 py-1 -mt-20 rounded-r text-white font-semibold`,
                        children: [
                            price,
                            "$"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center text-gray-900 h-4/6 md:mt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/formations/[id]",
                        as: `/formations/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-md md:text-md text-center font-bold mx-auto my-2 hover:text-dark-pink-500",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-evenly md:my-auto text-sm md:text-xs my-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillCollectionPlayFill, {
                                        className: "text-md md:text-xl my-auto"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm md:text-xs my-auto",
                                        children: [
                                            " ",
                                            lessons,
                                            " le\xe7ons "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineFieldTime, {
                                        className: "text-md md:text-xl my-auto"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm md:text-xs my-auto",
                                        children: [
                                            " ",
                                            duration,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/formations/[id]",
                        as: `/formations/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "flex justify-evenly mx-5 md:mx-10 my-2 font-semibold text-md md:my-2 cursor-pointer bg-light-pink-500 hover:bg-light-pink-600 text-white p-1 rounded",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "mx-auto",
                                children: " D\xe9couvrir "
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Formation_Formation = (Formation);

;// CONCATENATED MODULE: ./components/Home/Formation/FormationsList.js





const FormationsList = ({ formations  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2",
                children: "Formations Gratuites"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: formations.map((formation)=>/*#__PURE__*/ jsx_runtime_.jsx(Formation_Formation, {
                        id: formation.id,
                        imageSrc: formation.imageSrc,
                        title: formation.title,
                        lessons: formation.lessons,
                        duration: formation.duration,
                        slug: formation.slug,
                        isFree: formation.isFree,
                        price: formation.price,
                        showAll: formation.showAll
                    }, formation.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/projects",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: "En savoir plus"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRightShort, {
                            className: "my-auto text-xl"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Formation_FormationsList = (FormationsList);

// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/homeHero.svg
var homeHero = __webpack_require__(3120);
var homeHero_default = /*#__PURE__*/__webpack_require__.n(homeHero);
;// CONCATENATED MODULE: ./components/Home/Hero.js






const Hero = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row justify-between bg-back-pink-500 px-5 py-6 md:pb-20 rounded-xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col lg:absolute md:z-20 md:mt-14",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-bold text-4xl md:text-6xl text-dark-pink-500 w-full lg:w-4/5",
                        children: "Apprendre \xe0 coder autrement"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-md font-semibold my-4 lg:w-2/3",
                        children: "en codant des clones des meilleures startups en vogue ( clone Udemy, leboncoin, fiverr, airbnb, instagram, Uber ….)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-left mt-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "transform transition duration-500 hover:scale-110 text-white font-semibold bg-light-pink-600 hover:bg-dark-pink-500 rounded-sm p-2",
                                    children: "Acc\xe9der maintenant"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "flex flex-row my-auto text-sm font-semibold mx-4",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Voir les Projets"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                            className: "my-auto text-sm md:text-2xl mx-1"
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row my-auto font-semibold mx-4 mt-14 text-xs",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "D\xe9couvrir plus"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowDown, {
                                className: "my-auto text-md md:text-xl"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:mr-72"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((homeHero_default()), {
                    className: "w-1/2 ml-60 object-cover",
                    style: {
                        width: "70%",
                        height: "inherit"
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const Home_Hero = (Hero);

// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/collaborators.svg
var collaborators = __webpack_require__(4243);
var collaborators_default = /*#__PURE__*/__webpack_require__.n(collaborators);
;// CONCATENATED MODULE: ./components/Home/MeilleureCommunaute.js




const MeilleureCommunaute = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row my-14 md:my-20 mx-2 md:mx-5 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-auto md:w-1/2 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "italic text-sm md:text-md",
                        children: "Meilleure communaut\xe9 d’entrepreneurs. Nous sommes l\xe0 pour vous aider. Vous avez essay\xe9 d’apprendre \xe0 coder seul mais vous n’y arrivez pas. Vous avez des id\xe9es de projet dans le domaine du IT mais vous ne savez pas coder alors n’h\xe9sitez prenez une de nos formations vous permettra de maitriser clairement la conception de votre produit en le codant vous-m\xeame ou vous aider \xe0 parler le m\xeame langage que vos d\xe9v\xe9loppeurs."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-light-pink-500 hover:bg-light-pink-600 mx-auto my-2 md:my-5 p-2 text-white font-semibold rounded-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/forum",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "mx-auto md:my-auto ",
                                    children: " Voir Forum "
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-auto md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx((collaborators_default()), {
                    style: {
                        width: "90%",
                        height: "inherit"
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const Home_MeilleureCommunaute = (MeilleureCommunaute);

;// CONCATENATED MODULE: ./components/Home/MVP4StartupText.js


const MVP4StartupText = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row my-14 md:my-20 mx-2 md:mx-5 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-8 md:my-auto mx-auto md:w-1/2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row text-3xl md:text-5xl font-bold",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "text-white text-center bg-light-pink-500 rounded-full h-20 w-20 md:h-32 md:w-32 pt-6 md:pt-10",
                            children: "MVP"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "mt-6 md:mt-10",
                            children: "4STARTUP"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-auto md:w-1/2 flex flex-col",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "italic text-sm md:text-md",
                    children: "Vous apprendre par la pratique la conception de Minimum Viable Product de startup en pratiquant et appliquant le Learn By doing. Apr\xe8s chaque formation vous serez \xe0 mesure d’utiliser le r\xe9sultat pour l’adapter \xe0 votre march\xe9 et lancer la future licorne des startups. Nos Business plan vous donne un aper\xe7u global et fin de tous les aspects financiers techniques et toutes les ressources n\xe9cessaires avec des cas r\xe9elle afin qu’ils soient un guide efficace pour l’impl\xe9mentation directe sur le march\xe9"
                })
            })
        ]
    }));
};
/* harmony default export */ const Home_MVP4StartupText = (MVP4StartupText);

// EXTERNAL MODULE: ./components/Home/NewsLetter.js
var NewsLetter = __webpack_require__(1920);
;// CONCATENATED MODULE: ./components/Home/ProjectALaUne/ProjectALaUne.js



const ProjectALaUne = ()=>{
    const { 0: businessPlans1 , 1: setBusinessPlans  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const fetchBusinessPlans = async ()=>{
        // let URL = "http://localhost:4000/home/index_bsp";
        let URL = "http://localhost:3002/projects/";
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
    // fetchBusinessPlans();
    // console.log("BusinessPlansList", businessPlans);
    }, []);
    // console.log("Project", businessPlans[0]);
    const project = {
        id: 1,
        title: "business-plan-mvp",
        imagesrc: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        details: "Create an account and receive your first 100 points. Submit an article to earn more and unlock your first project. Enjoy learning about new CSS frameworks, animation libraries, and SEO.",
        description: null,
        price: 75,
        slug: "business-plan-mvp",
        utilisateur_id: 2,
        created_at: "2021-10-19T19:14:02.468Z",
        updated_at: "2021-10-19T19:14:02.468Z"
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-2 hover:shadow-xl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: project.imagesrc,
                    alt: "Picture of the training",
                    width: 250,
                    height: 100,
                    className: "h-3/6 rounded-t-xl w-full object-cover"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center text-gray-900 h-3/6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/projects/[id]",
                            as: `/projects/${project.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-md md:text-lg text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline",
                                children: project.title
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
                                        project.details.substring(0, 500),
                                        "...",
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-light-pink-500 mx-auto my-2 md:my-5 p-3 text-white font-semibold rounded-xl transform transition duration-500 hover:scale-110",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/projects/[id]",
                        as: `/projects/${project.id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "mx-auto md:my-auto ",
                                children: " Voir plus de D\xe9tails "
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const ProjectALaUne_ProjectALaUne = (ProjectALaUne);

// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/teamProject.svg
var teamProject = __webpack_require__(1528);
var teamProject_default = /*#__PURE__*/__webpack_require__.n(teamProject);
;// CONCATENATED MODULE: ./components/Home/ProjectALaUne/ProjectALaUneBanner.js




const ProjectALaUneBanner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 md:my-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2",
                children: "Project \xe0 la Une!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col md:flex-row justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:w-2/4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectALaUne_ProjectALaUne, {
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((teamProject_default()), {
                            style: {
                                width: "90%",
                                height: "inherit"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
            })
        ]
    }));
};
/* harmony default export */ const ProjectALaUne_ProjectALaUneBanner = (ProjectALaUneBanner);

;// CONCATENATED MODULE: ./components/Home/Projects/Project.js







const Project = ({ id , imageSrc ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40gmonne%2Fsimple-app-layout-with-office-ui-fabric-react-2eac6361e1b4&psig=AOvVaw3hfbrCeQcwX1QNhDk5LqQ1&ust=1634299218822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjS9prtyfMCFQAAAAAdAAAAABAD" , title , slug , lessons , duration , notes =4 , technologies , isFree , price , showAll ,  })=>{
    let API = "http://localhost:3002/projects/"; //Image domain: to be set
    const myLoader = ({ src  })=>{
        return `${API}${src}`;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 sm:mx-2 md:mx-1 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center text-gray-900 h-1/2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/projects/[id]",
                        as: `/projects/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-xl md:text-2xl text-center font-bold mx-auto my-2 hover:text-dark-pink-500",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-center md:my-auto text-xs md:text-xs my-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row mx-2",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillCollectionPlayFill, {
                                        className: "text-md md:text-xl my-auto"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-xs my-auto mx-1",
                                        children: [
                                            " ",
                                            lessons.length,
                                            " le\xe7ons "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row mx-2",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineFieldTime, {
                                        className: "text-md md:text-xl my-auto"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-xs my-auto",
                                        children: [
                                            " ",
                                            duration,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-2 mx-2 md:mx-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "text-xs text-center",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-semibold",
                                    children: " Technologies:"
                                }),
                                " ",
                                technologies
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-2 mx-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "text-xs md:text-sm font-semibold",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "",
                                    children: " Notes: "
                                }),
                                " ",
                                notes,
                                " /10"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: imageSrc,
                alt: "Picture of the training",
                width: 250,
                height: 100,
                className: "h-1/2 w-full object-cover"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between bg-dark-pink-500 text-white px-3 py-2 md:px-5 rounded-b-xl h-1/6 w-full",
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
                        href: "/projects/[id]",
                        as: `/projects/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:p-2 my-auto font-semibold text-xl cursor-pointer bg-white hover:bg-gray-100 text-gray-800 rounded",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                className: "mx-auto md:my-auto ",
                                children: [
                                    " ",
                                    isFree ? "Ouvrir" : "Acheter",
                                    " "
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Projects_Project = (Project);

;// CONCATENATED MODULE: ./components/Home/Projects/ProjectsList.js





const ProjectsList = ({ projects  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2",
                children: "Projects Premium"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3",
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(Projects_Project, {
                        id: project.id,
                        imageSrc: project.imageSrc,
                        title: project.title,
                        slug: project.slug,
                        lessons: project.lessons,
                        notes: project.note,
                        duration: project.duration,
                        price: project.price,
                        technologies: project.technologies,
                        isFree: project.isFree,
                        showAll: project.showAll
                    }, project.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/projects",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: "En savoir plus"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRightShort, {
                            className: "my-auto text-xl"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Projects_ProjectsList = (ProjectsList);

// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/index.js














function Home({ projects , formations , businessplans  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Accueil | MVP4Startup"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Home_Hero, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Formation_FormationsList, {
                        formations: formations
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Projects_ProjectsList, {
                        projects: projects
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BusinessPlan_BusinessPlansList, {
                        businessPlans: businessplans
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectALaUne_ProjectALaUneBanner, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Home_MeilleureCommunaute, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Home_BlogAnnonce, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Home_MVP4StartupText, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NewsLetter/* default */.Z, {
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    try {
        const res1 = await fetch(`${config/* server */.f}/projects`);
        const projects = await res1.json();
        const formations = await fetch(`${config/* server */.f}/formations`).then((res)=>res.json()
        );
        const businessplans = await fetch(`${config/* server */.f}/businessplans`).then((res)=>res.json()
        );
        return {
            props: {
                projects,
                formations,
                businessplans
            }
        };
    } catch (error) {
        console.error(error.message);
    }
    return {
        props: {
            projects: [],
            formations: [],
            businessplans: []
        }
    };
// const projects = await fetch(`${server}/api/v1/projects`).then((res) =>
//   res.json()
// );
// const formations = await fetch(`${server}/api/v1/formations`).then((res) =>
//   res.json()
// );
// const businessplans = await fetch(`${server}/api/v1/businessplans`).then(
//   (res) => res.json()
// );
// return {
//   props: {
//     projects,
//     formations,
//     businessplans,
//   },
// };
}


/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function BlogCollabImage (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M695.89407,582.26073l-191.78809,0a2.53308,2.53308,0,0,1-2.53018-2.53018l0-211.0175a2.53308,2.53308,0,0,1,2.53018-2.53019l191.78809,0a2.53307,2.53307,0,0,1,2.53018,2.53018l0,211.0175A2.53309,2.53309,0,0,1,695.89407,582.26073Z","transform":"translate(-164.41411 -53.0866)","fill":"#fff","key":0}),React.createElement("path",{"d":"M695.89407,582.26073l-191.78809,0a2.53308,2.53308,0,0,1-2.53018-2.53018l0-211.0175a2.53308,2.53308,0,0,1,2.53018-2.53019l191.78809,0a2.53307,2.53307,0,0,1,2.53018,2.53018l0,211.0175A2.53309,2.53309,0,0,1,695.89407,582.26073ZM504.10593,367.195a1.51978,1.51978,0,0,0-1.51811,1.51812l0,211.01749a1.51978,1.51978,0,0,0,1.51811,1.51812l191.78809,0a1.51977,1.51977,0,0,0,1.51811-1.51811l0-211.0175a1.51977,1.51977,0,0,0-1.51811-1.51811Z","transform":"translate(-164.41411 -53.0866)","fill":"#3f3d56","key":1}),React.createElement("path",{"d":"M586.843,446.64279l-47.5675,0a2.53308,2.53308,0,0,1-2.53018-2.53018l0-47.5675a2.53308,2.53308,0,0,1,2.53018-2.53018l47.5675,0a2.53309,2.53309,0,0,1,2.53018,2.53019l0,47.56749A2.53308,2.53308,0,0,1,586.843,446.64279ZM539.27552,395.027a1.51978,1.51978,0,0,0-1.51811,1.51811l0,47.5675a1.51978,1.51978,0,0,0,1.51811,1.51811l47.5675,0a1.51978,1.51978,0,0,0,1.51811-1.51812l0-47.56749A1.51977,1.51977,0,0,0,586.843,395.027Z","transform":"translate(-164.41411 -53.0866)","fill":"#f2f2f2","key":2}),React.createElement("path",{"d":"M573.18,452.46222l-47.5675,0a2.27974,2.27974,0,0,1-2.27717-2.27717l0-47.56749a2.27974,2.27974,0,0,1,2.27717-2.27717l47.56749,0a2.27974,2.27974,0,0,1,2.27717,2.27717l0,47.56749A2.27973,2.27973,0,0,1,573.18,452.46222Z","transform":"translate(-164.41411 -53.0866)","fill":"#820552","key":3}),React.createElement("path",{"d":"M674.38746,475.73991l-148.77492,0a2.27717,2.27717,0,1,1,0-4.55433l148.77492,0a2.27717,2.27717,0,0,1,0,4.55434Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":4}),React.createElement("path",{"d":"M638.45883,491.42707l-112.84629,0a2.27717,2.27717,0,1,1,0-4.55433l112.84629,0a2.27717,2.27717,0,0,1,0,4.55434Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":5}),React.createElement("path",{"d":"M673.88141,418.05167l-65.78483,0a2.27717,2.27717,0,0,1,0-4.55434l65.78483,0a2.27717,2.27717,0,1,1,0,4.55433Z","transform":"translate(-164.41411 -53.0866)","fill":"#820552","key":6}),React.createElement("path",{"d":"M657.46375,433.73883l-49.36716,0a2.27717,2.27717,0,0,1,0-4.55434l49.36717,0a2.27717,2.27717,0,0,1,0,4.55434Z","transform":"translate(-164.41411 -53.0866)","fill":"#820552","key":7}),React.createElement("path",{"d":"M674.38747,507.11421l-148.77493,0a2.27717,2.27717,0,0,1,0-4.55434l148.77493,0a2.27717,2.27717,0,1,1,0,4.55433Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":8}),React.createElement("path",{"d":"M638.45884,522.80137l-112.84629,0a2.27717,2.27717,0,0,1,0-4.55434l112.84628,0a2.27717,2.27717,0,1,1,0,4.55433Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":9}),React.createElement("path",{"d":"M674.38748,538.48852l-148.77493,0a2.27717,2.27717,0,1,1,0-4.55433l148.77493,0a2.27717,2.27717,0,0,1,0,4.55434Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":10}),React.createElement("path",{"d":"M674.38748,554.17567l-148.77493,0a2.27716,2.27716,0,0,1,0-4.55433l148.77493,0a2.27717,2.27717,0,0,1,0,4.55434Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":11}),React.createElement("path",{"d":"M461.58589,675.73821a147.99378,147.99378,0,0,1-93.82,137.75c-2.17.87-4.38,1.68-6.6,2.43q-3.72006,1.275-7.52,2.34-2.64.73507-5.33,1.38a148.92061,148.92061,0,0,1-81.61-3.48c-2.07-.69-4.12-1.43-6.15-2.2-2.73-1.05-5.43-2.18-8.08-3.39-.2-.07995-.39-.17-.58-.25994-1.04-.48005-2.05-.96-3.08-1.47h-.01q-2.115-1.02-4.18994-2.12-4.77007-2.52-9.33-5.37-2.37-1.47006-4.67-3.05a147.93882,147.93882,0,0,1,53-267.52q3.915-.81,7.91-1.4c1.67-.26,3.36-.48,5.05-.67,1.21-.14,2.42-.27,3.65-.37h.01q4.935-.45,9.96-.56c.46-.01.92-.02,1.39-.03.26,0,.52-.01.78,0h.01c.4-.01.8-.01,1.21-.01,1.68,0,3.36.03,5.03.09q5.52.18,10.92.76c2.08.22,4.13.49,6.18.79.23.04.47.07.7.11.68.11,1.37.22,2.05.34,1.44.23,2.87.5,4.3.79,1.34.27,2.67.55,4,.85a144.12746,144.12746,0,0,1,14.54,4.13,148.40967,148.40967,0,0,1,77.94,61.93q.765,1.215,1.5,2.46c.38.62.74,1.24,1.1,1.87q.195.31494.36.63c.08.12.14.24.21.36.66,1.15,1.3,2.32,1.92,3.49A147.344,147.344,0,0,1,461.58589,675.73821Z","transform":"translate(-164.41411 -53.0866)","fill":"#fff","key":12}),React.createElement("path",{"d":"M313.60157,824.74295A149.81338,149.81338,0,0,1,266.391,817.1077c-1.96325-.65478-3.98742-1.37891-6.18969-2.21435-2.77833-1.06836-5.51587-2.2168-8.14075-3.41553-.17481-.06885-.38233-.166-.58985-.26416-.99536-.45947-1.96862-.92139-2.95837-1.41016l-.14062-.06445c-1.40418-.67676-2.82532-1.396-4.22388-2.13672-3.18518-1.68311-6.34546-3.502-9.392-5.40576-1.58533-.9834-3.16968-2.01856-4.7063-3.07422a148.939,148.939,0,0,1,53.36511-269.32373c2.61817-.5415,5.29847-1.01563,7.96521-1.40967,1.57959-.2456,3.29285-.47314,5.08435-.67432,1.218-.14111,2.43921-.272,3.68067-.373,3.29529-.29932,6.66943-.48926,10.02905-.56348l1.65943-.03174c.19006-.00293.38012-.00439.57019.00244.356-.01025.764-.01025,1.18237-.01025,1.69189,0,3.39636.03027,5.066.09033,3.68835.12061,7.38733.37793,10.99084.76514,1.90808.20166,3.94239.46191,6.2179.79492l.96142.15234c.60462.09717,1.21509.19581,1.81775.30225,1.29676.207,2.67615.46045,4.32483.79492,1.34632.27149,2.68384.55274,4.02149.85449a145.76106,145.76106,0,0,1,14.64294,4.15918,149.83,149.83,0,0,1,78.46546,62.34766q.76885,1.22022,1.51257,2.48047c.37671.61377.74182,1.24268,1.10693,1.88184.11719.188.24036.40283.355.61914.05591.08789.10535.17529.15418.26318l.05676.10059c.62842,1.09521,1.26184,2.24609,1.93958,3.5249A149.04437,149.04437,0,0,1,368.132,814.41874c-2.1178.84912-4.356,1.67334-6.646,2.44677-2.48.8501-5.02832,1.64307-7.57019,2.35547-1.76025.49024-3.5653.958-5.36657,1.39014A149.98972,149.98972,0,0,1,313.60157,824.74295ZM249.0348,807.83817h.00525l.21985.104c1.02148.50586,2.02344.98194,3.05505,1.458.18177.08594.35266.16748.53272.23975,2.63147,1.20019,5.33105,2.333,8.06714,3.38476,2.17248.82422,4.17175,1.53955,6.10754,2.18506a147.78957,147.78957,0,0,0,81.06055,3.45606c1.77771-.42627,3.5592-.8877,5.29467-1.3711,2.50391-.70166,5.01575-1.4834,7.46412-2.32226,2.25927-.76367,4.46228-1.57471,6.552-2.4126a146.16143,146.16143,0,0,0,93.19214-136.82178v-.00146A146.85209,146.85209,0,0,0,443.453,606.8079c-.6676-1.26026-1.2904-2.39209-1.90441-3.46143l-.07386-.13135c-.03161-.05664-.06225-.11425-.10022-.1709l-.05444-.09179q-.14868-.28346-.32434-.56787c-.3728-.65088-.72766-1.26221-1.10217-1.873-.49378-.83643-.98877-1.64844-1.49366-2.44971a147.82666,147.82666,0,0,0-77.41748-61.51709,143.54627,143.54627,0,0,0-14.43884-4.10107c-1.32031-.29834-2.64282-.57666-3.9751-.84473-1.62207-.3291-2.97546-.57763-4.26025-.7832-.60913-.10742-1.20972-.2041-1.80457-.30029l-.95923-.15186c-2.22216-.32471-4.23071-.58154-6.11376-.78076-3.55591-.38233-7.205-.63623-10.84729-.75488-1.64917-.05957-3.32947-.08936-4.99744-.08936-.40686.00147-.7937,0-1.18555.00928-.22851-.00586-.38537-.00391-.54187-.002l-1.64136.03223c-3.31311.07276-6.641.25977-9.8905.55615l-.10071.00391c-1.13745.0957-2.33618.22461-3.535.36328-1.767.19873-3.45178.42236-5.01123.665-2.63672.38965-5.27905.85693-7.86133,1.39111a146.93877,146.93877,0,0,0-52.64282,265.71192c1.5177,1.043,3.07568,2.06054,4.63745,3.02929,3.00854,1.87989,6.12646,3.67481,9.27014,5.33545C246.39222,806.52811,247.72023,807.20145,249.0348,807.83817Z","transform":"translate(-164.41411 -53.0866)","fill":"#cbcbcb","key":13}),React.createElement("path",{"d":"M440.23225,643.60145a18.17163,18.17163,0,0,1-27.83783,1.20739l-39.04708,14.13061L358.97281,637.305l55.4223-19.18069a18.2701,18.2701,0,0,1,25.83714,25.47711Z","transform":"translate(-164.41411 -53.0866)","fill":"#9f616a","key":14}),React.createElement("polygon",{"points":"153.806 592.529 234.25 565.939 247.806 595.529 172.806 618.529 153.806 592.529","fill":"#ccc","key":15}),React.createElement("path",{"d":"M348.3159,819.63817a148.92071,148.92071,0,0,1-81.61-3.48l1.8-17.02,1.67-15.9,25.05-38.73,8.03-12.41,33.09,12.03,3.37,21.25,5.37,33.89Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":16}),React.createElement("path",{"d":"M367.76588,813.48821c-2.17.87-4.38,1.68-6.6,2.43q-3.72006,1.275-7.52,2.34-2.64.73507-5.33,1.38a148.92061,148.92061,0,0,1-81.61-3.48c-2.07-.69-4.12-1.43-6.15-2.2a115.18494,115.18494,0,0,1-.54,17.75,209.8182,209.8182,0,0,1-7.54-21.14c-.15-.48-.29-.96-.43-1.43994-.7-2.42-1.32-4.73-1.88-6.9-.64-2.51-1.19-4.84-1.65-6.97-1.83-8.36-2.41-13.53-2.41-13.53l19.55-40.6,3.91.44995,1.62.18,9.8,1.12,14.24,1.63,23.07,2.63,21.42,18.24,19.19,16.35s1.6,5.44,4.11,14.45C364.37589,801.01818,365.98588,806.88817,367.76588,813.48821Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":17}),React.createElement("circle",{"cx":"141.37236","cy":"455.74184","r":"34.59063","fill":"#9f616a","key":18}),React.createElement("path",{"d":"M329.86482,581.69768S321.55128,556,302,556c-4.88782,0-12.77558.4051-19.188,4.58949-25.81559,16.84586-41.52066,45.48033-42.72388,76.28259l-6.011,153.88126s33.08668,12.0315,45.11822,7.51972,24.063-34.59064,24.063-34.59064-3.00787,40.60639,9.02364,39.10248,57.14973-4.51184,58.65367-10.52759-23.02365-135.36249-23.02365-135.36249Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":19}),React.createElement("path",{"d":"M288.97048,518.96965c3.10315-.18516,6.13318.86354,9.21479,1.27266,11.02521,1.46376,22.49477-6.53667,24.92915-17.38893a13.34245,13.34245,0,0,1,1.275-4.15438c1.69684-2.7704,5.56127-3.29857,8.74692-2.66152s6.20538,2.128,9.44965,2.29824c5.0092.26285,9.81827-2.821,12.4879-7.06775s3.42545-9.47228,3.06507-14.47543l-2.40137,2.52035a12.19712,12.19712,0,0,1-1.08734-6.62906,7.69249,7.69249,0,0,0-7.28634,1.86444c-2.11744.22535-.51934-3.92751-2.09246-5.36269a3.63926,3.63926,0,0,0-2.56027-.479c-4.50463.04342-8.14865-3.402-11.69839-6.17564a49.71109,49.71109,0,0,0-20.99555-9.5769c-5.08664-.99214-10.49557-1.15155-15.3195.74258-3.96165,1.55555-7.2776,4.3887-10.3455,7.33868-7.55234,7.26208-14.24,15.79477-17.382,25.79a43.41522,43.41522,0,0,0-.20792,25.17486c1.266,4.273,5.08151,18.90689,10.66729,19.24769C284.44827,531.67605,280.23433,519.4909,288.97048,518.96965Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":20}),React.createElement("polygon",{"points":"139.162 574.153 103.741 626.104 92.413 746.774 139.162 574.153","opacity":"0.1","style":{"isolation":"isolate"},"key":21}),React.createElement("ellipse",{"cx":"452.89133","cy":"594.90795","rx":"2.6424","ry":"0.99091","transform":"translate(-458.84483 564.96813) rotate(-54.49277)","fill":"#3f3d56","key":22}),React.createElement("path",{"d":"M406.46151,651.4522h0a4.62419,4.62419,0,0,1-1.07851-6.45h0l40.28636-56.46421a4.62418,4.62418,0,0,1,6.45-1.07854h0l-45.65789,63.9928Z","transform":"translate(-164.41411 -53.0866)","fill":"#820552","key":23}),React.createElement("path",{"d":"M408.11562,657.09573l-2.331-1.66311a3.7425,3.7425,0,0,1-.87291-5.22023l45.8693-64.28921a3.16,3.16,0,0,1,4.40763-.73706l0,0,2.80521,2.00147h0L408.1156,657.09572h0Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":24}),React.createElement("rect",{"x":"445.75653","y":"594.28817","width":"5.28479","height":"1.3212","transform":"translate(-460.76125 561.32817) rotate(-54.49277)","fill":"#d0cde1","key":25}),React.createElement("rect",{"x":"441.53608","y":"600.20346","width":"5.28479","height":"1.3212","transform":"translate(-467.34574 560.3722) rotate(-54.49277)","fill":"#d0cde1","key":26}),React.createElement("path",{"d":"M264.86791,839.22207a18.17162,18.17162,0,0,0-6.8889-26.999l2.24361-41.46462-24.8654-7.50915-2.346,58.60057a18.2701,18.2701,0,0,0,31.85667,17.3722Z","transform":"translate(-164.41411 -53.0866)","fill":"#9f616a","key":27}),React.createElement("path",{"d":"M264.73548,805.11551H228.76283l-9.89819-110.80468.03393-.10059,33.66919-98.88281a26.49019,26.49019,0,1,1,48.2356,21.39844l-39.61768,71.34667Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":28}),React.createElement("path",{"d":"M1034.58589,324.58179a148.13535,148.13535,0,1,1-151.39-147.96c.46-.01.92-.02,1.39-.03.66-.01,1.33-.01,2-.01,1.68,0,3.36.03,5.03.09q5.52.18,10.92.76c2.08.22,4.13.49,6.18.79.23.04.47.07.7.11a146.19769,146.19769,0,0,1,24.89,6.11A148.07727,148.07727,0,0,1,1034.58589,324.58179Z","transform":"translate(-164.41411 -53.0866)","fill":"#fff","key":29}),React.createElement("path",{"d":"M886.44813,473.85672c-82.17139.00391-149.05542-66.80615-149.13281-148.99462A149.136,149.136,0,0,1,883.174,175.62186l1.39014-.03027c2.35547-.03369,4.75244-.00342,7.08764.08056,3.68433.12061,7.38331.37793,10.991.76563,1.90991.20166,3.94458.46191,6.21826.79492l.72632.11377a148.83466,148.83466,0,0,1,125.99854,147.23535v-.001c.07763,82.23339-66.76123,149.19824-148.99463,149.27587Zm.12207-296.2749c-.65991,0-1.31982,0-1.96948.00977l-1.38257.03027c-79.42334,1.74512-143.97778,67.79639-143.90283,147.23828.07641,81.08106,66.07007,146.99268,147.13281,146.99658h.14111c81.13062-.07666,147.073-66.14355,146.99659-147.27392v-.001A146.83525,146.83525,0,0,0,909.26356,179.3201l-.719-.11279c-2.22046-.32519-4.229-.582-6.11377-.78076-3.56031-.38281-7.20923-.63672-10.84766-.75537-1.64892-.05957-3.3291-.08936-4.99731-.08936Z","transform":"translate(-164.41411 -53.0866)","fill":"#cbcbcb","key":30}),React.createElement("ellipse",{"cx":"771.10774","cy":"331.15727","rx":"0.99091","ry":"2.64239","transform":"translate(-85.62867 752.37239) rotate(-57.656)","fill":"#3f3d56","key":31}),React.createElement("path",{"d":"M769.01443,323.96733h0a4.62418,4.62418,0,0,1,6.3807-1.43283h0l58.60127,37.10913a4.62418,4.62418,0,0,1,1.43279,6.38071h0l-66.41476-42.057Z","transform":"translate(-164.41411 -53.0866)","fill":"#820552","key":32}),React.createElement("path",{"d":"M763.47094,325.93028l1.84361-2.91134a3.16,3.16,0,0,1,4.36025-.97915l0,0,66.72236,42.25188a3.74249,3.74249,0,0,1,1.15964,5.1641l-1.532,2.4192h0l-72.55392-45.94471Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":33}),React.createElement("rect",{"x":"774.6234","y":"326.85891","width":"1.32123","height":"5.28479","transform":"translate(-82.28766 755.1307) rotate(-57.656)","fill":"#d0cde1","key":34}),React.createElement("rect",{"x":"780.76257","y":"330.74657","width":"1.32123","height":"5.28479","transform":"translate(-82.71744 762.12514) rotate(-57.656)","fill":"#d0cde1","key":35}),React.createElement("circle",{"cx":"722.56704","cy":"97.07869","r":"41.65187","fill":"#ffb8b8","key":36}),React.createElement("path",{"d":"M926.64588,467.10175a148.69439,148.69439,0,0,1-101.75-7.95l3.2-85.5.24-6.65.09-2.16.11-3.18.08-2.03s.13-.01.38-.02c.68005-.05,2.25-.16,4.5-.29,2.61-.15,6.12-.34,10.21-.51.97-.04,1.97-.08,3-.13,21.54-.8,55.18-.97,59.63,5.52l.56,3.82.9,6.17,1.84,12.61S930.55586,428.4018,926.64588,467.10175Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":37}),React.createElement("path",{"d":"M937.2201,251.4591,929.01637,327.239,913.39185,361.7999l-5.79058,12.81561-83.81171-1.0159,8.63513-58.41421C820.2339,283.69251,849.187,270.99378,849.187,270.99378L879.2201,209.4591s8-4,28.8891-5.00675c19.41939-.93591,4.1109,2.00675,4.1109,2.00675C937.61757,203.9193,937.2201,251.4591,937.2201,251.4591Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":38}),React.createElement("path",{"d":"M912.01637,331.239l-15.62452,34.56088c-5.01849-9.3869-8.83825-20.01828-8.83825-26.29654,0-17.27029,17.27026-8.1272,17.27026-8.1272s-13.96863-76.44642-13.96863-99.30417C890.85523,216.88933,903.51325,284.26886,912.01637,331.239Z","transform":"translate(-164.41411 -53.0866)","opacity":"0.2","style":{"isolation":"isolate"},"key":39}),React.createElement("path",{"d":"M934.98475,124.78948a46.68432,46.68432,0,0,0-12.25195-17.25189,9.10839,9.10839,0,0,0,5.12353-4.31677c1.60328-3.1734.75391-7.153-1.42578-9.99329a18.1924,18.1924,0,0,0-7.46313-5.37067,14.751,14.751,0,0,0,6.79565,1.30732c2.83277-.29462,5.665-2.51795,5.49683-5.27643-.16016-2.62793-2.74536-4.40491-5.06543-5.77631q-2.2577-1.33448-4.51538-2.66882a23.51294,23.51294,0,0,0,1.17578-2.66828,18.50912,18.50912,0,0,0-4.00366-19.68774c4.92895,5.01764,3.67016,12.78314-1.19947,19.085-.157.20307-.32568.40112-.48876.60156q-1.44727-.85546-2.89454-1.71087c-2.40649-1.42237-4.9082-2.878-7.70312-3.21344s-5.97925.771-7.12036,3.26434c-1.22144,2.66889.16748,6.07477-1.42432,8.5528-1.39282,2.16833-4.4331,2.63-7.0686,2.52734-2.63526-.10272-5.437-.519-7.78174.64661-3.25952,1.62036-4.3291,6.0025-2.8794,9.27057a9.85028,9.85028,0,0,0,2.80567,3.56909c-6.97632.97406-13.84717,3.04559-20.59912,5.15234-7.96167,2.48432-16.07178,5.12305-22.72559,10.15155-6.654,5.0285-11.69507,12.96619-11.061,21.28241s8.89575,21.41425,17.12939,20.08472l1.25342-3.92432a26.47649,26.47649,0,0,1,30.27832,5.3833c.095-5.2359,8.06445-6.97546,12.03564-3.56177s4.73731,9.18525,5.04517,14.413c.30786,5.22772.59961,10.9198,4.04321,14.865,3.30518,3.7865,8.93531,4.96051,13.833,3.83252,4.898-1.12805,9.13184-4.23505,12.63916-7.835C937.69276,162.46294,941.7909,141.706,934.98475,124.78948Z","transform":"translate(-164.41411 -53.0866)","fill":"#2f2e41","key":40}),React.createElement("path",{"d":"M802.13413,368.59609a18.1716,18.1716,0,0,0,26.999-6.88889l113.46462,2.2436,7.50916-24.86539-130.60057-2.346a18.2701,18.2701,0,0,0-17.3722,31.85667Z","transform":"translate(-164.41411 -53.0866)","fill":"#ffb8b8","key":41}),React.createElement("path",{"d":"M912.44306,202.35691s-26.41339,2.0318-26.41339,24.88954,23.87366,104.12968,23.87366,104.12968-17.27026-9.14309-17.27026,8.1272,28.95312,67.55731,32.00085,34.03262c0,0,43.68365,21.3339,41.144-18.79412s-29.969-124.95563-29.969-124.95563S932.76106,200.83306,912.44306,202.35691Z","transform":"translate(-164.41411 -53.0866)","fill":"#ccc","key":42})]);
}

BlogCollabImage.defaultProps = {"id":"ad54afe5-9512-4a17-9648-a0d962bcfa3f","data-name":"Layer 1","width":"871.17179","height":"793.8268","viewBox":"0 0 871.17179 793.8268"};

module.exports = BlogCollabImage;

BlogCollabImage.default = BlogCollabImage;


/***/ }),

/***/ 4243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function Collaborators (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M692.37948,157.22038c71.22-38.107,161.61234-18.12946,209.53632,49.43939l-1.63132,1.15738c-47.3321-66.73477-136.61915-86.46077-206.96283-48.83259a161.36236,161.36236,0,0,0-17.27247,10.69161C603.7117,220.98256,586.60158,321.57356,637.908,393.911l-1.63132,1.15739c-51.94418-73.2367-34.62179-175.07982,38.61514-227.02357A163.74263,163.74263,0,0,1,692.37948,157.22038Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":0}),React.createElement("path",{"d":"M1069.67463,320.1036,835.42467,301.88a13.77366,13.77366,0,0,1-12.64949-14.78375l10.15509-113.81345a13.77366,13.77366,0,0,1,14.78367-12.64957l234.25,18.22364a13.77368,13.77368,0,0,1,12.64956,14.78376L1084.45839,307.454A13.77368,13.77368,0,0,1,1069.67463,320.1036Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":1}),React.createElement("path",{"d":"M1014.34182,294.39144q-2.66748,0-5.35352-.2085L857.60061,282.4056a23.11885,23.11885,0,0,1-21.25684-24.84278l3.45215-44.375A23.14622,23.14622,0,0,1,864.63967,191.93l195.76221,15.22949a23.147,23.147,0,0,1,21.25732,24.84327,67.63906,67.63906,0,0,1-67.31738,62.38867Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":2}),React.createElement("path",{"d":"M1055.718,242.43625l-191.90647-14.9295a3.05369,3.05369,0,1,1,.47369-6.089l191.90648,14.9295a3.05369,3.05369,0,1,1-.4737,6.089Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":3}),React.createElement("path",{"d":"M976.03336,248.34024l-113.15779-8.80319a3.05384,3.05384,0,0,1,.47372-6.08928L976.50708,242.251a3.05384,3.05384,0,1,1-.47372,6.08928Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":4}),React.createElement("path",{"d":"M1000.96041,262.38258,861.93966,251.56736a3.05384,3.05384,0,1,1,.47372-6.08928l139.02075,10.81522a3.05384,3.05384,0,0,1-.47372,6.08928Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":5}),React.createElement("path",{"d":"M1053.99956,474.60373l-234.25-18.22364a13.77365,13.77365,0,0,1-12.64948-14.78375l10.15508-113.81345a13.77365,13.77365,0,0,1,14.78368-12.64956l234.25,18.22364a13.77367,13.77367,0,0,1,12.64955,14.78375l-10.15508,113.81345A13.77367,13.77367,0,0,1,1053.99956,474.60373Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":6}),React.createElement("path",{"d":"M998.60647,448.889q-2.62939,0-5.293-.20606L841.9258,436.9056a23.11892,23.11892,0,0,1-21.25732-24.84278l3.45215-44.37451a23.12057,23.12057,0,0,1,24.84423-21.25781L1044.72658,361.66a23.11975,23.11975,0,0,1,21.25733,24.84326A67.72193,67.72193,0,0,1,998.60647,448.889Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":7}),React.createElement("path",{"d":"M1040.04287,396.93638,848.1364,382.00688a3.05369,3.05369,0,1,1,.4737-6.089l191.90647,14.9295a3.05369,3.05369,0,1,1-.4737,6.089Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":8}),React.createElement("path",{"d":"M960.35829,402.84038,847.2005,394.03719a3.05384,3.05384,0,1,1,.47372-6.08928L960.832,396.7511a3.05384,3.05384,0,0,1-.47372,6.08928Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":9}),React.createElement("path",{"d":"M985.28534,416.88272,846.26459,406.0675a3.05384,3.05384,0,0,1,.47372-6.08929l139.02075,10.81522a3.05384,3.05384,0,0,1-.47372,6.08929Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":10}),React.createElement("path",{"d":"M458.135,415.13921a56.086,56.086,0,1,1,102.62468-45.28514l-1.83021.80783a54.08546,54.08546,0,1,0-98.96426,43.66948Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":11}),React.createElement("path",{"d":"M1039.4907,727.92063c22.9003-10.85156,39.95754-32.68422,37.29669-56.6777-20.5446,16.636-48.51539,25.92583-77.39066,25.70351-11.24655-.08653-23.84207-1.23067-32.01476,5.08006-5.08533,3.92661-7.3792,10.16173-7.66908,16.37586-.28975,6.21447,1.21678,12.50388,2.71475,18.71122l-.45553,1.47087C988.86,740.29618,1016.59039,738.7722,1039.4907,727.92063Z","transform":"translate(-105.34461 -138.08211)","fill":"#f2f2f2","key":12}),React.createElement("path",{"d":"M1076.22353,671.18341c-8.857,17.2822-24.21281,31.68626-43.29674,40.11746a45.81232,45.81232,0,0,1-13.20587,3.88,29.85552,29.85552,0,0,1-13.73648-1.79559c-4.14755-1.48827-8.236-3.42649-12.63471-4.01593a16.17055,16.17055,0,0,0-12.21916,3.29446c-4.06455,3.16085-6.489,7.53482-8.686,11.89824-2.43933,4.84475-4.88353,9.9179-9.66006,13.21959-.57875.40006.22724,1.23208.80507.83268,8.31034-5.74439,9.50957-16.13182,16.113-23.08921a15.53855,15.53855,0,0,1,12.49156-5.22171c4.489.331,8.70663,2.3266,12.89446,3.86493a32.04047,32.04047,0,0,0,13.39912,2.19848,42.98153,42.98153,0,0,0,13.36683-3.39871,92.24419,92.24419,0,0,0,25.29083-15.73654,86.23782,86.23782,0,0,0,20.21213-25.65829c.30594-.597-.83018-.98291-1.13412-.38984Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":13}),React.createElement("path",{"d":"M1039.31957,708.86534a17.93179,17.93179,0,0,0,20.16055,5.12463c.66651-.28043.12223-1.25709-.54515-.97629a16.60083,16.60083,0,0,1-18.74573-4.80044c-.46837-.56966-1.33538.08571-.86967.65216Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":14}),React.createElement("path",{"d":"M1007.99856,714.37964a24.11262,24.11262,0,0,1,10.37026-16.81256c.577-.402-.22883-1.23415-.80508-.83268a25.07152,25.07152,0,0,0-10.7494,17.51756c-.08193.66961,1.10276.79365,1.18424.12763Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":15}),React.createElement("path",{"d":"M1064.0962,689.31041a8.15249,8.15249,0,0,1-3.14325-7.28685c.09151-.66765-1.09333-.791-1.18424-.12762a9.12727,9.12727,0,0,0,3.45783,8.06664.67753.67753,0,0,0,.83738.09028.48571.48571,0,0,0,.03228-.74239Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":16}),React.createElement("path",{"d":"M1001.2322,620.51286c-.07061.41446-.14123.82893-.22074,1.24687a90.55831,90.55831,0,0,1-4.47182,16.28874c-.14668.4106-.30248.82425-.46248,1.22926a98.17129,98.17129,0,0,1-22.51731,33.98768A103.18621,103.18621,0,0,1,960.68211,684.036c-6.38133,4.51567-13.74629,8.92742-17.78464,15.01126a16.1598,16.1598,0,0,0-1.14751,1.96529l18.194,36.81186c.08684.0686.16484.14051.25186.20949l.6536,1.494c.25292-.15279.51109-.31635.764-.46915.14717-.088.29032-.18426.43749-.27232.09683-.06131.1935-.123.28531-.17307.03232-.02027.06444-.041.08773-.05827.09173-.05006.17024-.10572.25292-.15279q2.16942-1.36595,4.3223-2.76552c.00911-.00305.00911-.00305.01416-.01425,10.91315-7.13595,21.17708-15.1996,29.60986-24.50316.2536-.28.51653-.56259.7618-.85943a91.84625,91.84625,0,0,0,10.02887-13.49087,78.98494,78.98494,0,0,0,4.26212-8.07457,65.1906,65.1906,0,0,0,5.67234-22.69122c1.02761-15.71224-3.63329-31.95906-15.22091-44.53654C1001.83074,621.14524,1001.538,620.83144,1001.2322,620.51286Z","transform":"translate(-105.34461 -138.08211)","fill":"#f2f2f2","key":17}),React.createElement("path",{"d":"M1000.76688,620.76382c5.06783,19.43377,3.32168,39.9302-5.25889,57.37036a36.00411,36.00411,0,0,1-7.26062,10.41074,24.3021,24.3021,0,0,1-11.4999,5.88283c-4.11271.97374-8.4857,1.534-12.178,3.40551a12.838,12.838,0,0,0-6.91826,9.38211c-.9034,4.8723.24234,9.88941,1.55126,14.775,1.45329,5.42445,3.05755,11.04523,1.71645,16.42093-.16249.65134,1.00417.92258,1.16643.27221,2.33328-9.35281-3.80049-18.80987-3.56624-28.27134.10931-4.4149,1.71789-8.71712,5.81755-11.16368,3.58494-2.13945,8.09355-2.72068,12.27028-3.67364a26.33537,26.33537,0,0,0,11.52-5.35928,33.61457,33.61457,0,0,0,7.707-10.08933,78.61676,78.61676,0,0,0,8.2824-26.98289,86.81522,86.81522,0,0,0-2.23638-32.66037c-.17505-.67129-1.28687-.38614-1.113.28081Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":18}),React.createElement("path",{"d":"M998.64545,672.62178c7.48464,2.3447,15.42479-.46045,18.56307-6.52266.30917-.59721-.75944-1.13218-1.069-.53415-2.94,5.67916-10.28788,8.2266-17.2844,6.03476-.73629-.23064-.94174.79267-.20965,1.022Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":19}),React.createElement("path",{"d":"M978.92853,694.18533a25.60135,25.60135,0,0,1-3.6169-19.85134c.15986-.652-1.00678-.92345-1.16642-.27221a26.64736,26.64736,0,0,0,3.81029,20.65373C978.34746,695.32767,979.31837,694.79417,978.92853,694.18533Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":20}),React.createElement("path",{"d":"M1003.95807,642.67736a10.05858,10.05858,0,0,1-7.28609-4.486c-.38345-.61569-1.354-.08142-.973.53019a11.271,11.271,0,0,0,8.04948,4.97786c.32212.03871.62271-.07474.688-.37494a.58607.58607,0,0,0-.47838-.64711Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":21}),React.createElement("path",{"d":"M1039.85552,466.54817l-13.9186-74.09639L998.61268,356.487l-20.24955,13.239c2.86135,15.51933,24.50545,44.49126,24.50545,44.49126l19.18428,57.30437c-.07659.29793-.14758.59857-.19927.90759a10.68681,10.68681,0,1,0,18.00193-5.881Z","transform":"translate(-105.34461 -138.08211)","fill":"#ffb8b8","key":22}),React.createElement("path",{"d":"M978.907,377.55474l22.9251-18.60728.04354-.09837c4.288-9.71624-5.23206-26.37676-13.9737-38.64189a19.59609,19.59609,0,0,0-26.22333-5.29961h0a19.63933,19.63933,0,0,0-9.13107,18.613l1.92816,18.562Z","transform":"translate(-105.34461 -138.08211)","fill":"#3f3d56","key":23}),React.createElement("polygon",{"points":"792.539 608.221 777.285 608.22 770.029 549.384 792.542 549.385 792.539 608.221","fill":"#ffb8b8","key":24}),React.createElement("path",{"d":"M901.77481,741.32258l-4.29344-.00016L880.719,734.50558l-8.98411,6.8158h-.00122a19.14478,19.14478,0,0,0-19.14379,19.14351v.62211l49.184.00185Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":25}),React.createElement("polygon",{"points":"860.222 608.221 844.968 608.22 837.712 549.384 860.225 549.385 860.222 608.221","fill":"#ffb8b8","key":26}),React.createElement("path",{"d":"M969.458,741.32258l-4.29344-.00016-16.76237-6.81684-8.98411,6.8158h-.00123A19.14478,19.14478,0,0,0,920.273,760.46489v.62211l49.184.00185Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":27}),React.createElement("path",{"d":"M988.82571,492.87747s1.78114,21.37363-2.6717,41.85669-4.45284,78.17012-4.45284,78.17012l-9.79624,112.4114-29.38874-2.6717-8.01511-187.9098-28.49817,63.23031,2.67171,8.90568-3.55877,2.22642s2.6682,17.36607.88706,17.36607-6.234,2.6717-6.234,2.6717l3.56227,91.72848-30.2793-.89057L862.36509,590.84l11.57738-73.91712.89057-14.24909,4.00756.16476,2.0406-5.95345,3.74809-10.24153Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":28}),React.createElement("path",{"d":"M990.36505,497.36684l.15872-.22264c8.47691-11.86786-4.27238-40.386-6.19528-44.52013l8.099-2.62822-1.82375-15.50275-.864-6.91146,6.19005-6.19006.01739-.15437,3.56227-31.16987,5.17945-20.70271a45.45157,45.45157,0,0,0-12.90063-44.04788l-11.97222-11.28821-14.55-21.52881h-23.4635l-8.04511,15.19618A34.19883,34.19883,0,0,0,907.297,342.6124l1.82332,39.85508-7.138,49.62306-.00435,8.98047-8.03291,8.92742,1.75417,8.77044-6.11352,2.62-2.69953,12.59666c-1.11712,1.47414-8.49083,11.306-8.49083,13.99383,0,.40354.29787.7936.93709,1.22633,5.0251,3.40268,32.79968,10.3398,45.09239,5.42081,13.09413-5.23557,65.14537,2.61865,65.6698,2.69866Z","transform":"translate(-105.34461 -138.08211)","fill":"#3f3d56","key":29}),React.createElement("path",{"d":"M786.32386,760.72788a1.18647,1.18647,0,0,0,1.18292,1.19h280.29715a1.19,1.19,0,0,0,0-2.38h-280.29a1.18651,1.18651,0,0,0-1.19006,1.18292Z","transform":"translate(-105.34461 -138.08211)","fill":"#ccc","key":30}),React.createElement("circle",{"cx":"845.15873","cy":"116.39341","r":"31.07446","fill":"#ffb8b8","key":31}),React.createElement("path",{"d":"M947.52645,286.05309a84.51553,84.51553,0,0,0,14.346-1.37542c4.68679-1.07973,15.02744-9.07571,17.84571-13.79946h0c2.09379-3.50965,3.3505-8.9383,4.03626-12.87409a37.77917,37.77917,0,0,0-7.37934-29.8114,11.93566,11.93566,0,0,0-4.92552-3.98885c-.17437-.06306-.35356-.11828-.53442-.16481a14.72657,14.72657,0,0,1-7.44025-4.34241,12.14424,12.14424,0,0,0-1.24975-1.22149,18.13939,18.13939,0,0,0-7.66375-3.60358c-4.52853-1.08756-11.00643.27527-19.25331,4.05408-4.14323,1.89855-8.74174,1.3689-12.28618.69532a1.15375,1.15375,0,0,0-1.07625.40006,8.14428,8.14428,0,0,1-5.47647,2.34861c-1.25845.08784-2.53516,1.86637-4.07409,4.18237-.34918.52573-.75663,1.1393-1.05233,1.5137l-.05914-.70315-.69227.804a9.88285,9.88285,0,0,0,4.87594,15.98064,19.27275,19.27275,0,0,0,3.891.51747c.7949.05088,1.6172.10351,2.40688.21961a14.9001,14.9001,0,0,1,11.31824,9.3801,3.89666,3.89666,0,0,0,5.92827,1.73939,6.4381,6.4381,0,0,1,5.837-1.21931,4.27377,4.27377,0,0,1,1.94377,2.09335,5.56976,5.56976,0,0,0,2.17641,2.41036c3.23527,1.5637,3.64359,8.85047,2.6539,14.95919-.95405,5.88827-3.02958,10.1837-5.04727,10.44547-1.55328.20134-1.72852.31657-1.83419.5949l-.09439.24917.1809.22612A6.36358,6.36358,0,0,0,947.52645,286.05309Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":32}),React.createElement("circle",{"cx":"500.67443","cy":"246.35355","r":"61.78912","fill":"#820552","key":33}),React.createElement("path",{"d":"M940.369,375.24046,919.9873,362.20591c-12.97884,8.9771-30.519,40.60269-30.519,40.60269l-44.39206,41.01177A10.6812,10.6812,0,1,0,856.9144,458.0151l61.86788-43.0998Z","transform":"translate(-105.34461 -138.08211)","fill":"#ffb8b8","key":34}),React.createElement("path",{"d":"M938.426,380.52937l13.57464-32.57965-4.90987-18.00443a19.64141,19.64141,0,0,0-15.241-14.05514h0a19.59507,19.59507,0,0,0-22.536,14.4183c-3.718,14.59609-6.57316,33.57109.93622,41.08048l.0761.07609Z","transform":"translate(-105.34461 -138.08211)","fill":"#3f3d56","key":35}),React.createElement("path",{"d":"M147.90252,743.06654c-26.572-13.63868-45.85058-39.99525-41.82-68.16091,23.58089,20.36491,56.18438,32.35326,90.20862,33.1697,13.252.318,28.13265-.5594,37.52464,7.18008,5.844,4.81557,8.31341,12.2464,8.42284,19.57765.10923,7.33162-1.90037,14.68452-3.89684,21.941l.48169,1.74977C207.08485,759.53615,174.47452,756.70521,147.90252,743.06654Z","transform":"translate(-105.34461 -138.08211)","fill":"#f2f2f2","key":36}),React.createElement("path",{"d":"M106.749,674.85654c9.78835,20.6897,27.34009,38.23161,49.50665,48.87653a53.99407,53.99407,0,0,0,15.412,5.06391,35.18759,35.18759,0,0,0,16.24905-1.60229c4.94152-1.59835,9.83016-3.72892,15.03406-4.259a19.05908,19.05908,0,0,1,14.27151,4.33727c4.67007,3.87534,7.36282,9.11855,9.788,14.34087,2.69268,5.79838,5.38257,11.866,10.88616,15.93388.66683.49288-.31371,1.443-.97953.95083-9.5753-7.07745-10.6001-19.35889-18.11941-27.80158-3.50865-3.93951-8.45889-6.872-14.52043-6.61784-5.30055.22228-10.34356,2.41565-15.3344,4.07146A37.76415,37.76415,0,0,1,173.076,730.24a50.65818,50.65818,0,0,1-15.61961-4.50294,108.72177,108.72177,0,0,1-29.20568-19.4826,101.64173,101.64173,0,0,1-22.85228-30.981c-.33812-.71469,1.01467-1.1269,1.35059-.41687Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":37}),React.createElement("path",{"d":"M148.81575,720.62519c-5.82511,6.64383-16.07736,8.89023-23.94112,5.284-.77469-.35527-.09706-1.48547.67867-1.12973a19.56607,19.56607,0,0,0,22.26231-4.955c.573-.65358,1.5699.15088,1.00014.80073Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":38}),React.createElement("path",{"d":"M185.5069,728.29093a28.41953,28.41953,0,0,0-11.58861-20.193c-.66466-.4951.31567-1.44533.97953-.95082a29.54992,29.54992,0,0,1,12.00892,21.03765c.07151.79191-1.32872.89375-1.39984.10614Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":39}),React.createElement("path",{"d":"M120.35841,696.6636a9.60878,9.60878,0,0,0,3.975-8.46678c-.08288-.79,1.3175-.89095,1.39984-.10614a10.75763,10.75763,0,0,1-4.37468,9.37364.79853.79853,0,0,1-.98984.075.57237.57237,0,0,1-.0103-.87577Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":40}),React.createElement("path",{"d":"M196.9834,617.96571c.0677.49089.13541.98179.21347,1.47707a106.73249,106.73249,0,0,0,4.65963,19.35562c.15747.4892.32555.98231.4989,1.4654a115.70661,115.70661,0,0,0,25.2568,40.87947,121.61573,121.61573,0,0,0,14.76811,13.169c7.34877,5.55789,15.86012,11.03012,20.3902,18.34791a19.04593,19.04593,0,0,1,1.27841,2.35806l-22.80781,42.686c-.10486.07751-.19942.15938-.30453.23736l-.82577,1.73554c-.29224-.18942-.59026-.39177-.8825-.58118-.17009-.10921-.3351-.22794-.50519-.33715-.11178-.07582-.22338-.15214-.32962-.21454-.03733-.02511-.0744-.05069-.10117-.07192-.10625-.0624-.19661-.13091-.29224-.18941q-2.50464-1.69013-4.98851-3.41929c-.01062-.0039-.01062-.0039-.01615-.01732-12.58953-8.8139-24.3796-18.69649-33.96623-29.97124-.28829-.33931-.58745-.68205-.86533-1.04086a108.25169,108.25169,0,0,1-11.31049-16.26717,93.092,93.092,0,0,1-4.71936-9.67129,76.8352,76.8352,0,0,1-5.83478-26.94279c-.62378-18.54784,5.47365-37.51305,19.59394-51.89693C196.25468,618.6883,196.61128,618.32956,196.9834,617.96571Z","transform":"translate(-105.34461 -138.08211)","fill":"#f2f2f2","key":41}),React.createElement("path",{"d":"M197.5222,618.27869c-6.69582,22.70433-5.40424,46.91492,4.05262,67.78041a42.4349,42.4349,0,0,0,8.16445,12.53534,28.64271,28.64271,0,0,0,13.32756,7.35961c4.80853,1.30069,9.93912,2.124,14.21891,4.46666a15.131,15.131,0,0,1,7.79955,11.31079c.88226,5.7735-.65481,11.641-2.3792,17.34743-1.9146,6.33589-4.01437,12.89744-2.63528,19.28026.1671.77337-1.21741,1.04929-1.38425.27709-2.39938-11.105,5.17955-22.01668,5.257-33.17133.03611-5.205-1.69822-10.33317-6.43634-13.36844-4.14329-2.65422-9.43284-3.50728-14.3176-4.78593a31.03922,31.03922,0,0,1-13.3708-6.74359,39.61775,39.61775,0,0,1-8.70223-12.17333,92.65975,92.65975,0,0,1-8.74924-32.096,102.3226,102.3226,0,0,1,3.85425-38.39137c.23129-.78428,1.53044-.4068,1.30065.37236Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":42}),React.createElement("path",{"d":"M198.08462,679.44817c-8.90469,2.48263-18.15369-1.1185-21.62428-8.37712-.3419-.71508.93694-1.30536,1.2793-.58933,3.25134,6.80006,11.81221,10.07537,20.13617,7.75465.876-.24423,1.0798.969.20881,1.2118Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":43}),React.createElement("path",{"d":"M220.50646,705.587a30.17415,30.17415,0,0,0,5.00219-23.25039c-.16395-.77407,1.2205-1.05023,1.38425-.27709a31.40706,31.40706,0,0,1-5.26,24.18842c-.4846.7065-1.60844.04173-1.12647-.66094Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":44}),React.createElement("path",{"d":"M192.94449,643.97434a11.85526,11.85526,0,0,0,8.75077-5.01261c.47471-.71094,1.59809-.04538,1.12647.66094a13.28423,13.28423,0,0,1-9.66843,5.56346c-.38092.03358-.73079-.11132-.79653-.46735a.69078.69078,0,0,1,.58772-.74444Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":45}),React.createElement("polygon",{"points":"172.025 265.948 174.027 284.513 172.849 308.857 226.771 302.451 231.838 265.948 225.382 266.011 172.025 265.948","fill":"#ffb6b6","key":46}),React.createElement("polygon",{"points":"144.057 603.005 155.846 603.005 161.457 557.533 144.057 557.533 144.057 603.005","fill":"#ffb6b6","key":47}),React.createElement("path",{"d":"M245.55425,733.01228l18.8344-1.12416v8.06948L282.295,752.3244a5.0405,5.0405,0,0,1-2.86417,9.18836H257.0078l-3.86495-7.98195-1.50908,7.98195h-8.45439Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":48}),React.createElement("polygon",{"points":"210.278 603.005 222.067 603.005 227.677 557.533 210.278 557.533 210.278 603.005","fill":"#ffb6b6","key":49}),React.createElement("path",{"d":"M311.775,733.01228l18.8344-1.12416v8.06948l17.9064,12.3668a5.0405,5.0405,0,0,1-2.86418,9.18836H323.22851l-3.865-7.98195-1.50907,7.98195H309.4001Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":50}),React.createElement("path",{"d":"M244.31517,701.87385h.12816l2.26726-73.93578a19.33336,19.33336,0,0,1,.25367-18.26966l.3246-.58759-.84164-3.90138a24.85032,24.85032,0,0,1,1.42011-14.956l2.11513-68.96837c-7.55652-48.97254,28.45558-80.91057,28.45558-80.91057h53.94661l11.58172,39.792c7.65652,74.595,6.26725,147.2855-5.88257,217.71039l.33123.1675c1.19267.41169,1.7042,2.06388,1.14285,3.6904s-1.98335,2.61136-3.176,2.19966l-28.49-.99093c-1.19267-.4116-1.70439-2.06389-1.14285-3.69041.56135-1.62652,1.98335-2.61125,3.176-2.19966l1.93714.9798-4.13125-71.34523.45847-13.03165-.94452-14.78416-4.367-66.499-16.52971,81.77506-16.88428,88.57845a3.10592,3.10592,0,0,1-2.0944,5.4082H244.31517a3.11556,3.11556,0,1,1,0-6.23111Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":51}),React.createElement("circle",{"cx":"181.44098","cy":"142.01235","r":"28.93543","fill":"#ffb6b6","key":52}),React.createElement("path",{"d":"M159.992,413.77455a94.20838,94.20838,0,0,1,16.53187-25.78973,63.66241,63.66241,0,0,0-9.66723,30.87,48.78044,48.78044,0,0,0,6.60223,3.4533A63.262,63.262,0,0,0,195.092,427.168a94.39613,94.39613,0,0,1,20.2686-36.03426,63.81439,63.81439,0,0,0-9.71971,35.87685,99.92113,99.92113,0,0,0,24.34122-5.21676c11.80849-4.06211,23.27057-10.12907,31.43682-19.56535,8.838-10.213,13.19395-23.69045,14.6005-37.12587,1.40655-13.42491.084-26.97583-1.24907-40.41125-.62976-6.40279,4.70238-13.77131,4.07262-20.1741h-.41989c-2.80253-3.84173-5.65752-7.77789-7.03255-12.3333-1.36459-4.545-1.00768-9.90864,2.13074-13.488a14.6545,14.6545,0,0,1,6.43431-3.98863c.231-.29387.48286-.57729.74527-.86072a59.84132,59.84132,0,0,1,16.53188-12.36476c-4.461,3.36931-7.442,7.17952-8.82753,11.11568q5.794-1.2753,11.58809-2.54011a55.81526,55.81526,0,0,1,4.07262-3.90464c2.06777-1.79492,2.75-1.93138,5.2167-3.62128a16.64307,16.64307,0,0,0-4.50295,6.4238c4.96479-1.24907,9.92958-3.12791,12.51173-7.4,4.28256-7.06414-.80825-16.59485-7.91429-20.81443a28.31593,28.31593,0,0,0-32.88532,3.62128c-10.276-7.568-24.908-7.442-36.33863-1.78441a53.13391,53.13391,0,0,0-18.95655,16.48992,74.14338,74.14338,0,0,1,8.58607-.59831,26.332,26.332,0,0,0-11.2417,4.45048,77.432,77.432,0,0,0-4.07262,7.127q-1.21227,2.409-2.28821,4.88086c-4.398,10.01357-7.26351,20.678-10.234,31.21637-3.46381,12.28084-7.17952,24.6456-13.66637,35.63539a80.03779,80.03779,0,0,1-44.13747,35.21551C142.59939,390.88184,149.38,404.46422,159.992,413.77455Z","transform":"translate(-105.34461 -138.08211)","fill":"#2f2e41","key":53}),React.createElement("path",{"d":"M315.92426,328.38l-5.61591-2.10885-7.08159-11.45052-25.22511,2.06119-6.13119,12.27779L257.1003,340.43915l6.45927,34.01838L273.5948,415.7794l67.17714-8.39714-.071-31.1064s12.13924-24.576-7.46982-33.78483Z","transform":"translate(-105.34461 -138.08211)","fill":"#820552","key":54}),React.createElement("path",{"d":"M419.47117,436.28008a9.61207,9.61207,0,0,1-12.99127-6.96156l-74.902-45.32293,13.69075-15.796,69.32122,49.51792a9.66415,9.66415,0,0,1,4.88129,18.56253Z","transform":"translate(-105.34461 -138.08211)","fill":"#ffb6b6","key":55}),React.createElement("path",{"d":"M306.61946,362.50338s-3.57954,3.60157,5.4022,9.52372c7.19057,4.74113,39.26372,28.17035,50.63314,31.87613a7.55111,7.55111,0,0,0,5.03313,7.7697l10.29424-22.622c-2.22831-5.17158-5.79254-3.97412-7.66791-2.80155l-12.43279-9.35012-30.52978-30.48581-18.191,13.4406Z","transform":"translate(-105.34461 -138.08211)","fill":"#820552","key":56}),React.createElement("path",{"d":"M276.6753,245.14943a40.29481,40.29481,0,0,0-4.848,35.41371","transform":"translate(-105.34461 -138.08211)","fill":"#fd6584","key":57}),React.createElement("path",{"d":"M129.87567,760.72788a1.18647,1.18647,0,0,0,1.19007,1.19h280.29a1.19,1.19,0,1,0,0-2.38h-280.29A1.18651,1.18651,0,0,0,129.87567,760.72788Z","transform":"translate(-105.34461 -138.08211)","fill":"#ccc","key":58}),React.createElement("path",{"id":"a4a87c0b-578c-404f-b0e7-3c25016717c2","data-name":"Path 3114","d":"M236.66644,490.25426a2.79673,2.79673,0,0,0-1.711,3.56047l39.05035,112.55038a2.79673,2.79673,0,0,0,3.56046,1.711L504.78648,528.3543a2.79674,2.79674,0,0,0,1.71078-3.561L467.44692,412.24289a2.79677,2.79677,0,0,0-3.561-1.71078Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":59}),React.createElement("path",{"d":"M294.17873,591.83236a21.649,21.649,0,0,1-20.396-14.41016l-21.44532-60.67578a21.61166,21.61166,0,0,1,13.17383-27.57813l114.83936-40.58886a86.06045,86.06045,0,0,1,109.69824,52.40332A21.61166,21.61166,0,0,1,476.875,528.56087l-.1665-.47168.1665.47168L301.35988,590.596A21.53409,21.53409,0,0,1,294.17873,591.83236Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":60}),React.createElement("path",{"id":"e6660b72-17a8-4076-a000-8bf222be7673","data-name":"Path 3117","d":"M446.46874,472.22655,343.64051,508.30461c-1.44882.50834-3.24438-.85007-4.0106-3.03377s-.21283-4.36615,1.236-4.87448l102.82823-36.07807c1.44882-.50834,3.24438.85008,4.01062,3.03378S447.9183,471.72043,446.46874,472.22655Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":61}),React.createElement("path",{"id":"f689c0b7-f689-4c10-b0b9-25ad5f15d9dd","data-name":"Path 3118","d":"M454.42209,494.896,351.59385,530.9741c-1.44882.50834-3.24438-.85007-4.0106-3.03377s-.21282-4.36615,1.236-4.87449l102.82824-36.07806c1.44881-.50834,3.24438.85008,4.01062,3.03377S455.8709,494.38769,454.42209,494.896Z","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":62}),React.createElement("path",{"id":"f731b694-f804-4551-a9ab-28894637a524","data-name":"Path 3124","d":"M364.94882,583.573","transform":"translate(-105.34461 -138.08211)","fill":"#e6e6e6","key":63}),React.createElement("path",{"d":"M329.72689,520.63823a27.57806,27.57806,0,0,1,1.58375,9.697,26.82169,26.82169,0,0,1-.44634,4.50183,27.70611,27.70611,0,0,1-45.32893,16.02119q-.56007-.47928-1.09056-.98926a27.7,27.7,0,1,1,45.28208-29.23076Z","transform":"translate(-105.34461 -138.08211)","fill":"#e4e4e4","key":64}),React.createElement("circle",{"cx":"199.41905","cy":"390.72235","r":"5.29523","fill":"#fd6584","key":65}),React.createElement("path",{"d":"M284.44484,549.869c1.35948-3.15467,2.96615-7.96821,6.688-6.2159,1.83878.79715,5.13166,3.21913,6.46874.40231l10.46955-21.916a3.40956,3.40956,0,0,1,4.62657-1.54261l18.613,9.73844a26.82971,26.82971,0,0,1-.44633,4.50182l-45.329,16.02119Z","transform":"translate(-105.34461 -138.08211)","fill":"#3f3d56","key":66}),React.createElement("path",{"d":"M289.84809,485.14671a9.61206,9.61206,0,0,1-4.72465-13.96117L261.4276,386.90635l20.79013-2.17248,16.75488,83.52682a9.66415,9.66415,0,0,1-9.12452,16.886Z","transform":"translate(-105.34461 -138.08211)","fill":"#ffb6b6","key":67}),React.createElement("path",{"d":"M257.92214,340.64177s-5.07456.18231-2.56621,10.64423c2.00814,8.37556,9.383,60.917,15.14909,71.39307a7.55112,7.55112,0,0,0-1.63672,9.11163l22.9765-9.47664c1.90826-5.298.43056-10.10815-1.73982-10.53406l-2.68439-15.323L283.4645,345.0526l-21.87656-4.60775Z","transform":"translate(-105.34461 -138.08211)","fill":"#820552","key":68}),React.createElement("path",{"d":"M464.90167,562.39093l-31.77646,1.31613a4.50052,4.50052,0,0,1-3.6021-1.55491,4.408,4.408,0,0,1-1.01706-3.70669,86.53527,86.53527,0,0,0-2.07505-39.95275,4.47106,4.47106,0,0,1,2.208-5.22671c13.0155-6.76218,25.211-7.105,36.24566-1.02035a4.52655,4.52655,0,0,1,2.27165,3.06,141.5524,141.5524,0,0,1,2.04182,43.03244A4.49087,4.49087,0,0,1,464.90167,562.39093Z","transform":"translate(-105.34461 -138.08211)","fill":"#820552","key":69}),React.createElement("path",{"d":"M463.5569,541.59329l-24.29669,1.00632a2.2811,2.2811,0,1,1-.1888-4.55829l24.2967-1.00633a2.2811,2.2811,0,1,1,.18879,4.5583Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":70}),React.createElement("path",{"d":"M463.22584,533.60014l-24.2967,1.00633a2.2811,2.2811,0,0,1-.18879-4.5583l24.2967-1.00633a2.2811,2.2811,0,0,1,.18879,4.5583Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":71}),React.createElement("path",{"d":"M1046.05887,313.81819l-31.53364-4.13591a4.50052,4.50052,0,0,1-3.28323-2.14784,4.40807,4.40807,0,0,1-.36837-3.826,86.53533,86.53533,0,0,0,4.786-39.71929,4.47106,4.47106,0,0,1,3.069-4.77228c13.98-4.43743,26.05451-2.69025,35.88647,5.19141a4.52652,4.52652,0,0,1,1.715,3.4033,141.55219,141.55219,0,0,1-5.34527,42.748A4.49086,4.49086,0,0,1,1046.05887,313.81819Z","transform":"translate(-105.34461 -138.08211)","fill":"#820552","key":72}),React.createElement("path",{"d":"M1048.28957,293.09684l-24.111-3.16237a2.2811,2.2811,0,1,1,.59329-4.52346l24.111,3.16237a2.2811,2.2811,0,1,1-.59329,4.52346Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":73}),React.createElement("path",{"d":"M1049.32993,285.16478l-24.111-3.16237a2.28111,2.28111,0,1,1,.59329-4.52347l24.111,3.16237a2.28111,2.28111,0,1,1-.59329,4.52347Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":74}),React.createElement("path",{"d":"M626.019,374.93566h-10.5v-10.5a9.5,9.5,0,0,0-19,0v10.5h-10.5a9.5,9.5,0,0,0,0,19h10.5v10.5a9.5,9.5,0,0,0,19,0v-10.5h10.5a9.5,9.5,0,0,0,0-19Z","transform":"translate(-105.34461 -138.08211)","fill":"#fff","key":75}),React.createElement("circle",{"cx":"860.70939","cy":"32.52333","r":"10.01145","fill":"#3f3d56","key":76}),React.createElement("circle",{"cx":"245.70939","cy":"315.52333","r":"10.01145","fill":"#3f3d56","key":77})]);
}

Collaborators.defaultProps = {"id":"baf84d8f-0fd1-4801-b992-6edf2ca418db","data-name":"Layer 1","width":"989.31079","height":"623.83577","viewBox":"0 0 989.31079 623.83577"};

module.exports = Collaborators;

Collaborators.default = Collaborators;


/***/ }),

/***/ 3120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function HomeHero (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("linearGradient",{"id":"a340ed46-1652-4aba-8925-cf57be9109ca","x1":"421.41","y1":"548.67","x2":"423.73","y2":"548.67","gradientUnits":"userSpaceOnUse"},[React.createElement("stop",{"offset":"0","stopColor":"gray","stopOpacity":"0.25","key":0}),React.createElement("stop",{"offset":"0.54","stopColor":"gray","stopOpacity":"0.12","key":1}),React.createElement("stop",{"offset":"1","stopColor":"gray","stopOpacity":"0.1","key":2})])),React.createElement("title",{"key":1},"pair programming"),React.createElement("path",{"d":"M619.44,213.68c-71.37,12.06-142.64,6.89-211.2-.63s-136.95-17.34-208.35-14.38c-45.93,1.9-97.08,11-129.15,37.45C39.87,261.56,35.06,295.89,35,326.88c-.08,23.31,1.94,47.43,18.46,66,11.48,12.88,29.15,22.11,42.46,34,46.31,41.3,32.23,106.33,1.84,161.62-14.26,25.94-31.7,51.45-41.41,78s-11,55,6.38,76.65c17.22,21.47,50.53,33.57,85.26,39.84,70.54,12.74,149.13,4.83,225.17-5.89C541.45,753.29,708,716.17,874.19,679.14c61.49-13.71,123.25-27.48,182.49-47.24,32.9-11,66.4-24.69,87.65-46,27-27,27.68-63.93,1.66-86-43.66-37-142.48-28.79-176.25-71.09-18.58-23.29-10.49-54.92,4.3-82.86,31.71-59.92,93-119.12,85.06-178.86-5.48-41-47.29-74.93-103.33-83.77-58.74-9.26-134.18,8.3-168,49.56C753,175.39,682.46,203,619.44,213.68Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","opacity":"0.1","key":2}),React.createElement("rect",{"x":"360","y":"359.24","width":"283.43","height":"65.63","fill":"#565661","key":3}),React.createElement("rect",{"x":"360","y":"359.24","width":"283.43","height":"65.63","opacity":"0.1","key":4}),React.createElement("polygon",{"points":"393.91 427.03 395.9 602.24 368.64 671.06 366.53 427.03 393.91 427.03","fill":"#bcbec9","key":5}),React.createElement("polygon",{"points":"362.99 371.84 638.94 373.5 638.94 422.38 362.99 422.38 362.99 371.84","fill":"#565661","key":6}),React.createElement("polygon",{"points":"615.33 427.03 638.94 430.36 638.94 668.4 615.33 595.59 615.33 427.03","fill":"#bcbec9","key":7}),React.createElement("rect",{"x":"647.91","y":"361.87","width":"132.99","height":"282.6","fill":"#efeff0","key":8}),React.createElement("rect",{"x":"658.55","y":"369.72","width":"111.71","height":"217.23","fill":"#565661","key":9}),React.createElement("rect",{"x":"658.55","y":"369.72","width":"111.71","height":"217.23","opacity":"0.1","key":10}),React.createElement("rect",{"x":"658.55","y":"374.17","width":"111.71","height":"48.21","fill":"#565661","key":11}),React.createElement("rect",{"x":"658.55","y":"427.03","width":"111.71","height":"102.4","fill":"#565661","key":12}),React.createElement("rect",{"x":"658.55","y":"535.75","width":"111.71","height":"102.4","fill":"#565661","key":13}),React.createElement("rect",{"x":"658.55","y":"535.75","width":"111.71","height":"102.4","opacity":"0.1","key":14}),React.createElement("ellipse",{"cx":"663.21","cy":"653.67","rx":"7.2","ry":"9.2","fill":"#565661","key":15}),React.createElement("ellipse",{"cx":"763.06","cy":"654.11","rx":"7.2","ry":"9.2","fill":"#565661","key":16}),React.createElement("polygon",{"points":"359 671.06 368.64 671.06 365.99 364.32 351.35 364.32 359 671.06","fill":"#efeff0","key":17}),React.createElement("polygon",{"points":"638.94 361.87 638.94 668.4 647.91 668.4 647.91 364.32 638.94 361.87","fill":"#efeff0","key":18}),React.createElement("polygon",{"points":"366.46 419.38 366.46 430.36 638.94 430.36 638.94 422.38 366.46 419.38","fill":"#efeff0","key":19}),React.createElement("polygon",{"points":"384.93 341.26 730.37 341.26 780.57 357.88 780.57 367.52 349.69 364.2 349.69 354.39 384.93 341.26","fill":"#fff","key":20}),React.createElement("polygon",{"points":"349.69 354.39 780.57 357.88 780.57 367.52 349.69 364.2 349.69 354.39","fill":"#bcbec9","key":21}),React.createElement("path",{"d":"M423.68,549.64l-2-.3c0-.09,0-.17,0-.25-.06-.47-.13-.93-.2-1.4.82.65,1.6,1.3,2.32,1.95Z","transform":"translate(-34.96 -80.93)","fill":"url(#a340ed46-1652-4aba-8925-cf57be9109ca)","key":22}),React.createElement("path",{"d":"M380.22,704.05c1.3-.3,2.62-.55,3.94-.73a47.42,47.42,0,0,1,26.62,3.92c-.84,6.18-1.67,12.57.11,18.54,1.24,4.2,3.73,8,4.26,12.38a7.3,7.3,0,0,1,5.75,5.08,11.05,11.05,0,0,1,.57,3.56,19,19,0,0,1-.56,4.44,4.48,4.48,0,0,1-4.8,4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63,26.63,0,0,1-7.79-6.37A3.55,3.55,0,0,1,366,734c-.26-1.76,1.8-2.81,3.11-4a6.23,6.23,0,0,0,1-1.22c1.55-2.34,1.7-5.57,2.63-8.33,2.2-6.55,9-10.77,11.4-17.16.13-.35.25-.7.35-1.06","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":23}),React.createElement("path",{"d":"M421.47,746.8a19,19,0,0,1-.56,4.44,4.48,4.48,0,0,1-4.8,4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63,26.63,0,0,1-7.79-6.37A3.55,3.55,0,0,1,366,734c-.26-1.76,1.8-2.81,3.11-4a6.23,6.23,0,0,0,1-1.22c3.86.83,8.65,3.26,11.6,4.2a35.22,35.22,0,0,1,8.44,3.53c3.68,2.36,6.33,6,9.45,9s7.15,5.73,11.5,5.36a19,19,0,0,0,6.54-2.26Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":24}),React.createElement("path",{"d":"M405.08,604.69a4.63,4.63,0,0,1-1.7,5c-1.31.81-3,.7-4.3,1.58-1.61,1.13-1.84,3.37-2.12,5.31-1,6.67-4.31,12.72-7.14,18.85s-5.22,12.82-4.18,19.48c.71,4.52,2.93,9.34.85,13.41-.51,1-1.27,1.89-1.85,2.86-2.85,4.76-1.23,10.79-1.34,16.33a3.23,3.23,0,0,1-.39,1.77,4.89,4.89,0,0,1-1.58,1.22,8.38,8.38,0,0,0-3.41,6.43,24.57,24.57,0,0,0,.9,7.46,4.44,4.44,0,0,0,1.23,2.6,4.6,4.6,0,0,0,2.69.76A59.84,59.84,0,0,1,401,712.19c3.79,1.58,7.47,3.56,11.5,4.32a3,3,0,0,0,2.36-.25,3.25,3.25,0,0,0,1-1.73c1.55-5.1,3.12-10.36,2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9,5.39-17.12,7.32-26,.87-4,.87-8.14,1.49-12.18,1.68-11.07,7.78-21,10.13-31.95a34.73,34.73,0,0,1,1.52-6c1.75-4.24,5.8-7.68,5.89-12.27a4.78,4.78,0,0,0-.76-2.86,6.48,6.48,0,0,0-3.57-2,121.87,121.87,0,0,0-16.55-3.34,31.35,31.35,0,0,0-7.78-.54,22.9,22.9,0,0,0-9.52,3.36C401.76,600.68,404.24,601.25,405.08,604.69Z","transform":"translate(-34.96 -80.93)","fill":"#454b69","key":25}),React.createElement("path",{"d":"M405.08,604.69a4.63,4.63,0,0,1-1.7,5c-1.31.81-3,.7-4.3,1.58-1.61,1.13-1.84,3.37-2.12,5.31-1,6.67-4.31,12.72-7.14,18.85s-5.22,12.82-4.18,19.48c.71,4.52,2.93,9.34.85,13.41-.51,1-1.27,1.89-1.85,2.86-2.85,4.76-1.23,10.79-1.34,16.33a3.23,3.23,0,0,1-.39,1.77,4.89,4.89,0,0,1-1.58,1.22,8.38,8.38,0,0,0-3.41,6.43,24.57,24.57,0,0,0,.9,7.46,4.44,4.44,0,0,0,1.23,2.6,4.6,4.6,0,0,0,2.69.76A59.84,59.84,0,0,1,401,712.19c3.79,1.58,7.47,3.56,11.5,4.32a3,3,0,0,0,2.36-.25,3.25,3.25,0,0,0,1-1.73c1.55-5.1,3.12-10.36,2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9,5.39-17.12,7.32-26,.87-4,.87-8.14,1.49-12.18,1.68-11.07,7.78-21,10.13-31.95a34.73,34.73,0,0,1,1.52-6c1.75-4.24,5.8-7.68,5.89-12.27a4.78,4.78,0,0,0-.76-2.86,6.48,6.48,0,0,0-3.57-2,121.87,121.87,0,0,0-16.55-3.34,31.35,31.35,0,0,0-7.78-.54,22.9,22.9,0,0,0-9.52,3.36C401.76,600.68,404.24,601.25,405.08,604.69Z","transform":"translate(-34.96 -80.93)","opacity":"0.05","key":26}),React.createElement("polygon",{"points":"350.55 674.47 342.02 674.47 336.44 559.83 336.05 553.31 343.3 550.76 343.79 557.69 350.55 674.47","fill":"#565661","key":27}),React.createElement("polygon",{"points":"343.79 557.69 336.44 559.83 336.05 553.31 343.3 550.76 343.79 557.69","opacity":"0.1","key":28}),React.createElement("polygon",{"points":"457.58 698.72 443.51 700.42 378.69 553.31 361.21 552.03 330.51 560.99 324.54 736.14 310.47 736.14 316.01 554.59 282.32 555.45 222.2 705.11 209.41 705.11 272.64 530.2 275.08 523.46 369.31 520.23 392.8 533.4 393.1 534.16 457.58 698.72","fill":"#565661","key":29}),React.createElement("path",{"d":"M428.06,615.09c-20.25,6.1-41.27,12.76-41.27,12.76s-19.17,6.69-27.29,0a12.27,12.27,0,0,0-3.39-1.87,16.7,16.7,0,0,0,3.39,1.87l-51.9-16.73,2.43-6.73,94.24-3.23,23.49,13.17Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":30}),React.createElement("path",{"d":"M332.21,586.06l38.37-8.53s91.68,17.06,98.5,23.88c0,0-73.34,14.92-81.44,20S331.35,632.11,332.21,586.06Z","transform":"translate(-34.96 -80.93)","fill":"#fff","key":31}),React.createElement("path",{"d":"M315.71,490.17c-3,9.51-11.19,18.08-21.16,18.49a3.69,3.69,0,0,1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64,1.54-4.1a2.68,2.68,0,0,0-.06-.89c-.26-1.19-1.23-2.25-2.37-2a4,4,0,0,0,.85-5.31,12,12,0,0,1-1.22-1.64c-.83-1.7.46-3.61,1-5.43,1.11-4-1.71-8-1.94-12.17-.2-3.73,1.69-7.24,2.16-10.94.75-6-2.23-11.75-2.58-17.74-.24-4.18.79-8.32,1.94-12.35,1-3.6,2.13-7.24,2.2-11,0-2.73-.47-5.43-.6-8.15a14.19,14.19,0,0,1,1.31-7.24,5.79,5.79,0,0,1,3.29-2.81c3.28-1.1,5.43.61,5.91,3.72.8,5.29.34,10.69,1.39,16a75,75,0,0,0,4.39,14.49c1.77,4.22,3.92,8.3,5.28,12.67a69.8,69.8,0,0,1,2.19,11C317.69,470.38,318.74,480.66,315.71,490.17Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":32}),React.createElement("path",{"d":"M543.47,732.21a15.51,15.51,0,0,1-10.93,6.44c-4.34.54-8.85-.55-13.06.64a4,4,0,0,0-3,2.31,24.54,24.54,0,0,0-.19,2.45c-.49,2.67-4,3.27-6.73,3.25l-11.26-.07c-2.34,0-4.93-.13-6.61-1.75a4.92,4.92,0,0,1-.1-6.48,4.07,4.07,0,0,1,1.26-1,4,4,0,0,1-2.7-3.21,11.94,11.94,0,0,1,.21-4.41c0-4.18,1-11.18,3.94-14.45,3.61-4.07,9.87-9.33,15.32-10.42A12,12,0,0,1,520,708.46c2.58,2.4,4.46,6.16,8,6.58,1.93.24,3.79-.67,5.7-1a10.61,10.61,0,0,1,10.81,5.71,11.26,11.26,0,0,1,1,3.13A13,13,0,0,1,543.47,732.21Z","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":33}),React.createElement("path",{"d":"M543.47,732.21a15.51,15.51,0,0,1-10.93,6.44c-4.34.54-8.85-.55-13.06.64a4,4,0,0,0-3,2.31,24.54,24.54,0,0,0-.19,2.45c-.49,2.67-4,3.27-6.73,3.25l-11.26-.07c-2.34,0-4.93-.13-6.61-1.75a4.92,4.92,0,0,1-.1-6.48c6.5-.27,12.89,0,19.37-1.34,2.63-.53,5.22-1.23,7.88-1.6,5.76-.82,11.89-.12,17.18-2.56,4.41-2,7.57-6.07,9.44-10.61A13,13,0,0,1,543.47,732.21Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":34}),React.createElement("path",{"d":"M513.76,716.4c-4,3.1-8.69,5.52-13.73,5.78s-10.39-2-12.86-6.38c-3.61-6.43-.41-15.37-4.83-21.27-1.38-1.85-3.37-3.16-4.83-4.95s-2.3-4.48-1-6.38c-1.57.6-3.23-.92-3.69-2.54s-.17-3.36-.45-5c-.73-4.35-5-7.14-7.05-11s-1.77-8.87-2-13.44a51,51,0,0,0-11.8-30.35c-1.36-1.62-3.1-3.27-5.22-3.19.37-3.66-2.07-7.16-5.23-9s-6.92-2.46-10.58-2.82c-36.93-3.64-75.41,10.09-110.67-1.46-9.81-3.21-19.27-8.58-25.27-17a29.72,29.72,0,0,1-5.29-22.48l0-.14c1.39-7.1,5.14-8.85,11.35-12.09A136.24,136.24,0,0,1,323,543.3c15-4.69,31.15-6.38,46.63-2.94,7.23,1.62,14.2,4.3,21.44,5.87,2.85.62,5.72,1.06,8.61,1.43,4.49.56,9,.93,13.52,1.45a204.53,204.53,0,0,1,42.46,9.55c5.13,1.74,10.26,3.73,14.67,6.88A32.5,32.5,0,0,1,483.37,587c.42,2.94.43,6,1.07,8.85a45,45,0,0,0,2.4,7,465.63,465.63,0,0,1,20.89,65,15.79,15.79,0,0,0,1.67,4.7c1.28,2.07,3.48,3.46,4.77,5.53,3,4.88.11,11.69,2.77,16.77.92,1.76,2.45,3.15,3.37,4.91C523.31,705.53,518.88,712.43,513.76,716.4Z","transform":"translate(-34.96 -80.93)","fill":"#454b69","key":35}),React.createElement("path",{"d":"M462.66,601.5a16.5,16.5,0,0,0,3.63-4,7.46,7.46,0,0,0,1.1-5.17,14.79,14.79,0,0,1-3.89,12.72c-2.51,2.57-7.22,5.09-10.89,4.21C453.13,606.32,460.33,603.48,462.66,601.5Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":36}),React.createElement("path",{"d":"M400.18,551.66a6.71,6.71,0,0,1-4.44,4.58,18.5,18.5,0,0,1-6.59.77l-2,0c-26.24-.58-52.76-6.4-78.39-.85a56.76,56.76,0,0,0-9.06,2.67,40.9,40.9,0,0,0-10.41,6l0-.14c1.39-7.1,5.14-8.85,11.35-12.09A136.24,136.24,0,0,1,323,543.3c15-4.69,31.15-6.38,46.63-2.94,7.23,1.62,14.2,4.3,21.44,5.87,2.85.62,5.72,1.06,8.61,1.43A6.91,6.91,0,0,1,400.18,551.66Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":37}),React.createElement("path",{"d":"M400.18,550.23a6.7,6.7,0,0,1-4.44,4.59,18.27,18.27,0,0,1-6.59.76l-2,0c-26.24-.58-52.76-6.4-78.39-.85a57.78,57.78,0,0,0-9.06,2.66,41.2,41.2,0,0,0-10.85,6.4q-1.15-3.16-2.29-6.33c-.92-2.52,2-3.08,2.56-5.34.37-1.53-.26-3.27-.58-4.9a8.55,8.55,0,0,1-.16-1.21c-.18-3.61,1.11-5.69,4.07-7.64,8.78-5.8,19.49-9.78,29.51-12.77a73,73,0,0,1,16.4-3.18c7.88-.46,15.75,1,23.42,2.85,9.43,2.33,18.76,5.41,27.12,10.34C393,538,397,541,399.21,545.26A7.6,7.6,0,0,1,400.18,550.23Z","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":38}),React.createElement("path",{"d":"M315.71,490.17c-3,9.51-11.19,18.08-21.16,18.49a3.69,3.69,0,0,1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64,1.54-4.1a2.68,2.68,0,0,0-.06-.89c5.29-7.46,10.42-15,12.45-23.83a12.74,12.74,0,0,0,.37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53A88,88,0,0,0,297.23,415c-1.35-3.12-2.89-6.28-3.36-9.61a5.79,5.79,0,0,1,3.29-2.81c3.28-1.1,5.43.61,5.91,3.72.8,5.29.34,10.69,1.39,16a75,75,0,0,0,4.39,14.49c1.77,4.22,3.92,8.3,5.28,12.67a69.8,69.8,0,0,1,2.19,11C317.69,470.38,318.74,480.66,315.71,490.17Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":39}),React.createElement("path",{"d":"M400.18,550.23a6.7,6.7,0,0,1-4.44,4.59,18.27,18.27,0,0,1-6.59.76l-2,0a43.57,43.57,0,0,0-29-7c-3.26.39-6.52,1.15-9.78.85-6.59-.6-11.93-5.34-17.8-8.37a37.38,37.38,0,0,0-41.43,5.62l-.57.5a8.55,8.55,0,0,1-.16-1.21c-.18-3.61,1.11-5.69,4.07-7.64,8.78-5.8,19.49-9.78,29.51-12.77a73,73,0,0,1,16.4-3.18c7.88-.46,15.75,1,23.42,2.85,9.43,2.33,18.76,5.41,27.12,10.34C393,538,397,541,399.21,545.26A7.6,7.6,0,0,1,400.18,550.23Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":40}),React.createElement("path",{"d":"M422.61,440.69l-.14.36c-2.24,5.81-6.36,10.72-9,16.38-3.33,7.17-4.15,15.21-4.89,23.09-.64,6.75-1.27,13.54-.76,20.31,1.28,16.68,9.43,32.5,11.61,48.86a54.31,54.31,0,0,1,.41,11.41c-.18,2.41-.62,5-2.22,6.78s-4.71,2.48-6.43.77c.77-1.47,1.55-2.93,2.33-4.4-4.57-3.55-11.45-1-16.79-3.22-2.35-1-4.23-2.8-6.2-4.41a43.48,43.48,0,0,0-32.39-9.46c-3.26.4-6.52,1.16-9.78.86-6.59-.61-11.93-5.34-17.8-8.37a37.4,37.4,0,0,0-41.43,5.61c-1.4,1.3-3.28,2.82-5,2a4.16,4.16,0,0,1-1.55-1.69c-6.55-11.19-1.73-25.62,5.27-36.52S304.12,488.1,307,475.47a12.53,12.53,0,0,0,.37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53A88,88,0,0,0,298.65,415c-1.6-3.73-3.5-7.51-3.5-11.56,0-6.38,4.57-11.67,8.35-16.8,4.35-5.9,8-12.43,13.51-17.28,5.22-4.61,12.78-7.43,19.24-5.09A119.94,119.94,0,0,1,369.81,361c3.9.18,7.93.59,11.35,2.48,3.66,2,6.29,5.56,9.89,7.69,2.63,1.57,5.66,2.31,8.52,3.41A35.21,35.21,0,0,1,417.93,391c4,7.75,5,16.66,5.88,25.34C424.65,424.51,425.45,433,422.61,440.69Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":41}),React.createElement("path",{"d":"M407.82,500.83c1.28,16.68,9.43,32.5,11.61,48.86C415.07,546,409,542.29,408.19,538c-.9-4.64-3.78-10.72-4.26-15.41s2.81-10.42-.64-13.64c-1.68-1.57,2.79-1.13,1.15-2.74-3.69-3.59-4.6-9.12-4.83-14.25-.39-9.08.76-18.26-.91-27.19-1-5.51-3.09-10.76-4.76-16.11-1.94-6.23-3.34-12.61-4.74-19a133.12,133.12,0,0,1-3-17.26c-.43-5-.23-10.3,2-14.86s6.74-8.26,11.8-8.19c16.92.22,14,23.16,17.72,33.76,1.49,4.22,3.5,8.3,4.31,12.7a33.66,33.66,0,0,1,.48,5.22c-2.24,5.81-6.36,10.72-9,16.38-3.33,7.17-4.15,15.21-4.89,23.09C407.94,487.27,407.31,494.06,407.82,500.83Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":42}),React.createElement("path",{"d":"M418.82,422.85c1.49,4.22,3.5,8.3,4.31,12.7,1.35,7.37-.74,15.2,1.53,22.34a38.92,38.92,0,0,1,1.48,4.67c.39,2.27-.06,4.59-.06,6.9,0,3.72,1.17,7.32,2.21,10.89a194.63,194.63,0,0,1,6.95,37.16,46.59,46.59,0,0,0,1.59,10,33.21,33.21,0,0,1,1.08,3.38,17.48,17.48,0,0,1,.19,4.63c-.27,4.9-.82,9.82-.27,14.7s2.33,9.83,6,13.1c-3.28.71-6.75,1.42-9.95.37-4.5-1.47-7.2-6-9.49-10.12-2.9-5.26-13.92-10-15.06-15.91-.89-4.63-3.77-10.71-4.25-15.41s2.8-10.41-.65-13.63c-1.67-1.57,2.8-1.14,1.15-2.74-3.68-3.59-4.59-9.12-4.82-14.26-.39-9.07.75-18.25-.91-27.18-1-5.51-3.09-10.76-4.76-16.12-1.94-6.22-3.34-12.6-4.74-19a131.73,131.73,0,0,1-3-17.26c-.43-5-.24-10.31,2-14.87s6.75-8.25,11.8-8.19C418,389.3,415.1,412.25,418.82,422.85Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":43}),React.createElement("path",{"d":"M370.6,426.76c1.58,1.85,3.61,3.88,6,3.52a1.3,1.3,0,0,1-1.77.42,3.8,3.8,0,0,1-1.33-1.53l-3.42-5.77c-.45-.75-3.55-5.12-4.31-2.6C365.47,421.87,369.83,425.86,370.6,426.76Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":44}),React.createElement("path",{"d":"M368.76,441.15a7.62,7.62,0,0,0-2.23-5,12.5,12.5,0,0,0-4.13-2.49c-3.75-1.54-8.19-2.78-12.26-2.58,1.48,2.16,6.23,3.45,8.61,4.67Q363.81,438.36,368.76,441.15Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":45}),React.createElement("path",{"d":"M379.41,482.11c-.69,5.12-4.88,9-9.12,12s-9,5.58-11.77,9.92c-1.92,3-2.78,6.48-4.41,9.61-1.8,3.45-4.49,6.35-6.64,9.59s-3.83,7.11-3.17,10.95a1.29,1.29,0,0,0,.46.92,1.31,1.31,0,0,0,1.27-.14c4.36-2.28,6.08-7.49,7.91-12a138.65,138.65,0,0,1,6.48-13.32c1.08-2,2.27-4.18,4.28-5.29a37.55,37.55,0,0,1,4.22-1.47,14.19,14.19,0,0,0,5.21-4.09,34.34,34.34,0,0,0,8-23.31c-.06-1.79-.16-10.41-2.85-7.75S379.87,478.63,379.41,482.11Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":46}),React.createElement("path",{"d":"M386,285.74c8.6,3.75,16,12,15.73,21.35-.23,9.82-8.45,19.07-5.62,28.48,1.64,5.46,6.58,9.12,10.49,13.27,14.89,15.76,14.86,43.27-.08,59-5.72,6-13.07,10.27-19.12,16-21.33,20.1-22.24,54.87-10.82,81.86a133.14,133.14,0,0,1-26.62,3c-4.19,0-9.32-.71-10.84-4.62-1.4-3.61,1-8.49-1.76-11.16-1.3-1.25-3.25-1.42-5-1.71-11.26-1.82-20.5-10.81-24.72-21.4s-4-22.51-1.58-33.65c1.72-8.05,4.41-16.91.42-24.11-5-9.06-19.38-12.88-19.16-23.24.18-8.49,10.19-12.62,15.87-18.93,10.48-11.62,5.49-29.65,5.47-45.31,0-13.78,4.82-28,15.08-37.18C339,273.62,368.39,278.09,386,285.74Z","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":47}),React.createElement("g",{"opacity":"0.1","key":48},[React.createElement("path",{"d":"M308.12,401.78c-4.39-7.92-15.92-11.84-18.6-19.63a11.09,11.09,0,0,0-2.16,6.26c-.22,10.36,14.14,14.18,19.16,23.25a18.89,18.89,0,0,1,2,10.42C310.1,415.12,311.49,407.86,308.12,401.78Z","transform":"translate(-34.96 -80.93)","key":0}),React.createElement("path",{"d":"M397.26,322.75c1.8-5.25,4.41-10.55,4.54-16a15,15,0,0,0-.05-1.77C399.74,311,396.66,316.84,397.26,322.75Z","transform":"translate(-34.96 -80.93)","key":1}),React.createElement("path",{"d":"M309.84,350.72c3.44-10.87.47-24.35.46-36.41,0-1.46.06-2.93.17-4.39a57.74,57.74,0,0,0-1.78,14.26C308.71,332.79,310.22,342.13,309.84,350.72Z","transform":"translate(-34.96 -80.93)","key":2}),React.createElement("path",{"d":"M408.19,397.61c-5.72,6-13.07,10.27-19.12,16-10.8,10.17-16.35,24.1-17.74,38.87,2.58-11,7.79-21.13,16.14-29,6-5.7,13.4-9.95,19.12-16a42.49,42.49,0,0,0,11.15-27.06A40.61,40.61,0,0,1,408.19,397.61Z","transform":"translate(-34.96 -80.93)","key":3}),React.createElement("path",{"d":"M351.63,498.44c-4.19,0-9.32-.72-10.84-4.63-1.4-3.6,1-8.48-1.76-11.16-1.3-1.25-3.26-1.42-5-1.71-11.25-1.81-20.49-10.81-24.71-21.39-3.11-7.82-3.78-16.35-3-24.77-.08.33-.15.66-.22,1-2.38,11.14-2.63,23.07,1.58,33.66s13.46,19.58,24.71,21.39c1.78.29,3.74.47,5,1.71,2.79,2.68.36,7.56,1.76,11.16,1.52,3.91,6.65,4.68,10.84,4.63a133.23,133.23,0,0,0,26.62-3,89.38,89.38,0,0,1-3.23-8.93A132.74,132.74,0,0,1,351.63,498.44Z","transform":"translate(-34.96 -80.93)","key":4})]),React.createElement("path",{"d":"M384.38,454.83c2.47,1.86,5.15-5.23,3.62-7C387.59,448.29,384,454.57,384.38,454.83Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":49}),React.createElement("path",{"d":"M394.91,583.17c2.91-1,6-2,7.9-4.4,1.57-1.93,2.86-9.59-.46-5.92C399.53,576,398.2,580.15,394.91,583.17Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":50}),React.createElement("path",{"d":"M424.54,575.14c-.35,2.36-1,4.81-2.67,6.51-.31.32-1,.52-1.09.09a25.29,25.29,0,0,0,5.16-3.64c3.38-3.35,3.84-11.6-1.31-13.79C424.58,567.93,425.09,571.46,424.54,575.14Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":51}),React.createElement("path",{"d":"M460.11,560.27s-28.38-11.15-38.64-10,11.62,17.32,11.62,17.32l13.08,8.82s8-3,8.53-3.23S460.11,560.27,460.11,560.27Z","transform":"translate(-34.96 -80.93)","fill":"#454b69","key":52}),React.createElement("path",{"d":"M264.84,440.65s21.32-12.36,49.46,3,32.83,105.75,32.83,105.75S335.62,641.49,380,621c0,0,81-25.15,89.11-19.61,0,0,7.68,0-7.67,3.41S386.79,627,386.79,627s-19.17,6.7-27.29,0-31.13.86-34.12-45.2a801,801,0,0,0-10.66-86.56l-7.91-23.45Z","transform":"translate(-34.96 -80.93)","fill":"#565661","key":53}),React.createElement("path",{"d":"M262.28,583.07s9.38-93.38-6-127.07c-13.38-29.36,38.36-15.63,51.86-11.63a9.83,9.83,0,0,1,5.18,3.7c8,11.25,36.7,56.34,28.24,116.67,0,0-3.41,53.73,17.91,62.25l-65.69-21.16c-5.33-1.72-10.74-3.15-16.2-4.39C270.62,599.86,259.28,595.37,262.28,583.07Z","transform":"translate(-34.96 -80.93)","fill":"#fff","key":54}),React.createElement("polygon",{"points":"694.53 676.47 703.06 676.47 708.65 561.83 709.03 555.31 701.78 552.76 701.3 559.69 694.53 676.47","fill":"#565661","key":55}),React.createElement("polygon",{"points":"701.3 559.69 708.65 561.83 709.03 555.31 701.78 552.76 701.3 559.69","opacity":"0.1","key":56}),React.createElement("path",{"d":"M658.27,713.13a19.23,19.23,0,0,1-1.2,4.58,8.09,8.09,0,0,1-3.65,4.56,9.64,9.64,0,0,1-3.69.73c-4.71.28-9.69.21-13.74-2.19a25,25,0,0,1-4.71-3.93,214.9,214.9,0,0,1-24.72-29.4c-1.23-1.77-2.5-3.86-1.95-6a93.21,93.21,0,0,0,26.77-12.25,12.92,12.92,0,0,1,3.76-2,20.43,20.43,0,0,1,7.06-.26c2.27.37,2.37.44,3.24,3,1.44,4.33,1.2,9,2.82,13.33a41.3,41.3,0,0,0,3.74,6.84C656.18,697.13,659.39,705.38,658.27,713.13Z","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":57}),React.createElement("path",{"d":"M658.27,713.13a19.23,19.23,0,0,1-1.2,4.58,8.09,8.09,0,0,1-3.65,4.56,9.64,9.64,0,0,1-3.69.73c-4.71.28-9.69.21-13.74-2.19a25,25,0,0,1-4.71-3.93,214.9,214.9,0,0,1-24.72-29.4c-1.23-1.77-2.5-3.86-1.95-6a92.81,92.81,0,0,0,9.16-3.06l.15.11c3.07,2.19,5.3,5.33,7.47,8.41l7,9.85a29,29,0,0,0,4.39,5.3,29.38,29.38,0,0,0,6.79,4.08c3.29,1.59,6.58,3.18,10,4.46C651.78,711.52,655.52,711.87,658.27,713.13Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":58}),React.createElement("path",{"d":"M664.73,606.34a30.1,30.1,0,0,1-2.5,4.77A204.16,204.16,0,0,0,640.91,661c-1.38-.31-2.16,1.57-2.15,3s0,3.23-1.32,3.75c-.39.15-.83.15-1.21.32-.84.38-1.08,1.45-1.2,2.37l-1.18,8.66c-.41,3-.77,6.25.7,8.9a14.23,14.23,0,0,0,3.87,4l19.52,15.4c.8.63,1.79,1.3,2.75.95,2.19-.8.25-4.72,2-6.31,1.16-1.09,3-.27,4.61-.4,2.1-.16,3.69-2.09,4.22-4.12a19.59,19.59,0,0,0,.11-6.26,5.68,5.68,0,0,1,.32-2.81,6.82,6.82,0,0,1,2.39-2.29,25.66,25.66,0,0,0,10.51-21.64,12,12,0,0,1,.14-3.83,10.09,10.09,0,0,1,1.81-3.16c7.09-9.59,13-20,18.87-30.39,3.38-6,6.82-12.09,8-18.85a1.75,1.75,0,0,0-1.44-2.4,68,68,0,0,0-8.94-2.14c-9.19-1.86-18.06-4.73-27-7.49S667.42,599.12,664.73,606.34Z","transform":"translate(-34.96 -80.93)","fill":"#454b69","key":59}),React.createElement("polygon",{"points":"587.5 700.72 601.58 702.42 666.39 555.31 683.87 554.03 714.58 562.99 720.54 738.14 734.61 738.14 729.07 556.59 762.76 557.45 822.88 707.11 835.67 707.11 772.44 532.2 770.01 525.46 675.77 522.23 652.28 535.4 651.98 536.16 587.5 700.72","fill":"#565661","key":60}),React.createElement("path",{"d":"M686.94,617.09c20.25,6.1,41.27,12.76,41.27,12.76s19.17,6.69,27.29,0a12.27,12.27,0,0,1,3.39-1.87,16.7,16.7,0,0,1-3.39,1.87l51.9-16.73L805,606.39l-94.24-3.23-23.49,13.17Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":61}),React.createElement("path",{"d":"M782.79,588.06l-38.37-8.53s-91.68,17.06-98.5,23.88c0,0,73.34,14.92,81.44,20S783.65,634.11,782.79,588.06Z","transform":"translate(-34.96 -80.93)","fill":"#fff","key":62}),React.createElement("path",{"d":"M640.41,725.14c-2.31,4.4-8,5.64-13,5.71a54.89,54.89,0,0,1-20.32-3.63c-3.7-1.42-7.25-3.25-11.07-4.29-5.69-1.56-12-1.43-17-4.56a20,20,0,0,1-6.39-6.93c-.29-.49-.57-1-.83-1.52-2.39-4.65-3.5-10.06-2.17-15.08s6.16-10.55,11.76-10.47c6.65.1,14.58,3.25,21,4.88,8,2,16,4.31,23.07,8.54,5.92,3.56,11.15,8.67,13.94,14.91a25.27,25.27,0,0,1,1.32,3.72C641.59,719.3,641.79,722.51,640.41,725.14Z","transform":"translate(-34.96 -80.93)","fill":"#a26565","key":63}),React.createElement("path",{"d":"M640.41,725.14c-2.31,4.4-8,5.64-13,5.71a54.89,54.89,0,0,1-20.32-3.63c-3.7-1.42-7.25-3.25-11.07-4.29-5.69-1.56-12-1.43-17-4.56a20,20,0,0,1-6.39-6.93c-.29-.49-.57-1-.83-1.52,1,.08,1.92.18,2.42.23,6.14.59,12,2.83,17.86,4.52a100.32,100.32,0,0,0,25,3.9c6,.17,12.26-.27,17.5-3.2a45.91,45.91,0,0,1,4.86-2.67,25.27,25.27,0,0,1,1.32,3.72C641.59,719.3,641.79,722.51,640.41,725.14Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":64}),React.createElement("path",{"d":"M683.38,535c-13-2.13-26.24-2.65-39.42-3.17l-16.12-.64a7.31,7.31,0,0,0-3.39.41,22.09,22.09,0,0,0-2.65,2c-1.62,1.1-3.69,1.22-5.64,1.33A280.77,280.77,0,0,0,575,540.27c-7,1.43-14.27,3.3-19.53,8.13-5.56,5.11-8,12.9-8.19,20.44s1.79,14.95,3.88,22.19a101.09,101.09,0,0,1,4.37,26.86,50.25,50.25,0,0,0,.29,7.57,36.22,36.22,0,0,0,2.11,7l7.36,19.65c.65,1.72,1.29,3.43,2,5.11s1.39,3,2,4.58c.9,2.16,1.61,4.4,2.32,6.63l4.9,15.39.64,2c1.77,5.54,3.58,11.18,6.92,15.94s8.51,8.6,14.32,8.89a43.86,43.86,0,0,1,5.62.15,22.72,22.72,0,0,1,4.61,1.67,35.17,35.17,0,0,0,13.77,2.69c4.35,0,9.18-1.21,11.54-4.87,1.3-2,1.64-4.46,2-6.82.63-4.74,1.24-9.69-.37-14.19-1-2.69-2.68-5-3.84-7.65-1.62-3.61-2.15-7.6-3.2-11.41a43.58,43.58,0,0,0-13.3-21.16,208.58,208.58,0,0,1-5-27.38,24.09,24.09,0,0,0-1.21-6c-1.17-3-3.54-5.43-4.53-8.49-.93-2.84-.65-6.12-2.34-8.57,14.07,3.87,28,3,42.61,2.77a116.42,116.42,0,0,0,14-.8,44,44,0,0,1,6.56-.7c4.52,0,8.76,2,12.91,3.76,11.73,5,24.09,8.93,36.83,9.47,13.15.55,26.15-2.54,39-5.6,5.65-1.35,11.52-2.81,16-6.52s7-10.4,4.24-15.49c-2.1-3.83-6.45-5.71-10.51-7.31-11.24-4.44-22.54-8.77-33.37-14.14C713.87,556,701.5,538,683.38,535Z","transform":"translate(-34.96 -80.93)","fill":"#454b69","key":65}),React.createElement("path",{"d":"M660.2,489.76c-1.57,3.4-4.21,6.18-6.16,9.38a23.77,23.77,0,0,0-3,17.65,20.08,20.08,0,0,0,11.25,13.69,28.23,28.23,0,0,0,7.8,1.88c3.52.43,7.27.52,10.38-1.18A15.16,15.16,0,0,0,686,525.4c2.69-4.5,4.22-9.57,5.62-14.62,2.59-9.32,4.8-18.88,4.48-28.55-.11-3.33-.77-7.08-3.53-9a11.87,11.87,0,0,0-4.64-1.52l-13.19-2.36c-2.55-.46-7-2.33-9.21-.49s-2.38,7.28-2.76,9.83C662.17,482.46,661.8,486.29,660.2,489.76Z","transform":"translate(-34.96 -80.93)","fill":"#a1616a","key":66}),React.createElement("path",{"d":"M820.53,451.08,817.08,480a133,133,0,0,0-1.23,15.56c0,2.9.09,6.12-1.83,8.29a7.56,7.56,0,0,1-3.44,2.07c-4.19,1.3-8.76.14-12.76-1.65-2.34-1-4.73-2.45-5.79-4.78a11.88,11.88,0,0,1-.75-5.07c0-17.25,1.63-35.24,10.64-49.94a10.89,10.89,0,0,1,3.17-3.66c2.5-1.6,5.77-1.15,8.6-.28,1.74.53,6.44,1.12,7.55,2.67S820.77,449.09,820.53,451.08Z","transform":"translate(-34.96 -80.93)","fill":"#a1616a","key":67}),React.createElement("circle",{"cx":"694.04","cy":"229.57","r":"36","fill":"#a1616a","key":68}),React.createElement("path",{"d":"M719.37,364.15a18.57,18.57,0,0,1-2.23,8q27.57-4.2,55-9.36a25.83,25.83,0,0,1-12.76-15,42.36,42.36,0,0,1-1.62-10.69,123.57,123.57,0,0,1,.33-17.21c-6.4.67-12.46,3.07-18.56,5.13a183,183,0,0,1-18.69,5.23c-3.05.68-6.12,1.26-9.2,1.8-3.6.64-5.33.63-2.83,3.79C715.52,344.28,720.31,352.86,719.37,364.15Z","transform":"translate(-34.96 -80.93)","fill":"#a1616a","key":69}),React.createElement("path",{"d":"M730.43,359.34c-4.75.71-9.73,1.51-13.52,4.45a51,51,0,0,0-4.11,3.95c-7.53,7.31-18.16,10.25-27.3,15.41a12,12,0,0,0-3.88,3.05c-1,1.39-1.51,3.16-2.56,4.54-1.22,1.6-3.15,2.6-4.1,4.37s-.74,3.65-.84,5.53c-.23,4.13-1.79,8.05-3,12-5.55,18.91-2.51,40-10.91,57.86a8.13,8.13,0,0,0,4.42,4.62,25.1,25.1,0,0,0,6.56,1.41l18.61,2.31c2.66.33,5.48.64,7.91-.47a92.94,92.94,0,0,0-4.69,18.93,94.28,94.28,0,0,1-2.1,11.72c-2.56,8.8-9,16.13-16.63,21.14a6.15,6.15,0,0,0-2.35,2.17c-1,2,.48,4.24,1.53,6.2,3.05,5.68,2.63,12.5,2.59,18.94s.61,13.51,5.11,18.13c2.66,2.73,6.3,4.21,9.84,5.62l29.11,11.63a101.45,101.45,0,0,0,14.82,5c7.67,1.75,15.64,1.68,23.51,1.34q7.8-.33,15.58-1a12.12,12.12,0,0,0,5.89-1.55,11,11,0,0,0,3.45-4.68c4.05-8.81,5.41-19.09,11.69-26.47,4.31-5.07,11-9.12,11.49-15.75.23-3.3-1.24-6.51-1.26-9.82,0-4.07,2.13-7.94,2-12-.27-6.61-6.5-11.65-7.49-18.19-2.52-16.58,5.9-33.14,11.07-49.09.93-2.85,2.13-6,4.87-7.22s6.6-.58,7.58-3.28c2.47-6.78,3.06-14.73,2.74-21.94-.18-4.17-1.66-8.25-1.49-12.43.12-2.94,1.06-5.8,1.31-8.73.38-4.43-.79-8.83-2-13.11a20.54,20.54,0,0,0-1.56-4.42,21,21,0,0,0-2.6-3.57l-4.87-5.79c-2.28-2.71-4.69-5.52-8-6.89-1.07-2.65-4.49-4.48-6.94-5.94a71.12,71.12,0,0,0-7.64-3.75l-27.54-12.16a11.28,11.28,0,0,0-3.27-1.06,10.59,10.59,0,0,0-4.86,1C748.2,354.68,739.43,358,730.43,359.34Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":70}),React.createElement("path",{"d":"M701.26,316.76c-1.06-3.73-3.77-6.95-4.18-10.81-.37-3.43,1.14-6.75,2-10.09s.83-7.42-1.82-9.64c-.44-.38-1-.72-1.16-1.28-.32-1,.69-1.91,1-2.92.57-2-1.9-4.21-1-6.13.51-1.05,1.79-1.42,2.91-1.75,4.28-1.27,8.62-4.09,9.55-8.46,3.35,1.4,6.92-1.23,9.49-3.78s5.73-5.46,9.27-4.69l-.79,1.61a25.6,25.6,0,0,1,16.93-.19l-1.68,0a23.22,23.22,0,0,1,13.39,4.53c-.43,0-.47.64-.3,1,1.4,3.27,5,5,8.47,5.81,2.09.5,4.36.86,5.89,2.36s1.56,4.63-.46,5.35a52.6,52.6,0,0,1,11.61,6.3c1,.73,2.13,1.72,2,3a9.76,9.76,0,0,1-.62,1.87,6.47,6.47,0,0,0,.21,3.2l1.11,4.58c1.22,5.09,2.18,11.22-1.53,14.91a13.69,13.69,0,0,1-2.41,16.16,6.66,6.66,0,0,1-5,8.61c1.23,1.92.1,4.66-1.84,5.86s-4.38,1.21-6.64,1-4.55-.72-6.81-.38c-3.29.51-6.51,2.75-9.68,1.75a21.73,21.73,0,0,1-3.39-1.82c-2.22-1.19-4.8-1.46-7.26-2a33.54,33.54,0,0,1-11.73-5,13.75,13.75,0,0,1-5.39-6c-2.2-5.56,1.5-12.85-2.39-17.38-2.28-2.64-6.8-2.68-9.35-.42-1.27,1.13-1.44,3.51-2.76,4.36A17.45,17.45,0,0,1,701.26,316.76Z","transform":"translate(-34.96 -80.93)","fill":"#464353","key":71}),React.createElement("path",{"d":"M652.34,603.5a16.5,16.5,0,0,1-3.63-4,7.46,7.46,0,0,1-1.1-5.17,14.79,14.79,0,0,0,3.89,12.72c2.51,2.57,7.22,5.09,10.89,4.21C661.87,608.32,654.67,605.48,652.34,603.5Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":72}),React.createElement("path",{"d":"M850.16,442.65s-21.32-12.36-49.46,3-32.83,105.75-32.83,105.75S779.38,643.49,735,623c0,0-81-25.15-89.11-19.61,0,0-7.68,0,7.67,3.41S728.21,629,728.21,629s19.17,6.7,27.29,0,31.13.86,34.12-45.2a801,801,0,0,1,10.66-86.56l7.91-23.45Z","transform":"translate(-34.96 -80.93)","fill":"#565661","key":73}),React.createElement("path",{"d":"M852.72,585.07s-9.38-93.38,6-127.07c13.38-29.36-38.36-15.63-51.86-11.63a9.83,9.83,0,0,0-5.18,3.7c-8,11.25-36.7,56.34-28.24,116.67,0,0,3.41,53.73-17.91,62.25l65.69-21.16c5.33-1.72,10.74-3.15,16.2-4.39C844.38,601.86,855.72,597.37,852.72,585.07Z","transform":"translate(-34.96 -80.93)","fill":"#fff","key":74}),React.createElement("ellipse",{"cx":"989.97","cy":"670.07","rx":"97.44","ry":"15.65","fill":"#b9074e","opacity":"0.1","key":75}),React.createElement("rect",{"x":"986.83","y":"370.26","width":"6.27","height":"141.17","fill":"#535461","key":76}),React.createElement("path",{"d":"M1067.47,591.93l-.39,6.36-.56,9-.23,3.74-.55,9-.24,3.74-.56,9-6.32,102.07A17.3,17.3,0,0,1,1041.36,751h-32.87a17.28,17.28,0,0,1-17.24-16.22L984.91,632.7l-.55-9-.23-3.74-.57-9-.23-3.74-.55-9-.4-6.36a9,9,0,0,1,8.94-9.51h67.22A9,9,0,0,1,1067.47,591.93Z","transform":"translate(-34.96 -80.93)","fill":"#565661","key":77}),React.createElement("polygon",{"points":"1032.12 517.36 1031.56 526.33 948.38 526.33 947.82 517.36 1032.12 517.36","fill":"#9d9cb5","key":78}),React.createElement("polygon",{"points":"1031.33 530.08 1030.78 539.06 949.17 539.06 948.61 530.08 1031.33 530.08","fill":"#9d9cb5","key":79}),React.createElement("polygon",{"points":"1030.54 542.8 1029.98 551.77 949.96 551.77 949.4 542.8 1030.54 542.8","fill":"#9d9cb5","key":80}),React.createElement("path",{"d":"M973.2,504.1c36.52,26.42,51.73,67.74,51.73,67.74s-44-1.51-80.53-27.93-51.72-67.73-51.72-67.73S936.69,477.69,973.2,504.1Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":81}),React.createElement("path",{"d":"M892.68,476.18s45.67,25.35,60.33,46.34,71.92,49.32,71.92,49.32","transform":"translate(-34.96 -80.93)","fill":"none","stroke":"#535461","strokeMiterlimit":"10","strokeWidth":"2","key":82}),React.createElement("path",{"d":"M996.77,450.88c19.88,14.37,28.16,36.87,28.16,36.87s-24-.83-43.83-15.2S953,435.68,953,435.68,976.9,436.5,996.77,450.88Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":83}),React.createElement("path",{"d":"M953,435.68s24.86,13.8,32.83,25.22,39.15,26.85,39.15,26.85","transform":"translate(-34.96 -80.93)","fill":"none","stroke":"#535461","strokeMiterlimit":"10","strokeWidth":"2","key":84}),React.createElement("path",{"d":"M1053.81,486.6c-22.83,25.09-27.66,57.88-27.66,57.88s32.19-7.9,55-33,27.66-57.88,27.66-57.88S1076.64,461.51,1053.81,486.6Z","transform":"translate(-34.96 -80.93)","fill":"#b9074e","key":85}),React.createElement("path",{"d":"M1108.83,453.61s-29.74,25.72-37.3,43.44-45.38,47.43-45.38,47.43","transform":"translate(-34.96 -80.93)","fill":"none","stroke":"#535461","strokeMiterlimit":"10","strokeWidth":"2","key":86}),React.createElement("path",{"d":"M591.94,426.2v2.28H524.33v-1.85a22.72,22.72,0,0,0,5.22-2.78,22.21,22.21,0,0,0,9.28-18.06,21.92,21.92,0,0,0-.69-5.47,22.23,22.23,0,0,0-12.28-14.73h65.62a22.23,22.23,0,0,0-12.28,14.73,21.92,21.92,0,0,0-.68,5.47,22.2,22.2,0,0,0,9.27,18.06A22.87,22.87,0,0,0,591.94,426.2Z","transform":"translate(-34.96 -80.93)","fill":"#dfe6f5","key":87}),React.createElement("path",{"d":"M591.48,385.59a22.23,22.23,0,0,0-12.28,14.73H538.14a22.23,22.23,0,0,0-12.28-14.73Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":88}),React.createElement("path",{"d":"M446.92,373.94v12.84c0,7.08,5.18,12.83,11.58,12.83H657.41c6.4,0,11.59-5.75,11.59-12.83V373.94Z","transform":"translate(-34.96 -80.93)","fill":"#dfe6f5","key":89}),React.createElement("path",{"d":"M591.94,426.2v2.28H524.33v-1.85a22.72,22.72,0,0,0,5.22-2.78h58.24A22.87,22.87,0,0,0,591.94,426.2Z","transform":"translate(-34.96 -80.93)","opacity":"0.1","key":90}),React.createElement("rect",{"x":"467.03","y":"343.63","width":"112.29","height":"6.77","rx":"3.39","fill":"#dfe6f5","key":91}),React.createElement("path",{"d":"M669,233.31a11.58,11.58,0,0,0-11.59-11.58H458.5a11.57,11.57,0,0,0-11.58,11.58V376.44H669Z","transform":"translate(-34.96 -80.93)","fill":"#474157","key":92}),React.createElement("path",{"d":"M662.94,238.48v123a5.7,5.7,0,0,1-5.7,5.71H458.68a5.7,5.7,0,0,1-5.7-5.71v-123a5.62,5.62,0,0,1,.76-2.85,5.7,5.7,0,0,1,4.94-2.85H657.24A5.7,5.7,0,0,1,662.94,238.48Z","transform":"translate(-34.96 -80.93)","fill":"#4c4c78","key":93}),React.createElement("circle",{"cx":"523","cy":"146.32","r":"2.67","fill":"#fff","key":94}),React.createElement("circle",{"cx":"523","cy":"306.38","r":"6.59","fill":"#fff","key":95}),React.createElement("path",{"d":"M662.94,238.48H453a5.7,5.7,0,0,1,5.7-5.7H657.24A5.7,5.7,0,0,1,662.94,238.48Z","transform":"translate(-34.96 -80.93)","fill":"#c8cad7","key":96}),React.createElement("circle",{"cx":"423.72","cy":"154.7","r":"1.43","fill":"#ededf4","key":97}),React.createElement("circle",{"cx":"428","cy":"154.7","r":"1.43","fill":"#ededf4","key":98}),React.createElement("circle",{"cx":"432.28","cy":"154.7","r":"1.43","fill":"#ededf4","key":99})]);
}

HomeHero.defaultProps = {"id":"fc836297-f37e-43a2-86b4-5406f4a63596","data-name":"Layer 1","width":"1130.08","height":"738.14","viewBox":"0 0 1130.08 738.14"};

module.exports = HomeHero;

HomeHero.default = HomeHero;


/***/ }),

/***/ 1528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function TeamProject (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M371.238,218.49521h-52.3999a19.01722,19.01722,0,0,0-19,19v56.81c-.66992-.04-1.33985-.1-2-.18a66.99888,66.99888,0,1,1,73.10009-77.63C371.0481,217.15518,371.1482,217.82523,371.238,218.49521Z","transform":"translate(-189.16186 -160.49521)","fill":"#f2f2f2","key":0}),React.createElement("path",{"d":"M989.83814,216.49521h-671a21.023,21.023,0,0,0-21,21v354a21.023,21.023,0,0,0,21,21h671a21.023,21.023,0,0,0,21-21v-354A21.023,21.023,0,0,0,989.83814,216.49521Zm19,375a19.01722,19.01722,0,0,1-19,19h-671a19.01722,19.01722,0,0,1-19-19v-354a19.01722,19.01722,0,0,1,19-19h671a19.01722,19.01722,0,0,1,19,19Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":1}),React.createElement("path",{"d":"M956.83814,273.86484h-605a1,1,0,0,1,0-2h605a1,1,0,0,1,0,2Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":2}),React.createElement("path",{"d":"M522.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,522.83814,569.49521Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":3}),React.createElement("path",{"d":"M673.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,673.83814,569.49521Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":4}),React.createElement("path",{"d":"M824.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,824.83814,569.49521Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":5}),React.createElement("path",{"d":"M425.75379,377.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V329.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,425.75379,377.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":6}),React.createElement("path",{"d":"M477.75379,500.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V452.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,477.75379,500.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":7}),React.createElement("path",{"d":"M595.75391,403.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V355.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,595.75391,403.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":8}),React.createElement("path",{"d":"M748.75391,356.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V308.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,748.75391,356.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":9}),React.createElement("path",{"d":"M889.75391,356.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V308.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,889.75391,356.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":10}),React.createElement("path",{"d":"M954.75391,368.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V320.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,954.75391,368.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#e6e6e6","key":11}),React.createElement("path",{"d":"M925.75391,445.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V397.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,925.75391,445.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#e6e6e6","key":12}),React.createElement("path",{"d":"M801.75391,429.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V381.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,801.75391,429.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#ff6584","key":13}),React.createElement("path",{"d":"M730.75391,445.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V397.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,730.75391,445.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#e6e6e6","key":14}),React.createElement("path",{"d":"M577.75391,513.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V465.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,577.75391,513.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#e6e6e6","key":15}),React.createElement("path",{"d":"M392.75379,456.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V408.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,392.75379,456.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#ff6584","key":16}),React.createElement("path",{"d":"M495.75379,377.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V329.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,495.75379,377.08261Z","transform":"translate(-189.16186 -160.49521)","fill":"#e6e6e6","key":17}),React.createElement("path",{"d":"M465.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":18}),React.createElement("path",{"d":"M626.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":19}),React.createElement("path",{"d":"M777.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":20}),React.createElement("path",{"d":"M918.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":21}),React.createElement("path",{"d":"M338.17107,550.38656A10.05577,10.05577,0,0,1,329.471,537.6561L303.83814,513.795l13.55277-3.43814,25.20573,20.44382a10.11027,10.11027,0,0,1-4.42557,19.58585Z","transform":"translate(-189.16186 -160.49521)","fill":"#ffb8b8","key":22}),React.createElement("polygon",{"points":"184.404 566.253 196.664 566.253 202.496 518.965 184.402 518.965 184.404 566.253","fill":"#ffb8b8","key":23}),React.createElement("path",{"d":"M370.93892,723.24476h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H385.82577a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,370.93892,723.24476Z","transform":"translate(591.28005 1300.86337) rotate(179.99738)","fill":"#2f2e41","key":24}),React.createElement("polygon",{"points":"100.345 557.401 112.193 560.555 129.994 516.359 112.509 511.705 100.345 557.401","fill":"#ffb8b8","key":25}),React.createElement("path",{"d":"M285.30672,718.54064h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H300.19358a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,285.30672,718.54064Z","transform":"matrix(-0.96635, -0.25722, 0.25722, -0.96635, 222.9961, 1345.38778)","fill":"#2f2e41","key":26}),React.createElement("path",{"d":"M389.12281,717.795H370.41553a4.72981,4.72981,0,0,1-4.72607-4.293L354.333,595.5704a3.74767,3.74767,0,0,0-7.321-.71484L314.03858,705.05478a4.74216,4.74216,0,0,1-5.7,3.24609l-17.40308-4.35156a4.74747,4.74747,0,0,1-3.44727-5.78711c.28418-1.11035,28.41065-111.02832,28.65625-112.1582,6.37281-46.96778,13.99707-59.55371,18.093-66.31445.33911-.55958.65064-1.07422.93115-1.56055.35108-.6084,2.51245-6.64453,3.88355-10.56445a4.79,4.79,0,0,1,2.43506-2.97754c17.21069-8.80176,37.34741-2.709,43.10913-.63184a4.6821,4.6821,0,0,1,2.33813,1.81543c17.28467,26.07129,8.80225,177.49121,6.92627,207.581A4.75127,4.75127,0,0,1,389.12281,717.795Z","transform":"translate(-189.16186 -160.49521)","fill":"#2f2e41","key":27}),React.createElement("circle",{"cx":"151.68415","cy":"234.02423","r":"24.56103","fill":"#ffb8b8","key":28}),React.createElement("path",{"d":"M338.24365,512.3331l-.17651-.1709c-.33105-.32031-33.05566-32.37988-28.82056-62.02441,1.81128-12.67969,12.07032-20.78125,29.66773-23.43067a27.13473,27.13473,0,0,1,29.99976,19.1211l17.3999,59.48437Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":29}),React.createElement("path",{"d":"M321.49463,535.13583l-23.31836-23.17089a13.13671,13.13671,0,0,1-3.47973-12.39161l11.28857-45.91894A10.35411,10.35411,0,0,1,319.165,446.254a10.41072,10.41072,0,0,1,6.80908,12.79394L314.0896,499.44443l19.21826,20.63672Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":30}),React.createElement("path",{"d":"M446.56619,456.05763a10.05577,10.05577,0,0,1-14.88374,4.02868L400.553,476.22078l1.37589-13.70578,27.59693-17.07886a10.11028,10.11028,0,0,1,17.04041,10.62149Z","transform":"translate(-189.16186 -160.49521)","fill":"#ffb8b8","key":31}),React.createElement("path",{"d":"M428.283,466.25982l-30.34625,13.11355a12.80885,12.80885,0,0,1-12.477-1.33846l-38.58893-27.64906A10.355,10.355,0,0,1,344.89728,435.4a10.41025,10.41025,0,0,1,14.40861-1.568l33.08845,26.042,26.30022-10.17517Z","transform":"translate(-189.16186 -160.49521)","fill":"#ccc","key":32}),React.createElement("path",{"d":"M344.91778,402.38974c3.03-3.79642,8.69082-4.00051,12.85285-6.50478,5.45181-3.28033,7.70574-10.61077,5.94888-16.726s-6.93808-10.881-12.8784-13.16029-12.5494-2.30748-18.81589-1.20568c-9.33021,1.64048-18.51612,5.99512-24.20655,13.56895s-7.13858,18.66583-1.98149,26.61243c2.37026,3.65236,6.02921,6.66714,6.97549,10.91712,1.2423,5.57954-2.6714,10.96083-6.86421,14.846-4.77673,4.42628-10.257,8.1334-14.44192,13.12294s-6.97564,11.80621-5.066,18.03215c1.6,5.21635,6.25591,9.05948,11.36143,10.98408s10.66607,2.2027,16.12124,2.30939c5.29718.10361,10.92363-.02522,15.386-2.88141,4.77715-3.05764,7.32781-8.8583,7.51626-14.52705s-1.70587-11.22252-4.24464-16.2945c-1.51323-3.02314-3.27267-5.95256-4.27818-9.18027s-1.1797-6.89016.43058-9.86274c1.69267-3.12465,5.1171-5.009,8.6041-5.69419.18117-.0356.37286-.06739.57335-.0957a7.39847,7.39847,0,0,0,6.33328-8.62766C343.8467,405.80819,343.881,403.68869,344.91778,402.38974Z","transform":"translate(-189.16186 -160.49521)","fill":"#2f2e41","key":33}),React.createElement("polygon",{"points":"483.229 567.3 470.969 567.3 465.137 520.012 483.231 520.013 483.229 567.3","fill":"#a0616a","key":34}),React.createElement("path",{"d":"M462.212,563.79684h23.64386a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H447.32509a0,0,0,0,1,0,0v0A14.88687,14.88687,0,0,1,462.212,563.79684Z","fill":"#2f2e41","key":35}),React.createElement("polygon",{"points":"572.184 553.413 561.033 558.506 536.079 517.917 552.538 510.399 572.184 553.413","fill":"#a0616a","key":36}),React.createElement("path",{"d":"M743.47033,716.96167h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H728.58348a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,743.47033,716.96167Z","transform":"translate(-422.52781 215.68843) rotate(-24.54855)","fill":"#2f2e41","key":37}),React.createElement("path",{"d":"M725.64338,568.3522a10.05579,10.05579,0,0,0,.80112-15.39851l14.4116-32.69992-18.30864,3.10281-10.87858,30.57671a10.11028,10.11028,0,0,0,13.9745,14.41891Z","transform":"translate(-189.16186 -160.49521)","fill":"#a0616a","key":38}),React.createElement("path",{"d":"M671.6094,715.32658H659.89748a4.51686,4.51686,0,0,1-4.48828-4.17383l-6.387-170.5586a4.49977,4.49977,0,0,1,4.92529-4.80468l67.73487,7.19336a4.5013,4.5013,0,0,1,4.06225,4.39355l1.41943,75.23535a3.49205,3.49205,0,0,0,.23389,1.19336l27.78516,72.05274a4.49892,4.49892,0,0,1-2.64307,5.84082l-11.86841,4.373a4.50108,4.50108,0,0,1-5.55737-2.16406l-34.13257-66.36914a4.475,4.475,0,0,1-.4043-1.14258l-5.83081-28.09375a3.49992,3.49992,0,0,0-6.904.3125L676.08034,711.33829A4.499,4.499,0,0,1,671.6094,715.32658Z","transform":"translate(-189.16186 -160.49521)","fill":"#2f2e41","key":39}),React.createElement("circle",{"cx":"488.27943","cy":"222.17782","r":"24.56103","fill":"#a0616a","key":40}),React.createElement("path",{"d":"M694.28491,556.18955a87.66432,87.66432,0,0,1-46.8728-14.19825l-.239-.165.02466-.28955,9.395-109.416a15.4205,15.4205,0,0,1,14.59887-14.06153c12.176-.55957,28.531.146,37.28589,6.66651,13.23071,9.85449,19.60767,24.69385,17.49561,40.7124-4.38013,33.21875.58178,78.0293,1.16186,83.0293l.042.36035-.32959.15137A77.26611,77.26611,0,0,1,694.28491,556.18955Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":41}),React.createElement("path",{"d":"M727.02173,548.65292a5.007,5.007,0,0,1-3.68066-1.62207l-5.37256-5.86132a5.02581,5.02581,0,0,1-1.10913-4.79493l12.25073-41.46386-18.63989-39.14356a8.8323,8.8323,0,0,1-.60376-5.87939,8.809,8.809,0,0,1,16.31323-2.084l25.29468,41.042a11.95092,11.95092,0,0,1,.72,11.19824l-20.60986,45.665a4.98754,4.98754,0,0,1-3.76636,2.87988A5.05373,5.05373,0,0,1,727.02173,548.65292Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":42}),React.createElement("path",{"d":"M553.89965,469.44778a10.05577,10.05577,0,0,0,14.99854-3.57767l35.438,4.59612L596.192,453.77776l-32.404-1.806a10.11028,10.11028,0,0,0-9.88836,17.476Z","transform":"translate(-189.16186 -160.49521)","fill":"#a0616a","key":43}),React.createElement("path",{"d":"M632.01123,478.5621a13.42535,13.42535,0,0,1-1.84472-.12744l-55.751-7.73242a5.54112,5.54112,0,0,1-4.25073-3.11133,5.65746,5.65746,0,0,1-.31787-.8291h-.00025a5.56408,5.56408,0,0,1,.575-4.43164l4.61353-7.64893a5.58411,5.58411,0,0,1,4.75586-2.686h.00757l48.59594.05566,36.29395-32.51709a9.86788,9.86788,0,0,1,6.10718-2.49951,9.83491,9.83491,0,0,1,7.37256,16.81543L641.95313,474.128A13.364,13.364,0,0,1,632.01123,478.5621Z","transform":"translate(-189.16186 -160.49521)","fill":"#b9074e","key":44}),React.createElement("path",{"d":"M680.2335,404.52319c2.2445-5.19457,4.14379-12.11253-.16123-15.78514-2.49712-2.13029-6.09385-2.13469-9.36546-2.39972-9.21732-.74668-18.70553-4.98771-23.21077-13.06356s-1.98923-20.08442,6.51023-23.728c5.72923-2.456,12.29743-.78291,18.29443.91767l18.0058,5.10593c5.35006,1.51712,10.96737,3.19025,14.819,7.20149,6.14268,6.39729,5.6835,17.21166.80459,24.618s-12.22635,15.13079-20.63767,17.94281Z","transform":"translate(-189.16186 -160.49521)","fill":"#2f2e41","key":45}),React.createElement("path",{"d":"M928.64656,739.50479h-738.294a1.19069,1.19069,0,1,1,0-2.38137h738.294a1.19069,1.19069,0,1,1,0,2.38137Z","transform":"translate(-189.16186 -160.49521)","fill":"#3f3d56","key":46})]);
}

TeamProject.defaultProps = {"id":"afc98551-3d88-4acb-87ed-36f06011ac7a","data-name":"Layer 1","width":"821.67627","height":"579.00958","viewBox":"0 0 821.67627 579.00958"};

module.exports = TeamProject;

TeamProject.default = TeamProject;


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

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,708,920], () => (__webpack_exec__(3050)));
module.exports = __webpack_exports__;

})();