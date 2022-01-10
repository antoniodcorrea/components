import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

export type SortableItem = {
  id: number;
  order: number;
};

interface Props {
  id: string;
  className?: string;
  handleClass?: string;
  ghostClass?: string;
  chosenClass?: string;
  dragClass?: string;
  direction: 'vertical' | 'horizontal';
  onSortChange: (sortableItem: SortableItem) => void;
}

export const SortableList: React.FC<Props> = ({
  id,
  className,
  children,
  handleClass,
  ghostClass,
  chosenClass,
  dragClass,
  direction = 'vertical',
  onSortChange,
}) => {
  // Avoid instantiating Sortable if there are no children present
  const childrenLength = React.Children.count(children);
  if (!childrenLength) return null;

  useEffect(() => {
    const el = document.getElementById(id);

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
      handle: `.${handleClass}`,
      ghostClass,
      chosenClass,
      dragClass,
      direction,
    });
  }, [children]);

  return (
    <ul id={id} className={'SortableList' + (className ? ` ${className}` : '')}>
      {children}
    </ul>
  );
};
