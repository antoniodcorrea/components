import React from 'react';

import './EditorLi.less';

interface Props {
  children: React.ReactNode;
}
export const EditorLi: React.FC<Props> = ({ children, ...props }) => (
  <li className="EditorLi" {...props}>
    {children}
  </li>
);
