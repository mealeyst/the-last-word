import React, { Fragment, FunctionComponent } from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import Checkbox, { CheckboxProps } from './Checkbox';

const storyData = {
  title: 'Atoms/Inputs/Checkbox',
  component: Checkbox,
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

const Template: Story<CheckboxProps> = (args) => {
  return (
    <Fragment>
      <Checkbox {...args} name="example" value="1"  />
      <Checkbox {...args} name="example" value="2"  />
      <Checkbox {...args} name="example" value="3"  />
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