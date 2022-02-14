import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { DraggableSyntheticListeners } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import type { Transform } from '@dnd-kit/utilities';

import './Sortable.less';
import './SortableItem.less';

export interface Props {
  children: React.ReactChild;
  id: string;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  transition?: string | null;
  onRemove?(id: string): void;
}

export const SortableItem: React.FC<Props> = ({ children, id, onRemove }) => {
  const { active, listeners, setNodeRef, transform, transition, node, attributes } = useSortable({
    id,
  });

  const isActive = id === active?.id;
  const onRemoveHandle = (e) => {
    e.preventDefault();
    onRemove(id);
  };

  useEffect(() => {
    const remove = node?.current?.querySelector('#Remove') as HTMLElement;
    if (!remove) return;

    remove.addEventListener('mousedown', (e) => onRemoveHandle(e), { capture: true });
  }, [node]);

  useEffect(() => {
    // The handle behavior has to be tied to the handle only. Here we tie the original handler to DND behavior
    // The strategy is to get original handle, create a new one with behaviour, set the new one within the original one, and swap them

    // Get current handle
    const handle = node.current.querySelector('#Handle') as HTMLElement;
    if (!handle) return;
    // Get tag to create new element
    const tag = handle.tagName;

    // Create new element using original handle tag and its innerHtml
    const handleWrapper: React.ReactElement = React.createElement(
      tag.toLowerCase(),
      {
        className: handle.className,
        id: handle.id,
        ...listeners,
        ...attributes,
      },
      handle.innerHTML
    );

    // Render clone within handle and do actions asynchronously
    ReactDOM.render(handleWrapper, handle, () => {
      // Replace outer handle with inner one
      const outerHandle = node.current.querySelector('#Handle');
      handle.parentElement.replaceChild(outerHandle.firstChild, outerHandle);
    });
  }, []);

  const clonedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return;

    return React.cloneElement(child, {
      ...child.props,
      className:
        'SortableItem' +
        (child.props.className ? ` ${child.props.className}` : '') +
        (isActive ? ' SortableItem--active' : ''),
      style: {
        transition: transition,
        '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
        '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
        ...child.props.style,
      } as React.CSSProperties,
      tabIndex: 0,
      ref: setNodeRef,
    });
  });

  return <>{clonedChildren}</>;
};
