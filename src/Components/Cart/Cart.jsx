import React, { useContext } from "react";
import { cartShowContext } from "../../App";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = () => {
  const { hideCartHandler } = useContext(cartShowContext);
  const cartItems = [{ id: "c1", name: "Sushi", price: 12.99 }].map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>99.99</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => hideCartHandler()}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
