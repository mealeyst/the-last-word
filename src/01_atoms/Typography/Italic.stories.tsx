import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors'
import { FONT_SIZE } from '../../00_quarks/typography'
import { convertEnumToObject } from '../../utils/enum';
import { Typography } from './typeography'
import Italic from './Italic';
import P from './P'

const storyData =  {
  title: 'Atoms/Typography/Italic',
  component: Italic,
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
    size: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_SIZE)
      }
    }
  }
} as Meta;

const Template: Story<Typography> = (args) => {
  return (
      <P>This is an example where we would like to <Italic {...args}>italicize</Italic> an element</P>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Aliquam viverra dolor eu metus vestibulum',
  colorName: COLORS.GREY,
  shade: 0,
  size: FONT_SIZE.BASE
};

export default storyData

