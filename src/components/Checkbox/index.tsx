import React from 'react';
import './Checkbox.less';

interface Props {
  state: string;
  id: string;
  title: string;
  onArchiveTask: (id: string) => void;
}

export const Checkbox: React.FC<Props> = ({ id, title, state, onArchiveTask }) => {
  return (
    <div className={'Checkbox ' + (state ? 'Checkbox-' + state : '')} onClick={() => onArchiveTask(id)}>
      <label className="Checkbox-label">
        <input defaultChecked={state === 'checked'} type="checkbox" />
      </label>
      <div className="Checkbox-title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>
    </div>
  );
};
