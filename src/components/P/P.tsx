import React from 'react';
import './P.less';

interface Props {
  children: React.ReactNode;
  size?: 'normal' | 'small' | 'micro' | 'nano';
}

const Input: React.SFC<Props> = ({ children, size = 'normal' }) => (
  <span className={'P' + (' P-' + size)}>{children}</span>
);

export default Input;
