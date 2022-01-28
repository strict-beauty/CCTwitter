"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_tweet_likes_js"],{

/***/ "./src/components/icon.js":
/*!********************************!*\
  !*** ./src/components/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/svg */ \"./src/components/styles/svg.js\");\n\n\n\nvar Icon = function Icon(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    viewBox: props.viewBox || \"0 0 24 24\",\n    width: props.width,\n    height: props.height,\n    fill: props.fill\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", null, props.d.map(function (value) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n      key: value,\n      d: value\n    });\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);\n\n//# sourceURL=webpack:///./src/components/icon.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"./src/components/icon.js\");\n/* harmony import */ var _styles_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/modal */ \"./src/components/styles/modal.js\");\n\n\n\n\n\nvar Modal = function Modal(props) {\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.theme;\n  });\n  var children = props.children,\n      handleClose = props.handleClose,\n      padding = props.padding,\n      heading = props.heading;\n  var closeButtonPath = [\"M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z\"];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__.ModalWrapper, {\n    modalBg: theme.modalBg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n    bg: theme.bg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n    border: theme.border,\n    color: theme.color\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__.CloseButton, {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    d: closeButtonPath,\n    width: \"22.5px\",\n    height: \"22.5px\",\n    fill: \"rgb(29, 161, 242)\"\n  })), heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n    padding: padding\n  }, children)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack:///./src/components/modal.js?");

/***/ }),

/***/ "./src/components/styles/modal.js":
/*!****************************************!*\
  !*** ./src/components/styles/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalWrapper\": () => (/* binding */ ModalWrapper),\n/* harmony export */   \"ModalContent\": () => (/* binding */ ModalContent),\n/* harmony export */   \"ModalHeader\": () => (/* binding */ ModalHeader),\n/* harmony export */   \"CloseButton\": () => (/* binding */ CloseButton),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"ModalBody\": () => (/* binding */ ModalBody),\n/* harmony export */   \"Flex\": () => (/* binding */ Flex)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\n\nvar ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 4vh;\\n  background: \", \";\\n\"])), function (props) {\n  return props.modalBg;\n});\nvar ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  margin: auto;\\n  width: 40%;\\n  background: \", \";\\n  border-radius: 15px;\\n  @media (max-width: 768px) {\\n    width: 80%;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 13px 8px;\\n  border-bottom: \", \";\\n  h2 {\\n    color: \", \";\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n});\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-flex;\\n  color: rgb(29, 161, 242);\\n  background-color: transparent;\\n  font-size: 33px;\\n  outline: none;\\n  border: none;\\n  padding: 5px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  margin-right: 10px;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: \", \";\\n  color: rgb(255, 255, 255);\\n  border-radius: 50px;\\n  border: none;\\n  outline: none;\\n  font-size: 15px;\\n  font-weight: bold;\\n  text-align: center;\\n  padding: 8px 15px;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: \", \";\\n  }\\n  &:disabled {\\n    opacity: 0.5;\\n  }\\n\"])), function (props) {\n  return props.defaultBg;\n}, function (props) {\n  return props.darkBg;\n});\nvar ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: \", \";\\n  overflow-y: auto;\\n  max-height: 80vh;\\n\"])), function (props) {\n  return props.padding;\n});\nvar Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  div {\\n    margin-right: 8px;\\n  }\\n  textarea {\\n    background: \", \";\\n    caret-color: \", \";\\n    width: 100%;\\n    outline: none;\\n    border: none;\\n    resize: none;\\n    font-size: 16px;\\n    font-weight: 500;\\n    color: \", \";\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/modal.js?");

/***/ }),

/***/ "./src/components/styles/profile.js":
/*!******************************************!*\
  !*** ./src/components/styles/profile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderWrapper\": () => (/* binding */ HeaderWrapper),\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"BackBtn\": () => (/* binding */ BackBtn),\n/* harmony export */   \"Info\": () => (/* binding */ Info),\n/* harmony export */   \"Dates\": () => (/* binding */ Dates),\n/* harmony export */   \"FollowFlex\": () => (/* binding */ FollowFlex),\n/* harmony export */   \"Tab\": () => (/* binding */ Tab),\n/* harmony export */   \"Cover\": () => (/* binding */ Cover),\n/* harmony export */   \"Avatar\": () => (/* binding */ Avatar),\n/* harmony export */   \"ImgFlex\": () => (/* binding */ ImgFlex),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"PeopleFlex\": () => (/* binding */ PeopleFlex),\n/* harmony export */   \"User\": () => (/* binding */ User),\n/* harmony export */   \"UserImage\": () => (/* binding */ UserImage),\n/* harmony export */   \"PeopleDetails\": () => (/* binding */ PeopleDetails),\n/* harmony export */   \"TweetDetails\": () => (/* binding */ TweetDetails),\n/* harmony export */   \"EmptyMsg\": () => (/* binding */ EmptyMsg),\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;\n\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: sticky;\\n  background-color: white;\\n  top: 0;\\n  border-bottom: \", \";\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n});\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 15px;\\n  background: \", \";\\n  div {\\n    margin-right: 10px;\\n  }\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-size: 13px;\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n});\nvar BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 5px;\\n  border-radius: 50%;\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p,\\n  span {\\n    font-size: 15px;\\n    font-weight: 400;\\n    color: rgb(101, 119, 134);\\n  }\\n  p {\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar Dates = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  margin-bottom: 10px;\\n  flex-wrap: wrap;\\n  div {\\n    margin-right: 10px;\\n  }\\n\"])));\nvar FollowFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  div {\\n    margin-right: 20px;\\n  }\\n  div p:hover {\\n    text-decoration: underline;\\n  }\\n  div span:first-child {\\n    color: rgb(0, 0, 0);\\n    font-weight: 700;\\n  }\\n  div span:last-child {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n  }\\n\"])));\nvar Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  text-align: center;\\n  border-bottom: \", \";\\n  div {\\n    padding: 15px;\\n  }\\n  a {\\n    flex-basis: 50%;\\n    color: rgb(101, 119, 134);\\n    font-weight: 700;\\n    border-bottom: 2px solid transparent;\\n  }\\n  a:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n    color: rgb(29, 161, 242);\\n  }\\n\"])), function (props) {\n  return \"1.8px solid \".concat(props.border);\n});\nvar Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 150px;\\n  background: \", \";\\n  img {\\n    position: absolute;\\n    width: 100%;\\n    height: inherit;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 30%;\\n  height: 30%;\\n  width: 116.85px;\\n  height: 116.85px;\\n  background-image: url(\", \");\\n  background-size: cover;\\n  border: \", \";\\n  border-radius: 50%;\\n  margin-top: -13%;\\n  @media (max-width: 768px) {\\n    margin-top: -10%;\\n  }\\n  @media (max-width: 576px) {\\n    margin-top: -25%;\\n  }\\n\"])), function (props) {\n  return props.backgroundImage;\n}, function (props) {\n  return \"4px solid \".concat(props.bg);\n});\nvar ImgFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 15px;\\n  padding-right: 15px;\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: \", \";\\n  border: 1px solid rgb(29, 161, 242);\\n  border-radius: 50px;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: rgb(29, 161, 242);\\n  text-align: center;\\n  padding: 1% 3%;\\n  outline: none;\\n  cursor: pointer;\\n  &:hover {\\n    background: rgba(26, 145, 218, 0.1);\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar PeopleFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  padding: \", \";\\n  color: rgb(0, 0, 0);\\n  border-bottom: \", \";\\n  &:hover {\\n    background-color: \", \";\\n  }\\n\"])), function (props) {\n  return props.padding ? props.padding : \"10px 15px\";\n}, function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.tweetHov;\n});\nvar User = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject13 || (_templateObject13 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 10%;\\n  margin-right: 10px;\\n  @media (max-width: 1024px) {\\n    width: 15%;\\n  }\\n  @media (max-width: 576px) {\\n    width: 20%;\\n  }\\n\"])));\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject14 || (_templateObject14 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 49px;\\n  height: 49px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n\"])));\nvar PeopleDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject15 || (_templateObject15 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  h3 {\\n    font-size: 15px;\\n    font-weight: 700;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  h3,\\n  p {\\n    margin: 0;\\n    line-height: 1.23;\\n  }\\n\"])));\nvar TweetDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject16 || (_templateObject16 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  h3 {\\n    color: \", \";\\n    font-size: 15px;\\n    font-weight: 700;\\n    margin: 0;\\n    margin-right: 2px;\\n  }\\n  p {\\n    margin: 0;\\n    margin-right: 8px;\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  span {\\n    color: rgb(101, 119, 134);\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  button {\\n    background: transparent;\\n    border: none;\\n    outline: none;\\n    cursor: pointer;\\n  }\\n  button:disabled {\\n    cursor: not-allowed;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar EmptyMsg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject17 || (_templateObject17 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  color: rgb(101, 119, 134);\\n  margin-top: 4px;\\n\"])));\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject18 || (_templateObject18 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-left: 3px;\\n  font-weight: 400;\\n  font-size: 15px;\\n  color: \", \";\\n\"])), function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/profile.js?");

/***/ }),

/***/ "./src/components/styles/svg.js":
/*!**************************************!*\
  !*** ./src/components/styles/svg.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Svg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].svg(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    fill: \", \";\\n    width: \", \";\\n    height: \", \";\\n    vertical-align: bottom;\\n\"])), function (props) {\n  return props.fill;\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);\n\n//# sourceURL=webpack:///./src/components/styles/svg.js?");

/***/ }),

/***/ "./src/components/tweet/likes.js":
/*!***************************************!*\
  !*** ./src/components/tweet/likes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal */ \"./src/components/modal.js\");\n/* harmony import */ var _styles_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/profile */ \"./src/components/styles/profile.js\");\n\n\n\n\n\n\n\n\n\nvar URL = {\"REACT_APP_SERVER_URL\":\"http://localhost:5000\",\"REACT_APP_SECRET_KEY\":\"verysecretkey\"}.REACT_APP_SERVER_URL;\n\nvar Likes = function Likes() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      likes = _useState2[0],\n      setLikes = _useState2[1];\n\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.theme;\n  });\n\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),\n      username = _useParams.username,\n      tweetId = _useParams.tweetId;\n\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var likes;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"\".concat(URL, \"/tweet/like/get-likes?tweetId=\").concat(tweetId));\n\n            case 2:\n              likes = _context.sent;\n              setLikes(likes.data.likes);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n\n  var handleClose = function handleClose() {\n    history.replace(\"/\".concat(username, \"/status/\").concat(tweetId));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    padding: \"0 0 80px 0\",\n    handleClose: handleClose,\n    heading: \"Liked by\",\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, likes.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n        key: item[\"Likes.id\"],\n        to: \"/profile/\".concat(item.username)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_7__.PeopleFlex, {\n        key: item.id,\n        border: theme.border\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_7__.UserImage, {\n        src: item.avatar\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n        style: {\n          width: \"100%\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_7__.PeopleDetails, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"object\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n        to: \"/profile/\".concat(item.username)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h3\", {\n        style: {\n          color: theme.color\n        }\n      }, item.firstname, \" \", item.lastname))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"object\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n        to: \"/profile/\".concat(item.username)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", null, \"@\", item.username))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n        style: {\n          color: theme.color\n        }\n      }, item.bio)))));\n    }))\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likes);\n\n//# sourceURL=webpack:///./src/components/tweet/likes.js?");

/***/ })

}]);