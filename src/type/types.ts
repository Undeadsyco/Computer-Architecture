// @ts-check

import { Circuit, Switch, Wire } from "../GameClasses/sprites/circuits";
import { NOT, AND, OR, NAND, NOR, XOR } from "../GameClasses/sprites/circuits/gates";
import { Gate } from "../GameClasses/sprites/circuits/gates/structure";
import Sprite from "../GameClasses/sprites/Sprite";
import { State } from "../GameClasses/States";

export type pos = {
  x: number
  y: number
};

export type rect = pos & {
  width: number
  height: number
  maxWidth?: number
  maxHeight?: number
};

export type input = pos & {
  type: string
  value: number
  visible: boolean
};

export type output = pos & {
  type: string
  value: number
  visible: boolean
};

export type sprite = Sprite;
export type circuit = sprite & Circuit;
export type wire = circuit & Wire;
export type gate = circuit & Gate;
export type switches = circuit & Switch;

export type state = State