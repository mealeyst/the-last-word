import React from 'react';

import { Italic } from './Italic';

export default {
  title: 'Atoms/Italic',
  component: Italic
};

const Template = (args) => <Italic {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Aliquam viverra dolor eu metus vestibulum',
  href: '#'
};

