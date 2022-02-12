import { BaseEditor, Node } from 'slate';
import { ReactEditor } from 'slate-react';

export interface CustomText {
  type: string;
  text?: string;
  bold?: boolean;
  mark?: boolean;
  italic?: boolean;
  underlined?: boolean;
  uppercase?: boolean;
  children?: any;
  tab?: boolean;
}

export type ImageElement = {
  type: 'image';
  image: {
    original: string | ArrayBuffer;
  };
  ratio?: number;
  children?: any;
};

export type LinkElement = {
  type: 'link';
  url: string;
  children: any; // TODO: type children here
};

export type CustomElement = {
  type: 'paragraph' | 'code' | 'h1' | 'h2' | 'ul' | 'quote' | 'text' | 'centered' | 'caption';
  children: CustomText[];
};

export type CustomNode = Node & {
  bold: boolean;
};

export type TextEditorNode = CustomElement | LinkElement | ImageElement | CustomText;
export type TextEditorValue = Array<TextEditorNode>;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & { type: string };
    Element: CustomElement | LinkElement | CustomElement | ImageElement;
    Text: CustomText;
    Node: CustomNode;
  }
}

export interface ImageUpload {
  uploadFileToServer: (options: {
    file: File;
    setPercentCompleted: (number: number) => void;
  }) => Promise<{ file: string }>;
  removeFileFromServer: (options: { src: string; onRemoved: () => void }) => Promise<void>;
}
