import React from 'react';
import {Meta, Story} from "@storybook/react";

import { SIZES } from '../../00_quarks/sizing'
import { convertEnumToObject } from '../../utils/enum';

import Image, { ImageProps } from './Image';

const storyData = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    imgWidth: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(SIZES)
      }
    }
  }
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://media.timeout.com/images/100494069/1372/772/image.jpg',
  imgWidth: SIZES.FULL
};

export default storyData