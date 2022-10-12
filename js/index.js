/**
 * @typedef {(number|boolean)} boolLike
 */

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');

const xorGate = new XOR(0, 1);
xorGate.render(canvasContainer);