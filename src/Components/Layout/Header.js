import React from "react";
import classes from  "./Header.module.css";
import foodImage from "../../Assests/Chinese food img.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>XOXO Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="Chinese food"/>
      </div>
    </>
  );
};

export default Header;
