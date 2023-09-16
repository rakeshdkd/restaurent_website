import React from 'react'
import classes from './AvailableMeals.module.css'

const dummy_meals=[]

const AvailableMeals = () => {
    const mealsList =dummy_meals.map((meal)=><li>{meal.name}</li>)
  return (
    <>
<section className={classes.meals}>
    <ul>
        {mealsList}
    </ul>
</section>
    </>
  )
}

export default AvailableMeals