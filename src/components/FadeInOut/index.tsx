import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { speedMap } from './speedMap';

import './FadeInOut.less';

export type FadeSpeed = 'slow' | 'normal' | 'normalSlow' | 'fast' | 'fastest';

interface Props {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  valueToUpdate: string | boolean | number;
  speed?: FadeSpeed;
  scrollToTop?: boolean;
  appear?: boolean;
}

export const FadeInOut: React.FC<Props> = ({
  children,
  className,
  valueToUpdate = '',
  speed = 'fast',
  scrollToTop,
  appear = false,
}) => (
  <SwitchTransition>
    <CSSTransition
      key={valueToUpdate.toString()}
      appear={appear}
      classNames="FadeInOut"
      className={'FadeInOut FadeInOut--' + speed + (className ? ` ${className}` : ' ')}
      timeout={{
        enter: speedMap[speed],
        exit: speedMap[speed],
      }}
      onExited={() => {
        scrollToTop &&
          window.scrollTo({
            top: 0,
          });
      }}
    >
      <div>{children}</div>
    </CSSTransition>
  </SwitchTransition>
);
