import React from 'react';
import './Text.less';

interface Props {
  children: React.ReactNode;
  size?: 'normal' | 'small' | 'micro' | 'nano';
  bold?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
  className?: string;
}

const Text: React.SFC<Props> = ({
  children,
  size = 'normal',
  bold = false,
  disabled = false,
  uppercase = false,
  className,
}) => (
  <span
    className={
      'Text' +
      (' Text-' + size) +
      (bold ? ' Text--bold' : '') +
      (disabled ? ' Text--disabled' : '') +
      (uppercase ? ' Text--uppercase' : '') +
      (className ? ' ' + className : '')
    }
  >
    {children}
  </span>
);

export default Text;
