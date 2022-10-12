import React, { useState } from 'react';

import { boolean, withKnobs } from '@storybook/addon-knobs';
import { SortBy } from '.';
import { QueryStringWrapper } from '@antoniodcorrea/utils';

export default {
  component: SortBy,
  title: 'SortBy',
  decorators: [withKnobs],
};

const knobs = {
  loading: (): boolean => boolean('Loading', false),
};

export const Default: React.FC = () => {
  const [sort, setSort] = useState<string>('sort1');

  const onItemClick = (url: string) => {
    const sort = QueryStringWrapper.getOneSearchParam(url, 'sort');
    setSort(sort);
  };

  return (
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
          currentSort={sort}
          loading={knobs.loading()}
          onItemClick={onItemClick}
        />
      </div>
    </div>
  );
};
