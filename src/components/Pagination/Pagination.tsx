import * as React from 'react';
import './Pagination.less';

const createPages = (from, to, totalPages): number[] => {
  let i: number = from;
  const range: number[] = [];

  while (i <= to) {
    range.push(i);
    i += 1;
  }
  if (range[0] !== 1) range.unshift(1);
  if (range[-1] !== totalPages) range.push(totalPages);
  return range;
};

const PAGE_NEIGHBOURS = 1;

interface Props {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  path: string;
}

const Pagination: React.FC<Props> = ({ page, totalItems, itemsPerPage, path }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startPage = Math.max(2, page - PAGE_NEIGHBOURS);
  const endPage = Math.min(totalPages - 1, page + PAGE_NEIGHBOURS);
  const pages = createPages(startPage, endPage, totalPages);
  const href = path + '?page=' + page;
  let prev = 0;

  return (
    <div className="Pagination">
      {pages.map(item => {
        if (item - 1 !== prev && item !== 1) {
          prev = item;
          return (
            <>
              <div className="Pagination-dots">...</div>
              <a className="Pagination-link" href={href}>
                {item}
              </a>
            </>
          );
        }
        if (item === page) {
          prev += 1;

          return (
            <>
              <a className="Pagination-link Pagination-link--active" href={href}>
                {item}
              </a>
            </>
          );
        }

        prev += 1;
        return (
          <a className="Pagination-link" href={href}>
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;
