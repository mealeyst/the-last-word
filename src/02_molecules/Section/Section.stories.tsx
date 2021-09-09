import React from 'react'

import Section, { SectionProps } from './Section'

const storyData = {
  title: 'Molecules/Section',
  component: Section
};

const Template = (args: SectionProps) => {
  const { children, ...props} = args
  return (
    <Section {...props}>
      {children}
    </Section>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non tellus tristique, interdum lacus a, vulputate mi. Aenean consequat condimentum risus, vitae tempor nulla volutpat in. Etiam consectetur ac ante sit amet hendrerit. Aliquam erat volutpat. In sagittis diam lectus, at scelerisque ante convallis id. Aenean et sem semper, bibendum elit vel, auctor mi. Nulla tristique rutrum dolor, nec dignissim arcu tristique ac. Cras consequat fringilla justo in condimentum. Aenean sit amet dui egestas, mattis erat nec, fermentum lorem. Sed facilisis, nisi sit amet ultrices luctus, augue augue posuere quam, nec maximus ex nunc sit amet augue. In blandit mattis felis ut dapibus. Aenean semper, tortor vel tempus placerat, quam dolor sodales risus, id maximus arcu ipsum eget orci. Phasellus accumsan erat ac lacinia fringilla. Nam nunc ex, eleifend nec arcu quis, congue tristique augue. Curabitur ut hendrerit ipsum. Morbi massa risus, consequat vel ultrices id, hendrerit quis lectus.`,
  id: 'lorem-ipsum',
  title: 'Lorem Ipsum',
}

export default storyData