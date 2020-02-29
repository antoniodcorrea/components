import React from 'react';
import TriangleSvg from 'svg/triangle.svg';
import SquareSvg from 'svg/square.svg';
import CircleSvg from 'svg/circle.svg';
import CheckSvg from 'svg/check.svg';
import CrossSvg from 'svg/cross.svg';
import ArrowRightSvg from 'svg/arrowRight.svg';
import * as Icons from '.';
import './Svg.less';

export interface Props {
  size?: 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';
  className?: string;
}

export type IconsType = 'Triangle' | 'Square' | 'Circle' | 'Check' | 'Cross' | 'ArrowRight';

export type SvgSpriteType = (
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
) => (props: Props) => JSX.Element;

const Svg: SvgSpriteType = SvgComponent => ({ className, size = 'normal' }) => (
  <SvgComponent className={'Svg ' + (className ? className : '') + (size ? ' Svg--' + size : '')} />
);

export const Triangle: React.FC<Props> = props => Svg(TriangleSvg)(props);
export const Square: React.FC<Props> = props => Svg(SquareSvg)(props);
export const Circle: React.FC<Props> = props => Svg(CircleSvg)(props);
export const Check: React.FC<Props> = props => Svg(CheckSvg)(props);
export const Cross: React.FC<Props> = props => Svg(CrossSvg)(props);
export const ArrowRight: React.FC<Props> = props => Svg(ArrowRightSvg)(props);

interface IconProps extends Props {
  name: IconsType;
}

export const SvgIcon: React.FC<IconProps> = ({ name, size, className }) => {
  const Component = Icons[name];
  return <Component size={size} className={className} />;
};
