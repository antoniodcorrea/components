import React from 'react';

import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { FadeInOut } from '.';

export default {
  title: 'FadeInOut',
  component: FadeInOut,
  decorators: [withKnobs],
};

const knobs = {
  key: () => boolean('Key', true),
};

export const Default: React.FC = () => {
  const speed = select('Speed', ['slow', 'normal', 'fast', 'fastest'], 'fast');


  return(  <div>
    <FadeInOut valueToUpdate={knobs.key()} appear speed={speed}>
      {knobs.key() && <div style={{ width: '300px', height: '300px', background: 'black' }} />}
      {!knobs.key() && <div style={{ width: '300px', height: '300px', background: 'tomato' }} />}
    </FadeInOut>
  </div>);
};
