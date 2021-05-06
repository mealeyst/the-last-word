import React, { Fragment } from 'react';

import Radio from './Radio';

const storyData = {
  title: 'Atoms/Inputs/Radio',
  component: Radio,
};

const Template = (args: ArgsType) => {
  return (
    <Fragment>
      <Radio name="example" value="1"/>
      <Radio name="example" value="2"/>
      <Radio name="example" value="3"/>
    </Fragment>
  )
}

export const Default = Template.bind({});
Default.args = {
};

export default storyData