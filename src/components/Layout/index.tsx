import React from 'react';
import './Layout.less';

export type LayoutHorizontal = 'center' | 'right' | 'left' | 'even' | 'around' | 'between';
export type LayoutVertical = 'center' | 'top' | 'bottom';

interface Props {
  children: React.ReactNode;
  horizontal?: LayoutHorizontal;
  vertical?: LayoutVertical;
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
