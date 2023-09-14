import { TextElement } from './TextElement';

export type ParagraphElementType =
  | 'paragraph'
  | 'code'
  | 'h1'
  | 'h2'
  | 'ul'
  | 'quote'
  | 'text'
  | 'centered'
  | 'caption'
  | 'bulleted-list'
  | 'numbered-list'
  | 'list-item';
export type ParagraphElement = {
  type: ParagraphElementType;
  children: TextElement[];
};
