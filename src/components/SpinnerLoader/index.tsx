import React from 'react';
import './SpinnerLoader.less';

export type SpinnerLoaderSize = 'nano' | 'small' | 'medium';
export type SpinnerLoaderSpeed = 'fast' | 'normal' | 'slow';

export const SpinnerLoader: React.FC<any> = ({ size = 'medium', speed = 'normal' }) => (
  <svg
    className={'SpinnerLoader' + (size ? ' SpinnerLoader--' + size : '') + (speed ? ' SpinnerLoader--' + speed : '')}
    viewBox="0 0 50 50"
  >
    <circle className="SpinnerLoader-circle" cx="25" cy="25" r="20"></circle>
  </svg>
);
