import React, { useState } from 'react';

import './Img.less';

interface Props {
  className?: string;
  src: string;
  sizes?: string;
  srcSet?: string;
  title: string;
  alt: string;
}

export const Img: React.FC<Props> = ({ className, src, sizes, srcSet, title, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const onImageDecode = (img) => {
    if (!img) return;

    img.decode().then(() => {
      // Conflict betweeen img.decode and srcSet:
      // https://stackoverflow.com/questions/65146920/domexception-invalid-image-request
      // We need to set srcSet after image is loaded
      const srcSetArray = srcSet
        ?.split(',')
        .filter((item) => !item.includes(undefined))
        .join(',');

      img.setAttribute('srcSet', srcSetArray);
      setLoaded(true);
    });
  };

  return (
    <img
      className={'Img' + (className ? ` ${className}` : '') + (loaded ? ' Img--loaded' : '')}
      src={src}
      sizes={sizes}
      title={title}
      alt={alt}
      ref={onImageDecode}
      loading="lazy"
    />
  );
};
