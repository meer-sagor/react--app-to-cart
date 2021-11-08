import React, { useContext } from "react";

import MealsItemForm from "./MealsItemForm";

import CartContext from "../../../Store/cart-context";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price.toFixed(2)}</p>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
