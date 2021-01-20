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
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway', sans-serif; }\n\nheader {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: none;\n  height: 20vh;\n  background-color: #5296AC;\n  width: 100%;\n  color: #FEFEFE; }\n  header .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em; }\n  header h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end; }\n\nh3 {\n  justify-self: center; }\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: #B0C6D5; }\n\n.booking-form, .login-form, .cost-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: 0 0 10px #5296AC;\n  padding: 1%; }\n\n.login-form {\n  width: 50%;\n  height: 40vh; }\n  .login-form #username,\n  .login-form #pwd {\n    width: 40%;\n    height: 8%;\n    border-radius: 5%;\n    box-shadow: 0 0 10px #5296AC; }\n\n.welcome-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.my-trips {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.hidden {\n  display: none; }\n\n.login-button {\n  width: 30%;\n  align-self: center; }\n\n.welcome-image-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  height: 40em;\n  align-items: center; }\n  .welcome-image-wrapper .welcome-image {\n    height: 20em;\n    width: 40em;\n    filter: opacity(80%);\n    border-radius: 2%;\n    box-shadow: 0 0 10px #5296AC; }\n\nh2 {\n  color: black; }\n\n.welcome-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh;\n  align-items: center;\n  background-color: #B0C6D5;\n  color: #6F8BA4; }\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n\n.options-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-content: space-evenly;\n  width: 80%; }\n  .options-container .my-trips-btn,\n  .options-container .book-trip {\n    border: 3px outset #B0C6D5;\n    border-radius: 15px 15px 15px 15px;\n    padding: 1%;\n    width: 30%;\n    cursor: pointer; }\n    .options-container .my-trips-btn:hover,\n    .options-container .book-trip:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      transition: 0.4s ease; }\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%; }\n\n.booking-button,\nbutton,\n.login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer; }\n  .booking-button:hover,\n  button:hover,\n  .login-button:hover {\n    color: #6F8BA4;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px #BADFE5;\n    transition: 0.4s ease; }\n\n.my-trips-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: 80vh; }\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%; }\n\n.my-trips-text {\n  color: black; }\n\n.arrow-wrapper {\n  background-color: #B0C6D5;\n  padding: .7%; }\n  .arrow-wrapper .arrow {\n    padding: 2%;\n    margin-left: 3%; }\n\n.year-cost {\n  justify-content: center;\n  align-self: center; }\n\n.header-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  background-color: #B0C6D5; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  justify-content: space-around;\n  background-color: #B0C6D5;\n  height: 80vh;\n  color: #FEFEFE; }\n\n.book-trip-page {\n  height: 80vh;\n  background-color: #B0C6D5; }\n\n.book-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: #B0C6D5;\n  height: 80%; }\n\n.trip-card-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 83%;\n  justify-content: space-around; }\n\n.trip-buttons-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  justify-content: space-around;\n  height: 5vh; }\n\n.card-display {\n  display: flex;\n  flex-direction: column;\n  justify-content: row;\n  overflow: auto;\n  height: 80%;\n  grid-gap: 4%;\n  align-items: center; }\n\n.trip-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: 0 0 10px #5296AC;\n  color: black;\n  width: 60%; }\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%; }\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  display: flex; }\n\n.cost-modal {\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%; }\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%; }\n\n@media only screen and (max-width: 800px) {\n  .login-form {\n    width: 80%; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 35em; }\n  .confirm-button,\n  .cancel-button {\n    width: 45%;\n    height: 15%;\n    margin: 1%; }\n  .btn {\n    font-size: .7em; } }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em; }\n  .login-button {\n    width: 60%; }\n  #pwd,\n  #username {\n    width: 90vw; }\n  .welcome-image-wrapper {\n    height: 40em; }\n    .welcome-image-wrapper .welcome-image {\n      width: 23em; }\n  .year-cost {\n    text-align: center; }\n  .btn {\n    height: 25; }\n  .trip-card {\n    width: 80%; }\n  .trip-dropdown {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+ECA+E;ADG/E;;;ECCE;ADIF;EACE,iBAAiB;EACjB,MAAA;EACA,8BAA8B;EAC9B,MAAA,EAAO;;AAGT;+ECH+E;ADM/E;;ECHE;ADOF;EACE,SAAS,EAAA;;AAGX;;ECLE;ADSF;EACE,cAAc,EAAA;;AAGhB;;;ECNE;ADWF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+ECV+E;ADa/E;;;ECTE;ADcF;EACE,uBAAuB;EACvB,MAAA;EACA,SAAS;EACT,MAAA;EACA,iBAAiB;EACjB,MAAA,EAAO;;AAGT;;;ECXE;ADgBF;EACE,iCAAiC;EACjC,MAAA;EACA,cAAc;EACd,MAAA,EAAO;;AAGT;+ECf+E;ADkB/E;;ECfE;ADmBF;EACE,6BAA6B,EAAA;;AAG/B;;;EChBE;ADqBF;EACE,mBAAmB;EACnB,MAAA;EACA,0BAA0B;EAC1B,MAAA;EACA,iCAAiC;EACjC,MAAA,EAAO;;AAGT;;ECnBE;ADuBF;;EAEE,mBAAmB,EAAA;;AAGrB;;;ECpBE;ADyBF;;;EAGE,iCAAiC;EACjC,MAAA;EACA,cAAc;EACd,MAAA,EAAO;;AAGT;;ECvBE;AD2BF;EACE,cAAc,EAAA;;AAGhB;;;ECxBE;AD6BF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+EC9B+E;ADiC/E;;EC9BE;ADkCF;EACE,kBAAkB,EAAA;;AAGpB;+ECjC+E;ADoC/E;;;EChCE;ADqCF;;;;;EAKE,oBAAoB;EACpB,MAAA;EACA,eAAe;EACf,MAAA;EACA,iBAAiB;EACjB,MAAA;EACA,SAAS;EACT,MAAA,EAAO;;AAGT;;;EClCE;ADuCF;;EAEE,MAAA;EACA,iBAAiB,EAAA;;AAGnB;;;ECpCE;ADyCF;;EAEE,MAAA;EACA,oBAAoB,EAAA;;AAGtB;;ECvCE;AD2CF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;ECzCE;AD6CF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;EC3CE;AD+CF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;EC7CE;ADiDF;EACE,8BAA8B,EAAA;;AAGhC;;;;;EC5CE;ADmDF;EACE,sBAAsB;EACtB,MAAA;EACA,cAAc;EACd,MAAA;EACA,cAAc;EACd,MAAA;EACA,eAAe;EACf,MAAA;EACA,UAAU;EACV,MAAA;EACA,mBAAmB;EACnB,MAAA,EAAO;;AAGT;;ECjDE;ADqDF;EACE,wBAAwB,EAAA;;AAG1B;;ECnDE;ADuDF;EACE,cAAc,EAAA;;AAGhB;;;ECpDE;AACF;;ED0DE,sBAAsB;EACtB,MAAA;EACA,UAAU;EACV,MAAA,EAAO;;AAGT;;ECvDE;AACF;;ED4DE,YAAY,EAAA;;AAGd;;;ECxDE;AACF;ED6DE,6BAA6B;EAC7B,MAAA;EACA,oBAAoB;EACpB,MAAA,EAAO;;AAGT;;EC3DE;AACF;ED+DE,wBAAwB,EAAA;;AAG1B;;;EC5DE;ADiEF;EACE,0BAA0B;EAC1B,MAAA;EACA,aAAa;EACb,MAAA,EAAO;;AAGT;+EChE+E;ADmE/E;;EChEE;ADoEF;EACE,cAAc,EAAA;;AAGhB;;EClEE;ADsEF;EACE,kBAAkB,EAAA;;AAGpB;+ECrE+E;ADwE/E;;ECrEE;ADyEF;EACE,aAAa,EAAA;;AAGf;;ECvEE;AACF;ED2EE,aAAa,EAAA;;AAjWf;ECnBE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,SAAS;EACT,UAAU;EACV,kCACU,EAAA;;AAGZ;ECPE,aAAa;EACb,8BDO0B;ECN1B,wBDMgC;EAClC,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,cAAc,EAAA;EALd;IAQI,2BAA2B;IAC3B,WAAW;IACX,UAAU,EAAA;EAVd;IAcI,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB,EAAA;;AAIxB;EACE,oBAAoB,EAAA;;AAGtB;EC1BE,aAAa;EACb,sBD0B2B;ECzB3B,uBDyBmC;EACnC,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBC7CqB,EAAA;;ADgDvB;EClCE,aAAa;EACb,sBDkC2B;ECjC3B,uBDiCmC;EACnC,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,4BCvD6B;EDwD7B,WAAW,EAAA;;AAGb;EAEE,UAAU;EACV,YAAY,EAAA;EAHd;;IAOM,UAAU;IACV,UAAU;IACV,iBAAiB;IACjB,4BCrEyB,EAAA;;ADyE/B;EC5DE,aAAa;EACb,sBD4D2B;EC3D3B,uBD2DmC,EAAA;;AAGrC;EChEE,aAAa;EACb,sBDgE2B;EC/D3B,uBD+DmC,EAAA;;AAGrC;EACE,aAAa,EAAA;;AAGf;EACC,UAAU;EACV,kBAAkB,EAAA;;AAGnB;EC7EE,aAAa;EACb,sBD6E2B;EC5E3B,uBD4EmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,mBAAmB,EAAA;EAJrB;IAOM,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,iBAAiB;IACjB,4BCrGyB,EAAA;;ADyG/B;EACE,YAAY,EAAA;;AAGd;EChGE,aAAa;EACb,sBDgG2B;EC/F3B,sBD+FkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,yBClHqB;EDmHrB,cAAc,EAAA;;AAGhB;ECxGE,aAAa;EACb,sBDwG2B;ECvG3B,uBDuGmC;EACnC,mBAAmB;EACnB,WAAW,EAAA;;AAGb;EC9GE,aAAa;EACb,mBD8GwB;EC7GxB,uBD6GgC;EAChC,6BAA6B;EAC7B,UAAU,EAAA;EAHZ;;IAOM,0BCnIiB;IDoIjB,kCAAkC;IAClC,WAAW;IACX,UAAU;IACV,eAAe,EAAA;IAXrB;;MAcY,cAAc;MACd,eAAe;MACf,gCAAgC;MCxI1C,qBDyIsC,EAAA;;AAKxC;;EAEE,WAAW;EACX,UAAU;EACV,eAAe;EACf,eAAe,EAAA;;AAGjB;;;EAGE,0BAA0B;EAC1B,kCAAkC;EAClC,WAAW;EACX,UAAU;EACV,eAAe,EAAA;EAPjB;;;IAUM,cAAc;IACd,eAAe;IACf,gCAAgC;IClKpC,qBDmKgC,EAAA;;AAIlC;EC7JE,aAAa;EACb,sBD6J2B;EC5J3B,sBD4JkC;EAClC,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,eAAe,EAAA;;AAGjB;EACE,YAAY,EAAA;;AAGd;EACE,yBC5LqB;ED6LrB,YAAY,EAAA;EAFd;IAKI,WAAW;IACX,eAAe,EAAA;;AAInB;EACE,uBAAuB;EACvB,kBAAkB,EAAA;;AAGpB;EC5LE,aAAa;EACb,sBD4L2B;EC3L3B,uBD2LmC;EACnC,uBAAuB;EACvB,yBC7MqB,EAAA;;ADgNvB;EClME,aAAa;EACb,mBDkMwB;ECjMxB,sBDiM+B;EAC/B,6BAA6B;EAC7B,yBCnNqB;EDoNrB,YAAY;EACZ,cAAc,EAAA;;AAGhB;EACE,YAAY;EACZ,yBC1NqB,EAAA;;AD6NvB;EC/ME,aAAa;EACb,sBD+M2B;EC9M3B,uBD8MmC;EACnC,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,yBCnOqB;EDoOrB,WAAW,EAAA;;AApBb;EClME,aAAa;EACb,sBDyN0B;ECxN1B,uBDwNkC;EAClC,WAAW;EACX,6BAA6B,EAAA;;AAG/B;EC/NE,aAAa;EACb,mBD+NuB;EC9NvB,uBD8N+B;EAChC,WAAW;EACX,6BAA6B;EAC7B,WAAW,EAAA;;AAGZ;ECtOE,aAAa;EACb,sBDsOyB;ECrOzB,oBDqO8B;EAChC,cAAc;EACd,WAAW;EACX,YAAY;EACZ,mBAAmB,EAAA;;AAGnB;EC9OE,aAAa;EACb,sBD8O2B;EC7O3B,uBD6OmC;EACnC,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,4BChQ6B;EDiQ7B,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,iBAAiB,EAAA;;AAGnB;EACE,uBAAuB;EACvB,mBAAmB;EACnB,WAAU;EACV,aAAa,EAAA;;AAGf;EAEE,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;EAEE,UAAU;EACV,WAAW;EACX,UAAU,EAAA;;AAGZ;EA1OA;IA4OE,UAAS,EAAA;EA7MX;IAiNE,YAAY,EAAA;IAjNd;MAoNI,WAAW,EAAA;EAhBf;;IAsBE,UAAU;IACV,WAAW;IACX,UAAU,EAAA;EAGZ;IACE,eAAe,EAAA,EAChB;;AAKD;EDxRA;IC0RI,gBAAgB,EAAA;EA7OpB;IAgPI,UAAU,EAAA;EAGZ;;IAEE,WAAW,EAAA;EAhPf;IAoPE,YAAY,EAAA;IApPd;MAuPI,WAAW,EAAA;EA7If;IAkJE,kBAAkB,EAAA;EA7BpB;IAiCE,UAAU,EAAA;EA/FZ;IAmGE,UAAU,EAAA;EAGZ;IACE,UAAS,EAAA,EACV","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","\n@import \"variables\";\n@import \"normalize\";\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Raleway',\n  sans-serif;\n}\n\nheader {\n@include gridDisplay(1fr 4fr, none);\nheight: 20vh;\nbackground-color: #5296AC;\nwidth: 100%;\ncolor: #FEFEFE;\n\n  .globe-image {\n    justify-content: flex-start;\n    height: 9em;\n    width: 5em;\n  }\n\n  h1 {\n    padding: 5%;\n    font-size: 2.8em;\n    justify-self: center;\n    justify-content: end;\n  }\n}\n\nh3 {\n  justify-self: center;\n}\n\n.login-page {\n  @include flexDisplay(column, center);\n  height: 80vh;\n  width: 100%;\n  align-items: center;\n  background-color: $primary-color;\n}\n\n.booking-form {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  margin: 4%;\n  width: 60%;\n  height: 100vh;\n  border: solid #CEA692 1em;\n  box-shadow: $shadow-color;\n  padding: 1%;\n}\n\n.login-form {\n  @extend .booking-form;\n  width: 50%;\n  height: 40vh;\n\n    #username,\n    #pwd {\n      width: 40%;\n      height: 8%;\n      border-radius: 5%;\n      box-shadow: $shadow-color;\n    }\n}\n\n.welcome-page {\n  @include flexDisplay(column, center)\n}\n\n.my-trips {\n  @include flexDisplay(column, center);\n}\n\n.hidden {\n  display: none;\n}\n\n.login-button {\n width: 30%;\n align-self: center;\n}\n\n.welcome-image-wrapper {\n  @include flexDisplay(column, center);\n  align-self: center;\n  height: 40em;\n  align-items: center;\n\n    .welcome-image {\n      height: 20em;\n      width: 40em;\n      filter: opacity(80%);\n      border-radius: 2%;\n      box-shadow: $shadow-color;\n    }\n}\n\nh2 {\n  color: black;\n}\n\n.welcome-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n  align-items: center;\n  background-color: $primary-color;\n  color: #6F8BA4;\n}\n\n.greeting-container {\n  @include flexDisplay(column, center);\n  align-items: center;\n  width: 100%;\n}\n\n.options-container {\n  @include flexDisplay(row, center);\n  justify-content: space-evenly;\n  width: 80%;\n\n    .my-trips-btn,\n    .book-trip {\n      border: 3px outset $primary-color;\n      border-radius: 15px 15px 15px 15px;\n      padding: 1%;\n      width: 30%;\n      cursor: pointer;\n\n          &:hover {\n            color: #6F8BA4;\n            font-size: 14px;\n            text-shadow: 0px 2px 4px #BADFE5;\n            @include transition(.4s ease);\n          }\n    }\n}\n\n.back-to-main,\n.back-to-main-book {\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  margin-left: 2%;\n}\n\n.booking-button,\n button,\n .login-button {\n  border: 3px outset #5296AC;\n  border-radius: 15px 15px 15px 15px;\n  padding: 1%;\n  width: 20%;\n  cursor: pointer;\n\n    &:hover {\n      color: #6F8BA4;\n      font-size: 14px;\n      text-shadow: 0px 2px 4px #BADFE5;\n      @include transition(.4s ease);\n    }\n}\n\n.my-trips-container {\n  @include flexDisplay(column, start);\n  height: 80vh;\n}\n\n.my-trips-wrapper {\n  display: flex;\n  justify-content: center;\n  height: 3em;\n  margin-top: -2%;\n}\n\n.my-trips-text {\n  color: black;\n}\n\n.arrow-wrapper {\n  background-color: $primary-color;\n  padding: .7%;\n\n  .arrow {\n    padding: 2%;\n    margin-left: 3%;\n  }\n}\n\n.year-cost {\n  justify-content: center;\n  align-self: center;\n}\n\n.header-wrapper {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  background-color: $primary-color;\n}\n\n.trip-card-section {\n  @include flexDisplay(row, start);\n  justify-content: space-around;\n  background-color: $primary-color;\n  height: 80vh;\n  color: #FEFEFE;\n}\n\n.book-trip-page {\n  height: 80vh;\n  background-color: $primary-color;\n}\n\n.book-wrapper {\n  @include flexDisplay(column, center);\n  align-items: center;\n  color: black;\n  justify-items: center;\n  justify-content: center;\n  background-color: $primary-color;\n  height: 80%;\n}\n\n.trip-card-section {\n @include flexDisplay(column, center);\n  height: 83%;\n  justify-content: space-around;\n}\n\n.trip-buttons-wrapper {\n @include flexDisplay(row, center);\n width: 100%;\n justify-content: space-around;\n height: 5vh;\n}\n\n.card-display {\n@include flexDisplay(column, row);\noverflow: auto;\nheight: 80%;\ngrid-gap: 4%;\nalign-items: center;\n}\n\n.trip-card {\n  @include flexDisplay(column, center);\n  justify-content: center;\n  align-items: center;\n  background-color: #fdfdff;\n  box-shadow: $shadow-color;\n  color: black;\n  width: 60%;\n}\n\n.card-image {\n  height: 80%;\n  width: 90%;\n  filter: opacity(80%);\n  border-radius: 2%;\n}\n\n.image-wrapper {\n  justify-content: center;\n  align-items: center;\n  width:100%;\n  display: flex;\n}\n\n.cost-modal {\n  @extend .booking-form;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  width: 50vw;\n  font-size: 1.5em;\n  text-align: center;\n  margin: 1%;\n}\n\n.confirm-button,\n.cancel-button {\n  width: 25%;\n  height: 15%;\n  margin: 1%;\n}\n\n@media only screen and (max-width: 800px) {\n.login-form {\n  width:80%;\n}\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 35em;\n  }\n}\n\n.confirm-button,\n.cancel-button {\n  width: 45%;\n  height: 15%;\n  margin: 1%;\n}\n\n.btn {\n  font-size: .7em;\n}\n\n\n}\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 1.5em;\n  }\n  .login-button {\n    width: 60%;\n  }\n\n  #pwd,\n  #username {\n    width: 90vw;\n  }\n\n.welcome-image-wrapper {\n  height: 40em;\n\n  .welcome-image {\n    width: 23em;\n  }\n}\n\n.year-cost {\n  text-align: center;\n}\n\n.btn {\n  height: 25;\n}\n\n.trip-card {\n  width: 80%;\n}\n\n.trip-dropdown {\n  width:50%;\n}\n}","$primary-color: #B0C6D5;\n$shadow-color: 0 0 10px #5296AC;\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}"],"sourceRoot":""}]);
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
  // debugger
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
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCardDisplay();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jdXJ2ZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW4uanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRjtBQUNBLDhCQUE4QixRQUFTLDBUQUEwVCxzQkFBc0IsOENBQThDLGFBQWEsMEpBQTBKLGNBQWMsRUFBRSxzRUFBc0UsbUJBQW1CLEVBQUUsb0pBQW9KLG1CQUFtQixxQkFBcUIsRUFBRSxnTkFBZ04sNEJBQTRCLHlCQUF5QixpQ0FBaUMsYUFBYSxxSkFBcUosc0NBQXNDLDhCQUE4QixhQUFhLHFMQUFxTCxrQ0FBa0MsRUFBRSx3SkFBd0osd0JBQXdCLDBDQUEwQyxpREFBaUQsYUFBYSx1RkFBdUYsd0JBQXdCLEVBQUUsbUtBQW1LLHNDQUFzQyw4QkFBOEIsYUFBYSxvRUFBb0UsbUJBQW1CLEVBQUUsa0hBQWtILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixFQUFFLFNBQVMsb0JBQW9CLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSxpTEFBaUwsdUJBQXVCLEVBQUUsd1BBQXdQLHlCQUF5QiwrQkFBK0IsaUNBQWlDLHlCQUF5QixhQUFhLDZGQUE2RixpQ0FBaUMsRUFBRSxrS0FBa0ssb0NBQW9DLEVBQUUsdUpBQXVKLCtCQUErQixFQUFFLDZNQUE2TSx1QkFBdUIsZUFBZSxFQUFFLHNNQUFzTSxtQ0FBbUMsRUFBRSw0REFBNEQsbUNBQW1DLEVBQUUsc1FBQXNRLDJCQUEyQiw4QkFBOEIsOEJBQThCLCtCQUErQiwwQkFBMEIsbUNBQW1DLGFBQWEsOEZBQThGLDZCQUE2QixFQUFFLDZFQUE2RSxtQkFBbUIsRUFBRSxzSUFBc0ksMkJBQTJCLDBCQUEwQixhQUFhLHNMQUFzTCxpQkFBaUIsRUFBRSxxSUFBcUksa0NBQWtDLG9DQUFvQyxhQUFhLHdIQUF3SCw2QkFBNkIsRUFBRSwyS0FBMkssK0JBQStCLDZCQUE2QixhQUFhLGtMQUFrTCxtQkFBbUIsRUFBRSxtRUFBbUUsdUJBQXVCLEVBQUUsMEpBQTBKLGtCQUFrQixFQUFFLDhEQUE4RCxrQkFBa0IsRUFBRSxVQUFVLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGtCQUFrQixjQUFjLGVBQWUsdUNBQXVDLEVBQUUsWUFBWSxrQkFBa0IsbUNBQW1DLDZCQUE2QixpQkFBaUIsOEJBQThCLGdCQUFnQixtQkFBbUIsRUFBRSx5QkFBeUIsa0NBQWtDLGtCQUFrQixpQkFBaUIsRUFBRSxlQUFlLGtCQUFrQix1QkFBdUIsMkJBQTJCLDJCQUEyQixFQUFFLFFBQVEseUJBQXlCLEVBQUUsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDhCQUE4QixFQUFFLDZDQUE2QyxrQkFBa0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsd0JBQXdCLGVBQWUsZUFBZSxrQkFBa0IsOEJBQThCLGlDQUFpQyxnQkFBZ0IsRUFBRSxpQkFBaUIsZUFBZSxpQkFBaUIsRUFBRSxnREFBZ0QsaUJBQWlCLGlCQUFpQix3QkFBd0IsbUNBQW1DLEVBQUUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEVBQUUsZUFBZSxrQkFBa0IsMkJBQTJCLDRCQUE0QixFQUFFLGFBQWEsa0JBQWtCLEVBQUUsbUJBQW1CLGVBQWUsdUJBQXVCLEVBQUUsNEJBQTRCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixpQkFBaUIsd0JBQXdCLEVBQUUsMkNBQTJDLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsRUFBRSxRQUFRLGlCQUFpQixFQUFFLHdCQUF3QixrQkFBa0IsMkJBQTJCLDJCQUEyQixpQkFBaUIsd0JBQXdCLDhCQUE4QixtQkFBbUIsRUFBRSx5QkFBeUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixFQUFFLHdCQUF3QixrQkFBa0Isd0JBQXdCLDRCQUE0QixrQ0FBa0MsZUFBZSxFQUFFLHdFQUF3RSxpQ0FBaUMseUNBQXlDLGtCQUFrQixpQkFBaUIsc0JBQXNCLEVBQUUsd0ZBQXdGLHVCQUF1Qix3QkFBd0IseUNBQXlDLDhCQUE4QixFQUFFLHdDQUF3QyxnQkFBZ0IsZUFBZSxvQkFBb0Isb0JBQW9CLEVBQUUsOENBQThDLCtCQUErQix1Q0FBdUMsZ0JBQWdCLGVBQWUsb0JBQW9CLEVBQUUsb0VBQW9FLHFCQUFxQixzQkFBc0IsdUNBQXVDLDRCQUE0QixFQUFFLHlCQUF5QixrQkFBa0IsMkJBQTJCLDJCQUEyQixpQkFBaUIsRUFBRSx1QkFBdUIsa0JBQWtCLDRCQUE0QixnQkFBZ0Isb0JBQW9CLEVBQUUsb0JBQW9CLGlCQUFpQixFQUFFLG9CQUFvQiw4QkFBOEIsaUJBQWlCLEVBQUUsMkJBQTJCLGtCQUFrQixzQkFBc0IsRUFBRSxnQkFBZ0IsNEJBQTRCLHVCQUF1QixFQUFFLHFCQUFxQixrQkFBa0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsOEJBQThCLEVBQUUsd0JBQXdCLGtCQUFrQix3QkFBd0IsMkJBQTJCLGtDQUFrQyw4QkFBOEIsaUJBQWlCLG1CQUFtQixFQUFFLHFCQUFxQixpQkFBaUIsOEJBQThCLEVBQUUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixpQkFBaUIsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsZ0JBQWdCLEVBQUUsd0JBQXdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGdCQUFnQixrQ0FBa0MsRUFBRSwyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsRUFBRSxtQkFBbUIsa0JBQWtCLDJCQUEyQix5QkFBeUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsd0JBQXdCLEVBQUUsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDRCQUE0Qix3QkFBd0IsOEJBQThCLGlDQUFpQyxpQkFBaUIsZUFBZSxFQUFFLGlCQUFpQixnQkFBZ0IsZUFBZSx5QkFBeUIsc0JBQXNCLEVBQUUsb0JBQW9CLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGtCQUFrQixFQUFFLGlCQUFpQix3QkFBd0IsNEJBQTRCLGlCQUFpQixnQkFBZ0IscUJBQXFCLHVCQUF1QixlQUFlLEVBQUUsc0NBQXNDLGVBQWUsZ0JBQWdCLGVBQWUsRUFBRSwrQ0FBK0MsaUJBQWlCLGlCQUFpQixFQUFFLDRCQUE0QixtQkFBbUIsRUFBRSw2Q0FBNkMsb0JBQW9CLEVBQUUsd0NBQXdDLGlCQUFpQixrQkFBa0IsaUJBQWlCLEVBQUUsVUFBVSxzQkFBc0IsRUFBRSxFQUFFLCtDQUErQyxRQUFRLHVCQUF1QixFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSx3QkFBd0Isa0JBQWtCLEVBQUUsNEJBQTRCLG1CQUFtQixFQUFFLDZDQUE2QyxvQkFBb0IsRUFBRSxnQkFBZ0IseUJBQXlCLEVBQUUsVUFBVSxpQkFBaUIsRUFBRSxnQkFBZ0IsaUJBQWlCLEVBQUUsb0JBQW9CLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxzS0FBc0ssS0FBSyxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGlCQUFpQixLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssZ0JBQWdCLE1BQU0sS0FBSyxLQUFLLGdCQUFnQixRQUFRLEtBQUssS0FBSyxVQUFVLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixPQUFPLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FBSyxNQUFNLGtCQUFrQixRQUFRLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksaUJBQWlCLE1BQU0sTUFBTSxPQUFPLGtCQUFrQixRQUFRLE1BQU0sUUFBUSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sZ0JBQWdCLFFBQVEsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLFFBQVEsUUFBUSxNQUFNLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxTQUFTLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLGdCQUFnQixPQUFPLE1BQU0sT0FBTyxVQUFVLGtCQUFrQixRQUFRLE1BQU0sT0FBTyxVQUFVLGtCQUFrQixPQUFPLE1BQU0sU0FBUyxrQkFBa0IsT0FBTyxNQUFNLFNBQVMsWUFBWSxpQkFBaUIsTUFBTSxNQUFNLFNBQVMsa0JBQWtCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksaUJBQWlCLE1BQU0sTUFBTSxNQUFNLGtCQUFrQixPQUFPLE1BQU0sTUFBTSxnQkFBZ0IsUUFBUSxNQUFNLE1BQU0sYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixPQUFPLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxpQkFBaUIsTUFBTSxNQUFNLEtBQUssbUJBQW1CLFFBQVEsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLGdCQUFnQixLQUFLLFFBQVEsUUFBUSxNQUFNLE1BQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixNQUFNLFFBQVEsUUFBUSxNQUFNLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTSxLQUFLLGlCQUFpQixNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGVBQWUsS0FBSyxZQUFZLFdBQVcsZUFBZSxLQUFLLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxlQUFlLFdBQVcsVUFBVSxZQUFZLG9CQUFvQixPQUFPLFdBQVcsYUFBYSxlQUFlLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsa0JBQWtCLEtBQUssVUFBVSxlQUFlLE1BQU0sVUFBVSxVQUFVLFlBQVksb0JBQW9CLE9BQU8sV0FBVyxhQUFhLHFCQUFxQixNQUFNLFdBQVcsYUFBYSxxQkFBcUIsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxlQUFlLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLG9CQUFvQixPQUFPLGdCQUFnQixLQUFLLFdBQVcsYUFBYSxlQUFlLFdBQVcsWUFBWSxjQUFjLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxlQUFlLGFBQWEsaUJBQWlCLEtBQUssV0FBVyxhQUFhLGVBQWUsYUFBYSxnQkFBZ0IsTUFBTSxhQUFhLGNBQWMsV0FBVyxVQUFVLGVBQWUsT0FBTyxVQUFVLFVBQVUsWUFBWSxxQkFBcUIsT0FBTyxVQUFVLFVBQVUsVUFBVSxnQkFBZ0IsUUFBUSxZQUFZLGFBQWEsV0FBVyxVQUFVLGVBQWUsUUFBUSxVQUFVLFVBQVUsWUFBWSxxQkFBcUIsTUFBTSxXQUFXLGFBQWEsZUFBZSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksV0FBVyxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxhQUFhLGlCQUFpQixLQUFLLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxXQUFXLGFBQWEsZUFBZSxhQUFhLG9CQUFvQixPQUFPLFdBQVcsYUFBYSxlQUFlLGFBQWEsY0FBYyxZQUFZLGdCQUFnQixNQUFNLFVBQVUsbUJBQW1CLE9BQU8sV0FBVyxhQUFhLGVBQWUsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxlQUFlLFdBQVcsa0JBQWtCLE1BQU0sV0FBVyxhQUFhLGVBQWUsV0FBVyxZQUFZLGlCQUFpQixLQUFLLFdBQVcsYUFBYSxlQUFlLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxlQUFlLGFBQWEsYUFBYSxhQUFhLGNBQWMsWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsZUFBZSxLQUFLLHNCQUFzQixLQUFLLE1BQU0sa0JBQWtCLE9BQU8sZ0JBQWdCLE1BQU0sZUFBZSxNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGtCQUFrQixPQUFPLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLHFXQUFxVyxzQkFBc0IsOENBQThDLGNBQWMsOEpBQThKLGNBQWMsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsc0pBQXNKLG1CQUFtQixxQkFBcUIsR0FBRyxvTkFBb04sNEJBQTRCLHlCQUF5QixpQ0FBaUMsY0FBYyx1SkFBdUosc0NBQXNDLDhCQUE4QixjQUFjLHlMQUF5TCxrQ0FBa0MsR0FBRywwSkFBMEosd0JBQXdCLDBDQUEwQyxpREFBaUQsY0FBYyx5RkFBeUYsd0JBQXdCLEdBQUcscUtBQXFLLHNDQUFzQyw4QkFBOEIsY0FBYyxzRUFBc0UsbUJBQW1CLEdBQUcsb0hBQW9ILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxxTEFBcUwsdUJBQXVCLEdBQUcsNFBBQTRQLHlCQUF5QiwrQkFBK0IsaUNBQWlDLHlCQUF5QixjQUFjLCtGQUErRixpQ0FBaUMsR0FBRyxvS0FBb0ssb0NBQW9DLEdBQUcseUpBQXlKLCtCQUErQixHQUFHLCtNQUErTSx1QkFBdUIsZUFBZSxHQUFHLHdNQUF3TSxtQ0FBbUMsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsd1FBQXdRLDJCQUEyQiw4QkFBOEIsOEJBQThCLCtCQUErQiwwQkFBMEIsbUNBQW1DLGNBQWMsZ0dBQWdHLDZCQUE2QixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRyx3SUFBd0ksMkJBQTJCLDBCQUEwQixjQUFjLHdMQUF3TCxpQkFBaUIsR0FBRyx1SUFBdUksa0NBQWtDLG9DQUFvQyxjQUFjLDBIQUEwSCw2QkFBNkIsR0FBRyw2S0FBNkssK0JBQStCLDZCQUE2QixjQUFjLHNMQUFzTCxtQkFBbUIsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsOEpBQThKLGtCQUFrQixHQUFHLGdFQUFnRSxrQkFBa0IsR0FBRywyQkFBMkIsd0JBQXdCLFVBQVUsa0JBQWtCLDJCQUEyQiw0QkFBNEIsa0JBQWtCLGNBQWMsZUFBZSwwQ0FBMEMsR0FBRyxZQUFZLHNDQUFzQyxlQUFlLDRCQUE0QixjQUFjLGlCQUFpQixvQkFBb0Isa0NBQWtDLGtCQUFrQixpQkFBaUIsS0FBSyxVQUFVLGtCQUFrQix1QkFBdUIsMkJBQTJCLDJCQUEyQixLQUFLLEdBQUcsUUFBUSx5QkFBeUIsR0FBRyxpQkFBaUIseUNBQXlDLGlCQUFpQixnQkFBZ0Isd0JBQXdCLHFDQUFxQyxHQUFHLG1CQUFtQix5Q0FBeUMsNEJBQTRCLHdCQUF3QixlQUFlLGVBQWUsa0JBQWtCLDhCQUE4Qiw4QkFBOEIsZ0JBQWdCLEdBQUcsaUJBQWlCLDBCQUEwQixlQUFlLGlCQUFpQiw4QkFBOEIsbUJBQW1CLG1CQUFtQiwwQkFBMEIsa0NBQWtDLE9BQU8sR0FBRyxtQkFBbUIsMkNBQTJDLGVBQWUseUNBQXlDLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxtQkFBbUIsY0FBYyxzQkFBc0IsR0FBRyw0QkFBNEIseUNBQXlDLHVCQUF1QixpQkFBaUIsd0JBQXdCLHdCQUF3QixxQkFBcUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0NBQWtDLE9BQU8sR0FBRyxRQUFRLGlCQUFpQixHQUFHLHdCQUF3Qix3Q0FBd0MsaUJBQWlCLHdCQUF3QixxQ0FBcUMsbUJBQW1CLEdBQUcseUJBQXlCLHlDQUF5Qyx3QkFBd0IsZ0JBQWdCLEdBQUcsd0JBQXdCLHNDQUFzQyxrQ0FBa0MsZUFBZSx3Q0FBd0MsMENBQTBDLDJDQUEyQyxvQkFBb0IsbUJBQW1CLHdCQUF3Qix1QkFBdUIsNkJBQTZCLDhCQUE4QiwrQ0FBK0MsNENBQTRDLGFBQWEsT0FBTyxHQUFHLHdDQUF3QyxnQkFBZ0IsZUFBZSxvQkFBb0Isb0JBQW9CLEdBQUcsZ0RBQWdELCtCQUErQix1Q0FBdUMsZ0JBQWdCLGVBQWUsb0JBQW9CLGlCQUFpQix1QkFBdUIsd0JBQXdCLHlDQUF5QyxzQ0FBc0MsT0FBTyxHQUFHLHlCQUF5Qix3Q0FBd0MsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLG9CQUFvQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxvQkFBb0IscUNBQXFDLGlCQUFpQixjQUFjLGtCQUFrQixzQkFBc0IsS0FBSyxHQUFHLGdCQUFnQiw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHlDQUF5Qyw0QkFBNEIscUNBQXFDLEdBQUcsd0JBQXdCLHFDQUFxQyxrQ0FBa0MscUNBQXFDLGlCQUFpQixtQkFBbUIsR0FBRyxxQkFBcUIsaUJBQWlCLHFDQUFxQyxHQUFHLG1CQUFtQix5Q0FBeUMsd0JBQXdCLGlCQUFpQiwwQkFBMEIsNEJBQTRCLHFDQUFxQyxnQkFBZ0IsR0FBRyx3QkFBd0Isd0NBQXdDLGdCQUFnQixrQ0FBa0MsR0FBRywyQkFBMkIscUNBQXFDLGVBQWUsaUNBQWlDLGVBQWUsR0FBRyxtQkFBbUIsb0NBQW9DLGlCQUFpQixjQUFjLGVBQWUsc0JBQXNCLEdBQUcsZ0JBQWdCLHlDQUF5Qyw0QkFBNEIsd0JBQXdCLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLGVBQWUsR0FBRyxpQkFBaUIsZ0JBQWdCLGVBQWUseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQiw0QkFBNEIsd0JBQXdCLGVBQWUsa0JBQWtCLEdBQUcsaUJBQWlCLDBCQUEwQix3QkFBd0IsNEJBQTRCLGlCQUFpQixnQkFBZ0IscUJBQXFCLHVCQUF1QixlQUFlLEdBQUcsc0NBQXNDLGVBQWUsZ0JBQWdCLGVBQWUsR0FBRywrQ0FBK0MsZUFBZSxjQUFjLEdBQUcsNEJBQTRCLGlCQUFpQixzQkFBc0Isa0JBQWtCLEtBQUssR0FBRyxzQ0FBc0MsZUFBZSxnQkFBZ0IsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLEdBQUcsT0FBTywrQ0FBK0MsUUFBUSx1QkFBdUIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssMEJBQTBCLGtCQUFrQixLQUFLLDRCQUE0QixpQkFBaUIsc0JBQXNCLGtCQUFrQixLQUFLLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLFVBQVUsZUFBZSxHQUFHLGdCQUFnQixlQUFlLEdBQUcsb0JBQW9CLGNBQWMsR0FBRyxHQUFHLDJCQUEyQixrQ0FBa0MsK0JBQStCLHVCQUF1QixHQUFHLHlDQUF5QyxrQkFBa0Isb0NBQW9DLDhCQUE4QixHQUFHLDhDQUE4QyxrQkFBa0IsK0JBQStCLDhCQUE4QixHQUFHLG1CQUFtQjtBQUN4aThCO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBOztBQUVBO0FBQ0EsMkRBQTJELEdBQUc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ3BEekI7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUYsWUFBcUk7O0FBRXJJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSVQsMExBQU8sYUFBYSxFOzs7Ozs7Ozs7Ozs7QUNabkM7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0EsNkNBQTZDLFdBQVcsU0FBUyxTQUFTO0FBQzFFO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRCw4REFBOEQsYUFBYTtBQUMzRSw0REFBNEQsYUFBYTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlLFdBQVcsWUFBWSxJQUFJLFlBQVk7QUFDbEYsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUJBQW1CO0FBQ3RFO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDOUV6QjtBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFlLCtFQUFnQixFOzs7Ozs7Ozs7Ozs7QUNBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcUM7QUFDRDtBQUNYO0FBQ2dCOztBQUV6QztBQUM0QjtBQUNGO0FBQ0U7QUFDTTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpREFBVTtBQUMzQixvQkFBb0IsaURBQVU7QUFDOUIsYUFBYSxpREFBVTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQVE7QUFDNUIsRUFBRSxzREFBVTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1osRUFBRSxzREFBVTtBQUNaLEVBQUUsc0RBQVU7QUFDWixFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0EsVUFBVSxzREFBVTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseURBQXlELG1DQUFtQztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNEQUFVO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzREFBVTtBQUNaOztBQUVBO0FBQ0EsbUZBQW1GLG1DQUFtQztBQUN0SCxFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlBBO0FBQUE7QUFBQTtBQUFBO0FBQzBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSTtBQUM3QjtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTZBQztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICNGRUZFRkU7IH1cXG4gIGhlYWRlciAuZ2xvYmUtaW1hZ2Uge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogNWVtOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kOyB9XFxuXFxuaDMge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4tcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTsgfVxcblxcbi5ib29raW5nLWZvcm0sIC5sb2dpbi1mb3JtLCAuY29zdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA0JTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyOiBzb2xpZCAjQ0VBNjkyIDFlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1Mjk2QUM7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwdmg7IH1cXG4gIC5sb2dpbi1mb3JtICN1c2VybmFtZSxcXG4gIC5sb2dpbi1mb3JtICNwd2Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDglO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUyOTZBQzsgfVxcblxcbi53ZWxjb21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5teS10cmlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLndlbGNvbWUtaW1hZ2Utd3JhcHBlciAud2VsY29tZS1pbWFnZSB7XFxuICAgIGhlaWdodDogMjBlbTtcXG4gICAgd2lkdGg6IDQwZW07XFxuICAgIGZpbHRlcjogb3BhY2l0eSg4MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUyOTZBQzsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi53ZWxjb21lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTtcXG4gIGNvbG9yOiAjNkY4QkE0OyB9XFxuXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA4MCU7IH1cXG4gIC5vcHRpb25zLWNvbnRhaW5lciAubXktdHJpcHMtYnRuLFxcbiAgLm9wdGlvbnMtY29udGFpbmVyIC5ib29rLXRyaXAge1xcbiAgICBib3JkZXI6IDNweCBvdXRzZXQgI0IwQzZENTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAub3B0aW9ucy1jb250YWluZXIgLm15LXRyaXBzLWJ0bjpob3ZlcixcXG4gICAgLm9wdGlvbnMtY29udGFpbmVyIC5ib29rLXRyaXA6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNkY4QkE0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggI0JBREZFNTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7IH1cXG5cXG4uYmFjay10by1tYWluLFxcbi5iYWNrLXRvLW1haW4tYm9vayB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMiU7IH1cXG5cXG4uYm9va2luZy1idXR0b24sXFxuYnV0dG9uLFxcbi5sb2dpbi1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICM1Mjk2QUM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgcGFkZGluZzogMSU7XFxuICB3aWR0aDogMjAlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYm9va2luZy1idXR0b246aG92ZXIsXFxuICBidXR0b246aG92ZXIsXFxuICAubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2RjhCQTQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4ICNCQURGRTU7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTsgfVxcblxcbi5teS10cmlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgaGVpZ2h0OiA4MHZoOyB9XFxuXFxuLm15LXRyaXBzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBtYXJnaW4tdG9wOiAtMiU7IH1cXG5cXG4ubXktdHJpcHMtdGV4dCB7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4uYXJyb3ctd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1O1xcbiAgcGFkZGluZzogLjclOyB9XFxuICAuYXJyb3ctd3JhcHBlciAuYXJyb3cge1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlOyB9XFxuXFxuLnllYXItY29zdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1OyB9XFxuXFxuLnRyaXAtY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQzZENTtcXG4gIGhlaWdodDogODB2aDtcXG4gIGNvbG9yOiAjRkVGRUZFOyB9XFxuXFxuLmJvb2stdHJpcC1wYWdlIHtcXG4gIGhlaWdodDogODB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEM2RDU7IH1cXG5cXG4uYm9vay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNkQ1O1xcbiAgaGVpZ2h0OiA4MCU7IH1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogODMlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4udHJpcC1idXR0b25zLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDV2aDsgfVxcblxcbi5jYXJkLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJvdztcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBncmlkLWdhcDogNCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnRyaXAtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1Mjk2QUM7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogNjAlOyB9XFxuXFxuLmNhcmQtaW1hZ2Uge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZmlsdGVyOiBvcGFjaXR5KDgwJSk7XFxuICBib3JkZXItcmFkaXVzOiAyJTsgfVxcblxcbi5pbWFnZS13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5jb3N0LW1vZGFsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMSU7IH1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAxJTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICAgIGhlaWdodDogNDBlbTsgfVxcbiAgICAud2VsY29tZS1pbWFnZS13cmFwcGVyIC53ZWxjb21lLWltYWdlIHtcXG4gICAgICB3aWR0aDogMzVlbTsgfVxcbiAgLmNvbmZpcm0tYnV0dG9uLFxcbiAgLmNhbmNlbC1idXR0b24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgbWFyZ2luOiAxJTsgfVxcbiAgLmJ0biB7XFxuICAgIGZvbnQtc2l6ZTogLjdlbTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtOyB9XFxuICAubG9naW4tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDYwJTsgfVxcbiAgI3B3ZCxcXG4gICN1c2VybmFtZSB7XFxuICAgIHdpZHRoOiA5MHZ3OyB9XFxuICAud2VsY29tZS1pbWFnZS13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiA0MGVtOyB9XFxuICAgIC53ZWxjb21lLWltYWdlLXdyYXBwZXIgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICAgIHdpZHRoOiAyM2VtOyB9XFxuICAueWVhci1jb3N0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYnRuIHtcXG4gICAgaGVpZ2h0OiAyNTsgfVxcbiAgLnRyaXAtY2FyZCB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC50cmlwLWRyb3Bkb3duIHtcXG4gICAgd2lkdGg6IDUwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fbm9ybWFsaXplLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQTtBQUVBOytFQ0ErRTtBREcvRTs7O0VDQ0U7QURJRjtFQUNFLGlCQUFpQjtFQUNqQixNQUFBO0VBQ0EsOEJBQThCO0VBQzlCLE1BQUEsRUFBTzs7QUFHVDsrRUNIK0U7QURNL0U7O0VDSEU7QURPRjtFQUNFLFNBQVMsRUFBQTs7QUFHWDs7RUNMRTtBRFNGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VDTkU7QURXRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7K0VDVitFO0FEYS9FOzs7RUNURTtBRGNGO0VBQ0UsdUJBQXVCO0VBQ3ZCLE1BQUE7RUFDQSxTQUFTO0VBQ1QsTUFBQTtFQUNBLGlCQUFpQjtFQUNqQixNQUFBLEVBQU87O0FBR1Q7OztFQ1hFO0FEZ0JGO0VBQ0UsaUNBQWlDO0VBQ2pDLE1BQUE7RUFDQSxjQUFjO0VBQ2Qs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QW9QRSxZQUFZLEVBQUE7SUFwUGQ7TUF1UEksV0FBVyxFQUFBO0VBN0lmO0lBa0pFLGtCQUFrQixFQUFBO0VBN0JwQjtJQWlDRSxVQUFVLEVBQUE7RUEvRlo7SUFtR0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFTLEVBQUEsRUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiXFxuQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemVcXFwiO1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JyxcXG4gIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDRmciwgbm9uZSk7XFxuaGVpZ2h0OiAyMHZoO1xcbmJhY2tncm91bmQtY29sb3I6ICM1Mjk2QUM7XFxud2lkdGg6IDEwMCU7XFxuY29sb3I6ICNGRUZFRkU7XFxuXFxuICAuZ2xvYmUtaW1hZ2Uge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgfVxcbn1cXG5cXG5oMyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxufVxcblxcbi5ib29raW5nLWZvcm0ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA0JTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyOiBzb2xpZCAjQ0VBNjkyIDFlbTtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctY29sb3I7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgQGV4dGVuZCAuYm9va2luZy1mb3JtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNDB2aDtcXG5cXG4gICAgI3VzZXJuYW1lLFxcbiAgICAjcHdkIHtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIGhlaWdodDogOCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4ud2VsY29tZS1wYWdlIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKVxcbn1cXG5cXG4ubXktdHJpcHMge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiB3aWR0aDogMzAlO1xcbiBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lLWltYWdlLXdyYXBwZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLndlbGNvbWUtaW1hZ2Uge1xcbiAgICAgIGhlaWdodDogMjBlbTtcXG4gICAgICB3aWR0aDogNDBlbTtcXG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoODAlKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLndlbGNvbWUtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgc3RhcnQpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICM2RjhCQTQ7XFxufVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3B0aW9ucy1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogODAlO1xcblxcbiAgICAubXktdHJpcHMtYnRuLFxcbiAgICAuYm9vay10cmlwIHtcXG4gICAgICBib3JkZXI6IDNweCBvdXRzZXQgJHByaW1hcnktY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgICBwYWRkaW5nOiAxJTtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICM2RjhCQTQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCAjQkFERkU1O1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjRzIGVhc2UpO1xcbiAgICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJhY2stdG8tbWFpbixcXG4uYmFjay10by1tYWluLWJvb2sge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4uYm9va2luZy1idXR0b24sXFxuIGJ1dHRvbixcXG4gLmxvZ2luLWJ1dHRvbiB7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzUyOTZBQztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNkY4QkE0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggI0JBREZFNTtcXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG4gICAgfVxcbn1cXG5cXG4ubXktdHJpcHMtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgc3RhcnQpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4ubXktdHJpcHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbi10b3A6IC0yJTtcXG59XFxuXFxuLm15LXRyaXBzLXRleHQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYXJyb3ctd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIHBhZGRpbmc6IC43JTtcXG5cXG4gIC5hcnJvdyB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxuICB9XFxufVxcblxcbi55ZWFyLWNvc3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBzdGFydCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgY29sb3I6ICNGRUZFRkU7XFxufVxcblxcbi5ib29rLXRyaXAtcGFnZSB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLmJvb2std3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4udHJpcC1jYXJkLXNlY3Rpb24ge1xcbiBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBoZWlnaHQ6IDgzJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udHJpcC1idXR0b25zLXdyYXBwZXIge1xcbiBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuIHdpZHRoOiAxMDAlO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jYXJkLWRpc3BsYXkge1xcbkBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgcm93KTtcXG5vdmVyZmxvdzogYXV0bztcXG5oZWlnaHQ6IDgwJTtcXG5ncmlkLWdhcDogNCU7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRyaXAtY2FyZCB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZmO1xcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1jb2xvcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZpbHRlcjogb3BhY2l0eSg4MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxufVxcblxcbi5pbWFnZS13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOjEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29zdC1tb2RhbCB7XFxuICBAZXh0ZW5kIC5ib29raW5nLWZvcm07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDElO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbi5sb2dpbi1mb3JtIHtcXG4gIHdpZHRoOjgwJTtcXG59XFxuXFxuLndlbGNvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDQwZW07XFxuXFxuICAud2VsY29tZS1pbWFnZSB7XFxuICAgIHdpZHRoOiAzNWVtO1xcbiAgfVxcbn1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLmJ0biB7XFxuICBmb250LXNpemU6IC43ZW07XFxufVxcblxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuICAubG9naW4tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG5cXG4gICNwd2QsXFxuICAjdXNlcm5hbWUge1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG5cXG4ud2VsY29tZS1pbWFnZS13cmFwcGVyIHtcXG4gIGhlaWdodDogNDBlbTtcXG5cXG4gIC53ZWxjb21lLWltYWdlIHtcXG4gICAgd2lkdGg6IDIzZW07XFxuICB9XFxufVxcblxcbi55ZWFyLWNvc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGhlaWdodDogMjU7XFxufVxcblxcbi50cmlwLWNhcmQge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRyaXAtZHJvcGRvd24ge1xcbiAgd2lkdGg6NTAlO1xcbn1cXG59XCIsXCIkcHJpbWFyeS1jb2xvcjogI0IwQzZENTtcXG4kc2hhZG93LWNvbG9yOiAwIDAgMTBweCAjNTI5NkFDO1xcblxcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWx1ZSkge1xcbiAgdHJhbnNpdGlvbjogJHZhbHVlO1xcbn1cXG5cXG5AbWl4aW4gZ3JpZERpc3BsYXkoJGNvbHVtbnMsICRyb3dzKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29sdW1ucztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogJHJvd3M7XFxufVxcblxcbkBtaXhpbiBmbGV4RGlzcGxheSgkZGlyZWN0aW9uLCAkanVzdGlmeSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGZldGNoQ2FsbHMgPSB7XG5cbiAgZ2V0VHJhdmVsZXIoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSk7XG4gIH0sXG5cbiAgZ2V0QWxsVHJhdmVsZXJzKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb3JyeSEgV2UgYXJlIGhhdmluZyB0cm91YmxlIGdldHRpbmcgdGhlIGRhdGEsIHRyeSBhZ2FpbiBsYXRlciFcIilcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldFRyaXBzKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSk7XG4gIH0sXG5cbiAgZ2V0RGVzdGluYXRpb25zKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb3JyeSEgV2UgYXJlIGhhdmluZyB0cm91YmxlIGdldHRpbmcgdGhlIGRhdGEsIHRyeSBhZ2FpbiBsYXRlciFcIilcbiAgICAgIH0pO1xuICB9LFxuXG4gIHBvc3RUcmlwKG5ld0Jvb2tpbmcpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9va2luZylcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSlcbiAgICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ2FsbHM7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xubGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgd2VsY29tZVVzZXIoY3VycmVudFVzZXIpIHtcbiAgICBsZXQgZ3JlZXRpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVldGluZy1jb250YWluZXJcIik7XG4gICAgbGV0IGZpcnN0TmFtZSA9IGN1cnJlbnRVc2VyLnJldHVyblRyYXZlbGVyRmlyc3ROYW1lKCk7XG4gICAgZ3JlZXRpbmdNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHdlbGNvbWVNc2cgPSBgPGgyPldlbGNvbWUgQmFjaywgJHtmaXJzdE5hbWV9ISA8L2gyPmBcbiAgICBncmVldGluZ01lc3NhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB3ZWxjb21lTXNnKTtcbiAgfSxcblxuICBjcmVhdGVUcmlwQ2FyZHModHJpcHMpIHtcbiAgICB0aGlzLmNsZWFyQ2FyZERpc3BsYXkoKVxuICAgIHJldHVybiB0cmlwcy5tYXAodHJpcCA9PiB7XG4gICAgICBsZXQgY2FyZEhUTUwgPSBgXG4gICAgPGFydGljbGUgY2xhc3M9XCJ0cmlwLWNhcmRcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGVzdGluYXRpb24tbmFtZS13cmFwcGVyXCI+XG4gICAgICAgIDxoMj4ke3RyaXAubmFtZX08L2gyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJpbWFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlIGltYWdlXCIgc3JjPVwiJHt0cmlwLmltYWdlfVwiIGFsdD1cIiR7dHJpcC5hbHR9XCI+PC9pbWc+XG4gICAgICA8L3NlY3Rpb24+ICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29zdC13cmFwcGVyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCI+VHJpcCBTdGF0dXM6JHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibG9kZ2luZy1jb3N0IGNvc3RcIj5Fc3RpbWF0ZWQgTG9kZ2luZyBDb3N0OiR7dHJpcC5sb2RnaW5nfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJmbGlnaHQtY29zdCBjb3N0XCI+RXN0aW1hdGVkIEZsaWdodCBDb3N0OiR7dHJpcC5mbGlnaHRzfTwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2FydGljbGU+YFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWRpc3BsYXlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjYXJkSFRNTCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY2xlYXJDYXJkRGlzcGxheSgpIHtcbiAgICBsZXQgY2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtZGlzcGxheVwiKTtcbiAgICBjYXJkRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICB9LFxuXG4gIGRpc3BsYXlBbW91bnRTcGVudEFZZWFyKGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IHllYXJseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci13cmFwcGVyXCIpO1xuICAgIHllYXJseURpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgY29zdEhUTUwgPSBgPGgzIGNsYXNzPVwieWVhci1jb3N0XCI+WW91XCJ2ZSBzcGVudCAke2N1cnJlbnRVc2VyfSBvbiBtYWtpbmcgbWVtb3JpZXMgdGhpcyB5ZWFyLmAgXG4gICAgeWVhcmx5RGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY29zdEhUTUwpO1xuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IGRyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmlwLWRyb3Bkb3duXCIpO1xuICAgIGRyb3BEb3duLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IG9wdGlvbnMgPSBkZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIHJldHVybiBgPG9wdGlvbiBpZD1cIiR7ZGVzdGluYXRpb24uaWR9XCIgdmFsdWU9XCIke2Rlc3RpbmF0aW9ufVwiPiR7ZGVzdGluYXRpb259PC9vcHRpb24+YFxuICAgIH0pO1xuICAgIGRyb3BEb3duLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIixvcHRpb25zKTtcbiAgfSxcblxuICBkaXNwbGF5RXN0aW1hdGVkVHJpcENvc3QoY3VycmVudFVzZXIpIHtcbiAgICBsZXQgY29zdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tpbmctZm9ybVwiKTtcbiAgICBjb3N0RGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBlc3RpbWF0ZWRDb3N0ID0gYDxoMz4ke2N1cnJlbnRVc2VyLmNvc3RPZlRyaXBBbmRGZWV9PC9oMz5gXG4gICAgY29zdERpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGVzdGltYXRlZENvc3QpO1xuICB9LFxuXG4gIGNsZWFySW5wdXRzKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9LFxuXG4gIGhpZGVMb2dpblBhZ2UoKSB7XG4gICAgY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1wYWdlXCIpO1xuICAgIGNvbnN0IHdlbGNvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLXBhZ2VcIik7XG4gICAgbG9naW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSxcblxuICBkaXNwbGF5Q29zdChib29raW5nT2JqZWN0KSB7XG4gICAgY29uc3QgY29zdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvc3RcIik7XG4gICAgY29zdERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb3N0RGlzcGxheS5pbm5lckhUTUwgPSBgVGhpcyB0cmlwIHdpbGwgY29zdCAke2Jvb2tpbmdPYmplY3QuY29zdH0sIGFuZCBpbmNsdWRlcyBhIDEwJSBhZ2VudCBmZWUuIFdvdWxkIHlvdSBsaWtlIHRvIHByb2NlZWQ/YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY3VydmUtYXJyb3cuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ2xvYmUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaW1hZ2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWFuLmpwZ1wiOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBUcmF2ZWxlciBmcm9tIFwiLi90cmF2ZWxlci5qc1wiO1xuaW1wb3J0IGZldGNoQ2FsbHMgZnJvbSBcIi4vYXBpQ2FsbHNcIjtcbmltcG9ydCBcIi4vY3NzL2Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSBcIi4vZG9tVXBkYXRlcy5qc1wiO1xuXG4vL2ltYWdlc1xuaW1wb3J0IFwiLi9pbWFnZXMvaW1hZ2UucG5nXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy9tYW4uanBnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy9nbG9iZS5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL2N1cnZlLWFycm93LnN2Z1wiO1xuXG4vL2dsb2JhbFZhcmlhYmxlc1xubGV0IGN1cnJlbnRUcmF2ZWxlcjtcbmxldCB1c2VyTmFtZTtcbmxldCBhbGxEZXN0aW5hdGlvbnM7XG5sZXQgY3VycmVudFVzZXI7XG5sZXQgdHJpcEluZm87XG5sZXQgdHJhdmVsZXJEYXRhO1xubGV0IHRyaXBEYXRhO1xubGV0IGRlc3RpbmF0aW9uRGF0YTtcbmxldCBib29raW5nT2JqZWN0OyBcblxuLy9xdWVyeVNlbGVjdG9yc1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1mb3JtXCIpO1xuY29uc3Qgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtcGFnZVwiKTtcbmNvbnN0IG15VHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXRyaXBzLWJ0blwiKTtcbmNvbnN0IGJvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stdHJpcFwiKTtcbmNvbnN0IG15VHJpcHNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS10cmlwc1wiKTtcbmNvbnN0IGJhY2tUb01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stdG8tbWFpblwiKTtcbmNvbnN0IGJhY2tUb01haW5Cb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXRvLW1haW4tYm9va1wiKTtcbmNvbnN0IGJvb2tpbmdQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLXRyaXAtcGFnZVwiKTtcbmNvbnN0IGN1cnJlbnRUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10cmlwcy1idG5cIik7XG5jb25zdCBwZW5kaW5nVHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlbmRpbmctdHJpcHMtYnRuXCIpO1xuY29uc3QgdXBjb21pbmdUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmctdHJpcHMtYnRuXCIpO1xuY29uc3QgcGFzdFRyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXN0LXRyaXBzLWJ0blwiKTtcbmNvbnN0IGRlc3RpbmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyaXAtZHJvcGRvd25cIik7XG5jb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbGVuZGFyXCIpO1xuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVyYXRpb25cIik7XG5jb25zdCBudW1iZXJPZlRyYXZlbGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtdHJhdmVsZXJzXCIpO1xuY29uc3Qgc3VibWl0Qm9va2luZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tpbmctZm9ybVwiKTtcbmNvbnN0IHVzZXJMb2dpbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybmFtZVwiKTtcbmNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwd2RcIik7XG5jb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWJ1dHRvblwiKTtcbmNvbnN0IGNvbmZpcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLW1lc3NhZ2VcIik7XG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idXR0b25cIilcblxuLy9ldmVudExpc3RlbmVyc1xubXlUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1haW5QYWdlKTtcbmJhY2tUb01haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQmFja1RvTWFpbik7XG5ib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib29rQVRyaXApO1xuYmFja1RvTWFpbkJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJhY2tUb01haW5Gcm9tQm9vayk7XG5jdXJyZW50VHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEN1cnJlbnRUcmlwcyk7XG5wZW5kaW5nVHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFBlbmRpbmdUcmlwcyk7XG51cGNvbWluZ1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRVcGNvbWluZ1RyaXBzKTtcbnBhc3RUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0UGFzdFRyaXBzKTtcbnN1Ym1pdEJvb2tpbmdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZGlzcGxheU1vZGFsKTtcbmxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHVzZXJMb2dpbik7XG5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtQm9va2luZyk7XG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFJlcXVlc3QpXG5cbmZ1bmN0aW9uIGdldERhdGEoaWQpIHtcbiAgdHJhdmVsZXJEYXRhID0gZmV0Y2hDYWxscy5nZXRUcmF2ZWxlcihpZCk7XG4gIGRlc3RpbmF0aW9uRGF0YSA9IGZldGNoQ2FsbHMuZ2V0RGVzdGluYXRpb25zKCk7XG4gIHRyaXBEYXRhID0gZmV0Y2hDYWxscy5nZXRUcmlwcygpO1xuICBpbml0aWF0ZURhdGEoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVEYXRhKCkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW3RyYXZlbGVyRGF0YSwgZGVzdGluYXRpb25EYXRhLCB0cmlwRGF0YV0pXG4gICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgIGN1cnJlbnRUcmF2ZWxlciA9IHJlc3BvbnNlc1swXTtcbiAgICAgIGFsbERlc3RpbmF0aW9ucyA9IHJlc3BvbnNlc1sxXS5kZXN0aW5hdGlvbnM7XG4gICAgICB0cmlwSW5mbyA9IHJlc3BvbnNlc1syXS50cmlwcztcbiAgICAgIGdyZWV0VXNlcihjdXJyZW50VHJhdmVsZXIsIHRyaXBJbmZvLCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVzZXJMb2dpbihldmVudCkge1xuICB1c2VyTmFtZSA9IHBhcnNlSW50KHVzZXJMb2dpbklucHV0LnZhbHVlLnNwbGl0KFwiXCIpLnNwbGljZSg4LDMpLmpvaW4oXCJcIikpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAodXNlclBhc3N3b3JkSW5wdXQudmFsdWUgIT09IFwidHJhdmVsZXIyMDIwXCIpIHtcbiAgICBhbGVydChcIldyb25nIHBhc3N3b3JkLCB0cnkgYWdhaW5cIik7XG4gICAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyh1c2VyUGFzc3dvcmRJbnB1dCk7XG4gIH1cbiAgaWYgKHVzZXJQYXNzd29yZElucHV0LnZhbHVlID09PSBcInRyYXZlbGVyMjAyMFwiKSB7XG4gICAgZ2V0RGF0YSh1c2VyTmFtZSk7XG4gICAgZG9tVXBkYXRlcy5oaWRlTG9naW5QYWdlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3JlZXRVc2VyKGN1cnJlbnRUcmF2ZWxlciwgdHJpcEluZm8sIGFsbERlc3RpbmF0aW9ucykge1xuICBjdXJyZW50VXNlciA9IG5ldyBUcmF2ZWxlcihjdXJyZW50VHJhdmVsZXIsIHRyaXBJbmZvLCBhbGxEZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLndlbGNvbWVVc2VyKGN1cnJlbnRVc2VyKTtcbiAgZ2V0Q29zdFNwZW50T3ZlckFZZWFyKGN1cnJlbnRVc2VyKTtcbiAgZGlzcGxheVRyaXBEcm9wRG93bigpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUcmF2ZWxDYXJkKHRyaXBzKSB7XG4gIGxldCByZXR1cm5lZEN1cnJlbnQgPSB0cmlwcy5tYXAodHJpcCA9PiB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0cmlwLmRlc3RpbmF0aW9uO1xuICAgIGNvbnN0IHRyaXBDYXJkID0ge1xuICAgICAgbmFtZTogZGVzdGluYXRpb24uZGVzdGluYXRpb24sXG4gICAgICBpbWFnZTogZGVzdGluYXRpb24uaW1hZ2UsXG4gICAgICBhbHQ6IGRlc3RpbmF0aW9uLmFsdCxcbiAgICAgIHN0YXR1czogdHJpcC5zdGF0dXMsXG4gICAgICBsb2RnaW5nOiBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSxcbiAgICAgIGZsaWdodHM6IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb25cbiAgICB9XG4gICAgcmV0dXJuIHRyaXBDYXJkO1xuICB9KVxuICByZXR1cm4gcmV0dXJuZWRDdXJyZW50O1xufVxuXG5mdW5jdGlvbiBmaW5kRGVzdGluYXRpb24oKSB7XG4gIGNvbnN0IGRlc3RpbmF0aW9uUmVxdWVzdCA9IGFsbERlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICBpZiAoZGVzdGluYXRpb25JbnB1dC52YWx1ZSA9PT0gZGVzdGluYXRpb24uZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbi5pZDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGVzdGluYXRpb25SZXF1ZXN0LmlkO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TW9kYWwoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gZGVidWdnZXJcbiAgYnVpbGRUcmlwT2JqZWN0KCk7XG4gIGNsZWFyQm9va2luZ0lucHV0cygpO1xuICBzdWJtaXRCb29raW5nRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlDb3N0KGJvb2tpbmdPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckJvb2tpbmdJbnB1dHMoKSB7XG4gIGRvbVVwZGF0ZXMuY2xlYXJJbnB1dHMoZGVzdGluYXRpb25JbnB1dCk7XG4gIGRvbVVwZGF0ZXMuY2xlYXJJbnB1dHMoc3RhcnREYXRlKTtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhkdXJhdGlvbklucHV0KTtcbiAgZG9tVXBkYXRlcy5jbGVhcklucHV0cyhudW1iZXJPZlRyYXZlbGVycyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFJlcXVlc3QoKSB7XG4gIGFsZXJ0KFwiWW91IGhhdmUgY2FuY2VsbGVkIHlvdXIgdHJpcCByZXF1ZXN0LlwiKVxuICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBzdWJtaXRCb29raW5nRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBjb25maXJtQm9va2luZyhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBmZXRjaENhbGxzLnBvc3RUcmlwKGJvb2tpbmdPYmplY3QpXG4gICAgLnRoZW4oYWxlcnQoYENvbmdyYXRzISBZb3VyIHRyaXAgaXMgYm9va2VkISBZb3Ugd2lsbCBzZWUgdGhpcyBib29raW5nIGluIHlvdXIgcGVuZGluZyB0cmlwcy5gKSlcbiAgICAudGhlbihkb21VcGRhdGVzLmNsZWFyQ2FyZERpc3BsYXkoKSlcbiAgICAudGhlbihzaG93VHJpcHNQYWdlKCkpXG4gICAgLnRoZW4oZ2V0RGF0YSh1c2VyTmFtZSkpXG59XG5cbmZ1bmN0aW9uIHNob3dUcmlwc1BhZ2UoKSB7XG4gIGRvbVVwZGF0ZXMuY2xlYXJDYXJkRGlzcGxheSgpO1xuICBib29raW5nUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBteVRyaXBzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFRyaXBPYmplY3QoKSB7XG4gIGJvb2tpbmdPYmplY3QgPSB7XG4gICAgaWQ6IE51bWJlcihEYXRlLm5vdygpKSxcbiAgICB1c2VySUQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IGZpbmREZXN0aW5hdGlvbihhbGxEZXN0aW5hdGlvbnMpLFxuICAgIHRyYXZlbGVyczogcGFyc2VJbnQobnVtYmVyT2ZUcmF2ZWxlcnMudmFsdWUpLFxuICAgIGRhdGU6IHN0YXJ0RGF0ZS52YWx1ZS5zcGxpdChcIi1cIikuam9pbihcIi9cIiksXG4gICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpLFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gICAgY29zdDogZ2V0RXN0aW1hdGVkVHJpcENvc3QobnVtYmVyT2ZUcmF2ZWxlcnMudmFsdWUsIGR1cmF0aW9uSW5wdXQudmFsdWUpXG4gIH1cbiAgY2xlYXJCb29raW5nSW5wdXRzKClcbn1cblxuZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVHJpcENvc3QobnVtYmVyT2ZUcmF2ZWxlcnMsIGR1cmF0aW9uKSB7XG4gIGNvbnN0IGN1cnJlbnREZXN0aW5hdGlvbkNvc3QgPSBhbGxEZXN0aW5hdGlvbnMucmVkdWNlKChzdW0sIGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgaWYgKGRlc3RpbmF0aW9uSW5wdXQudmFsdWUgPT09IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uKSB7XG4gICAgICBjb25zdCBmbGlnaHRzID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIG51bWJlck9mVHJhdmVsZXJzO1xuICAgICAgY29uc3QgbG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogZHVyYXRpb247XG4gICAgICBjb25zdCBhZ2VudEZlZSA9ICgoZmxpZ2h0cyArIGxvZGdpbmcpICogLjAxKTtcbiAgICAgIHN1bSArPSBmbGlnaHRzICsgbG9kZ2luZyArIGFnZW50RmVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9LCAwKTtcbiAgcmV0dXJuIGN1cnJlbnREZXN0aW5hdGlvbkNvc3QudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBEcm9wRG93bigpIHtcbiAgY29uc3QgYWxwaGFiZXRpY2FsbHkgPSBhbGxEZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICBsZXQgZGVzdGluYXRpb25OYW1lID0gZGVzdGluYXRpb24uZGVzdGluYXRpb247XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uTmFtZTtcbiAgfSlcbiAgcmV0dXJuIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhhbHBoYWJldGljYWxseS5zb3J0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VHJpcHMoKSB7XG4gIGxldCBjdXJyZW50VHJpcHMgPSBjdXJyZW50VXNlci5maW5kQ3VycmVudFRyaXBzKCk7XG4gIGRpc3BsYXlDdXJyZW50Q2FyZHMoZm9ybWF0VHJhdmVsQ2FyZChjdXJyZW50VHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzdFRyaXBzKCkge1xuICBsZXQgcGFzdFRyaXBzID0gY3VycmVudFVzZXIuZmluZFBhc3RUcmlwcygpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGFzdFRyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFVwY29taW5nVHJpcHMoKSB7XG4gIGxldCB1cENvbWluZ1RyaXBzID0gY3VycmVudFVzZXIuZmluZFVwY29taW5nVHJpcHMoKTtcbiAgZGlzcGxheUN1cnJlbnRDYXJkcyhmb3JtYXRUcmF2ZWxDYXJkKHVwQ29taW5nVHJpcHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ1RyaXBzKCkge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gY3VycmVudFVzZXIuZmlsdGVyQnlTdGF0dXMoXCJwZW5kaW5nXCIpO1xuICBkaXNwbGF5Q3VycmVudENhcmRzKGZvcm1hdFRyYXZlbENhcmQocGVuZGluZ1RyaXBzKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZHModHJpcHMpIHtcbiAgZG9tVXBkYXRlcy5jcmVhdGVUcmlwQ2FyZHModHJpcHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3N0U3BlbnRPdmVyQVllYXIoKSB7XG4gIGxldCBjb3N0ID0gY3VycmVudFVzZXIuY2FsY3VsYXRlVG90YWxTcGVudE9uVHJpcHMoMjAyMCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QW1vdW50U3BlbnRBWWVhcihjb3N0KTtcbn1cblxuZnVuY3Rpb24gaGlkZU1haW5QYWdlKCkge1xuICBkb21VcGRhdGVzLmNsZWFyQ2FyZERpc3BsYXkoKTtcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgbXlUcmlwc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZ29CYWNrVG9NYWluKCkge1xuICB3ZWxjb21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBteVRyaXBzUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBib29rQVRyaXAoKSB7XG4gIHdlbGNvbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGJvb2tpbmdQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEJvb2tpbmdGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGJhY2tUb01haW5Gcm9tQm9vaygpIHtcbiAgd2VsY29tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYm9va2luZ1BhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFRyaXAgZnJvbSBcIi4vdHJpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdHJpcHNEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXJEYXRhLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uRGF0YSA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgICB0aGlzLnRyaXBzRGF0YSA9IHRyaXBzRGF0YTtcbiAgICB0aGlzLnRyaXBzID0gdGhpcy5pbnN0YW50aWF0ZU5ld1RyaXBzKCkgfHwgW107XG4gIH1cblxuICBmaWx0ZXJUcmlwRGF0YSh0cmlwc0RhdGEpIHtcbiAgICByZXR1cm4gdHJpcHNEYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcbiAgfVxuXG4gIGluc3RhbnRpYXRlTmV3VHJpcHMoKSB7XG4gICAgaWYgKHRoaXMudHJpcHNEYXRhLmxlbmd0aCA+IDApXG4gICAgICByZXR1cm4gdGhpcy50cmlwc0RhdGEucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkRhdGEuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaWQgPT09IHRyaXAudXNlcklEICYmIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKG5ldyBUcmlwKHRyaXAsIGRlc3RpbmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYyAgXG4gICAgICB9LCBbXSlcbiAgfVxuXG4gIGZpbHRlckJ5U3RhdHVzKHN0YXR1cykge1xuICAgIGNvbnN0IHRyaXBzID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIHJldHVybiB0cmlwcztcbiAgfVxuXG4gIGZpbmRDdXJyZW50VHJpcHMoKSB7XG4gICAgY29uc3QgY3VycmVudFRyaXAgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBlbmREYXRlLnNldERhdGUoZW5kRGF0ZS5nZXREYXRlKCkgKyB0cmlwLmR1cmF0aW9uKVxuICAgICAgaWYgKHN0YXJ0RGF0ZSA8IHRvZGF5ICYmIGVuZERhdGUgPiB0b2RheSkge1xuICAgICAgICBhY2MucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBjdXJyZW50VHJpcDtcbiAgfVxuXG4gIGZpbmRQYXN0VHJpcHMoKSB7XG4gICAgY29uc3QgdHJpcHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgdHJpcC5kdXJhdGlvbik7XG4gICAgICBpZiAoZW5kRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgIGFjYy5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHRyaXBzO1xuICB9XG5cbiAgZmluZFVwY29taW5nVHJpcHMoKSB7XG4gICAgY29uc3QgdHJpcHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBpZiAoc3RhcnREYXRlID4gdG9kYXkpIHtcbiAgICAgICAgYWNjLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdHJpcHM7XG4gIH1cblxuICByZXR1cm5UcmF2ZWxlckZpcnN0TmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoXCIgXCIpWzBdO1xuICAgIHJldHVybiBmaXJzdE5hbWU7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFNwZW50T25Ucmlwcyh5ZWFyKSB7XG4gICAgY29uc3QgdHJpcFRvdGFsID0gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZiAodHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgICAgIGxldCBsb2RnaW5nID0gdHJpcC5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgbGV0IGZsaWdodHMgPSB0cmlwLmRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgdG90YWwgKz0gbG9kZ2luZyArIGZsaWdodHM7XG4gICAgICB9ICBcbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKVxuICAgIGxldCBhZ2VudEZlZSA9IHRyaXBUb3RhbCAqIDAuMTtcbiAgICByZXR1cm4gdHJpcFRvdGFsICsgYWdlbnRGZWU7XG4gIH1cblxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXBzRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyaXBzRGF0YS5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXBzRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gdHJpcHNEYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwc0RhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZSh0cmlwc0RhdGEuZGF0ZSk7XG4gICAgdGhpcy5kYXRlID0gdHJpcHNEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBzRGF0YS5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXBzRGF0YS5zdGF0dXM7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gdHJpcHNEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgfVxuXG4gIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25EYXRhLmZpbmQoZGVzdGluYXRpb24gPT4gdGhpcy5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZClcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3RPZlRyaXAoKSB7XG4gICAgY29uc3QgY29zdFBlckRheSA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLnRyYXZlbGVyc1xuICAgIGNvbnN0IGR1cmF0aW9uID0gY29zdFBlckRheSAqIHRoaXMuZHVyYXRpb25cbiAgICBjb25zdCBmbGlnaHRzID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlcnNcbiAgICByZXR1cm4gZHVyYXRpb24gKyBmbGlnaHRzXG4gIH1cblxuICBjYWxjdWxhdGVBZ2VudEZlZSgpIHtcbiAgICBjb25zdCBkb2xsYXJzID0gKHRoaXMuY2FsY3VsYXRlQ29zdE9mVHJpcCgpIC8gMTAwKSAqIDEwXG4gICAgcmV0dXJuIGRvbGxhcnNcbiAgfVxuXG4gIGNvc3RPZlRyaXBBbmRGZWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsOiB0aGlzLmNhbGN1bGF0ZUNvc3RPZlRyaXAoKSxcbiAgICAgIHRvdGFsUGx1c0ZlZXM6IHRoaXMuY2FsY3VsYXRlQWdlbnRGZWUoKSArIHRoaXMuY2FsY3VsYXRlQ29zdE9mVHJpcCgpXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZSh0cmlwRGF0ZSkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKHRyaXBEYXRlKTtcbiAgICBsZXQgbW9udGggPSAnJyArICh0b2RheS5nZXRNb250aCgpICsgMSk7XG4gICAgbGV0IGRheSA9ICcnICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgbW9udGggPSAnMCcgKyBtb250aFxuICAgIH1cbiAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgIGRheSA9ICcwJyArIGRheVxuICAgIH1cbiAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oXCIvXCIpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=