import React from 'react';

import './EditorH1.less';

interface Props {
  children: React.ReactNode;
}

export const EditorH1: React.FC<Props> = ({ children }) => <h1 className="EditorH1">{children}</h1>;
