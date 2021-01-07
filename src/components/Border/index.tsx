import React from 'react';
import './Border.less';

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  weight?: 'thick' | 'thin';
  padding?: 'small' | 'normal' | 'big';
  grow?: boolean;
  onClick?: (any) => void;
  onMouseLeave?: (any) => void;
}

export const Border: React.FC<Props> = ({
  id,
  children,
  weight = 'thin',
  padding = 'normal',
  grow,
  className,
  onClick,
  onMouseLeave,
}) => (
  <div
    id={id}
    className={
      (className ? className + ' ' : '') +
      'Border' +
      (padding ? ' Border-padding--' + padding : '') +
      (' Border--' + weight) +
      (grow ? ' Border--grow' : '')
    }
    onClick={onClick}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);
