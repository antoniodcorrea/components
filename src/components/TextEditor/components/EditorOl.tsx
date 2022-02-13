import React from 'react';

import './EditorOl.less';

export const EditorOl: React.FC = ({ children, ...props }) => (
  <ol className="EditorOl" {...props}>
    {children}
  </ol>
);
