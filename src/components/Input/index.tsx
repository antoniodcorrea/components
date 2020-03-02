import React from 'react';
import uniqueId from 'lodash/uniqueId';
import './Input.less';

interface Props {
  name: string;
  value?: string | number;
  label?: string;
  className?: string;
  autoComplete?: boolean;
  spellCheck?: boolean;
  readOnly?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  grow?: boolean;
  type?: string;
  pattern?: string;
  passedRef?: any;
  onChange?: (e) => void;
  onKeyPress?: (e) => void;
  onFocus?: (e) => void;
  onBlur?: (e) => void;
}

export const Input: React.FC<Props> = ({
  name,
  value = '',
  label,
  className,
  autoComplete = false,
  spellCheck = false,
  readOnly = false,
  error,
  success,
  disabled,
  grow,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  pattern,
  type,
  passedRef,
}) => {
  const id = uniqueId();

  return (
    <div
      className={
        'Input ' +
        (className ? className : '') +
        (error ? ' Input--error' : '') +
        (success ? ' Input--success' : '') +
        (disabled ? ' Input--disabled' : '') +
        (grow ? ' Input--grow' : '')
      }
    >
      <input
        name={name}
        className="Input-input"
        id={'Input-' + id}
        value={value}
        placeholder=" "
        autoComplete={autoComplete ? 'on' : 'off'}
        required
        spellCheck={spellCheck ? 'true' : 'false'}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        type={type}
        pattern={pattern}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={passedRef}
      />
      {label && (
        <label className="Input-label" htmlFor={'Input-' + id}>
          {label}
        </label>
      )}
    </div>
  );
};
