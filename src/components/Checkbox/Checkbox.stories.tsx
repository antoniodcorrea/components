import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Checkbox } from '.';

export default {
  component: Checkbox,
  title: 'Checkbox',
  decorators: [withKnobs],
};

// export const Checked = () => <Checkbox {...defaultProps} state="checked" />;
export const Empty = () => {
  const [value, setValue] = useState(false);

  return <Checkbox value={value} onChange={e => setValue(e.target.checked)} label="Checkbox Label" />;
};
