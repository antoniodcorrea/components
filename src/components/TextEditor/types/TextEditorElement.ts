import { AnchorElement } from './AnchorElement';
import { ImageElement } from './ImageElement';
import { MathBlockElement } from './MathBockElement';
import { ParagraphElement } from './ParagraphElement';
import { YoutubeElement } from './YoutubeElement';

export type TextEditorElement = ParagraphElement | AnchorElement | ImageElement | MathBlockElement | YoutubeElement;
