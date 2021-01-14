import React from 'react';
import './SpinnerSquaredSmooth.less';

export type SpinnerSquaredSmoothSize = 'nano' | 'small' | 'medium';

interface Props {
  size?: SpinnerSquaredSmoothSize;
}

export const SpinnerSquaredSmooth: React.FC<Props> = ({ size = 'medium' }) => {
  return (
    <div className={'SpinnerSquaredSmooth' + (size ? ' SpinnerSquaredSmooth-' + size : '')}>
      <div className="SpinnerSquaredSmooth-square">
        <svg className="SpinnerSquaredSmooth-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.3 28.3">
          <path className="SpinnerSquaredSmooth-pathStatic" fill="none" d="M0 0v28.3h28.3V0H0z" />
          <path className="SpinnerSquaredSmooth-pathAnimated" fill="none" d="M0 0v28.3h28.3V0H0z" />
        </svg>
      </div>
    </div>
  );
};
