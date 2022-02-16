import React, { HTMLProps, useState } from 'react';
import EyeSmall from '../../assets/svg/eyeSmall.svg';

import { Space } from '..';

import './Input.less';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'autoComplete'> {
  name: string;
  placeholder?: string;
  value?: string | number;
  label?: string;
  className?: string;
  autoComplete?: boolean;
  spellCheck?: boolean;
  readOnly?: boolean;
  error?: boolean | string;
  success?: boolean;
  disabled?: boolean;
  grow?: boolean;
  type?: 'text' | 'date' | 'input' | 'password' | 'email' | 'number' | 'tel' | 'url';
  pattern?: string;
  autoFocus?: boolean;
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
  autoFocus,
  pattern,
  type,
  placeholder = '',
  ...props
}) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const computedType = type === 'password' && passwordShown ? 'text' : type;

  return (
    <div
      className={
        'Input ' +
        (className ? className : '') +
        (!!error ? ' Input--error' : '') +
        (success ? ' Input--success' : '') +
        (disabled ? ' Input--disabled' : '') +
        (readOnly ? ' Input--readOnly' : '') +
        (grow ? ' Input--grow' : '')
      }
    >
      {label && (
        <label className="Input-label" htmlFor={'Input-' + name}>
          {label}
        </label>
      )}
      <div className="Input-inputWrapper">
        <input
          name={name}
          className="Input-input"
          id={'Input-' + name}
          value={value}
          placeholder={placeholder}
          size={1} // Fix for Firefox. Input width changes with font-size size https://stackoverflow.com/questions/49284045/why-does-font-size-increase-an-inputs-width
          autoComplete={autoComplete ? 'on' : 'off'}
          required
          spellCheck={spellCheck ? 'true' : 'false'}
          disabled={disabled}
          readOnly={readOnly}
          type={computedType}
          pattern={pattern}
          autoFocus={autoFocus}
          results={2}
          {...props}
        />
        {type === 'password' && !!value && (
          <EyeSmall
            className="Input-passwordShowIcon"
            onMouseDown={() => {
              setPasswordShown(true);
            }}
            onMouseUp={() => {
              setPasswordShown(false);
            }}
          />
        )}
      </div>
      <div className="Input-errorContent">
        {error}
        {/* Space to force height when there is no error present */}
        <Space />
      </div>
    </div>
  );
};
