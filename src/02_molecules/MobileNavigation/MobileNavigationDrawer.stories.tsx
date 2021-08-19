import React from 'react';
import Link, { LinkProps } from '../../01_atoms/Link/Link'
import MobileNavigationDrawer from './MobileNavigationDrawer';

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
};

type ArgTypes = {
  open: boolean,
  delay: number
}

const DarkLink= (props:LinkProps) => (
  <Link {...props} shade={10} />
)

const Template = (args: ArgTypes) => {
  return(
    <MobileNavigationDrawer open={args.open} delay={args.delay} absolute={false}>
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
  open: true,
  delay: 1000
};