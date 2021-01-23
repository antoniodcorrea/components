import { withKnobs, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { FadeInOut } from '.';
export default {
  title: 'FadeInOut',
  component: FadeInOut,
  decorators: [withKnobs],
};

const knobs = {
  key: () => boolean('Key', true),
};

export const Default = () => (
  <div>
    <FadeInOut valueToUpdate={knobs.key()} speed="fastest">
      {knobs.key() && <div style={{ width: '300px', height: '300px', background: 'black' }} />}
      {!knobs.key() && <div style={{ width: '300px', height: '300px', background: 'tomato' }} />}
    </FadeInOut>
  </div>
);
