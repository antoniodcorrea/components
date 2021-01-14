import React from 'react';
import { SpinnerSquaredSmooth, SpinnerSquaredSmoothSize } from '.';

import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Fade, FadeSpeed } from '../Fade';
import { Span } from '../Span';
import { Border } from '../Border';

export default {
  component: SpinnerSquaredSmooth,
  title: 'SpinnerSquaredSmooth',
  decorators: [withKnobs],
};

const knobs = {
  mounted: (): boolean => boolean('Mounted', true),
  speed: (): FadeSpeed => select('Speed', [undefined, 'fastest', 'fast', 'normal', 'slow'], 'fast'),
  size: (): SpinnerSquaredSmoothSize => select('Size', [undefined, 'nano', 'small', 'medium'], undefined),
};

export const Default: React.ReactNode = () => (
  <div>
    <div style={{ width: '300px', position: 'relative', left: '50px' }}>
      <Fade mounted={knobs.mounted()} speed={knobs.speed()} position="absolute">
        <SpinnerSquaredSmooth size={knobs.size()} />
      </Fade>
      <Border>
        <Span bold>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos necessitatibus fuga inventore eaque
          dolorum aliquam. Eius a consectetur ut, assumenda tenetur odio rem, molestiae in quos, excepturi nisi facere.
        </Span>
      </Border>
    </div>
  </div>
);
