import React from 'react';

import './EditorUl.less';

interface Props {
  children: React.ReactNode;
}
export const EditorUl: React.FC<Props> = ({ children, ...props }) => (
  <ul className="EditorUl" {...props}>
    {children}
  </ul>
);
