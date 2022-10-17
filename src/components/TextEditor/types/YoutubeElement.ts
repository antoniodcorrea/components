import { TextElement } from './TextElement';

export type YoutubeElement = {
  type: 'youtube';
  videoId: string;
  children?: Array<TextElement>;
};
