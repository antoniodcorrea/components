import React from 'react';

import { select, withKnobs } from '@storybook/addon-knobs';
import { Spinner, SpinnerSize } from '.';

export default {
  component: Spinner,
  title: 'Spinner',
  decorators: [withKnobs],
};

const knobs = {
  size: (): SpinnerSize =>
    select('Size', [undefined, 'nano', 'micro', 'small', 'normal', 'medium', 'big', 'biggest', 'huge'], undefined),
};
export const Default: React.FC = () => <Spinner size={knobs.size()} />;
