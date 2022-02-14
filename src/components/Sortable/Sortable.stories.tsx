import React, { useEffect, useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { Sortable } from '.';
import { sortArrayByIdAndOrder } from '@antoniodcorrea/utils';
const originalArticles = [
  {
    id: 1,
    order: 0,
    title: 'article 1',
  },
  {
    id: 2,
    order: 1,
    title: 'article 1',
  },
  {
    id: 3,
    order: 2,
    title: 'article 1',
  },
  {
    id: 4,
    order: 3,
    title: 'article 1',
  },
  {
    id: 5,
    order: 4,
    title: 'article 1',
  },
];

export default {
  component: Sortable,
  title: 'Sortable ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const [articles, setArticles] = useState([]);

  const onSortChange = (returnData) => {
    const sortedArticles = sortArrayByIdAndOrder({ data: articles, id: returnData.id, order: returnData.order });

    setArticles(sortedArticles);
  };

  useEffect(() => {
    setArticles(originalArticles);
  }, []);

  return (
    <div>
      <H1>Sortable list</H1>
      <Hr spacer />
      <div style={{ width: '500px' }}>
        <Sortable onSortEnd={onSortChange} onRemove={() => null}>
          {articles?.map((item) => (
            <li
              key={item.id}
              data-id={item.id}
              data-order={item.order}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                background: 'white',
                border: '1px solid',
                borderRadius: '8px',
              }}
            >
              <span id="Handle">ITEM</span>
            </li>
          ))}
        </Sortable>
      </div>
    </div>
  );
};
