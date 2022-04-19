import React from 'react';

import Sort from '../../assets/svg/sort.svg';
import { URLWrapper } from '@antoniodcorrea/utils';
import { A } from '../A';

import './SortBy.less';

export type SortByOption = {
  label: string;
  field: string;
  icon?: React.ElementType;
};

interface Props {
  className?: string;
  href: string;
  options: SortByOption[];
  currentSort: string;
  loading?: boolean;
  onItemClick?: (url: string) => void;
}

export const SortBy: React.FC<Props> = ({ className, href, options, currentSort, loading, onItemClick = null }) => {
  const url = new URLWrapper(href);
  url.deleteSearchParam('page[offset]'); // Reset offset on click
  const currentSortIsAsc = !currentSort?.startsWith('-');
  const currentSortIsDesc = currentSort?.startsWith('-');

  const onItemClickLocal = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!!onItemClick) {
      e.preventDefault();
      onItemClick(url);
    }
  };

  return (
    <ul className={'SortBy' + (className ? ' ' + className : '') + (loading ? ' SortBy--loading' : '')}>
      {options.map((item, index) => {
        const isActiveItem = item.field === currentSort || `-${item.field}` === currentSort;
        url.upsertSearchParams({ sort: item.field });
        const redirectUrlAsc = url.getPathAndSearch();
        url.upsertSearchParams({ sort: `-${item.field}` });
        const redirectUrlDesc = url.getPathAndSearch();
        const displayedUrl = currentSortIsDesc && isActiveItem ? redirectUrlAsc : redirectUrlDesc;
        const Icon = item?.icon;

        return (
          <li className={'SortBy-listItem' + (isActiveItem ? ' SortBy-listItem--active' : '')} key={index}>
            <A
              href={displayedUrl}
              styled={false}
              frontend
              className="SortBy-listItemLink"
              onClick={(e) => onItemClickLocal(e, displayedUrl)}
            >
              <span className="SortBy-label">{item.label}</span>
              {item?.icon && <Icon className="SortBy-icon" />}
              <Sort className={'SortBy-sortIcon' + (currentSortIsAsc && isActiveItem ? ' SortBy-sortIcon--asc' : '')} />
            </A>
          </li>
        );
      })}
    </ul>
  );
};
