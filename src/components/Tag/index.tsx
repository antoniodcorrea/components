import React from 'react';
import './Tag.less';
import { Span } from '../Span';
import { Notification } from '../Notification';

export type Notification = 'success' | 'error' | 'alert';

interface Props {
  children: string;
  size?: 'small' | 'medium' | 'big';
  variant?: 'alternate';
  notification?: Notification;
}

export const Tag: React.FC<Props> = ({ children, size = 'small', variant, notification }) => (
  <div className={'Tag ' + (size ? 'Tag--' + size : '') + (variant ? ' Tag--' + variant : '')}>
    <Notification className="Tag-notification" type={notification} size="small" />
    <div className="Tag-content">
      <Span size="micro" bold>
        {children}
      </Span>
    </div>
  </div>
);
