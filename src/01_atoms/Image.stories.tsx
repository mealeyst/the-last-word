import React, { ReactNode } from 'react';
import { SIZES } from '../00_quarks/sizing'
import { convertEnumToObject } from '../utils/enum';

import Image from './Image';

type ArgsType = {
  children: ReactNode,
  src: string,
  imgWidth?: SIZES
}

const storyData = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: 'https://media.timeout.com/images/100494069/1372/772/image.jpg',
    imgWidth: {
      control: {
        type: 'inline-radio',
        options: convertEnumToObject(SIZES)
      }
    }
  }
};

const Template = (args: ArgsType) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://media.timeout.com/images/100494069/1372/772/image.jpg',
  imgWidth: SIZES.FULL
};

export default storyData