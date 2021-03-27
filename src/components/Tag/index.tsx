import React from 'react';
import { Span } from '../Span';
import { NotificationDot } from '../NotificationDot';

import './Tag.less';

export type NotificationDot = 'success' | 'error' | 'alert';
export type Size = 'small' | 'medium' | 'big';

interface Props {
  children: string;
  className?: string;
  size?: 'small' | 'medium' | 'big' | 'nano';
  variant?: 'dark' | 'simple';
  notification?: NotificationDot;
}

export const Tag: React.FC<Props> = ({ children, size = 'small', variant, notification, className }) => {
  const sizeMap = {
    nano: 'nano',
    small: 'micro',
    medium: 'micro',
  };

  const boldMap = {
    nano: true,
    small: true,
    medium: true,
    big: true,
  };

  return (
    <div
      className={
        'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '') + (className ? ' ' + className : '')
      }
    >
      <NotificationDot className="Tag-notification" type={notification} size="small" />
      <div className="Tag-content">
        <Span bold={boldMap[size]} size={sizeMap[size]}>
          {children}
        </Span>
      </div>
    </div>
  );
};
