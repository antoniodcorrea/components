import React from 'react';
import './Flex.less';

export type FlexHorizontal = 'center' | 'right' | 'left' | 'even' | 'around' | 'between';
export type FlexVertical = 'center' | 'top' | 'bottom';

interface Props {
  children: React.ReactNode;
  horizontal?: FlexHorizontal;
  vertical?: FlexVertical;
  noWrap?: boolean;
  growVertical?: boolean;
}

export const Flex: React.FC<Props> = ({ children, horizontal, vertical, noWrap, growVertical = true }) => (
  <div
    className={
      'Flex' +
      (horizontal ? ' Flex-horizontal--' + horizontal : '') +
      (vertical ? ' Flex-vertical--' + vertical : '') +
      (!!noWrap ? ' Flex-noWrap' : '') +
      (!!growVertical ? ' Flex-growVertical' : '')
    }
  >
    {children}
  </div>
);
