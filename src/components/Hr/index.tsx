import React from 'react';
import './Hr.less';

export type HrSize = 'zero' | 'nano' | 'micro' | 'small' | 'normal' | 'big';

interface Props {
  spacer?: boolean;
  size?: HrSize;
}

export const Hr: React.FC<Props> = ({ spacer = false, size = 'normal' }) => (
  <hr className={'Hr' + (spacer ? ' Hr-spacer' : '') + (size ? ' Hr-' + size : '')} />
);
