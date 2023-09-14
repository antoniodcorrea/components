import React, { useEffect, useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { Sortable } from '.';
import { sortArrayByIdAndOrder } from '@antoniodcorrea/utils';

type ArticleItem = {
  id: number;
  order: number;
  title: string;
};

const originalArticles: Array<ArticleItem> = [
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
  const [articles, setArticles] = useState<Array<ArticleItem>>([]);

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
        <Sortable onSortEnd={onSortChange}>
          {articles?.map((item) => (
            <li
              className="Sortable-sortableItem"
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
              <span>
                item {item.id} <span style={{ color: 'lightgray' }}>— order: {item.order}</span>
              </span>
              <span className="Sortable-sortableItemHandle Sortable-handle" id="handle">
                ≡
              </span>
            </li>
          ))}
        </Sortable>
      </div>
    </div>
  );
};
