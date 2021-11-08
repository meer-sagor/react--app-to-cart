import React from "react";

import MealsItemForm from "./MealsItemForm";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price.toFixed()}</p>
      </div>
      <div>
        <MealsItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealsItem;
