import React, { Fragment, useState, MouseEventHandler } from 'react';
import Page from './Page';

export default {
  title: 'Templates/Page',
  component: Page
};

type ArgTypes = {
  open: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}


const Template = (args: ArgTypes) => {
  return(
    <Page />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  open: true
};