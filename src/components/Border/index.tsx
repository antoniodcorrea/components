import React from 'react';
import './Border.less';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  weight?: 'thick' | 'thin';
  padding?: 'small' | 'normal' | 'big';
  className?: string;
  grow?: boolean;
  onClick?: (any) => void;
  onMouseLeave?: (any) => void;
}

export const Border: React.FC<Props> = ({
  children,
  weight = 'thin',
  padding = 'normal',
  grow,
  className,
  onClick,
  onMouseLeave,
}) => (
  <div
    className={
      (className ? className + ' ' : '') +
      'Border' +
      (padding ? ' Border-' + padding : '') +
      (' Border--' + weight) +
      (grow ? ' Border--grow' : '')
    }
    onClick={onClick}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);
