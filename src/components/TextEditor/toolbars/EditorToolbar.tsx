import React from 'react';
import { useSlate } from 'slate-react';

import { ENTER_URL_MESSAGE } from '../constants';
import { useCustomEditor } from '../useCustomEditor';
import Centered from '../../../assets/svg/centered.svg';
import Caption from '../../../assets/svg/caption.svg';
import Italic from '../../../assets/svg/italic.svg';
import Ul from '../../../assets/svg/ul.svg';
import Bold from '../../../assets/svg/bold.svg';
import Link from '../../../assets/svg/link.svg';
import Image from '../../../assets/svg/image.svg';
import Uppercase from '../../../assets/svg/uppercase.svg';
import Mark from '../../../assets/svg/mark.svg';
import CodeBlock from '../../../assets/svg/codeBlock.svg';
import H1 from '../../../assets/svg/iconH1.svg';
import H2 from '../../../assets/svg/iconH2.svg';
import Math from '../../../assets/svg/math.svg';

import './EditorToolbar.less';

export const EditorToolbar: React.FC = () => {
  const editor = useSlate();

  const {
    isBlockActive,
    isFormatActive,
    wrapLink,
    unWrapLink,
    toggleBlock,
    toggleFormat,
    insertImageBlockFromToolbar,
    toggleUl,
  } = useCustomEditor();

  const onFormatClick = (e: React.MouseEvent, format: string) => {
    e.preventDefault();
    toggleFormat(editor, format);
  };

  const onBlockClick = (e: React.MouseEvent, block: string) => {
    e.preventDefault();
    toggleBlock(editor, block);
  };

  const onBlockUlClick = (e: React.MouseEvent, block: string) => {
    e.preventDefault();
    toggleUl(editor, block);
  };

  const onImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    insertImageBlockFromToolbar(editor);
  };

  const onLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const linkBlockActive = isBlockActive(editor, 'link');

    if (linkBlockActive) {
      unWrapLink(editor);

      return;
    }

    const url = window.prompt(ENTER_URL_MESSAGE);
    if (!url) return;

    wrapLink(editor, url);
  };

  return (
    <div className="EditorToolbar">
      <Bold
        className={
          'EditorToolbar-icon EditorToolbar-bold' +
          (isFormatActive(editor, 'bold') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'bold')}
      />
      <Italic
        className={
          'EditorToolbar-icon EditorToolbar-italic' +
          (isFormatActive(editor, 'italic') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'italic')}
      />
      <Uppercase
        className={
          'EditorToolbar-icon EditorToolbar-uppercase' +
          (isFormatActive(editor, 'uppercase') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'uppercase')}
      />
      <Ul
        className={
          'EditorToolbar-icon EditorToolbar-ul' +
          (isBlockActive(editor, 'bulleted-list') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockUlClick(e, 'bulleted-list')}
      />
      <Link
        className={
          'EditorToolbar-icon EditorToolbar-link' + (isBlockActive(editor, 'link') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={onLinkClick}
      />
      <Mark
        className={
          'EditorToolbar-icon EditorToolbar-mark' +
          (isFormatActive(editor, 'mark') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onFormatClick(e, 'mark')}
      />
      <CodeBlock
        className={
          'EditorToolbar-icon EditorToolbar-codeBlock' +
          (isBlockActive(editor, 'code') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'code')}
      />
      <Math
        className={
          'EditorToolbar-icon EditorToolbar-mathBlock' +
          (isBlockActive(editor, 'math') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'math')}
      />
      <H1
        className={
          'EditorToolbar-icon EditorToolbar-h1' + (isBlockActive(editor, 'h1') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'h1')}
      />
      <H2
        className={
          'EditorToolbar-icon EditorToolbar-h2' + (isBlockActive(editor, 'h2') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'h2')}
      />
      <Centered
        className={
          'EditorToolbar-icon EditorToolbar-centered' +
          (isBlockActive(editor, 'centered') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'centered')}
      />
      <Image
        className={
          'EditorToolbar-icon EditorToolbar-image' +
          (isBlockActive(editor, 'image') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={onImageClick}
      />
      <Caption
        className={
          'EditorToolbar-icon EditorToolbar-caption' +
          (isBlockActive(editor, 'caption') ? ' EditorToolbar-icon--active' : '')
        }
        onClick={(e) => onBlockClick(e, 'caption')}
      />
    </div>
  );
};
