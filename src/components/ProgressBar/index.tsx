import React from 'react';

import './ProgressBar.less';

interface Props {
  loaded?: string | number;
  className?: string;
  error?: boolean;
  grow?: boolean;
}

export const ProgressBar: React.FC<Props> = ({ loaded, className, error, grow }) => (
  <div
    className={
      'ProgressBar' +
      (error ? ' ProgressBar--error' : '') +
      (className ? ' ' + className : '') +
      (grow ? ' ProgressBar--grow' : '')
    }
  >
    <div className="ProgressBar-loaded" style={{ width: loaded + '%' }} />
  </div>
);
