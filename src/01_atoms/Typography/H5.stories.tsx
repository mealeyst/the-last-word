import React, { ReactNode } from 'react';

import { COLORS } from '../../00_quarks/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';
import { Heading } from './typeography'
import  H5 from './H5';

const storyData = {
  title: 'Atoms/Typography/H5',
  component: H5,
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
    }
  },
};

const Template = (args: Heading) => {
  return <H5 {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Level 5',
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.SM,
  weight: FONT_WEIGHT.BOLD
};

export default storyData

