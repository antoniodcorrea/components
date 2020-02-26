import React from 'react';
import Svg from './Svg';
import triangle from '../Svg/Icons/triangle.svg';
import square from '../Svg/Icons/square.svg';
import circle from '../Svg/Icons/circle.svg';
import check from '../Svg/Icons/check.svg';
import cross from '../Svg/Icons/cross.svg';

interface Props {
  size?: 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';
  className?: string;
}

export const Triangle: React.FC<Props> = props => Svg(triangle)(props);
export const Square: React.FC<Props> = props => Svg(square)(props);
export const Circle: React.FC<Props> = props => Svg(circle)(props);
export const Check: React.FC<Props> = props => Svg(check)(props);
export const Cross: React.FC<Props> = props => Svg(cross)(props);
