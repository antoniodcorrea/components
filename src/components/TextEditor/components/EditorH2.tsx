import React from 'react';

import './EditorH2.less';

interface Props {
  children: React.ReactNode;
}

export const EditorH2: React.FC<Props> = ({ children }) => <h2 className="EditorH2">{children}</h2>;
