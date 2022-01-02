import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosed = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  drawerToggleclicked=()=>{
    this.setState((prevState)=>{
       return{ showSideDrawer:!prevState.showSideDrawer}
    });
  }
  render() {
    return (
      <Aux>
        <ToolBar drawerToggleclicked={this.drawerToggleclicked}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosed}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
