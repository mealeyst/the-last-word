import React from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../../00_quarks/colors'
import { FONT_FAMILY } from '../../../00_quarks/typography'
import { SIZES } from '../../../00_quarks/sizing'

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColorDefault: COLORS.GREY,
  backgroundColorHover: COLORS.GREY,
  backgroundShadeDefault: 10,
  backgroundShadeHover: 0,
  borderColorDefault: COLORS.GREY,
  borderColorHover: COLORS.GREY,
  borderWidth: SIZES.S1,
  borderShadeDefault: 10,
  borderShadeHover: 0,
  fontColorDefault: COLORS.GREY,
  fontColorHover: COLORS.GREY,
  fontFamily: FONT_FAMILY.HEADER,
  fontShadeDefault: 0,
  fontShadeHover: 10,
};

