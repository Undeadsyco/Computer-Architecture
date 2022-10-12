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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/gates */ \"./src/logic/gates/index.js\");\n/**\r\n * @typedef {(number|boolean)} boolLike\r\n */\n\n\nconst _01Test = /^[0-1]*$/;\nconst container = document.getElementById('container');\nconst canvasContainer = document.getElementById('canvasContainer');\nconst canvas = document.createElement('canvas'),\n  ctx = canvas.getContext('2d');\ncanvas.width = 100, canvas.height = 60;\ncanvasContainer.append(canvas);\nconst xorGate = new _logic_gates__WEBPACK_IMPORTED_MODULE_0__.XOR(0, 1);\nxorGate.render(canvasContainer);\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/logic/gates/index.js":
/*!**********************************!*\
  !*** ./src/logic/gates/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AND\": () => (/* binding */ AND),\n/* harmony export */   \"NAND\": () => (/* binding */ NAND),\n/* harmony export */   \"NOR\": () => (/* binding */ NOR),\n/* harmony export */   \"NOT\": () => (/* binding */ NOT),\n/* harmony export */   \"OR\": () => (/* binding */ OR),\n/* harmony export */   \"XOR\": () => (/* binding */ XOR)\n/* harmony export */ });\nclass singleInputGate {\n  constructor(input, output) {\n    this._input = input | 0;\n    this._output = output | 0;\n  }\n\n  /** @return {number} */\n  get input() {\n    return this.input;\n  }\n\n  /** @param {number} input */\n  set input(input) {\n    this.input = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this._output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this._output = value;\n  }\n}\nclass twoInputGate {\n  constructor(inputA, inputB, output) {\n    this._inputA = inputA | 0;\n    this._inputB = inputB | 0;\n    this._output = output;\n  }\n\n  /** @return {number} */\n  get inputA() {\n    return this._inputA;\n  }\n\n  /** @param {number} input */\n  set inputA(input) {\n    this._inputA = input;\n  }\n\n  /** @return {number} */\n  get inputB() {\n    return this._inputB;\n  }\n\n  /** @param {number} input */\n  set inputB(input) {\n    this._inputB = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this._output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this._output = value;\n  }\n}\nclass NOT extends singleInputGate {\n  constructor(input) {\n    super(input, input ? 0 : 1);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height, canvas.width * 0.33 - 2);\n  }\n  draw(ctx, xStart, yStart, width = 100, height = 60) {\n    const offset = 15;\n    ctx.beginPath();\n    ctx.moveTo(xStart - width * 0.25, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart - height * 0.5);\n    ctx.lineTo(xStart + width * 0.3, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart + height * 0.5);\n    ctx.closePath();\n    ctx.moveTo(xStart - width * 0.25, yStart);\n    ctx.lineTo(xStart - width * 0.5, yStart);\n    ctx.moveTo(xStart + width * 0.25, yStart);\n    ctx.lineTo(xStart + width * 0.5, yStart);\n    ctx.fillStyle = 'blue';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this._input, xStart - width * 0.25 + 5, yStart + 6);\n    ctx.fillText(this._output, xStart + width * 0.25 - offset, yStart + 6);\n    ctx.stroke();\n    this.inputPositions = {\n      input: {\n        x: xStart - width * 0.5,\n        y: yStart\n      },\n      output: {\n        x: xStart + width * 0.5,\n        y: yStart\n      }\n    };\n  }\n}\nclass AND extends twoInputGate {\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, inputA && inputB ? 1 : 0);\n    this.x = x;\n    this.y = y;\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx, xStart, yStart, width = 100, height = 60) {\n    const radius = width * 0.33 - 2,\n      offset = 15;\n    ctx.beginPath();\n    // draw front arc\n    ctx.arc(xStart, yStart, radius, Math.PI * 1.5, Math.PI * 0.5, false);\n    ctx.lineTo(xStart - width * 0.6 + radius, yStart + radius);\n    ctx.lineTo(xStart - width * 0.6 + radius, yStart - radius);\n    ctx.closePath();\n    // draw input line 1\n    ctx.moveTo(xStart - width * 0.6 + radius, yStart - radius + height * 0.2);\n    ctx.lineTo(xStart - width * 0.5, yStart - radius + height * 0.2);\n    // // draw input line 2\n    ctx.moveTo(xStart - width * 0.6 + radius, yStart + radius - height * 0.2);\n    ctx.lineTo(xStart - width * 0.5, yStart + radius - height * 0.2);\n    // // draw output line \n    ctx.moveTo(xStart + radius, yStart);\n    ctx.lineTo(xStart + width / 2, yStart);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, xStart - width * 0.6 + radius + 5, yStart - radius + height * 0.2 + 6, 100);\n    ctx.fillText(this.inputB, xStart - width * 0.6 + radius + 5, yStart + radius - height * 0.2 + 6, 100);\n    ctx.fillText(this.output, xStart + radius - offset, yStart + 6, 100);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    this.inputPositions = {\n      inputA: {\n        x: xStart - width * 0.5,\n        y: yStart - radius + height * 0.2\n      },\n      inputB: {\n        x: xStart - width * 0.5,\n        y: yStart + radius - height * 0.2\n      },\n      output: {\n        x: xStart + width / 2,\n        y: yStart\n      }\n    };\n  }\n}\nclass OR extends twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, inputA || inputB ? 1 : 0);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx, x, y, width = 100, height = 60) {\n    const radius = width * 0.35 - 2;\n    ctx.beginPath();\n    ctx.arc(x - width / 2, y, radius, Math.PI * 1.70, Math.PI * 0.30, false);\n    ctx.lineTo(x + width * 0.25 + 8, y);\n    ctx.closePath();\n\n    // draw input line 1\n    ctx.moveTo(x - width * 0.25 + 5, y - height / 5);\n    ctx.lineTo(x - width * 0.5, y - height / 5);\n    // draw input line 2\n    ctx.moveTo(x - width * 0.25 + 5, y + height / 5);\n    ctx.lineTo(x - width * 0.5, y + height / 5);\n    // draw output line \n    ctx.moveTo(x + width * 0.25, y);\n    ctx.lineTo(x + width * 0.5, y);\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, x - width * 0.25 + 8, y - height / 5 + 6);\n    ctx.fillText(this.inputB, x - width * 0.25 + 8, y + height / 5 + 6);\n    ctx.fillText(this.output, x + width * 0.25 - 12, y + 6);\n    ctx.stroke();\n    this.inputPositions = {\n      inputA: {\n        x: x - width * 0.5,\n        y: y - height / 5\n      },\n      inputB: {\n        x: x - width * 0.5,\n        y: y + height / 5\n      },\n      output: {\n        x: x + width * 0.5,\n        y\n      }\n    };\n  }\n}\nclass NAND extends twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);\n  }\n}\nclass NOR extends twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);\n  }\n}\nclass XOR extends twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, inputA && !inputB || !inputA && inputB ? 1 : 0);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas'),\n      ctx = canvas.getContext('2d');\n    canvas.width = 200 * 2, canvas.height = 160 * 2 * 0.6;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    parent.append(canvas);\n    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5, canvas.width, canvas.height);\n  }\n  draw(ctx, x, y, width, height) {\n    console.log(width * 0.5);\n    ctx.beginPath();\n    ctx.rect(x - width * 0.5, y - height * 0.5, width, height);\n    ctx.stroke();\n    const xStart = width * 0.8,\n      yStart = height * 0.5;\n    const notGate1 = new NOT(this.inputB);\n    notGate1.draw(ctx, xStart - 110 * 2, yStart - 35);\n    const andGate1 = new AND(this.inputA, notGate1.output);\n    andGate1.draw(ctx, xStart - 110, yStart - 35);\n    const notGate2 = new NOT(this.inputA);\n    notGate2.draw(ctx, xStart - 110 * 2, yStart + 35);\n    const andGate2 = new AND(notGate2.output, this.inputB);\n    andGate2.draw(ctx, xStart - 110, yStart + 35);\n    const orGate = new OR(andGate1.output, andGate2.output);\n    orGate.draw(ctx, xStart, yStart);\n    ctx.beginPath();\n    // draw line from NOTgate 1 output to ANDgate 1 inputB\n    ctx.moveTo(notGate1.inputPositions.output.x, notGate1.inputPositions.output.y);\n    ctx.lineTo(andGate1.inputPositions.inputB.x, andGate1.inputPositions.inputB.y);\n\n    // draw line from NOTgate 2 output to ANDgate 2 inputA\n    ctx.moveTo(notGate2.inputPositions.output.x, notGate2.inputPositions.output.y);\n    ctx.lineTo(andGate2.inputPositions.inputA.x, andGate2.inputPositions.inputA.y);\n\n    // draw line from ANDgate 1 output to ORgate inputA\n    ctx.moveTo(andGate1.inputPositions.output.x, andGate1.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.inputA.x, orGate.inputPositions.inputA.y);\n\n    // draw line from ANDgate 2 output to ORgate inputB\n    ctx.moveTo(andGate2.inputPositions.output.x, andGate2.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.inputB.x, orGate.inputPositions.inputB.y);\n\n    // draw line from inputA to ANDgate 1 inputA\n    ctx.moveTo(x - width * 0.5 + 20, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 20, y - height * 0.4);\n    ctx.lineTo(andGate1.inputPositions.inputA.x, y - height * 0.4);\n    ctx.lineTo(andGate1.inputPositions.inputA.x, andGate1.inputPositions.inputA.y);\n\n    // draw line from inputA to NOTgate 2 input\n    ctx.moveTo(x - width * 0.5 + 10, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, notGate2.inputPositions.input.y);\n    ctx.lineTo(notGate2.inputPositions.input.x, notGate2.inputPositions.input.y);\n\n    // draw line from inputB to ANDgate 2 inputB\n    ctx.moveTo(x - width * 0.5 + 10, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y + height * 0.4);\n    ctx.lineTo(andGate2.inputPositions.inputB.x, y + height * 0.4);\n    ctx.lineTo(andGate2.inputPositions.inputB.x, andGate2.inputPositions.inputB.y);\n\n    // draw line from inputB to NOTgate 1 input\n    ctx.moveTo(x - width * 0.5 + 20, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 20, notGate1.inputPositions.input.y);\n    ctx.lineTo(notGate1.inputPositions.input.x, notGate1.inputPositions.input.y);\n\n    // draw line from ORgate oitput to output\n    ctx.moveTo(orGate.inputPositions.output.x, orGate.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.output.x + 20, orGate.inputPositions.output.y);\n    ctx.stroke();\n    ctx.fillText(this.inputA, x - width * 0.5, y - height * 0.25 + 6);\n    ctx.fillText(this.inputB, x - width * 0.5, y + height * 0.25 + 6);\n    ctx.fillText(this.output, x + width * 0.5 - 10, y + 6);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/index.js?");

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