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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway', sans-serif; }\n\nheader {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: none;\n  height: 20vh;\n  background-color: #5296AC;\n  width: 100%;\n  color: #FEFEFE; }\n  header .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em; }\n  header h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end; }\n\nh3 {\n  justify-self: center; }\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: #B0C6D5; }\n\n.booking-form, .login-form, .cost-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: 0 0 10px #5296AC;\n  padding: 1%; }\n\n.login-form {\n  width: 50%;\n  height: 40vh; }\n  .login-form #username,\n  .login-form #pwd {\n    width: 40%;\n    height: 8%;\n    border-radius: 5%;\n    box-shadow: 0 0 10px #5296AC; }\n\n.welcome-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.my-trips {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.hidden {\n  display: none; }\n\n.login-button {\n  width: 30%;\n  align-self: center; }\n\n.welcome-image-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  height: 40em;\n  align-items: center; }\n  .welcome-image-wrapper .welcome-image {\n    height: 20em;\n    width: 40em;\n    filter: opacity(80%);\n    border-radius: 2%;\n    box-shadow: 0 0 10px #5296AC; }\n\nh2 {\n  color: black; }\n\n.welcome-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh;\n  align-items: center;\n  background-color: #B0C6D5;\n  color: #6F8BA4; }\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n\n.options-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-content: space-evenly;\n  width: 80%; }\n  .options-container .my-trips-btn,\n  .options-container .book-trip {\n    border: 3px outset #B0C6D5;\n    border-radius: 15px 15px 15px 15px;\n    padding: 1%;\n    width: 30%;\n    cursor: pointer; }\n    .options-container .my-trips-btn:hover,\n    .options-container .book-trip:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      transition: 0.4s ease; }\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%; }\n\n.booking-button,\nbutton,\n.login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer; }\n  .booking-button:hover,\n  button:hover,\n  .login-button:hover {\n    color: #6F8BA4;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px #BADFE5;\n    transition: 0.4s ease; }\n\n.my-trips-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh; }\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%; }\n\n.my-trips-text {\n  color: black; }\n\n.arrow-wrapper {\n  background-color: #B0C6D5;\n  padding: .7%; }\n  .arrow-wrapper .arrow {\n    padding: 2%;\n    margin-left: 3%; }\n\n.year-cost {\n  justify-content: center;\n  align-self: center; }\n\n.header-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  background-color: #B0C6D5; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  justify-content: space-around;\n  background-color: #B0C6D5;\n  height: 80vh;\n  color: #FEFEFE; }\n\n.book-trip-page {\n  height: 80vh;\n  background-color: #B0C6D5; }\n\n.book-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: #B0C6D5;\n  height: 80%; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 83%;\n  justify-content: space-around; }\n\n.trip-buttons-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  justify-content: space-around;\n  height: 5vh; }\n\n.card-display {\n  display: flex;\n  flex-direction: column;\n  justify-content: row;\n  overflow: auto;\n  height: 80%;\n  grid-gap: 4%;\n  align-items: center; }\n\n.trip-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: 0 0 10px #5296AC;\n  color: black;\n  width: 60%; }\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%; }\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  display: flex; }\n\n.cost-modal {\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%; }\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%; }\n\n@media only screen and (max-width: 800px) {\n  .login-form {\n    width: 80%; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 35em; }\n  .confirm-button,\n  .cancel-button {\n    width: 45%;\n    height: 15%;\n    margin: 1%; } }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em; }\n  .login-button {\n    width: 60%; }\n  #pwd,\n  #username {\n    width: 90vw; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 23em; }\n  .year-cost {\n    text-align: center; }\n  .btn {\n    height: 25; }\n  .trip-card {\n    width: 80%; }\n  .trip-dropdown {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","\n@import \"variables\";\n@import \"normalize\";\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway',\n  sans-serif;\n}\n\nheader {\n@include gridDisplay(1fr 4fr, none);\nheight: 20vh;\nbackground-color: #5296AC;\nwidth: 100%;\ncolor: #FEFEFE;\n\n  .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em;\n  }\n\n  h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end;\n  }\n}\n\nh3 {\n  justify-self: center;\n}\n\n.login-page {\n  @include flexDisplay(column, center);\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: $primary-color;\n}\n\n.booking-form {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: $shadow-color;\n  padding: 1%;\n}\n\n.login-form {\n  @extend .booking-form;\n  width: 50%;\n  height: 40vh;\n\n    #username,\n    #pwd {\n      width: 40%;\n      height: 8%;\n      border-radius: 5%;\n      box-shadow: $shadow-color;\n    }\n}\n\n.welcome-page {\n  @include flexDisplay(column, center)\n}\n\n.my-trips {\n  @include flexDisplay(column, center);\n}\n\n.hidden {\n  display: none;\n}\n\n.login-button {\n width: 30%;\n align-self: center;\n}\n\n.welcome-image-wrapper {\n  @include flexDisplay(column, center);\n  align-self: center;\n  height: 40em;\n  align-items: center;\n\n    .welcome-image {\n      height: 20em;\n      width: 40em;\n      filter: opacity(80%);\n      border-radius: 2%;\n      box-shadow: $shadow-color;\n    }\n}\n\nh2 {\n  color: black;\n}\n\n.welcome-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n  align-items: center;\n  background-color: $primary-color;\n  color: #6F8BA4;\n}\n\n.greeting-container {\n  @include flexDisplay(column, center);\n  align-items: center;\n  width: 100%;\n}\n\n.options-container {\n  @include flexDisplay(row, center);\n  justify-content: space-evenly;\n  width: 80%;\n\n    .my-trips-btn,\n    .book-trip {\n      border: 3px outset $primary-color;\n      border-radius: 15px 15px 15px 15px;\n      padding: 1%;\n      width: 30%;\n      cursor: pointer;\n\n          &:hover {\n            color: #6F8BA4;\n            font-size: 14px;\n            text-shadow: 0px 2px 4px #BADFE5;\n            @include transition(.4s ease);\n          }\n    }\n}\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%;\n}\n\n.booking-button,\n button,\n .login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer;\n\n    &:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      @include transition(.4s ease);\n    }\n}\n\n.my-trips-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n}\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%;\n}\n\n.my-trips-text {\n  color: black;\n}\n\n.arrow-wrapper {\n  background-color: $primary-color;\n  padding: .7%;\n\n  .arrow {\n    padding: 2%;\n    margin-left: 3%;\n  }\n}\n\n.year-cost {\n  justify-content: center;\n  align-self: center;\n}\n\n.header-wrapper {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  background-color: $primary-color;\n}\n\n.trip-card-section {\n  @include flexDisplay(row, start);\n  justify-content: space-around;\n  background-color: $primary-color;\n  height: 80vh;\n  color: #FEFEFE;\n}\n\n.book-trip-page {\n  height: 80vh;\n  background-color: $primary-color;\n}\n\n.book-wrapper {\n  @include flexDisplay(column, center);\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: $primary-color;\n  height: 80%;\n}\n\n.trip-card-section {\n @include flexDisplay(column, center);\n  height: 83%;\n  justify-content: space-around;\n}\n\n.trip-buttons-wrapper {\n @include flexDisplay(row, center);\n width: 100%;\n justify-content: space-around;\n height: 5vh;\n}\n\n.card-display {\n@include flexDisplay(column, row);\noverflow: auto;\nheight: 80%;\ngrid-gap: 4%;\nalign-items: center;\n}\n\n.trip-card {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: $shadow-color;\n  color: black;\n  width: 60%;\n}\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%;\n}\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width:100%;\n  display: flex;\n}\n\n.cost-modal {\n  @extend .booking-form;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%;\n}\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%;\n}\n\n@media only screen and (max-width: 800px) {\n.login-form {\n  width:80%;\n}\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 35em;\n  }\n}\n\n.confirm-button,\n.cancel-button {\n  width: 45%;\n  height: 15%;\n  margin: 1%;\n}\n\n\n}\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em;\n  }\n  .login-button {\n    width: 60%;\n  }\n\n  #pwd,\n  #username {\n    width: 90vw;\n  }\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 23em;\n  }\n}\n\n.year-cost {\n  text-align: center;\n}\n\n.btn {\n  height: 25;\n}\n\n.trip-card {\n  width: 80%;\n}\n\n.trip-dropdown {\n  width:50%;\n}\n}","$primary-color: #B0C6D5;\n$shadow-color: 0 0 10px #5296AC;\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchCalls = {

  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      });
  },

  getAllTravelers() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      });
  },

  getTrips() {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      });
  },

  getDestinations() {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      });
  },

  postTrip(newBooking) {
    return fetch("http://localhost:3001/api/v1/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBooking)
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(error => console.log(error.message))
      
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchCalls);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable max-len */
let domUpdates = {

  welcomeUser(currentUser) {
    let greetingMessage = document.querySelector(".greeting-container");
    let firstName = currentUser.returnTravelerFirstName();
    greetingMessage.innerHTML = "";
    let welcomeMsg = `<h2>Welcome Back, ${firstName}! </h2>`
    greetingMessage.insertAdjacentHTML("afterbegin", welcomeMsg);
  },

  createTripCards(trips) {
    let cardDisplay = document.querySelector(".card-display");
    cardDisplay.innerHTML = "";
    return trips.map(trip => {
      let cardHTML = `
    <article class="trip-card">
      <section class="destination-name-wrapper">
        <h2>${trip.name}</h2>
      </section>
      <section class="image-wrapper">
        <img class="card-image image" src="${trip.image}" alt="${trip.alt}"></img>
      </section>  
      <section class="cost-wrapper">
        <p class="status">Trip Status:${trip.status}</p>
        <p class="lodging-cost cost">Estimated Lodging Cost:${trip.lodging}</p>
        <p class="flight-cost cost">Estimated Flight Cost:${trip.flights}</p>
      </section>
    </article>`
      document.querySelector(".card-display").insertAdjacentHTML("afterbegin", cardHTML);
    });
  },

  displayAmountSpentAYear(currentUser) {
    let yearlyDisplay = document.querySelector(".header-wrapper");
    yearlyDisplay.innerHTML = "";
    let costHTML = `<h3 class="year-cost">You"ve spent ${currentUser} on making memories this year.` 
    yearlyDisplay.insertAdjacentHTML("beforeend", costHTML);
  },

  displayDestinationOptions(destinations) {
    let options = destinations.map(destination => {
      return `<option id="${destination.id}" value="${destination}">${destination}</option>`
    });
    document.querySelector(".trip-dropdown").insertAdjacentHTML("afterbegin",options);
  },

  displayEstimatedTripCost(currentUser) {
    let costDisplay = document.querySelector(".booking-form");
    costDisplay.innerHTML = "";
    let estimatedCost = `<h3>${currentUser.costOfTripAndFee}</h3>`
    costDisplay.insertAdjacentHTML("beforeend", estimatedCost);
  },

  clearInputs(input) {
    input.value = "";
  },

  hideLoginPage() {
    event.preventDefault();
    const loginPage = document.querySelector(".login-page");
    const welcomePage = document.querySelector(".welcome-page");
    loginPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
  },

  displayCost(bookingObject) {
    const costDisplay = document.querySelector(".cost");
    costDisplay.innerHTML = `This trip will cost ${bookingObject.cost}, and includes a 10% agent fee. Would you like to proceed?`
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/curve-arrow.svg":
/*!************************************!*\
  !*** ./src/images/curve-arrow.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/curve-arrow.svg");

/***/ }),

/***/ "./src/images/globe.svg":
/*!******************************!*\
  !*** ./src/images/globe.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/globe.svg");

/***/ }),

/***/ "./src/images/image.png":
/*!******************************!*\
  !*** ./src/images/image.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/image.png");

/***/ }),

/***/ "./src/images/man.jpg":
/*!****************************!*\
  !*** ./src/images/man.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/man.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traveler.js */ "./src/traveler.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _images_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/image.png */ "./src/images/image.png");
/* harmony import */ var _images_man_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/man.jpg */ "./src/images/man.jpg");
/* harmony import */ var _images_globe_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/globe.svg */ "./src/images/globe.svg");
/* harmony import */ var _images_curve_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/curve-arrow.svg */ "./src/images/curve-arrow.svg");
/* eslint-disable max-len */





//images





//globalVariables
let currentTraveler;
let userName;
let allDestinations;
let currentUser;
let tripInfo;
let travelerData;
let tripData;
let destinationData;
let bookingObject; 

//querySelectors
const loginForm = document.querySelector(".login-form");
const welcomePage = document.querySelector(".welcome-page");
const myTripsBtn = document.querySelector(".my-trips-btn");
const bookButton = document.querySelector(".book-trip");
const myTripsPage = document.querySelector(".my-trips");
const backToMain = document.querySelector(".back-to-main");
const backToMainBook = document.querySelector(".back-to-main-book");
const bookingPage = document.querySelector(".book-trip-page");
const currentTripsBtn = document.querySelector(".current-trips-btn");
const pendingTripsBtn = document.querySelector(".pending-trips-btn");
const upcomingTripsBtn = document.querySelector(".upcoming-trips-btn");
const pastTripsBtn = document.querySelector(".past-trips-btn");
const destinationInput = document.querySelector(".trip-dropdown");
const startDate = document.querySelector("#calendar");
const durationInput = document.querySelector("#duration");
const numberOfTravelers = document.querySelector("#numtravelers");
const submitBookingForm = document.querySelector(".booking-form");
const userLoginInput = document.querySelector("#username");
const userPasswordInput = document.querySelector("#pwd");
const confirmButton = document.querySelector(".confirm-button");
const confirmMessage = document.querySelector(".confirm-message");
const cancelButton = document.querySelector(".cancel-button")

//eventListeners
myTripsBtn.addEventListener("click", hideMainPage);
backToMain.addEventListener("click", goBackToMain);
bookButton.addEventListener("click", bookATrip);
backToMainBook.addEventListener("click", backToMainFromBook);
currentTripsBtn.addEventListener("click", getCurrentTrips);
pendingTripsBtn.addEventListener("click", getPendingTrips);
upcomingTripsBtn.addEventListener("click", getUpcomingTrips);
pastTripsBtn.addEventListener("click", getPastTrips);
submitBookingForm.addEventListener("submit", displayModal);
loginForm.addEventListener("submit", userLogin);
confirmButton.addEventListener("click", confirmBooking);
cancelButton.addEventListener("click", cancelRequest)

function getData(id) {
  travelerData = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].getTraveler(id);
  destinationData = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].getDestinations();
  tripData = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].getTrips();
  initiateData();
}

function initiateData() {
  return Promise.all([travelerData, destinationData, tripData])
    .then(responses => {
      currentTraveler = responses[0];
      allDestinations = responses[1].destinations;
      tripInfo = responses[2].trips;
      greetUser(currentTraveler, tripInfo, allDestinations);
    })
}

function userLogin(event) {
  userName = parseInt(userLoginInput.value.split("").splice(8,3).join(""));
  event.preventDefault();
  if (userPasswordInput.value !== "traveler2020") {
    alert("Wrong password, try again");
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(userPasswordInput);
  }
  if (userPasswordInput.value === "traveler2020") {
    getData(userName);
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideLoginPage();
  }
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new _traveler_js__WEBPACK_IMPORTED_MODULE_0__["default"](currentTraveler, tripInfo, allDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].welcomeUser(currentUser);
  getCostSpentOverAYear(currentUser);
  displayTripDropDown();
}

function formatTravelCard(trips) {
  let returnedCurrent = trips.map(trip => {
    const destination = trip.destination;
    const tripCard = {
      name: destination.destination,
      image: destination.image,
      alt: destination.alt,
      status: trip.status,
      lodging: destination.estimatedLodgingCostPerDay,
      flights: destination.estimatedFlightCostPerPerson
    }
    return tripCard;
  })
  return returnedCurrent;
}

function findDestination() {
  const destinationRequest = allDestinations.find(destination => {
    if (destinationInput.value === destination.destination) {
      return destination.id;
    }
  });
  return destinationRequest.id;
}

function displayModal(event) {
  event.preventDefault();
  buildTripObject();
  confirmMessage.classList.remove("hidden");
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(destinationInput);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(startDate);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(durationInput);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(numberOfTravelers);
  submitBookingForm.classList.add("hidden");
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayCost(bookingObject);
}

function cancelRequest() {
  alert("You have cancelled your trip request.")
  confirmMessage.classList.add("hidden");
  submitBookingForm.classList.remove("hidden");
}

function confirmBooking(event) {
  event.preventDefault();
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].postTrip(bookingObject)
    .then(getData(userName))
    .then(alert(`Congrats! Your trip is booked! You will see this booking in your pending trips.`))
    .then(showTripsPage)
  
}

function showTripsPage() {
  myTripsPage.classList.remove("hidden");
  bookingPage.classList.add("hidden");
  confirmMessage.classList.add("hidden");
}

function buildTripObject() {
  bookingObject = {
    id: Number(Date.now()),
    userID: currentUser.id,
    destinationID: findDestination(allDestinations),
    travelers: parseInt(numberOfTravelers.value),
    date: startDate.value.split("-").join("/"),
    duration: parseInt(durationInput.value),
    status: "pending",
    suggestedActivities: [],
    cost: getEstimatedTripCost(numberOfTravelers.value, durationInput.value)
  }
}

function getEstimatedTripCost(numberOfTravelers, duration) {
  const currentDestinationCost = allDestinations.reduce((sum, destination) => {
    if (destinationInput.value === destination.destination) {
      const flights = destination.estimatedFlightCostPerPerson * numberOfTravelers;
      const lodging = destination.estimatedLodgingCostPerDay * duration;
      const agentFee = ((flights + lodging) * .01);
      sum += flights + lodging + agentFee;
    }
    return sum;
  }, 0);
  return currentDestinationCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

function displayTripDropDown() {
  const alphabetically = allDestinations.map(destination => {
    let destinationName = destination.destination;
    return destinationName;
  })
  return _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayDestinationOptions(alphabetically.sort());
}

function getCurrentTrips() {
  let currentTrips = currentUser.findCurrentTrips();
  displayCurrentCards(formatTravelCard(currentTrips));
}

function getPastTrips() {
  let pastTrips = currentUser.findPastTrips();
  displayCurrentCards(formatTravelCard(pastTrips));
}

function getUpcomingTrips() {
  let upComingTrips = currentUser.findUpcomingTrips();
  displayCurrentCards(formatTravelCard(upComingTrips));
}

function getPendingTrips() {
  let pendingTrips = currentUser.filterByStatus("pending");
  displayCurrentCards(formatTravelCard(pendingTrips));
}

function displayCurrentCards(trips) {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].createTripCards(trips);
}

function getCostSpentOverAYear() {
  let cost = currentUser.calculateTotalSpentOnTrips(2020).toLocaleString("en-US", {style: "currency", currency: "USD"});
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAmountSpentAYear(cost);
}

function hideMainPage() {
  welcomePage.classList.add("hidden");
  myTripsPage.classList.remove("hidden");
}

function goBackToMain() {
  welcomePage.classList.remove("hidden");
  myTripsPage.classList.add("hidden");
}

function bookATrip() {
  welcomePage.classList.add("hidden");
  bookingPage.classList.remove("hidden");
  submitBookingForm.classList.remove("hidden");
}

function backToMainFromBook() {
  welcomePage.classList.remove("hidden");
  bookingPage.classList.add("hidden");
}



/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Traveler; });
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* eslint-disable max-len */


class Traveler {
  constructor(travelerData, tripsData, destinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.destinationData = destinationData;
    this.tripsData = tripsData;
    this.trips = this.instantiateNewTrips() || [];
  }

  filterTripData(tripsData) {
    return tripsData.filter(trip => trip.userID === this.id);
  }

  instantiateNewTrips() {
    if (this.tripsData.length > 0)
      return this.tripsData.reduce((acc, trip) => {
        this.destinationData.forEach(destination => {
          if (this.id === trip.userID && trip.destinationID === destination.id) {
            acc.push(new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip, destination));
          }
        });
        return acc  
      }, [])
  }

  filterByStatus(status) {
    const trips = this.trips.filter(trip => trip.status === status)
    return trips;
  }

  findCurrentTrips() {
    const currentTrip = this.trips.reduce((acc, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration)
      if (startDate < today && endDate > today) {
        acc.push(trip);
      }
      return acc;
    }, []);
    return currentTrip;
  }

  findPastTrips() {
    const trips = this.trips.reduce((acc, trip) => {
      let today = new Date();
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration);
      if (endDate < today) {
        acc.push(trip);
      }
      return acc;
    }, []);
    return trips;
  }

  findUpcomingTrips() {
    const trips = this.trips.reduce((acc, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      if (startDate > today) {
        acc.push(trip);
      }
      return acc;
    }, []);
    return trips;
  }

  returnTravelerFirstName() {
    const firstName = this.name.split(" ")[0];
    return firstName;
  }

  calculateTotalSpentOnTrips(year) {
    const tripTotal = this.trips.reduce((total, trip) => {
      if (trip.date.includes(year)) {
        let lodging = trip.destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
        let flights = trip.destination.estimatedFlightCostPerPerson * trip.travelers;
        total += lodging + flights;
      }  
      return total;
    }, 0)
    let agentFee = tripTotal * 0.1;
    return tripTotal + agentFee;
  }

}


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* eslint-disable max-len */
class Trip {
  constructor(tripsData, destinationData) {
    this.id = tripsData.id;
    this.userID = tripsData.userID;
    this.destinationID = tripsData.destinationID;
    this.travelers = tripsData.travelers;
    this.date = this.formatDate(tripsData.date);
    this.date = tripsData.date;
    this.duration = tripsData.duration;
    this.status = tripsData.status;
    this.suggestedActivities = tripsData.suggestedActivities;
    this.destination = destinationData;
  }

  findDestination(destinationData) {
    return destinationData.find(destination => this.destinationID === destination.id)
  }

  calculateCostOfTrip() {
    const costPerDay = this.destination.estimatedLodgingCostPerDay * this.travelers
    const duration = costPerDay * this.duration
    const flights = this.destination.estimatedFlightCostPerPerson * this.travelers
    return duration + flights
  }

  calculateAgentFee() {
    const dollars = (this.calculateCostOfTrip() / 100) * 10
    return dollars
  }

  costOfTripAndFee() {
    return {
      total: this.calculateCostOfTrip(),
      totalPlusFees: this.calculateAgentFee() + this.calculateCostOfTrip()
    }
  }

  formatDate(tripDate) {
    let today = new Date(tripDate);
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return [year, month, day].join("/");
  }

}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jdXJ2ZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW4uanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE87QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5NkFDO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI0ZFRkVGRTsgfVxcbiAgaGVhZGVyIC5nbG9iZS1pbWFnZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiA5ZW07XFxuICAgIHdpZHRoOiA1ZW07IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBmb250LXNpemU6IDIuOGVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7IH1cXG5cXG5oMyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgfVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1OyB9XFxuXFxuLmJvb2tpbmctZm9ybSwgLmxvZ2luLWZvcm0sIC5jb3N0LW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDQlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXI6IHNvbGlkICNDRUE2OTIgMWVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUyOTZBQztcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNDB2aDsgfVxcbiAgLmxvZ2luLWZvcm0gI3VzZXJuYW1lLFxcbiAgLmxvZ2luLWZvcm0gI3B3ZCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogOCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTI5NkFDOyB9XFxuXFxuLndlbGNvbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLm15LXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG4ud2VsY29tZS1pbWFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAud2VsY29tZS1pbWFnZS13cmFwcGVyIC53ZWxjb21lLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyMGVtO1xcbiAgICB3aWR0aDogNDBlbTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDgwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTI5NkFDOyB9XFxuXFxuaDIge1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLndlbGNvbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGhlaWdodDogODB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1O1xcbiAgY29sb3I6ICM2RjhCQTQ7IH1cXG5cXG4uZ3JlZXRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ub3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDgwJTsgfVxcbiAgLm9wdGlvbnMtY29udGFpbmVyIC5teS10cmlwcy1idG4sXFxuICAub3B0aW9ucy1jb250YWluZXIgLmJvb2stdHJpcCB7XFxuICAgIGJvcmRlcjogM3B4IG91dHNldCAjQjBDNkQ1O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5vcHRpb25zLWNvbnRhaW5lciAubXktdHJpcHMtYnRuOmhvdmVyLFxcbiAgICAub3B0aW9ucy1jb250YWluZXIgLmJvb2stdHJpcDpob3ZlciB7XFxuICAgICAgY29sb3I6ICM2RjhCQTQ7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCAjQkFERkU1O1xcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTsgfVxcblxcbi5iYWNrLXRvLW1haW4sXFxuLmJhY2stdG8tbWFpbi1ib29rIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyJTsgfVxcblxcbi5ib29raW5nLWJ1dHRvbixcXG5idXR0b24sXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzUyOTZBQztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5ib29raW5nLWJ1dHRvbjpob3ZlcixcXG4gIGJ1dHRvbjpob3ZlcixcXG4gIC5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogIzZGOEJBNDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggI0JBREZFNTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlOyB9XFxuXFxuLm15LXRyaXBzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4ubXktdHJpcHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbi10b3A6IC0yJTsgfVxcblxcbi5teS10cmlwcy10ZXh0IHtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi5hcnJvdy13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7XFxuICBwYWRkaW5nOiAuNyU7IH1cXG4gIC5hcnJvdy13cmFwcGVyIC5hcnJvdyB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7IH1cXG5cXG4ueWVhci1jb3N0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7IH1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgY29sb3I6ICNGRUZFRkU7IH1cXG5cXG4uYm9vay10cmlwLXBhZ2Uge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTsgfVxcblxcbi5ib29rLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7XFxuICBoZWlnaHQ6IDgwJTsgfVxcblxcbi50cmlwLWNhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi50cmlwLWJ1dHRvbnMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNXZoOyB9XFxuXFxuLmNhcmQtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogcm93O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGdyaWQtZ2FwOiA0JTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUyOTZBQztcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA2MCU7IH1cXG5cXG4uY2FyZC1pbWFnZSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmaWx0ZXI6IG9wYWNpdHkoODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlOyB9XFxuXFxuLmltYWdlLXdyYXBwZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmNvc3QtbW9kYWwge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxJTsgfVxcblxcbi5jb25maXJtLWJ1dHRvbixcXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBtYXJnaW46IDElOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAud2VsY29tZS1pbWFnZS13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiA0MGVtOyB9XFxuICAgIC53ZWxjb21lLWltYWdlLXdyYXBwZXIgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICAgIHdpZHRoOiAzNWVtOyB9XFxuICAuY29uZmlybS1idXR0b24sXFxuICAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtYXJnaW46IDElOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07IH1cXG4gIC5sb2dpbi1idXR0b24ge1xcbiAgICB3aWR0aDogNjAlOyB9XFxuICAjcHdkLFxcbiAgI3VzZXJuYW1lIHtcXG4gICAgd2lkdGg6IDkwdnc7IH1cXG4gIC53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDQwZW07IH1cXG4gICAgLndlbGNvbWUtaW1hZ2Utd3JhcHBlciAud2VsY29tZS1pbWFnZSB7XFxuICAgICAgd2lkdGg6IDIzZW07IH1cXG4gIC55ZWFyLWNvc3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5idG4ge1xcbiAgICBoZWlnaHQ6IDI1OyB9XFxuICAudHJpcC1jYXJkIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLnRyaXAtZHJvcGRvd24ge1xcbiAgICB3aWR0aDogNTAlOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBO0FBRUE7K0VDQStFO0FERy9FOzs7RUNDRTtBRElGO0VBQ0UsaUJBQWlCO0VBQ2pCLE1BQUE7RUFDQSw4QkFBOEI7RUFDOUIsTUFBQSxFQUFPOztBQUdUOytFQ0grRTtBRE0vRTs7RUNIRTtBRE9GO0VBQ0UsU0FBUyxFQUFBOztBQUdYOztFQ0xFO0FEU0Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUNORTtBRFdGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjsrRUNWK0U7QURhL0U7OztFQ1RFO0FEY0Y7RUFDRSx1QkFBdUI7RUFDdkIsTUFBQTtFQUNBLFNBQVM7RUFDVCxNQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLE1BQUEsRUFBTzs7QUFHVDs7O0VDWEU7QURnQkY7RUFDRSxpQ0FBaUM7RUFDakMsTUFBQTtFQUNBLGNBQWM7RUFDZCxNQUFBLEVBQU87O0FBR1Q7K0VDZitFO0FEa0IvRTs7RUNmRTtBRG1CRjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjs7O0VDaEJFO0FEcUJGO0VBQ0UsbUJBQW1CO0VBQ25CLE1BQUE7RUFDQSwwQkFBMEI7RUFDMUIsTUFBQTtFQUNBLGlDQUFpQztFQUNqQyxNQUFBLEVBQU87O0FBR1Q7O0VDbkJFO0FEdUJGOztFQUVFLG1CQUFtQixF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NkJBQTZCO0VBQzdCLFdBQVcsRUFBQTs7QUFHWjtFQ3RPRSxhQUFhO0VBQ2Isc0JEc095QjtFQ3JPekIsb0JEcU84QjtFQUNoQyxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHbkI7RUM5T0UsYUFBYTtFQUNiLHNCRDhPMkI7RUM3TzNCLHVCRDZPbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJDaFE2QjtFRGlRN0IsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLGFBQWEsRUFBQTs7QUFHZjtFQUVFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQTFPQTtJQTRPRSxVQUFTLEVBQUE7RUE3TVg7SUFpTkUsWUFBWSxFQUFBO0lBak5kO01Bb05JLFdBQVcsRUFBQTtFQWhCZjs7SUFzQkUsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVLEVBQUEsRUFDWDs7QUFLRDtFRHBSQTtJQ3NSSSxnQkFBZ0IsRUFBQTtFQXpPcEI7SUE0T0ksVUFBVSxFQUFBO0VBR1o7O0lBRUUsV0FBVyxFQUFBO0VBNU9mO0lBZ1BFLFlBQVksRUFBQTtJQWhQZDtNQW1QSSxXQUFXLEVBQUE7RUF6SWY7SUE4SUUsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxVQUFVLEVBQUE7RUEzRlo7SUErRkUsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFTLEVBQUEsRUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiXFxuQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemVcXFwiO1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JyxcXG4gIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDRmciwgbm9uZSk7XFxuaGVpZ2h0OiAyMHZoO1xcbmJhY2tncm91bmQtY29sb3I6ICM1Mjk2QUM7XFxud2lkdGg6IDEwMCU7XFxuY29sb3I6ICNGRUZFRkU7XFxuXFxuICAuZ2xvYmUtaW1hZ2Uge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgfVxcbn1cXG5cXG5oMyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxufVxcblxcbi5ib29raW5nLWZvcm0ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA0JTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyOiBzb2xpZCAjQ0VBNjkyIDFlbTtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctY29sb3I7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgQGV4dGVuZCAuYm9va2luZy1mb3JtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNDB2aDtcXG5cXG4gICAgI3VzZXJuYW1lLFxcbiAgICAjcHdkIHtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIGhlaWdodDogOCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4ud2VsY29tZS1wYWdlIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKVxcbn1cXG5cXG4ubXktdHJpcHMge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiB3aWR0aDogMzAlO1xcbiBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICAgIGhlaWdodDogMjBlbTtcXG4gICAgICB3aWR0aDogNDBlbTtcXG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoODAlKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLndlbGNvbWUtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgc3RhcnQpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICM2RjhCQTQ7XFxufVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3B0aW9ucy1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogODAlO1xcblxcbiAgICAubXktdHJpcHMtYnRuLFxcbiAgICAuYm9vay10cmlwIHtcXG4gICAgICBib3JkZXI6IDNweCBvdXRzZXQgJHByaW1hcnktY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgICBwYWRkaW5nOiAxJTtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICM2RjhCQTQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCAjQkFERkU1O1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjRzIGVhc2UpO1xcbiAgICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJhY2stdG8tbWFpbixcXG4uYmFjay10by1tYWluLWJvb2sge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4uYm9va2luZy1idXR0b24sXFxuIGJ1dHRvbixcXG4gLmxvZ2luLWJ1dHRvbiB7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzUyOTZBQztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNkY4QkE0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggI0JBREZFNTtcXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG4gICAgfVxcbn1cXG5cXG4ubXktdHJpcHMtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgc3RhcnQpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4ubXktdHJpcHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbi10b3A6IC0yJTtcXG59XFxuXFxuLm15LXRyaXBzLXRleHQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYXJyb3ctd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIHBhZGRpbmc6IC43JTtcXG5cXG4gIC5hcnJvdyB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxuICB9XFxufVxcblxcbi55ZWFyLWNvc3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBzdGFydCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgY29sb3I6ICNGRUZFRkU7XFxufVxcblxcbi5ib29rLXRyaXAtcGFnZSB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLmJvb2std3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBoZWlnaHQ6IDgzJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udHJpcC1idXR0b25zLXdyYXBwZXIge1xcbiBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuIHdpZHRoOiAxMDAlO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jYXJkLWRpc3BsYXkge1xcbkBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgcm93KTtcXG5vdmVyZmxvdzogYXV0bztcXG5oZWlnaHQ6IDgwJTtcXG5ncmlkLWdhcDogNCU7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRyaXAtY2FyZCB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZmO1xcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1jb2xvcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZpbHRlcjogb3BhY2l0eSg4MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxufVxcblxcbi5pbWFnZS13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOjEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29zdC1tb2RhbCB7XFxuICBAZXh0ZW5kIC5ib29raW5nLWZvcm07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDElO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbi5sb2dpbi1mb3JtIHtcXG4gIHdpZHRoOjgwJTtcXG59XFxuXFxuLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDQwZW07XFxuXFxuICAud2VsY29tZS1pbWFnZSB7XFxuICAgIHdpZHRoOiAzNWVtO1xcbiAgfVxcbn1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG4gIC5sb2dpbi1idXR0b24ge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgI3B3ZCxcXG4gICN1c2VybmFtZSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgfVxcblxcbi53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA0MGVtO1xcblxcbiAgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICB3aWR0aDogMjNlbTtcXG4gIH1cXG59XFxuXFxuLnllYXItY29zdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgaGVpZ2h0OiAyNTtcXG59XFxuXFxuLnRyaXAtY2FyZCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udHJpcC1kcm9wZG93biB7XFxuICB3aWR0aDo1MCU7XFxufVxcbn1cIixcIiRwcmltYXJ5LWNvbG9yOiAjQjBDNkQ1O1xcbiRzaGFkb3ctY29sb3I6IDAgMCAxMHB4ICM1Mjk2QUM7XFxuXFxuQG1peGluIHRyYW5zaXRpb24oJHZhbHVlKSB7XFxuICB0cmFuc2l0aW9uOiAkdmFsdWU7XFxufVxcblxcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHJvd3MpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRjb2x1bW5zO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93cztcXG59XFxuXFxuQG1peGluIGZsZXhEaXNwbGF5KCRkaXJlY3Rpb24sICRqdXN0aWZ5KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZmV0Y2hDYWxscyA9IHtcblxuICBnZXRUcmF2ZWxlcihpZCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgICB9KTtcbiAgfSxcblxuICBnZXRBbGxUcmF2ZWxlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSk7XG4gIH0sXG5cbiAgZ2V0VHJpcHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgICB9KTtcbiAgfSxcblxuICBnZXREZXN0aW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSk7XG4gIH0sXG5cbiAgcG9zdFRyaXAobmV3Qm9va2luZykge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdCb29raW5nKVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICAgICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hDYWxsczsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICB3ZWxjb21lVXNlcihjdXJyZW50VXNlcikge1xuICAgIGxldCBncmVldGluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWV0aW5nLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgZmlyc3ROYW1lID0gY3VycmVudFVzZXIucmV0dXJuVHJhdmVsZXJGaXJzdE5hbWUoKTtcbiAgICBncmVldGluZ01lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgd2VsY29tZU1zZyA9IGA8aDI+V2VsY29tZSBCYWNrLCAke2ZpcnN0TmFtZX0hIDwvaDI+YFxuICAgIGdyZWV0aW5nTWVzc2FnZS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHdlbGNvbWVNc2cpO1xuICB9LFxuXG4gIGNyZWF0ZVRyaXBDYXJkcyh0cmlwcykge1xuICAgIGxldCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1kaXNwbGF5XCIpO1xuICAgIGNhcmREaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmV0dXJuIHRyaXBzLm1hcCh0cmlwID0+IHtcbiAgICAgIGxldCBjYXJkSFRNTCA9IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cInRyaXAtY2FyZFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkZXN0aW5hdGlvbi1uYW1lLXdyYXBwZXJcIj5cbiAgICAgICAgPGgyPiR7dHJpcC5uYW1lfTwvaDI+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImltYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2UgaW1hZ2VcIiBzcmM9XCIke3RyaXAuaW1hZ2V9XCIgYWx0PVwiJHt0cmlwLmFsdH1cIj48L2ltZz5cbiAgICAgIDwvc2VjdGlvbj4gIFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb3N0LXdyYXBwZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGF0dXNcIj5UcmlwIFN0YXR1czoke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2RnaW5nLWNvc3QgY29zdFwiPkVzdGltYXRlZCBMb2RnaW5nIENvc3Q6JHt0cmlwLmxvZGdpbmd9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZsaWdodC1jb3N0IGNvc3RcIj5Fc3RpbWF0ZWQgRmxpZ2h0IENvc3Q6JHt0cmlwLmZsaWdodHN9PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvYXJ0aWNsZT5gXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtZGlzcGxheVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGNhcmRIVE1MKTtcbiAgICB9KTtcbiAgfSxcblxuICBkaXNwbGF5QW1vdW50U3BlbnRBWWVhcihjdXJyZW50VXNlcikge1xuICAgIGxldCB5ZWFybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItd3JhcHBlclwiKTtcbiAgICB5ZWFybHlEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGNvc3RIVE1MID0gYDxoMyBjbGFzcz1cInllYXItY29zdFwiPllvdVwidmUgc3BlbnQgJHtjdXJyZW50VXNlcn0gb24gbWFraW5nIG1lbW9yaWVzIHRoaXMgeWVhci5gIFxuICAgIHllYXJseURpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNvc3RIVE1MKTtcbiAgfSxcblxuICBkaXNwbGF5RGVzdGluYXRpb25PcHRpb25zKGRlc3RpbmF0aW9ucykge1xuICAgIGxldCBvcHRpb25zID0gZGVzdGluYXRpb25zLm1hcChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICByZXR1cm4gYDxvcHRpb24gaWQ9XCIke2Rlc3RpbmF0aW9uLmlkfVwiIHZhbHVlPVwiJHtkZXN0aW5hdGlvbn1cIj4ke2Rlc3RpbmF0aW9ufTwvb3B0aW9uPmBcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyaXAtZHJvcGRvd25cIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLG9wdGlvbnMpO1xuICB9LFxuXG4gIGRpc3BsYXlFc3RpbWF0ZWRUcmlwQ29zdChjdXJyZW50VXNlcikge1xuICAgIGxldCBjb3N0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9va2luZy1mb3JtXCIpO1xuICAgIGNvc3REaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGVzdGltYXRlZENvc3QgPSBgPGgzPiR7Y3VycmVudFVzZXIuY29zdE9mVHJpcEFuZEZlZX08L2gzPmBcbiAgICBjb3N0RGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZXN0aW1hdGVkQ29zdCk7XG4gIH0sXG5cbiAgY2xlYXJJbnB1dHMoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0sXG5cbiAgaGlkZUxvZ2luUGFnZSgpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcGFnZVwiKTtcbiAgICBjb25zdCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1wYWdlXCIpO1xuICAgIGxvZ2luUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHdlbGNvbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0sXG5cbiAgZGlzcGxheUNvc3QoYm9va2luZ09iamVjdCkge1xuICAgIGNvbnN0IGNvc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3N0XCIpO1xuICAgIGNvc3REaXNwbGF5LmlubmVySFRNTCA9IGBUaGlzIHRyaXAgd2lsbCBjb3N0ICR7Ym9va2luZ09iamVjdC5jb3N0fSwgYW5kIGluY2x1ZGVzIGEgMTAlIGFnZW50IGZlZS4gV291bGQgeW91IGxpa2UgdG8gcHJvY2VlZD9gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jdXJ2ZS1hcnJvdy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9nbG9iZS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pbWFnZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tYW4uanBnXCI7IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gXCIuL3RyYXZlbGVyLmpzXCI7XG5pbXBvcnQgZmV0Y2hDYWxscyBmcm9tIFwiLi9hcGlDYWxsc1wiO1xuaW1wb3J0IFwiLi9jc3MvYmFzZS5zY3NzXCI7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tIFwiLi9kb21VcGRhdGVzLmpzXCI7XG5cbi8vaW1hZ2VzXG5pbXBvcnQgXCIuL2ltYWdlcy9pbWFnZS5wbmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL21hbi5qcGdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL2dsb2JlLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvY3VydmUtYXJyb3cuc3ZnXCI7XG5cbi8vZ2xvYmFsVmFyaWFibGVzXG5sZXQgY3VycmVudFRyYXZlbGVyO1xubGV0IHVzZXJOYW1lO1xubGV0IGFsbERlc3RpbmF0aW9ucztcbmxldCBjdXJyZW50VXNlcjtcbmxldCB0cmlwSW5mbztcbmxldCB0cmF2ZWxlckRhdGE7XG5sZXQgdHJpcERhdGE7XG5sZXQgZGVzdGluYXRpb25EYXRhO1xubGV0IGJvb2tpbmdPYmplY3Q7IFxuXG4vL3F1ZXJ5U2VsZWN0b3JzXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm1cIik7XG5jb25zdCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1wYWdlXCIpO1xuY29uc3QgbXlUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktdHJpcHMtYnRuXCIpO1xuY29uc3QgYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay10cmlwXCIpO1xuY29uc3QgbXlUcmlwc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXRyaXBzXCIpO1xuY29uc3QgYmFja1RvTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay10by1tYWluXCIpO1xuY29uc3QgYmFja1RvTWFpbkJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stdG8tbWFpbi1ib29rXCIpO1xuY29uc3QgYm9va2luZ1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stdHJpcC1wYWdlXCIpO1xuY29uc3QgY3VycmVudFRyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRyaXBzLWJ0blwiKTtcbmNvbnN0IHBlbmRpbmdUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy1idG5cIik7XG5jb25zdCB1cGNvbWluZ1RyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1idG5cIik7XG5jb25zdCBwYXN0VHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHMtYnRuXCIpO1xuY29uc3QgZGVzdGluYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJpcC1kcm9wZG93blwiKTtcbmNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FsZW5kYXJcIik7XG5jb25zdCBkdXJhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdXJhdGlvblwiKTtcbmNvbnN0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW10cmF2ZWxlcnNcIik7XG5jb25zdCBzdWJtaXRCb29raW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9va2luZy1mb3JtXCIpO1xuY29uc3QgdXNlckxvZ2luSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpO1xuY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B3ZFwiKTtcbmNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm0tYnV0dG9uXCIpO1xuY29uc3QgY29uZmlybU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm0tbWVzc2FnZVwiKTtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ1dHRvblwiKVxuXG4vL2V2ZW50TGlzdGVuZXJzXG5teVRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWFpblBhZ2UpO1xuYmFja1RvTWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrVG9NYWluKTtcbmJvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvb2tBVHJpcCk7XG5iYWNrVG9NYWluQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmFja1RvTWFpbkZyb21Cb29rKTtcbmN1cnJlbnRUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0Q3VycmVudFRyaXBzKTtcbnBlbmRpbmdUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0UGVuZGluZ1RyaXBzKTtcbnVwY29taW5nVHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFVwY29taW5nVHJpcHMpO1xucGFzdFRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRQYXN0VHJpcHMpO1xuc3VibWl0Qm9va2luZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBkaXNwbGF5TW9kYWwpO1xubG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdXNlckxvZ2luKTtcbmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1Cb29raW5nKTtcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsUmVxdWVzdClcblxuZnVuY3Rpb24gZ2V0RGF0YShpZCkge1xuICB0cmF2ZWxlckRhdGEgPSBmZXRjaENhbGxzLmdldFRyYXZlbGVyKGlkKTtcbiAgZGVzdGluYXRpb25EYXRhID0gZmV0Y2hDYWxscy5nZXREZXN0aW5hdGlvbnMoKTtcbiAgdHJpcERhdGEgPSBmZXRjaENhbGxzLmdldFRyaXBzKCk7XG4gIGluaXRpYXRlRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZURhdGEoKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChbdHJhdmVsZXJEYXRhLCBkZXN0aW5hdGlvbkRhdGEsIHRyaXBEYXRhXSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgY3VycmVudFRyYXZlbGVyID0gcmVzcG9uc2VzWzBdO1xuICAgICAgYWxsRGVzdGluYXRpb25zID0gcmVzcG9uc2VzWzFdLmRlc3RpbmF0aW9ucztcbiAgICAgIHRyaXBJbmZvID0gcmVzcG9uc2VzWzJdLnRyaXBzO1xuICAgICAgZ3JlZXRVc2VyKGN1cnJlbnRUcmF2ZWxlciwgdHJpcEluZm8sIGFsbERlc3RpbmF0aW9ucyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXNlckxvZ2luKGV2ZW50KSB7XG4gIHVzZXJOYW1lID0gcGFyc2VJbnQodXNlckxvZ2luSW5wdXQudmFsdWUuc3BsaXQoXCJcIikuc3BsaWNlKDgsMykuam9pbihcIlwiKSk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh1c2VyUGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gXCJ0cmF2ZWxlcjIwMjBcIikge1xuICAgIGFsZXJ0KFwiV3JvbmcgcGFzc3dvcmQsIHRyeSBhZ2FpblwiKTtcbiAgICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKHVzZXJQYXNzd29yZElucHV0KTtcbiAgfVxuICBpZiAodXNlclBhc3N3b3JkSW5wdXQudmFsdWUgPT09IFwidHJhdmVsZXIyMDIwXCIpIHtcbiAgICBnZXREYXRhKHVzZXJOYW1lKTtcbiAgICBkb21VcGRhdGVzLmhpZGVMb2dpblBhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBncmVldFVzZXIoY3VycmVudFRyYXZlbGVyLCB0cmlwSW5mbywgYWxsRGVzdGluYXRpb25zKSB7XG4gIGN1cnJlbnRVc2VyID0gbmV3IFRyYXZlbGVyKGN1cnJlbnRUcmF2ZWxlciwgdHJpcEluZm8sIGFsbERlc3RpbmF0aW9ucyk7XG4gIGRvbVVwZGF0ZXMud2VsY29tZVVzZXIoY3VycmVudFVzZXIpO1xuICBnZXRDb3N0U3BlbnRPdmVyQVllYXIoY3VycmVudFVzZXIpO1xuICBkaXNwbGF5VHJpcERyb3BEb3duKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRyYXZlbENhcmQodHJpcHMpIHtcbiAgbGV0IHJldHVybmVkQ3VycmVudCA9IHRyaXBzLm1hcCh0cmlwID0+IHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRyaXAuZGVzdGluYXRpb247XG4gICAgY29uc3QgdHJpcENhcmQgPSB7XG4gICAgICBuYW1lOiBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbixcbiAgICAgIGltYWdlOiBkZXN0aW5hdGlvbi5pbWFnZSxcbiAgICAgIGFsdDogZGVzdGluYXRpb24uYWx0LFxuICAgICAgc3RhdHVzOiB0cmlwLnN0YXR1cyxcbiAgICAgIGxvZGdpbmc6IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5LFxuICAgICAgZmxpZ2h0czogZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgIH1cbiAgICByZXR1cm4gdHJpcENhcmQ7XG4gIH0pXG4gIHJldHVybiByZXR1cm5lZEN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGZpbmREZXN0aW5hdGlvbigpIHtcbiAgY29uc3QgZGVzdGluYXRpb25SZXF1ZXN0ID0gYWxsRGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4ge1xuICAgIGlmIChkZXN0aW5hdGlvbklucHV0LnZhbHVlID09PSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbikge1xuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvblJlcXVlc3QuaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBidWlsZFRyaXBPYmplY3QoKTtcbiAgY29uZmlybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhkZXN0aW5hdGlvbklucHV0KTtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhzdGFydERhdGUpO1xuICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKGR1cmF0aW9uSW5wdXQpO1xuICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKG51bWJlck9mVHJhdmVsZXJzKTtcbiAgc3VibWl0Qm9va2luZ0Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q29zdChib29raW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUmVxdWVzdCgpIHtcbiAgYWxlcnQoXCJZb3UgaGF2ZSBjYW5jZWxsZWQgeW91ciB0cmlwIHJlcXVlc3QuXCIpXG4gIGNvbmZpcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEJvb2tpbmdGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1Cb29raW5nKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGZldGNoQ2FsbHMucG9zdFRyaXAoYm9va2luZ09iamVjdClcbiAgICAudGhlbihnZXREYXRhKHVzZXJOYW1lKSlcbiAgICAudGhlbihhbGVydChgQ29uZ3JhdHMhIFlvdXIgdHJpcCBpcyBib29rZWQhIFlvdSB3aWxsIHNlZSB0aGlzIGJvb2tpbmcgaW4geW91ciBwZW5kaW5nIHRyaXBzLmApKVxuICAgIC50aGVuKHNob3dUcmlwc1BhZ2UpXG4gIFxufVxuXG5mdW5jdGlvbiBzaG93VHJpcHNQYWdlKCkge1xuICBteVRyaXBzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBib29raW5nUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFRyaXBPYmplY3QoKSB7XG4gIGJvb2tpbmdPYmplY3QgPSB7XG4gICAgaWQ6IE51bWJlcihEYXRlLm5vdygpKSxcbiAgICB1c2VySUQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IGZpbmREZXN0aW5hdGlvbihhbGxEZXN0aW5hdGlvbnMpLFxuICAgIHRyYXZlbGVyczogcGFyc2VJbnQobnVtYmVyT2ZUcmF2ZWxlcnMudmFsdWUpLFxuICAgIGRhdGU6IHN0YXJ0RGF0ZS52YWx1ZS5zcGxpdChcIi1cIikuam9pbihcIi9cIiksXG4gICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpLFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gICAgY29zdDogZ2V0RXN0aW1hdGVkVHJpcENvc3QobnVtYmVyT2ZUcmF2ZWxlcnMudmFsdWUsIGR1cmF0aW9uSW5wdXQudmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVHJpcENvc3QobnVtYmVyT2ZUcmF2ZWxlcnMsIGR1cmF0aW9uKSB7XG4gIGNvbnN0IGN1cnJlbnREZXN0aW5hdGlvbkNvc3QgPSBhbGxEZXN0aW5hdGlvbnMucmVkdWNlKChzdW0sIGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgaWYgKGRlc3RpbmF0aW9uSW5wdXQudmFsdWUgPT09IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uKSB7XG4gICAgICBjb25zdCBmbGlnaHRzID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIG51bWJlck9mVHJhdmVsZXJzO1xuICAgICAgY29uc3QgbG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogZHVyYXRpb247XG4gICAgICBjb25zdCBhZ2VudEZlZSA9ICgoZmxpZ2h0cyArIGxvZGdpbmcpICogLjAxKTtcbiAgICAgIHN1bSArPSBmbGlnaHRzICsgbG9kZ2luZyArIGFnZW50RmVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9LCAwKTtcbiAgcmV0dXJuIGN1cnJlbnREZXN0aW5hdGlvbkNvc3QudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBEcm9wRG93bigpIHtcbiAgY29uc3QgYWxwaGFiZXRpY2FsbHkgPSBhbGxEZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICBsZXQgZGVzdGluYXRpb25OYW1lID0gZGVzdGluYXRpb24uZGVzdGluYXRpb247XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uTmFtZTtcbiAgfSlcbiAgcmV0dXJuIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhhbHBoYWJldGljYWxseS5zb3J0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VHJpcHMoKSB7XG4gIGxldCBjdXJyZW50VHJpcHMgPSBjdXJyZW50VXNlci5maW5kQ3VycmVudFRyaXBzKCk7XG4gIGRpc3BsYXlDdXJyZW50Q2FyZHMoZm9ybWF0VHJhdmVsQ2FyZChjdXJyZW50VHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzdFRyaXBzKCkge1xuICBsZXQgcGFzdFRyaXBzID0gY3VycmVudFVzZXIuZmluZFBhc3RUcmlwcygpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGFzdFRyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFVwY29taW5nVHJpcHMoKSB7XG4gIGxldCB1cENvbWluZ1RyaXBzID0gY3VycmVudFVzZXIuZmluZFVwY29taW5nVHJpcHMoKTtcbiAgZGlzcGxheUN1cnJlbnRDYXJkcyhmb3JtYXRUcmF2ZWxDYXJkKHVwQ29taW5nVHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ1RyaXBzKCkge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gY3VycmVudFVzZXIuZmlsdGVyQnlTdGF0dXMoXCJwZW5kaW5nXCIpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGVuZGluZ1RyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZHModHJpcHMpIHtcbiAgZG9tVXBkYXRlcy5jcmVhdGVUcmlwQ2FyZHModHJpcHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3N0U3BlbnRPdmVyQVllYXIoKSB7XG4gIGxldCBjb3N0ID0gY3VycmVudFVzZXIuY2FsY3VsYXRlVG90YWxTcGVudE9uVHJpcHMoMjAyMCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QW1vdW50U3BlbnRBWWVhcihjb3N0KTtcbn1cblxuZnVuY3Rpb24gaGlkZU1haW5QYWdlKCkge1xuICB3ZWxjb21lUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBteVRyaXBzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBnb0JhY2tUb01haW4oKSB7XG4gIHdlbGNvbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIG15VHJpcHNQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGJvb2tBVHJpcCgpIHtcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYm9va2luZ1BhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgc3VibWl0Qm9va2luZ0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gYmFja1RvTWFpbkZyb21Cb29rKCkge1xuICB3ZWxjb21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBib29raW5nUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgVHJpcCBmcm9tIFwiLi90cmlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwc0RhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXJEYXRhLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlckRhdGEudHJhdmVsZXJUeXBlO1xuICAgIHRoaXMuZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25EYXRhO1xuICAgIHRoaXMudHJpcHNEYXRhID0gdHJpcHNEYXRhO1xuICAgIHRoaXMudHJpcHMgPSB0aGlzLmluc3RhbnRpYXRlTmV3VHJpcHMoKSB8fCBbXTtcbiAgfVxuXG4gIGZpbHRlclRyaXBEYXRhKHRyaXBzRGF0YSkge1xuICAgIHJldHVybiB0cmlwc0RhdGEuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpO1xuICB9XG5cbiAgaW5zdGFudGlhdGVOZXdUcmlwcygpIHtcbiAgICBpZiAodGhpcy50cmlwc0RhdGEubGVuZ3RoID4gMClcbiAgICAgIHJldHVybiB0aGlzLnRyaXBzRGF0YS5yZWR1Y2UoKGFjYywgdHJpcCkgPT4ge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uRGF0YS5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gdHJpcC51c2VySUQgJiYgdHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCkge1xuICAgICAgICAgICAgYWNjLnB1c2gobmV3IFRyaXAodHJpcCwgZGVzdGluYXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjICBcbiAgICAgIH0sIFtdKVxuICB9XG5cbiAgZmlsdGVyQnlTdGF0dXMoc3RhdHVzKSB7XG4gICAgY29uc3QgdHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSBzdGF0dXMpXG4gICAgcmV0dXJuIHRyaXBzO1xuICB9XG5cbiAgZmluZEN1cnJlbnRUcmlwcygpIHtcbiAgICBjb25zdCBjdXJyZW50VHJpcCA9IHRoaXMudHJpcHMucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGxldCBlbmREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIHRyaXAuZHVyYXRpb24pXG4gICAgICBpZiAoc3RhcnREYXRlIDwgdG9kYXkgJiYgZW5kRGF0ZSA+IHRvZGF5KSB7XG4gICAgICAgIGFjYy5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGN1cnJlbnRUcmlwO1xuICB9XG5cbiAgZmluZFBhc3RUcmlwcygpIHtcbiAgICBjb25zdCB0cmlwcyA9IHRoaXMudHJpcHMucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBlbmREYXRlLnNldERhdGUoZW5kRGF0ZS5nZXREYXRlKCkgKyB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmIChlbmREYXRlIDwgdG9kYXkpIHtcbiAgICAgICAgYWNjLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdHJpcHM7XG4gIH1cblxuICBmaW5kVXBjb21pbmdUcmlwcygpIHtcbiAgICBjb25zdCB0cmlwcyA9IHRoaXMudHJpcHMucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGlmIChzdGFydERhdGUgPiB0b2RheSkge1xuICAgICAgICBhY2MucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB0cmlwcztcbiAgfVxuXG4gIHJldHVyblRyYXZlbGVyRmlyc3ROYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRoaXMubmFtZS5zcGxpdChcIiBcIilbMF07XG4gICAgcmV0dXJuIGZpcnN0TmFtZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsU3BlbnRPblRyaXBzKHllYXIpIHtcbiAgICBjb25zdCB0cmlwVG90YWwgPSB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGlmICh0cmlwLmRhdGUuaW5jbHVkZXMoeWVhcikpIHtcbiAgICAgICAgbGV0IGxvZGdpbmcgPSB0cmlwLmRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdHJpcC5kdXJhdGlvbiAqIHRyaXAudHJhdmVsZXJzO1xuICAgICAgICBsZXQgZmxpZ2h0cyA9IHRyaXAuZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRyaXAudHJhdmVsZXJzO1xuICAgICAgICB0b3RhbCArPSBsb2RnaW5nICsgZmxpZ2h0cztcbiAgICAgIH0gIFxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIDApXG4gICAgbGV0IGFnZW50RmVlID0gdHJpcFRvdGFsICogMC4xO1xuICAgIHJldHVybiB0cmlwVG90YWwgKyBhZ2VudEZlZTtcbiAgfVxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcHNEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJpcHNEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gdHJpcHNEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwc0RhdGEuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXBzRGF0YS50cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gdGhpcy5mb3JtYXREYXRlKHRyaXBzRGF0YS5kYXRlKTtcbiAgICB0aGlzLmRhdGUgPSB0cmlwc0RhdGEuZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcHNEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcHNEYXRhLnN0YXR1cztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwc0RhdGEuc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25EYXRhO1xuICB9XG5cbiAgZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbkRhdGEuZmluZChkZXN0aW5hdGlvbiA9PiB0aGlzLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uLmlkKVxuICB9XG5cbiAgY2FsY3VsYXRlQ29zdE9mVHJpcCgpIHtcbiAgICBjb25zdCBjb3N0UGVyRGF5ID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRoaXMudHJhdmVsZXJzXG4gICAgY29uc3QgZHVyYXRpb24gPSBjb3N0UGVyRGF5ICogdGhpcy5kdXJhdGlvblxuICAgIGNvbnN0IGZsaWdodHMgPSB0aGlzLmRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0aGlzLnRyYXZlbGVyc1xuICAgIHJldHVybiBkdXJhdGlvbiArIGZsaWdodHNcbiAgfVxuXG4gIGNhbGN1bGF0ZUFnZW50RmVlKCkge1xuICAgIGNvbnN0IGRvbGxhcnMgPSAodGhpcy5jYWxjdWxhdGVDb3N0T2ZUcmlwKCkgLyAxMDApICogMTBcbiAgICByZXR1cm4gZG9sbGFyc1xuICB9XG5cbiAgY29zdE9mVHJpcEFuZEZlZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWw6IHRoaXMuY2FsY3VsYXRlQ29zdE9mVHJpcCgpLFxuICAgICAgdG90YWxQbHVzRmVlczogdGhpcy5jYWxjdWxhdGVBZ2VudEZlZSgpICsgdGhpcy5jYWxjdWxhdGVDb3N0T2ZUcmlwKClcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKHRyaXBEYXRlKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUodHJpcERhdGUpO1xuICAgIGxldCBtb250aCA9ICcnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKTtcbiAgICBsZXQgZGF5ID0gJycgKyB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gICAgfVxuICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgZGF5ID0gJzAnICsgZGF5XG4gICAgfVxuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbihcIi9cIik7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==