(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
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

/***/ 2631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(1708);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Projects/FormationsList/Formation.js







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
/* harmony default export */ const FormationsList_Formation = (Formation);

;// CONCATENATED MODULE: ./components/Projects/searchedTags.js
const TAGS = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Ruby",
    "Rails",
    "Php",
    "Vue",
    "Node js",
    "Express",
    "Python",
    "Go",
    "Perl", 
];

;// CONCATENATED MODULE: ./components/Projects/FormationsList/FormationsList.js





const FormationsList = ({ formations  })=>{
    // const [formations, setFormations] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const fetchFormations = async () => {
    //   // let URL = "http://localhost:4000/home/index_formations";
    //   let URL = "http://localhost:3002/formations";
    //   try {
    //     const res = await fetch(URL);
    //     const formations = await res.json();
    //     setFormations(formations);
    //     setLoading(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // useEffect(() => {
    //   fetchFormations();
    //   // console.log("FormationsList", formations);
    // }, []);
    // For Filtering Options
    const [isCurrent, setIsCurrent] = external_react_default().useState({
        isToutesCurrent: true,
        isGratuiitesCurrent: false,
        isPremiumCurrent: false
    });
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const { 0: tag1 , 1: setTag  } = (0,external_react_.useState)("All");
    const getToutesValue = ()=>{
        const value = "Toutes";
        setSearchTerm(value);
    };
    const getGratuitesValue = ()=>{
        const value = "Gratuites";
        setSearchTerm(value);
    };
    const getPremiumValue = ()=>{
        const value = "Premium";
        setSearchTerm(value);
    };
    const getTechnologiesValue = ()=>{
        const value = "All";
        setTag(value);
    };
    const currentCSSStyles = "text-white bg-dark-pink-400";
    const normalStyle = "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-24 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2",
                children: "Les Formations"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sticky top-0 grid grid-cols-2 place-content-center space-x-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getToutesValue();
                            setIsCurrent({
                                isToutesCurrent: true,
                                isGratuiitesCurrent: false,
                                isPremiumCurrent: false
                            });
                        },
                        className: `${isCurrent.isToutesCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Toutes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getGratuitesValue();
                            setIsCurrent({
                                isToutesCurrent: false,
                                isGratuiitesCurrent: true,
                                isPremiumCurrent: false
                            });
                        },
                        className: `${isCurrent.isGratuiitesCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Gratuites"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getPremiumValue();
                            setIsCurrent({
                                isToutesCurrent: false,
                                isGratuiitesCurrent: false,
                                isPremiumCurrent: true
                            });
                        },
                        className: `${isCurrent.isPremiumCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Premium"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row col-span-2 place-self-center p-1 rounded mx-2 cursor-pointer my-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                onClick: ()=>getTechnologiesValue()
                                ,
                                className: "my-auto",
                                children: "Technologie:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " mx-2 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block text-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        value: tag1,
                                        onChange: (e)=>setTag(e.target.value)
                                        ,
                                        className: "block bg-white border border-black-400 hover:border-gray-700 px-2 py-1 rounded focus:shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                className: "cursor-pointer text-grey-100 text-italic",
                                                children: "All"
                                            }),
                                            TAGS.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                    className: "cursor-pointer",
                                                    children: [
                                                        " ",
                                                        tag,
                                                        " "
                                                    ]
                                                })
                                            )
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: formations.filter((formation)=>{
                    if (searchTerm === "") {
                        return formation;
                    }
                    if (searchTerm === "Toutes") {
                        return formation.showAll;
                    }
                    if (searchTerm === "Gratuites") {
                        return formation.isFree;
                    }
                    if (searchTerm === "Premium") {
                        return !formation.isFree;
                    }
                }).filter((formation)=>{
                    if (tag1 === "All") {
                        return formation;
                    }
                    if (formation.technologies.toLowerCase().trim().includes(tag1.toLowerCase().trim())) {
                        return formation;
                    }
                }).map((formation)=>/*#__PURE__*/ jsx_runtime_.jsx(FormationsList_Formation, {
                        id: formation.id,
                        imageSrc: formation.imageSrc,
                        title: formation.title,
                        lessons: formation.lessons,
                        duration: formation.duration,
                        slug: formation.slug,
                        isFree: formation.isFree,
                        price: formation.price,
                        showAll: formation.showAll,
                        technologies: formation.technologies
                    }, formation.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const FormationsList_FormationsList = (FormationsList);

// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./public/svg/teamWebsite.svg
var teamWebsite = __webpack_require__(6966);
var teamWebsite_default = /*#__PURE__*/__webpack_require__.n(teamWebsite);
;// CONCATENATED MODULE: ./components/Projects/Hero.js






const Hero = ()=>{
    return(// <div className="flex flex-col md:flex-row justify-between bg-back-pink-500 px-5 py-6 md:pb-20 rounded-xl">
    //   <div className="hidden lg:block">
    //     <HeroImage
    //       className="w-1/2 ml-20 object-cover"
    //       style={{ width: "70%", height: "inherit" }}
    //     />
    //   </div>
    //   <div className="md:mr-20"></div>
    //   <div className="flex flex-col md:text-right lg:absolute md:z-20 md:mt-14">
    //     <h1 className="font-bold text-4xl md:text-6xl text-dark-pink-500 w-full md:mr-20">
    //       Bienvenu(e)
    //     </h1>
    //     <p className="text-md font-semibold my-4">
    //   dans le manoir d’apprentissage de la conception des meilleures idées
    //   de startup. Vous apprendrez à coder, comprendre la logique, financer
    //   votre entreprise et lancer votre startup.
    //     </p>
    //   </div>
    // </div>
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row md:my-2 mx-2 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-auto md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx((teamWebsite_default()), {
                    style: {
                        width: "90%",
                        height: "inherit"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-auto md:w-1/2 flex flex-col",
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "font-bold text-4xl md:text-6xl text-dark-pink-500 w-full md:mr-20",
                        children: [
                            "Bienvenu(e)",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-md font-semibold my-4",
                        children: "dans le manoir d’apprentissage de la conception des meilleures id\xe9es de startup. Vous apprendrez \xe0 coder, comprendre la logique, financer votre entreprise et lancer votre startup."
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Projects_Hero = (Hero);

;// CONCATENATED MODULE: ./components/Projects/ProjectALaUne/ProjectALaUne.js



const ProjectALaUne = ()=>{
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
    // fetchBusinessPlans();
    // console.log("BusinessPlansList", businessPlans);
    }, []);
    // console.log("Project", businessPlans[0]);
    const project = {
        id: 1,
        slug: "amazon-clone",
        imageSrc: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        title: "Amazon Clone",
        lessons: 13,
        duration: "10h 30min",
        technologies: "HTML, CSS, JavaScript, React",
        note: 4,
        isFree: true,
        price: 0,
        showAll: true,
        introVideo: "https://www.youtube.com/watch?v=__IL2nMzUEw",
        details: {
            courseDescription: "La population est jeune passionn\xe9e et talentueuse, tout est \xe0 construire. Vous trouverez ici des business plan cl\xe9 en main qui vous permettra de contribuer \xe0 l’essor \xe9conomique de ce continent.",
            audience: "La population est jeune passionn\xe9e et talentueuse, tout est \xe0 construire. Vous trouverez ici des business plan cl\xe9 en main qui vous permettra de contribuer \xe0 l’essor \xe9conomique de ce continent. Vous aurez toutes les informations n\xe9cessaires pour l’impl\xe9mentation de chacun des Business plan, de l’offre financi\xe8re, du plan de d\xe9pense, des ressources humaines, des contacts des partenariats.",
            ceQueVousAllezApprendre: "La population est jeune passionn\xe9e et talentueuse, tout est \xe0 construire. Vous trouverez ici des business plan cl\xe9 en main qui vous permettra de contribuer \xe0 l’essor \xe9conomique de ce continent. Vous aurez toutes les informations n\xe9cessaires pour l’impl\xe9mentation de chacun des Business plan, de l’offre financi\xe8re, du plan de d\xe9pense.",
            prerequis: "La population est jeune passionn\xe9e et talentueuse, tout est \xe0 construire. Vous trouverez ici des business plan cl\xe9 en main qui vous permettra de contribuer \xe0 l’essor \xe9conomique de ce continent. Vous aurez toutes les informations n\xe9cessaires"
        },
        lessonsList: [
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            },
            {
                topic: "What is Reactjs?",
                duration: "01:30"
            }, 
        ],
        reviews: [
            {
                userEmail: "kenn@gmail.com",
                userName: "John Doe",
                userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
                comment: "Un Cours tr\xe8s interessant pour les Beginners, les d\xe9butants se retrouvent facilement avec leur mani\xe8re d'expliquer les Concepts"
            },
            {
                userEmail: "kenn@gmail.com",
                userName: "John Doe",
                userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
                comment: "Un Cours tr\xe8s interessant pour les Beginners, les d\xe9butants se retrouvent facilement avec leur mani\xe8re d'expliquer les Concepts"
            },
            {
                userEmail: "kenn@gmail.com",
                userName: "John Doe",
                userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
                comment: "Un Cours tr\xe8s interessant pour les Beginners, les d\xe9butants se retrouvent facilement avec leur mani\xe8re d'expliquer les Concepts"
            },
            {
                userEmail: "kenn@gmail.com",
                userName: "John Doe",
                userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
                comment: "Un Cours tr\xe8s interessant pour les Beginners, les d\xe9butants se retrouvent facilement avec leur mani\xe8re d'expliquer les Concepts"
            },
            {
                userEmail: "kenn@gmail.com",
                userName: "John Doe",
                userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
                comment: "Un Cours tr\xe8s interessant pour les Beginners, les d\xe9butants se retrouvent facilement avec leur mani\xe8re d'expliquer les Concepts"
            }, 
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col md:flex-row bg-white shadow rounded-xl my-3 md:my-5 mx-3 md:mx-auto hover:shadow-md",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-3/6 md:w-3/6 my-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: project.imageSrc,
                        alt: "Picture of the training",
                        width: 250,
                        height: 100,
                        className: "md:h-full rounded-l-xl w-full object-cover"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center text-gray-900 h-3/6 md:h-full md:w-3/6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: project.slug,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-md md:text-xl text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline",
                                children: project.title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col mx-3 md:mx-4 my-2 md:my-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-sm md:text-md font-semibold",
                                    children: "D\xe9tails:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-xs md:text-sm text-justify",
                                    children: [
                                        " ",
                                        project.details.courseDescription.substring(0, 500),
                                        "...",
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-light-pink-500 mx-auto my-2 md:my-1 p-2 md:p-2 text-white font-semibold rounded md:rounded-sm text-sm transform transition duration-500 hover:scale-110",
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
            ]
        })
    }));
};
/* harmony default export */ const ProjectALaUne_ProjectALaUne = (ProjectALaUne);

;// CONCATENATED MODULE: ./components/Projects/ProjectALaUne/ProjectALaUneBanner.js



// import TeamProject from "-!svg-react-loader!../../../public/svg/teamProject.svg";
const ProjectALaUneBanner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 md:my-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2",
                children: "Project \xe0 la Une!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col md:flex-row justify-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:w-3/4 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectALaUne_ProjectALaUne, {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
            })
        ]
    }));
};
/* harmony default export */ const ProjectALaUne_ProjectALaUneBanner = (ProjectALaUneBanner);

;// CONCATENATED MODULE: ./components/Projects/ProjectsList/Project.js







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
/* harmony default export */ const ProjectsList_Project = (Project);

;// CONCATENATED MODULE: ./components/Projects/ProjectsList/ProjectsList.js






const ProjectsList = ({ projects  })=>{
    // For Filtering Options
    const [isCurrent, setIsCurrent] = external_react_default().useState({
        isToutesCurrent: true,
        isGratuiitesCurrent: false,
        isPremiumCurrent: false
    });
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const { 0: tag1 , 1: setTag  } = (0,external_react_.useState)("All");
    const getToutesValue = ()=>{
        const value = "Toutes";
        setSearchTerm(value);
    };
    const getGratuitesValue = ()=>{
        const value = "Gratuites";
        setSearchTerm(value);
    };
    const getPremiumValue = ()=>{
        const value = "Premium";
        setSearchTerm(value);
    };
    const getTechnologiesValue = ()=>{
        const value = "All";
        setTag(value);
    };
    const currentCSSStyles = "text-white bg-dark-pink-400";
    const normalStyle = "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 md:mt-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2",
                children: "Projects Premium"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sticky top-0 grid grid-cols-2 place-content-center space-x-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getToutesValue();
                            setIsCurrent({
                                isToutesCurrent: true,
                                isGratuiitesCurrent: false,
                                isPremiumCurrent: false
                            });
                        },
                        className: `${isCurrent.isToutesCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Toutes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getGratuitesValue();
                            setIsCurrent({
                                isToutesCurrent: false,
                                isGratuiitesCurrent: true,
                                isPremiumCurrent: false
                            });
                        },
                        className: `${isCurrent.isGratuiitesCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Gratuites"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        onClick: ()=>{
                            getPremiumValue();
                            setIsCurrent({
                                isToutesCurrent: false,
                                isGratuiitesCurrent: false,
                                isPremiumCurrent: true
                            });
                        },
                        className: `${isCurrent.isPremiumCurrent ? currentCSSStyles : ""} ${normalStyle}`,
                        children: "Premium"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row col-span-2 place-self-center p-1 rounded mx-2 cursor-pointer my-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                onClick: ()=>getTechnologiesValue()
                                ,
                                className: "my-auto",
                                children: "Technologie:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " mx-2 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block text-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        value: tag1,
                                        onChange: (e)=>setTag(e.target.value)
                                        ,
                                        className: "block bg-white border border-black-400 hover:border-gray-700 px-2 py-1 rounded focus:shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                className: "cursor-pointer text-grey-100 text-italic",
                                                children: "All"
                                            }),
                                            TAGS.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                    className: "cursor-pointer",
                                                    children: [
                                                        " ",
                                                        tag,
                                                        " "
                                                    ]
                                                })
                                            )
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3",
                children: projects.filter((project)=>{
                    if (searchTerm === "") {
                        return project;
                    }
                    if (searchTerm === "Toutes") {
                        return project.showAll;
                    }
                    if (searchTerm === "Gratuites") {
                        return project.isFree;
                    }
                    if (searchTerm === "Premium") {
                        return !project.isFree;
                    }
                }).filter((project)=>{
                    if (tag1 === "All") {
                        return project;
                    }
                    if (project.technologies.toLowerCase().trim().includes(tag1.toLowerCase().trim())) {
                        return project;
                    }
                }).map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectsList_Project, {
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
            })
        ]
    }));
};
/* harmony default export */ const ProjectsList_ProjectsList = (ProjectsList);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/projects/index.js









function Index({ projects , formations  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projets | MVP4Startup"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Projects_Hero, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectALaUne_ProjectALaUneBanner, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FormationsList_FormationsList, {
                        formations: formations
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectsList_ProjectsList, {
                        projects: projects
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    // const projects = await fetch("http://localhost:3002/projects").then((res) =>
    try {
        const res1 = await fetch(`${config/* server */.f}/projects`);
        const projects = await res1.json();
        const formations = await fetch(`${config/* server */.f}/formations`).then((res)=>res.json()
        );
        return {
            props: {
                projects,
                formations
            }
        };
    } catch (error) {
        console.log(error.message);
    }
    return {
        props: {
            projects: [],
            formations: []
        }
    };
// const projects = await fetch(`${server}/projects`).then((res) =>
//   res.json()
// );
// const formations = await fetch(`${server}/formations`).then((res) =>
//   res.json()
// );
// return {
//   props: {
//     projects,
//     formations,
//   },
// };
}


/***/ }),

/***/ 6966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6689);

function TeamWebsite (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M685.83423,138.6545c7.51624,15.99516-8.41069,20.5258-26.65516,29.099s-31.8977,17.94247-39.41393,1.94732-13.61474-47.74263,12.19523-59.87092C658.65953,97.2838,678.318,122.65934,685.83423,138.6545Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":0}),React.createElement("circle",{"cx":"467.74627","cy":"39.08912","r":"24.56103","fill":"#ffb8b8","key":1}),React.createElement("path",{"d":"M770.29037,254.47277c-.85009-1.11-1.70019-2.2-2.56006-3.26q-1.66479-2.07-3.35009-4.01c-12.73-14.69-26.27-23.94-41.17969-24.93h-.02l-.22021-.02-29.71,28.96-10.10009,9.84.22021.54,5.44971,13.57h95.49023A234.83392,234.83392,0,0,0,770.29037,254.47277Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":2}),React.createElement("path",{"d":"M621.90207,155.43779l0,0,8.792-4.13144-1.22476-12.68333,5.87908,10.49623,4.20223-1.97466-.7144-7.39862,3.42957,6.12274,31.22444-14.67258,0,0a26,26,0,0,0-34.589-12.47385l-4.52533,2.12648A26,26,0,0,0,621.90207,155.43779Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":3}),React.createElement("path",{"d":"M825.39023,601.26062H312.55173a16.51867,16.51867,0,0,1-16.5-16.5V276.60681a12.10184,12.10184,0,0,1,12.08789-12.08838H829.59311a12.31112,12.31112,0,0,1,12.29712,12.29736V584.76062A16.51868,16.51868,0,0,1,825.39023,601.26062Z","transform":"translate(-180.86417 -106.46046)","fill":"#f2f2f2","key":4}),React.createElement("path",{"d":"M328.55173,584.76062h480.8385a16,16,0,0,0,16-16V307.21277a16,16,0,0,0-16-16H328.55173a16,16,0,0,0-16,16V568.76062A16,16,0,0,0,328.55173,584.76062Z","transform":"translate(-180.86417 -106.46046)","fill":"#fff","key":5}),React.createElement("path",{"d":"M841.66049,275.663H295.82016v-8.40039a16.57376,16.57376,0,0,1,16.56006-16.5498H825.10043a16.57368,16.57368,0,0,1,16.56006,16.5498Z","transform":"translate(-180.86417 -106.46046)","fill":"#b9074e","key":6}),React.createElement("circle",{"cx":"145.05135","cy":"156.7523","r":"4.28342","fill":"#fff","key":7}),React.createElement("circle",{"cx":"161.31015","cy":"156.7523","r":"4.28342","fill":"#fff","key":8}),React.createElement("circle",{"cx":"177.56896","cy":"156.7523","r":"4.28342","fill":"#fff","key":9}),React.createElement("path",{"d":"M583.97441,528.03954h-43a9.51081,9.51081,0,0,1-9.5-9.5v-43a9.51081,9.51081,0,0,1,9.5-9.5h43a9.51081,9.51081,0,0,1,9.5,9.5v43A9.51081,9.51081,0,0,1,583.97441,528.03954Zm-43-60a7.50835,7.50835,0,0,0-7.5,7.5v43a7.50836,7.50836,0,0,0,7.5,7.5h43a7.50836,7.50836,0,0,0,7.5-7.5v-43a7.50835,7.50835,0,0,0-7.5-7.5Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":10}),React.createElement("path",{"d":"M575.47441,516.03954h-26a3.00328,3.00328,0,0,1-3-3v-32a3.00328,3.00328,0,0,1,3-3h18.83935a3.0073,3.0073,0,0,1,1.8794.66162l7.16016,5.7539a2.9844,2.9844,0,0,1,1.12109,2.33838v26.2461A3.00328,3.00328,0,0,1,575.47441,516.03954Zm-26-36a1.0013,1.0013,0,0,0-1,1v32a1.0013,1.0013,0,0,0,1,1h26a1.0013,1.0013,0,0,0,1-1v-26.2461a.99457.99457,0,0,0-.37354-.77929l-7.16113-5.7544a1.00206,1.00206,0,0,0-.626-.22021Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":11}),React.createElement("path",{"d":"M570.47441,492.03954h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":12}),React.createElement("path",{"d":"M570.47441,498.03954h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":13}),React.createElement("path",{"d":"M570.47441,504.03954h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":14}),React.createElement("path",{"d":"M685.97441,528.03954h-43a9.51081,9.51081,0,0,1-9.5-9.5v-43a9.51081,9.51081,0,0,1,9.5-9.5h43a9.51081,9.51081,0,0,1,9.5,9.5v43A9.51081,9.51081,0,0,1,685.97441,528.03954Zm-43-60a7.50835,7.50835,0,0,0-7.5,7.5v43a7.50836,7.50836,0,0,0,7.5,7.5h43a7.50836,7.50836,0,0,0,7.5-7.5v-43a7.50835,7.50835,0,0,0-7.5-7.5Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":15}),React.createElement("path",{"d":"M678.47441,508.03954h-28a3.00328,3.00328,0,0,1-3-3v-16a3.00328,3.00328,0,0,1,3-3h28a3.00328,3.00328,0,0,1,3,3v16A3.00328,3.00328,0,0,1,678.47441,508.03954Zm-28-20a1.001,1.001,0,0,0-1,1v16a1.001,1.001,0,0,0,1,1h28a1.001,1.001,0,0,0,1-1v-16a1.001,1.001,0,0,0-1-1Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":16}),React.createElement("path",{"d":"M664.47441,499.67772a3.00345,3.00345,0,0,1-1.58984-.45264l-14.94043-9.3374a1.00027,1.00027,0,0,1,1.06054-1.69629l14.94043,9.3374a1.00555,1.00555,0,0,0,1.05957,0l14.93946-9.3374a1.00027,1.00027,0,0,1,1.06054,1.69629l-14.93945,9.3374A3.00432,3.00432,0,0,1,664.47441,499.67772Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":17}),React.createElement("path",{"d":"M481.97441,528.03954h-43a9.51081,9.51081,0,0,1-9.5-9.5v-43a9.51081,9.51081,0,0,1,9.5-9.5h43a9.51081,9.51081,0,0,1,9.5,9.5v43A9.51081,9.51081,0,0,1,481.97441,528.03954Zm-43-60a7.50835,7.50835,0,0,0-7.5,7.5v43a7.50836,7.50836,0,0,0,7.5,7.5h43a7.50836,7.50836,0,0,0,7.5-7.5v-43a7.50835,7.50835,0,0,0-7.5-7.5Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":18}),React.createElement("path",{"d":"M474.47441,508.03954h-28a3.00328,3.00328,0,0,1-3-3v-16a3.00328,3.00328,0,0,1,3-3h28a3.00328,3.00328,0,0,1,3,3v16A3.00328,3.00328,0,0,1,474.47441,508.03954Zm-28-20a1.001,1.001,0,0,0-1,1v16a1.001,1.001,0,0,0,1,1h28a1.001,1.001,0,0,0,1-1v-16a1.001,1.001,0,0,0-1-1Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":19}),React.createElement("path",{"d":"M470.03642,508.03954h-20.124a1.99958,1.99958,0,0,1-1.73194-3l6.06153-10.5a2.00022,2.00022,0,0,1,3.46435,0l3.915,6.78125,2.26807-3.92871a2.00022,2.00022,0,0,1,3.46435,0l4.415,7.64746a2,2,0,0,1-1.73242,3Zm0-2h0l-4.415-7.64746-3.13379,5.42871a.99985.99985,0,0,1-.86621.5h0a.99985.99985,0,0,1-.86621-.5l-4.78076-8.28125-6.062,10.5Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":20}),React.createElement("circle",{"cx":"290.61013","cy":"385.57888","r":"2","fill":"#ccc","key":21}),React.createElement("polygon",{"points":"768.825 648.15 756.565 648.149 750.733 600.861 768.827 600.862 768.825 648.15","fill":"#ffb8b8","key":22}),React.createElement("path",{"d":"M952.81564,766.49434l-39.53051-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":23}),React.createElement("polygon",{"points":"818.825 648.15 806.565 648.149 800.733 600.861 818.827 600.862 818.825 648.15","fill":"#ffb8b8","key":24}),React.createElement("path",{"d":"M1002.81564,766.49434l-39.53051-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":25}),React.createElement("path",{"d":"M996.0139,734.11079l-11.35449-3.4541a4.49323,4.49323,0,0,1-3.16577-3.833L970.9077,626.49751a.47984.47984,0,0,0-.47851-.44726.46935.46935,0,0,0-.5105.40918l-17.731,97.19922a4.50036,4.50036,0,0,1-5.33471,3.59961L932.34154,724.269a4.51613,4.51613,0,0,1-3.58179-4.71192l10.7854-159.3125,73.13794-7.8916-10.86792,177.72656a4.50464,4.50464,0,0,1-4.48437,4.22754A4.52613,4.52613,0,0,1,996.0139,734.11079Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":26}),React.createElement("circle",{"cx":"815.08028","cy":"290.48693","r":"24.56103","fill":"#ffb8b8","key":27}),React.createElement("path",{"d":"M939.43261,561.18013l15.85815-99.85107a37.85746,37.85746,0,0,1,48.00537-30.39942h0a37.74323,37.74323,0,0,1,26.60108,43.26221l-16.59107,89.17187Z","transform":"translate(-180.86417 -106.46046)","fill":"#b9074e","key":28}),React.createElement("path",{"d":"M1002.725,579.04609a10.0558,10.0558,0,0,0,1.747-15.32l16.39619-31.75128-18.46486,1.97048-12.73924,29.84946a10.11027,10.11027,0,0,0,13.06089,15.25138Z","transform":"translate(-180.86417 -106.46046)","fill":"#ffb8b8","key":29}),React.createElement("path",{"d":"M1006.23594,558.12555a4.50552,4.50552,0,0,1-2.4265-1.15083l-6.27324-5.79662a4.51468,4.51468,0,0,1-1.09178-5.05417l12.53746-29.71816-1.77859-58.71981a14.49652,14.49652,0,1,1,28.727,3.91856l3.041,36.91226a46.37346,46.37346,0,0,1-8.93769,31.39683l-19.55206,26.43232a4.505,4.505,0,0,1-3.19513,1.80387A4.45452,4.45452,0,0,1,1006.23594,558.12555Z","transform":"translate(-180.86417 -106.46046)","fill":"#b9074e","key":30}),React.createElement("path",{"d":"M854.50508,383.5656a10.05575,10.05575,0,0,0,13.42647,7.58193l22.84575,27.47819,5.38477-17.77183-22.52025-23.36914a10.11027,10.11027,0,0,0-19.13674,6.08085Z","transform":"translate(-180.86417 -106.46046)","fill":"#ffb8b8","key":31}),React.createElement("path",{"d":"M872.40107,394.9555a4.50564,4.50564,0,0,1,2.00583-1.78577l7.78377-3.51672a4.51467,4.51467,0,0,1,5.07986.96521l22.478,23.13213,54.76621,21.25658a14.49652,14.49652,0,1,1-14.80889,24.92573l-35.17667-11.59151a46.37351,46.37351,0,0,1-25.42736-20.47176l-16.71728-28.31048a4.50493,4.50493,0,0,1-.41535-3.64558A4.45446,4.45446,0,0,1,872.40107,394.9555Z","transform":"translate(-180.86417 -106.46046)","fill":"#b9074e","key":32}),React.createElement("polygon",{"points":"835.002 375.652 834.002 407.652 815.58 439.663 830.962 403.99 835.002 375.652","opacity":"0.1","key":33}),React.createElement("path",{"d":"M993.13047,401.56313a6.42292,6.42292,0,0,1-7.03053-4.70224,9.76432,9.76432,0,0,0-6.95075-7.2736c-4.5055-1.02949-10.01213,1.09128-13.31351-2.32232a6.63748,6.63748,0,0,1-1.57539-5.84234c.60807-3.31718,2.981-5.8232,5.56326-7.8275a34.06226,34.06226,0,0,1,18.8661-7.05067,67.67657,67.67657,0,0,1,10.62084.52837,47.00933,47.00933,0,0,1,10.86368,1.98538,25.57605,25.57605,0,0,1,16.00171,18.68024,29.528,29.528,0,0,1-6.05709,24.13034,31.70221,31.70221,0,0,1-12.16059,9.25872,4.74429,4.74429,0,0,1-3.60621.18291c-2.95734-1.17583-2.47409-4.83917-1.12569-7.28253,1.443-2.61478,3.66335-5.1464,2.50287-8.32859a6.302,6.302,0,0,0-3.12714-3.3662c-2.93992-1.49928-6.22821-1.14456-9.38876-.77957Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":34}),React.createElement("path",{"d":"M846.29741,415.4331h-304a16.51867,16.51867,0,0,1-16.5-16.5v-65a16.51868,16.51868,0,0,1,16.5-16.5h304a16.519,16.519,0,0,1,16.5,16.5v65A16.519,16.519,0,0,1,846.29741,415.4331Z","transform":"translate(-180.86417 -106.46046)","fill":"#fff","key":35}),React.createElement("path",{"d":"M846.29724,415.93324h-304a17.01917,17.01917,0,0,1-17-17v-65a17.01916,17.01916,0,0,1,17-17h304a17.01916,17.01916,0,0,1,17,17v65A17.01917,17.01917,0,0,1,846.29724,415.93324Zm-304-97a15.017,15.017,0,0,0-15,15v65a15.017,15.017,0,0,0,15,15h304a15.017,15.017,0,0,0,15-15v-65a15.017,15.017,0,0,0-15-15Z","transform":"translate(-180.86417 -106.46046)","fill":"#3f3d56","key":36}),React.createElement("path",{"d":"M809.29724,399.43324h-230a16.51868,16.51868,0,0,1-16.5-16.5v-34a16.51867,16.51867,0,0,1,16.5-16.5h230a16.51866,16.51866,0,0,1,16.5,16.5v34A16.51867,16.51867,0,0,1,809.29724,399.43324Z","transform":"translate(-180.86417 -106.46046)","fill":"#f2f2f2","key":37}),React.createElement("circle",{"cx":"447.92802","cy":"254.91484","r":"19.73228","fill":"#ff6584","key":38}),React.createElement("path",{"d":"M795.00425,397.4419l-27.85254-23.35968-27.37158-22.95636a4.00031,4.00031,0,0,0-5.15283.01l-27.28321,23.06165-6.66406,5.6333-10.04834-8.42737-30.53711-25.61084a3.99964,3.99964,0,0,0-5.15234.00989l-30.438,25.72833-30.917,26.13349a.99994.99994,0,0,0,.64746,1.76373l63.38672-.12213,20.064-.03864-.19629.166,59.80762-.11524,57.0669-.10992A.99989.99989,0,0,0,795.00425,397.4419Z","transform":"translate(-180.86417 -106.46046)","fill":"#3f3d56","key":39}),React.createElement("path",{"d":"M1056.13583,767.93324h-192a1,1,0,0,1,0-2h192a1,1,0,0,1,0,2Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":40}),React.createElement("path",{"d":"M784.92026,238.37274a11.22094,11.22094,0,0,0-7.25-5.1,10.30111,10.30111,0,0,0-1.65967-.21l-76.19043-68.12a9.01491,9.01491,0,0,0-5.62988-2.69,7.66989,7.66989,0,0,0-1.27-.04,9.05493,9.05493,0,0,0-5.96,15.48l29.16992,25.43,47.8999,41.75a11.91555,11.91555,0,0,0,.3501,2.33,11.26607,11.26607,0,0,0,9.66992,8.37,11.09212,11.09212,0,0,0,6.05029-1,11.40659,11.40659,0,0,0,3.87988-2.97c.10987-.13.21-.25.31006-.39a11.29281,11.29281,0,0,0,.62989-12.84Z","transform":"translate(-180.86417 -106.46046)","fill":"#ffb8b8","key":41}),React.createElement("path",{"d":"M654.60043,304.02276l-.71-28.86-.6001-23.95-.41015-16.76-.81006-32.67a9.04565,9.04565,0,0,0-15.71-5.25,6.92326,6.92326,0,0,0-.75.96,8.93574,8.93574,0,0,0-1.56006,6.05l1.78027,47.67.89014,23.95,1.13965,30.55a12.0475,12.0475,0,0,0-.88965,1.41,11.248,11.248,0,0,0-.71,8.84,11.31144,11.31144,0,0,0,15.55957,6.63,11.30069,11.30069,0,0,0,2.78027-18.57Z","transform":"translate(-180.86417 -106.46046)","fill":"#ffb8b8","key":42}),React.createElement("path",{"d":"M723.20053,222.27276l-7.07031-19.15-11.43994-31.02a16.0055,16.0055,0,0,0-9.9502-9.68c-.17969-.06-.36963-.12-.5498-.17005a15.984,15.984,0,0,0-13.23975,1.82l-38.53027,24.44a16.09316,16.09316,0,0,0-5.27,21.75,276.323,276.323,0,0,0,15.73,24.19c4.49023,6.11,12.85009,6.76,14.30029,16.76h28.40967l28.76025-25.82Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":43}),React.createElement("circle",{"cx":"101.16464","cy":"326.68231","r":"23.17166","fill":"#a0616a","key":44}),React.createElement("path",{"d":"M338.91551,417.19256q.3425.27261.66395.57794a10.38021,10.38021,0,0,1-.41708,15.48365,9.72179,9.72179,0,0,1-.81382.61338l1.56823,52.94493a8.06132,8.06132,0,0,1-5.545,7.867l-.09553.02052-42.98869,4.578a8.89852,8.89852,0,1,1-1.72218-17.71279l30.64427-2.69888,5.29962-45.851a9.87574,9.87574,0,0,1-.97155-.99,10.38,10.38,0,0,1,14.3778-14.83273Z","transform":"translate(-180.86417 -106.46046)","fill":"#a0616a","key":45}),React.createElement("polygon",{"points":"139.328 649.174 150.895 649.174 156.397 604.561 139.326 604.561 139.328 649.174","fill":"#a0616a","key":46}),React.createElement("path",{"d":"M317.24235,751.8583l22.778-.00093h.00092a14.5157,14.5157,0,0,1,14.51609,14.51587v.47171l-37.29436.00139Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":47}),React.createElement("polygon",{"points":"24.366 633.182 34.304 639.099 61.857 603.582 47.189 594.849 24.366 633.182","fill":"#a0616a","key":48}),React.createElement("path",{"d":"M204.6271,734.88875l19.57164,11.65289.00079.00047a14.5157,14.5157,0,0,1,5.04582,19.89892l-.24134.40531L196.95952,747.767Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":49}),React.createElement("path",{"d":"M334.4881,739.87708H321.53641a4.23772,4.23772,0,0,1-4.22149-3.79676L304.25773,613.34293a1.41541,1.41541,0,0,0-2.69716-.433l-23.5554,52.15872-41.70358,68.00266a4.26564,4.26564,0,0,1-5.32891,1.66575l-16.66024-7.33a4.24672,4.24672,0,0,1-1.93478-6.06413l38.33707-64.19208,11.75766-54.0852c-3.69795-23.455,12.155-58.326,12.31575-58.67614l.07855-.17044,43.66751-17.06765.219.2681c17.22117,56.51377,27.715,117.3322,19.96672,208.5678A4.27417,4.27417,0,0,1,334.4881,739.87708Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":50}),React.createElement("path",{"d":"M273.10743,549.934l-.20339-.42749c-.09719-.20454-9.807-20.68365-17.292-42.57146a32.28512,32.28512,0,0,1,2.23858-25.87344,32.6374,32.6374,0,0,1,20.81263-16.00426h0A32.677,32.677,0,0,1,316.591,484.62709c5.93722,14.84708,4.045,30.69452,2.26429,43.15723l-.03547.24967-.22711.10872Z","transform":"translate(-180.86417 -106.46046)","fill":"#3f3d56","key":51}),React.createElement("path",{"d":"M310.12378,420.05358H273.32992V404.01523c8.07584-3.20838,15.97847-5.93693,20.75551,0a16.03844,16.03844,0,0,1,16.03835,16.03833Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":52}),React.createElement("path",{"d":"M271.29289,401.18493c-21.99607,0-28.15279,27.57121-28.15279,43.12552,0,8.67446,3.923,11.777,10.08753,12.8268l2.17708-11.611,5.09905,12.11064c1.73162.00864,3.55077-.02488,5.43671-.05989l1.72886-3.55986,3.85527,3.496c15.44087.023,27.92061,2.27382,27.92061-13.20269C299.44521,428.75614,294.04582,401.18493,271.29289,401.18493Z","transform":"translate(-180.86417 -106.46046)","fill":"#2f2e41","key":53}),React.createElement("path",{"d":"M373.86417,767.93324h-192a1,1,0,1,1,0-2h192a1,1,0,0,1,0,2Z","transform":"translate(-180.86417 -106.46046)","fill":"#ccc","key":54}),React.createElement("path",{"d":"M377.47441,438.93324h-43a9.51081,9.51081,0,0,1-9.5-9.5v-43a9.51081,9.51081,0,0,1,9.5-9.5h43a9.51081,9.51081,0,0,1,9.5,9.5v43A9.51081,9.51081,0,0,1,377.47441,438.93324Z","transform":"translate(-180.86417 -106.46046)","fill":"#fff","key":55}),React.createElement("path",{"d":"M377.47441,438.93324h-43a9.51081,9.51081,0,0,1-9.5-9.5v-43a9.51081,9.51081,0,0,1,9.5-9.5h43a9.51081,9.51081,0,0,1,9.5,9.5v43A9.51081,9.51081,0,0,1,377.47441,438.93324Zm-43-60a7.50836,7.50836,0,0,0-7.5,7.5v43a7.50836,7.50836,0,0,0,7.5,7.5h43a7.50836,7.50836,0,0,0,7.5-7.5v-43a7.50836,7.50836,0,0,0-7.5-7.5Z","transform":"translate(-180.86417 -106.46046)","fill":"#3f3d56","key":56}),React.createElement("path",{"d":"M369.97441,421.43324h-28a3.00328,3.00328,0,0,1-3-3v-21a3.00328,3.00328,0,0,1,3-3h7.88232a2.98117,2.98117,0,0,1,2.55518,1.42724l2.19824,3.57276h15.36426a3.00328,3.00328,0,0,1,3,3v16A3.00328,3.00328,0,0,1,369.97441,421.43324Z","transform":"translate(-180.86417 -106.46046)","fill":"#b9074e","key":57}),React.createElement("path",{"d":"M369.06364,432.04239q.20986.38415.38766.79029a10.38021,10.38021,0,0,1-6.39269,14.10854,9.72022,9.72022,0,0,1-.98807.24953l-19.09943,49.40482a8.06134,8.06134,0,0,1-8.16324,5.09887l-.096-.01816-41.39664-12.46211a8.89853,8.89853,0,1,1,5.28606-16.99313l29.29033,9.40382,22.6764-40.20175a9.87622,9.87622,0,0,1-.51127-1.28942,10.38005,10.38005,0,0,1,19.0069-8.0913Z","transform":"translate(-180.86417 -106.46046)","fill":"#a0616a","key":58})]);
}

TeamWebsite.defaultProps = {"id":"a27520da-4319-485c-96d7-e776d7397e13","data-name":"Layer 1","width":"876.27165","height":"661.47277","viewBox":"0 0 876.27165 661.47277"};

module.exports = TeamWebsite;

TeamWebsite.default = TeamWebsite;


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,708], () => (__webpack_exec__(2631)));
module.exports = __webpack_exports__;

})();