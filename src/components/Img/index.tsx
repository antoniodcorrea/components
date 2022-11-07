import React, { ImgHTMLAttributes, useEffect, useState } from 'react';

import './Img.less';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  sizes?: string;
  srcSet?: string;
  title: string;
  alt: string;
}

export const Img: React.FC<Props> = ({ className, src, sizes, srcSet, title, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [srcInState, setSrcInState] = useState<string>(null);

  const onImageDecode = (img) => {
    if (!img) return;

    img.decode().then(() => {
      setLoaded(true);

      if (!srcSet) return;

      // Conflict between img.decode and srcSet:
      // https://stackoverflow.com/questions/65146920/domexception-invalid-image-request
      // We need to set srcSet after image is loaded
      const srcSetArray = srcSet
        ?.split(',')
        .filter((item) => !item.includes(undefined))
        .join(',');

      img.setAttribute('srcSet', srcSetArray);
    });
  };

  // Load image only on frontend
  useEffect(() => {
    setSrcInState(src);
  }, []);

  return (
    <img
      className={'Img' + (className ? ` ${className}` : '') + (loaded ? ' Img--loaded' : '')}
      src={srcInState}
      sizes={sizes}
      title={title}
      alt={alt}
      ref={onImageDecode}
      loading="lazy"
      {...props}
    />
  );
};
