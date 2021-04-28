import React from 'react';
import { Link } from '../01_atoms/Link'
import LayoutRow from './LayoutRow';

export default {
  title: 'Molecules/LayoutRow',
  component: LayoutRow
};


const 

const Template = () => {
  return(
    <LayoutRow>
      <Link href="#" light={false}>Home</Link>
      <Link href="#" light={false}>Menus</Link>
      <Link href="#" light={false}>Gallery</Link>
      <Link href="#" light={false}>Press</Link>
      <Link href="#" light={false}>Contact</Link>
    </LayoutRow>
  )
}

export const Primary = Template.bind({});
Primary.args = {
};