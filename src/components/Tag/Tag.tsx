import React from 'react';
import './Tag.less';

interface Props {
  children: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'high' | 'low';
}

const Tag: React.FC<Props> = ({ children, size = 'small', variant = 'high' }) => {
  return (
    <div className={'Tag ' + (size ? 'Tag--' + size : '') + (variant ? 'Tag--' + variant : '')}>
      <div className="Tag-content">{children}</div>
    </div>
  );
};

export default Tag;
