import React from 'react';

export const EditorCode: React.FC = ({ children }) => (
  <pre className="EditorCode">
    <code>{children}</code>
  </pre>
);
