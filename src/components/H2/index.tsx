import React from 'react';
import './H2.less';

interface Props {
  children: React.ReactNode;
}

export const H2: React.SFC<Props> = ({ children }) => <h2 className="H2">{children}</h2>;
