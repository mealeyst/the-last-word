import React from 'react';

import { Link } from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Link',
  href: '#'
};

