import React from 'react';
import './Button.less';
import Text from '../Text/Text';

interface Props {
  children: string | React.ReactNode | React.ReactNode[];
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, size = 'medium', variant, success, error, disabled }): JSX.Element => {
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
    >
      <Text className="Button-content" bold uppercase>
        {children}
      </Text>
    </button>
  );
};

export default Button;
