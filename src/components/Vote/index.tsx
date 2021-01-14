import React from 'react';
import { Triangle } from '../Svg';
import { SpinnerCircle } from '../SpinnerCircle';
import { Fade } from '../Fade';

import './Vote.less';

interface Props {
  vote?: boolean;
  className?: string;
  changeVote: (vote: boolean | null) => void;
  loading?: boolean;
}

export const Vote: React.FC<Props> = ({ vote, changeVote, className, loading = false }) => (
  <button className={'Vote' + (className ? ' ' + className : '') + (loading ? ' Vote--loading' : '')}>
    <Triangle
      className={'Vote-icon Vote-minus' + (vote === false ? ' Vote--active' : '')}
      onClick={() => changeVote(vote === false ? null : false)}
    />
    <Triangle
      className={'Vote-icon Vote-plus' + (vote === true ? ' Vote--active' : '')}
      onClick={() => changeVote(vote === true ? null : true)}
    />
    <Fade mounted={loading} position="absolute">
      <SpinnerCircle size="nano" background={false} speed="fast" />
    </Fade>
  </button>
);
