import React from 'react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { Pagination } from './index';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Pagination,
  title: 'Pagination',
  decorators: [withKnobs],
};

const knobs = {
  totalItems: (): number => number('Total Items', 100),
  itemsPerPage: (): number => number('Items per page', 10),
  offset: (): number => number('Offset', 30),
  pageNeighbours: (): number => number('Page neigbours', 2),
  path: (): string => text('Path', 'https://example.com'),
  grow: (): boolean => boolean('Grow', false),
};

export const Default: React.FC = () => (
  <>
    <H1>Pagination</H1>
    <Hr spacer />
    <Pagination
      totalItems={knobs.totalItems()}
      itemsPerPage={knobs.itemsPerPage()}
      offset={knobs.offset()}
      pageNeighbours={knobs.pageNeighbours()}
      path={knobs.path()}
      grow={knobs.grow()}
    />
  </>
);
