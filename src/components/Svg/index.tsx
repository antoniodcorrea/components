import React from 'react';
import triangle from 'svg/triangle.svg';
import square from 'svg/square.svg';
import circle from 'svg/circle.svg';
import check from 'svg/check.svg';
import cross from 'svg/cross.svg';
import * as Icons from '.';
import './Svg.less';

export interface Props {
  size?: 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';
  className?: string;
}

type SvgType = (svg: string) => (props: Props) => JSX.Element;

const Svg: SvgType = svg => ({ className, size = 'normal' }) =>
  React.createElement('svg', {
    className: 'Svg ' + (className ? className : '') + (size ? ' Svg--' + size : ''),
    dangerouslySetInnerHTML: { __html: svg },
  });

export const Triangle: React.FC<Props> = props => Svg(triangle)(props);
export const Square: React.FC<Props> = props => Svg(square)(props);
export const Circle: React.FC<Props> = props => Svg(circle)(props);
export const Check: React.FC<Props> = props => Svg(check)(props);
export const Cross: React.FC<Props> = props => Svg(cross)(props);

export type IconsType = 'Triangle' | 'Square' | 'Circle' | 'Check' | 'Cross';

interface IconProps extends Props {
  name: IconsType;
}

export const Icon: React.FC<IconProps> = ({ name, size, className }) => {
  const Component = Icons[name];
  return <Component size={size} className={className} />;
};
