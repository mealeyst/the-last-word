import React from 'react';
import {Meta, Story} from "@storybook/react";

import Page, { PageProps } from './Page';

import { menus } from './data'

export default {
  title: 'Templates/Page',
  component: Page
} as Meta;


const Template: Story<PageProps> = (args) => {
  return(
    <Page {...args} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  menus
};