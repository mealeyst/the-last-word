import React, { ReactNode } from 'react';
import {Meta, Story} from "@storybook/react";

import { COLORS } from '../../00_quarks/colors';
import { FONT_WEIGHT, FONT_SIZE, TEXT_TRANSFORM, FONT_FAMILY } from '../../00_quarks/typography';
import { convertEnumToObject } from '../../utils/enum';

import Link, { LinkProps } from './Link';

const storyData = {
  title: 'Atoms/Link',
  component: Link,
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
    transform: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(TEXT_TRANSFORM)
      }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(FONT_WEIGHT)
      }
    },
    underline: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.BASE,
  transform: TEXT_TRANSFORM.UPPERCASE,
  weight: FONT_WEIGHT.NORMAL,
  href: '#'
};

export default storyData