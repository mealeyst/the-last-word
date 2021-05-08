import React from 'react';
import { COLORS } from '../../../00_quarks/colors'
import { FONT_FAMILY } from '../../../00_quarks/typography'
import { SIZES } from '../../../00_quarks/sizing'

import { Button } from './Button';

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type ArgTypes = {
  primary: boolean,
  children: string
}

const Template = (args: ArgTypes) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 10,
        hover: 0
      },
      alpha: {
        default: 0,
        hover: 1
      }
    }
  },
  border: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 0,
        hover: 0
      }
    },
    width: {
      default: SIZES.S1,
      hover: SIZES.S1
    }
  },
  font: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 0,
        hover: 10
      }
    },
    family: FONT_FAMILY.HEADER
  },
  children: 'Button',
};

