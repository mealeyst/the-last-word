import React from 'react';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { convertEnumToObject } from '../../utils/enum'
import Animation, { ANIMATION_NAMES } from './Animation';


export default {
  title: 'Atoms/Animations',
  component: Animation,
  argTypes: {
    name: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(ANIMATION_NAMES)
      }
    }
  }
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

export const Shake = Template.bind({});
Shake.args = {
  show: true,
  duration: 0.25,
  name: ANIMATION_NAMES.SHAKE
};


