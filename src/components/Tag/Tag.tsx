import React from 'react';
import './Tag.less';

interface Props {
  children?: React.ReactNode;
  size?: string;
  variant?: string;
  state?: string;
}

const Tag: React.FC<Props> = ({ children, size, variant, state }) => {
  return (
    <div
      className={
        'Tag ' + (state ? 'Tag-' + state : '') + (size ? 'Tag-' + size : '') + (variant ? 'Tag-' + variant : '')
      }
    >
      {children}
    </div>
  );
};

export default Tag;
