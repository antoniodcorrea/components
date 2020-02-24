import React from 'react';
import './Svg.less';
import { ReactComponent as TriangleSvg } from './Icons/triangle.svg';
import { ReactComponent as SquareSvg } from './Icons/square.svg';
import { ReactComponent as CircleSvg } from './Icons/circle.svg';
import { ReactComponent as CheckSvg } from './Icons/check.svg';
import { ReactComponent as CrossSvg } from './Icons/cross.svg';

export const Svg = svg => ({ ...props }) =>
  React.cloneElement(svg, {
    className: 'Svg ' + (props.className ? props.className : '') + (props.size ? ' Svg--' + props.size : ''),
  });

interface Props {
  size?: 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';
  className?: string;
}

export const Triangle: React.FC<Props> = props => Svg(<TriangleSvg />)(props);
export const Circle: React.FC<Props> = props => Svg(<CircleSvg />)(props);
export const Square: React.FC<Props> = props => Svg(<SquareSvg />)(props);
export const Check: React.FC<Props> = props => Svg(<CheckSvg />)(props);
export const Cross: React.FC<Props> = props => Svg(<CrossSvg />)(props);
