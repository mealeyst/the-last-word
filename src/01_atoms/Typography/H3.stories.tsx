import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';
import { Heading } from './typeography'
import  H3 from './H3';

const storyData = {
  title: 'Atoms/Typography/H3',
  component: H3,
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
} as Meta;

const Template: Story<Heading> = (args) => {
  return (<H3 {...args} />);
}

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Level 3',
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.XL2,
  weight: FONT_WEIGHT.BOLD
};

export default storyData

