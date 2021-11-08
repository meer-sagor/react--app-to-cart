import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import { cartShowContext } from "../../App";

import classes from "./HeaderCartIconButton.module.css";

const HeaderCartIconButton = (props) => {
  const { showCartHandler } = useContext(cartShowContext);
  return (
    <button className={classes.button} onClick={() => showCartHandler()}>
      <span className={classes.btn}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartIconButton;
