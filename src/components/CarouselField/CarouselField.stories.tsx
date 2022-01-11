import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { CarouselField } from '.';

const images = [
  {
    id: 1,
    order: 10,
    src: 'https://picsum.photos/id/100/1000',
    sizes: '',
    srcSet: '',
    title: 'https://picsum.photos/id/100/1000',
    alt: 'https://picsum.photos/id/100/1000',
  },
  {
    id: 2,
    order: 1,
    src: 'https://picsum.photos/id/200/1000',
    sizes: '',
    srcSet: '',
    title: 'https://picsum.photos/id/200/1000',
    alt: 'https://picsum.photos/id/200/1000',
  },
  {
    id: 3,
    order: 2,
    src: 'https://picsum.photos/id/301/1000',
    sizes: '',
    srcSet: '',
    title: 'https://picsum.photos/id/301/1000',
    alt: 'https://picsum.photos/id/301/1000',
  },
  {
    id: 4,
    order: 3,
    src: 'https://picsum.photos/id/400/1000',
    sizes: '',
    srcSet: '',
    title: 'https://picsum.photos/id/400/1000',
    alt: 'https://picsum.photos/id/400/1000',
  },
];

export default {
  component: CarouselField,
  title: 'CarouselField ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const onImagesChange = (e) => {
    console.log(e);

    return null;
  };

  const onFileUpload = (e) => {
    console.log(e);

    return null;
  };

  const onFileRemove = (e) => {
    console.log(e);

    return null;
  };

  return (
    <div>
      <H1>Sortable list</H1>
      <Hr spacer />
      <div style={{ width: '500px' }}>
        <CarouselField
          images={images}
          onChange={onImagesChange}
          onFileUpload={onFileUpload}
          onFileRemove={onFileRemove}
        />
      </div>
    </div>
  );
};
