import axios from "../../axios-orders";
import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../Hoc/Aux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import ErrorHandler from "../../Hoc/ErrorHandler/ErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  };
  purchasable = (purchaseItem) => {
    let sum = Object.keys(purchaseItem)
      .map((item) => {
        return purchaseItem[item];
      })
      .reduce((sum, el) => {
        return el + sum;
      }, 0);
    return sum > 0;
  };

  componentWillMount = () => {
    console.log(this.props);
    // axios
    //   .get(
    //     "https://burgerbuildernayyar-default-rtdb.firebaseio.com/ingredients.json"
    //   )
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //   });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  continueHandler = () => {
   
    this.props.history.push("/Checkout");
  };
  render() {
    const disableButton = { ...this.props.ings };
    for (let key in disableButton) {
      disableButton[key] = disableButton[key] <= 0;
    }
    let Ordersummary = null;
    let burger = <Spinner />;
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            addIngredients={this.props.ingredientAdded}
            removeIngredients={this.props.ingredientRemove}
            disabled={disableButton}
            purchasable={this.purchasable(this.props.ings)}
            Ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Aux>
      );
      Ordersummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          modalClose={this.purchaseCancelHandler}
          continue={this.continueHandler}
        />
      );
    }
    if (this.state.loading) {
      OrderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClose={this.purchaseCancelHandler}
        >
          {Ordersummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ingredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientsName: ingName }),
    ingredientRemove: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientsName: ingName
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(BurgerBuilder, axios));
