import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Vote } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';

export default {
  component: Vote,
  title: 'Vote',
  decorators: [withKnobs],
};

const knobs = {
  vote: (): undefined | string => select('Vote', [undefined, 'true', 'false'], 'true'),
  loading: (): boolean => boolean('Loading', false),
};

export const Empty: React.ReactNode = () => {
  const onVoteChange = (vote) => {
    alert({ vote });
  };
  const finalVote = knobs.vote() === 'true' || (knobs.vote() === 'false' ? false : undefined);
  console.log('=======');
  console.log('finalVote on story:');
  console.log(knobs.vote());
  console.log(JSON.stringify(finalVote, null, 4));
  console.log('=======');

  return (
    <div>
      <H1>Vote</H1>
      <Hr size="nano" />
      <Hr spacer />
      <Vote vote={finalVote} changeVote={onVoteChange} loading={knobs.loading()} />
    </div>
  );
};
