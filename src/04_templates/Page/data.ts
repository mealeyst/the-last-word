export const menus = [
  {
    title: 'Food',
    id: 'food',
    categories: [
      {
        categoryName: 'Ceviche',
        categoryDetails: "All ceviche is served with white corn and sweet potato.",
        foodItems: [
          {
            description: 'Cured in fresh lime juice mixed with red onion, limo pepper, celery, and cilantro ceviche.',
            title: 'Ceviche ~ Fresh Catch of the Day* ',
            price: 19,
          },
          {
            title: 'De Camaron (Shrimp)',
            price: 19,
          },
          {
            title: 'Ceviche Mixto (Mixed Seafood Shrimp and Fish)*',
            price: 20,
          }
        ],
        warning: '*This item can be cooked to your liking. Consuming raw or undercooked meats, fish, shellfish, or fresh shell eggs may increase your risk of food-borne illness, especially if you have certain medical conditions.'
      },
      {
        categoryName: 'Cold Dishes',
        foodItems: [
          {
            description: 'Beef steak tomato, cucumber and red onion marinated in a red wine vinaigrette.',
            title: 'Tomato Salad',
            price: 12,
          },
          {
            description: 'Mussels marinated in fresh lime juice tossed with peruvian white corn, shallot, limo pepper, jalapeño. Topped with cilantro.',
            title: 'Choros A La Chalaca (Mussels)',
            price: 16,
          },
          {
            description: 'Boiled potato (served cold) sliced and topped with huancaina, hard boiled egg, kalamata olives and cilantro.',
            title: 'Papa A La Huancaina (Potatoes)',
            price: 12,
          },
          {
            description: 'Shredded chicken with peas, yucca, and potato topped with huancaina, avocado, red onion, cilantro and kalamata olive puree.',
            title: 'Causa De Pollo (Chicken)',
            price: 17,
          },
          {
            title: 'Causa De Camaron (Shrimp)',
            price: 19,
          }
        ]
      },
      {
        categoryName: 'Vegan Dishes',
        foodItems: [
          {
            description: 'Red quinoa topped with marinated naval orange, roasted chick pea, sweet potato, and avocado-jalapaño-lime sauce.',
            title: 'Red Quinoa Bowl',
            price: 15,
          },
          {
            description: 'Red quinoa stuffed in a yucca-potato ball served with red onion and avocado-jalapaño-lime sauce.',
            title: 'Papa Rellena De Quinoa',
            price: 14,
          }
        ]
      },
      {
        categoryName: 'Hot Plates',
        foodItems: [
          {
            description: 'Ground Beef and egg stuffed in yucca-potato ball served with aji verde, red onion, cilantro leaf.',
            title: 'Papa Rellena (Fried Potato Balls)',
            price: 16,
          },
          {
            description: 'Mixed seafood platter (cod, calamari, mussels, shrimp) deep fried over yucca fries. Served with aji verde and huancaina.',
            title: 'Jalea (Fried Seafood Plater)',
            price: 25,
          },
          {
            description: 'Skirt steak sautéed with red onion and tomato, served in a toasted bread bowl topped with cilantro',
            title: 'Lomito Saltado (Stir Fry Skirt Steak)*',
            price: 25,
          }
        ]
      },
      {
        categoryName: 'Tacos',
        foodItems: [
          {
            description: 'Old bay shrimp with lime slaw, avocado, pickled red onion in a corn tortilla side avocado-jalapano-lime sauce.',
            title: 'Old Bay Shrimp Tacos',
            price: 13,
          },
          {
            title: 'Old Bay Cod Fish Tacos',
            price: 13,
          }
        ]
      },
      {
        categoryName: 'Sides',
        foodItems: [
          { 
            title: 'Yucca Fries',
            price: 8, 
          }, 
          {
            title: 'Truffel Fries',
            price: 12, 
          }, 
          {
            title: 'Regular French Fries',
            price: 8, 
          }
        ]
      }
    ]
  },
  {
    title: 'Cocktails',
    id: 'cocktails',
    categories: [
      {
        categoryName: 'Little Taste of Peru',
        foodItems: [
          {
            description: 'Pisco, Lemon, Lime, Egg White, Angostura.',
            title: 'Pisco Sour',
            price: 14.00
          },
          {
            description: 'Pisco, Lemon, Lime, Chinola, Egg White',
            title: 'Pisco Passion',
            price: 14.00
          },
          {
            description: 'Pisco, Lime, Basil, Ginger Beer, Angostura',
            title: 'Chilcano',
            price: 14.00
          },
          {
            description: 'Pisco, Lime, Elderflower Cordial, Orange Blossom, Mint, Club Soda',
            title: 'Don Alfredo',
            price: 14.00
          }
        ]
      },
      {
        categoryName: 'Herbal Cocktails',
        foodItems: [
          {
            description: 'Gin, Lime, Green Chanteuse, Maraschino',
            title: 'The Last Word',
            price: 14.00
          },
          {
            description: 'Boomsma, Lime, Pineapple',
            title: 'Boomsma Swizzle',
            price: 14.00
          },
          {
            description: 'Tequila, Mezcal, Lime, Cucumber, Boomsma, Serrano Tincture, Agave, Mint',
            title: 'Agua DeFuego',
            price: 14.00
          }
        ]
      },
      {
        categoryName: 'Fun And Different',
        foodItems: [
          {
            description: 'Cinnamon Toast Crunch Infused Gin, Lemon, Honey, Ginger',
            title: 'Gin For Breakfast',
            price: 14.00
          },
          {
            description: 'Wodka, Leche De Tigre',
            price: 15.00,
            title: 'Tigre Martini',
          }
        ]
      },
      {
        categoryName: 'Fruity But Balanced And Packs A Punch',
        foodItems: [
          {
            description: 'Gin, Lemon, Fraise, Maurin Bianco, Honey',
            title: 'Strawberry Honey High',
            price: 14.00
          },
          {
            description: 'Cachaca, Lime, Lemon, Apple Thyme Shrub, Saline',
            title: 'Apple Thyme Sour',
            price: 14.00
          },
          {
            description: 'Mezcal, Tequila Anejo, Guava, Lime, Rosemary Infused Agave, Dry Curacao',
            title: 'Crush On You',
            price: 14.00
          },
          {
            description: 'Gin, Grand Marnier, Mango, Maurin Bianco, Lemon, Ancho Reyes Chili, Coconut Milk',
            title: 'Grand Mango',
            price: 15.00
          },
          {
            description: 'Vodka, Soju, Lemon, Boomsma, Lemon, Watermelon Reduction',
            title: 'Summer Delight',
            price: 15.00
          }
        ]
      },
      {
        categoryName: 'Stirred ~ Boozy Spirit Forward Cocktails',
        foodItems: [
          {
            description: 'Rye, Maurin Quina, Fernet Branca, Demerara, Absinthe',
            title: 'Wall Street Stir',
            price: 14.00
          },
          {
            description: 'Bourbon, Nardini Amaro, Del Professor Dry Vermouth, Fiera, Peychaud Bitter',
            title: 'Lucky 13',
            price: 14.00
          },
          {
            description: 'Havanna Club White Rum, Bourbon, Banana Cordial, White Cacao, Del Professor Dry Vermouth, Coconut Water, Orange Bitters',
            title: 'The Moné',
            price: 14.00
          }
        ]
      }
    ]
  }
]