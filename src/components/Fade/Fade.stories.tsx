import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Fade, FadeSpeed } from '.';
import { P } from '../P';

export default {
  component: Fade,
  title: 'Fade',
  decorators: [withKnobs],
};

const knobs = {
  mounted: (): boolean => boolean('Mounted', false),
  speed: (): FadeSpeed => select('Speed', [undefined, 'fastest', 'fast', 'normal', 'slow'], 'fast'),
};

export const Empty: React.FC = () => (
  <Fade mounted={knobs.mounted()} speed={knobs.speed()}>
    <P>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque saepe dolores. Voluptatibus sint placeat
      deleniti iusto laborum quam cupiditate, nesciunt eaque. Eaque illum error quo architecto fuga iure itaque.
    </P>
  </Fade>
);
