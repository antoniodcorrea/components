import React from 'react';
import './H1.less';

interface Props {
  children: React.ReactNode;
  bold: boolean;
}

const H1: React.SFC<Props> = ({ children, bold }) => (
  <span className={'H1' + (bold ? ' H1-bold' : '')}>{children}</span>
);

export default H1;
