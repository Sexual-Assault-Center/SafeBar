import React from 'react';
import Image from './assets/wkb.jpeg';

import FeatureCardComp from '../components/FeatureCard';

export default {
  title: 'Feature Card',
  component: FeatureCardComp,
};

export const FeatureCard = (args) => <FeatureCardComp {...args} />;

FeatureCard.args = {
  img: `${Image}`,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  onClick: () => {},
  buttonText: "LEARN MORE",
};
