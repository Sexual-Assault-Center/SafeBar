import React, { useState } from 'react';

import RadioCheckComp from '../components/RadioCheck';

export default {
  title: 'Radio Check',
  component: RadioCheckComp,
};

export const RadioCheck = (args) => {
  const [checked, setChecked] = useState(false);
  console.warn(checked);
  return(
  <RadioCheckComp {...args} checked={checked} onChange={setChecked} label="check me" id="1" />
  );
};

// RadioCheck.args = {
//     label: "check me!",
//     id: 1,
// };
