import { Span, SpanSize } from '../Span';
import React from 'react';

import './Ellipsis.less';

interface Props {
  size?: SpanSize;
}

export const Ellipsis: React.FC<Props> = ({ size }) => (
  <Span className="Ellipsis" size={size}>
    <span className="Ellipsis-dot1">.</span>
    <span className="Ellipsis-dot2">.</span>
    <span className="Ellipsis-dot3">.</span>
  </Span>
);
