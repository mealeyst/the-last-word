import React, { Fragment, useState, MouseEventHandler, FunctionComponent } from 'react';
import Page, { PageProps } from './Page';

import { menu } from './data'

export default {
  title: 'Templates/Page',
  component: Page
};


const Template: FunctionComponent<PageProps> = (args) => {
  return(
    <Page {...args} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  menu
};