import React from 'react';
import './H3.less';

interface Props {
  children: React.ReactNode;
}

const H3: React.SFC<Props> = ({ children }) => <span className="H3">{children}</span>;

export default H3;
