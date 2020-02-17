import React from 'react';
import './Hr.less';

interface Props {
  type?: 'transparent' | 'shrink';
}

const Hr: React.FC<Props> = ({ type }) => <hr className={'Hr' + (type ? ' Hr--' + type : '')} />;

export default Hr;
