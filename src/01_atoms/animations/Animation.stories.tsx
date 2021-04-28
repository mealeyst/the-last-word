import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Animation, { ANIMATION_NAMES } from './Animation';


export default {
  title: 'Atoms/Animations',
  component: Animation
};

const Template = (args: any) => {
  return (
    <Animation {...args}>
      <FontAwesomeIcon className='menu' icon={faBars} aria-hidden="true" />
    </Animation>
  );
}

export const Fade = Template.bind({});
Fade.args = {
  show: true,
  duration: 0.25,
  name: ANIMATION_NAMES.FADE
};

