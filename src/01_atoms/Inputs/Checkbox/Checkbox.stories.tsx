import React, { Fragment, FunctionComponent } from 'react';

import { COLORS } from '../../../00_quarks/colors'
import { SIZES } from '../../../00_quarks/sizing';
import { convertEnumToObject } from '../../../utils/enum'
import Checkbox from './Checkbox';

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
};

type ArgsType = {
  colorName: COLORS,
  shade: number,
  size: SIZES
}

const Template = (args: ArgsType) => {
  return (
    <Fragment>
      <Checkbox name="example" value="1" {...args} />
      <Checkbox name="example" value="2" {...args} />
      <Checkbox name="example" value="3" {...args} />
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