export type TextElement = {
  type: string;
  text?: string;
  bold?: boolean;
  mark?: boolean;
  italic?: boolean;
  underlined?: boolean;
  uppercase?: boolean;
  tab?: boolean;
  mathInline?: boolean;
  children?: Array<any>; // Hacky: 
};
