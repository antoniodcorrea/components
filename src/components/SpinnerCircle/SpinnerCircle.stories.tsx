import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { SpinnerCircle } from '.';
import { Fade, FadeSpeed } from '../Fade';
import { Span } from '../Span';
import { Border } from '../Border';
import { Hr } from '../Hr';

export default {
  component: SpinnerCircle,
  title: 'SpinnerCircle',
  decorators: [withKnobs],
};

const knobs = {
  mounted: (): boolean => boolean('Mounted', false),
  speed: (): FadeSpeed => select('Speed', [undefined, 'fastest', 'fast', 'normal', 'slow'], 'fast'),
};

export const Default: React.FC = () => (
  <>
    <Fade mounted={knobs.mounted()} speed={knobs.speed()}>
      <SpinnerCircle />
    </Fade>
    <div style={{ width: '300px' }}>
      <Hr type="spacer" />
      <Border>
        <Span bold>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos necessitatibus fuga inventore eaque
          dolorum aliquam. Eius a consectetur ut, assumenda tenetur odio rem, molestiae in quos, excepturi nisi facere.
        </Span>
      </Border>
    </div>
  </>
);
