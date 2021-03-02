import React from 'react';

import { Bold } from './Bold';

export default {
  title: 'Atoms/Bold',
  component: Bold
};

const Template = (args) => <Bold {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Aliquam viverra dolor eu metus vestibulum',
  href: '#'
};

