import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

export type SortableItem = {
  id: number;
  order: number;
};

interface Props {
  className?: string;
  handleClass?: string;
  ghostClass?: string;
  chosenClass?: string;
  dragClass?: string;
  onSortChange: (sortableItem: SortableItem) => void;
}

export const SortableList: React.FC<Props> = ({
  className,
  children,
  onSortChange,
  handleClass,
  ghostClass,
  chosenClass,
  dragClass,
}) => {
  // Avoid instantiating Sortable if there are no children present
  const childrenLength = React.Children.count(children);
  if (!childrenLength) return null;

  useEffect(() => {
    const el = document.getElementById('SortableList');

    Sortable.create(el, {
      animation: 300,
      onEnd: (e) => {
        const oldIndex = e.oldIndex;
        const newIndex = e.newIndex;
        const directionUp = oldIndex < newIndex;

        const itemId = Number(e.item.getAttribute('data-id'));
        const element = directionUp ? e.item.previousElementSibling : e.item.nextElementSibling;
        const order = Number(element.getAttribute('data-order'));

        onSortChange({
          id: itemId,
          order,
        });
      },
      handle: handleClass,
      ghostClass,
      chosenClass,
      dragClass,
    });
  }, [children]);

  return (
    <ul id="SortableList" className={'SortableList' + (className ? ` ${className}` : '')}>
      {children}
    </ul>
  );
};
