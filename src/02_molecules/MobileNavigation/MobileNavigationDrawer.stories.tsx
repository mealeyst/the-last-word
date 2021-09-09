import React, { useState } from 'react';
import {Meta, Story} from "@storybook/react";

import Link, { LinkProps } from '../../01_atoms/Link/Link'
import MobileNavigationDrawer, { MobileDrawerProps} from './MobileNavigationDrawer';

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
} as Meta;


const DarkLink= (props:LinkProps) => (
  <Link {...props} shade={10} />
)

const Template: Story<MobileDrawerProps> = (args) => {
  const container = document.body
  const [open, setOpen] = useState(true)
  return(
    <MobileNavigationDrawer container={container} open={open} delay={args.delay} absolute={false} onClose={() => setOpen(false)}>
      <DarkLink href="#" >Home</DarkLink>
      <DarkLink href="#">Menus</DarkLink>
      <DarkLink href="#">Gallery</DarkLink>
      <DarkLink href="#">Press</DarkLink>
      <DarkLink href="#">Contact</DarkLink>
    </MobileNavigationDrawer>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  delay: 1000
};