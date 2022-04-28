import React from 'react';

import IconButtonComp from '../components/IconButton';

export default {
  title: 'Icon Button',
  component: IconButtonComp,
};

export const IconButton = (args) => (
    <IconButtonComp {...args}>
        <p>i</p>
    </IconButtonComp>
);


IconButton.args = {
 onClick: () => {},
 text: "some text"
};
