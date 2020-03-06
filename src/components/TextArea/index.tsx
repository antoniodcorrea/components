import React from 'react';
import uniqueId from 'lodash/uniqueId';
import TextareaAutosize from 'react-textarea-autosize';
import './TextArea.less';

interface Props {
  name: string;
  value?: string;
  label?: string;
  className?: string;
  spellCheck?: boolean;
  readOnly?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  grow?: boolean;
  onChange?: (e) => void;
}

export const TextArea: React.FC<Props> = ({
  name,
  value = '',
  label,
  className,
  spellCheck = false,
  readOnly = false,
  error,
  success,
  disabled,
  grow,
  onChange,
}) => {
  const id = uniqueId();

  return (
    <div
      className={
        'TextArea ' +
        (className ? className : '') +
        (error ? ' TextArea--error' : '') +
        (success ? ' TextArea--success' : '') +
        (disabled ? ' TextArea--disabled' : '') +
        (readOnly ? ' TextArea--readOnly' : '') +
        (grow ? ' TextArea--grow' : '')
      }
    >
      <TextareaAutosize
        id={'Input-' + id}
        className="TextArea-textArea"
        value={value}
        onChange={onChange}
        placeholder=" "
        spellCheck={spellCheck}
      />
      {label && (
        <label className="TextArea-label" htmlFor={'Input-' + id}>
          {label}
        </label>
      )}
    </div>
  );
};
