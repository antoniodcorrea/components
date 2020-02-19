import React from 'react';
import './LoaderSquaredSmooth.less';

interface Props {
  state?: string;
}

export const LoaderSquaredSmooth: React.FC<Props> = ({ state }) => {
  return (
    <div className={'LoaderSquaredSmooth' + (state ? 'Tag-' + state : '')}>
      <div className="LoaderSquaredSmooth-square">
        <svg className="LoaderSquaredSmooth-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.3 28.3">
          <path className="LoaderSquaredSmooth-pathStatic" fill="none" d="M0 0v28.3h28.3V0H0z" />
          <path className="LoaderSquaredSmooth-pathAnimated" fill="none" d="M0 0v28.3h28.3V0H0z" />
        </svg>
      </div>
    </div>
  );
};
