"use client"; // Ensure it's a client-side component

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  // Structure drinks with categories
  const drinkCategories = [
    {
      category: 'Tropical Drinks',
      drinks: [
        {
          name: 'Tropical Breeze',
          icon: '/images/drink1.jpg', // Replace with your actual icon
          price: '$8.99',
          description: 'A refreshing mix of pineapple and coconut, served over ice. Perfect for a hot day at the beach.',
        },
        {
          name: 'Sea Breeze',
          icon: '/images/drink2.png', // Replace with your actual icon
          price: '$9.49',
          description: 'A smooth cocktail with vodka, cranberry, and lime. Sweet and tart!',
        },
      ],
    },
    {
      category: 'Cocktails',
      drinks: [
        {
          name: 'Sunset Margarita',
          icon: '/images/drink3.png', // Replace with your actual icon
          price: '$10.49',
          description: 'A zesty blend of tequila, lime, and orange, perfect for sunsets.',
        },
        {
          name: 'Mojito',
          icon: '/images/drink2.png', // Replace with your actual icon
          price: '$11.99',
          description: 'A refreshing mix of mint, rum, lime, and soda water.',
        },
      ],
    },
    {
      category: 'Smoothies',
      drinks: [
        {
          name: 'Mango Madness',
          icon: '/images/drink3.png', // Replace with your actual icon
          price: '$7.49',
          description: 'A sweet and tropical blend of mango, pineapple, and coconut milk.',
        },
      ],
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null); // State to track the expanded category

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index); // Toggle the category visibility
  };

  const [expandedDrink, setExpandedDrink] = useState<number | null>(null); // State to track the expanded drink

  const toggleDrinkDetails = (index: number) => {
    setExpandedDrink(expandedDrink === index ? null : index); // Toggle the drink details visibility
  };

  return (
    <div className="bg-neutral-black text-neutral-light min-h-screen py-2">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-primary-light mb-4">Our Drinks</h1>
        <p className="text-lg text-neutral-light">Discover our refreshing selection of drinks, perfect for any beach day!</p>
      </div>

      {/* Drink Categories */}
      <div className="container mx-auto px-6">
        {drinkCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6"> {/* Reduced margin for category */}
            {/* Category Name */}
            <div
              onClick={() => toggleCategory(categoryIndex)} // Click category to toggle its visibility
              className="cursor-pointer bg-neutral-dark p-4 rounded-lg mb-5 shadow-lg hover:bg-neutral-darker transform transition-all"
            >
              <h2 className="text-3xl font-bold text-primary-light">{category.category}</h2>
            </div>

            {/* Expandable Drinks List */}
            {expandedCategory === categoryIndex && (
              <div className="space-y-4"> {/* Reduced space between drinks */}
                {category.drinks.map((drink, drinkIndex) => (
                  <div
                    key={drinkIndex}
                    onClick={() => toggleDrinkDetails(drinkIndex)} // Click drink to toggle its details
                    className="bg-neutral-dark border-neutral-dark p-4 rounded-lg shadow-lg transform transition-all border-2 hover:border-accent hover:bg-neutral-darker cursor-pointer" // Made the entire card clickable
                  >
                    <div className="flex items-center mb-3"> {/* Reduced margin between image and text */}
                      <Image
                        src={drink.icon}
                        alt={drink.name}
                        width={56} // Adjust the width and height to your preference
                        height={56}
                        className="object-cover rounded-full mr-3"
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-primary-light">{drink.name}</h3>
                        <p className="text-xl text-highlight-light">{drink.price}</p>
                      </div>
                    </div>

                    {/* Drink Description (expandable) */}
                    {expandedDrink === drinkIndex && (
                      <div className="mt-2 text-neutral-light text-sm"> {/* Reduced margin on description */}
                        <p>{drink.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
