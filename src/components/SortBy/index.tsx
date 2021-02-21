import { Border } from 'components/Border';
import { Flex } from 'components/Flex';
import { Hr } from 'components/Hr';
import { ArrowUp } from 'components/Svg';
import React from 'react';

import './SortBy.less';

interface Props {
  className?: string;
  options: {
    label: string;
    field: string;
  }[];
  activeOption: {
    field: string;
  };
}

const SortBy: React.FC<Props> = ({ className, options }) => (
  <Border className={'SortBy ' + (className ? className : '')} padding="small">
    <ul className="SortBy-list">
      {options.map((item, index) => {
        return (
          <li key={index} className="SortBy-listItem">
            {item.label}{' '}
            <span className="SortBy-listItemDirection">
              <ArrowUp size="small" />
            </span>
          </li>
        );
      })}
    </ul>
  </Border>
);

export default SortBy;
