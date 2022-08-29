import React, { useEffect, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

import { PLACEHOLDER_TEXT } from './constants';
import { useForceUpdate } from './hooks/useForceUpdate';
import { EditorToolbar } from './toolbars/EditorToolbar';
import { EditorToolbarHover } from './toolbars/EditorToolbarHover';
import { ImageUpload, TextEditorValue } from './types';
import { useComponentRenders } from './hooks/useComponentRenders';
import { useEvents } from './hooks/useEvents';
import { useWrappers } from './hooks/useWrappers';

export { toHtml } from './toHtml';

import { withLists } from './plugins/withLists';
import { withMarkdown } from './plugins/withMarkdown';
import { ErrorBoundary } from '../ErrorBoundary';

import './TextEditor.less';

export const textEditorDefaultValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: '',
      },
    ],
  },
];

interface Props {
  className?: string;
  initialValue: TextEditorValue;
  imageUploadService: ImageUpload;
  onChange: (value: TextEditorValue) => void;
}

export const TextEditor: React.FC<Props> = ({ className, initialValue, imageUploadService, onChange }) => {
  const forceUpdate = useForceUpdate();
  const { withInlinesWrapper, withHistoryWrapper, withCorrectVoidBehavior, withImages } =
    useWrappers(imageUploadService);
  const [editor] = useState(() =>
    withMarkdown(
      withImages(withInlinesWrapper(withCorrectVoidBehavior(withHistoryWrapper(withLists(withReact(createEditor()))))))
    )
  );
  const [localValue, setLocalValue] = useState<Descendant[]>(textEditorDefaultValue);
  const { renderElement, renderLeaf } = useComponentRenders(imageUploadService);
  const { onKeyDown } = useEvents(editor);

  // Avoid empty array as value using a default one
  const setLocalValueOrDefault = (value: Descendant[]) => {
    onChange(value);
    setLocalValue(value);
  };

  // «The PR #4540 removed the ability to update the slate state using the value prop. As a result, we cannot inject externally changed state anymore.»
  // https://github.com/ianstormtaylor/slate/issues/4612#issuecomment-1041971128
  useEffect(() => {
    editor.children = initialValue;
    forceUpdate();
  }, [editor, initialValue, forceUpdate]);

  if (!initialValue && !localValue) return null;

  return (
    <div className={'TextEditor' + (className ? ` ${className}` : '')} id="TextEditor">
      <Slate editor={editor} value={localValue} onChange={setLocalValueOrDefault}>
        <EditorToolbarHover />
        <EditorToolbar />
        <ErrorBoundary message="Something went wrong">
          <Editable
            placeholder={PLACEHOLDER_TEXT}
            className={'TextEditor-textBox'}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
          />
        </ErrorBoundary>
      </Slate>
    </div>
  );
};
