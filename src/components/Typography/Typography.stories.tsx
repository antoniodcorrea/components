import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { H2 } from '../H2';
import { H3 } from '../H3';
import { H4 } from '../H4';
import { Span } from '../Span';
import { Hr } from '../Hr';

export default {
  title: 'Typography',
  decorators: [withKnobs],
};

const knobs = {
  H1: () => text('H1', 'H1 — Header: Arial 36.'),
  H2: () => text('H2', 'h2 — Header: Arial 30.'),
  H3: () => text('H3', 'H3 — Header: Arial 24.'),
  H4: () => text('H4', 'H4 — Header: Arial 20.'),
  SpanNormalBold: () => text('Span normal bold', 'p — normal text bold: Arial 16'),
  SpanNormalRegular: () => text('Span normal regular', 'p — normal text: Arial 16'),
  SpanSmallBold: () => text('Span small bold', 'p — small text bold: Arial 12'),
  SpanSmallRegular: () => text('Span small regular', 'p — small text: Arial 12'),
  SpanMicroBold: () => text('Span micro bold', 'p — micro text bold: Arial 10'),
  SpanMicroRegular: () => text('Span micro regular', 'p — micro text: Arial 10'),
  SpanNanoBold: () => text('Span nano bold', 'p — nano text bold: Arial 8'),
  SpanNanoRegular: () => text('Span nano regular', 'p — nano text: Arial 8'),
};

export const Default = () => {
  return (
    <>
      <H1>{knobs.H1()}</H1>
      <Hr type="transparent" />
      <H2>{knobs.H2()}</H2>
      <Hr type="transparent" />
      <H3>{knobs.H3()}</H3>
      <Hr type="transparent" />
      <H4>{knobs.H4()}</H4>
      <Hr type="transparent" />
      <Span bold>{knobs.SpanNormalBold()}</Span>
      <Hr type="shrink" />
      <Span>{knobs.SpanNormalRegular()}</Span>
      <Hr type="transparent" />
      <Span bold size="small">
        {knobs.SpanSmallBold()}
      </Span>
      <Hr type="shrink" />
      <Span size="small">{knobs.SpanSmallRegular()}</Span>
      <Hr type="transparent" />
      <Span bold size="micro">
        {knobs.SpanMicroBold()}
      </Span>
      <Hr type="shrink" />
      <Span size="micro">{knobs.SpanMicroRegular()}</Span>
      <Hr type="transparent" />
      <Span bold size="nano">
        {knobs.SpanNanoBold()}
      </Span>
      <Hr type="shrink" />
      <Span size="nano">{knobs.SpanNanoRegular()}</Span>
      <Hr type="transparent" />
      <Hr />
    </>
  );
};
