import React from 'react';
import './Loader.less';

interface Props {
  state?: string;
}

const Loader: React.FC<Props> = ({ state }) => {
  return (
    <div className={'Loader' + (state ? 'Tag-' + state : '')}>
      <div className="Loader-inner1" />
      <div className="Loader-inner2" />
    </div>
  );
};

export default Loader;
