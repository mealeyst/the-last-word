import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import { FONT_SIZE  } from '../../../00_quarks/typography'
import Select, { SelectProps } from './Select';

const storyData = {
  title: 'Atoms/Inputs/Select',
  component: Select,
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


const Template: Story<SelectProps> = (args) => {
  return (
    <Select name="example" {...args}>
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </Select>
  )
}

export const Default = Template.bind({});
Default.args = {
  colorName: COLORS.GREY,
  fontSize: FONT_SIZE.XL,
  shade: 0,
};

export default storyData