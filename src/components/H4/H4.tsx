import React from 'react';
import './H4.less';

interface Props {
  children: React.ReactNode;
}

const H4: React.SFC<Props> = ({ children }) => <span className="H4">{children}</span>;

export default H4;
