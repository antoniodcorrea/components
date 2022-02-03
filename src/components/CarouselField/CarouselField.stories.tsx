import React, { useEffect, useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { CarouselField } from '.';

const originalImages = [
  {
    id: 1,
    order: 1,
    title: 'https://picsum.photos/id/1/1000',
    images: {
      original: 'https://picsum.photos/id/1/1000',
    },
  },
  {
    id: 2,
    order: 2,
    title: 'https://picsum.photos/id/2/1000',
    images: {
      original: 'https://picsum.photos/id/2/1000',
    },
  },
  {
    id: 3,
    order: 3,
    title: 'https://picsum.photos/id/3/1000',
    images: {
      original: 'https://picsum.photos/id/3/1000',
    },
  },
  {
    id: 4,
    order: 4,
    title: 'https://picsum.photos/id/4/1000',
    images: {
      original: 'https://picsum.photos/id/4/1000',
    },
  },
  {
    id: 5,
    order: 5,
    title: 'https://picsum.photos/id/5/1000',
    images: {
      original: 'https://picsum.photos/id/5/1000',
    },
  },
  {
    id: 6,
    order: 6,
    title: 'https://picsum.photos/id/6/1000',
    images: {
      original: 'https://picsum.photos/id/6/1000',
    },
  },
];

export default {
  component: CarouselField,
  title: 'CarouselField ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const [images, setImages] = useState([]);

  const onImagesChange = (images) => {
    setImages(images);
  };

  const onFileUpload = (e) => {
    console.log(e);

    return null;
  };

  const onFileRemove = (e) => {
    console.log(e);

    return null;
  };

  useEffect(() => {
    setImages(originalImages);
  }, []);

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
