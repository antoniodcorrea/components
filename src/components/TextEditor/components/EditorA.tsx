import React from 'react';

import { LinkElement } from '../types';

interface Props {
  children: React.ReactChildren;
  element: LinkElement;
}

export const EditorA: React.FC<Props> = ({ children, element }) => <a href={element.url}>{children}</a>;
