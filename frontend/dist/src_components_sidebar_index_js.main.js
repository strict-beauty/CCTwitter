"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_sidebar_index_js"],{

/***/ "./src/components/loading.js":
/*!***********************************!*\
  !*** ./src/components/loading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/loading */ \"./src/components/styles/loading.js\");\n\n\n\n\nvar Loading = function Loading() {\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.theme;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_loading__WEBPACK_IMPORTED_MODULE_2__.LoadingIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    viewBox: \"0 0 32 32\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"circle\", {\n    cx: \"16\",\n    cy: \"16\",\n    fill: \"none\",\n    r: \"14\",\n    strokeWidth: \"4\",\n    style: {\n      stroke: theme.defaultBg,\n      opacity: \"0.2\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"circle\", {\n    cx: \"16\",\n    cy: \"16\",\n    fill: \"none\",\n    r: \"14\",\n    strokeWidth: \"4\",\n    style: {\n      stroke: theme.defaultBg,\n      strokeDasharray: 80,\n      strokeDashoffset: 60\n    }\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n\n//# sourceURL=webpack:///./src/components/loading.js?");

/***/ }),

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sidebar */ \"./src/components/styles/sidebar.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ \"./src/components/loading.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.js\");\n\n\n\n\n\n\n\n\n\n\nvar URL = {\"REACT_APP_SERVER_URL\":\"http://localhost:5000\",\"REACT_APP_SECRET_KEY\":\"verysecretkey\"}.REACT_APP_SERVER_URL;\n\nvar SideBar = function SideBar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      whoFollow = _useState2[0],\n      setWhoFollow = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      isFollowDisabled = _useState4[0],\n      setFollowDisabled = _useState4[1];\n\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.profile.user;\n  });\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.theme;\n  });\n  var userId = user.id;\n  var token = user.token;\n  var refresh = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.update.refresh;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var cancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);\n    var source = cancelToken.source();\n\n    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"\".concat(URL, \"/feed/who-follow?userId=\").concat(userId), {\n                cancelToken: source.token,\n                headers: {\n                  Authorization: \"Bearer \".concat(token)\n                }\n              });\n\n            case 3:\n              res = _context.sent;\n              setWhoFollow(res.data.whoFollow);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }))();\n\n    return function () {\n      source.cancel();\n    };\n  }, [refresh]);\n\n  var handleFollow = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e, idx) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              setFollowDisabled(true);\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(URL, \"/follow\"), {\n                followedId: whoFollow[idx].id,\n                followerId: userId\n              }, {\n                headers: {\n                  Authorization: \"Bearer \".concat(token)\n                }\n              });\n\n            case 4:\n              _context2.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"\".concat(URL, \"/feed/who-follow?userId=\").concat(userId), {\n                headers: {\n                  Authorization: \"Bearer \".concat(token)\n                }\n              });\n\n            case 6:\n              res = _context2.sent;\n              setWhoFollow(res.data.whoFollow);\n              setFollowDisabled(false);\n              dispatch({\n                type: _redux_actions__WEBPACK_IMPORTED_MODULE_8__.SET_UPDATE\n              });\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleFollow(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  if (!whoFollow) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_sidebar__WEBPACK_IMPORTED_MODULE_6__.SideBarBox, {\n    tweetHov: theme.tweetHov\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_sidebar__WEBPACK_IMPORTED_MODULE_6__.Header, {\n    color: theme.color,\n    border: theme.border\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h2\", null, \"Who to follow\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_sidebar__WEBPACK_IMPORTED_MODULE_6__.Users, null, !whoFollow.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n    style: {\n      textAlign: \"center\",\n      color: theme.color\n    }\n  }, \"No more users left to follow\"), whoFollow.map(function (user, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n      to: \"/profile/\".concat(user.username),\n      key: user.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_sidebar__WEBPACK_IMPORTED_MODULE_6__.UserFlex, {\n      color: theme.color,\n      border: theme.border\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"img\", {\n      src: user.avatar\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h3\", null, user.firstname, \" \", user.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", null, \"@\", user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n      style: {\n        marginLeft: \"auto\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_sidebar__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: function onClick(e) {\n        return handleFollow(e, idx);\n      },\n      disabled: isFollowDisabled\n    }, \"Follow\"))));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);\n\n//# sourceURL=webpack:///./src/components/sidebar/index.js?");

/***/ }),

/***/ "./src/components/styles/loading.js":
/*!******************************************!*\
  !*** ./src/components/styles/loading.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadingIcon\": () => (/* binding */ LoadingIcon)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n\"])));\nvar LoadingIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  padding-top: 5%;\\n  padding-bottom: 5%;\\n  svg {\\n    width: 26px;\\n    height: 26px;\\n    animation: \", \" 2s linear infinite;\\n  }\\n\"])), spin);\n\n//# sourceURL=webpack:///./src/components/styles/loading.js?");

/***/ }),

/***/ "./src/components/styles/sidebar.js":
/*!******************************************!*\
  !*** ./src/components/styles/sidebar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBarBox\": () => (/* binding */ SideBarBox),\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"Users\": () => (/* binding */ Users),\n/* harmony export */   \"UserFlex\": () => (/* binding */ UserFlex),\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;\n\n\nvar SideBarBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: sticky;\\n  top: 5%;\\n  background: \", \";\\n  width: 70%;\\n  margin: 10% 0 0 5%;\\n  border-radius: 15px;\\n  @media (max-width: 768px) {\\n    width: 90%;\\n  }\\n\"])), function (props) {\n  return props.tweetHov;\n});\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px 15px;\\n  border-bottom: \", \";\\n  h2 {\\n    color: \", \";\\n    font-size: 19px;\\n    font-weight: 800;\\n    margin: 0;\\n  }\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n});\nvar Users = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  a:last-child div {\\n    border: none;\\n  }\\n\"])));\nvar UserFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  padding: 10px 15px;\\n  border-bottom: \", \";\\n  img {\\n    width: 49px;\\n    height: 49px;\\n    border-radius: 50%;\\n    margin-right: 10px;\\n  }\\n  h3,\\n  p {\\n    margin: 0;\\n  }\\n  h3 {\\n    color: \", \";\\n    font-size: 15px;\\n    font-weight: 700;\\n    line-height: 19.68px;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  p {\\n    line-height: 19.68px;\\n    color: rgb(101, 119, 134);\\n  }\\n  &:hover {\\n    background-color: rgba(0, 0, 0, 0.03);\\n  }\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n});\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: transparent;\\n  border: 1px solid rgb(29, 161, 242);\\n  border-radius: 50px;\\n  padding: 5px 12px;\\n  cursor: pointer;\\n  outline: none;\\n  font-weight: 700;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n  &:disabled {\\n    cursor: not-allowed;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/components/styles/sidebar.js?");

/***/ })

}]);