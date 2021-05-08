import React, { Fragment } from 'react';

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import { FONT_SIZE  } from '../../../00_quarks/typography'
import Input from './Input';

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
};

type ArgsType = {
  colorName: COLORS,
  shade: number,
  size: SIZES
}

const Template = (args: ArgsType) => {
  return (
    <Fragment>
      <Input name="example" {...args} />
    </Fragment>
  )
}

export const Default = Template.bind({});
Default.args = {
  colorName: COLORS.GREY,
  fontSize: FONT_SIZE.XL,
  shade: 0,
};

export default storyData