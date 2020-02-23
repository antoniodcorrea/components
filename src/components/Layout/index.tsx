import React from 'react';
import './Layout.less';

interface Props {
  children: React.ReactNode;
  horizontal?: 'center' | 'right' | 'left' | 'even' | 'around' | 'between';
  vertical?: 'center' | 'top' | 'bottom';
}

export const Layout: React.FC<Props> = ({ children, horizontal, vertical }) => (
  <div
    className={
      'Layout' +
      (horizontal ? ' Layout-horizontal--' + horizontal : '') +
      (vertical ? ' Layout-vertical--' + vertical : '')
    }
  >
    {children}
  </div>
);
