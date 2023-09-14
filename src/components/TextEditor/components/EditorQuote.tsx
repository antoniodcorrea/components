import React from 'react';

import './EditorQuote.less';

interface Props {
  children: React.ReactNode;
}
export const EditorQuote: React.FC<Props> = ({ children }) => (
  <blockquote className="EditorQuote">{children}</blockquote>
);
