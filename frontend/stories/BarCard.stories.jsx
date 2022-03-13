import React from 'react';
import Image from './assets/wkb.jpeg';

import BarCardComp from '../components/BarCard';

export default {
  title: 'Bar Card',
  component: BarCardComp,
};

export const BarCard = (args) => <BarCardComp {...args} />;

BarCard.args = {
  img: `${Image}`,
  name: 'Whiskey Kitchen',
  street: '118 12th Ave S',
  city: 'Nashville',
  zip: '37203',
  phone: '(615) 254-3029',
};
