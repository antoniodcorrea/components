import React from 'react';

import './EditorText.less';

interface Props {
  children: React.ReactNode;
}
export const EditorText: React.FC<Props> = ({ children }) => <p className="EditorText">{children}</p>;
