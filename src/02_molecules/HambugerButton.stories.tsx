import React, { FunctionComponent, MouseEventHandler, useState } from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'Molecules/HamburgerButton',
  component: HamburgerButton,
  argTypes: { onClick: { action: 'clicked' } },
};


type ArgTypes = {
  open: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Template = (args: ArgTypes) => {
  console.log(args)
  const [open, setOpen] = useState(args.open)
  const handleClick = (event: any) => {
    setOpen(!open)
    args.onClick(event)
  }
  return(
    <HamburgerButton open={open} onClick={handleClick} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  open: false
};