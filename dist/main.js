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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_components_FullAdder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/components/FullAdder */ \"./src/logic/components/FullAdder.js\");\n/* harmony import */ var _logic_gates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/gates */ \"./src/logic/gates/index.js\");\n/**\r\n * @typedef {(number|boolean)} boolLike\r\n */\n\n\n\nconst _01Test = /^[0-1]*$/;\nconst container = document.getElementById('container');\nconst canvasContainer = document.getElementById('canvasContainer');\nconst canvas = document.createElement('canvas'),\n  ctx = canvas.getContext('2d');\ncanvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\ncanvas.setAttribute('style', 'border: 2px solid black');\ncanvasContainer.append(canvas);\nconst componentList = [];\nfunction init() {\n  const adder = new _logic_components_FullAdder__WEBPACK_IMPORTED_MODULE_0__.FullAdder(0, 0, 0);\n  componentList.push(adder);\n}\nlet animationFrame;\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  componentList[0].draw(ctx);\n  animationFrame = requestAnimationFrame(animate);\n}\nanimationFrame = requestAnimationFrame(animate);\nwindow.addEventListener('resize', e => {\n  canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\n});\ndocument.getElementById('cancelBtn').addEventListener('click', e => {\n  e.preventDefault();\n  cancelAnimationFrame(animationFrame);\n});\ndocument.getElementById('startBtn').addEventListener('click', e => {\n  e.preventDefault();\n  init();\n  animate();\n});\n// TODO implement clear btn\ndocument.getElementById('clearBtn').addEventListener('click', e => {\n  e.preventDefault();\n});\ninit();\nanimate();\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/logic/components/FullAdder.js":
/*!*******************************************!*\
  !*** ./src/logic/components/FullAdder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FullAdder\": () => (/* binding */ FullAdder)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gates */ \"./src/logic/gates/index.js\");\n\nclass FullAdder {\n  #_inputA;\n  #_inputB;\n  #_carryIn;\n  #_carryOut;\n  #_output;\n  constructor(A, B, C) {\n    this.#_inputA = A;\n    this.#_inputB = B;\n    this.#_carryIn = C;\n    this.#_output = _gates__WEBPACK_IMPORTED_MODULE_0__.XOR.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_0__.XOR.calculateOutput(A, B), C);\n    this.#_carryOut = _gates__WEBPACK_IMPORTED_MODULE_0__.OR.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_0__.AND.calculateOutput(A, B), _gates__WEBPACK_IMPORTED_MODULE_0__.AND.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_0__.XOR.calculateOutput(A, B), C));\n  }\n  render() {}\n  draw(ctx) {\n    const xorGate1 = new _gates__WEBPACK_IMPORTED_MODULE_0__.XOR(this.#_inputA, this.#_inputB);\n    const xorGate2 = new _gates__WEBPACK_IMPORTED_MODULE_0__.XOR(xorGate1.output, this.#_carryIn);\n    const andGate1 = new _gates__WEBPACK_IMPORTED_MODULE_0__.AND(this.#_inputA, this.#_inputB);\n    const andGate2 = new _gates__WEBPACK_IMPORTED_MODULE_0__.AND(xorGate1.output, this.#_carryIn);\n    const orGate = new _gates__WEBPACK_IMPORTED_MODULE_0__.OR(andGate1.output, andGate2.output);\n    let x = 200,\n      y = 100;\n    xorGate1.draw(ctx, x, y);\n    xorGate2.draw(ctx, x, y + 200);\n    andGate1.draw(ctx, x - 125, y + 350);\n    andGate2.draw(ctx, x, y + 350);\n    orGate.draw(ctx, x + 125, y + 350);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/components/FullAdder.js?");

/***/ }),

/***/ "./src/logic/gates/ANDgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/ANDgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AND)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n\n\nclass AND extends _gates__WEBPACK_IMPORTED_MODULE_0__.twoInputGate {\n  static calculateOutput(A, B) {\n    return A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, inputA && inputB ? 1 : 0);\n    this.x = x;\n    this.y = y;\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx, xStart, yStart, width = 100, height = 60) {\n    const radius = width * 0.33 - 2,\n      offset = 15;\n    ctx.beginPath();\n    // draw front arc\n    ctx.arc(xStart, yStart, radius, Math.PI * 1.5, Math.PI * 0.5, false);\n    ctx.lineTo(xStart - width * 0.6 + radius, yStart + radius);\n    ctx.lineTo(xStart - width * 0.6 + radius, yStart - radius);\n    ctx.closePath();\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, xStart - width * 0.6 + radius + 5, yStart - radius + height * 0.2 + 6, 100);\n    ctx.fillText(this.inputB, xStart - width * 0.6 + radius + 5, yStart + radius - height * 0.2 + 6, 100);\n    ctx.fillText(this.output, xStart + radius - offset, yStart + 6, 100);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n\n    // draw input line 1\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: xStart - width * 0.6 + radius,\n      y: yStart - radius + height * 0.2\n    }, {\n      x: xStart - width * 0.5,\n      y: yStart - radius + height * 0.2\n    }]);\n    // // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: xStart - width * 0.6 + radius,\n      y: yStart + radius - height * 0.2\n    }, {\n      x: xStart - width * 0.5,\n      y: yStart + radius - height * 0.2\n    }]);\n    // // draw output line \n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output, [{\n      x: xStart + radius,\n      y: yStart\n    }, {\n      x: xStart + width / 2,\n      y: yStart\n    }]);\n    this.inputPositions = {\n      inputA: {\n        x: xStart - width * 0.5,\n        y: yStart - radius + height * 0.2\n      },\n      inputB: {\n        x: xStart - width * 0.5,\n        y: yStart + radius - height * 0.2\n      },\n      output: {\n        x: xStart + width / 2,\n        y: yStart\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/NANDgate.js":
/*!*************************************!*\
  !*** ./src/logic/gates/NANDgate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NAND)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n\nclass NAND extends _gates__WEBPACK_IMPORTED_MODULE_0__.twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/NORgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/NORgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOR)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n\nclass NOR extends _gates__WEBPACK_IMPORTED_MODULE_0__.twoInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NORgate.js?");

/***/ }),

/***/ "./src/logic/gates/NOTgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/NOTgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOT)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n\nclass NOT extends _gates__WEBPACK_IMPORTED_MODULE_0__.singleInputGate {\n  static invert(input) {\n    return input === 1 ? 0 : 1;\n  }\n  constructor(input) {\n    super(input, input ? 0 : 1);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height, canvas.width * 0.33 - 2);\n  }\n\n  // TODO add draw line function calls\n  draw(ctx, xStart, yStart, width = 100, height = 60) {\n    const offset = 15;\n    ctx.beginPath();\n    ctx.moveTo(xStart - width * 0.25, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart - height * 0.5);\n    ctx.lineTo(xStart + width * 0.3, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart + height * 0.5);\n    ctx.closePath();\n    ctx.moveTo(xStart - width * 0.25, yStart);\n    ctx.lineTo(xStart - width * 0.5, yStart);\n    ctx.moveTo(xStart + width * 0.25, yStart);\n    ctx.lineTo(xStart + width * 0.5, yStart);\n    ctx.fillStyle = 'blue';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this._input, xStart - width * 0.25 + 5, yStart + 6);\n    ctx.fillText(this._output, xStart + width * 0.25 - offset, yStart + 6);\n    ctx.stroke();\n    this.inputPositions = {\n      input: {\n        x: xStart - width * 0.5,\n        y: yStart\n      },\n      output: {\n        x: xStart + width * 0.5,\n        y: yStart\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NOTgate.js?");

/***/ }),

/***/ "./src/logic/gates/ORgate.js":
/*!***********************************!*\
  !*** ./src/logic/gates/ORgate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OR)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n\n\nclass OR extends _gates__WEBPACK_IMPORTED_MODULE_1__.twoInputGate {\n  static calculateOutput(A, B) {\n    return A || B ? 1 : 0;\n  }\n  constructor(inputA, inputB) {\n    super(inputA, inputB, inputA || inputB ? 1 : 0);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx, x, y, width = 100, height = 60) {\n    const radius = width * 0.35 - 2;\n    ctx.beginPath();\n    ctx.arc(x - width / 2, y, radius, Math.PI * 1.70, Math.PI * 0.30, false);\n    ctx.lineTo(x + width * 0.25 + 8, y);\n    ctx.closePath();\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, x - width * 0.25 + 8, y - height / 5 + 6);\n    ctx.fillText(this.inputB, x - width * 0.25 + 8, y + height / 5 + 6);\n    ctx.fillText(this.output, x + width * 0.25 - 12, y + 6);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n\n    // draw input line 1\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: x - width * 0.25 + 5,\n      y: y - height / 5\n    }, {\n      x: x - width * 0.5,\n      y: y - height / 5\n    }]);\n    // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: x - width * 0.25 + 5,\n      y: y + height / 5\n    }, {\n      x: x - width * 0.5,\n      y: y + height / 5\n    }]);\n    // draw output line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.output);\n    if (this.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x + width * 0.25, y);\n    ctx.lineTo(x + width * 0.5, y);\n    ctx.stroke();\n    this.inputPositions = {\n      inputA: {\n        x: x - width * 0.5,\n        y: y - height / 5\n      },\n      inputB: {\n        x: x - width * 0.5,\n        y: y + height / 5\n      },\n      output: {\n        x: x + width * 0.5,\n        y\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ORgate.js?");

/***/ }),

/***/ "./src/logic/gates/XORgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/XORgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ XOR)\n/* harmony export */ });\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gates */ \"./src/logic/gates/gates.js\");\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NOTgate */ \"./src/logic/gates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ANDgate */ \"./src/logic/gates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ORgate */ \"./src/logic/gates/ORgate.js\");\n\n\n\n\nclass XOR extends _gates__WEBPACK_IMPORTED_MODULE_0__.twoInputGate {\n  static calculateOutput(A, B) {\n    return A && !B || !A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB) {\n    super(inputA, inputB, inputA && !inputB || !inputA && inputB ? 1 : 0);\n    this.outline = false;\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas'),\n      ctx = canvas.getContext('2d');\n    canvas.width = 200 * 2, canvas.height = 160 * 2 * 0.6;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    parent.append(canvas);\n    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5);\n  }\n  draw(ctx, x, y, width = 400, height = 200) {\n    if (this.outline) {\n      ctx.beginPath();\n      ctx.rect(x - width * 0.5, y - height * 0.5, width, height);\n      ctx.stroke();\n    }\n    const xStart = x + width * 0.3,\n      yStart = y;\n    const notGate1 = new _NOTgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.inputB);\n    notGate1.draw(ctx, xStart - 110 * 2, yStart - 35);\n    const andGate1 = new _ANDgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.inputA, notGate1.output);\n    andGate1.draw(ctx, xStart - 110, yStart - 35);\n    const notGate2 = new _NOTgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.inputA);\n    notGate2.draw(ctx, xStart - 110 * 2, yStart + 35);\n    const andGate2 = new _ANDgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](notGate2.output, this.inputB);\n    andGate2.draw(ctx, xStart - 110, yStart + 35);\n    const orGate = new _ORgate__WEBPACK_IMPORTED_MODULE_3__[\"default\"](andGate1.output, andGate2.output);\n    orGate.draw(ctx, xStart, yStart);\n    ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    // TODO change drawing code to drawline function calls\n    // draw line from NOTgate 1 output to ANDgate 1 inputB\n    if (notGate1.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(notGate1.inputPositions.output.x, notGate1.inputPositions.output.y);\n    ctx.lineTo(andGate1.inputPositions.inputB.x, andGate1.inputPositions.inputB.y);\n    ctx.stroke();\n\n    // draw line from NOTgate 2 output to ANDgate 2 inputA\n    if (notGate2.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(notGate2.inputPositions.output.x, notGate2.inputPositions.output.y);\n    ctx.lineTo(andGate2.inputPositions.inputA.x, andGate2.inputPositions.inputA.y);\n    ctx.stroke();\n\n    // draw line from ANDgate 1 output to ORgate inputA\n    if (andGate1.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(andGate1.inputPositions.output.x, andGate1.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.inputA.x, orGate.inputPositions.inputA.y);\n    ctx.stroke();\n\n    // draw line from ANDgate 2 output to ORgate inputB\n    if (andGate2.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(andGate2.inputPositions.output.x, andGate2.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.inputB.x, orGate.inputPositions.inputB.y);\n    ctx.stroke();\n\n    // draw line from inputA to ANDgate 1 inputA\n    if (this.inputA === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x - width * 0.5 + 20, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 20, y - height * 0.4);\n    ctx.lineTo(andGate1.inputPositions.inputA.x, y - height * 0.4);\n    ctx.lineTo(andGate1.inputPositions.inputA.x, andGate1.inputPositions.inputA.y);\n    ctx.stroke();\n\n    // draw line from inputA to NOTgate 2 input\n    if (this.inputA === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x - width * 0.5 + 10, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y - height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, notGate2.inputPositions.input.y);\n    ctx.lineTo(notGate2.inputPositions.input.x, notGate2.inputPositions.input.y);\n    ctx.stroke();\n\n    // draw line from inputB to ANDgate 2 inputB\n    if (this.inputB === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x - width * 0.5 + 10, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 30, y + height * 0.4);\n    ctx.lineTo(andGate2.inputPositions.inputB.x, y + height * 0.4);\n    ctx.lineTo(andGate2.inputPositions.inputB.x, andGate2.inputPositions.inputB.y);\n    ctx.stroke();\n\n    // draw line from inputB to NOTgate 1 input\n    if (this.inputB === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x - width * 0.5 + 20, y + height * 0.25);\n    ctx.lineTo(x - width * 0.5 + 20, notGate1.inputPositions.input.y);\n    ctx.lineTo(notGate1.inputPositions.input.x, notGate1.inputPositions.input.y);\n    ctx.stroke();\n\n    // draw line from ORgate output to output\n    if (this.output === 1) ctx.strokeStyle = 'red';else ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(orGate.inputPositions.output.x, orGate.inputPositions.output.y);\n    ctx.lineTo(orGate.inputPositions.output.x + 20, orGate.inputPositions.output.y);\n    ctx.stroke();\n    if (this.outline) {\n      ctx.fillText(this.inputA, x - width * 0.5, y - height * 0.25 + 6);\n      ctx.fillText(this.inputB, x - width * 0.5, y + height * 0.25 + 6);\n      ctx.fillText(this.output, x + width * 0.5 - 10, y + 6);\n    }\n    this.inputPositions = {\n      inputA: {\n        X: undefined,\n        y: undefined\n      },\n      inputB: {\n        X: undefined,\n        y: undefined\n      },\n      output: {\n        X: undefined,\n        y: undefined\n      }\n    };\n    this.position = {\n      start: {\n        x: x - width * 0.5,\n        y: y - height * 0.5\n      },\n      end: {\n        x: x + width * 0.5,\n        y: y + height * 0.5\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/XORgate.js?");

/***/ }),

/***/ "./src/logic/gates/gates.js":
/*!**********************************!*\
  !*** ./src/logic/gates/gates.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"singleInputGate\": () => (/* binding */ singleInputGate),\n/* harmony export */   \"twoInputGate\": () => (/* binding */ twoInputGate)\n/* harmony export */ });\nclass singleInputGate {\n  constructor(input, output) {\n    this._input = input | 0;\n    this._output = output | 0;\n  }\n\n  /** @return {number} */\n  get input() {\n    return this.input;\n  }\n\n  /** @param {number} input */\n  set input(input) {\n    this.input = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this._output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this._output = value;\n  }\n}\nclass twoInputGate {\n  constructor(inputA, inputB, output) {\n    this._inputA = inputA | 0;\n    this._inputB = inputB | 0;\n    this._output = output;\n  }\n\n  /** @return {number} */\n  get inputA() {\n    return this._inputA;\n  }\n\n  /** @param {number} input */\n  set inputA(input) {\n    this._inputA = input;\n  }\n\n  /** @return {number} */\n  get inputB() {\n    return this._inputB;\n  }\n\n  /** @param {number} input */\n  set inputB(input) {\n    this._inputB = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this._output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this._output = value;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/gates.js?");

/***/ }),

/***/ "./src/logic/gates/index.js":
/*!**********************************!*\
  !*** ./src/logic/gates/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AND\": () => (/* reexport safe */ _ANDgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"NAND\": () => (/* reexport safe */ _NANDgate__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"NOR\": () => (/* reexport safe */ _NORgate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"NOT\": () => (/* reexport safe */ _NOTgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"OR\": () => (/* reexport safe */ _ORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"XOR\": () => (/* reexport safe */ _XORgate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOTgate */ \"./src/logic/gates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ANDgate */ \"./src/logic/gates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ORgate */ \"./src/logic/gates/ORgate.js\");\n/* harmony import */ var _NANDgate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NANDgate */ \"./src/logic/gates/NANDgate.js\");\n/* harmony import */ var _NORgate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NORgate */ \"./src/logic/gates/NORgate.js\");\n/* harmony import */ var _XORgate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XORgate */ \"./src/logic/gates/XORgate.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/index.js?");

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decToBinary\": () => (/* binding */ decToBinary),\n/* harmony export */   \"drawLine\": () => (/* binding */ drawLine)\n/* harmony export */ });\nconst decToBinary = input => {\n  let decimal = input,\n    binary = '';\n  for (let i = 0; decimal >= 1; i += 1) {\n    binary = `${decimal % 2}${binary}`;\n    decimal = parseInt(decimal / 2, 10);\n  }\n  return binary;\n};\nconst drawLine = (ctx, color = 'black', cords = []) => {\n  ctx.strokeStyle = color;\n  ctx.beginPath();\n  cords.forEach(({\n    x,\n    y\n  }, i) => {\n    if (i === 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);\n  });\n  ctx.stroke();\n};\n\n//# sourceURL=webpack://computer-architecture/./src/utilities/index.js?");

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