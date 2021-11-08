import React from "react";

import HeaderCartIconButton from "./HeaderCartIconButton";
import mealsImage from "../../Assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartIconButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
