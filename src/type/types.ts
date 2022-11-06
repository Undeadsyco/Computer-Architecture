// @ts-check

import { NOT, AND, OR, NAND, NOR, XOR } from "../GameClasses/sprites/circuits/gates";
import { Circuit, DualInputCircuit, SingleInputCircuit } from "../GameClasses/sprites/circuits/structure";

export type pos = {
  x: number
  y: number
};

export type rect = pos & {
  width: number
  height: number
};

export type gate = (NOT | AND | OR);

export type circuit = (SingleInputCircuit | DualInputCircuit);

/* ======================================================== */

export type sprite =  rect & {
  radius: number
  bgColor: string
  borderColor: string
  outline: boolean
  draggable: boolean
  static: boolean
  delete: boolean

  update: Function
  draw: Function
  detectMouseOver: Function
  detectMouseDown: Function
  detectMouseUp: Function
  detectClick: Function
  detectDbClick: Function
}

export type input = pos & {
  type: string
  value: number
  visible: boolean
}

export type output = pos & {
  type: string
  value: number
  visible: boolean
}

export type circuit2 = sprite & {
  inputs?: Array<input>
  outputs?: Array<output>
}

export type wire = circuit2 & {
  gates: Array<gate2>
}

export type gate2 = circuit2 & {
  wires: Array<wire>
}