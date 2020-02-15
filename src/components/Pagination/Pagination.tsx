import React, { Fragment, Component } from 'react';
import './Pagination.less';
import A from '../A/A';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  path: string;
  pageNeighbours: number;
}

class Pagination extends Component<Props> {
  tempPreviousPage: number = 0;

  static defaultProps = {
    pageNeighbours: 1,
  };

  createPages = (from: number, to: number, totalPages: number): number[] => {
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

  renderNonConsecutiveItem = (item: number, href: string): JSX.Element => {
    this.tempPreviousPage = item;

    return (
      <Fragment key={item}>
        <span className="Pagination-dots">...</span>
        <A href={href} styled>
          {item}
        </A>
      </Fragment>
    );
  };

  renderConsecutiveItem = (item: number, href: string, page: number): JSX.Element => {
    this.tempPreviousPage += 1;

    return (
      <A href={href} key={item} styled disabled={item === page}>
        {item}
      </A>
    );
  };

  renderItems = (item: number, href: string, page: number): JSX.Element => {
    if (this.tempPreviousPage !== item - 1 && item !== 1) {
      return this.renderNonConsecutiveItem(item, href);
    }

    return this.renderConsecutiveItem(item, href, page);
  };

  render = (): JSX.Element => {
    const { page, totalItems, itemsPerPage, path, pageNeighbours } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startPage = Math.max(2, page - pageNeighbours);
    const endPage = Math.min(totalPages - 1, page + pageNeighbours);
    const pages = this.createPages(startPage, endPage, totalPages);
    const href = path + '?page=' + page;

    return (
      <div className="Pagination">
        {pages.map(item => {
          return this.renderItems(item, href, page);
        })}
      </div>
    );
  };
}

export default Pagination;
