import { Editor, Element, Node as SlateNode, Path, Range, Text, Transforms } from 'slate';

import { unSetList } from '../plugins/withLists';
import { AnchorElement } from '../types/AnchorElement';
import { ImageElement } from '../types/ImageElement';
import { ParagraphElement } from '../types/ParagraphElement';
import { TextElement } from '../types/TextElement';

type UseCustomEditor = () => {
  breakLine: (editor: Editor) => void;
  insertTab: (editor: Editor) => void;
  isBlockActive: (editor: Editor, blockType: string) => boolean;
  toggleBlock: (editor: Editor, blockType: string) => void;
  toggleUl: (editor: Editor, blockType: string) => void;
  wrapLink: (editor: Editor, url: string) => void;
  unWrapLink: (editor: Editor) => void;
  toggleFormat: (editor: Editor, format: string) => void;
  isFormatActive: (editor: Editor, format: string) => boolean;
  canInsertImageBlockFromToolbar: (editor: Editor) => boolean;
  insertImageBlockFromToolbar: (editor: Editor) => void;
  updateImageBlock: (editor: Editor, element: ImageElement, path: number[]) => void;
  removeImageBlock: (editor: Editor, path: number[]) => void;
  insertImageBlockFromUserSelect: (editor: Editor, src: string | ArrayBuffer) => void;
};

export const useCustomEditor: UseCustomEditor = () => {
  const insertTab = (editor: Editor) => {
    Transforms.insertText(editor, '\u2005\u2005');
  };

  const breakLine = (editor: Editor) => {
    Transforms.insertText(editor, '\n\u2060');
  };

  const isBlockActive = (editor: Editor, blockType: string): boolean => {
    const [match] = Editor.nodes(editor, {
      match: (node: ParagraphElement) => node.type === blockType,
    });

    return !!match;
  };

  const toggleUl = (editor: Editor, blockType: string): void => {
    const isActive = isBlockActive(editor, blockType);
    const path = editor.selection.anchor.path;
    const node = SlateNode.get(editor, path);

    if (isActive) {
      unSetList(editor);

      return;
    }

    const newNode = {
      type: 'bulleted-list',
      children: [
        {
          type: 'list-item',
          children: [
            {
              code: true,
              ...node,
            },
          ],
        },
      ],
    };
    const parentPath = Path.parent(path);
    Transforms.removeNodes(editor, { at: parentPath });
    Transforms.insertNodes(editor, newNode, { at: parentPath });

    return;
  };

  const toggleBlock = (editor: Editor, blockType: string): void => {
    const isActive = isBlockActive(editor, blockType);

    Transforms.setNodes(
      editor,
      {
        type: isActive ? null : blockType,
      },
      {
        match: (node) => Editor.isBlock(editor, node),
      }
    );
  };

  const canInsertImageBlockFromToolbar = (editor: Editor): boolean => {
    const [match] = Editor.nodes(editor, {
      match: (node: ParagraphElement | ImageElement) =>
        Editor.isBlock(editor, node) &&
        (node.type === 'paragraph' || node.type === 'image' || !node.type) &&
        node.children[0].text === '',
    });

    return !!match;
  };

  const insertImageBlockFromToolbar = (editor: Editor): void => {
    const isActive = isBlockActive(editor, 'image');
    const image: ImageElement = {
      type: isActive ? null : 'image',
      image: {
        original: '',
      },
    };

    Transforms.setNodes(editor, image, {
      match: (node) =>
        // Add nodes only when selected block is either paragraph or has no node type, and has no content
        Editor.isBlock(editor, node) && (node.type === 'paragraph' || !node.type) && node.children[0].text === '',
    });
  };

  const insertImageBlockFromUserSelect = (editor: Editor, src: string | ArrayBuffer): void => {
    const image: ImageElement = {
      type: 'image',
      image: {
        original: src,
      },
      children: [
        {
          type: 'text',
          text: '',
        },
      ],
    };

    Transforms.insertNodes(editor, image, {
      match: (node) =>
        // Add nodes only when selected block is either paragraph or has no node type, and has no content
        Editor.isBlock(editor, node) && (node.type === 'paragraph' || !node.type) && node.children[0].text === '',
    });
  };

  const updateImageBlock = (editor: Editor, element: ImageElement, path: number[]): void => {
    Transforms.removeNodes(editor, { at: path });
    Transforms.insertNodes(editor, element, { at: path });
  };

  const removeImageBlock = (editor: Editor, path: number[]): void => {
    const text = {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    };
    Transforms.removeNodes(editor, { at: path });
    Transforms.insertNodes(editor, text, { at: path });
  };

  const wrapLink = (editor: Editor, url: string): void => {
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const link: AnchorElement = {
      type: 'link',
      url,
      children: isCollapsed ? [{ text: url, type: 'text' }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: 'end' });
    }
  };

  const unWrapLink = (editor: Editor): void => {
    Transforms.unwrapNodes(editor, {
      match: (node) => !Editor.isEditor(node) && Element.isElement(node) && node.type === 'link',
    });
  };

  const toggleFormat = (editor: Editor, format: string): void => {
    const isActive = isFormatActive(editor, format);
    Transforms.setNodes(
      editor,
      {
        [format]: isActive ? null : true,
      },
      {
        match: Text.isText,
        split: true,
      }
    );
  };

  const isFormatActive = (editor: Editor, format: string): boolean => {
    const [match] = Editor.nodes(editor, {
      match: (node: TextElement) => node[format] === true,
      mode: 'all',
    });

    return !!match;
  };

  return {
    insertTab,
    breakLine,
    isBlockActive,
    toggleBlock,
    toggleUl,
    wrapLink,
    unWrapLink,
    toggleFormat,
    isFormatActive,
    canInsertImageBlockFromToolbar,
    insertImageBlockFromToolbar,
    insertImageBlockFromUserSelect,
    updateImageBlock,
    removeImageBlock,
  };
};
