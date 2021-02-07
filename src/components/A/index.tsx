import React from 'react';
import { Link } from 'react-router-dom';
import { testAddDefaultProtocol } from '../../../tools/utils/url/testAddDefaultProtocol';

import './A.less';

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  frontend?: boolean;
  styled?: boolean;
  targetBlank?: boolean;
  disabled?: boolean;
  title?: string;
  underlined?: boolean;
  onClick?: (any) => void;
}

export const A: React.FC<Props> = ({
  children,
  className,
  href,
  frontend = false,
  styled = true,
  targetBlank = false,
  onClick,
  disabled = false,
  title,
  underlined = false,
}) => {
  const _className =
    (styled ? 'A' : 'A--default') +
    (className ? ' ' + className : '') +
    (styled && disabled ? ' A--disabled' : '') +
    (styled && underlined ? ' ' + 'A--underlined' : '');

  const target = targetBlank ? '_blank' : '_self';
  const hrefWithProtocolTested = testAddDefaultProtocol(href);

  return (
    <>
      {!frontend && (
        <a className={_className} onClick={onClick} title={title} href={hrefWithProtocolTested} target={target}>
          {children}
        </a>
      )}
      {frontend && (
        <Link className={_className} onClick={onClick} title={title} to={hrefWithProtocolTested} target={target}>
          {children}
        </Link>
      )}
    </>
  );
};
