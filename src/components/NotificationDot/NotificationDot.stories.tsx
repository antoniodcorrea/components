import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { NotificationDot, NotificationDotType, NotificationDotSize } from '.';

export default {
  component: NotificationDot,
  title: 'NotificationDot',
  decorators: [withKnobs],
};

const knobs = {
  size: (): NotificationDotSize => select('Size', ['small', 'normal', 'big', undefined], 'small'),
  type: (): NotificationDotType => select('NotificationDot', ['success', 'alert', 'error', undefined], 'error'),
};

export const Default: React.FC = () => <NotificationDot type={knobs.type()} size={knobs.size()} />;
