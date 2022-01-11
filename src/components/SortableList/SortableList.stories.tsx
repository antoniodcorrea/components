import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { SortableList } from '.';

const articles = [
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
  component: SortableList,
  title: 'SortableList ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const onSortChange = (returnData) => {
    console.log('=======');
    console.log('returnData:');
    console.log(JSON.stringify(returnData, null, 4));
    console.log('=======');
  };

  return (
    <div>
      <H1>Sortable list</H1>
      <Hr spacer />
      <div style={{ width: '500px' }}>
        <SortableList id="SortableList" onSortChange={onSortChange}>
          {articles?.map((item) => (
            <li
              className="SortableList-sortableItem"
              key={item.id}
              data-id={item.id}
              data-order={item.order}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                background: 'white',
                border: '1px solid',
                borderRadius: '8px',
              }}
            >
              <span>
                item {item.id} — order: {item.order}
              </span>
              <span
                className="SortableList-sortableItemHandle Sortable-handle"
                style={{
                  padding: '0 8px',
                  border: '1px solid',
                  borderRadius: '8px',
                }}
              >
                ≡
              </span>
            </li>
          ))}
        </SortableList>
      </div>
    </div>
  );
};
