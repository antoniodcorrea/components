import React from 'react';
import './H2.less';

interface Props {
  children: React.ReactNode;
}

const H1: React.SFC<Props> = ({ children }) => <h2 className="H2">{children}</h2>;

export default H1;
