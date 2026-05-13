import React, { useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

import { DEFAULT_LIMIT_AMOUNT_IMAGES, PLACEHOLDER_TEXT, TEXT_EDITOR_EMPTY_VALUE } from './constants';
import { EditorToolbar } from './toolbars/EditorToolbar';
import { EditorToolbarHover } from './toolbars/EditorToolbarHover';
import { ImageUpload, TextEditorValue } from './types';
import { useComponentRenders } from './hooks/useComponentRenders';
import { useEvents } from './hooks/useEvents';
import { useWrappers } from './hooks/useWrappers';
import { withHistory } from 'slate-history';
export { toHtml } from './toHtml';
import { withLists } from './plugins/withLists';
import { withMarkdown } from './plugins/withMarkdown';
import { ErrorBoundary } from '../ErrorBoundary';

import { textEditorValidateAmountImages } from './utils/textEditorValidateAmountImages';

import './TextEditor.less';

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
  initialValue = TEXT_EDITOR_EMPTY_VALUE,
  imageUploadService,
  onChange,
  limitAmountImages = DEFAULT_LIMIT_AMOUNT_IMAGES,
  validatedImagesCallback = () => {},
  onDraggingFileEndCallback = () => {},
}) => {
  const normalizedInitialValue = initialValue.length === 0 ? TEXT_EDITOR_EMPTY_VALUE : initialValue;

  const { withInlinesWrapper, withHistoryWrapper, withCorrectVoidBehavior, withImages } =
    useWrappers(imageUploadService);
  const [editor] = useState(() =>
    withImages(
      withCorrectVoidBehavior(
        withHistoryWrapper(withInlinesWrapper(withLists(withMarkdown(withHistory(withReact(createEditor()))))))
      ),
      limitAmountImages
    )
  );
  const { renderElement, renderLeaf } = useComponentRenders(imageUploadService);
  const { onKeyDown } = useEvents(editor);

  const onDragOver = () => {
    const validatedImages = textEditorValidateAmountImages(initialValue, limitAmountImages);
    validatedImagesCallback(validatedImages);
  };

  const onDraggingFileEnd = () => {
    onDraggingFileEndCallback();
  };

  const setLocalValueOrDefault = (value: Descendant[]) => {
    onChange(value);
  };

  return (
    <div className={'TextEditor' + (className ? ` ${className}` : '')} id="TextEditor" key={normalizedInitialValue.toString()}>
      <Slate editor={editor} initialValue={normalizedInitialValue} onChange={setLocalValueOrDefault}>
        <EditorToolbarHover />
        <EditorToolbar />
        <ErrorBoundary message="Something went wrong">
          <Editable
            placeholder={PLACEHOLDER_TEXT}
            className={'TextEditor-textBox'}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            renderPlaceholder={({ children, attributes }) => (
              <span {...attributes} style={{ ...attributes.style, top: 'unset' }}>
                {children}
              </span>
            )}
            onKeyDown={onKeyDown}
            onDragOver={onDragOver}
            onMouseLeave={onDraggingFileEnd}
            onDragEnd={onDraggingFileEnd}
            onDragLeave={onDraggingFileEnd}
            onMouseOut={onDraggingFileEnd}
          />
        </ErrorBoundary>
      </Slate>
    </div>
  );
};
