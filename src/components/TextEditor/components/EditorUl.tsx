import React from 'react';

import './EditorUl.less';

export const EditorUl: React.FC = ({ children, ...props }) => (
  <ul className="EditorUl" {...props}>
    {children}
  </ul>
);
