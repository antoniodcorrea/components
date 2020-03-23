import React from 'react';
import './H4.less';

interface Props {
  children: React.ReactNode;
}

export const H4: React.FC<Props> = ({ children }) => <h4 className="H4">{children}</h4>;
