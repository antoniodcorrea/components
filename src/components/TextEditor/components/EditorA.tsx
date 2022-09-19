import React from 'react';

import { AnchorElement } from '../types/AnchorElement';

import './EditorA.less';

interface Props {
  children: React.ReactChildren;
  element: AnchorElement;
}

export const EditorA: React.FC<Props> = ({ children, element }) => (
  <a className="EditorA" href={element.url} target="_blank" rel="noreferrer">
    {children}
  </a>
);
