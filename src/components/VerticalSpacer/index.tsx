import React from 'react';
import './VerticalSpacer.less';

interface Props {
  size?: 'small' | 'medium' | 'big';
}

export const VerticalSpacer: React.FC<Props> = ({ size = 'medium' }) => (
  <div className={'VerticalSpacer' + (size ? ' VerticalSpacer-' + size : '')} />
);
