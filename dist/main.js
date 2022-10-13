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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_components_FullAdder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/components/FullAdder */ \"./src/logic/components/FullAdder.js\");\n/* harmony import */ var _logic_gates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/gates */ \"./src/logic/gates/index.js\");\n// TODO: create server\n\n/**\r\n * @typedef {(number|boolean)} boolLike\r\n */\n\n\n\nconst _01Test = /^[0-1]*$/;\nconst container = document.getElementById('container');\nconst canvasContainer = document.getElementById('canvasContainer');\nconst canvas = document.createElement('canvas'),\n  ctx = canvas.getContext('2d');\ncanvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\ncanvas.setAttribute('style', 'border: 2px solid black');\ncanvasContainer.append(canvas);\nconst componentList = [];\nfunction init() {\n  // const adder = new FullAdder(0, 0, 0);\n  // componentList.push(adder);\n  const gate = new _logic_gates__WEBPACK_IMPORTED_MODULE_1__.OR(0, 0, 200, 200);\n  gate.toggleOutline();\n  componentList.push(gate);\n}\nlet animationFrame;\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  componentList[0].draw(ctx);\n  animationFrame = requestAnimationFrame(animate);\n}\nanimationFrame = requestAnimationFrame(animate);\nwindow.addEventListener('resize', e => {\n  canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\n});\ndocument.getElementById('cancelBtn').addEventListener('click', e => {\n  e.preventDefault();\n  cancelAnimationFrame(animationFrame);\n});\ndocument.getElementById('startBtn').addEventListener('click', e => {\n  e.preventDefault();\n  init();\n  animate();\n});\n// TODO implement clear btn\ndocument.getElementById('clearBtn').addEventListener('click', e => {\n  e.preventDefault();\n});\ninit();\nanimate();\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/logic/components/FullAdder.js":
/*!*******************************************!*\
  !*** ./src/logic/components/FullAdder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FullAdder\": () => (/* binding */ FullAdder)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _gates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gates */ \"./src/logic/gates/index.js\");\n\n\nclass FullAdder {\n  #inputA;\n  #inputB;\n  #carryIn;\n  #carryOut;\n  #output;\n  constructor(A, B, C) {\n    this.#inputA = A;\n    this.#inputB = B;\n    this.#carryIn = C;\n    this.#output = _gates__WEBPACK_IMPORTED_MODULE_1__.XOR.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_1__.XOR.calculateOutput(A, B), C);\n    this.#carryOut = _gates__WEBPACK_IMPORTED_MODULE_1__.OR.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_1__.AND.calculateOutput(A, B), _gates__WEBPACK_IMPORTED_MODULE_1__.AND.calculateOutput(_gates__WEBPACK_IMPORTED_MODULE_1__.XOR.calculateOutput(A, B), C));\n  }\n  render() {}\n  draw(ctx) {\n    const xorGate1 = new _gates__WEBPACK_IMPORTED_MODULE_1__.XOR(this.#inputA, this.#inputB);\n    const xorGate2 = new _gates__WEBPACK_IMPORTED_MODULE_1__.XOR(xorGate1.output, this.#carryIn);\n    const andGate1 = new _gates__WEBPACK_IMPORTED_MODULE_1__.AND(this.#inputA, this.#inputB);\n    const andGate2 = new _gates__WEBPACK_IMPORTED_MODULE_1__.AND(xorGate1.output, this.#carryIn);\n    const orGate = new _gates__WEBPACK_IMPORTED_MODULE_1__.OR(andGate1.output, andGate2.output);\n    let x = 300,\n      y = 100;\n    xorGate1.draw(ctx, x, y);\n    xorGate2.draw(ctx, x, y + 200);\n    andGate1.draw(ctx, x - 125, y + 350);\n    andGate2.draw(ctx, x, y + 350);\n    orGate.draw(ctx, x + 125, y + 350);\n    const connectingLines = [];\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.#inputA, []);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/components/FullAdder.js?");

/***/ }),

/***/ "./src/logic/gates/ANDgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/ANDgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AND)\n/* harmony export */ });\n/* harmony import */ var _dualInputGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dualInputGate */ \"./src/logic/gates/dualInputGate.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n\n\nclass AND extends _dualInputGate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput(A, B) {\n    return A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, AND.calculateOutput(inputA, inputB));\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: x + this.width / 2,\n      y: y + this.height / 2\n    }];\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.midPosition.x = canvas.width * .5;\n    this.midPosition.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx);\n  }\n  draw(ctx) {\n    const radius = this.width * 0.33 - 2;\n    if (this.outline) this.#drawOutline(ctx, radius);\n    this.#drawGate(ctx, radius);\n    this.inputPositions = [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }];\n    this.outputPosition = {\n      x: this.midPosition.x + this.width / 2,\n      y: this.midPosition.y\n    };\n  }\n  #drawGate(ctx, radius) {\n    // draw front arc\n    ctx.beginPath();\n    ctx.arc(this.midPosition.x, this.midPosition.y, radius, Math.PI * 1.5, Math.PI * 0.5, false);\n    ctx.lineTo(this.midPosition.x - this.width * 0.6 + radius, this.midPosition.y + radius);\n    ctx.lineTo(this.midPosition.x - this.width * 0.6 + radius, this.midPosition.y - radius);\n    ctx.closePath();\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.6 + radius,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }]);\n    // // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.6 + radius,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }]);\n    // // draw output line \n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output, [{\n      x: this.midPosition.x + radius,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x + this.width / 2,\n      y: this.midPosition.y\n    }]);\n  }\n  #drawOutline(ctx, radius) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);\n    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.rect(this.midPosition.x - this.width / 2, this.midPosition.y - this.height / 2 - 1, this.width, this.height + 2);\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/NANDgate.js":
/*!*************************************!*\
  !*** ./src/logic/gates/NANDgate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NAND)\n/* harmony export */ });\n/* harmony import */ var _dualInputGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dualInputGate */ \"./src/logic/gates/dualInputGate.js\");\n\nclass NAND extends _dualInputGate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/NORgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/NORgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOR)\n/* harmony export */ });\n/* harmony import */ var _dualInputGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dualInputGate */ \"./src/logic/gates/dualInputGate.js\");\n\nclass NOR extends _dualInputGate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NORgate.js?");

/***/ }),

/***/ "./src/logic/gates/NOTgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/NOTgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOT)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _singleInputGate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleInputGate */ \"./src/logic/gates/singleInputGate.js\");\n\n\nclass NOT extends _singleInputGate__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  static invert(input) {\n    return input === 1 ? 0 : 1;\n  }\n  constructor(input) {\n    super(input, input ? 0 : 1);\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height, canvas.width * 0.33 - 2);\n  }\n  draw(ctx, xStart, yStart, width = 100, height = 60) {\n    const offset = 15;\n    ctx.beginPath();\n    ctx.moveTo(xStart - width * 0.25, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart - height * 0.5);\n    ctx.lineTo(xStart + width * 0.3, yStart);\n    ctx.lineTo(xStart - width * 0.25, yStart + height * 0.5);\n    ctx.closePath();\n    ctx.fillStyle = 'blue';\n    ctx.fill();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.input, xStart - width * 0.25 + 5, yStart + 6);\n    ctx.fillText(this.output, xStart + width * 0.25 - offset, yStart + 6);\n    ctx.stroke();\n\n    // draw input line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.input === 1 ? 'red' : 'black', [{\n      x: xStart - width * 0.25,\n      y: yStart\n    }, {\n      x: xStart - width * 0.5,\n      y: yStart\n    }]);\n\n    // draw output line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.output === 1 ? 'red' : 'black', [{\n      x: xStart + width * 0.25,\n      y: yStart\n    }, {\n      x: xStart + width * 0.5,\n      y: yStart\n    }]);\n    this.inputPositions = {\n      input: {\n        x: xStart - width * 0.5,\n        y: yStart\n      },\n      output: {\n        x: xStart + width * 0.5,\n        y: yStart\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/NOTgate.js?");

/***/ }),

/***/ "./src/logic/gates/ORgate.js":
/*!***********************************!*\
  !*** ./src/logic/gates/ORgate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OR)\n/* harmony export */ });\n/* harmony import */ var _dualInputGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dualInputGate */ \"./src/logic/gates/dualInputGate.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n\n\nclass OR extends _dualInputGate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput(A, B) {\n    return A || B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, inputA || inputB ? 1 : 0);\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: this.width,\n      y: this.height\n    }];\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx, x, y, width = 100, height = 60) {\n    const radius = this.width * 0.35 - 2;\n    this.#drawGate(ctx, radius);\n    if (this.outline) this.#drawOutline(ctx);\n    this.inputPositions = [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height / 5\n    }];\n    this.outputPosition = {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    };\n  }\n  #drawGate(ctx, radius) {\n    ctx.beginPath();\n    ctx.arc(this.midPosition.x - this.width / 2, this.midPosition.y, radius, Math.PI * 1.70, Math.PI * 0.30, false);\n    ctx.lineTo(this.midPosition.x + this.width * 0.25 + 8, this.midPosition.y);\n    ctx.closePath();\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.25 + 5,\n      y: this.midPosition.y - this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height / 5\n    }]);\n    // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.25 + 5,\n      y: this.midPosition.y + this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height / 5\n    }]);\n    // draw output line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output, [{\n      x: this.midPosition.x + this.width * 0.25,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    }]);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);\n    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.rect(this.midPosition.x - this.width / 2, this.midPosition.y - this.height / 2, this.width, this.height);\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ORgate.js?");

/***/ }),

/***/ "./src/logic/gates/XORgate.js":
/*!************************************!*\
  !*** ./src/logic/gates/XORgate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ XOR)\n/* harmony export */ });\n/* harmony import */ var _dualInputGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dualInputGate */ \"./src/logic/gates/dualInputGate.js\");\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NOTgate */ \"./src/logic/gates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ANDgate */ \"./src/logic/gates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ORgate */ \"./src/logic/gates/ORgate.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n\n\n\n\n\nclass XOR extends _dualInputGate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput(A, B) {\n    return A && !B || !A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB) {\n    super(inputA, inputB, inputA && !inputB || !inputA && inputB ? 1 : 0);\n    this.outline = false;\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas'),\n      ctx = canvas.getContext('2d');\n    canvas.width = 200 * 2, canvas.height = 160 * 2 * 0.6;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    parent.append(canvas);\n    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5);\n  }\n  draw(ctx, x, y, width = 400, height = 200) {\n    if (this.outline) {\n      ctx.beginPath();\n      ctx.rect(x - width * 0.5, y - height * 0.5, width, height);\n      ctx.stroke();\n    }\n    const xStart = x + width * 0.3,\n      yStart = y;\n    const notGate1 = new _NOTgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.inputB);\n    notGate1.draw(ctx, xStart - 110 * 2, yStart - 35);\n    const andGate1 = new _ANDgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.inputA, notGate1.output);\n    andGate1.draw(ctx, xStart - 110, yStart - 35);\n    const notGate2 = new _NOTgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.inputA);\n    notGate2.draw(ctx, xStart - 110 * 2, yStart + 35);\n    const andGate2 = new _ANDgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](notGate2.output, this.inputB);\n    andGate2.draw(ctx, xStart - 110, yStart + 35);\n    const orGate = new _ORgate__WEBPACK_IMPORTED_MODULE_3__[\"default\"](andGate1.output, andGate2.output);\n    orGate.draw(ctx, xStart, yStart);\n    ctx.strokeStyle = 'black';\n\n    // draw line from NOTgate 1 output to ANDgate 1 inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, notGate1.output === 1 ? 'red' : 'black', [{\n      x: notGate1.inputPositions.output.x,\n      y: notGate1.inputPositions.output.y\n    }, {\n      x: andGate1.inputPositions.inputB.x,\n      y: andGate1.inputPositions.inputB.y\n    }]);\n\n    // draw line from NOTgate 2 output to ANDgate 2 inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, notGate2.output === 1 ? 'red' : 'black', [{\n      x: notGate2.inputPositions.output.x,\n      y: notGate2.inputPositions.output.y\n    }, {\n      x: andGate2.inputPositions.inputA.x,\n      y: andGate2.inputPositions.inputA.y\n    }]);\n\n    // draw line from ANDgate 1 output to ORgate inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, andGate1.output === 1 ? 'red' : 'black', [{\n      x: andGate1.inputPositions.output.x,\n      y: andGate1.inputPositions.output.y\n    }, {\n      x: orGate.inputPositions.inputA.x,\n      y: orGate.inputPositions.inputA.y\n    }]);\n\n    // draw line from ANDgate 2 output to ORgate inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, andGate2.output === 1 ? 'red' : 'black', [{\n      x: andGate2.inputPositions.output.x,\n      y: andGate2.inputPositions.output.y\n    }, {\n      x: orGate.inputPositions.inputB.x,\n      y: orGate.inputPositions.inputB.y\n    }]);\n\n    // draw line from inputA to ANDgate 1 inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: x - width * 0.5 + 20,\n      y: y - height * 0.25\n    }, {\n      x: x - width * 0.5 + 20,\n      y: y - height * 0.4\n    }, {\n      x: andGate1.inputPositions.inputA.x,\n      y: y - height * 0.4\n    }, {\n      x: andGate1.inputPositions.inputA.x,\n      y: andGate1.inputPositions.inputA.y\n    }]);\n\n    // draw line from inputA to NOTgate 2 input\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: x - width * 0.5 + 10,\n      y: y - height * 0.25\n    }, {\n      x: x - width * 0.5 + 30,\n      y: y - height * 0.25\n    }, {\n      x: x - width * 0.5 + 30,\n      y: notGate2.inputPositions.input.y\n    }, {\n      x: notGate2.inputPositions.input.x,\n      y: notGate2.inputPositions.input.y\n    }]);\n\n    // draw line from inputB to ANDgate 2 inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: x - width * 0.5 + 10,\n      y: y + height * 0.25\n    }, {\n      x: x - width * 0.5 + 30,\n      y: y + height * 0.25\n    }, {\n      x: x - width * 0.5 + 30,\n      y: y + height * 0.4\n    }, {\n      x: andGate2.inputPositions.inputB.x,\n      y: y + height * 0.4\n    }, {\n      x: andGate2.inputPositions.inputB.x,\n      y: andGate2.inputPositions.inputB.y\n    }]);\n\n    // draw line from inputB to NOTgate 1 input\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: x - width * 0.5 + 20,\n      y: y + height * 0.25\n    }, {\n      x: x - width * 0.5 + 20,\n      y: notGate1.inputPositions.input.y\n    }, {\n      x: notGate1.inputPositions.input.x,\n      y: notGate1.inputPositions.input.y\n    }]);\n\n    // draw line from ORgate output to output\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.drawLine)(ctx, this.output === 1 ? 'red' : 'black', [{\n      x: orGate.inputPositions.output.x,\n      y: orGate.inputPositions.output.y\n    }, {\n      x: orGate.inputPositions.output.x + 20,\n      y: orGate.inputPositions.output.y\n    }]);\n    if (this.outline) {\n      ctx.fillText(this.inputA, x - width * 0.5, y - height * 0.25 + 6);\n      ctx.fillText(this.inputB, x - width * 0.5, y + height * 0.25 + 6);\n      ctx.fillText(this.output, x + width * 0.5 - 10, y + 6);\n    }\n    this.inputPositions = {\n      inputA: {\n        X: undefined,\n        y: undefined\n      },\n      inputB: {\n        X: undefined,\n        y: undefined\n      },\n      output: {\n        X: undefined,\n        y: undefined\n      }\n    };\n    this.position = {\n      start: {\n        x: x - width * 0.5,\n        y: y - height * 0.5\n      },\n      end: {\n        x: x + width * 0.5,\n        y: y + height * 0.5\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/XORgate.js?");

/***/ }),

/***/ "./src/logic/gates/dualInputGate.js":
/*!******************************************!*\
  !*** ./src/logic/gates/dualInputGate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dualInputGate)\n/* harmony export */ });\n/** \r\n * @typedef {object} cordinates\r\n * @property {number} x\r\n * @property {number} y\r\n */\n\nclass dualInputGate {\n  #inputA;\n  #inputB;\n  #output;\n  #width;\n  #height;\n  #gatePosition = [{\n    x: undefined,\n    y: undefined\n  }, {\n    x: undefined,\n    y: undefined\n  }];\n  #midPosition = {\n    x: undefined,\n    y: undefined\n  };\n  #inputPositions = [{\n    x: undefined,\n    y: undefined\n  }, {\n    x: undefined,\n    y: undefined\n  }];\n  #outputPosition = {\n    x: undefined,\n    y: undefined\n  };\n  #outline = false;\n  constructor(inputA, inputB, output, width, height) {\n    this.#inputA = inputA | 0;\n    this.#inputB = inputB | 0;\n    this.#output = output | 0;\n    this.#width = width | 100;\n    this.#height = height | 60;\n  }\n\n  /** @return {number} */\n  get inputA() {\n    return this.#inputA;\n  }\n\n  /** @param {number} input */\n  set inputA(input) {\n    this.#inputA = input;\n  }\n\n  /** @return {number} */\n  get inputB() {\n    return this.#inputB;\n  }\n\n  /** @param {number} input */\n  set inputB(input) {\n    this.#inputB = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this.#output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this.#output = value;\n  }\n\n  /** @return {number} */\n  get width() {\n    return this.#width;\n  }\n\n  /** @param {number} width */\n  set width(width) {\n    this.#width = width;\n  }\n\n  /** @return {number} */\n  get height() {\n    return this.#height;\n  }\n\n  /** @param {number} height */\n  set height(height) {\n    this.#height = height;\n  }\n\n  /** @return {Array<cordinates>} */\n  get gatePosition() {\n    return this.#gatePosition;\n  }\n\n  /** @param {Array<cordinates>} position */\n  set gatePosition(position) {\n    this.#gatePosition = position;\n  }\n\n  /** @return {cordinates} */\n  get midPosition() {\n    return this.#midPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set midPosition(cordinates) {\n    this.#midPosition = cordinates;\n  }\n\n  /** @return {Array<cordinates>} */\n  get inputPositions() {\n    return this.#inputPositions;\n  }\n\n  /** @param {Array<cordinates>} positions */\n  set inputPositions(positions) {\n    this.#inputPositions = positions;\n  }\n\n  /** @return {cordinates} */\n  get outputPosition() {\n    return this.#outputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set outputPosition(cordinates) {\n    this.#outputPosition = cordinates;\n  }\n\n  /** @return {boolean} */\n  get outline() {\n    return this.#outline;\n  }\n  toggleOutline() {\n    this.#outline = !this.#outline;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/dualInputGate.js?");

/***/ }),

/***/ "./src/logic/gates/index.js":
/*!**********************************!*\
  !*** ./src/logic/gates/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AND\": () => (/* reexport safe */ _ANDgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"NAND\": () => (/* reexport safe */ _NANDgate__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"NOR\": () => (/* reexport safe */ _NORgate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"NOT\": () => (/* reexport safe */ _NOTgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"OR\": () => (/* reexport safe */ _ORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"XOR\": () => (/* reexport safe */ _XORgate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOTgate */ \"./src/logic/gates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ANDgate */ \"./src/logic/gates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ORgate */ \"./src/logic/gates/ORgate.js\");\n/* harmony import */ var _NANDgate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NANDgate */ \"./src/logic/gates/NANDgate.js\");\n/* harmony import */ var _NORgate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NORgate */ \"./src/logic/gates/NORgate.js\");\n/* harmony import */ var _XORgate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XORgate */ \"./src/logic/gates/XORgate.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/index.js?");

/***/ }),

/***/ "./src/logic/gates/singleInputGate.js":
/*!********************************************!*\
  !*** ./src/logic/gates/singleInputGate.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ singleInputGate)\n/* harmony export */ });\n/** \r\n * @typedef {object} cordinates\r\n * @property {number} x\r\n * @property {number} y\r\n */\n\nclass singleInputGate {\n  #input;\n  #output;\n  #gatePosition = [];\n  #inputPosition = {};\n  #outputPosition = {};\n  #outline = false;\n  constructor(input, output) {\n    this.#input = input;\n    this.#output = output;\n  }\n\n  /** @return {number} */\n  get input() {\n    return this.#input;\n  }\n\n  /** @param {number} input */\n  set input(input) {\n    this.#input = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this.#output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this.#output = value;\n  }\n\n  /** @return {Array<cordinates>} */\n  get gatePosition() {\n    return this.#gatePosition;\n  }\n\n  /** @param {Array<cordinates>} position */\n  set gatePosition(position) {\n    this.#gatePosition = position;\n  }\n\n  /** @return {cordinates} */\n  get inputPosition() {\n    return this.#inputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set inputPosition(cordinates) {\n    this.#inputPosition = cordinates;\n  }\n\n  /** @return {cordinates} */\n  get outputPosition() {\n    return this.#outputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set outputPosition(cordinates) {\n    this.#outputPosition = cordinates;\n  }\n  toggleOutline() {\n    this.#outline = !this.#outline;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/singleInputGate.js?");

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decToBinary\": () => (/* binding */ decToBinary),\n/* harmony export */   \"drawHalfCircle\": () => (/* binding */ drawHalfCircle),\n/* harmony export */   \"drawLine\": () => (/* binding */ drawLine),\n/* harmony export */   \"drawPolygon\": () => (/* binding */ drawPolygon)\n/* harmony export */ });\nconst decToBinary = input => {\n  let decimal = input,\n    binary = '';\n  for (let i = 0; decimal >= 1; i += 1) {\n    binary = `${decimal % 2}${binary}`;\n    decimal = parseInt(decimal / 2, 10);\n  }\n  return binary;\n};\nconst drawLine = (ctx, color = 'black', cords = []) => {\n  ctx.strokeStyle = color;\n  ctx.beginPath();\n  cords.forEach(({\n    x,\n    y\n  }, i) => {\n    if (i === 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);\n  });\n  ctx.stroke();\n};\nconst drawPolygon = (ctx, sides, radius, options = {\n  lineColor: 'black',\n  fillColor: 'white'\n}) => {\n  ctx.strokeStyle = options.lineColor;\n  ctx.fillStyle = options.fillColor;\n  const cords = [];\n  ctx.beginPath();\n  cords.forEach(({\n    x,\n    y\n  }) => {\n    if (i === 0) ctx.moveTo(x, y);\n    ctx.lineTo(x, y);\n  });\n  ctx.closePath();\n  ctx.fill();\n  ctx.stroke();\n};\nconst drawHalfCircle = (ctx, x, y, r, options = {\n  lineColor: 'black',\n  fillColor: 'white',\n  direction: 'right'\n}) => {\n  ctx.strokeStyle = options.lineColor;\n  ctx.fillStyle = options.fillColor;\n  let a1, a2;\n  switch (options.direction) {\n    case 'right':\n      a1 = Math.PI * 1.5, a2 = Math.PI * 0.5;\n      break;\n    case 'left':\n      a1 = Math.PI * 0.5, a2 = Math.PI * 1.5;\n      break;\n    case 'up':\n      a1 = Math.PI * 1, a2 = Math.PI * 2;\n      break;\n    case 'down':\n      a1 = Math.PI * 2, a2 = Math.PI * 1;\n      break;\n    default:\n  }\n  ctx.beginPath();\n  ctx.arc(x, y, r, a1, a2, false);\n  ctx.fill();\n  ctx.stroke();\n};\n\n//# sourceURL=webpack://computer-architecture/./src/utilities/index.js?");

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