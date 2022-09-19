import React from 'react';

import './EditorLi.less';

export const EditorLi: React.FC = ({ children, ...props }) => (
  <li className="EditorLi" {...props}>
    {children}
  </li>
);
