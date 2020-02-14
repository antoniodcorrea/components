import React from 'react';
import './Text.less';

interface Props {
  children: React.ReactNode;
  size?: 'normal' | 'small' | 'micro' | 'nano';
  bold?: boolean;
  disabled?: boolean;
}

const Text: React.SFC<Props> = ({ children, size = 'normal', bold = false, disabled = false }) => (
  <span className={'Text' + (' Text-' + size) + (bold ? ' Text-bold' : '') + (disabled ? ' Text-disabled' : '')}>
    {children}
  </span>
);

export default Text;
