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
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway', sans-serif; }\n\nheader {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: none;\n  height: 20vh;\n  background-color: #5296AC;\n  width: 100%;\n  color: #FEFEFE; }\n  header .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em; }\n  header h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end; }\n\nh3 {\n  justify-self: center; }\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: #B0C6D5; }\n\n.booking-form, .login-form, .cost-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: 0 0 10px #5296AC;\n  padding: 1%; }\n\n.login-form {\n  width: 50%;\n  height: 40vh; }\n  .login-form #username,\n  .login-form #pwd {\n    width: 40%;\n    height: 8%;\n    border-radius: 5%;\n    box-shadow: 0 0 10px #5296AC; }\n\n.welcome-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.my-trips {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.hidden {\n  display: none; }\n\n.login-button {\n  width: 30%;\n  align-self: center; }\n\n.welcome-image-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  height: 40em;\n  align-items: center; }\n  .welcome-image-wrapper .welcome-image {\n    height: 20em;\n    width: 40em;\n    filter: opacity(80%);\n    border-radius: 2%;\n    box-shadow: 0 0 10px #5296AC; }\n\nh2 {\n  color: black; }\n\n.welcome-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh;\n  align-items: center;\n  background-color: #B0C6D5;\n  color: #6F8BA4; }\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n\n.options-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-content: space-evenly;\n  width: 80%; }\n  .options-container .my-trips-btn,\n  .options-container .book-trip {\n    border: 3px outset #B0C6D5;\n    border-radius: 15px 15px 15px 15px;\n    padding: 1%;\n    width: 30%;\n    cursor: pointer; }\n    .options-container .my-trips-btn:hover,\n    .options-container .book-trip:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      transition: 0.4s ease; }\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%; }\n\n.booking-button,\nbutton,\n.login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer; }\n  .booking-button:hover,\n  button:hover,\n  .login-button:hover {\n    color: #6F8BA4;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px #BADFE5;\n    transition: 0.4s ease; }\n\n.my-trips-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh; }\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%; }\n\n.my-trips-text {\n  color: black; }\n\n.arrow-wrapper {\n  background-color: #B0C6D5;\n  padding: .7%; }\n  .arrow-wrapper .arrow {\n    padding: 2%;\n    margin-left: 3%; }\n\n.year-cost {\n  justify-content: center;\n  align-self: center; }\n\n.header-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  background-color: #B0C6D5; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  justify-content: space-around;\n  background-color: #B0C6D5;\n  height: 80vh;\n  color: #FEFEFE; }\n\n.book-trip-page {\n  height: 80vh;\n  background-color: #B0C6D5; }\n\n.book-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: #B0C6D5;\n  height: 80%; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 83%;\n  justify-content: space-around; }\n\n.trip-buttons-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  justify-content: space-around;\n  height: 5vh; }\n\n.card-display {\n  display: flex;\n  flex-direction: column;\n  justify-content: row;\n  overflow: auto;\n  height: 80%;\n  grid-gap: 4%;\n  align-items: center; }\n\n.trip-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: 0 0 10px #5296AC;\n  color: black;\n  width: 60%; }\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%; }\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  display: flex; }\n\n.cost-modal {\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%; }\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%; }\n\n@media only screen and (max-width: 800px) {\n  .login-form {\n    width: 80%; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 35em; }\n  .confirm-button,\n  .cancel-button {\n    width: 45%;\n    height: 15%;\n    margin: 1%; }\n  .btn {\n    font-size: .7em; } }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em; }\n  .login-button {\n    width: 60%; }\n  #pwd,\n  #username {\n    width: 90vw; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 23em; }\n  .year-cost {\n    text-align: center; }\n  .btn {\n    height: 25; }\n  .trip-card {\n    width: 80%; }\n  .trip-dropdown {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","\n@import \"variables\";\n@import \"normalize\";\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway',\n  sans-serif;\n}\n\nheader {\n@include gridDisplay(1fr 4fr, none);\nheight: 20vh;\nbackground-color: #5296AC;\nwidth: 100%;\ncolor: #FEFEFE;\n\n  .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em;\n  }\n\n  h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end;\n  }\n}\n\nh3 {\n  justify-self: center;\n}\n\n.login-page {\n  @include flexDisplay(column, center);\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: $primary-color;\n}\n\n.booking-form {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: $shadow-color;\n  padding: 1%;\n}\n\n.login-form {\n  @extend .booking-form;\n  width: 50%;\n  height: 40vh;\n\n    #username,\n    #pwd {\n      width: 40%;\n      height: 8%;\n      border-radius: 5%;\n      box-shadow: $shadow-color;\n    }\n}\n\n.welcome-page {\n  @include flexDisplay(column, center)\n}\n\n.my-trips {\n  @include flexDisplay(column, center);\n}\n\n.hidden {\n  display: none;\n}\n\n.login-button {\n width: 30%;\n align-self: center;\n}\n\n.welcome-image-wrapper {\n  @include flexDisplay(column, center);\n  align-self: center;\n  height: 40em;\n  align-items: center;\n\n    .welcome-image {\n      height: 20em;\n      width: 40em;\n      filter: opacity(80%);\n      border-radius: 2%;\n      box-shadow: $shadow-color;\n    }\n}\n\nh2 {\n  color: black;\n}\n\n.welcome-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n  align-items: center;\n  background-color: $primary-color;\n  color: #6F8BA4;\n}\n\n.greeting-container {\n  @include flexDisplay(column, center);\n  align-items: center;\n  width: 100%;\n}\n\n.options-container {\n  @include flexDisplay(row, center);\n  justify-content: space-evenly;\n  width: 80%;\n\n    .my-trips-btn,\n    .book-trip {\n      border: 3px outset $primary-color;\n      border-radius: 15px 15px 15px 15px;\n      padding: 1%;\n      width: 30%;\n      cursor: pointer;\n\n          &:hover {\n            color: #6F8BA4;\n            font-size: 14px;\n            text-shadow: 0px 2px 4px #BADFE5;\n            @include transition(.4s ease);\n          }\n    }\n}\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%;\n}\n\n.booking-button,\n button,\n .login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer;\n\n    &:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      @include transition(.4s ease);\n    }\n}\n\n.my-trips-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n}\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%;\n}\n\n.my-trips-text {\n  color: black;\n}\n\n.arrow-wrapper {\n  background-color: $primary-color;\n  padding: .7%;\n\n  .arrow {\n    padding: 2%;\n    margin-left: 3%;\n  }\n}\n\n.year-cost {\n  justify-content: center;\n  align-self: center;\n}\n\n.header-wrapper {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  background-color: $primary-color;\n}\n\n.trip-card-section {\n  @include flexDisplay(row, start);\n  justify-content: space-around;\n  background-color: $primary-color;\n  height: 80vh;\n  color: #FEFEFE;\n}\n\n.book-trip-page {\n  height: 80vh;\n  background-color: $primary-color;\n}\n\n.book-wrapper {\n  @include flexDisplay(column, center);\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: $primary-color;\n  height: 80%;\n}\n\n.trip-card-section {\n @include flexDisplay(column, center);\n  height: 83%;\n  justify-content: space-around;\n}\n\n.trip-buttons-wrapper {\n @include flexDisplay(row, center);\n width: 100%;\n justify-content: space-around;\n height: 5vh;\n}\n\n.card-display {\n@include flexDisplay(column, row);\noverflow: auto;\nheight: 80%;\ngrid-gap: 4%;\nalign-items: center;\n}\n\n.trip-card {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: $shadow-color;\n  color: black;\n  width: 60%;\n}\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%;\n}\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width:100%;\n  display: flex;\n}\n\n.cost-modal {\n  @extend .booking-form;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%;\n}\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%;\n}\n\n@media only screen and (max-width: 800px) {\n.login-form {\n  width:80%;\n}\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 35em;\n  }\n}\n\n.confirm-button,\n.cancel-button {\n  width: 45%;\n  height: 15%;\n  margin: 1%;\n}\n\n.btn {\n  font-size: .7em;\n}\n\n\n}\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em;\n  }\n  .login-button {\n    width: 60%;\n  }\n\n  #pwd,\n  #username {\n    width: 90vw;\n  }\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 23em;\n  }\n}\n\n.year-cost {\n  text-align: center;\n}\n\n.btn {\n  height: 25;\n}\n\n.trip-card {\n  width: 80%;\n}\n\n.trip-dropdown {\n  width:50%;\n}\n}","$primary-color: #B0C6D5;\n$shadow-color: 0 0 10px #5296AC;\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}"],"sourceRoot":""}]);
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
    this.clearCardDisplay()
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

  clearCardDisplay() {
    let cardDisplay = document.querySelector(".card-display");
    cardDisplay.innerHTML = "";
  },

  displayAmountSpentAYear(currentUser) {
    let yearlyDisplay = document.querySelector(".header-wrapper");
    yearlyDisplay.innerHTML = "";
    let costHTML = `<h3 class="year-cost">You"ve spent ${currentUser} on making memories this year.` 
    yearlyDisplay.insertAdjacentHTML("beforeend", costHTML);
  },

  displayDestinationOptions(destinations) {
    let dropDown = document.querySelector(".trip-dropdown");
    dropDown.innerHTML = "";
    let options = destinations.map(destination => {
      return `<option id="${destination.id}" value="${destination}">${destination}</option>`
    });
    dropDown.insertAdjacentHTML("afterbegin",options);
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
    const loginPage = document.querySelector(".login-page");
    const welcomePage = document.querySelector(".welcome-page");
    loginPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
  },

  displayCost(bookingObject) {
    const costDisplay = document.querySelector(".cost");
    costDisplay.innerHTML = "";
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
const cancelButton = document.querySelector(".cancel-button");

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
  clearBookingInputs();
  submitBookingForm.classList.add("hidden");
  confirmMessage.classList.remove("hidden");
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayCost(bookingObject);
}

function clearBookingInputs() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(destinationInput);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(startDate);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(durationInput);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs(numberOfTravelers);
}

function cancelRequest() {
  alert("You have cancelled your trip request.")
  confirmMessage.classList.add("hidden");
  submitBookingForm.classList.remove("hidden");
}

function confirmBooking(event) {
  event.preventDefault();
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].postTrip(bookingObject)
    .then(alert(`Congrats! Your trip is booked! You will see this booking in your pending trips.`))
    .then(_domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCardDisplay())
    .then(showTripsPage())
    .then(getData(userName))
}

function showTripsPage() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCardDisplay();
  bookingPage.classList.add("hidden");
  confirmMessage.classList.add("hidden");
  myTripsPage.classList.remove("hidden");
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
  clearBookingInputs()
}

function getEstimatedTripCost(numberOfTravelers, duration) {
  const currentDestinationCost = allDestinations.reduce((sum, destination) => {
    if (destinationInput.value === destination.destination) {
      const costPerDay = destination.estimatedLodgingCostPerDay * numberOfTravelers;
      const days = costPerDay * duration;
      const flights = destination.estimatedFlightCostPerPerson * numberOfTravelers;
      const agentFee = ((flights + days) * .01);
      sum += flights + days + agentFee;
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
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCardDisplay();
  welcomePage.classList.add("hidden");
  myTripsPage.classList.remove("hidden");
}

function goBackToMain(event) {
  event.preventDefault()
  welcomePage.classList.remove("hidden");
  myTripsPage.classList.add("hidden");
}

function bookATrip() {
  welcomePage.classList.add("hidden");
  bookingPage.classList.remove("hidden");
  submitBookingForm.classList.remove("hidden");
  confirmMessage.classList.add("hidden")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jdXJ2ZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW4uanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Mjk2QUM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjRkVGRUZFOyB9XFxuICBoZWFkZXIgLmdsb2JlLWltYWdlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDVlbTsgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsgfVxcblxcbmgzIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7IH1cXG5cXG4uYm9va2luZy1mb3JtLCAubG9naW4tZm9ybSwgLmNvc3QtbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNCU7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlcjogc29saWQgI0NFQTY5MiAxZW07XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTI5NkFDO1xcbiAgcGFkZGluZzogMSU7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0MHZoOyB9XFxuICAubG9naW4tZm9ybSAjdXNlcm5hbWUsXFxuICAubG9naW4tZm9ybSAjcHdkIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA4JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1Mjk2QUM7IH1cXG5cXG4ud2VsY29tZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ubXktdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC53ZWxjb21lLWltYWdlLXdyYXBwZXIgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDIwZW07XFxuICAgIHdpZHRoOiA0MGVtO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoODAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1Mjk2QUM7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ud2VsY29tZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7XFxuICBjb2xvcjogIzZGOEJBNDsgfVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogODAlOyB9XFxuICAub3B0aW9ucy1jb250YWluZXIgLm15LXRyaXBzLWJ0bixcXG4gIC5vcHRpb25zLWNvbnRhaW5lciAuYm9vay10cmlwIHtcXG4gICAgYm9yZGVyOiAzcHggb3V0c2V0ICNCMEM2RDU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm9wdGlvbnMtY29udGFpbmVyIC5teS10cmlwcy1idG46aG92ZXIsXFxuICAgIC5vcHRpb25zLWNvbnRhaW5lciAuYm9vay10cmlwOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzZGOEJBNDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4ICNCQURGRTU7XFxuICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlOyB9XFxuXFxuLmJhY2stdG8tbWFpbixcXG4uYmFjay10by1tYWluLWJvb2sge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLmJvb2tpbmctYnV0dG9uLFxcbmJ1dHRvbixcXG4ubG9naW4tYnV0dG9uIHtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAjNTI5NkFDO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmJvb2tpbmctYnV0dG9uOmhvdmVyLFxcbiAgYnV0dG9uOmhvdmVyLFxcbiAgLmxvZ2luLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjNkY4QkE0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCAjQkFERkU1O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7IH1cXG5cXG4ubXktdHJpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbi5teS10cmlwcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogM2VtO1xcbiAgbWFyZ2luLXRvcDogLTIlOyB9XFxuXFxuLm15LXRyaXBzLXRleHQge1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLmFycm93LXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTtcXG4gIHBhZGRpbmc6IC43JTsgfVxcbiAgLmFycm93LXdyYXBwZXIgLmFycm93IHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTsgfVxcblxcbi55ZWFyLWNvc3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTsgfVxcblxcbi50cmlwLWNhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBjb2xvcjogI0ZFRkVGRTsgfVxcblxcbi5ib29rLXRyaXAtcGFnZSB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1OyB9XFxuXFxuLmJvb2std3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTtcXG4gIGhlaWdodDogODAlOyB9XFxuXFxuLnRyaXAtY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgzJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLnRyaXAtYnV0dG9ucy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA1dmg7IH1cXG5cXG4uY2FyZC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiByb3c7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogODAlO1xcbiAgZ3JpZC1nYXA6IDQlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi50cmlwLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTI5NkFDO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDYwJTsgfVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZpbHRlcjogb3BhY2l0eSg4MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7IH1cXG5cXG4uaW1hZ2Utd3JhcHBlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uY29zdC1tb2RhbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDElOyB9XFxuXFxuLmNvbmZpcm0tYnV0dG9uLFxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbjogMSU7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDQwZW07IH1cXG4gICAgLndlbGNvbWUtaW1hZ2Utd3JhcHBlciAud2VsY29tZS1pbWFnZSB7XFxuICAgICAgd2lkdGg6IDM1ZW07IH1cXG4gIC5jb25maXJtLWJ1dHRvbixcXG4gIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1hcmdpbjogMSU7IH1cXG4gIC5idG4ge1xcbiAgICBmb250LXNpemU6IC43ZW07IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxcbiAgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MCU7IH1cXG4gICNwd2QsXFxuICAjdXNlcm5hbWUge1xcbiAgICB3aWR0aDogOTB2dzsgfVxcbiAgLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICAgIGhlaWdodDogNDBlbTsgfVxcbiAgICAud2VsY29tZS1pbWFnZS13cmFwcGVyIC53ZWxjb21lLWltYWdlIHtcXG4gICAgICB3aWR0aDogMjNlbTsgfVxcbiAgLnllYXItY29zdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmJ0biB7XFxuICAgIGhlaWdodDogMjU7IH1cXG4gIC50cmlwLWNhcmQge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAudHJpcC1kcm9wZG93biB7XFxuICAgIHdpZHRoOiA1MCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25vcm1hbGl6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFDakIsTUFBQTtFQUNBLDhCQUE4QjtFQUM5QixNQUFBLEVBQU87O0FBR1Q7K0VDSCtFO0FETS9FOztFQ0hFO0FET0Y7RUFDRSxTQUFTLEVBQUE7O0FBR1g7O0VDTEU7QURTRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQ05FO0FEV0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCOytFQ1YrRTtBRGEvRTs7O0VDVEU7QURjRjtFQUNFLHVCQUF1QjtFQUN2QixNQUFBO0VBQ0EsU0FBUztFQUNULE1BQUE7RUFDQSxpQkFBaUI7RUFDakIsTUFBQSxFQUFPOztBQUdUOzs7RUNYRTtBRGdCRjtFQUNFLGlDQUFpQztFQUNqQyxNQUFBO0VBQ0Es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QUE7RUFoUGY7SUFvUEUsWUFBWSxFQUFBO0lBcFBkO01BdVBJLFdBQVcsRUFBQTtFQTdJZjtJQWtKRSxrQkFBa0IsRUFBQTtFQTdCcEI7SUFpQ0UsVUFBVSxFQUFBO0VBL0ZaO0lBbUdFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBUyxFQUFBLEVBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIlxcbkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibm9ybWFsaXplXFxcIjtcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsXFxuICBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbkBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciA0ZnIsIG5vbmUpO1xcbmhlaWdodDogMjB2aDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTI5NkFDO1xcbndpZHRoOiAxMDAlO1xcbmNvbG9yOiAjRkVGRUZFO1xcblxcbiAgLmdsb2JlLWltYWdlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIH1cXG59XFxuXFxuaDMge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG4uYm9va2luZy1mb3JtIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNCU7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlcjogc29saWQgI0NFQTY5MiAxZW07XFxuICBib3gtc2hhZG93OiAkc2hhZG93LWNvbG9yO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIEBleHRlbmQgLmJvb2tpbmctZm9ybTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwdmg7XFxuXFxuICAgICN1c2VybmFtZSxcXG4gICAgI3B3ZCB7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICBoZWlnaHQ6IDglO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29sb3I7XFxuICAgIH1cXG59XFxuXFxuLndlbGNvbWUtcGFnZSB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcilcXG59XFxuXFxuLm15LXRyaXBzIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gd2lkdGg6IDMwJTtcXG4gYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZS1pbWFnZS13cmFwcGVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC53ZWxjb21lLWltYWdlIHtcXG4gICAgICBoZWlnaHQ6IDIwZW07XFxuICAgICAgd2lkdGg6IDQwZW07XFxuICAgICAgZmlsdGVyOiBvcGFjaXR5KDgwJSk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi53ZWxjb21lLWNvbnRhaW5lciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIHN0YXJ0KTtcXG4gIGhlaWdodDogODB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGNvbG9yOiAjNkY4QkE0O1xcbn1cXG5cXG4uZ3JlZXRpbmctY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgY2VudGVyKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDgwJTtcXG5cXG4gICAgLm15LXRyaXBzLWJ0bixcXG4gICAgLmJvb2stdHJpcCB7XFxuICAgICAgYm9yZGVyOiAzcHggb3V0c2V0ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgICAgcGFkZGluZzogMSU7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjNkY4QkE0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggI0JBREZFNTtcXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG4gICAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5iYWNrLXRvLW1haW4sXFxuLmJhY2stdG8tbWFpbi1ib29rIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuLmJvb2tpbmctYnV0dG9uLFxcbiBidXR0b24sXFxuIC5sb2dpbi1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICM1Mjk2QUM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgcGFkZGluZzogMSU7XFxuICB3aWR0aDogMjAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzZGOEJBNDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4ICNCQURGRTU7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNHMgZWFzZSk7XFxuICAgIH1cXG59XFxuXFxuLm15LXRyaXBzLWNvbnRhaW5lciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIHN0YXJ0KTtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXFxuLm15LXRyaXBzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBtYXJnaW4tdG9wOiAtMiU7XFxufVxcblxcbi5teS10cmlwcy10ZXh0IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFycm93LXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBwYWRkaW5nOiAuNyU7XFxuXFxuICAuYXJyb3cge1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgfVxcbn1cXG5cXG4ueWVhci1jb3N0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLnRyaXAtY2FyZC1zZWN0aW9uIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgc3RhcnQpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIGNvbG9yOiAjRkVGRUZFO1xcbn1cXG5cXG4uYm9vay10cmlwLXBhZ2Uge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxufVxcblxcbi5ib29rLXdyYXBwZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnRyaXAtY2FyZC1zZWN0aW9uIHtcXG4gQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgaGVpZ2h0OiA4MyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnRyaXAtYnV0dG9ucy13cmFwcGVyIHtcXG4gQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiB3aWR0aDogMTAwJTtcXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uY2FyZC1kaXNwbGF5IHtcXG5AaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIHJvdyk7XFxub3ZlcmZsb3c6IGF1dG87XFxuaGVpZ2h0OiA4MCU7XFxuZ3JpZC1nYXA6IDQlO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50cmlwLWNhcmQge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZjtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctY29sb3I7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uY2FyZC1pbWFnZSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmaWx0ZXI6IG9wYWNpdHkoODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbn1cXG5cXG4uaW1hZ2Utd3JhcHBlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDoxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvc3QtbW9kYWwge1xcbiAgQGV4dGVuZCAuYm9va2luZy1mb3JtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uLFxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbjogMSU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4ubG9naW4tZm9ybSB7XFxuICB3aWR0aDo4MCU7XFxufVxcblxcbi53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA0MGVtO1xcblxcbiAgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICB3aWR0aDogMzVlbTtcXG4gIH1cXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uLFxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gIHdpZHRoOiA0NSU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbjogMSU7XFxufVxcblxcbi5idG4ge1xcbiAgZm9udC1zaXplOiAuN2VtO1xcbn1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbiAgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAjcHdkLFxcbiAgI3VzZXJuYW1lIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICB9XFxuXFxuLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDQwZW07XFxuXFxuICAud2VsY29tZS1pbWFnZSB7XFxuICAgIHdpZHRoOiAyM2VtO1xcbiAgfVxcbn1cXG5cXG4ueWVhci1jb3N0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBoZWlnaHQ6IDI1O1xcbn1cXG5cXG4udHJpcC1jYXJkIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50cmlwLWRyb3Bkb3duIHtcXG4gIHdpZHRoOjUwJTtcXG59XFxufVwiLFwiJHByaW1hcnktY29sb3I6ICNCMEM2RDU7XFxuJHNoYWRvdy1jb2xvcjogMCAwIDEwcHggIzUyOTZBQztcXG5cXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUpIHtcXG4gIHRyYW5zaXRpb246ICR2YWx1ZTtcXG59XFxuXFxuQG1peGluIGdyaWREaXNwbGF5KCRjb2x1bW5zLCAkcm93cykge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbnM7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICRyb3dzO1xcbn1cXG5cXG5AbWl4aW4gZmxleERpc3BsYXkoJGRpcmVjdGlvbiwgJGp1c3RpZnkpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBmZXRjaENhbGxzID0ge1xuXG4gIGdldFRyYXZlbGVyKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke2lkfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb3JyeSEgV2UgYXJlIGhhdmluZyB0cm91YmxlIGdldHRpbmcgdGhlIGRhdGEsIHRyeSBhZ2FpbiBsYXRlciFcIilcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldEFsbFRyYXZlbGVycygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVyc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgICB9KTtcbiAgfSxcblxuICBnZXRUcmlwcygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb3JyeSEgV2UgYXJlIGhhdmluZyB0cm91YmxlIGdldHRpbmcgdGhlIGRhdGEsIHRyeSBhZ2FpbiBsYXRlciFcIilcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2Rlc3RpbmF0aW9uc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgICB9KTtcbiAgfSxcblxuICBwb3N0VHJpcChuZXdCb29raW5nKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0Jvb2tpbmcpXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG4gICAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaENhbGxzOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmxldCBkb21VcGRhdGVzID0ge1xuXG4gIHdlbGNvbWVVc2VyKGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IGdyZWV0aW5nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZXRpbmctY29udGFpbmVyXCIpO1xuICAgIGxldCBmaXJzdE5hbWUgPSBjdXJyZW50VXNlci5yZXR1cm5UcmF2ZWxlckZpcnN0TmFtZSgpO1xuICAgIGdyZWV0aW5nTWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCB3ZWxjb21lTXNnID0gYDxoMj5XZWxjb21lIEJhY2ssICR7Zmlyc3ROYW1lfSEgPC9oMj5gXG4gICAgZ3JlZXRpbmdNZXNzYWdlLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgd2VsY29tZU1zZyk7XG4gIH0sXG5cbiAgY3JlYXRlVHJpcENhcmRzKHRyaXBzKSB7XG4gICAgdGhpcy5jbGVhckNhcmREaXNwbGF5KClcbiAgICByZXR1cm4gdHJpcHMubWFwKHRyaXAgPT4ge1xuICAgICAgbGV0IGNhcmRIVE1MID0gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwidHJpcC1jYXJkXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImRlc3RpbmF0aW9uLW5hbWUtd3JhcHBlclwiPlxuICAgICAgICA8aDI+JHt0cmlwLm5hbWV9PC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZSBpbWFnZVwiIHNyYz1cIiR7dHJpcC5pbWFnZX1cIiBhbHQ9XCIke3RyaXAuYWx0fVwiPjwvaW1nPlxuICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImNvc3Qtd3JhcHBlclwiPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXR1c1wiPlRyaXAgU3RhdHVzOiR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImxvZGdpbmctY29zdCBjb3N0XCI+RXN0aW1hdGVkIExvZGdpbmcgQ29zdDoke3RyaXAubG9kZ2luZ308L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZmxpZ2h0LWNvc3QgY29zdFwiPkVzdGltYXRlZCBGbGlnaHQgQ29zdDoke3RyaXAuZmxpZ2h0c308L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9hcnRpY2xlPmBcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1kaXNwbGF5XCIpLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgY2FyZEhUTUwpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNsZWFyQ2FyZERpc3BsYXkoKSB7XG4gICAgbGV0IGNhcmREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWRpc3BsYXlcIik7XG4gICAgY2FyZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgfSxcblxuICBkaXNwbGF5QW1vdW50U3BlbnRBWWVhcihjdXJyZW50VXNlcikge1xuICAgIGxldCB5ZWFybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItd3JhcHBlclwiKTtcbiAgICB5ZWFybHlEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGNvc3RIVE1MID0gYDxoMyBjbGFzcz1cInllYXItY29zdFwiPllvdVwidmUgc3BlbnQgJHtjdXJyZW50VXNlcn0gb24gbWFraW5nIG1lbW9yaWVzIHRoaXMgeWVhci5gIFxuICAgIHllYXJseURpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNvc3RIVE1MKTtcbiAgfSxcblxuICBkaXNwbGF5RGVzdGluYXRpb25PcHRpb25zKGRlc3RpbmF0aW9ucykge1xuICAgIGxldCBkcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJpcC1kcm9wZG93blwiKTtcbiAgICBkcm9wRG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBvcHRpb25zID0gZGVzdGluYXRpb25zLm1hcChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICByZXR1cm4gYDxvcHRpb24gaWQ9XCIke2Rlc3RpbmF0aW9uLmlkfVwiIHZhbHVlPVwiJHtkZXN0aW5hdGlvbn1cIj4ke2Rlc3RpbmF0aW9ufTwvb3B0aW9uPmBcbiAgICB9KTtcbiAgICBkcm9wRG93bi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsb3B0aW9ucyk7XG4gIH0sXG5cbiAgZGlzcGxheUVzdGltYXRlZFRyaXBDb3N0KGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IGNvc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29raW5nLWZvcm1cIik7XG4gICAgY29zdERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgZXN0aW1hdGVkQ29zdCA9IGA8aDM+JHtjdXJyZW50VXNlci5jb3N0T2ZUcmlwQW5kRmVlfTwvaDM+YFxuICAgIGNvc3REaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBlc3RpbWF0ZWRDb3N0KTtcbiAgfSxcblxuICBjbGVhcklucHV0cyhpbnB1dCkge1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfSxcblxuICBoaWRlTG9naW5QYWdlKCkge1xuICAgIGNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcGFnZVwiKTtcbiAgICBjb25zdCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1wYWdlXCIpO1xuICAgIGxvZ2luUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHdlbGNvbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0sXG5cbiAgZGlzcGxheUNvc3QoYm9va2luZ09iamVjdCkge1xuICAgIGNvbnN0IGNvc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3N0XCIpO1xuICAgIGNvc3REaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29zdERpc3BsYXkuaW5uZXJIVE1MID0gYFRoaXMgdHJpcCB3aWxsIGNvc3QgJHtib29raW5nT2JqZWN0LmNvc3R9LCBhbmQgaW5jbHVkZXMgYSAxMCUgYWdlbnQgZmVlLiBXb3VsZCB5b3UgbGlrZSB0byBwcm9jZWVkP2BcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2N1cnZlLWFycm93LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dsb2JlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ltYWdlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21hbi5qcGdcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSBcIi4vdHJhdmVsZXIuanNcIjtcbmltcG9ydCBmZXRjaENhbGxzIGZyb20gXCIuL2FwaUNhbGxzXCI7XG5pbXBvcnQgXCIuL2Nzcy9iYXNlLnNjc3NcIjtcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gXCIuL2RvbVVwZGF0ZXMuanNcIjtcblxuLy9pbWFnZXNcbmltcG9ydCBcIi4vaW1hZ2VzL2ltYWdlLnBuZ1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvbWFuLmpwZ1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvZ2xvYmUuc3ZnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy9jdXJ2ZS1hcnJvdy5zdmdcIjtcblxuLy9nbG9iYWxWYXJpYWJsZXNcbmxldCBjdXJyZW50VHJhdmVsZXI7XG5sZXQgdXNlck5hbWU7XG5sZXQgYWxsRGVzdGluYXRpb25zO1xubGV0IGN1cnJlbnRVc2VyO1xubGV0IHRyaXBJbmZvO1xubGV0IHRyYXZlbGVyRGF0YTtcbmxldCB0cmlwRGF0YTtcbmxldCBkZXN0aW5hdGlvbkRhdGE7XG5sZXQgYm9va2luZ09iamVjdDsgXG5cbi8vcXVlcnlTZWxlY3RvcnNcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZm9ybVwiKTtcbmNvbnN0IHdlbGNvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLXBhZ2VcIik7XG5jb25zdCBteVRyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS10cmlwcy1idG5cIik7XG5jb25zdCBib29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLXRyaXBcIik7XG5jb25zdCBteVRyaXBzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktdHJpcHNcIik7XG5jb25zdCBiYWNrVG9NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXRvLW1haW5cIik7XG5jb25zdCBiYWNrVG9NYWluQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay10by1tYWluLWJvb2tcIik7XG5jb25zdCBib29raW5nUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay10cmlwLXBhZ2VcIik7XG5jb25zdCBjdXJyZW50VHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdHJpcHMtYnRuXCIpO1xuY29uc3QgcGVuZGluZ1RyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRyaXBzLWJ0blwiKTtcbmNvbnN0IHVwY29taW5nVHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXRyaXBzLWJ0blwiKTtcbmNvbnN0IHBhc3RUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzdC10cmlwcy1idG5cIik7XG5jb25zdCBkZXN0aW5hdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmlwLWRyb3Bkb3duXCIpO1xuY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYWxlbmRhclwiKTtcbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1cmF0aW9uXCIpO1xuY29uc3QgbnVtYmVyT2ZUcmF2ZWxlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bXRyYXZlbGVyc1wiKTtcbmNvbnN0IHN1Ym1pdEJvb2tpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29raW5nLWZvcm1cIik7XG5jb25zdCB1c2VyTG9naW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIik7XG5jb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHdkXCIpO1xuY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1idXR0b25cIik7XG5jb25zdCBjb25maXJtTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1tZXNzYWdlXCIpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnV0dG9uXCIpO1xuXG4vL2V2ZW50TGlzdGVuZXJzXG5teVRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWFpblBhZ2UpO1xuYmFja1RvTWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrVG9NYWluKTtcbmJvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvb2tBVHJpcCk7XG5iYWNrVG9NYWluQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmFja1RvTWFpbkZyb21Cb29rKTtcbmN1cnJlbnRUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0Q3VycmVudFRyaXBzKTtcbnBlbmRpbmdUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0UGVuZGluZ1RyaXBzKTtcbnVwY29taW5nVHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFVwY29taW5nVHJpcHMpO1xucGFzdFRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRQYXN0VHJpcHMpO1xuc3VibWl0Qm9va2luZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBkaXNwbGF5TW9kYWwpO1xubG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdXNlckxvZ2luKTtcbmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1Cb29raW5nKTtcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsUmVxdWVzdClcblxuZnVuY3Rpb24gZ2V0RGF0YShpZCkge1xuICB0cmF2ZWxlckRhdGEgPSBmZXRjaENhbGxzLmdldFRyYXZlbGVyKGlkKTtcbiAgZGVzdGluYXRpb25EYXRhID0gZmV0Y2hDYWxscy5nZXREZXN0aW5hdGlvbnMoKTtcbiAgdHJpcERhdGEgPSBmZXRjaENhbGxzLmdldFRyaXBzKCk7XG4gIGluaXRpYXRlRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZURhdGEoKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChbdHJhdmVsZXJEYXRhLCBkZXN0aW5hdGlvbkRhdGEsIHRyaXBEYXRhXSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgY3VycmVudFRyYXZlbGVyID0gcmVzcG9uc2VzWzBdO1xuICAgICAgYWxsRGVzdGluYXRpb25zID0gcmVzcG9uc2VzWzFdLmRlc3RpbmF0aW9ucztcbiAgICAgIHRyaXBJbmZvID0gcmVzcG9uc2VzWzJdLnRyaXBzO1xuICAgICAgZ3JlZXRVc2VyKGN1cnJlbnRUcmF2ZWxlciwgdHJpcEluZm8sIGFsbERlc3RpbmF0aW9ucyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXNlckxvZ2luKGV2ZW50KSB7XG4gIHVzZXJOYW1lID0gcGFyc2VJbnQodXNlckxvZ2luSW5wdXQudmFsdWUuc3BsaXQoXCJcIikuc3BsaWNlKDgsMykuam9pbihcIlwiKSk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh1c2VyUGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gXCJ0cmF2ZWxlcjIwMjBcIikge1xuICAgIGFsZXJ0KFwiV3JvbmcgcGFzc3dvcmQsIHRyeSBhZ2FpblwiKTtcbiAgICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKHVzZXJQYXNzd29yZElucHV0KTtcbiAgfVxuICBpZiAodXNlclBhc3N3b3JkSW5wdXQudmFsdWUgPT09IFwidHJhdmVsZXIyMDIwXCIpIHtcbiAgICBnZXREYXRhKHVzZXJOYW1lKTtcbiAgICBkb21VcGRhdGVzLmhpZGVMb2dpblBhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBncmVldFVzZXIoY3VycmVudFRyYXZlbGVyLCB0cmlwSW5mbywgYWxsRGVzdGluYXRpb25zKSB7XG4gIGN1cnJlbnRVc2VyID0gbmV3IFRyYXZlbGVyKGN1cnJlbnRUcmF2ZWxlciwgdHJpcEluZm8sIGFsbERlc3RpbmF0aW9ucyk7XG4gIGRvbVVwZGF0ZXMud2VsY29tZVVzZXIoY3VycmVudFVzZXIpO1xuICBnZXRDb3N0U3BlbnRPdmVyQVllYXIoY3VycmVudFVzZXIpO1xuICBkaXNwbGF5VHJpcERyb3BEb3duKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRyYXZlbENhcmQodHJpcHMpIHtcbiAgbGV0IHJldHVybmVkQ3VycmVudCA9IHRyaXBzLm1hcCh0cmlwID0+IHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRyaXAuZGVzdGluYXRpb247XG4gICAgY29uc3QgdHJpcENhcmQgPSB7XG4gICAgICBuYW1lOiBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbixcbiAgICAgIGltYWdlOiBkZXN0aW5hdGlvbi5pbWFnZSxcbiAgICAgIGFsdDogZGVzdGluYXRpb24uYWx0LFxuICAgICAgc3RhdHVzOiB0cmlwLnN0YXR1cyxcbiAgICAgIGxvZGdpbmc6IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5LFxuICAgICAgZmxpZ2h0czogZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgIH1cbiAgICByZXR1cm4gdHJpcENhcmQ7XG4gIH0pXG4gIHJldHVybiByZXR1cm5lZEN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGZpbmREZXN0aW5hdGlvbigpIHtcbiAgY29uc3QgZGVzdGluYXRpb25SZXF1ZXN0ID0gYWxsRGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4ge1xuICAgIGlmIChkZXN0aW5hdGlvbklucHV0LnZhbHVlID09PSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbikge1xuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvblJlcXVlc3QuaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBidWlsZFRyaXBPYmplY3QoKTtcbiAgY2xlYXJCb29raW5nSW5wdXRzKCk7XG4gIHN1Ym1pdEJvb2tpbmdGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNvbmZpcm1NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNvc3QoYm9va2luZ09iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQm9va2luZ0lucHV0cygpIHtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhkZXN0aW5hdGlvbklucHV0KTtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhzdGFydERhdGUpO1xuICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKGR1cmF0aW9uSW5wdXQpO1xuICBkb21VcGRhdGVzLmNsZWFySW5wdXRzKG51bWJlck9mVHJhdmVsZXJzKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUmVxdWVzdCgpIHtcbiAgYWxlcnQoXCJZb3UgaGF2ZSBjYW5jZWxsZWQgeW91ciB0cmlwIHJlcXVlc3QuXCIpXG4gIGNvbmZpcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEJvb2tpbmdGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1Cb29raW5nKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGZldGNoQ2FsbHMucG9zdFRyaXAoYm9va2luZ09iamVjdClcbiAgICAudGhlbihhbGVydChgQ29uZ3JhdHMhIFlvdXIgdHJpcCBpcyBib29rZWQhIFlvdSB3aWxsIHNlZSB0aGlzIGJvb2tpbmcgaW4geW91ciBwZW5kaW5nIHRyaXBzLmApKVxuICAgIC50aGVuKGRvbVVwZGF0ZXMuY2xlYXJDYXJkRGlzcGxheSgpKVxuICAgIC50aGVuKHNob3dUcmlwc1BhZ2UoKSlcbiAgICAudGhlbihnZXREYXRhKHVzZXJOYW1lKSlcbn1cblxuZnVuY3Rpb24gc2hvd1RyaXBzUGFnZSgpIHtcbiAgZG9tVXBkYXRlcy5jbGVhckNhcmREaXNwbGF5KCk7XG4gIGJvb2tpbmdQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNvbmZpcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIG15VHJpcHNQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJpcE9iamVjdCgpIHtcbiAgYm9va2luZ09iamVjdCA9IHtcbiAgICBpZDogTnVtYmVyKERhdGUubm93KCkpLFxuICAgIHVzZXJJRDogY3VycmVudFVzZXIuaWQsXG4gICAgZGVzdGluYXRpb25JRDogZmluZERlc3RpbmF0aW9uKGFsbERlc3RpbmF0aW9ucyksXG4gICAgdHJhdmVsZXJzOiBwYXJzZUludChudW1iZXJPZlRyYXZlbGVycy52YWx1ZSksXG4gICAgZGF0ZTogc3RhcnREYXRlLnZhbHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiL1wiKSxcbiAgICBkdXJhdGlvbjogcGFyc2VJbnQoZHVyYXRpb25JbnB1dC52YWx1ZSksXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgICBjb3N0OiBnZXRFc3RpbWF0ZWRUcmlwQ29zdChudW1iZXJPZlRyYXZlbGVycy52YWx1ZSwgZHVyYXRpb25JbnB1dC52YWx1ZSlcbiAgfVxuICBjbGVhckJvb2tpbmdJbnB1dHMoKVxufVxuXG5mdW5jdGlvbiBnZXRFc3RpbWF0ZWRUcmlwQ29zdChudW1iZXJPZlRyYXZlbGVycywgZHVyYXRpb24pIHtcbiAgY29uc3QgY3VycmVudERlc3RpbmF0aW9uQ29zdCA9IGFsbERlc3RpbmF0aW9ucy5yZWR1Y2UoKHN1bSwgZGVzdGluYXRpb24pID0+IHtcbiAgICBpZiAoZGVzdGluYXRpb25JbnB1dC52YWx1ZSA9PT0gZGVzdGluYXRpb24uZGVzdGluYXRpb24pIHtcbiAgICAgIGNvbnN0IGNvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIG51bWJlck9mVHJhdmVsZXJzO1xuICAgICAgY29uc3QgZGF5cyA9IGNvc3RQZXJEYXkgKiBkdXJhdGlvbjtcbiAgICAgIGNvbnN0IGZsaWdodHMgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogbnVtYmVyT2ZUcmF2ZWxlcnM7XG4gICAgICBjb25zdCBhZ2VudEZlZSA9ICgoZmxpZ2h0cyArIGRheXMpICogLjAxKTtcbiAgICAgIHN1bSArPSBmbGlnaHRzICsgZGF5cyArIGFnZW50RmVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9LCAwKTtcbiAgcmV0dXJuIGN1cnJlbnREZXN0aW5hdGlvbkNvc3QudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBEcm9wRG93bigpIHtcbiAgY29uc3QgYWxwaGFiZXRpY2FsbHkgPSBhbGxEZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICBsZXQgZGVzdGluYXRpb25OYW1lID0gZGVzdGluYXRpb24uZGVzdGluYXRpb247XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uTmFtZTtcbiAgfSlcbiAgcmV0dXJuIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhhbHBoYWJldGljYWxseS5zb3J0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VHJpcHMoKSB7XG4gIGxldCBjdXJyZW50VHJpcHMgPSBjdXJyZW50VXNlci5maW5kQ3VycmVudFRyaXBzKCk7XG4gIGRpc3BsYXlDdXJyZW50Q2FyZHMoZm9ybWF0VHJhdmVsQ2FyZChjdXJyZW50VHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzdFRyaXBzKCkge1xuICBsZXQgcGFzdFRyaXBzID0gY3VycmVudFVzZXIuZmluZFBhc3RUcmlwcygpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGFzdFRyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFVwY29taW5nVHJpcHMoKSB7XG4gIGxldCB1cENvbWluZ1RyaXBzID0gY3VycmVudFVzZXIuZmluZFVwY29taW5nVHJpcHMoKTtcbiAgZGlzcGxheUN1cnJlbnRDYXJkcyhmb3JtYXRUcmF2ZWxDYXJkKHVwQ29taW5nVHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ1RyaXBzKCkge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gY3VycmVudFVzZXIuZmlsdGVyQnlTdGF0dXMoXCJwZW5kaW5nXCIpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGVuZGluZ1RyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZHModHJpcHMpIHtcbiAgZG9tVXBkYXRlcy5jcmVhdGVUcmlwQ2FyZHModHJpcHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3N0U3BlbnRPdmVyQVllYXIoKSB7XG4gIGxldCBjb3N0ID0gY3VycmVudFVzZXIuY2FsY3VsYXRlVG90YWxTcGVudE9uVHJpcHMoMjAyMCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QW1vdW50U3BlbnRBWWVhcihjb3N0KTtcbn1cblxuZnVuY3Rpb24gaGlkZU1haW5QYWdlKCkge1xuICBkb21VcGRhdGVzLmNsZWFyQ2FyZERpc3BsYXkoKTtcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgbXlUcmlwc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZ29CYWNrVG9NYWluKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgbXlUcmlwc1BhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gYm9va0FUcmlwKCkge1xuICB3ZWxjb21lUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBib29raW5nUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBzdWJtaXRCb29raW5nRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG59XG5cbmZ1bmN0aW9uIGJhY2tUb01haW5Gcm9tQm9vaygpIHtcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYm9va2luZ1BhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFRyaXAgZnJvbSBcIi4vdHJpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdHJpcHNEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXJEYXRhLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uRGF0YSA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgICB0aGlzLnRyaXBzRGF0YSA9IHRyaXBzRGF0YTtcbiAgICB0aGlzLnRyaXBzID0gdGhpcy5pbnN0YW50aWF0ZU5ld1RyaXBzKCkgfHwgW107XG4gIH1cblxuICBmaWx0ZXJUcmlwRGF0YSh0cmlwc0RhdGEpIHtcbiAgICByZXR1cm4gdHJpcHNEYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcbiAgfVxuXG4gIGluc3RhbnRpYXRlTmV3VHJpcHMoKSB7XG4gICAgaWYgKHRoaXMudHJpcHNEYXRhLmxlbmd0aCA+IDApXG4gICAgICByZXR1cm4gdGhpcy50cmlwc0RhdGEucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkRhdGEuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaWQgPT09IHRyaXAudXNlcklEICYmIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKG5ldyBUcmlwKHRyaXAsIGRlc3RpbmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYyAgXG4gICAgICB9LCBbXSlcbiAgfVxuXG4gIGZpbHRlckJ5U3RhdHVzKHN0YXR1cykge1xuICAgIGNvbnN0IHRyaXBzID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIHJldHVybiB0cmlwcztcbiAgfVxuXG4gIGZpbmRDdXJyZW50VHJpcHMoKSB7XG4gICAgY29uc3QgY3VycmVudFRyaXAgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBlbmREYXRlLnNldERhdGUoZW5kRGF0ZS5nZXREYXRlKCkgKyB0cmlwLmR1cmF0aW9uKVxuICAgICAgaWYgKHN0YXJ0RGF0ZSA8IHRvZGF5ICYmIGVuZERhdGUgPiB0b2RheSkge1xuICAgICAgICBhY2MucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBjdXJyZW50VHJpcDtcbiAgfVxuXG4gIGZpbmRQYXN0VHJpcHMoKSB7XG4gICAgY29uc3QgdHJpcHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgdHJpcC5kdXJhdGlvbik7XG4gICAgICBpZiAoZW5kRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgIGFjYy5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHRyaXBzO1xuICB9XG5cbiAgZmluZFVwY29taW5nVHJpcHMoKSB7XG4gICAgY29uc3QgdHJpcHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBpZiAoc3RhcnREYXRlID4gdG9kYXkpIHtcbiAgICAgICAgYWNjLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdHJpcHM7XG4gIH1cblxuICByZXR1cm5UcmF2ZWxlckZpcnN0TmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoXCIgXCIpWzBdO1xuICAgIHJldHVybiBmaXJzdE5hbWU7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFNwZW50T25Ucmlwcyh5ZWFyKSB7XG4gICAgY29uc3QgdHJpcFRvdGFsID0gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZiAodHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgICAgIGxldCBsb2RnaW5nID0gdHJpcC5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgbGV0IGZsaWdodHMgPSB0cmlwLmRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgdG90YWwgKz0gbG9kZ2luZyArIGZsaWdodHM7XG4gICAgICB9ICBcbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKVxuICAgIGxldCBhZ2VudEZlZSA9IHRyaXBUb3RhbCAqIDAuMTtcbiAgICByZXR1cm4gdHJpcFRvdGFsICsgYWdlbnRGZWU7XG4gIH1cblxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXBzRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyaXBzRGF0YS5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXBzRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gdHJpcHNEYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwc0RhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZSh0cmlwc0RhdGEuZGF0ZSk7XG4gICAgdGhpcy5kYXRlID0gdHJpcHNEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBzRGF0YS5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXBzRGF0YS5zdGF0dXM7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gdHJpcHNEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgfVxuXG4gIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25EYXRhLmZpbmQoZGVzdGluYXRpb24gPT4gdGhpcy5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZClcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3RPZlRyaXAoKSB7XG4gICAgY29uc3QgY29zdFBlckRheSA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLnRyYXZlbGVyc1xuICAgIGNvbnN0IGR1cmF0aW9uID0gY29zdFBlckRheSAqIHRoaXMuZHVyYXRpb25cbiAgICBjb25zdCBmbGlnaHRzID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlcnNcbiAgICByZXR1cm4gZHVyYXRpb24gKyBmbGlnaHRzXG4gIH1cblxuICBjYWxjdWxhdGVBZ2VudEZlZSgpIHtcbiAgICBjb25zdCBkb2xsYXJzID0gKHRoaXMuY2FsY3VsYXRlQ29zdE9mVHJpcCgpIC8gMTAwKSAqIDEwXG4gICAgcmV0dXJuIGRvbGxhcnNcbiAgfVxuXG4gIGNvc3RPZlRyaXBBbmRGZWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsOiB0aGlzLmNhbGN1bGF0ZUNvc3RPZlRyaXAoKSxcbiAgICAgIHRvdGFsUGx1c0ZlZXM6IHRoaXMuY2FsY3VsYXRlQWdlbnRGZWUoKSArIHRoaXMuY2FsY3VsYXRlQ29zdE9mVHJpcCgpXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZSh0cmlwRGF0ZSkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKHRyaXBEYXRlKTtcbiAgICBsZXQgbW9udGggPSAnJyArICh0b2RheS5nZXRNb250aCgpICsgMSk7XG4gICAgbGV0IGRheSA9ICcnICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgbW9udGggPSAnMCcgKyBtb250aFxuICAgIH1cbiAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgIGRheSA9ICcwJyArIGRheVxuICAgIH1cbiAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oXCIvXCIpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=