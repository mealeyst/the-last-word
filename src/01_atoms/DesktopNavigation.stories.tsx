import React from 'react';
import { Link } from './Link'
import { DesktopNavigation } from './DesktopNavigation';

export default {
  title: 'Atoms/DesktopNavigation',
  component: DesktopNavigation
};

console.log(DesktopNavigation)

const Template = (args) => {
  return(
    <DesktopNavigation>
      <Link>Home</Link>
      <Link>Menus</Link>
      <Link>Gallery</Link>
      <Link>Press</Link>
      <Link>Contact</Link>
    </DesktopNavigation>
  )
}

export const Primary = Template.bind({});
Primary.args = {
};

