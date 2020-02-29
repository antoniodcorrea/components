import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Pagination } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Pagination,
  title: 'Pagination',
  decorators: [withKnobs],
};

const defaultProps = {
  totalItems: 837246,
  itemsPerPage: 8,
  page: 387,
  path: 'http://example.com',
};

const knobs = {
  grow: () => boolean('Grow', false),
};

export const Default = () => {
  return (
    <>
      <H1>Pagination</H1>
      <Hr type="spacer" />
      <Pagination {...defaultProps} grow={knobs.grow()} />
    </>
  );
};
