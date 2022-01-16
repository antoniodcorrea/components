import React, { useEffect } from 'react';
import { Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';

import { HOVERING_TOOLBAR_ENABLED } from '../constants';
import { useCustomEditor } from '../useCustomEditor';
import Italic from '../../../assets/svg/italic.svg';
import Bold from '../../../assets/svg/bold.svg';
import Uppercase from '../../../assets/svg/uppercase.svg';

import './EditorToolbarHover.less';

export const EditorToolbarHover: React.FC = () => {
  const editor = useSlate();
  const { toggleFormat, isFormatActive } = useCustomEditor();

  useEffect(() => {
    const toolbarElement = document.getElementById('EditorToolbarHover');
    const { selection } = editor;

    if (!toolbarElement) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      toolbarElement.classList.remove('EditorToolbarHover--active');

      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();

    toolbarElement.classList.add('EditorToolbarHover--active');
    toolbarElement.style.top = `${rect.top + window.pageYOffset - toolbarElement.offsetHeight}px`;
    toolbarElement.style.left = `${rect.left + window.pageXOffset - toolbarElement.offsetWidth / 2 + rect.width / 2}px`;
  });

  const onMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();

    const toolbarElement = document.getElementById('EditorToolbarHover');
    toolbarElement.classList.remove('EditorToolbarHover--active');
  };

  const onFormatClick = (e: React.MouseEvent, format: string) => {
    e.preventDefault();

    toggleFormat(editor, format);
  };

  if (!HOVERING_TOOLBAR_ENABLED) return null;

  return (
    <div className="EditorToolbarHover" id="EditorToolbarHover" onMouseLeave={onMouseLeave}>
      <Bold
        className={
          'EditorToolbarHover-icon EditorToolbarHover-bold' +
          (isFormatActive(editor, 'bold') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'bold')}
      />
      <Italic
        className={
          'EditorToolbarHover-icon EditorToolbarHover-italic' +
          (isFormatActive(editor, 'italic') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'italic')}
      />
      <Uppercase
        className={
          'EditorToolbarHover-icon EditorToolbarHover-uppercase' +
          (isFormatActive(editor, 'uppercase') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'uppercase')}
      />
    </div>
  );
};
