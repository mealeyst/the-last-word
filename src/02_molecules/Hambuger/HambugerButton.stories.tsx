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
  const [open, setClosed] = useState(args.open)
  const handleClick = (event: any) => {
    setClosed(!open)
    args.onClick(event)
  }
  return(
    <HamburgerButton open={open} onClick={handleClick} absolute={false} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  open: true
};