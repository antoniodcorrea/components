import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Notification, NotificationType, NotificationSize } from '.';

export default {
  component: Notification,
  title: 'Notification',
  decorators: [withKnobs],
};

const knobs = {
  size: (): NotificationSize => select('Size', ['small', 'normal', 'big', undefined], 'small'),
  type: (): NotificationType => select('Notification', ['success', 'alert', 'error', undefined], 'error'),
};

export const Default: React.FC = () => <Notification type={knobs.type()} size={knobs.size()} />;
