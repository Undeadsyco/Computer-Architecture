/**
 * @typedef {(number|boolean)} boolLike
 */

import { XOR } from './logic/gates';

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');

const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
canvas.width = 100, canvas.height = 60;
canvasContainer.append(canvas)

const xorGate = new XOR(0, 1);
xorGate.render(canvasContainer);