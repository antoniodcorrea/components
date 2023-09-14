import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const EditorItalic: React.FC<Props> = ({ children }) => <em className="EditorItalic">{children}</em>;
