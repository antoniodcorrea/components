import React from 'react';
import './H1.less';

interface Props {
  children: React.ReactNode;
}

const H1: React.SFC<Props> = ({ children }) => <h1 className={'H1'}>{children}</h1>;

export default H1;
