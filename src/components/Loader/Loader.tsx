import React from 'react';
import './Loader.less';

interface Props {
  state?: string;
}

const Loader: React.FC<Props> = ({ state }) => {
  return (
    <div className={'Loader' + (state ? 'Tag-' + state : '')}>
      <div className="Loader-square">
        <svg className="Loader-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.3 28.3">
          <path className="Loader-pathStatic" fill="none" d="M0 0v28.3h28.3V0H0z" />
          <path className="Loader-pathAnimated" fill="none" d="M0 0v28.3h28.3V0H0z" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
