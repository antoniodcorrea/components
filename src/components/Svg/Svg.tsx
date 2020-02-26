import React from 'react';
import './Svg.less';

export const Svg = svg => ({ ...props }) =>
  React.createElement('svg', {
    className: 'Svg ' + (props.className ? props.className : '') + (props.size ? ' Svg--' + props.size : ''),
    dangerouslySetInnerHTML: { __html: svg },
  });

export default Svg;
