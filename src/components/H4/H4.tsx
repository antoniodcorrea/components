import React from 'react';
import './H4.less';

interface Props {
  children: React.ReactNode;
}

const Input: React.SFC<Props> = ({ children }) => <span className="H4">{children}</span>;

export default Input;
