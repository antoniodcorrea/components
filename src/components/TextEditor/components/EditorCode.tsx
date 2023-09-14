import React from 'react';

import './EditorCode.less';

interface Props {
  children: React.ReactNode;
}

export const EditorCode: React.FC<Props> = ({ children }) => (
  <pre className="EditorCode">
    <code>{children}</code>
  </pre>
);
