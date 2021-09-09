import React from 'react';
import {Meta, Story} from "@storybook/react";

import { SIZES } from '../../00_quarks/sizing';
import { Grid as GridComponent, GridProps } from './Grid';

export default {
  title: 'Atoms/Layouts/Grid',
  component: GridComponent,
  argTypes: {
    childrenCount: {
      control: {
        type: 'range',
        min: 1,
        max: 10
      }
    }
  }
} as Meta;

type StoryProps = {
  childrenCount: number
}


const Template: Story<GridProps & StoryProps> = (args) => {
  const children = []
  for(let i = 0; i < args.childrenCount; i++){
    children.push(<div>Child {i}</div>);
}
  return (
    <GridComponent {...args}>
      {children.map((child) => {
        return child
      })}
    </GridComponent>
  )
}

export const Grid = Template.bind({});
Grid.args = {
  childrenCount: 3,
  gap: SIZES.S3,
  templateColumns: '1fr',
  templateRows: 'auto 1fr auto',
  templateAreas: "'header''main''footer'"
}