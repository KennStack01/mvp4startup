"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 1131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _smartComponents_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3963);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_10__);











const notify = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_10___default().success(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-lg",
        children: [
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: " Connexion R\xe9ussie "
            }),
            " "
        ]
    }))
;
function Auth() {
    var ref, ref1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { register , formState: { errors  } , handleSubmit ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const USER_LOGIN_URL = "https://mvp4startup-api.herokuapp.com/api/v1/auth/sign_in";
    async function onSubmit(data) {
        setLoading(true);
        const userData = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(USER_LOGIN_URL, data).then((res)=>{
            setLoading(false);
            setUser(res);
            console.log("Status: ", res.status);
            notify();
            setTimeout(()=>{
                router.push("/user");
            }, 500);
            return res.data;
        }).catch((err)=>console.log(err.message)
        );
        if (userData === undefined || userData === null) setLoading(false);
        // display form data on success
        console.log("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
        return false;
    }
    // Function pour Authentification via les réseaux sociaux
    const handleSocialAuth = (e)=>{
        e.preventDefault();
        console.log("Social Auth");
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:flex flex-row my-4 md:my-6 mx-auto p-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "my-3 text-center text-lg md:text-3xl font-semibold text-gray-700",
                        children: "Se Connecter"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 divide-y divide-gray-400",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                className: "w-full max-w-sm mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:flex md:items-center mb-2 mt-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("email"),
                                                    className: "bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500",
                                                    id: "inline-email",
                                                    type: "email",
                                                    // value=""
                                                    placeholder: "Adresse E-mail",
                                                    required: true
                                                }),
                                                ((ref = errors.email) === null || ref === void 0 ? void 0 : ref.type) === "required" && "L'adresse e-mail est requis"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:flex md:items-center mb-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("password", {
                                                        required: true
                                                    }),
                                                    className: "bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500",
                                                    id: "inline-password",
                                                    type: "password",
                                                    placeholder: "Mot de passe",
                                                    required: true
                                                }),
                                                ((ref1 = errors.userName) === null || ref1 === void 0 ? void 0 : ref1.type) === "required" && "Le mot de passe est requis"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:flex",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row justify-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    // onClick={() => signIn()}
                                                    className: `shadow ${isLoading ? "" : "bg-light-pink-500 hover:bg-light-pink-400 text-white focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"}`,
                                                    type: "submit",
                                                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_smartComponents_Loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    }) : "Se Connecter"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    href: "/signup",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "md:mx-2 mx-auto text-sm my-auto cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        children: "Cr\xe9er un Compte"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleSocialAuth,
                                        className: "bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_3__.FcGoogle, {
                                                    className: "my-auto text-3xl"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "text-gray-800 text-md font-medium my-auto mx-2",
                                                    children: [
                                                        "Continuer avec Google",
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleSocialAuth,
                                        className: "bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg",
                                        style: {
                                            background: "#3b5998"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row text-white ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFacebook, {
                                                    className: "my-auto text-3xl"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "text-md font-medium my-auto mx-2",
                                                    children: [
                                                        "Continuer avec Facebook",
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleSocialAuth,
                                        className: "bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 mt-4 rounded-lg",
                                        style: {
                                            background: "#211F1F"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row text-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {
                                                    className: "my-auto text-3xl"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: " text-md font-medium my-auto mx-2",
                                                    children: "Continuer avec Github"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 3963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);




const LoadingComponent = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row justify-between bg-gray-200 text-gray-600 focus:outline-none font-semibold p-2 rounded-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "my-auto",
                children: "En Cours "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default()), {
                type: "ThreeDots",
                color: "rgba(75, 85, 99, var(--tw-text-opacity))",
                height: 25,
                width: 25,
                className: "mx-1 my-auto"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingComponent);


/***/ })

};
;