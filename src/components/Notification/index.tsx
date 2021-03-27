import React from 'react';
import { Span } from '../Span';
import { Cross } from '../Svg';

import './Notification.less';

export type NotificationType = 'success' | 'error' | 'alert';
export type NotificationSize = 'small' | 'normal' | 'big';

interface Props {
  className?: string;
  type?: NotificationType;
  size?: NotificationSize;
  onCloseClick?: () => void;
}

export const Notification: React.FC<Props> = ({
  children,
  className,
  type = 'alert',
  size = 'normal',
  onCloseClick,
}) => (
  <div
    className={
      'Notification' +
      (' Notification-' + size) +
      (type ? ' Notification--' + type : '') +
      (className ? ' ' + className : '')
    }
  >
    {children}
    <Cross className="Notification-remove" size="micro" onClick={onCloseClick} />
  </div>
);
