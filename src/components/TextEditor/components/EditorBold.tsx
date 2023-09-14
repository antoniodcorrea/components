import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const EditorBold: React.FC<Props> = ({ children }) => <strong>{children}</strong>;
