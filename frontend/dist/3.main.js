(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/loading.js":
/*!***********************************!*\
  !*** ./src/components/loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/loading */ \"./src/components/styles/loading.js\");\n\n\n\n\nvar Loading = function Loading() {\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_loading__WEBPACK_IMPORTED_MODULE_2__[\"LoadingIcon\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    viewBox: \"0 0 32 32\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"circle\", {\n    cx: \"16\",\n    cy: \"16\",\n    fill: \"none\",\n    r: \"14\",\n    strokeWidth: \"4\",\n    style: {\n      stroke: theme.defaultBg,\n      opacity: \"0.2\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"circle\", {\n    cx: \"16\",\n    cy: \"16\",\n    fill: \"none\",\n    r: \"14\",\n    strokeWidth: \"4\",\n    style: {\n      stroke: theme.defaultBg,\n      strokeDasharray: 80,\n      strokeDashoffset: 60\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/components/loading.js?");

/***/ }),

/***/ "./src/components/styles/loading.js":
/*!******************************************!*\
  !*** ./src/components/styles/loading.js ***!
  \******************************************/
/*! exports provided: LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingIcon\", function() { return LoadingIcon; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n\"])));\nvar LoadingIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  text-align: center;\\n  padding-top: 5%;\\n  padding-bottom: 5%;\\n  svg {\\n    width: 26px;\\n    height: 26px;\\n    animation: \", \" 2s linear infinite;\\n  }\\n\"])), spin);\n\n//# sourceURL=webpack:///./src/components/styles/loading.js?");

/***/ }),

/***/ "./src/components/styles/profile.js":
/*!******************************************!*\
  !*** ./src/components/styles/profile.js ***!
  \******************************************/
/*! exports provided: HeaderWrapper, Header, BackBtn, Info, Dates, FollowFlex, Tab, Cover, Avatar, ImgFlex, Button, PeopleFlex, User, UserImage, PeopleDetails, TweetDetails, EmptyMsg, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderWrapper\", function() { return HeaderWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackBtn\", function() { return BackBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Info\", function() { return Info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dates\", function() { return Dates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowFlex\", function() { return FollowFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tab\", function() { return Tab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cover\", function() { return Cover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return Avatar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgFlex\", function() { return ImgFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeopleFlex\", function() { return PeopleFlex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserImage\", function() { return UserImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeopleDetails\", function() { return PeopleDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TweetDetails\", function() { return TweetDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmptyMsg\", function() { return EmptyMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;\n\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  position: sticky;\\n  background-color: white;\\n  top: 0;\\n  border-bottom: \", \";\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n});\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 15px;\\n  background: \", \";\\n  div {\\n    margin-right: 10px;\\n  }\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-size: 13px;\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n});\nvar BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  padding: 5px;\\n  border-radius: 50%;\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  h2 {\\n    color: \", \";\\n    line-height: 1.3;\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n  p,\\n  span {\\n    font-size: 15px;\\n    font-weight: 400;\\n    color: rgb(101, 119, 134);\\n  }\\n  p {\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar Dates = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  margin-bottom: 10px;\\n  flex-wrap: wrap;\\n  div {\\n    margin-right: 10px;\\n  }\\n\"])));\nvar FollowFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  div {\\n    margin-right: 20px;\\n  }\\n  div p:hover {\\n    text-decoration: underline;\\n  }\\n  div span:first-child {\\n    color: rgb(0, 0, 0);\\n    font-weight: 700;\\n  }\\n  div span:last-child {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n  }\\n\"])));\nvar Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  text-align: center;\\n  border-bottom: \", \";\\n  div {\\n    padding: 15px;\\n  }\\n  a {\\n    flex-basis: 50%;\\n    color: rgb(101, 119, 134);\\n    font-weight: 700;\\n    border-bottom: 2px solid transparent;\\n  }\\n  a:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n    color: rgb(29, 161, 242);\\n  }\\n\"])), function (props) {\n  return \"1.8px solid \".concat(props.border);\n});\nvar Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  height: 150px;\\n  background: \", \";\\n  img {\\n    position: absolute;\\n    width: 100%;\\n    height: inherit;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  width: 30%;\\n  height: 30%;\\n  width: 116.85px;\\n  height: 116.85px;\\n  background-image: url(\", \");\\n  background-size: cover;\\n  border: \", \";\\n  border-radius: 50%;\\n  margin-top: -13%;\\n  @media (max-width: 768px) {\\n    margin-top: -10%;\\n  }\\n  @media (max-width: 576px) {\\n    margin-top: -25%;\\n  }\\n\"])), function (props) {\n  return props.backgroundImage;\n}, function (props) {\n  return \"4px solid \".concat(props.bg);\n});\nvar ImgFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 15px;\\n  padding-right: 15px;\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject11 || (_templateObject11 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  background: \", \";\\n  border: 1px solid rgb(29, 161, 242);\\n  border-radius: 50px;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: rgb(29, 161, 242);\\n  text-align: center;\\n  padding: 1% 3%;\\n  outline: none;\\n  cursor: pointer;\\n  &:hover {\\n    background: rgba(26, 145, 218, 0.1);\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar PeopleFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject12 || (_templateObject12 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  padding: \", \";\\n  color: rgb(0, 0, 0);\\n  border-bottom: \", \";\\n  &:hover {\\n    background-color: \", \";\\n  }\\n\"])), function (props) {\n  return props.padding ? props.padding : \"10px 15px\";\n}, function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.tweetHov;\n});\nvar User = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject13 || (_templateObject13 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  width: 10%;\\n  margin-right: 10px;\\n  @media (max-width: 1024px) {\\n    width: 15%;\\n  }\\n  @media (max-width: 576px) {\\n    width: 20%;\\n  }\\n\"])));\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject14 || (_templateObject14 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  width: 49px;\\n  height: 49px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n\"])));\nvar PeopleDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject15 || (_templateObject15 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  h3 {\\n    font-size: 15px;\\n    font-weight: 700;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  p {\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  h3,\\n  p {\\n    margin: 0;\\n    line-height: 1.23;\\n  }\\n\"])));\nvar TweetDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject16 || (_templateObject16 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  h3 {\\n    color: \", \";\\n    font-size: 15px;\\n    font-weight: 700;\\n    margin: 0;\\n    margin-right: 2px;\\n  }\\n  p {\\n    margin: 0;\\n    margin-right: 8px;\\n    color: rgb(101, 119, 134);\\n    font-weight: 400;\\n    font-size: 15px;\\n  }\\n  span {\\n    color: rgb(101, 119, 134);\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  button {\\n    background: transparent;\\n    border: none;\\n    outline: none;\\n    cursor: pointer;\\n  }\\n  button:disabled {\\n    cursor: not-allowed;\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar EmptyMsg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject17 || (_templateObject17 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  text-align: center;\\n  color: rgb(101, 119, 134);\\n  margin-top: 4px;\\n\"])));\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject18 || (_templateObject18 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  margin-left: 3px;\\n  font-weight: 400;\\n  font-size: 15px;\\n  color: \", \";\\n\"])), function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/profile.js?");

/***/ }),

/***/ "./src/components/tweet/commentModal.js":
/*!**********************************************!*\
  !*** ./src/components/tweet/commentModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _uploadButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uploadButton */ \"./src/components/uploadButton.js\");\n/* harmony import */ var _styles_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/modal */ \"./src/components/styles/modal.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.js\");\n\n\n\n\n\n\n\n\n\nvar URL = {\"REACT_APP_SERVER_URL\":\"http://localhost:5000\",\"REACT_APP_SECRET_KEY\":\"verysecretkey\"}.REACT_APP_SERVER_URL;\n\nvar CommentModal = function CommentModal(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      isCommentDisabled = _useState4[0],\n      setIsCommentDisabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    image: \"\",\n    video: \"\",\n    media: null\n  }),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      preview = _useState6[0],\n      setPreview = _useState6[1];\n\n  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.profile.user;\n  });\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var handleClose = props.handleClose,\n      rows = props.rows,\n      tweetId = props.tweetId;\n\n  var addComment = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var data, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setIsCommentDisabled(true);\n              data = new FormData();\n              data.append(\"tweetId\", tweetId);\n              data.append(\"userId\", user.id);\n              data.append(\"text\", text);\n              if (preview.media) data.append(\"media\", preview.media);\n              if (preview.image || preview.video) data.append(\"resource_type\", preview.image ? \"image\" : \"video\");\n              _context.next = 9;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"\".concat(URL, \"/tweet/comment/add\"), data);\n\n            case 9:\n              res = _context.sent;\n              setIsCommentDisabled(false);\n              setText(\"\");\n              setPreview({\n                image: \"\",\n                video: \"\",\n                media: null\n              });\n              dispatch({\n                type: _redux_actions__WEBPACK_IMPORTED_MODULE_8__[\"SET_UPDATE\"]\n              });\n              handleClose && handleClose();\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addComment() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handlePhoto = function handlePhoto(e) {\n    var file = e.target.files[0];\n    var reader = new FileReader();\n    var url = reader.readAsDataURL(file);\n    var isImage = file.type.includes(\"image\");\n\n    reader.onloadend = function () {\n      isImage ? setPreview({\n        image: reader.result,\n        video: \"\",\n        media: file\n      }) : setPreview({\n        image: \"\",\n        video: reader.result,\n        media: file\n      });\n    };\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"], {\n    bg: theme.bg,\n    color: theme.color\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"img\", {\n    src: user.avatar,\n    width: \"49px\",\n    height: \"49px\",\n    style: {\n      borderRadius: \"50%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: {\n      width: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"textarea\", {\n    rows: rows || 5,\n    placeholder: \"Tweet your reply\",\n    value: text,\n    onChange: function onChange(e) {\n      setText(e.target.value);\n      e.target.value ? setIsCommentDisabled(false) : setIsCommentDisabled(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: {\n      marginBottom: \"10px\"\n    }\n  }, preview.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"img\", {\n    src: preview.image,\n    style: {\n      width: \"100%\"\n    }\n  }), preview.video && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"video\", {\n    src: preview.video,\n    style: {\n      width: \"100%\"\n    },\n    controls: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"], {\n    style: {\n      alignItems: \"center\",\n      justifyContent: \"flex-end\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", {\n    htmlFor: \"photo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_uploadButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"input\", {\n    type: \"file\",\n    id: \"photo\",\n    name: \"photo\",\n    accept: \"image/*,video/*\",\n    onChange: handlePhoto,\n    style: {\n      display: \"none\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_modal__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    onClick: addComment,\n    disabled: isCommentDisabled,\n    defaultBg: theme.defaultBg,\n    darkBg: theme.darkBg\n  }, \"Reply\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentModal);\n\n//# sourceURL=webpack:///./src/components/tweet/commentModal.js?");

/***/ }),

/***/ "./src/media.js":
/*!**********************!*\
  !*** ./src/media.js ***!
  \**********************/
/*! exports provided: isImage, isVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isImage\", function() { return isImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVideo\", function() { return isVideo; });\nvar isImage = function isImage(url) {\n  return url.match(/.(jpeg|jpg|gif|png)$/) !== null;\n};\nvar isVideo = function isVideo(url) {\n  return url.match(/.(mp4|ogg|mov|mkv|avi)$/);\n};\n\n//# sourceURL=webpack:///./src/media.js?");

/***/ })

}]);