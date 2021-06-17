import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { getAPI } from '../../helpers/api-util';

const AvailableMeals = () => {
  const [mealsAvailable, setMealsAvailable] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const mealData = await getAPI(
        'https://reactmeals-87d35-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );
      const mealDataArray = [];
      for (const key in mealData) {
        mealDataArray.push(mealData[key]);
      }
      setMealsAvailable(mealDataArray);
    };
    fetchMeals();
  }, []);
  let mealsList;
  if (mealsAvailable.length > 0) {
    mealsList = mealsAvailable.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
