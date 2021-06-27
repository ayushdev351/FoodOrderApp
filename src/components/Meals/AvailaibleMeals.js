import React from "react";
import styled from "styled-components";

import MealItem from "./MealItem.js";

const Data_Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99
  }
];

function AvailaibleMeals() {
  const mealsList = Data_Meals.map((Data_Meal) => (
    <MealItem
      id={Data_Meal.id}
      name={Data_Meal.name}
      description={Data_Meal.description}
      price={Data_Meal.price}
    />
  ));

  return (
    <Meals>
      <ul>{mealsList}</ul>
    </Meals>
  );
}

export default AvailaibleMeals;

const Meals = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: appear 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
