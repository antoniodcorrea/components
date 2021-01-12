import React from 'react';
import { Triangle } from '../Svg';

import './Vote.less';

interface Props {
  vote?: boolean;
  className?: string;
  changeVote: (vote: boolean | null) => void;
}

export const Vote: React.FC<Props> = ({ vote, changeVote, className }) => (
  <button className={'Vote' + (className ? ' ' + className : '')}>
    <Triangle
      className={'Vote-icon Vote-minus' + (vote === false ? ' Vote--active' : '')}
      onClick={() => changeVote(vote === false ? undefined : false)}
    />
    <Triangle
      className={'Vote-icon Vote-plus' + (vote === true ? ' Vote--active' : '')}
      onClick={() => changeVote(vote === true ? undefined : true)}
    />
  </button>
);
