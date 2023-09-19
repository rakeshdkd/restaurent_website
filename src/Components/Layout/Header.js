import React from "react";
import classes from "./Header.module.css";
import foodImage from "../../Assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header} onClick={props.onShowCart}>
        <h1>XOXO Meals</h1>
        <HeaderCartButton onclick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Chinese food" />
      </div>
    </>
  );
};

export default Header;
