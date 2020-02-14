import React from 'react';
import './H2.less';

interface Props {
  children: React.ReactNode;
}

const H1: React.SFC<Props> = ({ children }) => <span className="H2">{children}</span>;

export default H1;
