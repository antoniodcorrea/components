import React from 'react';
import './Code.less';

interface Props {
  children: React.ReactNode;
}

export const Code: React.SFC<Props> = ({ children }) => <pre className={'Code'}>{children}</pre>;
