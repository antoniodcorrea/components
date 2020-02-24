import React from 'react';
import { Pagination } from '.';
import { Border } from '../Border';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Pagination,
  title: 'Pagination',
};

const defaultProps = {
  totalItems: 837246,
  itemsPerPage: 8,
  page: 387,
  path: 'http://example.com',
};

export const Default = () => {
  return (
    <>
      <H1>Pagination</H1>
      <Hr type="spacer" />
      <div style={{ width: '300px' }}>
        <Border padding="small">
          <Pagination {...defaultProps} />
        </Border>
      </div>
    </>
  );
};
