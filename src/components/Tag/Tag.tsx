import React from 'react';
import './Tag.less';
import Text from '../Text/Text';

interface Props {
  children: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
}

const Tag: React.FC<Props> = ({ children, size = 'small', variant }) => {
  return (
    <div className={'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '')}>
      <div className="Tag-content">
        <Text size="micro" bold>
          {children}
        </Text>
      </div>
    </div>
  );
};

export default Tag;
