import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartIconButton.module.css";

const HeaderCartIconButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.btn}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartIconButton;
