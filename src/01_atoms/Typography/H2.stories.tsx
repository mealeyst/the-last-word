import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';
import { Heading } from './typeography'
import H2 from './H2';

const storyData = {
  title: 'Atoms/Typography/H2',
  component: H2,
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
    weight: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_WEIGHT)
      }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_SIZE)
      }
    }
  },
} as Meta;

const Template: Story<Heading> = (args) => {
  return (<H2 {...args} />);
}

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Level 2',
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  weight: FONT_WEIGHT.BOLD,
  size: FONT_SIZE.XL3
};

export default storyData

