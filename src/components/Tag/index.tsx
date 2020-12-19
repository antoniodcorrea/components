import React from 'react';
import { Span } from '../Span';
import { Notification } from '../Notification';

import './Tag.less';

export type Notification = 'success' | 'error' | 'alert';
export type Size = 'small' | 'medium' | 'big';

interface Props {
  children: string;
  className?: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
  notification?: Notification;
}

const sizeMap = {
  small: 'micro',
  medium: 'normal',
};

export const Tag: React.FC<Props> = ({ children, size = 'small', variant, notification, className }) => {
  return (
    <div
      className={
        'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '') + (className ? ' ' + className : '')
      }
    >
      <Notification className="Tag-notification" type={notification} size="small" />
      <div className="Tag-content">
        <Span bold size={sizeMap[size]}>
          {children}
        </Span>
      </div>
    </div>
  );
};
