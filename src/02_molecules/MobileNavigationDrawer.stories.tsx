import React, { Fragment } from 'react';
import Link from '../01_atoms/Link'
import MobileNavigationDrawer from './MobileNavigationDrawer';
import { COLORS } from '../00_quarks/colors'

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
};

type ArgTypes = {
  open: boolean,
}

const DarkLink = (props) => (
  <Link {...props} shade={10} />
)

const Template = (args: ArgTypes) => {
  return(
    <MobileNavigationDrawer open={args.open}  absolute={false}>
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
  open: true
};