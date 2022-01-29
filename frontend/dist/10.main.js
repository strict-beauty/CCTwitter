(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/components/icon.jsx":
/*!*********************************!*\
  !*** ./src/components/icon.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/svg */ \"./src/components/styles/svg.jsx\");\n\n\n\nvar Icon = function Icon(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    viewBox: props.viewBox || \"0 0 24 24\",\n    width: props.width,\n    height: props.height,\n    fill: props.fill\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", null, props.d.map(function (value) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      key: value,\n      d: value\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\n\n//# sourceURL=webpack:///./src/components/icon.jsx?");

/***/ }),

/***/ "./src/components/modal.jsx":
/*!**********************************!*\
  !*** ./src/components/modal.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"./src/components/icon.jsx\");\n/* harmony import */ var _styles_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/modal */ \"./src/components/styles/modal.jsx\");\n\n\n\n\n\nvar Modal = function Modal(props) {\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  var children = props.children,\n      handleClose = props.handleClose,\n      padding = props.padding,\n      heading = props.heading;\n  var closeButtonPath = [\"M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z\"];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__[\"ModalWrapper\"], {\n    modalBg: theme.modalBg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n    bg: theme.bg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n    border: theme.border,\n    color: theme.color\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__[\"CloseButton\"], {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    d: closeButtonPath,\n    width: \"22.5px\",\n    height: \"22.5px\",\n    fill: \"rgb(29, 161, 242)\"\n  })), heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n    padding: padding\n  }, children)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/components/modal.jsx?");

/***/ }),

/***/ "./src/components/styles/modal.jsx":
/*!*****************************************!*\
  !*** ./src/components/styles/modal.jsx ***!
  \*****************************************/
/*! exports provided: ModalWrapper, ModalContent, ModalHeader, CloseButton, Button, ModalBody, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWrapper\", function() { return ModalWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContent\", function() { return ModalContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalHeader\", function() { return ModalHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseButton\", function() { return CloseButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalBody\", function() { return ModalBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Flex\", function() { return Flex; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 4vh;\\n  background: \", \";\\n\"])), function (props) {\n  return props.modalBg;\n});\nvar ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  margin: auto;\\n  width: 40%;\\n  background: \", \";\\n  border-radius: 15px;\\n  @media (max-width: 768px) {\\n    width: 80%;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 13px 8px;\\n  border-bottom: \", \";\\n  h2 {\\n    color: \", \";\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n});\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  display: inline-flex;\\n  color: rgb(29, 161, 242);\\n  background-color: transparent;\\n  font-size: 33px;\\n  outline: none;\\n  border: none;\\n  padding: 5px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  margin-right: 10px;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  background-color: \", \";\\n  color: rgb(255, 255, 255);\\n  border-radius: 50px;\\n  border: none;\\n  outline: none;\\n  font-size: 15px;\\n  font-weight: bold;\\n  text-align: center;\\n  padding: 8px 15px;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: \", \";\\n  }\\n  &:disabled {\\n    opacity: 0.5;\\n  }\\n\"])), function (props) {\n  return props.defaultBg;\n}, function (props) {\n  return props.darkBg;\n});\nvar ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  padding: \", \";\\n  overflow-y: auto;\\n  max-height: 80vh;\\n\"])), function (props) {\n  return props.padding;\n});\nvar Flex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  div {\\n    margin-right: 8px;\\n  }\\n  textarea {\\n    background: \", \";\\n    caret-color: \", \";\\n    width: 100%;\\n    outline: none;\\n    border: none;\\n    resize: none;\\n    font-size: 16px;\\n    font-weight: 500;\\n    color: \", \";\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/modal.jsx?");

/***/ }),

/***/ "./src/components/styles/profile.jsx":
/*!*******************************************!*\
  !*** ./src/components/styles/profile.jsx ***!
  \*******************************************/
/*! exports provided: HeaderWrapper, Header, BackBtn, Info, Dates, FollowFlex, Tab, Cover, Avatar, ImgFlex, Button, PeopleFlex, User, UserImage, PeopleDetails, TweetDetails, EmptyMsg, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderWrapper\", function() { return HeaderWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackBtn\", function() { return BackBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Info\", function() { return Info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dates\", function() { return Dates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowFlex\", function() { return FollowFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tab\", function() { return Tab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cover\", function() { return Cover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return Avatar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgFlex\", function() { return ImgFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeopleFlex\", function() { return PeopleFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserImage\", function() { return UserImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeopleDetails\", function() { return PeopleDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TweetDetails\", function() { return TweetDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmptyMsg\", function() { return EmptyMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: sticky;\\n  background-color: white;\\n  top: 0;\\n  border-bottom: \", \";\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n});\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 15px;\\n  background: \", \";\\n  div {\\n    margin-right: 10px;\\n  }\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-size: 13px;\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n});\nvar BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  padding: 5px;\\n  border-radius: 50%;\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p,\\n  span {\\n    font-size: 15px;\\n    font-weight: 400;\\n    color: rgb(101, 119, 134);\\n  }\\n  p {\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar Dates = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  margin-bottom: 10px;\\n  flex-wrap: wrap;\\n  div {\\n    margin-right: 10px;\\n  }\\n\"])));\nvar FollowFlex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  div {\\n    margin-right: 20px;\\n  }\\n  div p:hover {\\n    text-decoration: underline;\\n  }\\n  div span:first-child {\\n    color: rgb(0, 0, 0);\\n    font-weight: 700;\\n  }\\n  div span:last-child {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n  }\\n\"])));\nvar Tab = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  text-align: center;\\n  border-bottom: \", \";\\n  div {\\n    padding: 15px;\\n  }\\n  a {\\n    flex-basis: 50%;\\n    color: rgb(101, 119, 134);\\n    font-weight: 700;\\n    border-bottom: 2px solid transparent;\\n  }\\n  a:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n    color: rgb(29, 161, 242);\\n  }\\n\"])), function (props) {\n  return \"1.8px solid \".concat(props.border);\n});\nvar Cover = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([\"\\n  height: 150px;\\n  background: \", \";\\n  img {\\n    position: absolute;\\n    width: 100%;\\n    height: inherit;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([\"\\n  width: 30%;\\n  height: 30%;\\n  width: 116.85px;\\n  height: 116.85px;\\n  background-image: url(\", \");\\n  background-size: cover;\\n  border: \", \";\\n  border-radius: 50%;\\n  margin-top: -13%;\\n  @media (max-width: 768px) {\\n    margin-top: -10%;\\n  }\\n  @media (max-width: 576px) {\\n    margin-top: -25%;\\n  }\\n\"])), function (props) {\n  return props.backgroundImage;\n}, function (props) {\n  return \"4px solid \".concat(props.bg);\n});\nvar ImgFlex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 15px;\\n  padding-right: 15px;\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([\"\\n  background: \", \";\\n  border: 1px solid rgb(29, 161, 242);\\n  border-radius: 50px;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: rgb(29, 161, 242);\\n  text-align: center;\\n  padding: 1% 3%;\\n  outline: none;\\n  cursor: pointer;\\n  &:hover {\\n    background: rgba(26, 145, 218, 0.1);\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar PeopleFlex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  padding: \", \";\\n  color: rgb(0, 0, 0);\\n  border-bottom: \", \";\\n  &:hover {\\n    background-color: \", \";\\n  }\\n\"])), function (props) {\n  return props.padding ? props.padding : \"10px 15px\";\n}, function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.tweetHov;\n});\nvar User = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([\"\\n  width: 10%;\\n  margin-right: 10px;\\n  @media (max-width: 1024px) {\\n    width: 15%;\\n  }\\n  @media (max-width: 576px) {\\n    width: 20%;\\n  }\\n\"])));\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([\"\\n  width: 49px;\\n  height: 49px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n\"])));\nvar PeopleDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  h3 {\\n    font-size: 15px;\\n    font-weight: 700;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  h3,\\n  p {\\n    margin: 0;\\n    line-height: 1.23;\\n  }\\n\"])));\nvar TweetDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  h3 {\\n    color: \", \";\\n    font-size: 15px;\\n    font-weight: 700;\\n    margin: 0;\\n    margin-right: 2px;\\n  }\\n  p {\\n    margin: 0;\\n    margin-right: 8px;\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  span {\\n    color: rgb(101, 119, 134);\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  button {\\n    background: transparent;\\n    border: none;\\n    outline: none;\\n    cursor: pointer;\\n  }\\n  button:disabled {\\n    cursor: not-allowed;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar EmptyMsg = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([\"\\n  text-align: center;\\n  color: rgb(101, 119, 134);\\n  margin-top: 4px;\\n\"])));\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([\"\\n  margin-left: 3px;\\n  font-weight: 400;\\n  font-size: 15px;\\n  color: \", \";\\n\"])), function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/profile.jsx?");

/***/ }),

/***/ "./src/components/styles/svg.jsx":
/*!***************************************!*\
  !*** ./src/components/styles/svg.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Svg = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].svg(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    fill: \", \";\\n    width: \", \";\\n    height: \", \";\\n    vertical-align: bottom;\\n\"])), function (props) {\n  return props.fill;\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Svg);\n\n//# sourceURL=webpack:///./src/components/styles/svg.jsx?");

/***/ }),

/***/ "./src/components/tweet/likes.jsx":
/*!****************************************!*\
  !*** ./src/components/tweet/likes.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal */ \"./src/components/modal.jsx\");\n/* harmony import */ var _styles_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/profile */ \"./src/components/styles/profile.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar URL = undefined.REACT_APP_BACKEND_URL;\n\nvar Likes = function Likes() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      likes = _useState2[0],\n      setLikes = _useState2[1];\n\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n\n  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"])(),\n      uid = _useParams.uid,\n      tweetId = _useParams.tweetId;\n\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var likes;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(URL, \"/api/tweet/like/get-likes?tweetId=\").concat(tweetId));\n\n            case 2:\n              likes = _context.sent;\n              setLikes(likes.data.likes);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n\n  var handleClose = function handleClose() {\n    history.replace(\"/\".concat(uid, \"/status/\").concat(tweetId));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    padding: \"0 0 80px 0\",\n    handleClose: handleClose,\n    heading: \"Liked by\",\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, likes.map(function (_user) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        key: _user[\"Likes.id\"],\n        to: \"/profile/\".concat(_user.uid)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_5__[\"PeopleFlex\"], {\n        key: _user.uid,\n        border: theme.border\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_5__[\"UserImage\"], {\n        src: _user.avatar\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: \"100%\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_5__[\"PeopleDetails\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"object\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/profile/\".concat(_user.uid)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        style: {\n          color: theme.color\n        }\n      }, _user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"object\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/profile/\".concat(_user.uid)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"@\", _user.username))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        style: {\n          color: theme.color\n        }\n      }, _user.bio)))));\n    }))\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Likes);\n\n//# sourceURL=webpack:///./src/components/tweet/likes.jsx?");

/***/ })

}]);