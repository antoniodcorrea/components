import React from 'react';
import './A.less';

interface Props {
  children: React.ReactNode;
  href: string;
  styled?: boolean;
  targetBlank?: boolean;
  onClick?: (any) => void;
}

const A: React.FC<Props> = ({ children, href, styled = false, targetBlank = false, onClick }) => (
  <a className={styled ? 'A' : ''} href={href} onClick={onClick} target={targetBlank ? '_blank' : ''}>
    {children}
  </a>
);
export default A;
