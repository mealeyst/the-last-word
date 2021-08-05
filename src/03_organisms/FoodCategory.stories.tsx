import React, { useState } from 'react';
import FoodCategory, { FoodCategoryProps } from './FoodCategory';

export default {
  title: 'Organisms/FoodCategory',
  component: FoodCategory
};

const Template = (args: FoodCategoryProps) => {
  return(
    <FoodCategory  {...args} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  categoryName: 'Salads',
  foodItems: [
    {
      description: 'Crisp pears and pecans with tender frisée and maple syrup with goat cheeseThis Pear Arugula Salad is truly a classic Italian salad. The complementary flavors of peppery arugula, sweet juicy pears, creamy walnuts and salty Parmesan cheese create such a burst of flavors! You’ll love this salad even if you don’t like arugula.',
      price: 10.00,
      title: 'Asian Pear Salad'
    },
    {
      description: 'Crisp pears and pecans with tender frisée and maple syrup with goat cheeseThis Pear Arugula Salad is truly a classic Italian salad. The complementary flavors of peppery arugula, sweet juicy pears, creamy walnuts and salty Parmesan cheese create such a burst of flavors! You’ll love this salad even if you don’t like arugula.',
      price: 10.00,
      title: 'Asian Pear Salad'
    },
    {
      description: 'Crisp pears and pecans with tender frisée and maple syrup with goat cheeseThis Pear Arugula Salad is truly a classic Italian salad. The complementary flavors of peppery arugula, sweet juicy pears, creamy walnuts and salty Parmesan cheese create such a burst of flavors! You’ll love this salad even if you don’t like arugula.',
      price: 10.00,
      title: 'Asian Pear Salad'
    },
    {
      description: 'Crisp pears and pecans with tender frisée and maple syrup with goat cheeseThis Pear Arugula Salad is truly a classic Italian salad. The complementary flavors of peppery arugula, sweet juicy pears, creamy walnuts and salty Parmesan cheese create such a burst of flavors! You’ll love this salad even if you don’t like arugula.',
      price: 10.00,
      title: 'Asian Pear Salad'
    }
  ]
}

