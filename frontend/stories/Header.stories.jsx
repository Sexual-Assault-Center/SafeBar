import React from 'react';

import HeaderComp from './Header';

export default {
  title: 'Header',
  component: HeaderComp,
};

export const Header = (args) => <HeaderComp {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
