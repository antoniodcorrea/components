import React from 'react';
import TriangleSvg from 'svg/triangle.svg';
import SquareSvg from 'svg/square.svg';
import CircleSvg from 'svg/circle.svg';
import CheckSvg from 'svg/check.svg';
import CrossSvg from 'svg/cross.svg';
import ArrowRightSvg from 'svg/arrowRight.svg';
import ArrowDownSvg from 'svg/arrowDown.svg';
import ArrowUpSvg from 'svg/arrowUp.svg';
import ArrowLeftSvg from 'svg/arrowLeft.svg';
import LoupeSvg from 'svg/loupe.svg';
import UploadSvg from 'svg/upload.svg';
import * as Icons from '.';
import { SvgClickEvent } from './Svg.types';
import './Svg.less';

export type IconSize = 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';

export type IconsType =
  | 'Triangle'
  | 'Square'
  | 'Circle'
  | 'Check'
  | 'Cross'
  | 'ArrowRight'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'Loupe'
  | 'upload';

export interface Props {
  size?: IconSize;
  className?: string;
  onClick?: (event: SvgClickEvent) => void;
}

export type SvgSpriteType = (
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
) => (props: Props) => JSX.Element;

const Svg: SvgSpriteType = (SvgComponent) => ({ className, size = 'normal', onClick }): React.ReactElement => (
  <SvgComponent
    className={'Svg ' + (className ? className : '') + (size ? ' Svg--' + size : '') + (onClick ? ' Svg--hover' : '')}
    onClick={onClick}
  />
);

export const Triangle: React.FC<Props> = (props) => Svg(TriangleSvg)(props);
export const Square: React.FC<Props> = (props) => Svg(SquareSvg)(props);
export const Circle: React.FC<Props> = (props) => Svg(CircleSvg)(props);
export const Check: React.FC<Props> = (props) => Svg(CheckSvg)(props);
export const Cross: React.FC<Props> = (props) => Svg(CrossSvg)(props);
export const ArrowRight: React.FC<Props> = (props) => Svg(ArrowRightSvg)(props);
export const ArrowUp: React.FC<Props> = (props) => Svg(ArrowUpSvg)(props);
export const ArrowDown: React.FC<Props> = (props) => Svg(ArrowDownSvg)(props);
export const ArrowLeft: React.FC<Props> = (props) => Svg(ArrowLeftSvg)(props);
export const Loupe: React.FC<Props> = (props) => Svg(LoupeSvg)(props);
export const Upload: React.FC<Props> = (props) => Svg(UploadSvg)(props);

interface IconProps extends Props {
  name: IconsType;
}

export const SvgIcon: React.FC<IconProps> = ({ name, size, className }) => {
  const Component = Icons[name];

  return <Component size={size} className={className} />;
};
