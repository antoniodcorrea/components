import { A } from 'components/A';
import { Flex } from 'components/Flex';
import { Span } from 'components/Span';
import { IconSize, IconsType, SvgIcon } from 'components/Svg';
import React from 'react';

import './ArrowLink.less';

export type Size = 'normal' | 'small';

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  targetBlank?: boolean;
  disabled?: boolean;
  title?: string;
  onClick?: (any) => void;
  icon?: IconsType;
  size?: Size;
}

export const ArrowLink: React.FC<Props> = ({
  children,
  className,
  href,
  targetBlank = false,
  onClick,
  disabled = false,
  title,
  icon = 'ArrowRight',
  size = 'normal',
}) => {
  const svgSizeMap: {
    [key: string]: IconSize;
  } = {
    normal: 'small',
    small: 'micro',
  };

  return (
    <A
      className={'ArrowLink ' + (className ? className : '')}
      title={title}
      href={href}
      onClick={onClick}
      targetBlank={targetBlank}
      styled={false}
      disabled={disabled}
      underlined={false}
    >
      <Flex vertical="center" horizontal="left">
        <Span bold size={size}>
          {children}
        </Span>
        {icon && <SvgIcon name={icon} size={svgSizeMap[size]} className="ArrowLink-svg" />}
      </Flex>
    </A>
  );
};
