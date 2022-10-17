import { Editor, Node } from 'slate';

import { useCustomEditor } from './useCustomEditor';
import { indentItem, undentItem } from '../plugins/withLists';
type UseEvents = (editor: Editor) => {
  onKeyDown: (e: React.KeyboardEvent) => void;
};

export const useEvents: UseEvents = (editor) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    const { toggleFormat, breakLine, breakParagraph, insertTab } = useCustomEditor();

    const node = Node.parent(editor, editor.selection.anchor.path);

    if (event.key === 'Tab' && event.shiftKey && node.type === 'list-item') {
      event.preventDefault();
      undentItem(editor);

      return;
    }

    if (event.key === 'Tab' && node.type === 'list-item') {
      event.preventDefault();
      indentItem(editor);

      return;
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      breakParagraph(editor);

      return;
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      breakLine(editor);

      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      insertTab(editor);

      return;
    }

    if ((event.metaKey || event.ctrlKey) && (event.key === 'b' || event.key === 'i' || event.key === 'u')) {
      let key;

      switch (event.key) {
        case 'b':
          key = 'bold';

          break;
        case 'i':
          key = 'italic';

          break;
        case 'u':
          key = 'underlined';

          break;
      }

      event.preventDefault();
      toggleFormat(editor, key);

      return;
    }
  };

  return {
    onKeyDown,
  };
};
