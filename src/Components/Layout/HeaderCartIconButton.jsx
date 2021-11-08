import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../Store/cart-context";
import { cartShowContext } from "../../App";

import classes from "./HeaderCartIconButton.module.css";

const HeaderCartIconButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { showCartHandler } = useContext(cartShowContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    console.log(item.amount);
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={() => showCartHandler()}>
      <span className={classes.btn}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartIconButton;
