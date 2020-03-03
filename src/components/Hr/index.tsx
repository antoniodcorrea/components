import React from 'react';
import './Hr.less';

interface Props {
  type?: 'spacer' | 'shrink';
  size?: 'block' | 'nano' | 'micro' | 'small' | 'normal' | 'big' | false;
}

export const Hr: React.FC<Props> = ({ type, size = 'micro' }) => (
  <hr className={'Hr' + (type ? ' Hr-' + type : '') + (size ? ' Hr-' + size : '')} />
);
