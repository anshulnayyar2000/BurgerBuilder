import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} disabled={props.disabled} onClick={props.removeItem}>Less</button>
      <button className={classes.More} onClick={props.addItem}>More</button>
    </div>
  );
};

export default BuildControl;
