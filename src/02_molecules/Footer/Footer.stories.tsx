import React from 'react';
import {Meta, Story} from "@storybook/react";

import Footer, { FooterProps } from './Footer';

export default {
  title: 'Molecules/Footer',
  component: Footer,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;


const Template: Story<FooterProps>  = (args) => {
  return(
    <Footer {...args} />
  )
}

export const Primary = Template.bind({});