import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';

import { Typography } from './typeography'
import  P from './P';


const storyData = {
  title: 'Atoms/Typography/P',
  component: P,
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

const Template: Story<Typography> = (args) => {
  return <P {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Paragraph',
  colorName: COLORS.GREY,
  font: FONT_FAMILY.BODY,
  shade: 0,
  size: FONT_SIZE.BASE
};

export default storyData

