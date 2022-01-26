"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_modal_js-src_components_uploadButton_js"],{

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

/***/ "./src/components/styles/common.js":
/*!*****************************************!*\
  !*** ./src/components/styles/common.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileCorner\": () => (/* binding */ ProfileCorner),\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"ActivityBox\": () => (/* binding */ ActivityBox),\n/* harmony export */   \"ActivityIcon\": () => (/* binding */ ActivityIcon),\n/* harmony export */   \"Row\": () => (/* binding */ Row),\n/* harmony export */   \"Col\": () => (/* binding */ Col),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"StyledInput\": () => (/* binding */ StyledInput),\n/* harmony export */   \"FileInput\": () => (/* binding */ FileInput)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ProfileCorner = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  border-left: \", \";\\n  border-right: \", \";\\n  min-height: 100vh;\\n  padding-bottom: 20%;\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return \"1px solid \".concat(props.border);\n});\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  position: sticky;\\n  top: 0;\\n  background: \", \";\\n  padding: 10px 15px;\\n  border-bottom: \", \";\\n  h2 {\\n    font-weight: 800;\\n    color: \", \";\\n  }\\n  p {\\n    color: \", \";\\n    line-height: 13px;\\n  }\\n  * {\\n    margin-bottom: 0;\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.para;\n});\nvar ActivityBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  div {\\n    display: flex;\\n    padding: \", \";\\n  }\\n  &:hover {\\n    div {\\n      background-color: \", \";\\n    }\\n    svg {\\n      fill: \", \";\\n    }\\n    span {\\n      color: \", \";\\n    }\\n  }\\n\"])), function (props) {\n  return props.noPadding || \"15%\";\n}, function (props) {\n  return props.hoverBg;\n}, function (props) {\n  return props.hoverColor;\n}, function (props) {\n  return props.hoverColor;\n});\nvar ActivityIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  border-radius: 50%;\\n\"])));\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-wrap wrap;\\n\"])));\nvar Col = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  display: block;\\n  \", \"\\n\\n  \", \"\\n\\n  \", \"\\n\"])), function (props) {\n  return props.sm && \"  @media (min-width: 576px) {\\n      flex: 0 0 \".concat(props.sm / 24 * 100, \"%;\\n      max-width: \").concat(props.sm / 24 * 100, \"%;\\n    }\");\n}, function (props) {\n  return props.md && \"@media(min-width: 768px) {\\n    flex: 0 0 \".concat(props.md / 24 * 100, \"%;\\n    max-width: \").concat(props.md / 24 * 100, \"%;\\n  }\");\n}, function (props) {\n  return props.xs && \"@media (max-width: 576px) {\\n      flex: 0 0 \".concat(props.xs / 24 * 100, \"%;\\n      max-width: \").concat(props.xs / 24 * 100, \"%;\\n    }\");\n});\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  background: \", \";\\n  border: \", \";\\n  border-radius: 50px;\\n  outline: none;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: \", \";\\n  text-align: center;\\n  cursor: pointer;\\n  padding: \", \";\\n  &:hover {\\n    background: \", \";\\n  }\\n  &:disabled {\\n    cursor: not-allowed;\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.border || \"none\";\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.padding;\n}, function (props) {\n  return props.hoverBg;\n});\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  border: none;\\n  height: 50px;\\n  border-bottom: 2px solid gray;\\n  background: \", \";\\n  caret-color: \", \";\\n  color: \", \";\\n  \", \"\\n  outline: none;\\n  &:focus {\\n    border-bottom: 2px solid rgb(29, 161, 242);\\n  }\\n\"])), function (props) {\n  return props.inputBg;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.margin && \"margin: \".concat(props.margin, \";\");\n});\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([\"\\n  cursor: pointer;\\n  padding: 5px;\\n  border-radius: 50%;\\n  &:hover {\\n    background-color: \", \";\\n  }\\n\"])), function (props) {\n  return props.opaqueBg;\n});\n\n//# sourceURL=webpack:///./src/components/styles/common.js?");

/***/ }),

/***/ "./src/components/styles/modal.js":
/*!****************************************!*\
  !*** ./src/components/styles/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalWrapper\": () => (/* binding */ ModalWrapper),\n/* harmony export */   \"ModalContent\": () => (/* binding */ ModalContent),\n/* harmony export */   \"ModalHeader\": () => (/* binding */ ModalHeader),\n/* harmony export */   \"CloseButton\": () => (/* binding */ CloseButton),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"ModalBody\": () => (/* binding */ ModalBody),\n/* harmony export */   \"Flex\": () => (/* binding */ Flex)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 4vh;\\n  background: \", \";\\n\"])), function (props) {\n  return props.modalBg;\n});\nvar ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  margin: auto;\\n  width: 40%;\\n  background: \", \";\\n  border-radius: 15px;\\n  @media (max-width: 768px) {\\n    width: 80%;\\n  }\\n\"])), function (props) {\n  return props.bg;\n});\nvar ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 13px 8px;\\n  border-bottom: \", \";\\n  h2 {\\n    color: \", \";\\n    margin-bottom: 0;\\n    font-size: 19px;\\n    font-weight: 800;\\n  }\\n\"])), function (props) {\n  return \"1px solid \".concat(props.border);\n}, function (props) {\n  return props.color;\n});\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  display: inline-flex;\\n  color: rgb(29, 161, 242);\\n  background-color: transparent;\\n  font-size: 33px;\\n  outline: none;\\n  border: none;\\n  padding: 5px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  margin-right: 10px;\\n  &:hover {\\n    background-color: rgba(29, 161, 242, 0.1);\\n  }\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  background-color: \", \";\\n  color: rgb(255, 255, 255);\\n  border-radius: 50px;\\n  border: none;\\n  outline: none;\\n  font-size: 15px;\\n  font-weight: bold;\\n  text-align: center;\\n  padding: 8px 15px;\\n  cursor: pointer;\\n  &:hover {\\n    background-color: \", \";\\n  }\\n  &:disabled {\\n    opacity: 0.5;\\n  }\\n\"])), function (props) {\n  return props.defaultBg;\n}, function (props) {\n  return props.darkBg;\n});\nvar ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  padding: \", \";\\n  overflow-y: auto;\\n  max-height: 80vh;\\n\"])), function (props) {\n  return props.padding;\n});\nvar Flex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  div {\\n    margin-right: 8px;\\n  }\\n  textarea {\\n    background: \", \";\\n    caret-color: \", \";\\n    width: 100%;\\n    outline: none;\\n    border: none;\\n    resize: none;\\n    font-size: 16px;\\n    font-weight: 500;\\n    color: \", \";\\n  }\\n\"])), function (props) {\n  return props.bg;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n\n//# sourceURL=webpack:///./src/components/styles/modal.js?");

/***/ }),

/***/ "./src/components/styles/svg.js":
/*!**************************************!*\
  !*** ./src/components/styles/svg.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Svg = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].svg(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    fill: \", \";\\n    width: \", \";\\n    height: \", \";\\n    vertical-align: bottom;\\n\"])), function (props) {\n  return props.fill;\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);\n\n//# sourceURL=webpack:///./src/components/styles/svg.js?");

/***/ }),

/***/ "./src/components/uploadButton.js":
/*!****************************************!*\
  !*** ./src/components/uploadButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"./src/components/icon.js\");\n/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/common */ \"./src/components/styles/common.js\");\n\n\n\n\n\nvar UploadButton = function UploadButton(props) {\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.theme;\n  });\n  var isCamera = props.isCamera,\n      color = props.color,\n      width = props.width,\n      height = props.height;\n  var photoPath = [\"M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z\"];\n  var cameraPath = [\"M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z\", \"M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z\"];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_3__.FileInput, {\n    opaqueBg: theme.opaqueBg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    d: isCamera ? cameraPath : photoPath,\n    width: width ? width : \"18.75px\",\n    height: height ? height : \"18.75px\",\n    fill: color ? color : theme.defaultBg\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadButton);\n\n//# sourceURL=webpack:///./src/components/uploadButton.js?");

/***/ })

}]);