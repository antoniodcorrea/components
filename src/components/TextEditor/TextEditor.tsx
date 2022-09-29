import React, { useEffect, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

import { DEFAULT_LIMIT_AMOUNT_IMAGES, PLACEHOLDER_TEXT } from './constants';
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

import { textEditorValidateAmountImages } from './utils/textEditorValidateAmountImages';

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

export interface TextEditorProps {
  className?: string;
  initialValue: TextEditorValue;
  imageUploadService: ImageUpload;
  limitAmountImages?: number;
  validatedImagesCallback?: (trespassed: boolean) => void;
  onDraggingFileEndCallback?: () => void;
  onChange: (value: TextEditorValue) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({
  className,
  initialValue,
  imageUploadService,
  onChange,
  limitAmountImages = DEFAULT_LIMIT_AMOUNT_IMAGES,
  validatedImagesCallback = () => {},
  onDraggingFileEndCallback = () => {},
}) => {
  const forceUpdate = useForceUpdate();
  const [loaded, setLoaded] = useState(false);
  const { withInlinesWrapper, withHistoryWrapper, withCorrectVoidBehavior, withImages } =
    useWrappers(imageUploadService);
  const [editor] = useState(() =>
    withMarkdown(
      withInlinesWrapper(
        withImages(withCorrectVoidBehavior(withHistoryWrapper(withLists(withReact(createEditor())))), limitAmountImages)
      )
    )
  );
  const [localValue, setLocalValue] = useState<Descendant[]>(textEditorDefaultValue);
  const { renderElement, renderLeaf } = useComponentRenders(imageUploadService);
  const { onKeyDown } = useEvents(editor);

  const onDragOver = () => {
    const validatedImages = textEditorValidateAmountImages(localValue, limitAmountImages);

    validatedImagesCallback(validatedImages);
  };

  const onDraggingFileEnd = () => {
    onDraggingFileEndCallback();
  };

  // Avoid empty array as value using a default one
  const setLocalValueOrDefault = (value: Descendant[]) => {
    onChange(value);
    setLocalValue(value);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!!initialValue) {
      editor.children = initialValue;
    } else if (!initialValue && !localValue.length) {
      setLocalValueOrDefault(textEditorDefaultValue);
      editor.children = textEditorDefaultValue; // Avoid force updating state if no value
    }
  }, [initialValue]);

  // «The PR #4540 removed the ability to update the slate state using the value prop. As a result, we cannot inject externally changed state anymore.»
  // https://github.com/ianstormtaylor/slate/issues/4612#issuecomment-1041971128
  useEffect(() => {
    editor.children = initialValue;
    forceUpdate();
  }, [editor, initialValue, forceUpdate]);

  if (!initialValue && !localValue) return null;
  if (!loaded) return null;

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
            onDragOver={onDragOver}
            onMouseLeave={onDraggingFileEnd}
            onDragEnd={onDraggingFileEnd}
            onDragLeave={onDraggingFileEnd}
          />
        </ErrorBoundary>
      </Slate>
    </div>
  );
};
