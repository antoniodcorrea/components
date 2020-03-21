import React from 'react';
import './Ul.less';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Ul: React.FC<Props> = ({ children, className }): JSX.Element => {
  return <ul className={'Ul ' + (className ? className : '')}>{children}</ul>;
};
