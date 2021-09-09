import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';
import { Heading } from './typeography'
import H1 from './H1';


const storyData = {
  title: 'Atoms/Typography/H1',
  component: H1,
  argTypes: {
    colorName: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(COLORS)
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
  return (<H1 {...args} />)
}

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Level 1',
  colorName: COLORS.GREY,
  shade: 0,
  weight: FONT_WEIGHT.BOLD,
  size: FONT_SIZE.XL4
};

export default storyData
