import React, { useState } from 'react';
import { Vote } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';

export default {
  component: Vote,
  title: 'Vote',
};

export const Empty: React.ReactNode = () => {
  const [vote, setVote] = useState(undefined);

  const onVoteChange = (vote) => {
    setVote(vote);
  };

  return (
    <div>
      <H1>Vote</H1>
      <Hr size="nano" />
      <Hr spacer />
      <Vote vote={vote} changeVote={onVoteChange} />
    </div>
  );
};
