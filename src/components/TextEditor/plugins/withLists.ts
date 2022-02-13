// Taken from https://www.npmjs.com/package/@york-ie-labs/slate-lists
// Edited and refactored
import { Editor, Transforms, Range, Point } from 'slate';
import { CustomElementType } from '../types';

const defaultMax = 5;

// withLists handles behavior regarding ol and ul lists
// more specifically, withLists properly exits the list with `enter` or `backspace`
// from an empty list item, transforming the node to a paragraph
const withLists = (editor: Editor): Editor => {
  const { insertBreak, deleteBackward } = editor;

  const backspace = (callback) => {
    const { selection } = editor;

    // check that there is a current selection without highlight
    if (selection && Range.isCollapsed(selection)) {
      // find the 'closest' `list-item` element
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          n.type === 'list-item' && n.children && n.children[0] && (!n.children[0].text || n.children[0].text === ''),
      });

      // check that there was a match
      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);

        // if the selection is at the beginning of the list item
        if (Point.equals(selection.anchor, start)) {
          // 'lift' the list-item to the next parent
          liftNodes(editor);
          // check for the new parent
          const [listMatch] = Editor.nodes(editor, {
            match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
          });
          // if it is no longer within a ul/ol, turn the element into a normal paragraph
          if (!listMatch) {
            Transforms.setNodes(editor, { type: 'paragraph' }, { match: (n) => n.type === 'list-item' });
          }

          return;
        }
      }
    }

    callback();
  };

  // override editor function for break
  editor.insertBreak = () => {
    backspace(insertBreak);
  };

  // override editor function for a backspace
  editor.deleteBackward = (unit) => {
    backspace(() => deleteBackward(unit));
  };

  return editor;
};

const liftNodes = (editor) => {
  // check for the new parent
  const [listMatch] = Editor.nodes(editor, {
    match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
  });
  // verify there is a list to lift the nodes
  if (listMatch) {
    // 'lift' the list-item to the next parent
    Transforms.liftNodes(editor, { match: (n) => n.type === 'list-item' });
  }
};

const undentItem = (editor: Editor): void => {
  const { selection } = editor;

  // check that there is a current selection without highlight
  if (selection && Range.isCollapsed(selection)) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'list-item',
    });

    // check that there was a match
    if (match) {
      // 'lift' the list-item to the next parent
      liftNodes(editor);
      // check for the new parent
      const [listMatch] = Editor.nodes(editor, {
        match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
      });
      // if it is no longer within a ul/ol, turn the element into a normal paragraph
      if (!listMatch) {
        Transforms.setNodes(editor, { type: 'paragraph' }, { match: (n) => n.type === 'list-item' });
      }
    }
  }
};

const indentItem = (editor: Editor, maxDepth = defaultMax): void => {
  const { selection } = editor;

  // check that there is a current selection without highlight
  if (selection && Range.isCollapsed(selection)) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'list-item',
    });

    // check that there was a match
    if (match) {
      // wrap the list item into another list to indent it within the DOM
      const [listMatch] = Editor.nodes(editor, {
        mode: 'lowest',
        match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
      });

      if (listMatch) {
        const depth = listMatch[1].length;
        if (depth <= maxDepth) {
          Transforms.wrapNodes(editor, {
            type: listMatch[0].type as CustomElementType,
            children: [],
          });
        }
      }
    }
  }
};

const unSetList = (editor: Editor): void => {
  const { selection } = editor;

  if (selection && Range.isCollapsed(selection)) {
    const match = Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
    });

    if (match) {
      const [block] = match;

      Transforms.setNodes(editor, { type: 'paragraph' });

      if (block.type === 'list-item') {
        Transforms.unwrapNodes(editor, {
          match: (node) => node.type === 'bulleted-list' || node.type === 'numbered-list',
          split: true,
        });
      }

      return;
    }
  }
};

export { withLists, indentItem, undentItem, unSetList };
