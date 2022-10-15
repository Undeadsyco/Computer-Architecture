/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas/index.js":
/*!*****************************!*\
  !*** ./src/canvas/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites */ \"./src/sprites/index.js\");\n// import { MOUSE_POSITION } from \"..\";\n\nclass Canvas {\n  static #container = document.getElementById('canvasContainer');\n  static #canvas = document.createElement('canvas');\n  static #ctx = Canvas.#canvas.getContext('2d');\n  static #animationFrame;\n  /** @type {Array<Sprite>} */\n  static #sprites = [];\n  /** @type {Sprite} */\n  static #dragable = null;\n  static #MOUSE_POSITION = {\n    x: undefined,\n    y: undefined\n  };\n  static {\n    Canvas.#canvas.width = Canvas.#container.offsetWidth * 2, Canvas.#canvas.height = Canvas.#container.offsetHeight * 2;\n    Canvas.#ctx.strokeStyle = 'black', Canvas.#ctx.fillStyle = 'black', Canvas.#ctx.font = 'bold 24px serif';\n    Canvas.#container.append(Canvas.#canvas);\n    Canvas.#canvas.addEventListener('addSprite', e => {\n      Canvas.#sprites.push(e['detail']);\n    });\n    Canvas.#canvas.addEventListener('createDragable', e => {\n      Canvas.#dragable = e['detail'];\n    });\n    Canvas.#canvas.addEventListener('mousemove', e => {\n      Canvas.#MOUSE_POSITION.x = e.x, Canvas.#MOUSE_POSITION.y = e.y;\n    });\n    Canvas.#canvas.addEventListener('mouseup', e => {\n      if (Canvas.#dragable) {\n        console.log('added sprite');\n        Canvas.#sprites.push(Canvas.#dragable);\n        Canvas.#dragable = null;\n      }\n    });\n  }\n  static get ctx() {\n    return Canvas.#ctx;\n  }\n  static get sprites() {\n    return Canvas.#sprites;\n  }\n  static init() {\n    Canvas.#sprites.forEach(( /** @type {Sprite} */sprite) => {\n      sprite.draw();\n    });\n  }\n  static animate() {\n    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);\n    Canvas.#sprites.forEach(component => {\n      // component.update(Canvas.#ctx);\n      component.draw(Canvas.#ctx);\n    });\n    if (Canvas.#dragable) {\n      Canvas.#dragable.update(Canvas.#MOUSE_POSITION.x - 325, Canvas.#MOUSE_POSITION.y - 65);\n      Canvas.#dragable.draw(Canvas.#ctx);\n    }\n    Canvas.#animationFrame = requestAnimationFrame(Canvas.animate);\n  }\n  static stopAnimation() {\n    cancelAnimationFrame(Canvas.#animationFrame);\n  }\n  static clearCanvas() {\n    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);\n    Canvas.#sprites = [];\n  }\n  static resize() {\n    Canvas.#canvas.width = Canvas.#container.offsetWidth, Canvas.#canvas.height = Canvas.#container.offsetHeight;\n  }\n  static dispatchEvent(event) {\n    Canvas.#canvas.dispatchEvent(event);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/canvas/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MOUSE_POSITION\": () => (/* binding */ MOUSE_POSITION)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas/index.js\");\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites */ \"./src/sprites/index.js\");\n\n\nconst MOUSE_POSITION = {\n  x: undefined,\n  y: undefined\n};\n\n// window events\nwindow.addEventListener('resize', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize();\n});\nwindow.addEventListener('mousemove', e => {\n  e.preventDefault();\n  MOUSE_POSITION.x = e.x, MOUSE_POSITION.y = e.y;\n});\n\n// animation control btn events\ndocument.getElementById('cancelBtn').addEventListener('click', e => {\n  e.preventDefault();\n  cancelAnimationFrame(animationFrame);\n});\ndocument.getElementById('startBtn').addEventListener('click', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animate();\n});\ndocument.getElementById('clearBtn').addEventListener('click', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearCanvas();\n});\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/sprites/Sprite.js":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n  #width;\n  #height;\n  #mid;\n  #cords;\n  constructor(x, y, w, h) {\n    this.#width = w;\n    this.#height = h;\n    this.#mid = [x, y];\n    this.#cords = [[x - w / 2, y - h / 2], [this.#width, this.#height]];\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.#cords[0][0], this.#cords[0][1], this.#cords[1][0], this.#cords[1][1]);\n    ctx.strokStyle = 'black';\n    ctx.stroke();\n  }\n  update(x, y) {\n    this.#mid.x = x, this.#mid.y = y;\n    this.#cords = [[x - this.#width / 2, y - this.#height / 2], [this.#width, this.#height]];\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/Sprite.js?");

/***/ }),

/***/ "./src/sprites/index.js":
/*!******************************!*\
  !*** ./src/sprites/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* reexport safe */ _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/sprites/Sprite.js\");\n\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;