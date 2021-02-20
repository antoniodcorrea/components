import React, { useEffect, useRef } from 'react';

import { Border } from '../Border';
import { Span } from '../Span';
import { createPopper } from '@popperjs/core';

import './Tooltip.less';

const DELAY_SLOW_SECONDS = 2;

interface Props {
  content: string;
  parentElementId: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  delay?: number; // In seconds
}

export const Tooltip: React.FC<Props> = ({ content, parentElementId, delay, placement = 'right' }) => {
  let MountDelayed;
  const tooltipElementRef = useRef(null);
  const computedDelay = delay === 0 ? 0 : delay || DELAY_SLOW_SECONDS;

  const mountTooltip = () => {
    MountDelayed = setTimeout(() => {
      tooltipElementRef.current.setAttribute('data-show', '');
    }, computedDelay * 1000);
  };

  const unmountTooltip = () => {
    tooltipElementRef.current.removeAttribute('data-show');

    clearTimeout(MountDelayed);
  };

  useEffect(() => {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) return;

    parentElement.addEventListener('mouseenter', mountTooltip);
    parentElement.addEventListener('mouseleave', unmountTooltip);

    return () => {
      parentElement.removeEventListener('mouseenter', mountTooltip);
      parentElement.removeEventListener('mouseleave', unmountTooltip);
    };
  });

  useEffect(() => {
    const parentElement = document.getElementById(parentElementId);

    createPopper(parentElement, tooltipElementRef.current, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        // Important: to avoid creating scroll and resize listeners we need to pass this «modifier»
        // https://github.com/chakra-ui/chakra-ui/issues/2531
        {
          name: 'eventListeners',
          options: {
            scroll: false,
            resize: false,
          },
        },
      ],
    });
  }, [placement, parentElementId]);

  return (
    <div className="Tooltip" ref={tooltipElementRef} aria-describedby="tooltip">
      <Border padding="small">
        <Span bold>{content}</Span>
      </Border>
      <div className="Tooltip-arrow" data-popper-arrow />
    </div>
  );
};

export default Tooltip;
