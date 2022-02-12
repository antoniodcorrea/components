import React from 'react';

import { select, boolean, withKnobs } from '@storybook/addon-knobs';
import { HideShow } from '.';

export default {
  title: 'HideShow',
  component: HideShow,
  decorators: [withKnobs],
};

const knobs = {
  key: () => boolean('Key', true),
  speed: () => select('Speed', ['slow', 'normal', 'fast', 'fastest'], 'fast'),
};

export const Default: React.FC = () => (
  <div>
    <HideShow shown={knobs.key()} speed={knobs.speed()}>
      <div style={{ width: '300px', height: '300px', background: 'black' }} />
    </HideShow>
  </div>
);
