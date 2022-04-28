import React from 'react';

import AccordionComp from '../components/Accordion';

export default {
  title: 'Accordion',
  component: AccordionComp,
};

export const Accordion = (args) => <AccordionComp {...args} />;

Accordion.args = {
    title: "title",
    text: "text",
};




