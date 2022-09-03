import { TextElement } from "./TextElement";

export type MathBlockElement = {
  type: 'math';
  formula: string;
  children: Array<TextElement>;
};
