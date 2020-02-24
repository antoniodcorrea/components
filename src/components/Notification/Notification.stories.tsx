import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Notification } from '.';

export default {
  component: Notification,
  title: 'Notification',
  decorators: [withKnobs],
};

const knobs = {
  size: () => select('Size', ['small', 'normal', 'big', undefined], 'small'),
  type: () => select('Notification', ['success', 'alert', 'error', undefined], 'error'),
};

export const Default = () => <Notification type={knobs.type()} size={knobs.size()} />;
