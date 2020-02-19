import React from 'react';
import './SvgIcon.less';

interface Props {
  svg: string;
  className?: string;
  size?: 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';
}

export const SvgIcon: React.FC<Props> = ({ size, svg, className }) => (
  <svg className={'SvgIcon ' + (className ? className : '') + (size ? ' SvgIcon--' + size : '')}>
    <use xlinkHref={svg} />
  </svg>
);
