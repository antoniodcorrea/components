import React from 'react';
import './Tag.less';
import Span from '../Span/Span';

interface Props {
  children: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
}

const Tag: React.FC<Props> = ({ children, size = 'small', variant }) => {
  return (
    <div className={'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '')}>
      <div className="Tag-content">
        <Span size="micro" bold>
          {children}
        </Span>
      </div>
    </div>
  );
};

export default Tag;
