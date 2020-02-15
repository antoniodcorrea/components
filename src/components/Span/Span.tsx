import React from 'react';
import './Span.less';

interface Props {
  children: React.ReactNode;
  size?: 'normal' | 'small' | 'micro' | 'nano';
  bold?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
  className?: string;
}

const Span: React.SFC<Props> = ({
  children,
  size = 'normal',
  bold = false,
  disabled = false,
  uppercase = false,
  className,
}) => (
  <span
    className={
      'Span' +
      (' Span-' + size) +
      (bold ? ' Span--bold' : '') +
      (disabled ? ' Span--disabled' : '') +
      (uppercase ? ' Span--uppercase' : '') +
      (className ? ' ' + className : '')
    }
  >
    {children}
  </span>
);

export default Span;
