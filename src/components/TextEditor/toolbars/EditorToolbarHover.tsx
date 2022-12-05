import React, { useEffect } from 'react';
import { Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';

import { HOVERING_TOOLBAR_ENABLED } from '../constants';
import { useCustomEditor } from '../hooks/useCustomEditor';
import Italic from '../../../assets/svg/italic.svg';
import Bold from '../../../assets/svg/bold.svg';
import Uppercase from '../../../assets/svg/uppercase.svg';
import Centered from '../../../assets/svg/centered.svg';
import Caption from '../../../assets/svg/caption.svg';
import Mark from '../../../assets/svg/mark.svg';
import Math from '../../../assets/svg/math.svg';
import Quote from '../../../assets/svg/quote.svg';

import './EditorToolbarHover.less';

export const EditorToolbarHover: React.FC = () => {
  const editor = useSlate();
  const { toggleFormat, isFormatActive, isBlockActive, toggleBlock } = useCustomEditor();

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

    const textEditorElement = document.getElementById('TextEditor');
    const textEditorRect = textEditorElement.getBoundingClientRect();

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const domSelectionRect = domRange.getBoundingClientRect();

    toolbarElement.classList.add('EditorToolbarHover--active');

    const toolbarHoverTop = domSelectionRect.top - textEditorRect.top - toolbarElement.offsetHeight;
    const toolbarHoverLeft =
      domSelectionRect.left - textEditorRect.left - toolbarElement.offsetWidth / 2 + domSelectionRect.width / 2;
    toolbarElement.style.top = `${toolbarHoverTop}px`;
    toolbarElement.style.left = `${toolbarHoverLeft}px`;
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

  const onBlockClick = (e: React.MouseEvent, block: string) => {
    e.preventDefault();

    toggleBlock(editor, block);
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
      <Centered
        className={
          'EditorToolbarHover-icon EditorToolbarHover-centered' +
          (isBlockActive(editor, 'centered') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'centered')}
      />
      <Mark
        className={
          'EditorToolbarHover-icon EditorToolbarHover-mark' +
          (isFormatActive(editor, 'mark') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'mark')}
      />
      <Caption
        className={
          'EditorToolbarHover-icon EditorToolbarHover-caption' +
          (isBlockActive(editor, 'caption') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'caption')}
      />
      <Math
        className={
          'EditorToolbarHover-icon EditorToolbarHover-mathBlock' +
          (isFormatActive(editor, 'mathInline') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'mathInline')}
      />
      <Quote
        className={
          'EditorToolbarHover-icon EditorToolbarHover-quote' +
          (isBlockActive(editor, 'quote') ? ' EditorToolbarHover-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'quote')}
      />
    </div>
  );
};
