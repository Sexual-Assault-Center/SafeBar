import React from 'react';

import ButtonComp from '../components/Button';

export default {
  title: 'Button',
  component: ButtonComp,
};

export const Button = (args) => <ButtonComp {...args} />;

Button.args = {
 buttonText: "This is a button",
 outline: false,
 type: 'button',
};
