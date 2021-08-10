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
      description: 'Crisp pears and pecans with tender frisée and maple syrup with goat cheese. This Pear Arugula Salad is truly a classic Italian salad. The complementary flavors of peppery arugula, sweet juicy pears, creamy walnuts and salty Parmesan cheese create such a burst of flavors! You’ll love this salad even if you don’t like arugula.',
      price: 10.00,
      title: 'Asian Pear Salad'
    },
    {
      description: 'Autumn inspired apple walnut salad that comes together super quickly. It’s tossed in a delicious tangy balsamic vinaigrette. The perfect combo of sweet and savory.',
      price: 7.00,
      title: 'Apple Walnut Salad With Balsamic Vinaigrette'
    },
    {
      description: 'This classic and simple wedge salad is crisp and refreshing. A cold wedge of iceberg lettuce topped with a homemade creamy blue cheese dressing, bacon crumbles, diced tomato and chives. Perfect as a side dish for any meal or as a lunch!',
      price: 8.00,
      title: 'Classic Wedge Salad'
    },
    {
      description: 'This simple spinach salad is the perfect accompaniment to pretty much anything. We\'re all about sharp mustard vinaigrette paired with creamy feta and toasted almonds, but you can swap in your favorite cheese and nuts if you like!',
      price: 10.00,
      title: 'Spinach Salad'
    }
  ]
}

