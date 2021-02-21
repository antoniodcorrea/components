import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SortBy from '.';

export default {
  component: SortBy,
  title: 'SortBy',
  decorators: [withKnobs],
};

const options = [
  {
    label: 'Rating',
    field: 'rating',
  },

  {
    label: 'Vote',
    field: 'vote',
  },

  {
    label: 'My Vote',
    field: 'vote',
  },
];

const activeOption = {
  field: 'vote',
};

export const Default: React.FC = () => {
  return <SortBy options={options} activeOption={activeOption} />;
};
