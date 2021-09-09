import React from 'react';
import {Meta, Story} from "@storybook/react";

import TextLogo, { TextLogoProps } from './TextLogo';

export default {
  title: 'Atoms/TextLogo',
  component: TextLogo
} as Meta;

const Template: Story<TextLogoProps> = () => <TextLogo />;

export const Default = Template.bind({});

