import React from 'react';
import './H3.less';

interface Props {
  children: React.ReactNode;
}

const H3: React.SFC<Props> = ({ children }) => <h3 className="H3">{children}</h3>;

export default H3;
