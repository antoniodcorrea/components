import { TextElement } from './TextElement';

export type AnchorElement = {
  type: 'link';
  url: string;
  children: Array<TextElement>;
};
