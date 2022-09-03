import { AnchorElement } from './types/AnchorElement';
import { ImageElement } from './types/ImageElement';
import { MathBlockElement } from './types/MathBockElement';
import { ParagraphElement } from './types/ParagraphElement';
import { TextElement } from './types/TextElement';
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type TextEditorValue = Array<ParagraphElement | AnchorElement | ImageElement | TextElement | MathBlockElement>;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & { type: string };
    Element: ParagraphElement | AnchorElement | ImageElement | MathBlockElement;
    Text: TextElement;
  }
}

export interface ImageUpload {
  uploadFileToServer: (options: {
    file: File;
    setPercentCompleted: (number: number) => void;
  }) => Promise<{ file: string }>;
  removeFileFromServer: (options: { src: string; onRemoved: () => void }) => Promise<void>;
}
