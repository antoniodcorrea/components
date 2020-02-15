import React from 'react';
import './Layout.less';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<Props> = ({ children }) => <div className="Layout">{children}</div>;

export default Layout;
