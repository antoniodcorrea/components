import React from 'react';
import './A.less';

interface Props {
  children: React.ReactNode;
  href: string;
  styled?: boolean;
  targetBlank?: boolean;
  disabled?: boolean;

  onClick?: (any) => void;
}

const A: React.FC<Props> = ({ children, href, styled = true, targetBlank = false, onClick, disabled = false }) => (
  <a
    className={(styled ? 'A' : '') + (styled && disabled ? ' A-disabled' : '')}
    href={href}
    onClick={onClick}
    target={targetBlank ? '_blank' : '_self'}
  >
    {children}
  </a>
);
export default A;
