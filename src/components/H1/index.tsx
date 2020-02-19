import React from 'react';
import './H1.less';

interface Props {
  children: React.ReactNode;
}

export const H1: React.SFC<Props> = ({ children }) => <h1 className={'H1'}>{children}</h1>;
