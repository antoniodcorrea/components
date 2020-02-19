import React from 'react';
import { Pagination } from '.';

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
    <div style={{ width: '300px' }}>
      <Pagination {...defaultProps} />
    </div>
  );
};
