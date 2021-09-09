import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import { FONT_SIZE  } from '../../../00_quarks/typography'
import Input, { InputProps } from './Input';

const storyData = {
  title: 'Atoms/Inputs/Input',
  component: Input,
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
    fontSize: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_SIZE)
      }
    }
  }
} as Meta;

const Template: Story<InputProps> = (args) => {
  return (
    // @ts-ignore
    <Input {...args} name="example" />
  )
}

export const Default = Template.bind({});
Default.args = {
  colorName: COLORS.GREY,
  fontSize: FONT_SIZE.XL,
  shade: 0,
};

export default storyData