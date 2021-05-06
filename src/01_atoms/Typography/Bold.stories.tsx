import React from 'react';

import { COLORS } from '../../00_quarks/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';

import { Typography } from './typeography'
import  Bold from './Bold';
import P from './P'


const storyData = {
  title: 'Atoms/Typography/BOLD',
  component: Bold,
  argTypes: {
    colorName: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(COLORS)
      }
    },
    font: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_FAMILY)
      }
    },
    shade: {
      control: { type: 'range', min: 0, max: 10 }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_SIZE)
      }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_WEIGHT)
      }
    },
  },
};

const Template = (args: Typography) => {
  return (
    <P>
      This is an example where we would like to <Bold {...args}>bold</Bold> an element
    </P>
  );
}

export const Default = Template.bind({});
Default.args = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.BODY,
  shade: 0,
  size: FONT_SIZE.BASE
};

export default storyData

