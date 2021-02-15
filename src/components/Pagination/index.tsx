import React, { Fragment } from 'react';
import { calculatePages } from './calculatePages';
import { A } from '../A';
import { Border } from '../Border';

import './Pagination.less';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  offset?: number;
  path: string;
  pageNeighbours?: number;
  grow?: boolean;
}

export const Pagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  offset = 0,
  path,
  pageNeighbours = 2,
  grow,
}) => {
  const pages = calculatePages({ totalItems, itemsPerPage, path, offset, pageNeighbours });

  return (
    <div className={'Pagination ' + (grow ? 'Pagination-grow' : '')}>
      <Border className="Pagination-border" padding="small" grow={grow}>
        {pages.map((item, index) =>
          !!item ? (
            <A className="Pagination-item" href={item.path} key={index} styled disabled={item.current}>
              {item.page}
            </A>
          ) : (
            <Fragment key={index}>
              <span className="Pagination-dots Pagination-item">...</span>
            </Fragment>
          )
        )}
      </Border>
    </div>
  );
};
