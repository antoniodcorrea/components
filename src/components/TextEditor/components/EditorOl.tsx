import React from 'react';

import './EditorOl.less';

interface Props {
  children: React.ReactNode;
}
export const EditorOl: React.FC<Props> = ({ children, ...props }) => (
  <ol className="EditorOl" {...props}>
    {children}
  </ol>
);
