import React from 'react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type ArgTypes = {
  primary: boolean,
  children: string
}

const Template = (args: ArgTypes) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

