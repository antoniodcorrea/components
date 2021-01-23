import React from 'react';

import './SkeletonItem.less';

interface Props {
  className?: string;
}

export const SkeletonItem: React.FC<Props> = ({ className }) => (
  <span className={' SkeletonItem ' + (className ? className : ' ')}> </span>
);
