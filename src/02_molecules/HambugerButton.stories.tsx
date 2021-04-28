import React, { FunctionComponent, MouseEventHandler, useState } from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'Molecules/HamburgerButton',
  component: HamburgerButton,
  argTypes: { onClick: { action: 'clicked' } },
};


type ArgTypes = {
  closed: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Template = (args: ArgTypes) => {
  const [closed, setClosed] = useState(args.closed)
  const handleClick = (event: any) => {
    setClosed(!closed)
    args.onClick(event)
  }
  return(
    <HamburgerButton closed={closed} onClick={handleClick} absolute={false} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  closed: false
};