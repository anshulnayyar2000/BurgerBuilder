import React from "react";
import Aux from "../../../Hoc/Aux";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/BackDrop/BackDrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let attachedConst = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedConst = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedConst.join(" ")}>
        <div>MENU</div>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
