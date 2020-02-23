import React from 'react';
import { Span } from '../Span';
import './Button.less';

interface Props {
  children: string | React.ReactNode | React.ReactNode[];
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  onClick?: (value) => void;
}

export const Button: React.FC<Props> = ({
  children,
  size = 'medium',
  variant,
  success,
  error,
  disabled,
  onClick,
}): JSX.Element => {
  return (
    <button
      className={
        'Button ' +
        (size ? 'Button--' + size : '') +
        (variant ? ' Button--' + variant : '') +
        (success ? ' Button--success' : '') +
        (error ? ' Button--error' : '') +
        (disabled ? ' Button--disabled' : '')
      }
      onClick={onClick}
    >
      <Span className="Button-content" bold uppercase>
        {children}
      </Span>
    </button>
  );
};
