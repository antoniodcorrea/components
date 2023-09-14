import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const EditorUnderlined: React.FC<Props> = ({ children }) => <u className="EditorUnderlined">{children}</u>;
