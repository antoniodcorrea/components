import React from 'react';

export const EditorOl: React.FC = ({ children, ...props }) => (
  <ol className="EditorOl" {...props}>
    {children}
  </ol>
);
