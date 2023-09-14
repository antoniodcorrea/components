import React from 'react';

import './EditorCentered.less';

interface Props {
  children: React.ReactNode;
}
export const EditorCentered: React.FC<Props> = ({ children }) => <p className="EditorCentered centered">{children}</p>;
