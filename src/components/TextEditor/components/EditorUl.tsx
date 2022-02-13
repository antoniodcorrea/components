import React from 'react';

export const EditorUl: React.FC = ({ children, ...props }) => (
  <ul className="EditorUl" {...props}>
    {children}
  </ul>
);
