'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals || []);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-800 rounded-md shadow-md w-full">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2 text-white">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No meal ideas found for {ingredient}.</p>
      )}
    </div>
  );
}
