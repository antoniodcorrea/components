import { A } from 'components/A';
import { Flex } from 'components/Flex';
import { Span } from 'components/Span';
import { IconSize, IconsType, SvgIcon } from 'components/Svg';
import React from 'react';

import './ArrowLink.less';

export type Size = 'normal' | 'small';

interface Props {
  className?: string;
  icon?: IconsType;
  size?: Size;
  children: React.ReactNode;
}

export const ArrowLink: React.FC<Props> = ({ className, children, icon = 'ArrowRight', size = 'normal' }) => {
  const svgSizeMap: {
    [key: string]: IconSize;
  } = {
    normal: 'small',
    small: 'micro',
  };

  return (
    <span className={'ArrowLink' + (className ? className : '')}>
      <Span bold size={size}>
        {children}
      </Span>
      {icon && <SvgIcon name={icon} size={svgSizeMap[size]} className="ArrowLink-svg" />}
    </span>
  );
};
