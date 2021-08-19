import React, { useRef, useState, Fragment } from 'react';
import Modal, { ModalProps } from './Modal';
import H1 from '../../01_atoms/Typography/H1'
import Image from '../../01_atoms/Image/Image';
import { SIZES } from '../../00_quarks/sizing';
import { Button } from '../../01_atoms/Inputs';

const storyData = {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    onClose: {
      action: 'Modal Close Handler'
    }
  },
};

const Template = (args: ModalProps) => {
  const container = document.body
  const [show, setShow] = useState(true)
  return (
    <Fragment>
      <Image src='https://media.timeout.com/images/100494069/1372/772/image.jpg' imgWidth={SIZES.FULL} />
      <Button style={{position: 'absolute', top: '1rem', left: '1rem'}} onClick={() => setShow(true)}>Show Modal</Button>
      {/* <div style={{width: '100vw', height: '200vh', backgroundColor: '#FFF'}}></div> */}
      <Modal container={container} show={show} onClose={(e) => {args.onClose(e); setShow(false); }}>
        <H1>Hello World</H1>
      </Modal>
    </Fragment>
  )
};

export const Default = Template.bind({});
Default.args = {
};

export default storyData