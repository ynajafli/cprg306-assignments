"use client";

import { useEffect, useState } from "react";


async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.log(error);
        return [];
    }
} 

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);
    
    async function loadMealIdeas() {
        if (!ingredient) {
            setMeals([]);
            return;
        }

        const results = await fetchMealIdeas(ingredient);
        setMeals(results);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div>
            <h3>Meal ideas for: {ingredient}</h3>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}