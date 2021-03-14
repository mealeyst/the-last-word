import React from 'react';
import { Link } from '../01_atoms/Link'
import DesktopNavigation from './DesktopNavigation';

export default {
  title: 'Molecules/DesktopNavigation',
  component: DesktopNavigation
};

const Template = () => {
  return(
    <DesktopNavigation>
      <Link href="#">Home</Link>
      <Link href="#">Menus</Link>
      <Link href="#">Gallery</Link>
      <Link href="#">Press</Link>
      <Link href="#">Contact</Link>
    </DesktopNavigation>
  )
}

export const Primary = Template.bind({});

