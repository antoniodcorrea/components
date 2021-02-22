import React from 'react';
import { A } from '../A';
import { Border } from '../Border';
import { ArrowDown, ArrowUp } from '../Svg';
import { URLWrapper } from '../../../tools/services/URLWrapper';

import './SortBy.less';

interface Props {
  className?: string;
  href: string;
  options: {
    label: string;
    field: string;
  }[];
  activeSort: string;
}

export const SortBy: React.FC<Props> = ({ className, href, options, activeSort = 'id' }) => {
  const url = new URLWrapper(href);
  const activeSortIsAsc = !activeSort?.startsWith('-');

  return (
    <Border className={'SortBy' + (className ? ' ' + className : '')} padding="small">
      <ul className="SortBy-list">
        {options.map((item, index) => {
          const isActiveItem = item.field === activeSort || `-${item.field}` === activeSort;
          const isActiveItemAndIsAsc = activeSortIsAsc && isActiveItem;
          const shouldDisplayArrowUp = isActiveItemAndIsAsc || !isActiveItem;
          const optionUrlAsc = url.upsertSearchParam('sort', item.field);
          const optionUrlDesc = url.upsertSearchParam('sort', `-${item.field}`);
          const displayedUrl = isActiveItemAndIsAsc ? optionUrlDesc : optionUrlAsc;

          return (
            <li className={'SortBy-listItem' + (isActiveItem ? ' SortBy-listItem--active' : '')} key={index}>
              <A href={displayedUrl} key={index} styled={false}>
                {item.label}{' '}
                <span className="SortBy-listItemDirection">
                  {shouldDisplayArrowUp ? (
                    <ArrowUp
                      size="small"
                      className={'SortBy-listItemIcon' + (isActiveItem ? ' SortBy-listItemIcon--active' : '')}
                    />
                  ) : (
                    <ArrowDown
                      size="small"
                      className={'SortBy-listItemIcon' + (isActiveItem ? ' SortBy-listItemIcon--active' : '')}
                    />
                  )}
                </span>
              </A>
            </li>
          );
        })}
      </ul>
    </Border>
  );
};
