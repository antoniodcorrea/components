import React from 'react';
import './H2.less';

interface Props {
  children: React.ReactNode;
}

const Input: React.SFC<Props> = ({ children }) => <span className="H2">{children}</span>;

export default Input;
