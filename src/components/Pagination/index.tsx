import React, { Fragment } from 'react';
import { URLWrapper } from '../../../tools/services/URLWrapper';
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

const generateItems = ({
  totalItems,
  itemsPerPage,
  path,
  offset,
  pageNeighbours,
}): Array<{ page: number; path: string; current: boolean } | null> => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const firstPage = 1;
  const isOnePage = totalPages === 1;
  const currentPage =
    offset > totalItems ? Math.ceil(totalItems / itemsPerPage) : Math.ceil(offset / itemsPerPage) || 1;
  const defaultPages = [
    {
      page: 1,
      path: path,
      current: true,
    },
  ];

  if (!totalItems || isOnePage) return defaultPages;

  const pages = Array.from({ length: totalPages }, (_, index) => ({ page: firstPage + index }))
    .map((item, index, array) => {
      const currentPageOffset = item.page * itemsPerPage - itemsPerPage;
      const isNotFirstPage = item.page > 1;
      const isNotLastPage = item.page < totalPages;
      const isNotNeighbour = item.page < currentPage - pageNeighbours || item.page > currentPage + pageNeighbours;
      const isCurrent = item.page === currentPage || (offset >= array.length && index + 1 === array.length);

      if (isNotFirstPage && isNotLastPage && isNotNeighbour) return null;

      const myUrl = new URLWrapper(path);
      const pathWithCurrentOffSet = myUrl.upsertSearchParam('page[offset]', currentPageOffset);

      const page = {
        page: item.page,
        path: pathWithCurrentOffSet,
        current: isCurrent,
      };

      return page;
    })
    .filter((item, index, array) => !!(item !== array[index - 1]));

  return pages;
};

export const Pagination: React.FC<Props> = ({ totalItems, itemsPerPage, offset = 0, path, pageNeighbours, grow }) => {
  const pages = generateItems({ totalItems, itemsPerPage, path, offset, pageNeighbours });

  return (
    <div className={'Pagination ' + (grow ? 'Pagination-grow' : '')}>
      <Border className="Pagination-border" padding="small" grow={grow}>
        {pages.map((item, index) => {
          return !!item ? (
            <A className="Pagination-item" href={item.path} key={index} styled disabled={item.current}>
              {item.page}
            </A>
          ) : (
            <Fragment key={index}>
              <span className="Pagination-dots Pagination-item">...</span>
            </Fragment>
          );
        })}
      </Border>
    </div>
  );
};
