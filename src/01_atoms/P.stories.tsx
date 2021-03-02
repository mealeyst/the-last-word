import React from 'react';

import { P } from './P';

export default {
  title: 'Atoms/P',
  component: P
};

const Template = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis justo eget convallis faucibus. Nullam facilisis purus ut efficitur rhoncus. Ut ipsum eros, condimentum quis augue non, mattis porttitor nisi. Suspendisse potenti. Mauris et enim id enim feugiat consequat ut at nulla. Aenean vel luctus quam. Phasellus semper aliquet enim sed sodales. Nulla accumsan ante a libero tincidunt auctor. Phasellus aliquet, nibh a pulvinar sollicitudin, dolor tortor pretium tortor, sed lacinia enim ligula sit amet tellus. Nunc sollicitudin, ligula vel venenatis porta, turpis felis sagittis lorem, id fermentum diam nibh eget sapien. Suspendisse eu congue nunc. Maecenas in congue tortor. Maecenas quis condimentum lacus. Vivamus in tincidunt leo. Donec porttitor quam gravida nisl accumsan faucibus. Duis hendrerit, quam a commodo scelerisque, arcu arcu placerat diam, non suscipit nisl mi eget mauris.',
  href: '#'
};

