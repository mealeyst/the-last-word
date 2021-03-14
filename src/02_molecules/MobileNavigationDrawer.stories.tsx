import React from 'react';
import { Link } from '../01_atoms/Link'
import MobileNavigationDrawer from './MobileNavigationDrawer';

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
};

console.log(MobileNavigationDrawer)

const Template = () => {
  return(
    <MobileNavigationDrawer>
      <Link href="#" light={false}>Home</Link>
      <Link href="#" light={false}>Menus</Link>
      <Link href="#" light={false}>Gallery</Link>
      <Link href="#" light={false}>Press</Link>
      <Link href="#" light={false}>Contact</Link>
    </MobileNavigationDrawer>
  )
}

export const Primary = Template.bind({});
Primary.args = {
};