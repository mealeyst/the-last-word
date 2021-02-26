import React from 'react';

import { Link } from './Link';

export default {
  title: 'Atoms/Link',
  component: Link
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: '#'
};

