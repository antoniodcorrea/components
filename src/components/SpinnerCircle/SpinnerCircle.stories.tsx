import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { SpinnerCircle, SpinnerCircleSize } from '.';
import { Fade, FadeSpeed } from '../Fade';
import { Span } from '../Span';
import { Border } from '../Border';
import { Vote } from '../Vote';
import { Hr } from '../Hr';

export default {
  component: SpinnerCircle,
  title: 'SpinnerCircle',
  decorators: [withKnobs],
};

const knobs = {
  mounted: (): boolean => boolean('Mounted', true),
  speed: (): FadeSpeed => select('Speed', [undefined, 'fastest', 'fast', 'normal', 'slow'], 'fast'),
  size: (): SpinnerCircleSize => select('Size', [undefined, 'nano', 'small', 'medium'], undefined),
};

export const Default: React.FC = () => (
  <>
    <Hr spacer />
    <div style={{ width: '300px', position: 'relative' }}>
      <Fade mounted={knobs.mounted()} speed={knobs.speed()} position="absolute">
        <SpinnerCircle size={knobs.size()} />
      </Fade>
      <Border>
        <Span bold>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos necessitatibus fuga inventore eaque
          dolorum aliquam. Eius a consectetur ut, assumenda tenetur odio rem, molestiae in quos, excepturi nisi facere.
        </Span>
      </Border>
    </div>
    <Hr spacer />
    <Hr spacer />
    <Vote changeVote={() => null} loading={knobs.mounted()} />
  </>
);
