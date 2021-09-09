import React, { Fragment } from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import Radio, { RadioProps } from './Radio';

const storyData = {
  title: 'Atoms/Inputs/Radio',
  component: Radio,
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
        options: convertEnumToObject(SIZES)
      }
    }
  }
} as Meta;


const Template: Story<RadioProps> = (args) => {
  return (
    <Fragment>
      <Radio {...args} name="example" value="1"  />
      <Radio {...args} name="example" value="2" />
      <Radio {...args} name="example" value="3" />
    </Fragment>
  )
}

export const Default = Template.bind({});
Default.args = {
  colorName: COLORS.GREY,
  shade: 0,
  size: SIZES.S6
};

export default storyData