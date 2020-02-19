import React from 'react';
import './Svg.less';
import { ReactComponent as TriangleSvg } from 'svg/triangle.svg';
import { ReactComponent as SquareSvg } from 'svg/square.svg';
import { ReactComponent as CircleSvg } from 'svg/circle.svg';

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
