import React from 'react';

export const EditorLi: React.FC = ({ children, ...props }) => (
  <li className="EditorLi" {...props}>
    {children}
  </li>
);
