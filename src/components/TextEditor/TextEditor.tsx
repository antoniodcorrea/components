import React, { useEffect, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

import { PLACEHOLDER_TEXT } from './constants';
import { EditorToolbar } from './toolbars/EditorToolbar';
import { EditorToolbarHover } from './toolbars/EditorToolbarHover';
import { ImageUpload, TextEditorValue } from './types';
import { useComponentRenders } from './useComponentRenders';
import { useEvents } from './useEvents';
import { useWrappers } from './useWrappers';
export { toHtml } from './toHtml';

import { withMarkdown } from './plugins/withMarkdown';
import { withLists } from './plugins/withLists';
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
  const [loaded, setLoaded] = useState(false);
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

  useEffect(() => {
    const wrapper = document.getElementById('TextEditor');
    const childImgs = wrapper?.getElementsByTagName('img') || [];
    const imagesArray = Array.from(childImgs);

    imagesArray?.forEach((element) => element.decode().then(() => element.classList.add('TextEditor-image--loaded')));
  }, [localValue]);

  // Avoid empty array as value using a default one
  const setLocalValueOrDefault = (value: Descendant[]) => {
    onChange(value);
    setLocalValue(value);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Bug on recent versions when initializing state from API
  // https://github.com/ianstormtaylor/slate/issues/4612
  // https://github.com/ianstormtaylor/slate/pull/4540#issuecomment-951380551
  // Viable fix:
  // 1. defer rendering to available state: if (!value) return <div />;
  // 2. editor.children within useEffect
  useEffect(() => {
    if (!!initialValue) {
      editor.children = initialValue;
    } else if (!initialValue) {
      setLocalValueOrDefault(textEditorDefaultValue);
      editor.children = textEditorDefaultValue; // Avoid force updating state if no value
    }
  }, [initialValue]);

  if (!initialValue && !!localValue) return null;

  // Don't render on server side
  if (!loaded) return null;

  return (
    <div className="TextEditor" id="TextEditor">
      <Slate editor={editor} value={localValue} onChange={setLocalValueOrDefault}>
        <EditorToolbarHover />
        <EditorToolbar />
        <Editable
          placeholder={PLACEHOLDER_TEXT}
          className={'TextEditor-textBox' + (className ? ` ${className}` : '')}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={onKeyDown}
        />
      </Slate>
    </div>
  );
};
