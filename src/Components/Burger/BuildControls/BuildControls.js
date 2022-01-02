import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const BuildControls = (props) => {
  const controls = [
    { label: "salad", type: "salad" },
    { label: "bacon", type: "bacon" },
    { label: "cheese", type: "cheese" },
    { label: "meat", type: "meat" }
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Total price:<strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          addItem={() => props.addIngredients(item.type)}
          disabled={props.disabled[item.type]}
          removeItem={() => props.removeIngredients(item.type)}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.Ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
