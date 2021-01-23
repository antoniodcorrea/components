import React from 'react';
import { SkeletonItem } from '.';
import { Hr } from '../Hr';

export default {
  component: SkeletonItem,
  title: 'SkeletonItem',
};

export const Default = () => {
  return (
    <div style={{ width: '100px', border: '1px solid', padding: '10px', borderRadius: '2px' }}>
      <SkeletonItem />
      <Hr spacer size="small" />
      <SkeletonItem />
    </div>
  );
};
