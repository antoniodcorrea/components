import React from 'react';
import './H4.less';

interface Props {
  children: React.ReactNode;
}

const H4: React.SFC<Props> = ({ children }) => <h4 className="H4">{children}</h4>;

export default H4;
