import React from 'react';

import './EditorCaption.less';

interface Props {
  children: React.ReactNode;
}

export const EditorCaption: React.FC<Props> = ({ children }) => (
  <figcaption className="EditorCaption">{children}</figcaption>
);
