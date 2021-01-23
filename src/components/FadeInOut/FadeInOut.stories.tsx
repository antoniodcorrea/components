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
    <FadeInOut valueToUpdate={knobs.key()}>
      {knobs.key() && <div>A</div>}
      {!knobs.key() && <div>B</div>}
    </FadeInOut>
  </div>
);
