import React from 'react';

import './Spinner.less';

export type SpinnerSize = 'nano' | 'micro' | 'small' | 'normal' | 'medium' | 'big' | 'biggest' | 'huge';

interface Props {
  className?: string;
  speed?: 'fast' | 'normal' | 'slow';
  size?: SpinnerSize;
}

export const Spinner: React.FC<Props> = ({ speed = 'normal', className, size = 'normal' }) => (
  <div
    className={
      'Spinner' +
      (speed ? ' Spinner-speed--' + speed : '') +
      (className ? ' ' + className : '') +
      (size ? ' Spinner-size--' + size : '')
    }
  >
    <div className="Spinner-side Spinner-sideLeft">
      <span className="Spinner-fill Spinner-leftFill" />
    </div>
    <div className="Spinner-side Spinner-sideRight">
      <span className="Spinner-fill Spinner-rightFill" />
    </div>
  </div>
);
