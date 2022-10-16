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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites */ \"./src/sprites/index.js\");\n// import { MOUSE_POSITION } from \"..\";\n\nclass Canvas {\n  static #container = document.getElementById('canvasContainer');\n  static #canvas = document.createElement('canvas');\n  static #ctx = Canvas.#canvas.getContext('2d');\n  static #animationFrame;\n  /** @type {Array<Sprite>} */\n  static #sprites = [];\n  /** @type {Sprite} */\n  static #dragable = null;\n  static #MOUSE_POSITION = {\n    x: undefined,\n    y: undefined\n  };\n  static {\n    Canvas.#canvas.width = Canvas.#container.offsetWidth * 2, Canvas.#canvas.height = Canvas.#container.offsetHeight * 2;\n    Canvas.#ctx.strokeStyle = 'black', Canvas.#ctx.fillStyle = 'black', Canvas.#ctx.font = 'bold 24px serif';\n    Canvas.#container.append(Canvas.#canvas);\n    Canvas.#canvas.addEventListener('addSprite', e => {\n      console.log(e['detail']);\n      Canvas.#sprites.push(e['detail']);\n    });\n    Canvas.#canvas.addEventListener('createDragable', e => {\n      Canvas.#dragable = e['detail'];\n    });\n    Canvas.#canvas.addEventListener('mousemove', e => {\n      Canvas.#MOUSE_POSITION.x = e.x, Canvas.#MOUSE_POSITION.y = e.y;\n    });\n    Canvas.#canvas.addEventListener('mouseup', e => {\n      if (Canvas.#dragable) {\n        console.log('added sprite');\n        Canvas.#sprites.push(Canvas.#dragable);\n        Canvas.#dragable = null;\n      }\n    });\n  }\n  static get ctx() {\n    return Canvas.#ctx;\n  }\n  static get sprites() {\n    return Canvas.#sprites;\n  }\n  static init() {\n    Canvas.#sprites.forEach(( /** @type {Sprite} */sprite) => {\n      sprite.draw();\n    });\n  }\n  static animate() {\n    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);\n    Canvas.#sprites.forEach(component => {\n      component.update(Canvas.#ctx);\n      component.draw(Canvas.#ctx);\n    });\n    if (Canvas.#dragable) {\n      Canvas.#dragable.update();\n      Canvas.#dragable.draw(Canvas.#ctx);\n    }\n    Canvas.#animationFrame = requestAnimationFrame(Canvas.animate);\n  }\n  static stopAnimation() {\n    cancelAnimationFrame(Canvas.#animationFrame);\n  }\n  static clearCanvas() {\n    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);\n    Canvas.#sprites = [];\n  }\n  static resize() {\n    Canvas.#canvas.width = Canvas.#container.offsetWidth, Canvas.#canvas.height = Canvas.#container.offsetHeight;\n  }\n  static dispatchEvent(event) {\n    Canvas.#canvas.dispatchEvent(event);\n  }\n\n  /**\r\n   * \r\n   * @param {Array<Array<number>>} cordinates \r\n   * @param {Float32Array} offset\r\n   */\n  static drawGradientLine(cordinates, offset) {\n    this.#ctx.beginPath();\n    const gradient = this.#ctx.createLinearGradient(cordinates[0][0], cordinates[0][1], cordinates[cordinates.length - 1][0], cordinates[cordinates.length - 1][1]);\n    gradient.addColorStop(offset < 0 ? 0 : offset > 1 ? 1 : offset, 'red');\n    gradient.addColorStop(offset < 0 ? 0 : offset > 1 ? 1 : offset, 'black');\n    this.#ctx.strokeStyle = gradient;\n    for (let i = 0; i < cordinates.length; i += 1) {\n      if (i === 0) this.#ctx.moveTo(cordinates[0][0], cordinates[0][1]);\n      this.#ctx.lineTo(cordinates[i][0], cordinates[i][1]);\n    }\n    this.#ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/canvas/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MOUSE_POSITION\": () => (/* binding */ MOUSE_POSITION)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas/index.js\");\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites */ \"./src/sprites/index.js\");\n/* harmony import */ var _sprites_circuits_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/circuits/gates/ComplexGates */ \"./src/sprites/circuits/gates/ComplexGates/index.js\");\n/* harmony import */ var _sprites_circuits_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/circuits/gates/SimpleGates */ \"./src/sprites/circuits/gates/SimpleGates/index.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n\n\nconst MOUSE_POSITION = {\n  x: undefined,\n  y: undefined\n};\n\n// window events\nwindow.addEventListener('resize', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize();\n});\nwindow.addEventListener('mousemove', e => {\n  e.preventDefault();\n  MOUSE_POSITION.x = e.x, MOUSE_POSITION.y = e.y;\n});\n\n// animation control btn events\ndocument.getElementById('cancelBtn').addEventListener('click', e => {\n  e.preventDefault();\n  cancelAnimationFrame(animationFrame);\n});\ndocument.getElementById('startBtn').addEventListener('click', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animate();\n});\ndocument.getElementById('clearBtn').addEventListener('click', e => {\n  e.preventDefault();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearCanvas();\n});\nArray.from(document.forms[0]).slice(4).forEach(btn => {\n  btn.addEventListener('click', e => {\n    const inputs = Array.from(document.forms[0]).slice(0, 4);\n    const x = parseInt(inputs[0].value),\n      y = parseInt(inputs[1].value),\n      inputA = parseInt(inputs[2].value),\n      inputB = parseInt(inputs[3].value);\n    let sprite;\n    e.preventDefault();\n    switch (btn.textContent) {\n      case 'NOT Gate':\n        console.log('NOT');\n        sprite = new _sprites_circuits_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_3__.NOT(x, y, inputA);\n        break;\n      case 'AND Gate':\n        console.log('AND');\n        sprite = new _sprites_circuits_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_3__.AND(x, y, [inputA, inputB]);\n        break;\n      case 'OR Gate':\n        console.log('OR');\n        sprite = new _sprites_circuits_gates_SimpleGates__WEBPACK_IMPORTED_MODULE_3__.OR(x, y, [inputA, inputB]);\n        break;\n      case 'XOR Gate':\n        console.log('XOR');\n        sprite = new _sprites_circuits_gates_ComplexGates__WEBPACK_IMPORTED_MODULE_2__.XOR(x, y, [inputA, inputB]);\n        break;\n      default:\n        console.log('default');\n        break;\n    }\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatchEvent(new CustomEvent('addSprite', {\n      detail: sprite\n    }));\n  });\n});\n\n//# sourceURL=webpack://computer-architecture/./src/index.js?");

/***/ }),

/***/ "./src/sprites/Sprite.js":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\n// ts-check\n\nclass Sprite {\n  /** @type {number} */#width;\n  /** @type {number} */\n  #height;\n  /** @type {Array<number>} */\n  #mid;\n  /** @type {Array<Array<number>>} */\n  #cords;\n  /** @type {boolean} */\n  #outline = false;\n  /** @type {boolean} */\n  #isDraggable = false;\n\n  /**\r\n   * \r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @param {number} w \r\n   * @param {number} h \r\n   */\n  constructor(x, y, w, h) {\n    /** @type {number} */this.#width = w;\n    /** @type {number} */\n    this.#height = h;\n    /** @type {Array<number>} */\n    this.#mid = [x, y];\n    /** @type {Array<Array<number>>} */\n    this.#cords = [[x - w / 2, y - h / 2], [this.#width, this.#height]];\n  }\n\n  /** @return {number} */\n  get width() {\n    return this.#width;\n  }\n\n  /** @return {number} */\n  get height() {\n    return this.#height;\n  }\n\n  /** @return {Array<number>} */\n  get midPosition() {\n    return this.#mid;\n  }\n\n  /** @return {Array<Array<number>>} */\n  get cordinates() {\n    return this.#cords;\n  }\n\n  /** @return {boolean} */\n  get outline() {\n    return this.#outline;\n  }\n\n  /** @return {boolean} */\n  get draggable() {\n    return this.#isDraggable;\n  }\n  toggleOutline() {\n    this.#outline = !this.#outline;\n  }\n  toggleIsDraggable() {\n    this.#isDraggable = !this.#isDraggable;\n  }\n  updatePosition(x, y) {\n    this.#mid = [x, y];\n    this.#cords = [[x - this.#width / 2, y - this.#height / 2], [this.#width, this.#height]];\n  }\n  updateDementions(width, height) {\n    this.#width = width, this.#height = height;\n    this.#cords = [[this.#mid[0] - this.#width / 2, this.#mid[1] - this.#height / 2], [this.#width, this.#height]];\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.strokStyle = 'black';\n    ctx.rect(this.#cords[0][0], this.#cords[0][1], this.#cords[1][0], this.#cords[1][1]);\n    ctx.stroke();\n  }\n  update() {}\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/Sprite.js?");

/***/ }),

/***/ "./src/sprites/circuits/Circuit.js":
/*!*****************************************!*\
  !*** ./src/sprites/circuits/Circuit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Circut)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Sprite */ \"./src/sprites/Sprite.js\");\n// ts-check\n\n\nclass Circut extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  /** @type {Array<number>} */#inputs = [];\n  /** @type {Array<Array<number>>} */\n  #inputPos = [];\n  /** @type {number} */\n  #output;\n  /** @type {Array<number>} */\n  #outputPos = [];\n\n  /**\r\n   * \r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @param {number} w \r\n   * @param {number} h \r\n   * @param {Array<number>} inputs \r\n   * @param {number} output \r\n   */\n  constructor(x, y, w, h, inputs, output) {\n    super(x, y, w, h);\n    this.#inputs = inputs;\n    this.#output = output;\n  }\n  get inputs() {\n    return this.#inputs;\n  }\n  set inputs(inputs) {\n    this.#inputs = inputs;\n  }\n  get output() {\n    return this.#output;\n  }\n  set output(output) {\n    this.#output = output;\n  }\n  get inputPos() {\n    return this.#inputPos;\n  }\n  set inputPos(pos) {\n    this.#inputPos = pos;\n  }\n  get outputPos() {\n    return this.#outputPos;\n  }\n  set outputPos(pos) {\n    this.#outputPos = pos;\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/Circuit.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/ComplexGates/NANDgate.js":
/*!*************************************************************!*\
  !*** ./src/sprites/circuits/gates/ComplexGates/NANDgate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NAND)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n\nclass NAND extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/ComplexGates/NANDgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/ComplexGates/NORgate.js":
/*!************************************************************!*\
  !*** ./src/sprites/circuits/gates/ComplexGates/NORgate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOR)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n\nclass NOR extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(inputA, inputB) {\n    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/ComplexGates/NORgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/ComplexGates/XORgate.js":
/*!************************************************************!*\
  !*** ./src/sprites/circuits/gates/ComplexGates/XORgate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ XOR)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n/* harmony import */ var _SimpleGates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleGates */ \"./src/sprites/circuits/gates/SimpleGates/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../canvas */ \"./src/canvas/index.js\");\n// ts-check\n\n\n\n\n\nclass XOR extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput([A, B]) {\n    return A && !B || !A && B ? 1 : 0;\n  }\n\n  /** @type {Array<Circut>} */\n  #gates = [];\n  #stepA = 0.0;\n  #stepB = 0.0;\n  #stepC = 0.0;\n  #stepD = 0.0;\n  #stepE = 0.0;\n  #stepF = 0.0;\n  #stepG = 0.0;\n  constructor(x, y, inputs) {\n    super(x, y, 400, 200, inputs, XOR.calculateOutput(inputs));\n    this.#createComponentGates();\n    this.inputPos = [[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.height * 0.33], [this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.height * 0.33]];\n    this.outputPos = [this.#gates[4].outputPos[0] + this.width * 0.05, this.#gates[4].outputPos[1]];\n  }\n  #createComponentGates() {\n    const notGate1 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.NOT(this.midPosition[0] - this.width * 0.25, this.midPosition[1] - this.height * 0.25, this.inputs[1]);\n    const notGate2 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.NOT(this.midPosition[0] - this.width * 0.25, this.midPosition[1] + this.height * 0.25, this.inputs[0]);\n    const andGate1 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(this.midPosition[0] + this.width * 0.05, this.midPosition[1] - this.height * 0.25, [this.inputs[0], notGate1.output]);\n    const andGate2 = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.AND(this.midPosition[0] + this.width * 0.05, this.midPosition[1] + this.height * 0.25, [notGate2.output, this.inputs[1]]);\n    const orGate = new _SimpleGates__WEBPACK_IMPORTED_MODULE_1__.OR(this.midPosition[0] + this.width * 0.35, this.midPosition[1], [andGate1.output, andGate2.output]);\n    this.#gates.push(notGate1, notGate2, andGate1, andGate2, orGate);\n    // this.#gates.forEach((gate) => {\n    //   gate.updateDementions(this.width / 5, this.height / 3);\n    // });\n  }\n\n  update(ctx) {\n    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;else if (this.#stepA > 0) this.#stepA -= 0.01;\n    if (this.inputs[1] === 1 && this.#stepB < 1) this.#stepB += 0.01;else if (this.#stepB > 0) this.#stepB -= 0.01;\n    if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;else if (this.#stepC > 0) this.#stepC -= 0.01;\n    if (this.#gates[0].output === 1 && this.#stepD < 1) this.#stepD += 0.01;else if (this.#stepD > 0) this.#stepD -= 0.01;\n    if (this.#gates[1].output === 1 && this.#stepE < 1) this.#stepE += 0.01;else if (this.#stepE > 0) this.#stepE -= 0.01;\n    if (this.#gates[2].output === 1 && this.#stepF < 1) this.#stepF += 0.01;else if (this.#stepF > 0) this.#stepF -= 0.01;\n    if (this.#gates[3].output === 1 && this.#stepG < 1) this.#stepG += 0.01;else if (this.#stepG > 0) this.#stepG -= 0.01;\n    this.#gates.forEach(gate => {\n      gate.update(ctx);\n    });\n  }\n  draw(ctx) {\n    this.#drawGate(ctx);\n    if (this.outline) this.#drawOutline(ctx);\n  }\n  #drawGate(ctx) {\n    this.#gates.forEach(gate => {\n      gate.draw(ctx);\n    });\n\n    // draw line from NOTgate 1 output to ANDgate 1 inputs[1]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.#gates[0].outputPos[0], this.#gates[0].outputPos[1]], [this.#gates[2].inputPos[1][0], this.#gates[2].inputPos[1][1]]], this.#stepD);\n\n    // draw line from NOTgate 2 output to ANDgate 2 inputs[0]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.#gates[1].outputPos[0], this.#gates[1].outputPos[1]], [this.#gates[3].inputPos[0][0], this.#gates[3].inputPos[0][1]]], this.#stepE);\n\n    // draw line from ANDgate 1 output to ORgate inputs[0]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.#gates[2].outputPos[0], this.#gates[2].outputPos[1]], [this.#gates[4].inputPos[0][0], this.#gates[4].inputPos[0][1]]], this.#stepF);\n\n    // draw line from ANDgate 2 output to ORgate inputs[1]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.#gates[3].outputPos[0], this.#gates[3].outputPos[1]], [this.#gates[4].inputPos[1][0], this.#gates[4].inputPos[1][1]]], this.#stepG);\n\n    // draw line from inputs[0] to ANDgate 1 inputs[0]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 40, this.midPosition[1] - this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 40, this.midPosition[1] - this.height * 0.45], [this.#gates[2].inputPos[0][0] - 10, this.midPosition[1] - this.height * 0.45], [this.#gates[2].inputPos[0][0] - 10, this.#gates[2].inputPos[0][1]], [this.#gates[2].inputPos[0][0], this.#gates[2].inputPos[0][1]]], this.#stepA);\n\n    // draw line from inputs[0] to NOTgate 2 input\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 40, this.midPosition[1] - this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 40, this.#gates[1].inputPos[1]], [this.#gates[1].inputPos[0], this.#gates[1].inputPos[1]]], this.#stepA);\n\n    // draw line from inputs[1] to ANDgate 2 inputs[1]\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 20, this.midPosition[1] + this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 20, this.midPosition[1] + this.height * 0.45], [this.#gates[3].inputPos[1][0] - 10, this.midPosition[1] + this.height * 0.45], [this.#gates[3].inputPos[1][0] - 10, this.#gates[3].inputPos[1][1]], [this.#gates[3].inputPos[1][0], this.#gates[3].inputPos[1][1]]], this.#stepB);\n\n    // draw line from inputs[1] to NOTgate 1 input\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 20, this.midPosition[1] + this.height * 0.33], [this.midPosition[0] - this.width * 0.5 + 20, this.#gates[0].inputPos[1]], [this.#gates[0].inputPos[0], this.#gates[0].inputPos[1]]], this.#stepB);\n\n    // draw line from ORgate output to output\n    _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawGradientLine([[this.#gates[4].outputPos[0], this.#gates[4].outputPos[1]], [this.#gates[4].outputPos[0] + this.width * 0.05, this.#gates[4].outputPos[1]]], this.#stepC);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputs[0], this.inputPos[0][0] - 10, this.inputPos[0][1] + 6);\n    ctx.fillText(this.inputs[1], this.inputPos[1][0] - 10, this.inputPos[1][1] + 6);\n    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);\n    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/ComplexGates/XORgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/ComplexGates/index.js":
/*!**********************************************************!*\
  !*** ./src/sprites/circuits/gates/ComplexGates/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NAND\": () => (/* reexport safe */ _NANDgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"NOR\": () => (/* reexport safe */ _NORgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"XOR\": () => (/* reexport safe */ _XORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NANDgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NANDgate */ \"./src/sprites/circuits/gates/ComplexGates/NANDgate.js\");\n/* harmony import */ var _NORgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NORgate */ \"./src/sprites/circuits/gates/ComplexGates/NORgate.js\");\n/* harmony import */ var _XORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XORgate */ \"./src/sprites/circuits/gates/ComplexGates/XORgate.js\");\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/ComplexGates/index.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/SimpleGates/ANDgate.js":
/*!***********************************************************!*\
  !*** ./src/sprites/circuits/gates/SimpleGates/ANDgate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AND)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../canvas */ \"./src/canvas/index.js\");\n\n\n\nclass AND extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput([A, B]) {\n    return A && B ? 1 : 0;\n  }\n  #radius;\n  #stepA = 0.0;\n  #stepB = 0.0;\n  #stepC = 0.0;\n  constructor(x, y, inputs) {\n    super(x, y, 100, 60, inputs, AND.calculateOutput(inputs));\n    this.#radius = this.width * 0.33 - 2;\n    this.inputPos = [[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.#radius + this.height * 0.2], [this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.#radius - this.height * 0.2]];\n    this.outputPos = [this.midPosition[0] + this.width / 2, this.midPosition[1]];\n  }\n  update(ctx) {\n    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;else if (this.#stepA > 0) this.#stepA -= 0.01;\n    if (this.inputs[1] === 1 && this.#stepB < 1) this.#stepB += 0.01;else if (this.#stepB > 0) this.#stepB -= 0.01;\n    if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;else if (this.#stepC > 0) this.#stepC -= 0.01;\n    this.draw(ctx);\n  }\n  draw(ctx) {\n    if (this.outline) this.#drawOutline(ctx);\n    this.#drawGate(ctx, this.#radius);\n  }\n  #drawGate(ctx) {\n    // draw front arc\n    ctx.beginPath();\n    ctx.arc(this.midPosition[0], this.midPosition[1], this.#radius, Math.PI * 1.5, Math.PI * 0.5, false);\n    ctx.lineTo(this.midPosition[0] - this.width * 0.6 + this.#radius, this.midPosition[1] + this.#radius);\n    ctx.lineTo(this.midPosition[0] - this.width * 0.6 + this.#radius, this.midPosition[1] - this.#radius);\n    ctx.closePath();\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.#radius + this.height * 0.2], [this.midPosition[0] - this.width * 0.6 + this.#radius, this.midPosition[1] - this.#radius + this.height * 0.2]], this.#stepA);\n    // // draw input line 2\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.#radius - this.height * 0.2], [this.midPosition[0] - this.width * 0.6 + this.#radius, this.midPosition[1] + this.#radius - this.height * 0.2]], this.#stepB);\n    // // draw output line \n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] + this.#radius, this.midPosition[1]], [this.midPosition[0] + this.width / 2, this.midPosition[1]]], this.#stepC);\n  }\n  #drawOutline(ctx) {\n    ctx.beginPath();\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputs[0], this.inputPos[0][0] - 10, this.inputPos[0][1] + 6);\n    ctx.fillText(this.inputs[1], this.inputPos[1][0] - 10, this.inputPos[1][1] + 6);\n    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);\n    // ctx.fill();\n\n    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/SimpleGates/ANDgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/SimpleGates/NOTgate.js":
/*!***********************************************************!*\
  !*** ./src/sprites/circuits/gates/SimpleGates/NOTgate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NOT)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../canvas */ \"./src/canvas/index.js\");\n\n\n\nclass NOT extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static invert(input) {\n    return input === 1 ? 0 : 1;\n  }\n  #stepA = 0.0;\n  #stepB = 0.0;\n  constructor(x, y, input) {\n    super(x, y, 100, 60, [input], NOT.invert(input));\n    this.inputPos = [this.midPosition[0] - this.width * 0.5, this.midPosition[1]];\n    this.outputPos = [this.midPosition[0] + this.width * 0.5, this.midPosition[1]];\n  }\n  update(ctx) {\n    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;else if (this.#stepA > 0) this.#stepA -= 0.01;\n    if (this.output === 1 && this.#stepB < 1) this.#stepB += 0.01;else if (this.#stepB > 0) this.#stepB -= 0.01;\n    this.draw(ctx);\n  }\n  draw(ctx) {\n    this.#drawGate(ctx);\n    if (this.outline) this.#drawOutline(ctx);\n  }\n  #drawGate(ctx) {\n    ctx.fillStyle = 'blue';\n    ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(this.midPosition[0] - this.width * 0.25, this.midPosition[1]);\n    ctx.lineTo(this.midPosition[0] - this.width * 0.25, this.midPosition[1] - this.height * 0.5);\n    ctx.lineTo(this.midPosition[0] + this.width * 0.3, this.midPosition[1]);\n    ctx.lineTo(this.midPosition[0] - this.width * 0.25, this.midPosition[1] + this.height * 0.5);\n    ctx.closePath();\n    ctx.fill();\n    ctx.stroke();\n\n    // draw input line\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1]], [this.midPosition[0] - this.width * 0.25, this.midPosition[1]]], this.#stepA);\n\n    // draw output line\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] + this.width * 0.25, this.midPosition[1]], [this.midPosition[0] + this.width * 0.5, this.midPosition[1]]], this.#stepB);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputs[0], this.inputPos[0] - 10, this.inputPos[1] + 6);\n    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);\n    ctx.strokeStyle = 'black';\n    ctx.beginPath();\n    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/SimpleGates/NOTgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/SimpleGates/ORgate.js":
/*!**********************************************************!*\
  !*** ./src/sprites/circuits/gates/SimpleGates/ORgate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OR)\n/* harmony export */ });\n/* harmony import */ var _Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Circuit */ \"./src/sprites/circuits/Circuit.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities */ \"./src/utilities/index.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../canvas */ \"./src/canvas/index.js\");\n\n\n\nclass OR extends _Circuit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static calculateOutput([A, B]) {\n    return A || B ? 1 : 0;\n  }\n  #radius;\n  #stepA = 0.0;\n  #stepB = 0.0;\n  #stepC = 0.0;\n  constructor(x, y, inputs) {\n    super(x, y, 100, 60, inputs, OR.calculateOutput(inputs));\n    this.#radius = this.width * 0.35 - 2;\n    this.inputPos = [[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.height / 5], [this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.height / 5]];\n    this.outputPos = [this.midPosition[0] + this.width * 0.5, this.midPosition[1]];\n  }\n  update(ctx) {\n    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;else if (this.#stepA > 0) this.#stepA -= 0.01;\n    if (this.inputs[1] === 1 && this.#stepB < 1) this.#stepB += 0.01;else if (this.#stepB > 0) this.#stepB -= 0.01;\n    if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;else if (this.#stepC > 0) this.#stepC -= 0.01;\n  }\n  draw(ctx) {\n    this.#drawGate(ctx);\n    if (this.outline) this.#drawOutline(ctx);\n  }\n  #drawGate(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.midPosition[0] - this.width / 2, this.midPosition[1], this.#radius, Math.PI * 1.70, Math.PI * 0.30, false);\n    ctx.lineTo(this.midPosition[0] + this.width * 0.25 + 8, this.midPosition[1]);\n    ctx.closePath();\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] - this.height / 5], [this.midPosition[0] - this.width * 0.25 + 5, this.midPosition[1] - this.height / 5]], this.#stepA);\n    // draw input line 2\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] - this.width * 0.5, this.midPosition[1] + this.height / 5], [this.midPosition[0] - this.width * 0.25 + 5, this.midPosition[1] + this.height / 5]], this.#stepB);\n    // draw output line\n    _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawGradientLine([[this.midPosition[0] + this.width * 0.25, this.midPosition[1]], [this.midPosition[0] + this.width * 0.5, this.midPosition[1]]], this.#stepC);\n  }\n  #drawOutline(ctx) {\n    ctx.font = 'bold 20px serif';\n    ctx.fillStyle = 'black';\n    ctx.fillText(this.inputs[0], this.inputPos[0][0] - 10, this.inputPos[0][1] + 6);\n    ctx.fillText(this.inputs[1], this.inputPos[1][0] - 10, this.inputPos[1][1] + 6);\n    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);\n    ctx.beginPath();\n    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/SimpleGates/ORgate.js?");

/***/ }),

/***/ "./src/sprites/circuits/gates/SimpleGates/index.js":
/*!*********************************************************!*\
  !*** ./src/sprites/circuits/gates/SimpleGates/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AND\": () => (/* reexport safe */ _ANDgate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"NOT\": () => (/* reexport safe */ _NOTgate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"OR\": () => (/* reexport safe */ _ORgate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _NOTgate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOTgate */ \"./src/sprites/circuits/gates/SimpleGates/NOTgate.js\");\n/* harmony import */ var _ANDgate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ANDgate */ \"./src/sprites/circuits/gates/SimpleGates/ANDgate.js\");\n/* harmony import */ var _ORgate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ORgate */ \"./src/sprites/circuits/gates/SimpleGates/ORgate.js\");\n\n\n\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/circuits/gates/SimpleGates/index.js?");

/***/ }),

/***/ "./src/sprites/index.js":
/*!******************************!*\
  !*** ./src/sprites/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* reexport safe */ _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/sprites/Sprite.js\");\n\n\n//# sourceURL=webpack://computer-architecture/./src/sprites/index.js?");

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decToBinary\": () => (/* binding */ decToBinary),\n/* harmony export */   \"drawHalfCircle\": () => (/* binding */ drawHalfCircle),\n/* harmony export */   \"drawLine\": () => (/* binding */ drawLine),\n/* harmony export */   \"drawPolygon\": () => (/* binding */ drawPolygon)\n/* harmony export */ });\nconst decToBinary = input => {\n  let decimal = input,\n    binary = '';\n  for (let i = 0; decimal >= 1; i += 1) {\n    binary = `${decimal % 2}${binary}`;\n    decimal = parseInt(decimal / 2, 10);\n  }\n  return binary;\n};\nconst drawLine = (ctx, step = 0, cords = []) => {\n  ctx.strokeStyle = 'black';\n  ctx.beginPath();\n  cords.forEach(({\n    x,\n    y\n  }, i) => {\n    if (i === 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);\n  });\n  ctx.stroke();\n};\nconst drawPolygon = (ctx, sides, radius, options = {\n  lineColor: 'black',\n  fillColor: 'white'\n}) => {\n  ctx.strokeStyle = options.lineColor;\n  ctx.fillStyle = options.fillColor;\n  const cords = [];\n  ctx.beginPath();\n  cords.forEach(({\n    x,\n    y\n  }) => {\n    if (i === 0) ctx.moveTo(x, y);\n    ctx.lineTo(x, y);\n  });\n  ctx.closePath();\n  ctx.fill();\n  ctx.stroke();\n};\nconst drawHalfCircle = (ctx, x, y, r, options = {\n  lineColor: 'black',\n  fillColor: 'white',\n  direction: 'right'\n}) => {\n  ctx.strokeStyle = options.lineColor;\n  ctx.fillStyle = options.fillColor;\n  let a1, a2;\n  switch (options.direction) {\n    case 'right':\n      a1 = Math.PI * 1.5, a2 = Math.PI * 0.5;\n      break;\n    case 'left':\n      a1 = Math.PI * 0.5, a2 = Math.PI * 1.5;\n      break;\n    case 'up':\n      a1 = Math.PI * 1, a2 = Math.PI * 2;\n      break;\n    case 'down':\n      a1 = Math.PI * 2, a2 = Math.PI * 1;\n      break;\n    default:\n  }\n  ctx.beginPath();\n  ctx.arc(x, y, r, a1, a2, false);\n  ctx.fill();\n  ctx.stroke();\n};\n\n//# sourceURL=webpack://computer-architecture/./src/utilities/index.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://computer-architecture/./src/styles/main.css?");

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