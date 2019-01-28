/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ClientFormGenerator.js":
/*!***********************************************!*\
  !*** ./src/components/ClientFormGenerator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ClientFormGenerator; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextInput_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInput/TextInput */ \"./src/components/TextInput/TextInput.js\");\n\n\n\nfunction ClientFormGenerator(_ref) {\n  var forms = _ref.forms;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"jsx-151617240\" + \" \" + \"form-container\"\n  }, forms.map(function (control) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      control: control\n    });\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"151617240\"\n  }, \".form-container.jsx-151617240{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\"));\n}\n\n//# sourceURL=webpack:///./src/components/ClientFormGenerator.js?");

/***/ }),

/***/ "./src/components/Label.js":
/*!*********************************!*\
  !*** ./src/components/Label.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Label; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Label(_ref) {\n  var _ref$handlePasteInLab = _ref.handlePasteInLabel,\n      handlePasteInLabel = _ref$handlePasteInLab === void 0 ? null : _ref$handlePasteInLab,\n      _ref$handleKeyPressIn = _ref.handleKeyPressInLabel,\n      handleKeyPressInLabel = _ref$handleKeyPressIn === void 0 ? null : _ref$handleKeyPressIn,\n      _ref$handleClickInLab = _ref.handleClickInLabel,\n      handleClickInLabel = _ref$handleClickInLab === void 0 ? null : _ref$handleClickInLab,\n      _ref$handleInputInLab = _ref.handleInputInLabel,\n      handleInputInLabel = _ref$handleInputInLab === void 0 ? null : _ref$handleInputInLab,\n      _ref$doNotShowLabelPl = _ref.doNotShowLabelPlaceholder,\n      doNotShowLabelPlaceholder = _ref$doNotShowLabelPl === void 0 ? null : _ref$doNotShowLabelPl,\n      _ref$isContentEditabl = _ref.isContentEditable,\n      isContentEditable = _ref$isContentEditabl === void 0 ? null : _ref$isContentEditabl,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    contentEditable: isContentEditable,\n    onPaste: handlePasteInLabel,\n    onKeyPress: handleKeyPressInLabel,\n    onClick: handleClickInLabel,\n    onInput: handleInputInLabel,\n    spellCheck: isContentEditable ? false : null,\n    htmlFor: \"world\",\n    suppressContentEditableWarning: isContentEditable,\n    className: \"jsx-1283850492\"\n  }, children || !doNotShowLabelPlaceholder && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"jsx-1283850492\"\n  }, \"Label\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1283850492\"\n  }, \"label.jsx-1283850492{position:relative;display:block;min-height:2rem;}label.jsx-1283850492>br{display:none;}span.jsx-1283850492{position:absolute;top:0;color:#b3b3b1;pointer-events:none;}\"));\n}\n\n//# sourceURL=webpack:///./src/components/Label.js?");

/***/ }),

/***/ "./src/components/TextInput/TextInput.js":
/*!***********************************************!*\
  !*** ./src/components/TextInput/TextInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextInput; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Label */ \"./src/components/Label.js\");\n\n\n\nfunction TextInput(_ref) {\n  var control = _ref.control,\n      _ref$inputShellRef = _ref.inputShellRef,\n      inputShellRef = _ref$inputShellRef === void 0 ? null : _ref$inputShellRef,\n      _ref$inputRef = _ref.inputRef,\n      inputRef = _ref$inputRef === void 0 ? null : _ref$inputRef,\n      handleInputChange = _ref.handleInputChange;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"jsx-1541497213\"\n  }, !inputRef && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, control.label), control.placeholder && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    ref: inputShellRef,\n    \"aria-hidden\": \"true\",\n    className: \"jsx-1541497213\" + \" \" + \"flex-xy-center\"\n  }, control.placeholder), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: control.type,\n    ref: inputRef,\n    onChange: control.pattern || control.charset ? handleInputChange : null,\n    pattern: control.pattern ? control.pattern : undefined,\n    id: \"world\",\n    className: \"jsx-1541497213\" + \" \" + \"cmp-text__input\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1541497213\"\n  }, \"div.jsx-1541497213{position:relative;}span.jsx-1541497213{position:absolute;left:0;top:-1px;pointer-events:none;color:lightgrey;padding:0.4rem 0.7rem;height:100%;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;}span.jsx-1541497213 i{visibility:hidden;}.cmp-text__input.jsx-1541497213{height:2.7rem;width:100%;padding:0.4rem 0.7rem;color:rgba(0,0,0,0.76);font-weight:400;font-style:normal;font-size:inherit;border:2px solid #e0e0e0;border-radius:0.2em;outline:0;box-shadow:none;}.cmp-text__input.jsx-1541497213:focus{border-color:#2962ff;}\"));\n}\n\n//# sourceURL=webpack:///./src/components/TextInput/TextInput.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/server */ \"styled-jsx/server\");\n/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ClientFormGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ClientFormGenerator */ \"./src/components/ClientFormGenerator.js\");\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar forms = [{\n  label: \"helo\",\n  pattern: \"/d/\"\n}, {\n  label: \"world\",\n  pattern: \"/d/\"\n}]; // tell Express to serve contents from the build directory as static files.\n// app.use(express.static(path.resolve(\"./build\")));\n\napp.get(\"/*\", function (req, res) {\n  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToStaticMarkup(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ClientFormGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    forms: forms\n  }));\n  var styles = styled_jsx_server__WEBPACK_IMPORTED_MODULE_5___default()();\n  var html = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToStaticMarkup(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"html\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"head\", null, styles), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"body\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    id: \"root\",\n    dangerouslySetInnerHTML: {\n      __html: markup\n    }\n  }))));\n  res.end(\"<!doctype html>\".concat(html));\n});\napp.listen(PORT, function () {\n  console.log(\"\\uD83D\\uDE0E  Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/server\");\n\n//# sourceURL=webpack:///external_%22styled-jsx/server%22?");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");\n\n//# sourceURL=webpack:///external_%22styled-jsx/style%22?");

/***/ })

/******/ });