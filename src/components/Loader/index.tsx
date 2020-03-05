import React from 'react';
import './Loader.less';

interface Props {
  loaded?: string | number;
  error?: boolean;
  grow?: boolean;
}

export const Loader: React.FC<Props> = ({ loaded, error, grow }) => {
  return (
    <div className={'Loader' + (error ? ' Loader--error' : '') + (grow ? ' Loader--grow' : '')}>
      <div className="Loader-loaded" style={{ width: loaded + '%' }} />
    </div>
  );
};
