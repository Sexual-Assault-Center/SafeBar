import React, { useState } from 'react';

import TextAreaComp from '../components/TextArea';

export default {
  title: 'Text Area',
  component: TextAreaComp,
};

export const TextArea = (args) => {
  const [value, setValue] = useState('');
  console.warn(value);
  const onChange = (e) => setValue(e.target.value);
  return <TextAreaComp {...args} value={value} onChange={onChange} />;
};

TextArea.args = {
  placeholder: 'Comments',
  label: 'Comments',
};
