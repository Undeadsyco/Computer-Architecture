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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_components_FullAdder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/components/FullAdder */ \"./src/logic/components/FullAdder.js\");\n/* harmony import */ var _logic_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/gates/ComplexGates */ \"./src/logic/gates/ComplexGates/index.js\");\n/* harmony import */ var _logic_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/gates/SimpleGates */ \"./src/logic/gates/SimpleGates/index.js\");\n// TODO: create server\n\n/**\r\n * @typedef {(number|boolean)} boolLike\r\n */\n\n\n\n\nconst _01Test = /^[0-1]*$/;\nconst container = document.getElementById('container');\nconst canvasContainer = document.getElementById('canvasContainer');\nconst canvas = document.createElement('canvas'),\n  ctx = canvas.getContext('2d');\ncanvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\ncanvas.setAttribute('style', 'border: 2px solid black');\ncanvasContainer.append(canvas);\nconst componentList = [];\nfunction init() {\n  // const adder = new FullAdder(0, 0, 0);\n  // componentList.push(adder);\n  const gate = new _logic_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_1__.XOR(0, 1, 260, 130);\n  const gate2 = new _logic_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_1__.XOR(0, 1, 260, 360);\n  componentList.push(gate, gate2);\n  console.log('gate', gate, 'gate2', gate);\n}\nlet animationFrame;\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  componentList[0].draw(ctx);\n  componentList[1].draw(ctx);\n  animationFrame = requestAnimationFrame(animate);\n}\nanimationFrame = requestAnimationFrame(animate);\nwindow.addEventListener('resize', e => {\n  canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;\n});\ndocument.getElementById('cancelBtn').addEventListener('click', e => {\n  e.preventDefault();\n  cancelAnimationFrame(animationFrame);\n});\ndocument.getElementById('startBtn').addEventListener('click', e => {\n  e.preventDefault();\n  init();\n  animate();\n});\n// TODO implement clear btn\ndocument.getElementById('clearBtn').addEventListener('click', e => {\n  e.preventDefault();\n});\ninit();\nanimate();\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/logic/components/FullAdder.js":
/*!*******************************************!*\
  !*** ./src/logic/components/FullAdder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FullAdder\": () => (/* binding */ FullAdder)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gates/SimpleGates */ \"./src/logic/gates/SimpleGates/index.js\");\n/* harmony import */ var _gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gates/ComplexGates */ \"./src/logic/gates/ComplexGates/index.js\");\n\n\n\nclass FullAdder {\n  #inputA;\n  #inputB;\n  #carryIn;\n  #carryOut;\n  #output;\n  constructor(A, B, C) {\n    this.#inputA = A;\n    this.#inputB = B;\n    this.#carryIn = C;\n    this.#output = _gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR.calculateOutput(_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR.calculateOutput(A, B), C);\n    this.#carryOut = _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.OR.calculateOutput(_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND.calculateOutput(A, B), _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND.calculateOutput(_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR.calculateOutput(A, B), C));\n  }\n  render() {}\n  draw(ctx) {\n    const xorGate1 = new _gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR(this.#inputA, this.#inputB);\n    const xorGate2 = new _gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR(xorGate1.output, this.#carryIn);\n    const andGate1 = new _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(this.#inputA, this.#inputB);\n    const andGate2 = new _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(xorGate1.output, this.#carryIn);\n    const orGate = new _gates_SimpleGates__WEBPACK_IMPORTED_MODULE_1__.OR(andGate1.output, andGate2.output);\n    let x = 300,\n      y = 100;\n    xorGate1.draw(ctx, x, y);\n    xorGate2.draw(ctx, x, y + 200);\n    andGate1.draw(ctx, x - 125, y + 350);\n    andGate2.draw(ctx, x, y + 350);\n    orGate.draw(ctx, x + 125, y + 350);\n    const connectingLines = [];\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.drawLine)(ctx, this.#inputA, []);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/components/FullAdder.js?");

/***/ }),

/***/ "./src/logic/gates/ComplexGates/NANDgate.js":
/*!**************************************************!*\
  !*** ./src/logic/gates/ComplexGates/NANDgate.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NAND)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n\nclass NAND extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.DualInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ComplexGates/NANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/ComplexGates/NORgate.js":
/*!*************************************************!*\
  !*** ./src/logic/gates/ComplexGates/NORgate.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOR)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n\nclass NOR extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.DualInputGate {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ComplexGates/NORgate.js?");

/***/ }),

/***/ "./src/logic/gates/ComplexGates/XORgate.js":
/*!*************************************************!*\
  !*** ./src/logic/gates/ComplexGates/XORgate.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ XOR)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n/* harmony import */ var _SimpleGates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleGates */ \"./src/logic/gates/SimpleGates/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities */ \"./src/utilities/index.js\");\n\n\n\nclass XOR extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.DualInputComplexGate {\n  static calculateOutput(A, B) {\n    return A && !B || !A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, XOR.calculateOutput(inputA, inputB), 400, 200);\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: this.width,\n      y: this.height\n    }];\n    this.#createComponentGates();\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas'),\n      ctx = canvas.getContext('2d');\n    canvas.width = 200 * 2, canvas.height = 160 * 2 * 0.6;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    parent.append(canvas);\n    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5);\n  }\n  #createComponentGates() {\n    const notGate1 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.NOT(this.inputB, this.midPosition.x - this.width * 0.25, this.midPosition.y - this.height * 0.25);\n    const notGate2 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.NOT(this.inputA, this.midPosition.x - this.width * 0.25, this.midPosition.y + this.height * 0.25);\n    const andGate1 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(this.inputA, notGate1.output, this.midPosition.x + this.width * 0.05, this.midPosition.y - this.height * 0.25);\n    const andGate2 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(notGate2.output, this.inputB, this.midPosition.x + this.width * 0.05, this.midPosition.y + this.height * 0.25);\n    const orGate = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.OR(andGate1.output, andGate2.output, this.midPosition.x + this.width * 0.35, this.midPosition.y);\n    this.addGates(notGate1, notGate2, andGate1, andGate2, orGate);\n    this.gates.forEach(gate => {\n      gate.updateDimentions(this.width / 5, this.height / 3);\n    });\n  }\n  draw(ctx) {\n    this.#drawGate(ctx);\n    if (this.outline) this.#drawOutline(ctx);\n    this.inputPositions = [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height * 0.33\n    }];\n    this.outputPosition = {\n      x: this.gates[4].outputPosition.x + this.width * 0.05,\n      y: this.gates[4].outputPosition.y\n    };\n  }\n  #drawGate(ctx) {\n    this.gates.forEach(gate => {\n      gate.draw(ctx);\n    });\n\n    // draw line from NOTgate 1 output to ANDgate 1 inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.gates[0].output === 1 ? 'red' : 'black', [{\n      x: this.gates[0].outputPosition.x,\n      y: this.gates[0].outputPosition.y\n    }, {\n      x: this.gates[2].inputPositions[1].x,\n      y: this.gates[2].inputPositions[1].y\n    }]);\n\n    // draw line from NOTgate 2 output to ANDgate 2 inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.gates[1].output === 1 ? 'red' : 'black', [{\n      x: this.gates[1].outputPosition.x,\n      y: this.gates[1].outputPosition.y\n    }, {\n      x: this.gates[3].inputPositions[0].x,\n      y: this.gates[3].inputPositions[0].y\n    }]);\n\n    // draw line from ANDgate 1 output to ORgate inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.gates[2].output === 1 ? 'red' : 'black', [{\n      x: this.gates[2].outputPosition.x,\n      y: this.gates[2].outputPosition.y\n    }, {\n      x: this.gates[4].inputPositions[0].x,\n      y: this.gates[4].inputPositions[0].y\n    }]);\n\n    // draw line from ANDgate 2 output to ORgate inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.gates[3].output === 1 ? 'red' : 'black', [{\n      x: this.gates[3].outputPosition.x,\n      y: this.gates[3].outputPosition.y\n    }, {\n      x: this.gates[4].inputPositions[1].x,\n      y: this.gates[4].inputPositions[1].y\n    }]);\n\n    // draw line from inputA to ANDgate 1 inputA\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 40,\n      y: this.midPosition.y - this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 40,\n      y: this.midPosition.y - this.height * 0.45\n    }, {\n      x: this.gates[2].inputPositions[0].x - 20,\n      y: this.midPosition.y - this.height * 0.45\n    }, {\n      x: this.gates[2].inputPositions[0].x - 20,\n      y: this.gates[2].inputPositions[0].y\n    }, {\n      x: this.gates[2].inputPositions[0].x,\n      y: this.gates[2].inputPositions[0].y\n    }]);\n\n    // draw line from inputA to NOTgate 2 input\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 40,\n      y: this.midPosition.y - this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 40,\n      y: this.gates[1].inputPosition.y\n    }, {\n      x: this.gates[1].inputPosition.x,\n      y: this.gates[1].inputPosition.y\n    }]);\n\n    // draw line from inputB to ANDgate 2 inputB\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 20,\n      y: this.midPosition.y + this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 20,\n      y: this.midPosition.y + this.height * 0.45\n    }, {\n      x: this.gates[3].inputPositions[1].x - 20,\n      y: this.midPosition.y + this.height * 0.45\n    }, {\n      x: this.gates[3].inputPositions[1].x - 20,\n      y: this.gates[3].inputPositions[1].y\n    }, {\n      x: this.gates[3].inputPositions[1].x,\n      y: this.gates[3].inputPositions[1].y\n    }]);\n\n    // draw line from inputB to NOTgate 1 input\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 20,\n      y: this.midPosition.y + this.height * 0.33\n    }, {\n      x: this.midPosition.x - this.width * 0.5 + 20,\n      y: this.gates[0].inputPosition.y\n    }, {\n      x: this.gates[0].inputPosition.x,\n      y: this.gates[0].inputPosition.y\n    }]);\n\n    // draw line from ORgate output to output\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.drawLine)(ctx, this.output === 1 ? 'red' : 'black', [{\n      x: this.gates[4].outputPosition.x,\n      y: this.gates[4].outputPosition.y\n    }, {\n      x: this.gates[4].outputPosition.x + this.width * 0.05,\n      y: this.gates[4].outputPosition.y\n    }]);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);\n    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ComplexGates/XORgate.js?");

/***/ }),

/***/ "./src/logic/gates/ComplexGates/index.js":
/*!***********************************************!*\
  !*** ./src/logic/gates/ComplexGates/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NAND\": () => (/* reexport safe */ _NANDgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"NOR\": () => (/* reexport safe */ _NORgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"XOR\": () => (/* reexport safe */ _XORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NANDgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NANDgate */ \"./src/logic/gates/ComplexGates/NANDgate.js\");\n/* harmony import */ var _NORgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NORgate */ \"./src/logic/gates/ComplexGates/NORgate.js\");\n/* harmony import */ var _XORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XORgate */ \"./src/logic/gates/ComplexGates/XORgate.js\");\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/ComplexGates/index.js?");

/***/ }),

/***/ "./src/logic/gates/GateStructure/DualInputComplexGate.js":
/*!***************************************************************!*\
  !*** ./src/logic/gates/GateStructure/DualInputComplexGate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DualInputComplexGate)\n/* harmony export */ });\n/* harmony import */ var _Gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gate */ \"./src/logic/gates/GateStructure/Gate.js\");\n/* harmony import */ var _SimpleGates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleGates */ \"./src/logic/gates/SimpleGates/index.js\");\n/* harmony import */ var _DualInputGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DualInputGate */ \"./src/logic/gates/GateStructure/DualInputGate.js\");\n\n\n\nclass DualInputComplexGate extends _DualInputGate__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  /** @type {Array<Gate>} */#gates = [];\n  constructor(inputA, inputB, output, width, height) {\n    super(inputA, inputB, output, width, height);\n  }\n\n  /** @return {Array<Gate>} */\n  get gates() {\n    return this.#gates;\n  }\n\n  /** @param {Array<Gate>} */\n  addGates(...gates) {\n    gates.forEach(gate => {\n      this.#gates.push(gate);\n    });\n  }\n  toggleComponentOutlines(options = {\n    interior: false\n  }) {\n    this.toggleOutline();\n    if (options.interior) {\n      this.#gates.forEach(gate => {\n        gate.toggleOutline();\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/GateStructure/DualInputComplexGate.js?");

/***/ }),

/***/ "./src/logic/gates/GateStructure/DualInputGate.js":
/*!********************************************************!*\
  !*** ./src/logic/gates/GateStructure/DualInputGate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DualInputGate)\n/* harmony export */ });\n/* harmony import */ var _Gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gate */ \"./src/logic/gates/GateStructure/Gate.js\");\n/** \r\n * @typedef {object} cordinates\r\n * @property {number} x\r\n * @property {number} y\r\n */\n\n\nclass DualInputGate extends _Gate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  #inputA;\n  #inputB;\n  #output;\n  #inputPositions = [{\n    x: undefined,\n    y: undefined\n  }, {\n    x: undefined,\n    y: undefined\n  }];\n  #outputPosition = {\n    x: undefined,\n    y: undefined\n  };\n  constructor(inputA, inputB, output, width, height) {\n    super(width || 100, height || 60);\n    this.#inputA = inputA | 0;\n    this.#inputB = inputB | 0;\n    this.#output = output | 0;\n  }\n\n  /** @return {number} */\n  get inputA() {\n    return this.#inputA;\n  }\n\n  /** @param {number} input */\n  set inputA(input) {\n    this.#inputA = input;\n  }\n\n  /** @return {number} */\n  get inputB() {\n    return this.#inputB;\n  }\n\n  /** @param {number} input */\n  set inputB(input) {\n    this.#inputB = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this.#output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this.#output = value;\n  }\n\n  /** @return {Array<cordinates>} */\n  get inputPositions() {\n    return this.#inputPositions;\n  }\n\n  /** @param {Array<cordinates>} positions */\n  set inputPositions(positions) {\n    this.#inputPositions = positions;\n  }\n\n  /** @return {cordinates} */\n  get outputPosition() {\n    return this.#outputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set outputPosition(cordinates) {\n    this.#outputPosition = cordinates;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/GateStructure/DualInputGate.js?");

/***/ }),

/***/ "./src/logic/gates/GateStructure/Gate.js":
/*!***********************************************!*\
  !*** ./src/logic/gates/GateStructure/Gate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gate)\n/* harmony export */ });\nclass Gate {\n  #width;\n  #height;\n  #gatePosition = [{\n    x: undefined,\n    y: undefined\n  }, {\n    x: undefined,\n    y: undefined\n  }];\n  #midPosition = {\n    x: undefined,\n    y: undefined\n  };\n  #outline = false;\n  constructor(width, height) {\n    this.#width = width;\n    this.#height = height;\n  }\n\n  /** @return {number} */\n  get width() {\n    return this.#width;\n  }\n\n  /** @param {number} width */\n  set width(width) {\n    this.#width = width;\n  }\n\n  /** @return {number} */\n  get height() {\n    return this.#height;\n  }\n\n  /** @param {number} height */\n  set height(height) {\n    this.#height = height;\n  }\n\n  /** @return {Array<cordinates>} */\n  get gatePosition() {\n    return this.#gatePosition;\n  }\n\n  /** @param {Array<cordinates>} position */\n  set gatePosition(position) {\n    this.#gatePosition = position;\n  }\n\n  /** @return {cordinates} */\n  get midPosition() {\n    return this.#midPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set midPosition(cordinates) {\n    this.#midPosition = cordinates;\n  }\n\n  /** @return {boolean} */\n  get outline() {\n    return this.#outline;\n  }\n  toggleOutline() {\n    this.#outline = !this.#outline;\n  }\n  updateDimentions(width, height) {\n    this.#width = width, this.#height = height;\n    this.#gatePosition = [{\n      x: this.#midPosition.x - this.#width / 2,\n      y: this.midPosition.y - this.#height / 2\n    }, {\n      x: this.#width,\n      y: this.#height\n    }];\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/GateStructure/Gate.js?");

/***/ }),

/***/ "./src/logic/gates/GateStructure/SingleInputGate.js":
/*!**********************************************************!*\
  !*** ./src/logic/gates/GateStructure/SingleInputGate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SingleInputGate)\n/* harmony export */ });\n/* harmony import */ var _Gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gate */ \"./src/logic/gates/GateStructure/Gate.js\");\n/** \r\n * @typedef {object} cordinates\r\n * @property {number} x\r\n * @property {number} y\r\n */\n\n\nclass SingleInputGate extends _Gate__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  #input;\n  #output;\n  #inputPosition = {\n    x: undefined,\n    y: undefined\n  };\n  #outputPosition = {\n    x: undefined,\n    y: undefined\n  };\n  constructor(input, output, width, height) {\n    super(width || 100, height || 60);\n    this.#input = input | 0;\n    this.#output = output | 0;\n  }\n\n  /** @return {number} */\n  get input() {\n    return this.#input;\n  }\n\n  /** @param {number} input */\n  set input(input) {\n    this.#input = input;\n  }\n\n  /** @return {number} */\n  get output() {\n    return this.#output;\n  }\n\n  /** @param {number} value */\n  set output(value) {\n    this.#output = value;\n  }\n\n  /** @return {cordinates} */\n  get inputPosition() {\n    return this.#inputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set inputPosition(cordinates) {\n    this.#inputPosition = cordinates;\n  }\n\n  /** @return {cordinates} */\n  get outputPosition() {\n    return this.#outputPosition;\n  }\n\n  /** @param {cordinates} cordinates */\n  set outputPosition(cordinates) {\n    this.#outputPosition = cordinates;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/GateStructure/SingleInputGate.js?");

/***/ }),

/***/ "./src/logic/gates/GateStructure/index.js":
/*!************************************************!*\
  !*** ./src/logic/gates/GateStructure/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DualInputComplexGate\": () => (/* reexport safe */ _DualInputComplexGate__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"DualInputGate\": () => (/* reexport safe */ _DualInputGate__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Gate\": () => (/* reexport safe */ _Gate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"SingleInputGate\": () => (/* reexport safe */ _SingleInputGate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gate */ \"./src/logic/gates/GateStructure/Gate.js\");\n/* harmony import */ var _SingleInputGate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleInputGate */ \"./src/logic/gates/GateStructure/SingleInputGate.js\");\n/* harmony import */ var _DualInputGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DualInputGate */ \"./src/logic/gates/GateStructure/DualInputGate.js\");\n/* harmony import */ var _DualInputComplexGate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DualInputComplexGate */ \"./src/logic/gates/GateStructure/DualInputComplexGate.js\");\n\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/GateStructure/index.js?");

/***/ }),

/***/ "./src/logic/gates/SimpleGates/ANDgate.js":
/*!************************************************!*\
  !*** ./src/logic/gates/SimpleGates/ANDgate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AND)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities */ \"./src/utilities/index.js\");\n\n\nclass AND extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.DualInputGate {\n  static calculateOutput(A, B) {\n    return A && B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, AND.calculateOutput(inputA, inputB));\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: this.width,\n      y: this.height\n    }];\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.midPosition.x = canvas.width * .5;\n    this.midPosition.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx);\n  }\n  draw(ctx) {\n    const radius = this.width * 0.33 - 2;\n    if (this.outline) this.#drawOutline(ctx, radius);\n    this.#drawGate(ctx, radius);\n    this.inputPositions = [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }];\n    this.outputPosition = {\n      x: this.midPosition.x + this.width / 2,\n      y: this.midPosition.y\n    };\n  }\n  #drawGate(ctx, radius) {\n    // draw front arc\n    ctx.beginPath();\n    ctx.arc(this.midPosition.x, this.midPosition.y, radius, Math.PI * 1.5, Math.PI * 0.5, false);\n    ctx.lineTo(this.midPosition.x - this.width * 0.6 + radius, this.midPosition.y + radius);\n    ctx.lineTo(this.midPosition.x - this.width * 0.6 + radius, this.midPosition.y - radius);\n    ctx.closePath();\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.6 + radius,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - radius + this.height * 0.2\n    }]);\n    // // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.6 + radius,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + radius - this.height * 0.2\n    }]);\n    // // draw output line \n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x + radius,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x + this.width / 2,\n      y: this.midPosition.y\n    }]);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);\n    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.beginPath();\n    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/SimpleGates/ANDgate.js?");

/***/ }),

/***/ "./src/logic/gates/SimpleGates/NOTgate.js":
/*!************************************************!*\
  !*** ./src/logic/gates/SimpleGates/NOTgate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOT)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities */ \"./src/utilities/index.js\");\n\n\nclass NOT extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.SingleInputGate {\n  static invert(input) {\n    return input === 1 ? 0 : 1;\n  }\n  constructor(input, x, y) {\n    super(input, NOT.invert(input));\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: this.width,\n      y: this.height\n    }];\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height, canvas.width * 0.33 - 2);\n  }\n  draw(ctx) {\n    this.#drawGate(ctx);\n    if (this.outline) this.#drawOutline(ctx);\n    this.inputPosition = {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y\n    };\n    this.outputPosition = {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    };\n  }\n  #drawGate(ctx) {\n    ctx.fillStyle = 'blue';\n    ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(this.midPosition.x - this.width * 0.25, this.midPosition.y);\n    ctx.lineTo(this.midPosition.x - this.width * 0.25, this.midPosition.y - this.height * 0.5);\n    ctx.lineTo(this.midPosition.x + this.width * 0.3, this.midPosition.y);\n    ctx.lineTo(this.midPosition.x - this.width * 0.25, this.midPosition.y + this.height * 0.5);\n    ctx.closePath();\n    ctx.fill();\n    ctx.stroke();\n\n    // draw input line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.input === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.25,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y\n    }]);\n\n    // draw output line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x + this.width * 0.25,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    }]);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.input, this.inputPosition.x - 10, this.inputPosition.y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/SimpleGates/NOTgate.js?");

/***/ }),

/***/ "./src/logic/gates/SimpleGates/ORgate.js":
/*!***********************************************!*\
  !*** ./src/logic/gates/SimpleGates/ORgate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OR)\n/* harmony export */ });\n/* harmony import */ var _GateStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GateStructure */ \"./src/logic/gates/GateStructure/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities */ \"./src/utilities/index.js\");\n\n\nclass OR extends _GateStructure__WEBPACK_IMPORTED_MODULE_0__.DualInputGate {\n  static calculateOutput(A, B) {\n    return A || B ? 1 : 0;\n  }\n  constructor(inputA, inputB, x, y) {\n    super(inputA, inputB, OR.calculateOutput(inputA, inputB));\n    this.midPosition = {\n      x,\n      y\n    };\n    this.gatePosition = [{\n      x: x - this.width / 2,\n      y: y - this.height / 2\n    }, {\n      x: this.width,\n      y: this.height\n    }];\n  }\n  render(parent) {\n    const canvas = document.createElement('canvas');\n    const ctx = canvas.getContext('2d');\n    canvas.width = 100;\n    canvas.height = 80;\n    canvas.setAttribute('style', 'border: 2px solid black;');\n    this.x = canvas.width * .5;\n    this.y = canvas.height / 2;\n    parent.append(canvas);\n    this.draw(ctx, canvas.width, canvas.height);\n  }\n  draw(ctx) {\n    const radius = this.width * 0.35 - 2;\n    this.#drawGate(ctx, radius);\n    if (this.outline) this.#drawOutline(ctx);\n    this.inputPositions = [{\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height / 5\n    }];\n    this.outputPosition = {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    };\n  }\n  #drawGate(ctx, radius) {\n    ctx.beginPath();\n    ctx.arc(this.midPosition.x - this.width / 2, this.midPosition.y, radius, Math.PI * 1.70, Math.PI * 0.30, false);\n    ctx.lineTo(this.midPosition.x + this.width * 0.25 + 8, this.midPosition.y);\n    ctx.closePath();\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputA === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.25 + 5,\n      y: this.midPosition.y - this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y - this.height / 5\n    }]);\n    // draw input line 2\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.inputB === 1 ? 'red' : 'black', [{\n      x: this.midPosition.x - this.width * 0.25 + 5,\n      y: this.midPosition.y + this.height / 5\n    }, {\n      x: this.midPosition.x - this.width * 0.5,\n      y: this.midPosition.y + this.height / 5\n    }]);\n    // draw output line\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, this.output, [{\n      x: this.midPosition.x + this.width * 0.25,\n      y: this.midPosition.y\n    }, {\n      x: this.midPosition.x + this.width * 0.5,\n      y: this.midPosition.y\n    }]);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);\n    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);\n    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);\n    ctx.beginPath();\n    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/SimpleGates/ORgate.js?");

/***/ }),

/***/ "./src/logic/gates/SimpleGates/index.js":
/*!**********************************************!*\
  !*** ./src/logic/gates/SimpleGates/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AND\": () => (/* reexport safe */ _ANDgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"NOT\": () => (/* reexport safe */ _NOTgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"OR\": () => (/* reexport safe */ _ORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOTgate */ \"./src/logic/gates/SimpleGates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ANDgate */ \"./src/logic/gates/SimpleGates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ORgate */ \"./src/logic/gates/SimpleGates/ORgate.js\");\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/logic/gates/SimpleGates/index.js?");

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