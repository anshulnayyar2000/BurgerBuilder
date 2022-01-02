import React, { Component } from "react";
import Aux from "../../../Hoc/Aux";
import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextprops,nextState){
    return nextprops.show !== this.props.show || nextprops.children!==this.props.children;
  }
  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal;
