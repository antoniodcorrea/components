import { TextElement } from './TextElement';

export type ImageElement = {
  type: 'image';
  ratio?: number;
  image: Record<string, string | ArrayBuffer>;
  children?: Array<TextElement>;
};
