import React, { useState } from 'react';

import SearchbarComp from '../components/Searchbar';

export default {
  title: 'Searchbar',
  component: SearchbarComp,
};

export const Searchbar = (args) => {
  const [value, setValue] = useState('');
  console.warn(value);
  const onChange = (e) => setValue(e.target.value);
  return <SearchbarComp {...args} value={value} onChange={onChange} />;
};

Searchbar.args = {
  placeholder: 'Search for something',
  label: 'Search',
};
