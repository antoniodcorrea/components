import React from 'react';
import './H3.less';

interface Props {
  children: React.ReactNode;
}

export const H3: React.SFC<Props> = ({ children }) => <h3 className="H3">{children}</h3>;
