import React, { useCallback } from 'react';

import { EditorA } from '../components/EditorA';
import { EditorBold } from '../components/EditorBold';
import { EditorCaption } from '../components/EditorCaption';
import { EditorCentered } from '../components/EditorCentered';
import { EditorCode } from '../components/EditorCode';
import { EditorH1 } from '../components/EditorH1';
import { EditorH2 } from '../components/EditorH2';
import { EditorImage } from '../components/EditorImage';
import { EditorItalic } from '../components/EditorItalic';
import { EditorLi } from '../components/EditorLi';
import { EditorMark } from '../components/EditorMark';
import { EditorMath } from '../components/EditorMath';
import { EditorOl } from '../components/EditorOl';
import { EditorQuote } from '../components/EditorQuote';
import { EditorText } from '../components/EditorText';
import { EditorUl } from '../components/EditorUl';
import { EditorUnderlined } from '../components/EditorUnderlined';
import { EditorUppercase } from '../components/EditorUppercase';
import { EditorMathInline } from '../components/EditorMathInline';
import { ImageUpload } from '../types';
import { EditorVideo } from '../components/EditorVideo';

type UseComponentRenders = (imageUploadService: ImageUpload) => {
  renderElement: (props) => React.ReactElement;
  renderLeaf: (props) => React.ReactElement;
};

export const useComponentRenders: UseComponentRenders = (imageUploadService: ImageUpload) => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'bulleted-list':
        return <EditorUl {...props.attributes}>{props.children}</EditorUl>;
      case 'numbered-list':
        return <EditorOl {...props.attributes}>{props.children}</EditorOl>;
      case 'list-item':
        return <EditorLi {...props.attributes}>{props.children}</EditorLi>;
      case 'text':
        return <EditorText>{props.children}</EditorText>;
      case 'paragraph':
        return <EditorText>{props.children}</EditorText>;
      case 'h1':
        return <EditorH1>{props.children}</EditorH1>;
      case 'h2':
        return <EditorH2>{props.children}</EditorH2>;
      case 'code':
        return <EditorCode>{props.children}</EditorCode>;
      case 'math':
        return <EditorMath>{props.children}</EditorMath>;
      case 'quote':
        return <EditorQuote>{props.children}</EditorQuote>;
      case 'link':
        return <EditorA element={props.element}>{props.children}</EditorA>;
      case 'centered':
        return <EditorCentered>{props.children}</EditorCentered>;
      case 'caption':
        return <EditorCaption>{props.children}</EditorCaption>;
      case 'image':
        return (
          <EditorImage
            element={props.element}
            ratio={props.element.ratio}
            {...props}
            imageUploadService={imageUploadService}
          />
        );
      case 'youtube':
        return <EditorVideo element={props.element} {...props} />;
      default:
        return <EditorText>{props.children}</EditorText>;
    }
  }, []);

  const renderLeaf = useCallback(({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <EditorBold>{children}</EditorBold>;
    }

    if (leaf.italic) {
      children = <EditorItalic>{children}</EditorItalic>;
    }

    if (leaf.underlined) {
      children = <EditorUnderlined>{children}</EditorUnderlined>;
    }

    if (leaf.uppercase) {
      children = <EditorUppercase>{children}</EditorUppercase>;
    }

    if (leaf.mark) {
      children = <EditorMark>{children}</EditorMark>;
    }
    if (leaf.mathInline) {
      children = <EditorMathInline>{children}</EditorMathInline>;
    }

    return <span {...attributes}>{children}</span>;
  }, []);

  return { renderElement, renderLeaf };
};
