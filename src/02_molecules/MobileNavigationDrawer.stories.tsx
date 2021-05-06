import React from 'react';
import Link from '../01_atoms/Link'
import MobileNavigationDrawer from './MobileNavigationDrawer';
import { COLORS } from '../00_quarks/colors'

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
};

type ArgTypes = {
  closed: boolean,
}

const DarkLink = (props) => (
  <Link {...props} shade={10} />
)

const Template = (args: ArgTypes) => {
  return(
    <MobileNavigationDrawer
      absolute={false}
      closed={args.closed}>
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
  closed: true
};