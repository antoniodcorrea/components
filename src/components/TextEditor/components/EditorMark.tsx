import React from 'react';

import './EditorMark.less';

interface Props {
  children: React.ReactNode;
}
export const EditorMark: React.FC<Props> = ({ children }) => <mark className="EditorMark">{children}</mark>;
