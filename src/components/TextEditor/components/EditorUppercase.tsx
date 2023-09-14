import React from 'react';

import './EditorUppercase.less';

interface Props {
  children: React.ReactNode;
}
export const EditorUppercase: React.FC<Props> = ({ children }) => (
  <span className="EditorUppercase uppercase">{children}</span>
);
