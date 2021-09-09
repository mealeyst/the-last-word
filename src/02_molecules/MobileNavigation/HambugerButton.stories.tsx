import React from 'react';
import {Meta, Story} from "@storybook/react";

import HamburgerButton, { HamburgerButtonProps } from './HamburgerButton';

export default {
  title: 'Molecules/HamburgerButton',
  component: HamburgerButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;


const Template: Story<HamburgerButtonProps>  = (args) => {
  return(
    <HamburgerButton {...args} absolute={false} />
  )
}

export const Primary = Template.bind({});