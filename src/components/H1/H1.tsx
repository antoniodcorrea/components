import React from 'react';
import './H1.less';

interface Props {
  children: React.ReactNode;
}

const Input: React.SFC<Props> = ({ children }) => <span className="H1">{children}</span>;

export default Input;
