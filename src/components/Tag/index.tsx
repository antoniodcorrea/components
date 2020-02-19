import React from 'react';
import './Tag.less';
import { Span } from '../Span';

interface Props {
  children: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
}

export const Tag: React.FC<Props> = ({ children, size = 'small', variant }) => (
  <div className={'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '')}>
    <div className="Tag-content">
      <Span size="micro" bold>
        {children}
      </Span>
    </div>
  </div>
);
