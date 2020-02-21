import React from 'react';
import './Notification.less';

interface Props {
  className?: string;
  type?: 'success' | 'error' | 'alert';
  size?: 'small' | 'normal' | 'big';
}

export const Notification: React.FC<Props> = ({ className, type, size = 'normal' }) => (
  <div
    className={
      'Notification' +
      (' Notification-' + size) +
      (type ? ' Notification--' + type : '') +
      (className ? ' ' + className : '')
    }
  />
);
