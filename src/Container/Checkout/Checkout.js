import React, { Component } from "react";
import CheckoutSummary from "../../Components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
export class Checkout extends Component {
  cancelHandler = () => {
    this.props.history.goBack();
  };
  continueHandler = () => {
    this.props.history.replace("/Checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.cancelHandler}
          checkoutContinue={this.continueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients
  };
};
export default connect(mapStateToProps)(Checkout);
