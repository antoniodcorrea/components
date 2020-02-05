import React from 'react';
import './LoaderSquaredBrute.less';

interface Props {
  state?: string;
}

const LoaderSquaredBrute: React.FC<Props> = ({ state }) => {
  return (
    <div className={'LoaderSquaredBrute' + (state ? 'Tag-' + state : '')}>
      <div className="LoaderSquaredBrute-square2">
        <div className="LoaderSquaredBrute-bar LoaderSquaredBrute-barTop" />
        <div className="LoaderSquaredBrute-bar LoaderSquaredBrute-barRight" />
        <div className="LoaderSquaredBrute-bar LoaderSquaredBrute-barBottom" />
        <div className="LoaderSquaredBrute-bar LoaderSquaredBrute-barLeft" />
      </div>
    </div>
  );
};

export default LoaderSquaredBrute;
