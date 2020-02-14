import React from 'react';
import './P.less';

interface Props {
  children: React.ReactNode;
  size?: 'normal' | 'small' | 'micro' | 'nano';
  bold: boolean;
}

const P: React.SFC<Props> = ({ children, size = 'normal', bold }) => (
  <span className={'P' + (' P-' + size) + (bold ? ' P-bold' : '')}>{children}</span>
);

export default P;
