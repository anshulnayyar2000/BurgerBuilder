import React from "react";
import classes from "./Orders.module.css";
const Orders = (props) => {
  const ingredients = [];
  for (let ingredientsitem in props.ingredients) {
    ingredients.push({
      name: ingredientsitem,
      amount: props.ingredients[ingredientsitem]
    });
  }
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Orders}>
      <p>ingredients:{ingredientsOutput}</p>
      <p>
        Price:<strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Orders;
