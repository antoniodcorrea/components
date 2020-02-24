import React from 'react';
import './Border.less';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  padding?: 'small' | 'normal' | 'big';
}

export const Border: React.FC<Props> = ({ children, padding = 'normal' }) => (
  <div className={'Border' + (padding ? ' Border-' + padding : '')}>{children}</div>
);
