import React from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { useCustomEditor } from '../hooks/useCustomEditor';
import Cross from '../../../assets/svg/cross.svg';

import { YoutubeElement } from '../types/YoutubeElement';

import './EditorVideo.less';

interface Props {
  element: YoutubeElement;
}

export const EditorVideo: React.FC<Props> = ({ element }) => {
  const editor = useSlate();
  const { removeVideoBlock } = useCustomEditor();

  const path = ReactEditor.findPath(editor, element);

  const onRemoved = (): void => {
    removeVideoBlock(editor, path);
  };

  return (
    <div className="EditorVideo" contentEditable={false}>
      <Cross className="EditorVideo-iconRemove" onClick={onRemoved} />
      <iframe
        src={`https://www.youtube.com/embed/${element.videoId}?controls=0`}
        allow="modestbranding"
        aria-label="Youtube video"
        frameBorder="0"
      ></iframe>
    </div>
  );
};
