import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Notification } from '.';

export default {
  component: Notification,
  title: 'Notification',
  decorators: [withKnobs],
};

const knobs = {
  size: () => select('Size', ['small', 'normal', 'big', null], null),
  type: () => select('Notification', ['success', 'alert', 'error', null], null),
};

export const Default = () => <Notification type={knobs.type()} size={knobs.size()} />;
