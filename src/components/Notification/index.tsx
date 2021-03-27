import React from 'react';
import { Span } from '../Span';

import './Notification.less';

export type NotificationType = 'success' | 'error' | 'alert';
export type NotificationSize = 'small' | 'normal' | 'big';

interface Props {
  className?: string;
  title: string;
  type?: NotificationType;
  size?: NotificationSize;
}

export const Notification: React.FC<Props> = ({ children, className, title, type, size = 'normal' }) => (
  <div
    className={
      'Notification' +
      (' Notification-' + size) +
      (type ? ' Notification--' + type : '') +
      (className ? ' ' + className : '')
    }
  >
    <Span className="Notification-title" bold>
      {title}
    </Span>
    <Span className="Notification-description" size="small">
      {children}
    </Span>
  </div>
);
