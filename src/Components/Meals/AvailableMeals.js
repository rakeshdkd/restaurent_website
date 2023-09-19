import React from "react";
import classes from "./AvailableMeals.module.css";
import Cards from "../UI/Cards";

const dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = dummy_meals.map((meal) => (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price}</div>
      </div>

      {/* Form div  */}
      <div className={classes.form}>
        <div>
          <label>Amount: </label>
          <input type="number" min='1' max='5' step='1' defaultValue='1'></input>
        </div>
        <div className={classes.form_button}>
          <button>+ Add</button>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      <section className={classes.meals}>
        <Cards>
          <ul>{mealsList}</ul>
        </Cards>
      </section>
    </>
  );
};

export default AvailableMeals;
