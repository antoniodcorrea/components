import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { SpinnerLoader, SpinnerLoaderSize } from '.';
import { Fade, FadeSpeed } from '../Fade';
import { Span } from '../Span';
import { Border } from '../Border';
import { Vote } from '../Vote';
import { Hr } from '../Hr';

export default {
  component: SpinnerLoader,
  title: 'SpinnerLoader',
  decorators: [withKnobs],
};

const knobs = {
  mounted: (): boolean => boolean('Mounted', true),
  speed: (): FadeSpeed => select('Speed', [undefined, 'fastest', 'fast', 'normal', 'slow'], 'fast'),
  size: (): SpinnerLoaderSize => select('Size', [undefined, 'nano', 'small', 'medium'], undefined),
};

export const Default: React.FC = () => (
  <>
    <Hr spacer />
    <div style={{ width: '300px', position: 'relative' }}>
      <SpinnerLoader size={knobs.size()} />
    </div>
  </>
);
