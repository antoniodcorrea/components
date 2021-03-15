import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SortBy } from '.';

export default {
  component: SortBy,
  title: 'SortBy',
  decorators: [withKnobs],
};

export const Default: React.FC = () => (
  <div style={{ padding: '10px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <SortBy
        href="http://example.com"
        options={[
          {
            label: 'sort1',
            field: 'sort1',
          },
          {
            label: 'sort2',
            field: 'sort2',
          },
          {
            label: 'sort3',
            field: 'sort3',
          },
        ]}
        currentSort="-sort1"
      />
    </div>
  </div>
);
