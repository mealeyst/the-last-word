import React, { useRef, useState, Fragment } from 'react';
import {Meta, Story} from "@storybook/react";

import Modal, { ModalProps } from './Modal';
import H1 from '../../01_atoms/Typography/H1'
import Image from '../../01_atoms/Image/Image';
import { SIZES } from '../../00_quarks/sizing';
import { Button } from '../../01_atoms/Inputs/index';

const storyData = {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    onClose: {
      action: 'Modal Close Handler'
    }
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const container = document.body
  const [open, setOpen] = useState(true)
  return (
    <Fragment>
      <Image src='https://media.timeout.com/images/100494069/1372/772/image.jpg' imgWidth={SIZES.FULL} />
      <Button style={{position: 'absolute', top: '1rem', left: '1rem'}} onClick={() => setOpen(true)}>Show Modal</Button>
      {/* <div style={{width: '100vw', height: '200vh', backgroundColor: '#FFF'}}></div> */}
      <Modal container={container} open={open} onClose={(e) => {args.onClose(e); setOpen(false); }}>
        <H1>Hello World</H1>
      </Modal>
    </Fragment>
  )
};

export const Default = Template.bind({});
Default.args = {
};

export default storyData