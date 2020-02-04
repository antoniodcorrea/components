import React from 'react';
import './LoaderBrute.less';

interface Props {
  state?: string;
}

const LoaderBrute: React.FC<Props> = ({ state }) => {
  return (
    <div className={'LoaderBrute' + (state ? 'Tag-' + state : '')}>
      <div className="LoaderBrute-square2">
        <div className="LoaderBrute-bar LoaderBrute-barTop" />
        <div className="LoaderBrute-bar LoaderBrute-barRight" />
        <div className="LoaderBrute-bar LoaderBrute-barBottom" />
        <div className="LoaderBrute-bar LoaderBrute-barLeft" />
      </div>
    </div>
  );
};

export default LoaderBrute;
